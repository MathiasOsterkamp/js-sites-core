/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\ICustomAction.ts" />
/// <reference path="..\schema\IWebPart.ts" />

module Pzl.Sites.Core.ObjectHandlers {
    export class CustomActions extends Model.ObjectHandlerBase {
        constructor() {
            super("CustomActions")
        }
        ProvisionObjects(objects : Array<Schema.ICustomAction>) {
            var def = jQuery.Deferred();
            
            Core.Log.Information(this.name, `Starting provisioning of objects`);                        

            var clientContext = this.contextFactory.ClientContext;
            var userCustomActions = this.contextFactory.Web.get_userCustomActions();
            
            clientContext.load(userCustomActions);
            clientContext.executeQueryAsync(
                () => {
                    objects.forEach((obj) => {
                        var objExists = jQuery.grep(userCustomActions.get_data(), (userCustomAction) => {
                            return userCustomAction.get_title() == obj.Title;
                        }).length > 0;                        
                        
                        if(objExists) {                            
                            Core.Log.Information(this.name, `A custom action with Title '${obj.Title}' already exists in this Web site at Url '${obj.Url}'.`)                            
                        } else {
                            Core.Log.Information(this.name, `Creating custom action with Title '${obj.Title}'`)
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
                        Core.Log.Information(this.name, `Provisioning of objects ended`);
                        def.resolve();                        
                        return def.promise();
                    }
                    
                    clientContext.executeQueryAsync(
                        () => {
                            Core.Log.Information(this.name, `Provisioning of objects ended`);
                            def.resolve();
                        }, 
                        (sender, args) => {
                            Core.Log.Information(this.name, `Provisioning of objects failed`)
                            Core.Log.Error(this.name, `${args.get_message()}`)
                            def.resolve(sender, args);
                        });
                }, 
                (sender, args) => {
                    Core.Log.Information(this.name, `Provisioning of objects failed`)
                    Core.Log.Error(this.name, `${args.get_message()}`)
                    def.resolve(sender, args);
                });      
                
            return def.promise();
        }
        ReadObjects(object: Schema.ICustomActions) {
            var def = jQuery.Deferred();

            Core.Log.Information(this.name, `Starting reading of objects`);

            var clientContext =this.contextFactory.ClientContext;
            var userCustomActions = this.contextFactory.Web.get_userCustomActions();
            var usersiteCustomActions = clientContext.get_site().get_userCustomActions();
            var usercustomActionInstances: Array<Schema.ICustomAction> = [];
            var usersitecustomActionInstances: Array<Schema.ICustomAction> = [];
            object = new Schema.CustomActions();
            clientContext.load(userCustomActions);
            clientContext.load(usersiteCustomActions);
            clientContext.executeQueryAsync(
                () => {
                    var listEnumerator = userCustomActions.getEnumerator();
                    var i = 0;
                    while (listEnumerator.moveNext()) {
                        var action = listEnumerator.get_current();
                      
                        var ac = new Schema.CustomAction();
                        ac.Location = action.get_location();
                        ac.Description = action.get_description();
                        ac.CommandUIExtension = action.get_commandUIExtension();
                        ac.Group = action.get_group();
                        ac.ImageUrl = action.get_imageUrl();
                        ac.Name = action.get_name();
                        ac.RegistrationId = action.get_registrationId();
                        ac.RegistrationType = action.get_registrationType();
                        ac.ScriptBlock = action.get_scriptBlock();
                        ac.Rights = action.get_rights();
                        ac.ScriptSrc = action.get_scriptSrc();
                        ac.Sequence = action.get_sequence();
                        ac.Title = action.get_title();
                        ac.Url = action.get_url();
                        usercustomActionInstances.push(ac);
                        i++;
                    }
                    var listEnumerator = usersiteCustomActions.getEnumerator();
                    var i = 0;
                    while (listEnumerator.moveNext()) {
                        var action = listEnumerator.get_current();

                        var ac = new Schema.CustomAction();
                        ac.Location = action.get_location();
                        ac.Description = action.get_description();
                        ac.CommandUIExtension = action.get_commandUIExtension();
                        ac.Group = action.get_group();
                        ac.ImageUrl = action.get_imageUrl();
                        ac.Name = action.get_name();
                        ac.RegistrationId = action.get_registrationId();
                        ac.RegistrationType = action.get_registrationType();
                        ac.ScriptBlock = action.get_scriptBlock();
                        ac.Rights = action.get_rights();
                        ac.ScriptSrc = action.get_scriptSrc();
                        ac.Sequence = action.get_sequence();
                        ac.Title = action.get_title();
                        ac.Url = action.get_url();
                        usersitecustomActionInstances.push(ac);
                        i++;
                    }
                    object.SiteCustomActions = usersitecustomActionInstances;
                    object.WebCustomActions = usercustomActionInstances;
                    Core.Log.Information(this.name, `Starting reading of objects ended`);
                    def.resolve(object);
                },
                (sender, args) => {
                    Core.Log.Information(this.name, `Reading failed`);
                    Core.Log.Error(this.name, args.get_message());
                    def.resolve(object);
                });

            return def.promise();
        }
    } 
}