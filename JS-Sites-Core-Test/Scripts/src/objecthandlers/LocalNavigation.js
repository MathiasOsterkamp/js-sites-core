/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\INavigationNode.ts" />
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
                    return LocalNavigation;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.LocalNavigation = LocalNavigation;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
