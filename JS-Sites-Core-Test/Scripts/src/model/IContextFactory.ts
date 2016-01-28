module Pzl.Sites.Core.Model {
    export interface IContextFactoryInstance {
        Web: SP.Web;
        ClientContext: SP.ClientContext;
        webAbsoluteUrl: string;
        siteAbsoluteUrl: string;
        webServerRelativeUrl: string;
        siteServerRelativeUrl: string;
    }
    export class ContextFactoryInstance  implements IContextFactoryInstance{
        Web: SP.Web;
        ClientContext: SP.ClientContext;
        webAbsoluteUrl: string;
        siteAbsoluteUrl: string;
        webServerRelativeUrl: string;
        siteServerRelativeUrl: string;
        constructor() {
           
        }
       
    }
    export interface IContextFactory {
       GetInstance();
    }
   
    export class CurrentContextFactory implements IContextFactory {
        constructor() {

        }
        GetInstance(): ContextFactoryInstance {
            var instance = new ContextFactoryInstance();
            var cc : any = SP.ClientContext.get_current();
            instance.ClientContext =  cc; 
            instance.Web = instance.ClientContext.get_web();
            instance.siteAbsoluteUrl = _spPageContextInfo.siteAbsoluteUrl;
            instance.webAbsoluteUrl = _spPageContextInfo.webAbsoluteUrl;
            instance.webServerRelativeUrl = _spPageContextInfo.webServerRelativeUrl;
            instance.siteServerRelativeUrl = _spPageContextInfo.siteServerRelativeUrl;

            return instance;
        }
    }
    export class WebContextFactory implements IContextFactory {
        webUrl: string;
        constructor(webUrl: string) {
            this.webUrl = webUrl;
        }
        GetInstance(): ContextFactoryInstance {
            var instance = new ContextFactoryInstance();
            instance.ClientContext = new SP.ClientContext(this.webUrl);
            instance.Web = instance.ClientContext.get_web();
            instance.siteAbsoluteUrl = this.webUrl;
            instance.webAbsoluteUrl = this.webUrl;
            instance.webServerRelativeUrl = this.webUrl.replace(window.location.protocol + '//' + window.location.host, "");
            instance.siteServerRelativeUrl = this.webUrl.replace(window.location.protocol + '//' + window.location.host, "");

            return instance;
        }
    }
    export class WebProxyContextFactory implements IContextFactory {
        appWebUrl: string;
        hostWebUrl: string;
        constructor(hostWebUrl: string, appWebUrl: string) {
            this.appWebUrl = appWebUrl;
            this.hostWebUrl = hostWebUrl;
        }
        GetInstance(): ContextFactoryInstance {
            var instance = new ContextFactoryInstance();

            var context = new SP.ClientContext(this.appWebUrl);
            var factory = new SP.ProxyWebRequestExecutorFactory(this.appWebUrl);
            context.set_webRequestExecutorFactory(factory);
            var appContextSite = new SP.AppContextSite(context, this.hostWebUrl);
            var web = appContextSite.get_web();

            instance.ClientContext = context;
            instance.Web = web;
            instance.siteAbsoluteUrl = this.hostWebUrl;
            instance.webAbsoluteUrl = this.hostWebUrl;
            instance.webServerRelativeUrl = this.hostWebUrl.replace(window.location.protocol + '//' + window.location.host, "");
            instance.siteServerRelativeUrl = this.hostWebUrl.replace(window.location.protocol + '//' + window.location.host, "");

            return instance;
        }
    }
}