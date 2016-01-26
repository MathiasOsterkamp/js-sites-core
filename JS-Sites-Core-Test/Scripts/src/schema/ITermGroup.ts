module Pzl.Sites.Core.Schema {
    export interface ITermGroup {
        Description: string;
        SiteCollectionTermGroup: boolean;
        Name: string;
        ID: string;
        TermSets: Array<ITermSet>;
    }
    export class TermGroup implements ITermGroup {
        Description: string;
        SiteCollectionTermGroup: boolean;
        Name: string;
        ID: string;
        TermSets: Array<ITermSet>;
    }
   
}