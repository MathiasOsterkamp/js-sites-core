/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IAuditSettings.ts" />

module Pzl.Sites.Core.ObjectHandlers {    
    export class AuditSettings extends Model.ObjectHandlerBase {
        constructor() {
            super("AuditSettings")
        }
        ProvisionObjects(object: Schema.IAuditSettings) {

            Core.Log.Information(this.name, `Code execution scope started`);

            var def = jQuery.Deferred();

            Core.Log.Information(this.name, `Audit Settings cannot be set via jsom.`);

            def.resolve();


            return def.promise();
        }
        ReadObjects(object: Schema.IAuditSettings) {
            Core.Log.Information(this.name, `Code execution scope started`);
            
            var def = jQuery.Deferred();
            Core.Log.Warning(this.name, `Audit Settings cannot be read via jsom.`);
            object = new Schema.AuditSettings();
            def.resolve(object);

            return def.promise();
        }

    }
}