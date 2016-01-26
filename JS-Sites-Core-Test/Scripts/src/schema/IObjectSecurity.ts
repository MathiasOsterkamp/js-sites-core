module Pzl.Sites.Core.Schema {
    export interface IObjectSecurity {
        BreakRoleInheritance
    }
    export class ObjectSecurity implements IObjectSecurity {
        BreakRoleInheritance: IBreakRoleInheritance;
    }
}