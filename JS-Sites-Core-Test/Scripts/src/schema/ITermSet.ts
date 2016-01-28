module Pzl.Sites.Core.Schema {
    export interface ITermSet {
        Language: number;
        Name: string;
        IsOpenForTermCreation: boolean;
        Terms: Array<ITerm>;
        Id: string;
    }
    export class TermSet implements ITermSet {
        Language: number;
        Name: string;
        IsOpenForTermCreation: boolean;
        Terms: Array<ITerm>;
        Id: string;
    }
   
}