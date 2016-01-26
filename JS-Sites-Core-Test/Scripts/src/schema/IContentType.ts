module Pzl.Sites.Core.Schema {
    export interface IContentType {
        ID: string;
        Name: string;
        Description: string;
        Group: string;
        Hidden: boolean;
        Sealed: boolean;
        ReadOnly: boolean;
        Overwrite: boolean;
        NewFormUrl: string;
        EditFormUrl: string;
        DisplayFormUrl: string;
        FieldRefs: Array<ListInstanceFieldRef>;
    }

    export class ContentType implements IContentType {
        ID: string;
        Name: string;
        Description: string;
        Group: string;
        Hidden: boolean;
        Sealed: boolean;
        ReadOnly: boolean;
        Overwrite: boolean;
        NewFormUrl: string;
        EditFormUrl: string;
        DisplayFormUrl: string;
        FieldRefs: Array<ListInstanceFieldRef>;
    }
}