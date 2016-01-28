/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />

module Pzl.Sites.Core.ObjectHandlers {    
    module Helpers {
        export function GetUrlWithoutTokens(url: string, contextFactory: Model.IContextFactoryInstance) {
            return url.replace("{Site}", contextFactory.webAbsoluteUrl)
                .replace("{SiteCollection}", contextFactory.siteAbsoluteUrl)
                .replace("{SiteCollectionRelativeUrl}", contextFactory.siteServerRelativeUrl)
                .replace("{themegallery}", `${contextFactory.siteServerRelativeUrl}/_catalogs/theme/15`);
        }
    }
    
    export class ComposedLook extends Model.ObjectHandlerBase {
        constructor() {
            super("ComposedLook")
        }
     
        ProvisionObjects(object: Schema.IComposedLook) {

            Core.Log.Information(this.name, `Code execution scope started`);

            var def = jQuery.Deferred();
            var clientContext = this.contextFactory.ClientContext;
            var web = this.contextFactory.Web;
            var colorPaletteUrl = object.ColorFile ? Helpers.GetUrlWithoutTokens(object.ColorFile, this.contextFactory) : "";
            var fontSchemeUrl = object.FontFile ? Helpers.GetUrlWithoutTokens(object.FontFile, this.contextFactory) : "";
            var backgroundImageUrl = object.BackgroundFile ? Helpers.GetUrlWithoutTokens(object.BackgroundFile, this.contextFactory) : null;
            web.applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, true);
            web.update();
            clientContext.executeQueryAsync(
                () => {
                    Core.Log.Warning(this.name, `Code execution scope ended, but not all values loaded`);
                    def.resolve();
                },
                (sender, args) => {
                    Core.Log.Information(this.name, `Code execution scope ended`);
                    Core.Log.Information(this.name, args.get_message());
                    def.resolve(sender, args);
                }
            )

            return def.promise();
        }
        ReadObjects(object: Schema.IComposedLook): JQueryDeferred<Schema.IComposedLook> {
            Core.Log.Information(this.name, `Code execution scope started`);
            object = new Schema.ComposedLook();
            var def = jQuery.Deferred();
            var clientContext = this.contextFactory.ClientContext;
            var web = this.contextFactory.Web;
            var theme = web.get_themeInfo()
            clientContext.load(theme);
            clientContext.executeQueryAsync(
                () => {
                    Core.Log.Information(this.name, `Code execution scope ended`);
                  
                    object.BackgroundFile = theme.get_themeBackgroundImageUri();
                    object.Name = theme.get_accessibleDescription();
                    object.Version = 0 //= theme.get_objectVersion();
                    Core.Log.Information(this.name, `Missing properties`);
                    def.resolve(object);
                },
                (sender, args) => {
                    Core.Log.Information(this.name, `Reading failed`);
                    Core.Log.Error(this.name, args.get_message());
                    def.resolve(object);
                }
            )

            return def;
        }
    } 
}