module Pzl.Sites.Core.Schema {

    

    export interface ICustomActions {
        SiteCustomActions: Array<ICustomAction>;
        WebCustomActions: Array<ICustomAction>;
    }
    export class CustomActions implements ICustomActions {
        SiteCustomActions: Array<ICustomAction>;
        WebCustomActions: Array<ICustomAction>;
    }

    
}