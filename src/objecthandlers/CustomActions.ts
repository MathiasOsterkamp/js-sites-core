/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="IObjectHandler.ts" />
/// <reference path="..\schema\ICustomAction.ts" />
/// <reference path="..\schema\IWebPart.ts" />

module Pzl.Sites.Core.ObjectHandlers {
    export class CustomActions implements IObjectHandler {
        ProvisionObjects(objects : Array<Schema.ICustomAction>) {
            var def = jQuery.Deferred();
            
            Core.Log.Information("CustomActions", `Starting provisioning of objects`);                        
 
            var clientContext = SP.ClientContext.get_current();
            var userCustomActions = clientContext.get_web().get_userCustomActions();
            
            clientContext.load(userCustomActions);
            clientContext.executeQueryAsync(
                () => {
                    objects.forEach(function(obj) {
                        var objExists = jQuery.grep(userCustomActions.get_data(), (userCustomAction) => {
                            return userCustomAction.get_title() == obj.Title;
                        }).length > 0;                        
                        
                        if(objExists) {                            
                            Core.Log.Information("CustomActions", `A custom action with Title '${obj.Title}' already exists in this Web site at Url '${obj.Url}'.`)                            
                        } else {
                            Core.Log.Information("CustomActions", `Creating custom action with Title '${obj.Title}'`)
                            var objCreationInformation = userCustomActions.add();       
                            if(obj.Description) { objCreationInformation.set_description(obj.Description); }
                            if(obj.CommandUIExtension) { objCreationInformation.set_commandUIExtension(obj.CommandUIExtension); }
                            if(obj.Group) { objCreationInformation.set_group(obj.Group); }
                            if(obj.Title) { objCreationInformation.set_title(obj.Title); }
                            if(obj.Url) { objCreationInformation.set_url(obj.Url); }
                            if(obj.ScriptBlock) { objCreationInformation.set_scriptBlock(obj.ScriptBlock); }
                            if(obj.ScriptSrc) { objCreationInformation.set_scriptSrc(obj.ScriptSrc); }
                            if(obj.Location) { objCreationInformation.set_location(obj.Location); }
                            if(obj.ImageUrl) { objCreationInformation.set_imageUrl(obj.ImageUrl); }
                            if(obj.Name) { objCreationInformation.set_name(obj.Name); }
                            if(obj.RegistrationId) { objCreationInformation.set_registrationId(obj.RegistrationId); }
                            if(obj.RegistrationType) { objCreationInformation.set_registrationType(obj.RegistrationType); }
                            if(obj.Rights) { objCreationInformation.set_rights(obj.Rights); }
                            if(obj.Sequence) { objCreationInformation.set_sequence(obj.Sequence); }
                            objCreationInformation.update();
                        }
                    });
                    
                    if(!clientContext.get_hasPendingRequest()) {
                        Core.Log.Information("CustomActions", `Provisioning of objects ended`);
                        def.resolve();                        
                        return def.promise();
                    }
                    
                    clientContext.executeQueryAsync(
                        () => {
                            Core.Log.Information("CustomActions", `Provisioning of objects ended`);
                            def.resolve();
                        }, 
                        (sender, args) => {
                            Core.Log.Information("CustomActions", `Provisioning of objects failed`)
                            Core.Log.Error("CustomActions", `${args.get_message()}`)
                            def.resolve(sender, args);
                        });
                }, 
                (sender, args) => {
                    Core.Log.Information("CustomActions", `Provisioning of objects failed`)
                    Core.Log.Error("CustomActions", `${args.get_message()}`)
                    def.resolve(sender, args);
                });      
                
            return def.promise();
        }
    } 
}