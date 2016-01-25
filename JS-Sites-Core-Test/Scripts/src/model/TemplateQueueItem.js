/// <reference path="..\..\typings\tsd.d.ts" />
var Pzl;
(function (Pzl) {
    var Sites;
    (function (Sites) {
        var Core;
        (function (Core) {
            var Model;
            (function (Model) {
                var TemplateQueueItem = (function () {
                    function TemplateQueueItem(name, index, objects, parameters, callback) {
                        this.name = name;
                        this.index = index;
                        this.objects = objects;
                        this.parameters = parameters;
                        this.callback = callback;
                    }
                    TemplateQueueItem.prototype.execute = function (dependentPromise) {
                        var _this = this;
                        if (!dependentPromise) {
                            return this.callback(this.objects, this.parameters);
                        }
                        var def = jQuery.Deferred();
                        dependentPromise.done(function () {
                            return _this.callback(_this.objects, _this.parameters).done(function () {
                                def.resolve();
                            });
                        });
                        return def.promise();
                    };
                    return TemplateQueueItem;
                })();
                Model.TemplateQueueItem = TemplateQueueItem;
            })(Model = Core.Model || (Core.Model = {}));
        })(Core = Sites.Core || (Sites.Core = {}));
    })(Sites = Pzl.Sites || (Pzl.Sites = {}));
})(Pzl || (Pzl = {}));
