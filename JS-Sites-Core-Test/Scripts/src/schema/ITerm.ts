module Pzl.Sites.Core.Schema {
    export interface ITerm  {
        Language: number;
        CustomSortOrder: string;
        IsReused: boolean;
        IsSourceTerm: boolean;
        IsDeprecated: boolean;
        SourceTermId: string;
        Name: string;
        Terms: Array<ITerm>;
        Level: number;
        PathOfTerm: string;
    }
    export class Term implements ITerm {
        Language: number;
        CustomSortOrder: string;
        IsReused: boolean;
        IsSourceTerm: boolean;
        IsDeprecated: boolean;
        SourceTermId: string;
        Name: string;
        Terms: Array<ITerm>;
        Level: number;
        PathOfTerm: string;
    }
   
}