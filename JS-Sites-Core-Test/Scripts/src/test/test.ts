module Pzl.Sites.Test {
   
    function encode(text) {
        var tagsToReplace = {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;'
        };

        function replaceTag(tag) {
            return tagsToReplace[tag] || tag;
        }

        function safe_tags_replace(str) {
            return str.replace(/[&<>]/g, replaceTag);
        }

        return safe_tags_replace(text);
    }
    function getQueryStringParameter(paramToRetrieve) {
        var params =
            document.URL.split("?")[1].split("&");
        for (var i = 0; i < params.length; i = i + 1) {
            var singleParam = params[i].split("=");
            if (singleParam[0] == paramToRetrieve)
                return singleParam[1];
        }
    }
    var hostweburl = getQueryStringParameter("SPHostUrl");
    var appweburl = getQueryStringParameter("SPAppWebUrl");
    hostweburl = decodeURIComponent(hostweburl);
    appweburl = decodeURIComponent(appweburl);
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
        
        $.getScript(SP.Utilities.Utility.getLayoutsPageUrl('sp.requestexecutor.js'), () => {
            $.getScript(SP.Utilities.Utility.getLayoutsPageUrl('sp.Policy.js'), () => {
        $.getScript(SP.Utilities.Utility.getLayoutsPageUrl('sp.taxonomy.js'), () => {
            var ptemplate = new Pzl.Sites.Core.Schema.ProvisioningTemplate();
            ptemplate.ContentTypes = [];//new Pzl.Sites.Core.Schema.ContentType();

            var creationinformation = new Pzl.Sites.Core.Schema.ProvisioningTemplateCreationInformation();
            var logging = <Pzl.Sites.Core.Model.ILoggingOptions>{ "On": true };
            var template = new Pzl.Sites.Core.Schema.Provisioning();
            template.Template=ptemplate;
            var contextFactory = new Pzl.Sites.Core.Model.WebProxyContextFactory(hostweburl, appweburl);
            Pzl.Sites.Core.read(contextFactory, template, creationinformation, logging).done((log: Core.Logger) => {
                var html = log.array.join("<br>");
                
               
                jQuery("#message").html(html);
                var html2 = JSON.stringify(template, null, 4);
                
                jQuery("#resultcontent").html(encode(html2));
                
            });

                });
            });
        });




      
    
    });
}