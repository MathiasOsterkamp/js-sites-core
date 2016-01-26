module Pzl.Sites.Core.Schema {
    export interface IBreakRoleInheritance {
        CopyRoleAssignments: boolean;
        ClearSubscopes: boolean;
    }
    export class BreakRoleInheritance implements IBreakRoleInheritance {
        CopyRoleAssignments: boolean;
        ClearSubscopes: boolean;
    }
}