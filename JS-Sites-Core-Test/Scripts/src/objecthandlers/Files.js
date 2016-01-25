/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IFile.ts" />
/// <reference path="..\schema\IWebPart.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Helpers;
                (function (Helpers) {
                    function GetFileUrlWithoutTokens(fileUrl) {
                        return fileUrl.replace(/{resources}/g, _spPageContextInfo.siteServerRelativeUrl + "/resources")
                            .replace(/{webpartgallery}/g, _spPageContextInfo.siteServerRelativeUrl + "/_catalogs/wp");
                    }
                    Helpers.GetFileUrlWithoutTokens = GetFileUrlWithoutTokens;
                    function GetWebPartXmlWithoutTokens(xml) {
                        return xml.replace(/{site}/g, _spPageContextInfo.webServerRelativeUrl)
                            .replace(/{sitecollection}/g, _spPageContextInfo.siteServerRelativeUrl);
                    }
                    Helpers.GetWebPartXmlWithoutTokens = GetWebPartXmlWithoutTokens;
                    function GetFolderFromFilePath(filePath) {
                        var split = filePath.split("/");
                        return split.splice(0, split.length - 1).join("/");
                    }
                    Helpers.GetFolderFromFilePath = GetFolderFromFilePath;
                    function GetFilenameFromFilePath(filePath) {
                        var split = filePath.split("/");
                        return split[split.length - 1];
                    }
                    Helpers.GetFilenameFromFilePath = GetFilenameFromFilePath;
                    function LastItemInArray(array) {
                        return array[array.length - 1];
                    }
                    Helpers.LastItemInArray = LastItemInArray;
                })(Helpers || (Helpers = {}));
                function AddFileByUrl(dest, src, overwrite) {
                    var def = jQuery.Deferred();
                    Core.Log.Information("Files", "Creating file with Url '" + dest + "'");
                    var clientContext = SP.ClientContext.get_current();
                    var web = clientContext.get_web();
                    var sourceFile = Helpers.GetFileUrlWithoutTokens(src);
                    var destFolder = Helpers.GetFolderFromFilePath(dest);
                    var destFileName = Helpers.GetFilenameFromFilePath(dest);
                    var folderServerRelativeUrl = _spPageContextInfo.webServerRelativeUrl + "/" + destFolder;
                    var folder = web.getFolderByServerRelativeUrl(folderServerRelativeUrl);
                    jQuery.get(sourceFile, function (fileContent) {
                        var objCreationInformation = new SP.FileCreationInformation();
                        objCreationInformation.set_overwrite(overwrite);
                        objCreationInformation.set_url(destFileName);
                        objCreationInformation.set_content(new SP.Base64EncodedByteArray());
                        for (var i = 0; i < fileContent.length; i++) {
                            objCreationInformation.get_content().append(fileContent.charCodeAt(i));
                        }
                        clientContext.load(folder.get_files().add(objCreationInformation));
                        clientContext.executeQueryAsync(function () {
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Information("Files", "Failed to create file with Url '" + dest + "'");
                            Core.Log.Error("Files", "" + args.get_message());
                            def.resolve(sender, args);
                        });
                    });
                    return def.promise();
                }
                function RemoveWebPartsFromFileIfSpecified(clientContext, limitedWebPartManager, shouldRemoveExisting) {
                    var def = jQuery.Deferred();
                    if (!shouldRemoveExisting) {
                        def.resolve();
                        return def.promise();
                    }
                    var existingWebParts = limitedWebPartManager.get_webParts();
                    clientContext.load(existingWebParts);
                    clientContext.executeQueryAsync(function () {
                        existingWebParts.get_data().forEach(function (wp) {
                            wp.deleteWebPart();
                        });
                        clientContext.load(existingWebParts);
                        clientContext.executeQueryAsync(function () {
                            def.resolve();
                        }, function () {
                            def.resolve();
                        });
                    }, function () {
                        def.resolve();
                    });
                    return def.promise();
                }
                function GetWebPartXml(webParts) {
                    var def = jQuery.Deferred();
                    var promises = [];
                    webParts.forEach(function (wp, index) {
                        if (wp.Contents.FileUrl) {
                            promises.push((function () {
                                var def = jQuery.Deferred();
                                var fileUrl = Helpers.GetFileUrlWithoutTokens(wp.Contents.FileUrl);
                                jQuery.get(fileUrl, function (xml) {
                                    webParts[index].Contents.Xml = xml;
                                    def.resolve();
                                }).fail(function (sender, args) {
                                    def.resolve(sender, args);
                                });
                                return def.promise();
                            })());
                        }
                    });
                    jQuery.when.apply(jQuery, promises).done(function () {
                        def.resolve(webParts);
                    });
                    return def.promise();
                }
                function AddWebPartsToWebPartPage(dest, src, webParts, shouldRemoveExisting) {
                    var def = jQuery.Deferred();
                    var clientContext = SP.ClientContext.get_current();
                    var web = clientContext.get_web();
                    var fileUrl = Helpers.LastItemInArray(src.split("/"));
                    var fileServerRelativeUrl = _spPageContextInfo.webServerRelativeUrl + "/" + dest;
                    var file = web.getFileByServerRelativeUrl(fileServerRelativeUrl);
                    clientContext.load(file);
                    clientContext.executeQueryAsync(function () {
                        var limitedWebPartManager = file.getLimitedWebPartManager(SP.WebParts.PersonalizationScope.shared);
                        RemoveWebPartsFromFileIfSpecified(clientContext, limitedWebPartManager, shouldRemoveExisting).then(function () {
                            GetWebPartXml(webParts).then(function (webParts) {
                                webParts.forEach(function (wp) {
                                    if (!wp.Contents.Xml)
                                        return;
                                    Core.Log.Information("Files Web Parts", "Adding web part '" + wp.Title + "' to zone '" + wp.Zone + "' for file with URL '" + dest + "'");
                                    var oWebPartDefinition = limitedWebPartManager.importWebPart(Helpers.GetWebPartXmlWithoutTokens(wp.Contents.Xml));
                                    var oWebPart = oWebPartDefinition.get_webPart();
                                    limitedWebPartManager.addWebPart(oWebPart, wp.Zone, wp.Order);
                                });
                                clientContext.executeQueryAsync(function () {
                                    def.resolve();
                                }, function (sender, args) {
                                    Core.Log.Information("Files Web Parts", "Provisioning of objects failed for file with Url '" + fileUrl + "'");
                                    Core.Log.Error("Files Web Parts", "" + args.get_message());
                                    def.resolve(sender, args);
                                });
                            });
                        });
                    }, function (sender, args) {
                        Core.Log.Information("Files Web Parts", "Provisioning of objects failed for file with Url '" + fileUrl + "'");
                        Core.Log.Error("Files Web Parts", "" + args.get_message());
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                function ApplyFileProperties(dest, fileProperties) {
                    var def = jQuery.Deferred();
                    var clientContext = SP.ClientContext.get_current();
                    var web = clientContext.get_web();
                    var fileServerRelativeUrl = _spPageContextInfo.webServerRelativeUrl + "/" + dest;
                    var file = web.getFileByServerRelativeUrl(fileServerRelativeUrl);
                    var listItemAllFields = file.get_listItemAllFields();
                    Core.Log.Information("Files Properties", "Setting properties for file with URL '" + dest + "'");
                    for (var key in fileProperties) {
                        Core.Log.Information("Files Properties", "Setting property '" + key + "' = '" + fileProperties[key] + "' for file with URL '" + dest + "'");
                        listItemAllFields.set_item(key, fileProperties[key]);
                    }
                    listItemAllFields.update();
                    clientContext.executeQueryAsync(function () {
                        def.resolve();
                    }, function (sender, args) {
                        Core.Log.Information("Files Properties", "Provisioning of objects failed for file with Url '" + dest + "'");
                        Core.Log.Error("Files Properties", "" + args.get_message());
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                function GetViewFromCollectionByUrl(viewCollection, url) {
                    var serverRelativeUrl = _spPageContextInfo.webServerRelativeUrl + "/" + url;
                    var viewCollectionEnumerator = viewCollection.getEnumerator();
                    while (viewCollectionEnumerator.moveNext()) {
                        var view = viewCollectionEnumerator.get_current();
                        if (view.get_serverRelativeUrl().toString().toLowerCase() === serverRelativeUrl.toLowerCase()) {
                            return view;
                        }
                    }
                    return null;
                }
                function ModifyHiddenViews(objects) {
                    Core.Log.Information("Hidden Views", "Code execution scope started");
                    var def = jQuery.Deferred();
                    var clientContext = SP.ClientContext.get_current();
                    var web = clientContext.get_web();
                    var mapping = {};
                    var lists = [];
                    var listViewCollections = [];
                    objects.forEach(function (obj) {
                        if (!obj.Views)
                            return;
                        obj.Views.forEach(function (v) {
                            mapping[v.List] = mapping[v.List] || [];
                            mapping[v.List].push(jQuery.extend(v, { "Url": obj.Dest }));
                        });
                    });
                    Object.keys(mapping).forEach(function (l, index) {
                        lists.push(web.get_lists().getByTitle(l));
                        listViewCollections.push(web.get_lists().getByTitle(l).get_views());
                        clientContext.load(lists[index]);
                        clientContext.load(listViewCollections[index]);
                    });
                    clientContext.executeQueryAsync(function () {
                        Object.keys(mapping).forEach(function (l, index) {
                            Core.Log.Information("Hidden Views", "Modifying list views for list '" + l + "'");
                            var views = mapping[l];
                            var list = lists[index];
                            var viewCollection = listViewCollections[index];
                            views.forEach(function (v) {
                                var view = GetViewFromCollectionByUrl(viewCollection, v.Url);
                                if (view == null)
                                    return;
                                Core.Log.Information("Hidden Views", "Modifying list view with Url '" + v.Url + "' for list '" + l + "'");
                                if (v.Paged) {
                                    view.set_paged(v.Paged);
                                }
                                if (v.Query) {
                                    view.set_viewQuery(v.Query);
                                }
                                if (v.RowLimit) {
                                    view.set_rowLimit(v.RowLimit);
                                }
                                if (v.ViewFields && v.ViewFields.length > 0) {
                                    var columns = view.get_viewFields();
                                    columns.removeAll();
                                    v.ViewFields.forEach(function (vf) {
                                        columns.add(vf);
                                    });
                                }
                                view.update();
                            });
                            clientContext.load(viewCollection);
                            list.update();
                        });
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information("Hidden Views", "Code execution scope ended");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Error("Hidden Views", "Error: " + args.get_message());
                            Core.Log.Information("Hidden Views", "Code execution scope ended");
                            def.resolve(sender, args);
                        });
                    }, function (sender, args) {
                        Core.Log.Error("Hidden Views", "Error: " + args.get_message());
                        Core.Log.Information("Hidden Views", "Code execution scope ended");
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                var Files = (function (_super) {
                    __extends(Files, _super);
                    function Files() {
                        _super.call(this, "Files");
                    }
                    Files.prototype.ProvisionObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var promises = [];
                        objects.forEach(function (obj) {
                            AddFileByUrl(obj.Dest, obj.Src, obj.Overwrite);
                        });
                        jQuery.when.apply(jQuery, promises).done(function () {
                            var promises = [];
                            objects.forEach(function (obj) {
                                if (obj.WebParts && obj.WebParts.length > 0) {
                                    promises.push(AddWebPartsToWebPartPage(obj.Dest, obj.Src, obj.WebParts, obj.RemoveExistingWebParts));
                                }
                            });
                            jQuery.when.apply(jQuery, promises).done(function () {
                                var promises = [];
                                objects.forEach(function (obj) {
                                    if (obj.Properties && Object.keys(obj.Properties).length > 0) {
                                        promises.push(ApplyFileProperties(obj.Dest, obj.Properties));
                                    }
                                });
                                jQuery.when.apply(jQuery, promises).done(function () {
                                    ModifyHiddenViews(objects).then(function () {
                                        Core.Log.Information(_this.name, "Code execution scope ended");
                                        def.resolve();
                                    });
                                });
                            });
                        });
                        return def.promise();
                    };
                    return Files;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Files = Files;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
