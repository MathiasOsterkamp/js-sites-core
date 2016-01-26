/// <reference path="IContentTypeBinding.ts" />
/// <reference path="IFolder.ts" />
/// <reference path="ISecurity.ts" />
/// <reference path="IView.ts" />

module Pzl.Sites.Core.Schema {
    export interface IListInstance {
        Title: string;
        Description: string;
        DocumentTemplate: string;
        OnQuickLaunch: boolean;
        TemplateType: number;
        Url: string;
        EnableVersioning: boolean;
        EnableMinorVersions: boolean;
        EnableModeration: boolean;
        MinorVersionLimit: number;
        MaxVersionLimit: number;
        DraftVersionVisibility: number;
        RemoveExistingContentTypes: boolean;
        TemplateFeatureID: string;
        ContentTypesEnabled: boolean;
        Hidden: boolean;
        EnableAttachments: boolean;
        EnableFolderCreation: boolean;
        ContentTypeBindings: Array<IContentTypeBinding>;
        Folders: Array<IFolder>;
        Views: Array<IView>;
        Security: ISecurity;
        Fields: Array<IField>;
        FieldRefs: Array<IListInstanceFieldRef>;
        //DataRows: Array<IField>;                            
        //FieldDefaults: Array<IField>;

    }
    export class ListInstance implements IListInstance {
        Title: string;
        Description: string;
        DocumentTemplate: string;
        OnQuickLaunch: boolean;
        TemplateType: number;
        Url: string;
        EnableVersioning: boolean;
        EnableMinorVersions: boolean;
        EnableModeration: boolean;
        MinorVersionLimit: number;
        MaxVersionLimit: number;
        DraftVersionVisibility: number;
        RemoveExistingContentTypes: boolean;
        TemplateFeatureID: string;
        ContentTypesEnabled: boolean;
        Hidden: boolean;
        EnableAttachments: boolean;
        EnableFolderCreation: boolean;
        ContentTypeBindings: Array<IContentTypeBinding>;
        Folders: Array<IFolder>;
        Views: Array<IView>;
        Security: ISecurity;
        Fields: Array<IField>;
        FieldRefs: Array<IListInstanceFieldRef>;
        //DataRows: Array<IField>;                            
        //FieldDefaults: Array<IField>;
    }
}