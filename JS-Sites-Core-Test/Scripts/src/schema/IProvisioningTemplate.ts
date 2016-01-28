module Pzl.Sites.Core.Schema {
    export interface IProvisioningTemplate {
     
        SitePolicy: string;
        WebSettings: IWebSettings;
        RegionalSettings: IRegionalSettings;
        SupportedUILanguages: Array<SupportedUILanguage>;
        AuditSettings: IAuditSettings;
        PropertyBagEntries: any;
        Security: ISecurity;
        SiteFields: Array<Object>;
        ContentTypes: Array<IContentType>;
        Lists: Array<IListInstance>;
        Features: IFeatures;
        CustomActions: ICustomActions;
        Files: Array<IFile>;
        Pages: Array<IPage>;
        TermGroups: Array<ITermGroup>;
        ComposedLook: IComposedLook;
        Workflows: IWorkflows;
        SearchSettings: string;
        Publishing: IPublishing;
        AddIns: Array<IAddin>;
        //Providers: any;
    }
    export class ProvisioningTemplate implements IProvisioningTemplate {

        SitePolicy: string;
        WebSettings: IWebSettings;
        RegionalSettings: IRegionalSettings;
        SupportedUILanguages: Array<SupportedUILanguage>;
        AuditSettings: IAuditSettings;
        PropertyBagEntries: any;
        Security: ISecurity;
        SiteFields: Array<Object>;
        ContentTypes: Array<IContentType>;
        Lists: Array<IListInstance>;
        Features: IFeatures;
        CustomActions: ICustomActions;
        Files: Array<IFile>;
        Pages: Array<IPage>;
        TermGroups: any;
        ComposedLook: IComposedLook;
        Workflows: IWorkflows;
        SearchSettings: string;
        Publishing: IPublishing;
        AddIns: Array<IAddin>;
    }
}
