/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IFile.ts" />
/// <reference path="..\schema\IWebPart.ts" />

module Pzl.Sites.Core.ObjectHandlers {
    module Helpers {
        export function GetFileUrlWithoutTokens(fileUrl: string, factory:Model.IContextFactoryInstance) {
            return fileUrl.replace(/{resources}/g, `${factory.siteServerRelativeUrl}/resources`)
                .replace(/{webpartgallery}/g, `${factory.siteServerRelativeUrl}/_catalogs/wp`);
        }
        export function GetWebPartXmlWithoutTokens(xml: string, factory: Model.IContextFactoryInstance) {
            return xml.replace(/{site}/g, factory.webServerRelativeUrl)
                .replace(/{sitecollection}/g, factory.siteServerRelativeUrl);
        }
        export function GetFolderFromFilePath(filePath: string) {
            var split = filePath.split("/");
            return split.splice(0, split.length - 1).join("/");
        }
        export function GetFilenameFromFilePath(filePath: string) {
            var split = filePath.split("/");
            return split[split.length - 1];
        }
        export function LastItemInArray(array: Array<any>) {
            return array[array.length - 1];
        }
    }

    function AddFileByUrl(dest: string, src: string, overwrite: boolean, contextFactory: Model.IContextFactoryInstance) {
        var def = jQuery.Deferred();

        Core.Log.Information("Files", `Creating file with Url '${dest}'`)

        var clientContext =contextFactory.ClientContext;
        var web =  contextFactory.Web;
        var sourceFile = Helpers.GetFileUrlWithoutTokens(src,contextFactory);
        var destFolder = Helpers.GetFolderFromFilePath(dest);
        var destFileName = Helpers.GetFilenameFromFilePath(dest);
        var folderServerRelativeUrl = `${contextFactory.webServerRelativeUrl}/${destFolder}`;
        var folder = web.getFolderByServerRelativeUrl(folderServerRelativeUrl);

        jQuery.get(sourceFile, (fileContent) => {
            var objCreationInformation = new SP.FileCreationInformation();
            objCreationInformation.set_overwrite(overwrite);
            objCreationInformation.set_url(destFileName);
            objCreationInformation.set_content(new SP.Base64EncodedByteArray());
            for (var i = 0; i < fileContent.length; i++) {
                objCreationInformation.get_content().append(fileContent.charCodeAt(i));
            }
            clientContext.load(folder.get_files().add(objCreationInformation));
            clientContext.executeQueryAsync(
                () => {
                    def.resolve();
                },
                (sender, args) => {
                    Core.Log.Information("Files", `Failed to create file with Url '${dest}'`)
                    Core.Log.Error("Files", `${args.get_message()}`)
                    def.resolve(sender, args);
                });
        })
        return def.promise();
    }
    function RemoveWebPartsFromFileIfSpecified(clientContext: SP.ClientContext, limitedWebPartManager: SP.WebParts.LimitedWebPartManager, shouldRemoveExisting) {
        var def = jQuery.Deferred();

        if (!shouldRemoveExisting) {
            def.resolve();
            return def.promise();
        }

        var existingWebParts = limitedWebPartManager.get_webParts();

        clientContext.load(existingWebParts);
        clientContext.executeQueryAsync(
            () => {
                existingWebParts.get_data().forEach((wp) => {
                    wp.deleteWebPart();
                })
                clientContext.load(existingWebParts);
                clientContext.executeQueryAsync(
                    () => {
                        def.resolve();
                    },
                    () => {
                        def.resolve();
                    });
            },
            () => {
                def.resolve();
            }
        );

        return def.promise();
    }
    function GetWebPartXml(webParts: Array<Schema.IWebPart>) {
        var def = jQuery.Deferred();

        var promises = [];
        webParts.forEach((wp, index) => {
            if (wp.Contents.FileUrl) {
                promises.push((() => {
                    var def = jQuery.Deferred();
                    var fileUrl = Helpers.GetFileUrlWithoutTokens(wp.Contents.FileUrl,this.cfact);
                    jQuery.get(fileUrl, (xml) => {
                        webParts[index].Contents.Xml = xml;
                        def.resolve();
                    }).fail((sender, args) => {
                        def.resolve(sender, args);
                    });
                    return def.promise();
                })());
            }
        });

        jQuery.when.apply(jQuery, promises).done(() => {
            def.resolve(webParts);
        });

        return def.promise();
    }
    function AddWebPartsToWebPartPage(dest: string, src: string, webParts: Array<Schema.IWebPart>, shouldRemoveExisting: Boolean, contextFactory: Model.IContextFactoryInstance) {
        var def = jQuery.Deferred();

        var clientContext = contextFactory.ClientContext;
        var web = contextFactory.Web;
        var fileUrl = Helpers.LastItemInArray(src.split("/"));
        var fileServerRelativeUrl = `${contextFactory.webServerRelativeUrl}/${dest}`;
        var file = web.getFileByServerRelativeUrl(fileServerRelativeUrl);

        clientContext.load(file);
        clientContext.executeQueryAsync(
            () => {
                var limitedWebPartManager = file.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);

                RemoveWebPartsFromFileIfSpecified(clientContext, limitedWebPartManager, shouldRemoveExisting).then(() => {
                    GetWebPartXml(webParts).then((webParts: Array<Schema.IWebPart>) => {
                        webParts.forEach(wp => {
                            if (!wp.Contents.Xml) return;
                            Core.Log.Information("Files Web Parts", `Adding web part '${wp.Title}' to zone '${wp.Zone}' for file with URL '${dest}'`);
                            var oWebPartDefinition = limitedWebPartManager.importWebPart(Helpers.GetWebPartXmlWithoutTokens(wp.Contents.Xml,contextFactory));
                            var oWebPart = oWebPartDefinition.get_webPart();
                            limitedWebPartManager.addWebPart(oWebPart, wp.Zone, wp.Order);
                        });

                        clientContext.executeQueryAsync(
                            () => {
                                def.resolve();
                            },
                            (sender, args) => {
                                Core.Log.Information("Files Web Parts", `Provisioning of objects failed for file with Url '${fileUrl}'`)
                                Core.Log.Error("Files Web Parts", `${args.get_message()}`)
                                def.resolve(sender, args);
                            });
                    });
                });
            },
            (sender, args) => {
                Core.Log.Information("Files Web Parts", `Provisioning of objects failed for file with Url '${fileUrl}'`)
                Core.Log.Error("Files Web Parts", `${args.get_message()}`)
                def.resolve(sender, args);
            }
        );

