module Pzl.Sites.Core.Schema {
    export interface IFeatures {
        SiteFeatures: Array<IFeature>;
        WebFeatures: Array<IFeature>;
    }

    export class Features implements IFeatures {
        SiteFeatures: Array<IFeature>;
        WebFeatures: Array<IFeature>;
    }

   


    
}