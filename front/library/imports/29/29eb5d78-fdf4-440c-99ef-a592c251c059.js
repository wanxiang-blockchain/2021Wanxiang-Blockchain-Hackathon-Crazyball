"use strict";
cc._RF.push(module, '29eb514/fREDJnvpZLCUcBZ', 'pool_mgr');
// src/common/pool/pool_mgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pool_mgr = void 0;
var loader_mgr_1 = require("../loader/loader_mgr");
var ui_pool_1 = require("./ui_pool");
var pool_mgr = /** @class */ (function () {
    function pool_mgr() {
        this.ui_pool = new ui_pool_1.ui_pool();
    }
    pool_mgr.get_inst = function () {
        if (!this._inst) {
            this._inst = new pool_mgr();
        }
        return this._inst;
    };
    pool_mgr.prototype.get_ui = function (path, cb) {
        var ui = this.ui_pool.get(path);
        if (ui) {
            // cc.info("pool_mgr:get_ui from cache", path);
            cb.exec(ui);
            return;
        }
        // cc.info("pool_mgr:get_ui from loader", path);
        loader_mgr_1.loader_mgr.get_inst().loadPrefabObj(path, cb);
    };
    pool_mgr.prototype.put_ui = function (path, ui) {
        if (!ui) {
            cc.warn("pool_mgr:put_ui, invalid node");
            return;
        }
        this.ui_pool.put(path, ui);
    };
    pool_mgr.prototype.clear_atpath = function (path) {
        this.ui_pool.clear_atpath(path);
    };
    pool_mgr.prototype.clear = function () {
        this.ui_pool.clear();
    };
    pool_mgr.prototype.dump = function () {
        this.ui_pool.dump();
    };
    return pool_mgr;
}());
exports.pool_mgr = pool_mgr;

cc._RF.pop();