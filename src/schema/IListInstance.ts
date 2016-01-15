/// <reference path="IContentTypeBinding.ts" />
/// <reference path="IFolder.ts" />

module Pzl.Sites.Core.Schema {
    export interface IListInstance {
        Title: string;
        Url: string;
        Description: string,
        DocumentTemplate: string;
        OnQuickLaunch: Boolean;
        TemplateType: number;
        EnableVersioning: Boolean;
        MinorVersionLimit: number;
        MaxVersionLimit: number;
        DraftVersionVisibility: number;
        ContentTypeBindings: Array<IContentTypeBinding>;
        Folders: Array<IFolder>;
    }
}