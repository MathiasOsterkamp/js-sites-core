/// <reference path="IObjectHandler.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Model;
            (function (Model) {
                var ObjectHandlerBase = (function () {
                    function ObjectHandlerBase(name) {
                        this.name = name;
                    }
                    ObjectHandlerBase.prototype.ProvisionObjects = function (objects, parameters) { };
                    ObjectHandlerBase.prototype.ReadObjects = function (objects) { };
                    return ObjectHandlerBase;
                })();
                Model.ObjectHandlerBase = ObjectHandlerBase;
            })(Model = Core.Model || (Core.Model = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Model;
            (function (Model) {
                var TemplateQueueItem = (function () {
                    function TemplateQueueItem(name, index, objects, parameters, callback) {
                        this.name = name;
                        this.index = index;
                        this.objects = objects;
                        this.parameters = parameters;
                        this.callback = callback;
                    }
                    TemplateQueueItem.prototype.execute = function (dependentPromise) {
                        var _this = this;
                        if (!dependentPromise) {
                            return this.callback(this.objects, this.parameters);
                        }
                        var def = jQuery.Deferred();
                        dependentPromise.done(function () {
                            return _this.callback(_this.objects, _this.parameters).done(function (result) {
                                def.resolve(result);
                            });
                        });
                        return def.promise();
                    };
                    return TemplateQueueItem;
                })();
                Model.TemplateQueueItem = TemplateQueueItem;
            })(Model = Core.Model || (Core.Model = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ComposedLook = (function () {
                    function ComposedLook() {
                    }
                    return ComposedLook;
                })();
                Schema.ComposedLook = ComposedLook;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
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
                var AddIns = (function (_super) {
                    __extends(AddIns, _super);
                    function AddIns() {
                        _super.call(this, "AddIns");
                    }
                    AddIns.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    AddIns.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return AddIns;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.AddIns = AddIns;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var AuditSettings = (function () {
                    function AuditSettings() {
                    }
                    return AuditSettings;
                })();
                Schema.AuditSettings = AuditSettings;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IAuditSettings.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var AuditSettings = (function (_super) {
                    __extends(AuditSettings, _super);
                    function AuditSettings() {
                        _super.call(this, "AuditSettings");
                    }
                    AuditSettings.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    AuditSettings.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return AuditSettings;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.AuditSettings = AuditSettings;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
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
                    function GetUrlWithoutTokens(url) {
                        return url.replace("{Site}", _spPageContextInfo.webAbsoluteUrl)
                            .replace("{SiteCollection}", _spPageContextInfo.siteAbsoluteUrl)
                            .replace("{SiteCollectionRelativeUrl}", _spPageContextInfo.siteServerRelativeUrl)
                            .replace("{themegallery}", _spPageContextInfo.siteServerRelativeUrl + "/_catalogs/theme/15");
                    }
                    Helpers.GetUrlWithoutTokens = GetUrlWithoutTokens;
                })(Helpers || (Helpers = {}));
                var ComposedLook = (function (_super) {
                    __extends(ComposedLook, _super);
                    function ComposedLook() {
                        _super.call(this, "ComposedLook");
                    }
                    ComposedLook.prototype.ReadObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var web = clientContext.get_web();
                        var theme = web.get_themeInfo();
                        clientContext.load(theme);
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve({
                                "ColorPaletteUrl": "",
                                "FontSchemeUrl": "",
                                "BackgroundImageUrl": theme.get_themeBackgroundImageUri()
                            });
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            Core.Log.Information(_this.name, args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    ComposedLook.prototype.ProvisionObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var web = clientContext.get_web();
                        var colorPaletteUrl = object.ColorFile ? Helpers.GetUrlWithoutTokens(object.ColorFile) : "";
                        var fontSchemeUrl = object.FontFile ? Helpers.GetUrlWithoutTokens(object.FontFile) : "";
                        var backgroundImageUrl = object.BackgroundFile ? Helpers.GetUrlWithoutTokens(object.BackgroundFile) : null;
                        web.applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, true);
                        web.update();
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve();
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            Core.Log.Information(_this.name, args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    return ComposedLook;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.ComposedLook = ComposedLook;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var ContentTypes = (function (_super) {
                    __extends(ContentTypes, _super);
                    function ContentTypes() {
                        _super.call(this, "ContentTypes");
                    }
                    ContentTypes.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    ContentTypes.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return ContentTypes;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.ContentTypes = ContentTypes;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var CustomAction = (function () {
                    function CustomAction() {
                    }
                    return CustomAction;
                })();
                Schema.CustomAction = CustomAction;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Contents = (function () {
                    function Contents() {
                    }
                    return Contents;
                })();
                Schema.Contents = Contents;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IContents.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var WebPart = (function () {
                    function WebPart() {
                    }
                    return WebPart;
                })();
                Schema.WebPart = WebPart;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\ICustomAction.ts" />
/// <reference path="..\schema\IWebPart.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var CustomActions = (function (_super) {
                    __extends(CustomActions, _super);
                    function CustomActions() {
                        _super.call(this, "CustomActions");
                    }
                    CustomActions.prototype.ProvisionObjects = function (objects) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        Core.Log.Information(this.name, "Starting provisioning of objects");
                        var clientContext = SP.ClientContext.get_current();
                        var userCustomActions = clientContext.get_web().get_userCustomActions();
                        clientContext.load(userCustomActions);
                        clientContext.executeQueryAsync(function () {
                            objects.forEach(function (obj) {
                                var objExists = jQuery.grep(userCustomActions.get_data(), function (userCustomAction) {
                                    return userCustomAction.get_title() == obj.Title;
                                }).length > 0;
                                if (objExists) {
                                    Core.Log.Information(_this.name, "A custom action with Title '" + obj.Title + "' already exists in this Web site at Url '" + obj.Url + "'.");
                                }
                                else {
                                    Core.Log.Information(_this.name, "Creating custom action with Title '" + obj.Title + "'");
                                    var objCreationInformation = userCustomActions.add();
                                    if (obj.Description) {
                                        objCreationInformation.set_description(obj.Description);
                                    }
                                    if (obj.CommandUIExtension) {
                                        objCreationInformation.set_commandUIExtension(obj.CommandUIExtension);
                                    }
                                    if (obj.Group) {
                                        objCreationInformation.set_group(obj.Group);
                                    }
                                    if (obj.Title) {
                                        objCreationInformation.set_title(obj.Title);
                                    }
                                    if (obj.Url) {
                                        objCreationInformation.set_url(obj.Url);
                                    }
                                    if (obj.ScriptBlock) {
                                        objCreationInformation.set_scriptBlock(obj.ScriptBlock);
                                    }
                                    if (obj.ScriptSrc) {
                                        objCreationInformation.set_scriptSrc(obj.ScriptSrc);
                                    }
                                    if (obj.Location) {
                                        objCreationInformation.set_location(obj.Location);
                                    }
                                    if (obj.ImageUrl) {
                                        objCreationInformation.set_imageUrl(obj.ImageUrl);
                                    }
                                    if (obj.Name) {
                                        objCreationInformation.set_name(obj.Name);
                                    }
                                    if (obj.RegistrationId) {
                                        objCreationInformation.set_registrationId(obj.RegistrationId);
                                    }
                                    if (obj.RegistrationType) {
                                        objCreationInformation.set_registrationType(obj.RegistrationType);
                                    }
                                    if (obj.Rights) {
                                        objCreationInformation.set_rights(obj.Rights);
                                    }
                                    if (obj.Sequence) {
                                        objCreationInformation.set_sequence(obj.Sequence);
                                    }
                                    objCreationInformation.update();
                                }
                            });
                            if (!clientContext.get_hasPendingRequest()) {
                                Core.Log.Information(_this.name, "Provisioning of objects ended");
                                def.resolve();
                                return def.promise();
                            }
                            clientContext.executeQueryAsync(function () {
                                Core.Log.Information(_this.name, "Provisioning of objects ended");
                                def.resolve();
                            }, function (sender, args) {
                                Core.Log.Information(_this.name, "Provisioning of objects failed");
                                Core.Log.Error(_this.name, "" + args.get_message());
                                def.resolve(sender, args);
                            });
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Provisioning of objects failed");
                            Core.Log.Error(_this.name, "" + args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    CustomActions.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        Core.Log.Information(this.name, "Starting provisioning of objects");
                        var clientContext = SP.ClientContext.get_current();
                        var userCustomActions = clientContext.get_web().get_userCustomActions();
                        var usercustomActionInstances = [];
                        var actions = [];
                        clientContext.load(userCustomActions);
                        clientContext.executeQueryAsync(function () {
                            var listEnumerator = userCustomActions.getEnumerator();
                            var i = 0;
                            while (listEnumerator.moveNext()) {
                                var action = listEnumerator.get_current();
                                usercustomActionInstances[i] = action;
                                var ac = {
                                    "Location": action.get_location(),
                                    "Seqeuence": action.get_sequence(),
                                    "ScriptSrc": action.get_scriptSrc(),
                                    "Name": action.get_name(),
                                    "Title": action.get_title()
                                };
                                actions.push(ac);
                                i++;
                            }
                            def.resolve(actions);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Provisioning of objects failed");
                            Core.Log.Error(_this.name, "" + args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    return CustomActions;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.CustomActions = CustomActions;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Features = (function (_super) {
                    __extends(Features, _super);
                    function Features() {
                        _super.call(this, "Features");
                    }
                    Features.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    Features.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return Features;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Features = Features;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var HiddenView = (function () {
                    function HiddenView() {
                    }
                    return HiddenView;
                })();
                Schema.HiddenView = HiddenView;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IWebPart.ts" />
/// <reference path="IHiddenView.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var File = (function () {
                    function File() {
                    }
                    return File;
                })();
                Schema.File = File;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IFile.ts" />
/// <reference path="..\schema\IWebPart.ts" />
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
                            mapping[v.List].push(jQuery.extend(v, { "Url": obj.Folder }));
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
                            AddFileByUrl(obj.Folder, obj.Src, obj.Overwrite);
                        });
                        jQuery.when.apply(jQuery, promises).done(function () {
                            var promises = [];
                            objects.forEach(function (obj) {
                                if (obj.WebParts && obj.WebParts.length > 0) {
                                    promises.push(AddWebPartsToWebPartPage(obj.Folder, obj.Src, obj.WebParts, obj.RemoveExistingWebParts));
                                }
                            });
                            jQuery.when.apply(jQuery, promises).done(function () {
                                var promises = [];
                                objects.forEach(function (obj) {
                                    if (obj.Properties && Object.keys(obj.Properties).length > 0) {
                                        promises.push(ApplyFileProperties(obj.Folder, obj.Properties));
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
                    Files.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var promises = [];
                        objects.forEach(function (obj) {
                            AddFileByUrl(obj.Folder, obj.Src, obj.Overwrite);
                        });
                        jQuery.when.apply(jQuery, promises).done(function () {
                            var promises = [];
                            objects.forEach(function (obj) {
                                if (obj.WebParts && obj.WebParts.length > 0) {
                                    promises.push(AddWebPartsToWebPartPage(obj.Folder, obj.Src, obj.WebParts, obj.RemoveExistingWebParts));
                                }
                            });
                            jQuery.when.apply(jQuery, promises).done(function () {
                                var promises = [];
                                objects.forEach(function (obj) {
                                    if (obj.Properties && Object.keys(obj.Properties).length > 0) {
                                        promises.push(ApplyFileProperties(obj.Folder, obj.Properties));
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
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ContentTypeBinding = (function () {
                    function ContentTypeBinding() {
                    }
                    return ContentTypeBinding;
                })();
                Schema.ContentTypeBinding = ContentTypeBinding;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Folder = (function () {
                    function Folder() {
                    }
                    return Folder;
                })();
                Schema.Folder = Folder;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var RoleDefinition = (function () {
                    function RoleDefinition() {
                    }
                    return RoleDefinition;
                })();
                Schema.RoleDefinition = RoleDefinition;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var RoleAssignment = (function () {
                    function RoleAssignment() {
                    }
                    return RoleAssignment;
                })();
                Schema.RoleAssignment = RoleAssignment;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var User = (function () {
                    function User() {
                    }
                    return User;
                })();
                Schema.User = User;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var SiteGroup = (function () {
                    function SiteGroup() {
                    }
                    return SiteGroup;
                })();
                Schema.SiteGroup = SiteGroup;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IRoleDefinition.ts" />
/// <reference path="IRoleAssignment.ts" />
/// <reference path="IUser.ts" />
/// <reference path="ISiteGroup.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Security = (function () {
                    function Security() {
                    }
                    return Security;
                })();
                Schema.Security = Security;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var View = (function () {
                    function View() {
                    }
                    return View;
                })();
                Schema.View = View;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IContentTypeBinding.ts" />
/// <reference path="IFolder.ts" />
/// <reference path="ISecurity.ts" />
/// <reference path="IView.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ListInstance = (function () {
                    function ListInstance() {
                    }
                    return ListInstance;
                })();
                Schema.ListInstance = ListInstance;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IListInstance.ts" />
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
                            Core.Log.Information("Lists Security", "Breaking Role Inheritance for list '" + l.get_title() + "'. CopyRoleAssignments = '" + obj.Security.BreakRoleInheritance.CopyRoleAssignments + "', ClearSubscopes = '" + obj.Security.BreakRoleInheritance.ClearSubscopes + "'");
                            l.breakRoleInheritance(obj.Security.BreakRoleInheritance.CopyRoleAssignments, obj.Security.BreakRoleInheritance.ClearSubscopes);
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
                            obj.Security.Permissions.RoleAssignments.forEach(function (ra) {
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
                    Lists.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var listobjects = [];
                        var clientContext = SP.ClientContext.get_current();
                        var lists = clientContext.get_web().get_lists();
                        var listInstances = [];
                        clientContext.load(lists);
                        clientContext.executeQueryAsync(function () {
                            var listEnumerator = lists.getEnumerator();
                            var i = 0;
                            while (listEnumerator.moveNext()) {
                                listInstances[i] = listEnumerator.get_current();
                                var list = {
                                    "Title": listInstances[i].get_title(),
                                    "Url": "",
                                    "TemplateType": listInstances[i].get_baseType(),
                                    "Security": {},
                                    "Folders": [],
                                    "ContentTypeBindings": []
                                };
                                listobjects.push(list);
                                clientContext.load(listInstances[i].get_contentTypes());
                                clientContext.load(listInstances[i].get_views());
                                clientContext.load(listInstances[i].get_roleAssignments());
                                clientContext.load(listInstances[i].get_rootFolder().get_folders());
                                clientContext.load(listInstances[i].get_contentTypes());
                                i++;
                            }
                            if (!clientContext.get_hasPendingRequest()) {
                                Core.Log.Information(_this.name, "Code execution scope ended");
                                def.resolve(listobjects);
                                return def.promise();
                            }
                            clientContext.executeQueryAsync(function () {
                                def.resolve(listobjects);
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
/*
"Lists": [
    {
      "Title": "Internal Documents",
      "Url": "InternalDocuments",
      "TemplateType": 101,
      "Security": {
        "BreakRoleInheritance": true,
        "CopyRoleAssignments": true,
        "ClearSubscopes": true,
        "RoleAssignments": [
          {
            "Principal": "{associatevisitorgroup}",
            "RoleDefinition": 1073741826
          },
          {
            "Principal": "{associatemembergroup}",
            "RoleDefinition": "Contribute"
          },
          {
            "Principal": "{associateownergroup}",
            "RoleDefinition": "Full Control"
          }
        ]
      },
      "Folders": [
        {
          "Name": "Agenda",
          "DefaultValues": {
            "PortDocumentCategory": "-1;#Agenda|bdbd7af3-45ea-4993-a243-be91c0e5a6a8"
          }
        },
        {
          "Name": "Agreements",
          "DefaultValues": {
            "PortDocumentCategory": "-1;#Agreements|6689b4c-d2d0-43fa-b916-2e7698b8387d"
          }
        }
      ],
      "ContentTypeBindings": [
        {
          "ContentTypeId": "0x010100B3337B3CDC314FF2B8BC5F38977EDBF0"
        }
      ]
    }
  ],*/ 
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var NavigationNode = (function () {
                    function NavigationNode() {
                    }
                    return NavigationNode;
                })();
                Schema.NavigationNode = NavigationNode;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\INavigationNode.ts" />
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
                    function GetUrlWithoutTokens(url) {
                        return url.replace("{Site}", _spPageContextInfo.webAbsoluteUrl)
                            .replace("{SiteRelativeUrl}", _spPageContextInfo.webServerRelativeUrl)
                            .replace("{SiteUrl}", _spPageContextInfo.webAbsoluteUrl)
                            .replace("{SiteUrlEncoded}", encodeURIComponent(_spPageContextInfo.webAbsoluteUrl))
                            .replace("{SiteCollection}", _spPageContextInfo.siteAbsoluteUrl)
                            .replace("{SiteCollectionRelativeUrl}", _spPageContextInfo.siteServerRelativeUrl)
                            .replace("{SiteCollectionEncoded}", encodeURIComponent(_spPageContextInfo.siteAbsoluteUrl))
                            .replace("{WebApp}", window.location.protocol + "//" + window.location.host);
                    }
                    Helpers.GetUrlWithoutTokens = GetUrlWithoutTokens;
                    function GetNodeFromQuickLaunchByTitle(nodeCollection, title) {
                        var f = jQuery.grep(nodeCollection, function (val) {
                            return val.get_title() === title;
                        });
                        return f[0] || null;
                    }
                    Helpers.GetNodeFromQuickLaunchByTitle = GetNodeFromQuickLaunchByTitle;
                })(Helpers || (Helpers = {}));
                var LocalNavigation = (function (_super) {
                    __extends(LocalNavigation, _super);
                    function LocalNavigation() {
                        _super.call(this, "LocalNavigation");
                    }
                    LocalNavigation.prototype.ProvisionObjects = function (objects) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var web = clientContext.get_web();
                        Core.Log.Information(this.name, "Starting provisioning of objects");
                        var navigation = web.get_navigation();
                        var quickLaunchNodeCollection = navigation.get_quickLaunch();
                        clientContext.load(quickLaunchNodeCollection);
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information(_this.name, "Removing existing navigation nodes");
                            var temporaryQuickLaunch = [];
                            var index = quickLaunchNodeCollection.get_count() - 1;
                            while (index >= 0) {
                                var oldNode = quickLaunchNodeCollection.itemAt(index);
                                temporaryQuickLaunch.push(oldNode);
                                oldNode.deleteObject();
                                index--;
                            }
                            clientContext.executeQueryAsync(function () {
                                objects.forEach(function (obj) {
                                    Core.Log.Information(_this.name, "Adding navigation node with Url '" + obj.Url + "' and Title '" + obj.Title + "'");
                                    var existingNode = Helpers.GetNodeFromQuickLaunchByTitle(temporaryQuickLaunch, obj.Title);
                                    var newNode = new SP.NavigationNodeCreationInformation();
                                    newNode.set_title(obj.Title);
                                    newNode.set_url(existingNode ? existingNode.get_url() : Helpers.GetUrlWithoutTokens(obj.Url));
                                    newNode.set_asLastNode(true);
                                    quickLaunchNodeCollection.add(newNode);
                                });
                                clientContext.executeQueryAsync(function () {
                                    Core.Log.Information(_this.name, "Provisioning of objects ended");
                                    def.resolve();
                                }, function (sender, args) {
                                    Core.Log.Information(_this.name, "Provisioning of objects failed");
                                    Core.Log.Error(_this.name, "" + args.get_message());
                                    def.resolve(sender, args);
                                });
                            });
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Provisioning of objects failed");
                            Core.Log.Error(_this.name, "" + args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    LocalNavigation.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var web = clientContext.get_web();
                        Core.Log.Information(this.name, "Starting reading of objects");
                        var navigation = web.get_navigation();
                        var quickLaunchNodeCollection = navigation.get_quickLaunch();
                        clientContext.load(navigation);
                        clientContext.load(quickLaunchNodeCollection);
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information(_this.name, "reading existing navigation nodes");
                            //var index = quickLaunchNodeCollection.get_count() - 1;
                            //while (index >= 0) {
                            //    const oldNode = quickLaunchNodeCollection.itemAt(index);
                            //    objects.push({ "Url": oldNode.get_url(), "Title": oldNode.get_title() });
                            //    index--;
                            //}
                            Core.Log.Information(_this.name, "reading of objects ended");
                            def.resolve(objects);
                        }, function (sender, args) {
                            Core.Log.Information(_this.name, "Provisioning of objects failed");
                            Core.Log.Error(_this.name, "" + args.get_message());
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    return LocalNavigation;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.LocalNavigation = LocalNavigation;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IWebPart.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Page = (function () {
                    function Page() {
                    }
                    return Page;
                })();
                Schema.Page = Page;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IPage.ts" />
/// <reference path="..\schema\IWebPart.ts" />
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
                    function GetWebPartXmlWithoutTokens(xml) {
                        return xml.replace(/{site}/g, _spPageContextInfo.webServerRelativeUrl)
                            .replace(/{sitecollection}/g, _spPageContextInfo.siteServerRelativeUrl);
                    }
                    Helpers.GetWebPartXmlWithoutTokens = GetWebPartXmlWithoutTokens;
                    function GetFolderFromFilePath(filePath) {
                        var split = filePath.split("/");
                        return split.splice(0, split.length - 1);
                    }
                    Helpers.GetFolderFromFilePath = GetFolderFromFilePath;
                })(Helpers || (Helpers = {}));
                function AddWikiPageByUrl(fileUrl) {
                    var def = jQuery.Deferred();
                    Core.Log.Information("Pages", "Creating file with Url '" + fileUrl + "'");
                    var clientContext = SP.ClientContext.get_current();
                    var web = clientContext.get_web();
                    var fileServerRelativeUrl = _spPageContextInfo.webServerRelativeUrl + "/" + fileUrl;
                    var folderServerRelativeUrl = _spPageContextInfo.webServerRelativeUrl + "/" + Helpers.GetFolderFromFilePath(fileUrl);
                    var folder = web.getFolderByServerRelativeUrl(folderServerRelativeUrl);
                    clientContext.load(folder.get_files().addTemplateFile(fileServerRelativeUrl, SP.TemplateFileType.wikiPage));
                    clientContext.executeQueryAsync(function () {
                        def.resolve();
                    }, function (sender, args) {
                        Core.Log.Information("Pages", "Failed to create file with Url '" + fileUrl + "'");
                        Core.Log.Error("Pages", "" + args.get_message());
                        def.resolve(sender, args);
                    });
                    return def.promise();
                }
                ObjectHandlers.AddWikiPageByUrl = AddWikiPageByUrl;
                var Pages = (function (_super) {
                    __extends(Pages, _super);
                    function Pages() {
                        _super.call(this, "Pages");
                    }
                    Pages.prototype.ProvisionObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var promises = [];
                        objects.forEach(function (obj) {
                            AddWikiPageByUrl(obj.Url);
                        });
                        jQuery.when.apply(jQuery, promises).done(function () {
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve();
                        });
                        return def.promise();
                    };
                    Pages.prototype.ReadObjects = function (objects) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var promises = [];
                        //TODO
                        jQuery.when.apply(jQuery, promises).done(function () {
                            Core.Log.Information(_this.name, "Code execution scope ended");
                            def.resolve();
                        });
                        return def.promise();
                    };
                    return Pages;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Pages = Pages;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var PropertyBagEntries = (function (_super) {
                    __extends(PropertyBagEntries, _super);
                    function PropertyBagEntries() {
                        _super.call(this, "PropertyBagEntries");
                    }
                    PropertyBagEntries.prototype.ProvisionObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Starting provisioning of objects");
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var web = clientContext.get_web();
                        var allProperties = web.get_allProperties();
                        for (var key in object) {
                            Core.Log.Information(this.name, "Setting property '" + key + "' = '" + object[key] + "' on web");
                            allProperties.set_item(key, object[key]);
                        }
                        web.update();
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information(_this.name, "Provisioning of objects ended");
                            def.resolve();
                        }, function (sender, args) {
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    PropertyBagEntries.prototype.ReadObjects = function (object) {
                        var _this = this;
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var web = clientContext.get_web();
                        var allProperties = web.get_allProperties();
                        clientContext.load(allProperties);
                        clientContext.executeQueryAsync(function () {
                            var values = allProperties.get_fieldValues();
                            for (var key in values) {
                                Core.Log.Information(_this.name, "Getting property '" + key + "'");
                                object[key] = values[key];
                            }
                            Core.Log.Information(_this.name, "Read of objects ended");
                            def.resolve(object);
                        }, function (sender, args) {
                            def.resolve(sender, args);
                        });
                        return def;
                    };
                    return PropertyBagEntries;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.PropertyBagEntries = PropertyBagEntries;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Publishing = (function (_super) {
                    __extends(Publishing, _super);
                    function Publishing() {
                        _super.call(this, "Publishing");
                    }
                    Publishing.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    Publishing.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return Publishing;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Publishing = Publishing;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var RegionalSettings = (function (_super) {
                    __extends(RegionalSettings, _super);
                    function RegionalSettings() {
                        _super.call(this, "RegionalSettings");
                    }
                    RegionalSettings.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    RegionalSettings.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return RegionalSettings;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.RegionalSettings = RegionalSettings;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var SearchSettings = (function (_super) {
                    __extends(SearchSettings, _super);
                    function SearchSettings() {
                        _super.call(this, "SearchSettings");
                    }
                    SearchSettings.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    SearchSettings.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return SearchSettings;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.SearchSettings = SearchSettings;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Security = (function (_super) {
                    __extends(Security, _super);
                    function Security() {
                        _super.call(this, "Security");
                    }
                    Security.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    Security.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return Security;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Security = Security;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var SiteFields = (function (_super) {
                    __extends(SiteFields, _super);
                    function SiteFields() {
                        _super.call(this, "SiteFields");
                    }
                    SiteFields.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    SiteFields.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return SiteFields;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.SiteFields = SiteFields;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var SitePolicy = (function (_super) {
                    __extends(SitePolicy, _super);
                    function SitePolicy() {
                        _super.call(this, "SitePolicy");
                    }
                    SitePolicy.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    SitePolicy.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return SitePolicy;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.SitePolicy = SitePolicy;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var SupportedUILanguages = (function (_super) {
                    __extends(SupportedUILanguages, _super);
                    function SupportedUILanguages() {
                        _super.call(this, "SupportedUILanguages");
                    }
                    SupportedUILanguages.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    SupportedUILanguages.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return SupportedUILanguages;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.SupportedUILanguages = SupportedUILanguages;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var TermGroups = (function (_super) {
                    __extends(TermGroups, _super);
                    function TermGroups() {
                        _super.call(this, "TermGroups");
                    }
                    TermGroups.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    TermGroups.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return TermGroups;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.TermGroups = TermGroups;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var WebSettings = (function () {
                    function WebSettings() {
                    }
                    return WebSettings;
                })();
                Schema.WebSettings = WebSettings;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IWebSettings.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var WebSettings = (function (_super) {
                    __extends(WebSettings, _super);
                    function WebSettings() {
                        _super.call(this, "WebSettings");
                    }
                    WebSettings.prototype.ProvisionObjects = function (object) {
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var web = clientContext.get_web();
                        if (object.WelcomePage) {
                            Core.Log.Information(this.name, "Setting WelcomePage to '" + object.WelcomePage + "'");
                            web.get_rootFolder().set_welcomePage(object.WelcomePage);
                            web.get_rootFolder().update();
                        }
                        web.update();
                        clientContext.load(web);
                        clientContext.executeQueryAsync(function () {
                            def.resolve();
                        }, function (sender, args) {
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    WebSettings.prototype.ReadObjects = function (object) {
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var web = clientContext.get_web();
                        var folder = web.get_rootFolder();
                        clientContext.load(folder);
                        clientContext.executeQueryAsync(function () {
                            def.resolve({ "WelcomePage": folder.get_welcomePage() });
                        }, function (sender, args) {
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    return WebSettings;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.WebSettings = WebSettings;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var Workflows = (function (_super) {
                    __extends(Workflows, _super);
                    function Workflows() {
                        _super.call(this, "Workflows");
                    }
                    Workflows.prototype.ProvisionObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve();
                        return def.promise();
                    };
                    Workflows.prototype.ReadObjects = function (object) {
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        def.resolve({});
                        return def.promise();
                    };
                    return Workflows;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Workflows = Workflows;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Feature = (function () {
                    function Feature() {
                    }
                    return Feature;
                })();
                Schema.Feature = Feature;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Field = (function () {
                    function Field() {
                    }
                    return Field;
                })();
                Schema.Field = Field;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ContentType = (function () {
                    function ContentType() {
                    }
                    return ContentType;
                })();
                Schema.ContentType = ContentType;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="IListInstance.ts" />
/// <reference path="IFile.ts" />
/// <reference path="IPage.ts" />
/// <reference path="IFeature.ts" />
/// <reference path="IField.ts" />
/// <reference path="IContentType.ts" />
/// <reference path="INavigationNode.ts" />
/// <reference path="ICustomAction.ts" />
/// <reference path="IComposedLook.ts" />
/// <reference path="IWebSettings.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Provisioning = (function () {
                    function Provisioning() {
                    }
                    return Provisioning;
                })();
                Schema.Provisioning = Provisioning;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="../model/ILoggingOptions.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Logger = (function () {
                function Logger(loggingOptions) {
                    this.array = [];
                    this.loggingOptions = loggingOptions;
                }
                Logger.prototype.loggerEnabled = function () {
                    return (console && console.log);
                };
                Logger.prototype.Information = function (objectHandler, msg) {
                    if (!this.loggingOptions)
                        return;
                    var logMsg = new Date() + " || Information || " + objectHandler + " || " + msg;
                    if (this.loggerEnabled && this.loggingOptions.On) {
                        console.log(logMsg);
                    }
                    this.array.push(logMsg);
                };
                Logger.prototype.Error = function (objectHandler, msg) {
                    if (!this.loggingOptions)
                        return;
                    var logMsg = new Date() + " || Error || " + objectHandler + " || " + msg;
                    if (this.loggerEnabled && this.loggingOptions.On) {
                        console.log(logMsg);
                    }
                    this.array.push(logMsg);
                };
                Logger.prototype.toString = function () {
                    return this.array.join("\n");
                };
                Logger.prototype.SaveToFile = function () {
                    var def = jQuery.Deferred();
                    console.log(this.array);
                    if (!this.loggingOptions || !this.loggingOptions.LoggingFolder) {
                        def.resolve();
                        return def.promise();
                    }
                    var clientContext = SP.ClientContext.get_current();
                    var web = clientContext.get_site().get_rootWeb();
                    var fileName = new Date().getTime() + ".txt";
                    var fileCreateInfo = new SP.FileCreationInformation();
                    fileCreateInfo.set_url(fileName);
                    fileCreateInfo.set_content(new SP.Base64EncodedByteArray());
                    var fileContent = this.array.join("\n");
                    for (var i = 0; i < fileContent.length; i++) {
                        fileCreateInfo.get_content().append(fileContent.charCodeAt(i));
                    }
                    clientContext.load(web.getFolderByServerRelativeUrl(this.loggingOptions.LoggingFolder).get_files().add(fileCreateInfo));
                    clientContext.executeQueryAsync(function () {
                        def.resolve();
                    }, function (sender, args) {
                        def.resolve(sender, args);
                    });
                    return def.promise();
                };
                return Logger;
            })();
            Core.Logger = Logger;
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
/// <reference path="..\typings\tsd.d.ts" />
/// <reference path="schema/IProvisioning.ts" />
/// <reference path="objecthandlers/Lists.ts" />
/// <reference path="objecthandlers/ComposedLook.ts" />
/// <reference path="objecthandlers/Files.ts" />
/// <reference path="objecthandlers/Pages.ts" />
/// <reference path="objecthandlers/CustomActions.ts" />
/// <reference path="objecthandlers/LocalNavigation.ts" />
/// <reference path="objecthandlers/PropertyBagEntries.ts" />
/// <reference path="objecthandlers/WebSettings.ts" />
/// <reference path="utilities/Logger.ts" />
/// <reference path="model/TemplateQueueItem.ts" />
/// <reference path="model/ILoggingOptions.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var startTime = null;
            var ObjectHandlerMethods;
            (function (ObjectHandlerMethods) {
                ObjectHandlerMethods[ObjectHandlerMethods["ProvisionObjects"] = 0] = "ProvisionObjects";
                ObjectHandlerMethods[ObjectHandlerMethods["ReadObjects"] = 1] = "ReadObjects";
            })(ObjectHandlerMethods || (ObjectHandlerMethods = {}));
            var setupWebDialog;
            function ShowWaitMessage(header, content, height, width) {
                setupWebDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(header, content, height, width);
            }
            function getSetupQueue(json) {
                return Object.keys(json);
            }
            function start(json, queue, method) {
                var def = jQuery.Deferred();
                startTime = new Date().getTime();
                Core.Log.Information("Provisioning", "Starting at URL '" + _spPageContextInfo.webServerRelativeUrl + "'");
                var queueItems = [];
                queue.forEach(function (q, index) {
                    if (!Core.ObjectHandlers[q])
                        return;
                    var methodname = ObjectHandlerMethods[method];
                    queueItems.push(new Core.Model.TemplateQueueItem(q, index, json[q], json["Parameters"], new Core.ObjectHandlers[q]()[methodname]));
                });
                var results = [];
                var promises = [];
                promises.push(jQuery.Deferred());
                promises[0].resolve();
                promises[0].promise();
                var index = 1;
                while (queueItems[index - 1] != undefined) {
                    var i = promises.length - 1;
                    promises.push(queueItems[index - 1].execute(promises[i]));
                    results[queueItems[index - 1].name] = null;
                    index++;
                }
                ;
                jQuery.when.apply(jQuery, promises).then(function () {
                    var args = arguments;
                    var n = 1;
                    for (var i in results) {
                        results[i] = args[n];
                        n++;
                    }
                    def.resolve(results);
                });
                return def.promise();
            }
            function init(template, loggingOptions) {
                var def = jQuery.Deferred();
                ShowWaitMessage("Applying template", "This might take a moment..", 130, 600);
                Core.Log = new Core.Logger(loggingOptions);
                var queue = getSetupQueue(template);
                start(template.Templates[0], queue, ObjectHandlerMethods.ProvisionObjects).then(function () {
                    var provisioningTime = ((new Date().getTime()) - startTime) / 1000;
                    Core.Log.Information("Provisioning", "All done in " + provisioningTime + " seconds");
                    Core.Log.SaveToFile().then(function () {
                        setupWebDialog.close(null);
                        def.resolve();
                    });
                });
                return def.promise();
            }
            Core.init = init;
            function read(template, loggingOptions) {
                var def = jQuery.Deferred();
                ShowWaitMessage("Reading template", "This might take a moment..", 130, 600);
                Core.Log = new Core.Logger(loggingOptions);
                var queue = getSetupQueue(template);
                start(template.Templates[0], queue, ObjectHandlerMethods.ReadObjects).then(function (generated) {
                    var provisioningTime = ((new Date().getTime()) - startTime) / 1000;
                    Core.Log.Information("Reading", "All done in " + provisioningTime + " seconds");
                    Core.Log.SaveToFile().then(function () {
                        setupWebDialog.close(null);
                        console.log(generated);
                        def.resolve();
                    });
                });
                return def;
            }
            Core.read = read;
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Addin = (function () {
                    function Addin() {
                    }
                    return Addin;
                })();
                Schema.Addin = Addin;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Audit = (function () {
                    function Audit() {
                    }
                    return Audit;
                })();
                Schema.Audit = Audit;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var BreakRoleInheritance = (function () {
                    function BreakRoleInheritance() {
                    }
                    return BreakRoleInheritance;
                })();
                Schema.BreakRoleInheritance = BreakRoleInheritance;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var CustomActions = (function () {
                    function CustomActions() {
                    }
                    return CustomActions;
                })();
                Schema.CustomActions = CustomActions;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var DesignPackage = (function () {
                    function DesignPackage() {
                    }
                    return DesignPackage;
                })();
                Schema.DesignPackage = DesignPackage;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Features = (function () {
                    function Features() {
                    }
                    return Features;
                })();
                Schema.Features = Features;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ListInstanceFieldRef = (function () {
                    function ListInstanceFieldRef() {
                    }
                    return ListInstanceFieldRef;
                })();
                Schema.ListInstanceFieldRef = ListInstanceFieldRef;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ObjectSecurity = (function () {
                    function ObjectSecurity() {
                    }
                    return ObjectSecurity;
                })();
                Schema.ObjectSecurity = ObjectSecurity;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var PageLayout = (function () {
                    function PageLayout() {
                    }
                    return PageLayout;
                })();
                Schema.PageLayout = PageLayout;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Permissions = (function () {
                    function Permissions() {
                    }
                    return Permissions;
                })();
                Schema.Permissions = Permissions;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var ProvisioningTemplate = (function () {
                    function ProvisioningTemplate() {
                    }
                    return ProvisioningTemplate;
                })();
                Schema.ProvisioningTemplate = ProvisioningTemplate;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Publishing = (function () {
                    function Publishing() {
                    }
                    return Publishing;
                })();
                Schema.Publishing = Publishing;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var RegionalSettings = (function () {
                    function RegionalSettings() {
                    }
                    return RegionalSettings;
                })();
                Schema.RegionalSettings = RegionalSettings;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var SupportedUILanguage = (function () {
                    function SupportedUILanguage() {
                    }
                    return SupportedUILanguage;
                })();
                Schema.SupportedUILanguage = SupportedUILanguage;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Term = (function () {
                    function Term() {
                    }
                    return Term;
                })();
                Schema.Term = Term;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var TermGroup = (function () {
                    function TermGroup() {
                    }
                    return TermGroup;
                })();
                Schema.TermGroup = TermGroup;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var TermSet = (function () {
                    function TermSet() {
                    }
                    return TermSet;
                })();
                Schema.TermSet = TermSet;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var WebTemplate = (function () {
                    function WebTemplate() {
                    }
                    return WebTemplate;
                })();
                Schema.WebTemplate = WebTemplate;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var WorkflowDefinition = (function () {
                    function WorkflowDefinition() {
                    }
                    return WorkflowDefinition;
                })();
                Schema.WorkflowDefinition = WorkflowDefinition;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var Workflows = (function () {
                    function Workflows() {
                    }
                    return Workflows;
                })();
                Schema.Workflows = Workflows;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Schema;
            (function (Schema) {
                var WorkflowSubscription = (function () {
                    function WorkflowSubscription() {
                    }
                    return WorkflowSubscription;
                })();
                Schema.WorkflowSubscription = WorkflowSubscription;
            })(Schema = Core.Schema || (Core.Schema = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Test;
        (function (Test) {
            var logging = { "On": true };
            SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
                var template = {
                    Templates: [{
                            "PropertyBagEntries": {},
                            "WebSettings": {},
                            "Lists": {},
                            "CustomActions": {},
                            "ComposedLook": {}
                        }]
                };
                Pzl.Sites.Core.read(template, logging).done(function () {
                });
            });
        })(Test = Sites.Test || (Sites.Test = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
//# sourceMappingURL=js-site.core.js.map