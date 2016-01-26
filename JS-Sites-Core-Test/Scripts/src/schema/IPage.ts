/// <reference path="IWebPart.ts" />

module Pzl.Sites.Core.Schema {
    export interface IPage {
        Overwrite: string;
        Url: string;
        Layout: string;
        RemoveExistingWebParts: Boolean;
        WebParts: Array<IWebPart>;
        Security: IObjectSecurity;
        //Fields 
    }
    export class Page implements IPage {
        Overwrite: string;
        Url: string;
        Layout: string;
        RemoveExistingWebParts: Boolean;
        WebParts: Array<IWebPart>;
        Security: IObjectSecurity;
    }
}