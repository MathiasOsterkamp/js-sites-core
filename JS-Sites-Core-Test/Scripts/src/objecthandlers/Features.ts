/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />

module Pzl.Sites.Core.ObjectHandlers {    
    export class Features extends Model.ObjectHandlerBase {
        constructor() {
            super("Features")
        }
        ProvisionObjects(object: Array<Schema.IFeature>) {

            Core.Log.Information(this.name, `Code execution scope started`);

            var def = jQuery.Deferred();

            def.resolve();


            return def.promise();
        }
        ReadObjects(object: Array<Schema.IFeature>) {
            Core.Log.Information(this.name, `Code execution scope started`);

            var def = jQuery.Deferred();

            def.resolve({});

            return def.promise();
        }

    }
}