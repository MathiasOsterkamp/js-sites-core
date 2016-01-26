module Pzl.Sites.Core.Schema {
    export interface IPublishing {
        DesignPackage: IDesignPackage;
        AvailableWebTemplates: Array<IWebTemplate>;
        PageLayouts:Array<IPageLayout>;
    }
    export class Publishing implements IPublishing {
        DesignPackage: IDesignPackage;
        AvailableWebTemplates: Array<IWebTemplate>;
        PageLayouts: Array<IPageLayout>;
    }
}