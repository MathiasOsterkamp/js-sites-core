/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\ICustomAction.ts" />
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
                    return CustomActions;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.CustomActions = CustomActions;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
