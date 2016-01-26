module Pzl.Sites.Core.Schema {
    export interface IWebSettings {
        RequestAccessEmail: string;
        NoCrawl: boolean;
        WelcomePage: string;
        Title: string;
        Description: string;
        SiteLogo: string;
        AlternateCSS: string;
        MasterPageUrl: string;
        CustomMasterPageUrl: string;
    }
    export class WebSettings implements IWebSettings {
        RequestAccessEmail: string;
        NoCrawl: boolean;
        WelcomePage: string;
        Title: string;
        Description: string;
        SiteLogo: string;
        AlternateCSS: string;
        MasterPageUrl: string;
        CustomMasterPageUrl: string;
    }
}