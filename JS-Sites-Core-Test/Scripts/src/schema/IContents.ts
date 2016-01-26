module Pzl.Sites.Core.Schema {
    export interface IContents {
        Xml: string;
        FileUrl: string;
    }
    export class Contents implements IContents {
        Xml: string;
        FileUrl: string;
    }
}