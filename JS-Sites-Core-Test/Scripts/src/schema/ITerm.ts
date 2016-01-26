module Pzl.Sites.Core.Schema {
    export interface ITerm  {
        Language: number;
        CustomSortOrder: number;
        IsReused: boolean;
        IsSourceTerm: boolean;
        IsDeprecated: boolean;
        SourceTermId: string;
    }
    export class Term implements ITerm {
        Language: number;
        CustomSortOrder: number;
        IsReused: boolean;
        IsSourceTerm: boolean;
        IsDeprecated: boolean;
        SourceTermId: string;
    }
   
}