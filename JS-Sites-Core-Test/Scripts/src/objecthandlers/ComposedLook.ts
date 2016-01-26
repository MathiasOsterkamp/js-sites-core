/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />

module Pzl.Sites.Core.ObjectHandlers {    
     module Helpers {
        export function GetUrlWithoutTokens(url: string) {
            return url.replace("{Site}", _spPageContextInfo.webAbsoluteUrl)
                        .replace("{SiteCollection}", _spPageContextInfo.siteAbsoluteUrl)
                        .replace("{SiteCollectionRelativeUrl}", _spPageContextInfo.siteServerRelativeUrl)
                        .replace("{themegallery}", `${_spPageContextInfo.siteServerRelativeUrl}/_catalogs/theme/15`);
        }
    }
    
    export class ComposedLook extends Model.ObjectHandlerBase {
        constructor() {
            super("ComposedLook")
        }
        ReadObjects(object : Schema.IComposedLook) {
            Core.Log.Information(this.name, `Code execution scope started`);
            
            var def = jQuery.Deferred();     
            var clientContext = SP.ClientContext.get_current();
            var web = clientContext.get_web();     
            var theme = web.get_themeInfo()    
            clientContext.load(theme);
            clientContext.executeQueryAsync(
                () => {
                    Core.Log.Information(this.name, `Code execution scope ended`);
                   
                    def.resolve({
                        "ColorPaletteUrl": "",
                        "FontSchemeUrl": "",
                        "BackgroundImageUrl":theme.get_themeBackgroundImageUri()
                    });
                },
                (sender, args) => {
                    Core.Log.Information(this.name, `Code execution scope ended`);
                    Core.Log.Information(this.name, args.get_message());
                    def.resolve(sender, args);
                }
            )
              
            return def.promise();
        }
        ProvisionObjects(object: Schema.IComposedLook) {

            Core.Log.Information(this.name, `Code execution scope started`);

            var def = jQuery.Deferred();
            var clientContext = SP.ClientContext.get_current();
            var web = clientContext.get_web();
            var colorPaletteUrl = object.ColorFile ? Helpers.GetUrlWithoutTokens(object.ColorFile) : "";
            var fontSchemeUrl = object.FontFile ? Helpers.GetUrlWithoutTokens(object.FontFile) : "";
            var backgroundImageUrl = object.BackgroundFile ? Helpers.GetUrlWithoutTokens(object.BackgroundFile) : null;
            web.applyTheme(colorPaletteUrl, fontSchemeUrl, backgroundImageUrl, true);
            web.update();
            clientContext.executeQueryAsync(
                () => {
                    Core.Log.Information(this.name, `Code execution scope ended`);
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
    } 
}