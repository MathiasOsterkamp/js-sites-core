/// <reference path="IObjectHandler.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Model;
            (function (Model) {
                var ObjectHandlerBase = (function () {
                    function ObjectHandlerBase(name) {
                        this.name = name;
                    }
                    ObjectHandlerBase.prototype.ProvisionObjects = function (objects, parameters) { };
                    return ObjectHandlerBase;
                })();
                Model.ObjectHandlerBase = ObjectHandlerBase;
            })(Model = Core.Model || (Core.Model = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
