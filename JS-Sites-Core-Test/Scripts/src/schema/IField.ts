module Pzl.Sites.Core.Schema {
    export interface IField {
        Name: string;
        SchemaXml: string;
    }

    export class Field implements IField {
        Name: string;
        SchemaXml: string;
    }
}