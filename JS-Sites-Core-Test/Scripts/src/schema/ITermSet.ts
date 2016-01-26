module Pzl.Sites.Core.Schema {
    export interface ITermSet {
        Language: number;
        IsOpenForTermCreation: boolean;
        Terms: Array<ITerm>;
    }
    export class TermSet implements ITermSet {
        Language: number;
        IsOpenForTermCreation: boolean;
        Terms: Array<ITerm>;
    }
   
}