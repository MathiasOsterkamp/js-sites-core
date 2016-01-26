module Pzl.Sites.Core.Schema {

    


    export interface ICustomAction {
        CommandUIExtension : any;
        Description: string;
        Group: string;
        ImageUrl: string;
        Location: string;
        Name: string;
        RegistrationId: string;
        RegistrationType: any;
        Rights: any;
        ScriptBlock: string;
        ScriptSrc: string;
        Sequence: number;
        Title: string;
        Url: string;        
    }
    export class CustomAction implements ICustomAction {
        CommandUIExtension: any;
        Description: string;
        Group: string;
        ImageUrl: string;
        Location: string;
        Name: string;
        RegistrationId: string;
        RegistrationType: any;
        Rights: any;
        ScriptBlock: string;
        ScriptSrc: string;
        Sequence: number;
        Title: string;
        Url: string;
    }
}