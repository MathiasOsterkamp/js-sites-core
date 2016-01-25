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
                    ComposedLook.prototype.ProvisionObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Code execution scope started");
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var web = clientContext.get_web();
                        var colorPaletteUrl = object.ColorPaletteUrl ? Helpers.GetUrlWithoutTokens(object.ColorPaletteUrl) : "";
                        var fontSchemeUrl = object.FontSchemeUrl ? Helpers.GetUrlWithoutTokens(object.FontSchemeUrl) : "";
                        var backgroundImageUrl = object.BackgroundImageUrl ? Helpers.GetUrlWithoutTokens(object.BackgroundImageUrl) : null;
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
