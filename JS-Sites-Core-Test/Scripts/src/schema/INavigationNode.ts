module Pzl.Sites.Core.Schema {
    export interface INavigationNode {
        Title: string;
        Url: string;
    }
    export class NavigationNode implements INavigationNode {
        Title: string;
        Url: string;
    }
}