/// <reference path="IRoleDefinition.ts" />
/// <reference path="IRoleAssignment.ts" />
/// <reference path="IUser.ts" />
/// <reference path="ISiteGroup.ts" />
module Pzl.Sites.Core.Schema {
    export interface ISecurity {
        AdditionalAdministrators: Array<IUser>;
        AdditionalOwners: Array<IUser>;
        AdditionalMembers: Array<IUser>;
        AdditionalVisitors: Array<IUser>;
        SiteGroups :	Array<ISiteGroup>;
        Permissions: IPermissions;
        BreakRoleInheritance: IBreakRoleInheritance;
    }
    export class Security implements ISecurity {
        AdditionalAdministrators: Array<IUser>;
        AdditionalOwners: Array<IUser>;
        AdditionalMembers: Array<IUser>;
        AdditionalVisitors: Array<IUser>;
        SiteGroups: Array<ISiteGroup>;
        Permissions: IPermissions;
        BreakRoleInheritance: IBreakRoleInheritance;
    }
}