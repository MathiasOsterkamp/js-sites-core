module Pzl.Sites.Test {
 
    var logging = <Pzl.Sites.Core.Model.ILoggingOptions>{ "On": true };
   
    SP.SOD.executeFunc('sp.js', 'SP.ClientContext', function () {
        var template = <Pzl.Sites.Core.Schema.IProvisioning>{
            Templates: [{
                "PropertyBagEntries": {},
                "WebSettings": {},
                "Lists": {},
                "CustomActions": {},
                "ComposedLook": {}
            }]
        };
        Pzl.Sites.Core.read(template,logging).done(() => {
            
        });
    });
}