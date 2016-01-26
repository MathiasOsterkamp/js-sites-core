module Pzl.Sites.Core.Schema {
    export interface IWorkflows {
        WorkflowDefinitions: Array<WorkflowDefinition>;
        WorkflowSubscriptions: Array<IWorkflowSubscription>;
    }
    export class Workflows implements IWorkflows {
        WorkflowDefinitions: Array<WorkflowDefinition>;
        WorkflowSubscriptions: Array<IWorkflowSubscription>;
    }

   
}