module Pzl.Sites.Core.Schema {
    export interface IDesignPackage {
        DesignPackagePath: string;
        MajorVersion: number;
        MinorVersion: number;
        PackageGuid: string;
        PackageName: string;
    }
export class DesignPackage implements IDesignPackage {
    DesignPackagePath: string;
    MajorVersion: number;
    MinorVersion: number;
    PackageGuid: string;
    PackageName: string;
    }
}