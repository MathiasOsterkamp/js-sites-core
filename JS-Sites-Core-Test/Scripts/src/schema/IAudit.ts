module Pzl.Sites.Core.Schema {
    export interface IAudit {
        AuditFlag: string;
    }
    export class Audit implements IAudit {
        AuditFlag: string;
    }
}