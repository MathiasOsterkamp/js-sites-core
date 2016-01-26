/// <reference path="IWebPart.ts" />
/// <reference path="IHiddenView.ts" />

module Pzl.Sites.Core.Schema {
    export interface IFile {
        Overwrite: boolean;
        Folder: string;
        Src: string;
        Properties: Object;
        RemoveExistingWebParts: boolean;
        WebParts: Array<IWebPart>;
        Views: Array<HiddenView>;
        Security: IObjectSecurity;
    }
    export class File implements IFile {
        Overwrite: boolean;
        Folder: string;
        Src: string;
        Properties: Object;
        RemoveExistingWebParts: boolean;
        WebParts: Array<IWebPart>;
        Views: Array<HiddenView>;
        Security: IObjectSecurity;
    }

 
   
}