module Pzl.Sites.Core.Schema {
    export interface IComposedLook {
        Name: string;
        ColorFile: string;
        FontFile: string;
        BackgroundFile: string;
        Version: number;
    }
    export class ComposedLook implements IComposedLook {
        Name: string;
        ColorFile: string;
        FontFile: string;
        BackgroundFile: string;
        Version: number;
    }
}