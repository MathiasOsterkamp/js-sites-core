module Pzl.Sites.Core.Schema {
    export interface IRoleAssignment {
        Principal: string;
        RoleDefinition: any;
    }
    export class RoleAssignment implements IRoleAssignment {
        Principal: string;
        RoleDefinition: any;
    }
}