        return def.promise();
    }
    function ApplyFileProperties(dest: string, fileProperties: Object, contextFactory: Model.IContextFactoryInstance) {
        var def = jQuery.Deferred();
        var clientContext =contextFactory.ClientContext;
        var web =  contextFactory.Web;
        var fileServerRelativeUrl = `${contextFactory.webServerRelativeUrl}/${dest}`;
        var file = web.getFileByServerRelativeUrl(fileServerRelativeUrl);
        var listItemAllFields = file.get_listItemAllFields();

        Core.Log.Information("Files Properties", `Setting properties for file with URL '${dest}'`);

        for (var key in fileProperties) {
            Core.Log.Information("Files Properties", `Setting property '${key}' = '${fileProperties[key]}' for file with URL '${dest}'`);
            listItemAllFields.set_item(key, fileProperties[key]);
        }

        listItemAllFields.update();
        clientContext.executeQueryAsync(
            () => {
                def.resolve();
            },
            (sender, args) => {
                Core.Log.Information("Files Properties", `Provisioning of objects failed for file with Url '${dest}'`)
                Core.Log.Error("Files Properties", `${args.get_message()}`)
                def.resolve(sender, args);
            }
        );

        return def.promise();
    }
    function GetViewFromCollectionByUrl(viewCollection: SP.ViewCollection, url: string, contextFactory: Model.IContextFactoryInstance) {
        var serverRelativeUrl = `${contextFactory.webServerRelativeUrl}/${url}`;
        var viewCollectionEnumerator = viewCollection.getEnumerator();
        while (viewCollectionEnumerator.moveNext()) {
            var view = viewCollectionEnumerator.get_current();
            if (view.get_serverRelativeUrl().toString().toLowerCase() === serverRelativeUrl.toLowerCase()) {
                return view;
            }
        }
        return null;
    }
    function ModifyHiddenViews(objects: Array<Schema.IFile>, contextFactory: Model.IContextFactoryInstance) {
        Core.Log.Information("Hidden Views", `Code execution scope started`)
        var def = jQuery.Deferred();
        var clientContext =contextFactory.ClientContext;
        var web =  contextFactory.Web;
        var mapping = {};
        var lists: Array<SP.List> = [];
        var listViewCollections: Array<SP.ViewCollection> = [];

        objects.forEach((obj) => {
            if (!obj.Views) return;
            obj.Views.forEach((v) => {
                mapping[v.List] = mapping[v.List] || [];
                mapping[v.List].push(jQuery.extend(v, { "Url": obj.Folder }));
            });
        });
        Object.keys(mapping).forEach((l, index) => {
            lists.push(web.get_lists().getByTitle(l));
            listViewCollections.push(web.get_lists().getByTitle(l).get_views());
            clientContext.load(lists[index]);
            clientContext.load(listViewCollections[index]);
        });

        clientContext.executeQueryAsync(
            () => {
                Object.keys(mapping).forEach((l, index) => {
                    Core.Log.Information("Hidden Views", `Modifying list views for list '${l}'`);
                    var views: Array<Schema.HiddenView> = mapping[l];
                    var list = lists[index];
                    var viewCollection = listViewCollections[index];
                    views.forEach((v) => {
                        var view = GetViewFromCollectionByUrl(viewCollection, v.Url, contextFactory);
                        if(view == null) return;
                        Core.Log.Information("Hidden Views", `Modifying list view with Url '${v.Url}' for list '${l}'`);
                        if (v.Paged) { view.set_paged(v.Paged); }
                        if (v.Query) { view.set_viewQuery(v.Query); }
                        if (v.RowLimit) { view.set_rowLimit(v.RowLimit); }
                        if (v.ViewFields && v.ViewFields.length > 0) {
                            var columns = view.get_viewFields();
                            columns.removeAll();
                            v.ViewFields.forEach((vf) => {
                                columns.add(vf);
                            });
                        }
                        view.update();
                    });
                    clientContext.load(viewCollection);
                    list.update();
                });
                clientContext.executeQueryAsync(
                    () => {
                        Core.Log.Information("Hidden Views", `Code execution scope ended`);  
                        def.resolve();                      
                    },
                    (sender, args) => {
                        Core.Log.Error("Hidden Views", `Error: ${args.get_message()}`)
                        Core.Log.Information("Hidden Views", `Code execution scope ended`);
                        def.resolve(sender, args);
                    });
            },
            (sender, args) => {
                Core.Log.Error("Hidden Views", `Error: ${args.get_message()}`)
                Core.Log.Information("Hidden Views", `Code execution scope ended`);
                def.resolve(sender, args);
            }
        );
         
        return def.promise();
    }

    export class Files extends Model.ObjectHandlerBase {
        constructor() {
            super("Files")
        }
        ProvisionObjects(objects: Array<Schema.IFile>) {
            Core.Log.Information(this.name, `Code execution scope started`);
            var def = jQuery.Deferred();
            var clientContext =this.contextFactory.ClientContext;
            var promises = [];
            objects.forEach(function(obj) {
                AddFileByUrl(obj.Folder, obj.Src, obj.Overwrite, this.contextFactory);
            });
            jQuery.when.apply(jQuery, promises).done(() => {
                var promises = [];
                objects.forEach((obj) => {
                    if (obj.WebParts && obj.WebParts.length > 0) {
                        promises.push(AddWebPartsToWebPartPage(obj.Folder, obj.Src, obj.WebParts, obj.RemoveExistingWebParts, this.contextFactory));
                    }
                });

                jQuery.when.apply(jQuery, promises).done(() => {
                    var promises = [];
                    objects.forEach((obj) => {
                        if (obj.Properties && Object.keys(obj.Properties).length > 0) {
                            promises.push(ApplyFileProperties(obj.Folder, obj.Properties, this.contextFactory));
                        }
                    });


                    jQuery.when.apply(jQuery, promises).done(() => {
                        ModifyHiddenViews(objects, this.contextFactory).then(() => {
                            Core.Log.Information(this.name, `Code execution scope ended`);
                            def.resolve();
                        });
                    });
                });
            });


            return def.promise();
        }
        ReadObjects(objects: Array<Schema.IFile>) {
            Core.Log.Information(this.name, `Code execution scope started`);
            var def = jQuery.Deferred();
            objects = [];
            Core.Log.Warning(this.name, `Files cannot read`);
            def.resolve(objects);
            return def.promise();
        }
    }
}
/*

[
    {
      "Dest": "SitePages/Homepage.aspx",
      "Overwrite": true,
      "Src": "{resources}/SitePages/Homepage.txt",
      "RemoveExistingWebParts": true,
      "Properties": {
        "ContentTypeId": "0x010109010092214CADC5FC4262A177C632F516412E"
      },
      "WebParts": [
        {
          "Title": "Image Viewer",
          "Zone": "LeftColumn",
          "Order": 0,
          "Contents": {
            "Xml": "<?xml version=\"1.0\" encoding=\"utf-8\"?><WebPart xmlns:xsd=\"http://www.w3.org/2001/XMLSchema\" xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\" xmlns=\"http://schemas.microsoft.com/WebPart/v2\"><Title>Image Viewer</Title><FrameType>None</FrameType><Assembly>Microsoft.SharePoint, Version=16.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c</Assembly><TypeName>Microsoft.SharePoint.WebPartPages.ImageWebPart</TypeName><ImageLink xmlns=\"http://schemas.microsoft.com/WebPart/v2/Image\" /><AlternativeText xmlns=\"http://schemas.microsoft.com/WebPart/v2/Image\" /><VerticalAlignment xmlns=\"http://schemas.microsoft.com/WebPart/v2/Image\">Middle</VerticalAlignment><HorizontalAlignment xmlns=\"http://schemas.microsoft.com/WebPart/v2/Image\">Center</HorizontalAlignment><BackgroundColor xmlns=\"http://schemas.microsoft.com/WebPart/v2/Image\">transparent</BackgroundColor></WebPart>"
          }
        },
        {
          "Title": "SiteFeed",
          "Zone": "LeftColumn",
          "Order": 1,
          "Contents": {
            "FileUrl": "{webpartgallery}/SiteFeed.dwp"
          }
        },
        {
          "Title": "MyWebPart",
          "Zone": "RightColumn",
          "Order": 0,
          "Contents": {
            "FileUrl": "{resources}/WebParts/MyWebPart.txt"
          }
        }
      ]
    }
  ]
*/