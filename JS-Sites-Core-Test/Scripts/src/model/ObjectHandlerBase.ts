/// <reference path="IObjectHandler.ts" />

module Pzl.Sites.Core.Model {
    export class ObjectHandlerBase implements IObjectHandler {
        name: string;
        contextFactory: Model.IContextFactoryInstance;
        constructor(name : string) {
            this.name = name;        
        }
        ProvisionObjects(objects, parameters?) { }
        ReadObjects(objects: Object) {}
    }
}