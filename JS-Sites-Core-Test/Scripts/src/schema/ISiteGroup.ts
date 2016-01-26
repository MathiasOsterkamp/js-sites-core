module Pzl.Sites.Core.Schema {
    export interface ISiteGroup {
        Title: string;
        Description: string;
        Owner: string;
        AllowMembersEditMembership: boolean;
        AllowRequestToJoinLeave: boolean;
        AutoAcceptRequestToJoinLeave: boolean;
        OnlyAllowMembersViewMembership: boolean;
        RequestToJoinLeaveEmailSetting: string;
        Members: Array<IUser>;
    }
    export class SiteGroup implements ISiteGroup {
        Title: string;
        Description: string;
        Owner: string;
        AllowMembersEditMembership: boolean;
        AllowRequestToJoinLeave: boolean;
        AutoAcceptRequestToJoinLeave: boolean;
        OnlyAllowMembersViewMembership: boolean;
        RequestToJoinLeaveEmailSetting: string;
        Members: Array<IUser>;
    }
   
}