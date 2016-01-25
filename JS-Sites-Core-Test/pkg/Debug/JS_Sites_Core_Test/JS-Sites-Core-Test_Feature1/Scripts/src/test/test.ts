module Pzl.Sites.Test {
    var siteTemplateConfig = <Pzl.Sites.Core.Schema.SiteSchema>{};
    var logging = <Pzl.Sites.Core.Model.ILoggingOptions>{ "On": true };
   
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
        Pzl.Sites.Core.read(logging).done(() => {
            alert('ready');
        });
    });
}