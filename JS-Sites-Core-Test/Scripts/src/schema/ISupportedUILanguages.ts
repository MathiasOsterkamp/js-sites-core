module Pzl.Sites.Core.Schema {
    export interface ISupportedUILanguage {
        LCID: number;
    }
    export class SupportedUILanguage implements ISupportedUILanguage {
        LCID: number;
    }
}