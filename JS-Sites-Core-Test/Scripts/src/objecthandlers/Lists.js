/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IListInstance.ts" />
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
                function EnsureLocationBasedMetadataDefaultsReceiver(clientContext, list) {
                    var receiverName = "LocationBasedMetadataDefaultsReceiver ItemAdded";
                    var def = jQuery.Deferred();
                    var eventReceivers = list.get_eventReceivers();
                    Core.Log.Information("Lists Event Receivers", "Adding eventreceiver '" + receiverName + "' to list '" + list.get_title() + "'");
                    var eventRecCreationInfo = new SP.EventReceiverDefinitionCreationInformation();
                    eventRecCreationInfo.set_receiverName(receiverName);
                    eventRecCreationInfo.set_synchronization(1);
                    eventRecCreationInfo.set_sequenceNumber(1000);
                    eventRecCreationInfo.set_receiverAssembly('Microsoft.Office.DocumentManagement, Version=15.0.0.0, Culture=neutral, PublicKeyToken=71e9bce111e9429c');
                    eventRecCreationInfo.set_receiverClass('Microsoft.Office.DocumentManagement.LocationBasedMetadataDefaultsReceiver');
                    eventRecCreationInfo.set_eventType(SP.EventReceiverType.itemAdded);
                    eventReceivers.add(eventRecCreationInfo);
                    list.update();
                    clientContext.executeQueryAsync(function () {
                        def.resolve();
                    }, function (sender, args) {
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                function CreateFolders(clientContext, list, listUrl, folders) {
                    Core.Log.Information("Lists Folders", "Code execution scope started");
                    var def = jQuery.Deferred();
                    var listRelativeUrl = _spPageContextInfo.webServerRelativeUrl + "/" + listUrl;
                    var rootFolder = clientContext.get_web().getFolderByServerRelativeUrl(listRelativeUrl);
                    var metadataDefaults = "<MetadataDefaults>";
                    var setMetadataDefaults = false;
                    folders.forEach(function (f) {
                        var folderUrl = listRelativeUrl + "/" + f.Name;
                        Core.Log.Information("Lists Folders", "Creating folder '" + folderUrl + "'");
                        rootFolder.get_folders().add(folderUrl);
                        if (f.DefaultValues) {
                            Core.Log.Information("Lists Folders", "Setting default metadata for folder '" + folderUrl + "'");
                            var keys = Object.keys(f.DefaultValues).length;
                            if (keys > 0) {
                                metadataDefaults += "<a href='" + listRelativeUrl + "/" + f.Name + "'>";
                                Object.keys(f.DefaultValues).forEach(function (key) { metadataDefaults += "<DefaultValue FieldName=\"" + key + "\">" + f.DefaultValues[key] + "</DefaultValue>"; });
                                metadataDefaults += "</a>";
                            }
                            setMetadataDefaults = true;
                        }
                    });
                    metadataDefaults += "</MetadataDefaults>";
                    if (setMetadataDefaults) {
                        var metadataDefaultsFileCreateInfo = new SP.FileCreationInformation();
                        metadataDefaultsFileCreateInfo.set_url(listRelativeUrl + "/Forms/client_LocationBasedDefaults.html");
                        metadataDefaultsFileCreateInfo.set_content(new SP.Base64EncodedByteArray());
                        metadataDefaultsFileCreateInfo.set_overwrite(true);
                        for (var i = 0; i < metadataDefaults.length; i++) {
                            metadataDefaultsFileCreateInfo.get_content().append(metadataDefaults.charCodeAt(i));
                        }
                        rootFolder.get_files().add(metadataDefaultsFileCreateInfo);
                        EnsureLocationBasedMetadataDefaultsReceiver(clientContext, list).then(function () {
                            clientContext.executeQueryAsync(function () {
                                def.resolve();
                            }, function (sender, args) {
                                def.resolve(sender, args);
                            });
                        });
                    }
                    else {
                        clientContext.executeQueryAsync(function () {
                            def.resolve();
                        }, function (sender, args) {
                            def.resolve(sender, args);
                        });
                    }
                    return def.promise();
                }
                ObjectHandlers.CreateFolders = CreateFolders;
                function ApplyContentTypeBindings(clientContext, lists, objects) {
                    Core.Log.Information("Lists Content Types", "Code execution scope started");
                    var def = jQuery.Deferred();
                    var webCts = clientContext.get_site().get_rootWeb().get_contentTypes();
                    lists.forEach(function (l, index) {
                        if (!objects[index].ContentTypeBindings)
                            return;
                        Core.Log.Information("Lists Content Types", "Enabled content types for list '" + l.get_title() + "'");
                        l.set_contentTypesEnabled(true);
                        l.update();
                    });
                    clientContext.load(webCts);
                    clientContext.executeQueryAsync(function () {
                        lists.forEach(function (l, index) {
                            var obj = objects[index];
                            if (!obj.ContentTypeBindings)
                                return;
                            obj.ContentTypeBindings.forEach(function (ctb) {
                                Core.Log.Information("Lists Content Types", "Adding content type '" + ctb.ContentTypeId + "' to list '" + l.get_title() + "'");
                                l.get_contentTypes().addExistingContentType(webCts.getById(ctb.ContentTypeId));
                            });
                            l.update();
                        });
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information("Lists Content Types", "Code execution scope ended");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Error("Lists Content Types", "Error: " + args.get_message());
                            Core.Log.Information("Lists Content Types", "Code execution scope ended");
                            def.resolve(sender, args);
                        });
                    }, function (sender, args) {
                        Core.Log.Error("Lists Content Types", "Error: " + args.get_message());
                        Core.Log.Information("Lists Content Types", "Code execution scope ended");
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                ObjectHandlers.ApplyContentTypeBindings = ApplyContentTypeBindings;
                function ApplyListSecurity(clientContext, lists, objects) {
                    Core.Log.Information("Lists Security", "Code execution scope started");
                    var def = jQuery.Deferred();
                    lists.forEach(function (l, index) {
                        var obj = objects[index];
                        if (!obj.Security)
                            return;
                        if (obj.Security.BreakRoleInheritance) {
                            Core.Log.Information("Lists Security", "Breaking Role Inheritance for list '" + l.get_title() + "'. CopyRoleAssignments = '" + obj.Security.CopyRoleAssignments + "', ClearSubscopes = '" + obj.Security.ClearSubscopes + "'");
                            l.breakRoleInheritance(obj.Security.CopyRoleAssignments, obj.Security.ClearSubscopes);
                            l.update();
                            clientContext.load(l.get_roleAssignments());
                        }
                    });
                    var web = clientContext.get_web();
                    var allProperties = web.get_allProperties();
                    var siteGroups = web.get_siteGroups();
                    var roleDefinitions = web.get_roleDefinitions();
                    clientContext.load(allProperties);
                    clientContext.load(roleDefinitions);
                    clientContext.executeQueryAsync(function () {
                        lists.forEach(function (l, index) {
                            var obj = objects[index];
                            if (!obj.Security)
                                return;
                            obj.Security.RoleAssignments.forEach(function (ra) {
                                var roleDef = null;
                                if (typeof ra.RoleDefinition == "number") {
                                    roleDef = roleDefinitions.getById(ra.RoleDefinition);
                                }
                                else {
                                    roleDef = roleDefinitions.getByName(ra.RoleDefinition);
                                }
                                var roleBindings = SP.RoleDefinitionBindingCollection.newObject(clientContext);
                                roleBindings.add(roleDef);
                                var principal = null;
                                if (ra.Principal.match(/\{[A-Za-z]*\}+/g)) {
                                    var token = ra.Principal.substring(1, ra.Principal.length - 1);
                                    var groupId = allProperties.get_fieldValues()[("vti_" + token)];
                                    principal = siteGroups.getById(groupId);
                                }
                                else {
                                    principal = siteGroups.getByName(principal);
                                }
                                l.get_roleAssignments().add(principal, roleBindings);
                            });
                            l.update();
                            Core.Log.Information("Lists Security", "Role assignments applied for list '" + l.get_title() + "'");
                        });
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information("Lists Security", "Code execution scope ended");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Error("Lists Security", "Error: " + args.get_message());
                            Core.Log.Information("Lists Security", "Code execution scope ended");
                            def.resolve(sender, args);
                        });
                    }, function (sender, args) {
                        Core.Log.Error("Lists Security", "Error: " + args.get_message());
                        Core.Log.Information("Lists Security", "Code execution scope ended");
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                ObjectHandlers.ApplyListSecurity = ApplyListSecurity;
                function GetViewFromCollectionByUrl(viewCollection, url) {
                    var view = jQuery.grep(viewCollection.get_data(), function (v) {
                        return v.get_serverRelativeUrl() == _spPageContextInfo.siteServerRelativeUrl + "/" + url;
                    });
                    return view ? view[0] : null;
                }
                function CreateViews(clientContext, lists, objects) {
                    Core.Log.Information("Lists Views", "Code execution scope started");
                    var def = jQuery.Deferred();
                    var listViewCollections = [];
                    lists.forEach(function (l, index) {
                        listViewCollections.push(l.get_views());
                        clientContext.load(listViewCollections[index]);
                    });
                    clientContext.executeQueryAsync(function () {
                        lists.forEach(function (l, index) {
                            var obj = objects[index];
                            if (!obj.Views)
                                return;
                            listViewCollections.push(l.get_views());
                            clientContext.load(listViewCollections[index]);
                            obj.Views.forEach(function (v) {
                                var viewExists = jQuery.grep(listViewCollections[index].get_data(), function (ev) {
                                    return ev.get_title() == v.Title;
                                }).length > 0;
                                if (viewExists) {
                                    var view = listViewCollections[index].getByTitle(v.Title);
                                    Core.Log.Information("Lists Views", "Updating existing view '" + v.Title + "' for list '" + l.get_title() + "'");
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
                                }
                                else {
                                    Core.Log.Information("Lists Views", "Adding view '" + v.Title + "' to list '" + l.get_title() + "'");
                                    var viewCreationInformation = new SP.ViewCreationInformation();
                                    if (v.Title) {
                                        viewCreationInformation.set_title(v.Title);
                                    }
                                    if (v.PersonalView) {
                                        viewCreationInformation.set_personalView(v.PersonalView);
                                    }
                                    if (v.Paged) {
                                        viewCreationInformation.set_paged(v.Paged);
                                    }
                                    if (v.Query) {
                                        viewCreationInformation.set_query(v.Query);
                                    }
                                    if (v.RowLimit) {
                                        viewCreationInformation.set_rowLimit(v.RowLimit);
                                    }
                                    if (v.SetAsDefaultView) {
                                        viewCreationInformation.set_setAsDefaultView(v.SetAsDefaultView);
                                    }
                                    if (v.ViewFields) {
                                        viewCreationInformation.set_viewFields(v.ViewFields);
                                    }
                                    if (v.ViewTypeKind) {
                                        viewCreationInformation.set_viewTypeKind(SP.ViewType.html);
                                    }
                                    l.get_views().add(viewCreationInformation);
                                    l.update();
                                }
                                clientContext.load(l.get_views());
                            });
                        });
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information("Lists Views", "Code execution scope ended");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Error("Lists Views", "Error: " + args.get_message());
                            Core.Log.Information("Lists Views", "Code execution scope ended");
                            def.resolve(sender, args);
                        });
                    }, function (sender, args) {
                        Core.Log.Error("Lists Views", "Error: " + args.get_message());
                        Core.Log.Information("Lists Views", "Code execution scope ended");
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                ObjectHandlers.CreateViews = CreateViews;
                var Lists = (function (_super) {
                    __extends(Lists, _super);
                    function Lists() {
                        _super.call(this, "Lists");
                    }
                    Lists.prototype.ProvisionObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var lists = clientContext.get_web().get_lists();
                        var listInstances = [];
                        clientContext.load(lists);
                        clientContext.executeQueryAsync(function () {
                            objects.forEach(function (obj, index) {
                                var existingObj = jQuery.grep(lists.get_data(), function (list) {
                                    return list.get_title() == obj.Title;
                                })[0];
                                if (existingObj) {
                                    Core.Log.Information(_this.name, "A list, survey, discussion board, or document library with the specified title '" + obj.Title + "' already exists in this Web site at Url '" + obj.Url + "'.");
                                    listInstances.push(existingObj);
                                    clientContext.load(listInstances[index]);
                                }
                                else {
                                    Core.Log.Information(_this.name, "Creating list with Title '" + obj.Title + "' and Url '" + obj.Url + "'.");
                                    var objCreationInformation = new SP.ListCreationInformation();
                                    if (obj.Description) {
                                        objCreationInformation.set_description(obj.Description);
                                    }
                                    if (obj.OnQuickLaunch) {
                                        objCreationInformation.set_quickLaunchOption(obj.OnQuickLaunch ? SP.QuickLaunchOptions.on : SP.QuickLaunchOptions.off);
                                    }
                                    if (obj.TemplateType) {
                                        objCreationInformation.set_templateType(obj.TemplateType);
                                    }
                                    if (obj.Title) {
                                        objCreationInformation.set_title(obj.Title);
                                    }
                                    if (obj.Url) {
                                        objCreationInformation.set_url(obj.Url);
                                    }
                                    listInstances.push(lists.add(objCreationInformation));
                                    clientContext.load(listInstances[index]);
                                }
                            });
                            if (!clientContext.get_hasPendingRequest()) {
                                Core.Log.Information(_this.name, "Code execution scope ended");
                                def.resolve();
                                return def.promise();
                            }
                            clientContext.executeQueryAsync(function () {
                                ApplyContentTypeBindings(clientContext, listInstances, objects).then(function () {
                                    CreateViews(clientContext, listInstances, objects).then(function () {
                                        ApplyListSecurity(clientContext, listInstances, objects).then(function () {
                                            var promises = [];
                                            objects.forEach(function (obj, index) {
                                                if (obj.Folders && obj.Folders.length > 0) {
                                                    promises.push(CreateFolders(clientContext, listInstances[index], obj.Url, obj.Folders));
                                                }
                                            });
                                            jQuery.when.apply(jQuery, promises).done(function () {
                                                clientContext.executeQueryAsync(function () {
                                                    Core.Log.Information(_this.name, "Code execution scope ended");
                                                    def.resolve();
                                                }, function (sender, args) {
                                                    Core.Log.Error(_this.name, "Error: " + args.get_message());
                                                    Core.Log.Information(_this.name, "Code execution scope ended");
                                                    def.resolve(sender, args);
                                                });
                                            });
                                        });
                                    });
                                });
                            }, function (sender, args) {
                                Core.Log.Error(_this.name, "Error: " + args.get_message());
                                Core.Log.Information(_this.name, "Code execution scope ended");
                                def.resolve(sender, args);
                            });
                        }, function (sender, args) {
                            Core.Log.Error(_this.name, "Error: " + args.get_message());
                            Core.Log.Information(_this.name, "Provisioning of objects failed");
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    return Lists;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Lists = Lists;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
