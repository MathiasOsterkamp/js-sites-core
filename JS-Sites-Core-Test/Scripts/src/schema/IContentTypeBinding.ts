module Pzl.Sites.Core.Schema {
    export interface IContentTypeBinding {
       ContentTypeId: string;
       Default: Boolean;
    }

    export class ContentTypeBinding implements IContentTypeBinding {
        ContentTypeId: string;
        Default: Boolean;
    }
}