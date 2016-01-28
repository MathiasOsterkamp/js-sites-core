/// <reference path="IListInstance.ts" />
/// <reference path="IFile.ts" />
/// <reference path="IPage.ts" />
/// <reference path="IFeature.ts" />
/// <reference path="IField.ts" />
/// <reference path="IContentType.ts" />
/// <reference path="INavigationNode.ts" />
/// <reference path="ICustomAction.ts" />
/// <reference path="IComposedLook.ts" />
/// <reference path="IWebSettings.ts" />

module Pzl.Sites.Core.Schema {
    export interface IProvisioning{
        Template:IProvisioningTemplate;
    }
    export class Provisioning implements IProvisioning {
        Template: IProvisioningTemplate;
    }
}