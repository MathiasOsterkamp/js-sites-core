/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IPage.ts" />
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
                    return Pages;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.Pages = Pages;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
