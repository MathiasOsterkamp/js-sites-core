/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />

module Pzl.Sites.Core.ObjectHandlers {    
    export class Workflows extends Model.ObjectHandlerBase {
        constructor() {
            super("Workflows")
        }
        ProvisionObjects(object: Schema.IWorkflows) {

            Core.Log.Information(this.name, `Code execution scope started`);

            var def = jQuery.Deferred();

            def.resolve();


            return def.promise();
        }
        ReadObjects(object: Schema.IWorkflows) {
            Core.Log.Information(this.name, `Code execution scope started`);

            var def = jQuery.Deferred();

            def.resolve({});

            return def.promise();
        }

    }
}