module Pzl.Sites.Core.Schema {
    export interface IFolder {
        Name : string;
        DefaultValues: Object; 
    }
    export class Folder implements IFolder {
        Name: string;
        DefaultValues: Object;
    }
}