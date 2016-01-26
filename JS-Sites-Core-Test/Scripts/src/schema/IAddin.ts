module Pzl.Sites.Core.Schema {
    export interface IAddin {
        PackagePath: string;
        Source: string;
    }
    export class Addin implements IAddin {
        PackagePath: string;
        Source: string;
    }
   
}