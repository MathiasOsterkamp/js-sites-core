/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
/// <reference path="..\schema\IComposedLook.ts" />

module Pzl.Sites.Core.ObjectHandlers {    
    export class SearchSettings extends Model.ObjectHandlerBase {
        constructor() {
            super("SearchSettings")
        }
        ProvisionObjects(object: Object) {

            Core.Log.Information(this.name, `Code execution scope started`);

            var def = jQuery.Deferred();

            def.resolve();


            return def.promise();
        }
        ReadObjects(object: Object) {
            var def = jQuery.Deferred();
            object = {};
            Core.Log.Information(this.name, `Starting reading of objects`);

            Core.Log.Warning(this.name, `Search Schema cannot read via jsom`);
            def.resolve(object);

            return def.promise(object);
        }

    }
}