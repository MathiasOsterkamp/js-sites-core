module Pzl.Sites.Core.Schema {
    export interface IPermissions {
        RoleDefinitions: Array<IRoleDefinition>;   
        RoleAssignments: Array<IRoleAssignment>;    
    }
    export class Permissions implements IPermissions {
        RoleDefinitions: Array<IRoleDefinition>;
        RoleAssignments: Array<IRoleAssignment>;    
    }
   
}