/// <reference path="..\typings\tsd.d.ts" />
/// <reference path="schema/IProvisioning.ts" />
/// <reference path="objecthandlers/Lists.ts" />
/// <reference path="objecthandlers/ComposedLook.ts" />
/// <reference path="objecthandlers/Files.ts" />
/// <reference path="objecthandlers/Pages.ts" />
/// <reference path="objecthandlers/CustomActions.ts" />
/// <reference path="objecthandlers/LocalNavigation.ts" />
/// <reference path="objecthandlers/PropertyBagEntries.ts" />
/// <reference path="objecthandlers/WebSettings.ts" />
/// <reference path="utilities/Logger.ts" />
/// <reference path="model/TemplateQueueItem.ts" />
/// <reference path="model/ILoggingOptions.ts" />

module Pzl.Sites.Core {
    var startTime = null;
    export var Log: Logger;
    enum ObjectHandlerMethods {
        ProvisionObjects,
        ReadObjects
    }
    var setupWebDialog: SP.UI.ModalDialog;

    function ShowWaitMessage(header, content, height, width) {
        setupWebDialog = SP.UI.ModalDialog.showWaitScreenWithNoClose(header, content, height, width);
    }

    function start(json: Schema.IProvisioningTemplate, creationInformation: Schema.IProvisioningTemplateCreationInformation, method: ObjectHandlerMethods, factory: Model.IContextFactory): JQueryDeferred<Schema.IProvisioningTemplate>{
        var def = jQuery.Deferred();

        startTime = new Date().getTime();
        Log.Information("Provisioning", `Starting at URL '${factory.GetInstance().webServerRelativeUrl}'`);


        var queueItems: Array<Model.TemplateQueueItem> = [];
        var handlers = new Model.ObjectHandlerList();
        handlers.List.forEach((value) => {
            if (creationInformation["Export" + value] && ObjectHandlers[value]) {
                queueItems.push(new Model.TemplateQueueItem(value, index, json[value], creationInformation, new ObjectHandlers[value]()[ObjectHandlerMethods[method]], factory.GetInstance()));
            }
        });

        var results = {};
        var promises = [];
        promises.push(jQuery.Deferred());
        promises[0].resolve();
        promises[0].promise();

        var index = 1;
        while (queueItems[index - 1] != undefined) {
            var i = promises.length - 1;
            promises.push(queueItems[index - 1].execute(promises[i]));

            results[queueItems[index - 1].name] = null;
            index++;
        };

        jQuery.when.apply(jQuery, promises).then(function () {
            var args = arguments;
            var n = 1;
            for (var i in results) {
                results[i] = <any>args[n];
                n++;
            }
            def.resolve(results);
        });

        return def;
    }

    export function publish(factory: Model.IContextFactory, template: Schema.IProvisioning, creationInformation: Schema.IProvisioningTemplateCreationInformation, loggingOptions: Model.ILoggingOptions): JQueryDeferred<Core.Logger>  {
        var def = jQuery.Deferred();
        ShowWaitMessage("Applying template", "This might take a moment..", 130, 600);

        Log = new Logger(loggingOptions);
       
        start(template.Template, creationInformation, ObjectHandlerMethods.ProvisionObjects, factory).then(() => {
            var provisioningTime = ((new Date().getTime()) - startTime) / 1000;
            Log.Information("Provisioning", `All done in ${provisioningTime} seconds`);
            Log.SaveToFile(factory.GetInstance()).then(() => {
                setupWebDialog.close(null);
                def.resolve(Log);
            });
        });

        return def;
    }
    export function read(factory: Model.IContextFactory, template: Schema.IProvisioning, creationInformation: Schema.IProvisioningTemplateCreationInformation, loggingOptions: Model.ILoggingOptions): JQueryDeferred<Core.Logger> {


        var def = jQuery.Deferred();
        ShowWaitMessage("Reading template", "This might take a moment..", 130, 600);

        Log = new Logger(loggingOptions);
      
        start(template.Template, creationInformation, ObjectHandlerMethods.ReadObjects, factory).then((generated) => {
            var provisioningTime = ((new Date().getTime()) - startTime) / 1000;
            Log.Information("Reading", `All done in ${provisioningTime} seconds`);
            Log.SaveToFile(factory.GetInstance()).then(() => {
                setupWebDialog.close(null);
                template.Template = generated;
                def.resolve(Log, generated);
            });
        });



        return def;
    }
}