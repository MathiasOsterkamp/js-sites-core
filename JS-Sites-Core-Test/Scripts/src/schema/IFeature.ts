module Pzl.Sites.Core.Schema {
 

    export interface IFeature {
        ID: string;
        Deactivate: boolean;
        Description: string;
    }

    export class Feature implements IFeature {
        ID: string;
        Deactivate: boolean;
        Description: string;
    }


    
}