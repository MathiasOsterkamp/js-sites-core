/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IPage.ts" />
/// <reference path="..\schema\IWebPart.ts" />

module Pzl.Sites.Core.ObjectHandlers {
    module Helpers {
        export function GetWebPartXmlWithoutTokens(xml: string, factory: Model.IContextFactoryInstance) {
            return xml.replace(/{site}/g, factory.webServerRelativeUrl) 
                .replace(/{sitecollection}/g, factory.siteServerRelativeUrl);
        }
        export function GetFolderFromFilePath(filePath: string, factory: Model.IContextFactoryInstance) {
            var split = filePath.split("/");
            return split.splice(0, split.length-1);
        }
    }
    
    export function AddWikiPageByUrl(fileUrl: string, factory:Model.ContextFactoryInstance) {
        var def = jQuery.Deferred();  
        
        Core.Log.Information("Pages", `Creating file with Url '${fileUrl}'`)       
        
        var clientContext =this.contextFactory.ClientContext;
        var web = this.contextFactory.Web;
        
        var fileServerRelativeUrl = `${factory.webServerRelativeUrl}/${fileUrl}`;
        var folderServerRelativeUrl = `${factory.webServerRelativeUrl}/${Helpers.GetFolderFromFilePath(fileUrl, factory)}`;
        var folder = web.getFolderByServerRelativeUrl(folderServerRelativeUrl);
        clientContext.load(folder.get_files().addTemplateFile(fileServerRelativeUrl, SP.TemplateFileType.wikiPage));
        clientContext.executeQueryAsync(
            () => {
                def.resolve();
            }, 
            (sender, args) => {                  
                Core.Log.Information("Pages", `Failed to create file with Url '${fileUrl}'`)
                Core.Log.Error("Pages", `${args.get_message()}`)
                def.resolve(sender, args);
            }
        );    
        
        return def.promise();
    }
    
    export class Pages extends Model.ObjectHandlerBase {
        constructor() {
            super("Pages")
        }
        ProvisionObjects(objects : Array<Schema.IPage>) {            
            Core.Log.Information(this.name, `Code execution scope started`);      
            var def = jQuery.Deferred();             
            var clientContext =this.contextFactory.ClientContext;            

            var promises = [];
            objects.forEach((obj) => {
                AddWikiPageByUrl(obj.Url, this.contextFactory);
            });            
            
            jQuery.when.apply(jQuery, promises).done(() => {
                Core.Log.Information(this.name, `Code execution scope ended`);
                def.resolve();  
            });
            
            return def.promise();
        }
        ReadObjects(objects: Array<Schema.IPage>) {
            Core.Log.Information(this.name, `Code execution scope started`);
            var def = jQuery.Deferred();
            var clientContext =this.contextFactory.ClientContext;
            objects = [];
            var promises = [];
           //TODO
            jQuery.when.apply(jQuery, promises).done(() => {
                Core.Log.Warning(this.name, `cannot read`);
                def.resolve(objects);
            });

            return def.promise();
        }
    } 
}