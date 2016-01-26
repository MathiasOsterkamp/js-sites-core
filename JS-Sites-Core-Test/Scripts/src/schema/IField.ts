module Pzl.Sites.Core.Schema {
    export interface IField {
        Name: string;
    }

    export class Field implements IField {
        Name: string;
    }
}