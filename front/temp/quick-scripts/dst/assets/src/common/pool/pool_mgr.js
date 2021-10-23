
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/pool/pool_mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3Bvb2wvcG9vbF9tZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbURBQWlEO0FBRWpELHFDQUFtQztBQUVuQztJQUlJO1FBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLGlCQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDO0lBRU0saUJBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1NBQy9CO1FBQ0QsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3RCLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sSUFBWSxFQUFFLEVBQVc7UUFDNUIsSUFBSSxFQUFFLEdBQVksSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekMsSUFBSSxFQUFFLEVBQUU7WUFDSiwrQ0FBK0M7WUFDL0MsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNaLE9BQU87U0FDVjtRQUNELGdEQUFnRDtRQUNoRCx1QkFBVSxDQUFDLFFBQVEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEQsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxJQUFZLEVBQUUsRUFBVztRQUM1QixJQUFJLENBQUMsRUFBRSxFQUFFO1lBQ0wsRUFBRSxDQUFDLElBQUksQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1lBQ3pDLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUQsK0JBQVksR0FBWixVQUFhLElBQVk7UUFDckIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELHdCQUFLLEdBQUw7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFRCx1QkFBSSxHQUFKO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBQ0wsZUFBQztBQUFELENBN0NBLEFBNkNDLElBQUE7QUE3Q1ksNEJBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkZXJfbWdyIH0gZnJvbSBcIi4uL2xvYWRlci9sb2FkZXJfbWdyXCJcbmltcG9ydCB7IGhhbmRsZXIsIGdlbl9oYW5kbGVyIH0gZnJvbSBcIi4uL3V0aWxcIlxuaW1wb3J0IHsgdWlfcG9vbCB9IGZyb20gXCIuL3VpX3Bvb2xcIlxuXG5leHBvcnQgY2xhc3MgcG9vbF9tZ3Ige1xuICAgIHByaXZhdGUgc3RhdGljIF9pbnN0OiBwb29sX21ncjtcbiAgICBwcml2YXRlIHVpX3Bvb2w6IHVpX3Bvb2w7XG5cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLnVpX3Bvb2wgPSBuZXcgdWlfcG9vbCgpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRfaW5zdCgpOiBwb29sX21nciB7XG4gICAgICAgIGlmICghdGhpcy5faW5zdCkge1xuICAgICAgICAgICAgdGhpcy5faW5zdCA9IG5ldyBwb29sX21ncigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnN0O1xuICAgIH1cblxuICAgIGdldF91aShwYXRoOiBzdHJpbmcsIGNiOiBoYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIGxldCB1aTogY2MuTm9kZSA9IHRoaXMudWlfcG9vbC5nZXQocGF0aCk7XG4gICAgICAgIGlmICh1aSkge1xuICAgICAgICAgICAgLy8gY2MuaW5mbyhcInBvb2xfbWdyOmdldF91aSBmcm9tIGNhY2hlXCIsIHBhdGgpO1xuICAgICAgICAgICAgY2IuZXhlYyh1aSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2MuaW5mbyhcInBvb2xfbWdyOmdldF91aSBmcm9tIGxvYWRlclwiLCBwYXRoKTtcbiAgICAgICAgbG9hZGVyX21nci5nZXRfaW5zdCgpLmxvYWRQcmVmYWJPYmoocGF0aCwgY2IpO1xuICAgIH1cblxuICAgIHB1dF91aShwYXRoOiBzdHJpbmcsIHVpOiBjYy5Ob2RlKTogdm9pZCB7XG4gICAgICAgIGlmICghdWkpIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJwb29sX21ncjpwdXRfdWksIGludmFsaWQgbm9kZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpX3Bvb2wucHV0KHBhdGgsIHVpKTtcbiAgICB9XG5cbiAgICBjbGVhcl9hdHBhdGgocGF0aDogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMudWlfcG9vbC5jbGVhcl9hdHBhdGgocGF0aCk7XG4gICAgfVxuXG4gICAgY2xlYXIoKSB7XG4gICAgICAgIHRoaXMudWlfcG9vbC5jbGVhcigpO1xuICAgIH1cblxuICAgIGR1bXAoKSB7XG4gICAgICAgIHRoaXMudWlfcG9vbC5kdW1wKCk7XG4gICAgfVxufSJdfQ==