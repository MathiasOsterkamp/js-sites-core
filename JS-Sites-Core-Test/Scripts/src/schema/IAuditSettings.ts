module Pzl.Sites.Core.Schema {
    
    export interface IAuditSettings {
        AuditLogTrimmingRetention: number;
        TrimAuditLog: boolean;
        Audits: Array<IAudit>;
    }
    export class AuditSettings implements IAuditSettings {
        AuditLogTrimmingRetention: number;
        TrimAuditLog: boolean;
        Audits: Array<IAudit>;
    }
}