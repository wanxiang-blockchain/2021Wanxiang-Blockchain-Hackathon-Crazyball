"use strict";
cc._RF.push(module, '0a950yUsOZNy5HTWZ9gz1hi', 'ui_pool');
// src/common/pool/ui_pool.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ui_pool = void 0;
//lru(last recently used) cache
var ui_pool = /** @class */ (function () {
    function ui_pool() {
        this.max_size = 2;
        this.cache = {};
        this.path2time = {};
        this.size = 0;
    }
    ui_pool.prototype.get = function (path) {
        var uis = this.cache[path];
        if (uis && uis.length > 0) {
            this.size--;
            return uis.pop();
        }
        return null;
    };
    ui_pool.prototype.put = function (path, ui) {
        if (this.size >= this.max_size) {
            //删除最早的缓存
            var del_path = void 0;
            var ts = cc.sys.now();
            for (var p in this.cache) {
                if (this.cache[p].length > 0 && this.path2time[p] < ts) {
                    ts = this.path2time[p];
                    del_path = p;
                }
            }
            if (del_path && del_path != "") {
                var del_ui = this.cache[del_path].pop();
                del_ui.destroy();
                this.size--;
                // cc.info("ui_pool:pool capacity is max, destroy old ui,", del_path);
            }
        }
        var uis = this.cache[path];
        if (!uis) {
            this.cache[path] = uis = [];
        }
        ui.removeFromParent(false);
        uis.push(ui);
        this.size++;
        this.path2time[path] = cc.sys.now();
    };
    ui_pool.prototype.clear_atpath = function (path) {
        var uis = this.cache[path];
        if (!uis || uis.length <= 0) {
            return;
        }
        while (uis.length > 0) {
            var ui = uis.pop();
            ui.destroy();
            this.size--;
        }
    };
    ui_pool.prototype.clear = function () {
        for (var path in this.cache) {
            this.clear_atpath(path);
        }
        this.cache = {};
        this.path2time = {};
        if (this.size != 0) {
            cc.warn("size should be 0, but now is", this.size);
        }
    };
    ui_pool.prototype.dump = function () {
        var str = "********ui_pool dump********";
        for (var path in this.cache) {
            str += "\n" + path + "\n";
            this.cache[path].forEach(function (u) {
                str += u.name + ",";
            });
        }
        cc.log(str);
    };
    return ui_pool;
}());
exports.ui_pool = ui_pool;

cc._RF.pop();