module Pzl.Sites.Core.Schema {
    export interface IHiddenView {
        List: string;
        Url: string;
        Paged: boolean;
        Query: string;
        RowLimit: number;
        ViewFields: Array<string>;
    }
    export class HiddenView implements IHiddenView {
        List: string;
        Url: string;
        Paged: boolean;
        Query: string;
        RowLimit: number;
        ViewFields: Array<string>;
    }
}