/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IWebSettings.ts" />

module Pzl.Sites.Core.ObjectHandlers {
    export class WebSettings extends Model.ObjectHandlerBase {
        constructor() {
            super("WebSettings")
        }
        ProvisionObjects(object: Schema.IWebSettings) {
            var def = jQuery.Deferred();
            var clientContext = this.contextFactory.ClientContext;
            var web = this.contextFactory.Web;
            if (object.WelcomePage) {
                Core.Log.Information(this.name, `Setting WelcomePage to '${object.WelcomePage}'`);
                web.get_rootFolder().set_welcomePage(object.WelcomePage);
                web.get_rootFolder().update();
            }
            web.update();
            clientContext.load(web);
            clientContext.executeQueryAsync(
                () => {
                    def.resolve();
                },
                (sender, args) => {
                    def.resolve(sender, args);
                }
            )

            return def.promise();
        }
        ReadObjects(object: Schema.IWebSettings) {
            var def = jQuery.Deferred();
            var clientContext = this.contextFactory.ClientContext;
            var web = this.contextFactory.Web;
            object = new Schema.WebSettings();
            Core.Log.Information(this.name, `Starting reading of objects`);

            var folder = web.get_rootFolder();
            clientContext.load(web);
            clientContext.executeQueryAsync(
                () => {
                    object.Title = web.get_title();
                    //object.AlternateCSS = web.get_
                    object.CustomMasterPageUrl = web.get_customMasterUrl();
                    object.Description = web.get_description();
                    object.MasterPageUrl = web.get_masterUrl();
                    //object.NoCrawl = web
                    //object.RequestAccessEmail = web.get_re
                    //object.SiteLogo = web.get_
                    //object.WelcomePage = web.get_we
                    Core.Log.Information(this.name, `Reading of objects ended`)
                    def.resolve(object);
                },
                (sender, args) => {
                    Core.Log.Information(this.name, `Reading failed`);
                    Core.Log.Error(this.name, args.get_message());
                    def.resolve(object);
                }
            )

            return def.promise();
        }
    }
}