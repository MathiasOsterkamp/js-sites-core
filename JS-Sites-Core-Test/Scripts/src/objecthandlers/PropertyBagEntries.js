/// <reference path="..\..\typings\tsd.d.ts" />
/// <reference path="..\model\ObjectHandlerBase.ts" />
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var ObjectHandlers;
            (function (ObjectHandlers) {
                var PropertyBagEntries = (function (_super) {
                    __extends(PropertyBagEntries, _super);
                    function PropertyBagEntries() {
                        _super.call(this, "PropertyBagEntries");
                    }
                    PropertyBagEntries.prototype.ProvisionObjects = function (object) {
                        var _this = this;
                        Core.Log.Information(this.name, "Starting provisioning of objects");
                        var def = jQuery.Deferred();
                        var clientContext = SP.ClientContext.get_current();
                        var web = clientContext.get_web();
                        var allProperties = web.get_allProperties();
                        for (var key in object) {
                            Core.Log.Information(this.name, "Setting property '" + key + "' = '" + object[key] + "' on web");
                            allProperties.set_item(key, object[key]);
                        }
                        web.update();
                        clientContext.executeQueryAsync(function () {
                            Core.Log.Information(_this.name, "Provisioning of objects ended");
                            def.resolve();
                        }, function (sender, args) {
                            def.resolve(sender, args);
                        });
                        return def.promise();
                    };
                    return PropertyBagEntries;
                })(Core.Model.ObjectHandlerBase);
                ObjectHandlers.PropertyBagEntries = PropertyBagEntries;
            })(ObjectHandlers = Core.ObjectHandlers || (Core.ObjectHandlers = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
