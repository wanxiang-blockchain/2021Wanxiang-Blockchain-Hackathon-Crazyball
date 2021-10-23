
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/pool/ui_pool.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3Bvb2wvdWlfcG9vbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0I7SUFNSTtRQUZRLGFBQVEsR0FBVyxDQUFDLENBQUM7UUFHekIsSUFBSSxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7UUFDcEIsSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLENBQUM7SUFDbEIsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBSSxJQUFZO1FBQ1osSUFBSSxHQUFHLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDWixPQUFPLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUNwQjtRQUNELE9BQU8sSUFBSSxDQUFDO0lBQ2hCLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQUksSUFBWSxFQUFFLEVBQVc7UUFDekIsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxRQUFRLEVBQUU7WUFDNUIsU0FBUztZQUNULElBQUksUUFBUSxTQUFRLENBQUM7WUFDckIsSUFBSSxFQUFFLEdBQVcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM5QixLQUFLLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7Z0JBQ3RCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNwRCxFQUFFLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDdkIsUUFBUSxHQUFHLENBQUMsQ0FBQztpQkFDaEI7YUFDSjtZQUNELElBQUksUUFBUSxJQUFJLFFBQVEsSUFBSSxFQUFFLEVBQUU7Z0JBQzVCLElBQUksTUFBTSxHQUFZLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7Z0JBQ2pELE1BQU0sQ0FBQyxPQUFPLEVBQUUsQ0FBQztnQkFDakIsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDO2dCQUNaLHNFQUFzRTthQUN6RTtTQUNKO1FBQ0QsSUFBSSxHQUFHLEdBQWMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUN0QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsRUFBRSxDQUFDO1NBQy9CO1FBQ0QsRUFBRSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzNCLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsR0FBRyxFQUFFLENBQUM7SUFDeEMsQ0FBQztJQUVELDhCQUFZLEdBQVosVUFBYSxJQUFZO1FBQ3JCLElBQUksR0FBRyxHQUFjLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdEMsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUN6QixPQUFPO1NBQ1Y7UUFDRCxPQUFPLEdBQUcsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ25CLElBQUksRUFBRSxHQUFZLEdBQUcsQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUM1QixFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDYixJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDZjtJQUNMLENBQUM7SUFFRCx1QkFBSyxHQUFMO1FBQ0ksS0FBSyxJQUFJLElBQUksSUFBSSxJQUFJLENBQUMsS0FBSyxFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDM0I7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxFQUFFO1lBQ2hCLEVBQUUsQ0FBQyxJQUFJLENBQUMsOEJBQThCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3REO0lBQ0wsQ0FBQztJQUVELHNCQUFJLEdBQUo7UUFDSSxJQUFJLEdBQUcsR0FBVyw4QkFBOEIsQ0FBQztRQUNqRCxLQUFLLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxLQUFLLEVBQUU7WUFDekIsR0FBRyxJQUFJLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQzFCLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsT0FBTyxDQUFDLFVBQUMsQ0FBVTtnQkFDaEMsR0FBRyxJQUFJLENBQUMsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ047UUFDRCxFQUFFLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2hCLENBQUM7SUFDTCxjQUFDO0FBQUQsQ0FsRkEsQUFrRkMsSUFBQTtBQWxGWSwwQkFBTyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vbHJ1KGxhc3QgcmVjZW50bHkgdXNlZCkgY2FjaGVcbmV4cG9ydCBjbGFzcyB1aV9wb29sIHtcbiAgICBwcml2YXRlIGNhY2hlOiBhbnk7IC8vcGF0aCA9PiBjYy5Ob2RlW11cbiAgICBwcml2YXRlIHBhdGgydGltZTogYW55O1xuICAgIHByaXZhdGUgc2l6ZTogbnVtYmVyO1xuICAgIHByaXZhdGUgbWF4X3NpemU6IG51bWJlciA9IDI7XG5cbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLnBhdGgydGltZSA9IHt9O1xuICAgICAgICB0aGlzLnNpemUgPSAwO1xuICAgIH1cblxuICAgIGdldChwYXRoOiBzdHJpbmcpOiBjYy5Ob2RlIHtcbiAgICAgICAgbGV0IHVpczogY2MuTm9kZVtdID0gdGhpcy5jYWNoZVtwYXRoXTtcbiAgICAgICAgaWYgKHVpcyAmJiB1aXMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5zaXplLS07XG4gICAgICAgICAgICByZXR1cm4gdWlzLnBvcCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIHB1dChwYXRoOiBzdHJpbmcsIHVpOiBjYy5Ob2RlKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLnNpemUgPj0gdGhpcy5tYXhfc2l6ZSkge1xuICAgICAgICAgICAgLy/liKDpmaTmnIDml6nnmoTnvJPlrZhcbiAgICAgICAgICAgIGxldCBkZWxfcGF0aDogc3RyaW5nO1xuICAgICAgICAgICAgbGV0IHRzOiBudW1iZXIgPSBjYy5zeXMubm93KCk7XG4gICAgICAgICAgICBmb3IgKGxldCBwIGluIHRoaXMuY2FjaGUpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jYWNoZVtwXS5sZW5ndGggPiAwICYmIHRoaXMucGF0aDJ0aW1lW3BdIDwgdHMpIHtcbiAgICAgICAgICAgICAgICAgICAgdHMgPSB0aGlzLnBhdGgydGltZVtwXTtcbiAgICAgICAgICAgICAgICAgICAgZGVsX3BhdGggPSBwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChkZWxfcGF0aCAmJiBkZWxfcGF0aCAhPSBcIlwiKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRlbF91aTogY2MuTm9kZSA9IHRoaXMuY2FjaGVbZGVsX3BhdGhdLnBvcCgpO1xuICAgICAgICAgICAgICAgIGRlbF91aS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5zaXplLS07XG4gICAgICAgICAgICAgICAgLy8gY2MuaW5mbyhcInVpX3Bvb2w6cG9vbCBjYXBhY2l0eSBpcyBtYXgsIGRlc3Ryb3kgb2xkIHVpLFwiLCBkZWxfcGF0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHVpczogY2MuTm9kZVtdID0gdGhpcy5jYWNoZVtwYXRoXTtcbiAgICAgICAgaWYgKCF1aXMpIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVbcGF0aF0gPSB1aXMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB1aS5yZW1vdmVGcm9tUGFyZW50KGZhbHNlKTtcbiAgICAgICAgdWlzLnB1c2godWkpO1xuICAgICAgICB0aGlzLnNpemUrKztcbiAgICAgICAgdGhpcy5wYXRoMnRpbWVbcGF0aF0gPSBjYy5zeXMubm93KCk7XG4gICAgfVxuXG4gICAgY2xlYXJfYXRwYXRoKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgdWlzOiBjYy5Ob2RlW10gPSB0aGlzLmNhY2hlW3BhdGhdO1xuICAgICAgICBpZiAoIXVpcyB8fCB1aXMubGVuZ3RoIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aGlsZSAodWlzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCB1aTogY2MuTm9kZSA9IHVpcy5wb3AoKTtcbiAgICAgICAgICAgIHVpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHRoaXMuc2l6ZS0tO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY2xlYXIoKTogdm9pZCB7XG4gICAgICAgIGZvciAobGV0IHBhdGggaW4gdGhpcy5jYWNoZSkge1xuICAgICAgICAgICAgdGhpcy5jbGVhcl9hdHBhdGgocGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLnBhdGgydGltZSA9IHt9O1xuICAgICAgICBpZiAodGhpcy5zaXplICE9IDApIHtcbiAgICAgICAgICAgIGNjLndhcm4oXCJzaXplIHNob3VsZCBiZSAwLCBidXQgbm93IGlzXCIsIHRoaXMuc2l6ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBkdW1wKCkge1xuICAgICAgICBsZXQgc3RyOiBzdHJpbmcgPSBcIioqKioqKioqdWlfcG9vbCBkdW1wKioqKioqKipcIjtcbiAgICAgICAgZm9yIChsZXQgcGF0aCBpbiB0aGlzLmNhY2hlKSB7XG4gICAgICAgICAgICBzdHIgKz0gXCJcXG5cIiArIHBhdGggKyBcIlxcblwiO1xuICAgICAgICAgICAgdGhpcy5jYWNoZVtwYXRoXS5mb3JFYWNoKCh1OiBjYy5Ob2RlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgc3RyICs9IHUubmFtZSArIFwiLFwiO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9nKHN0cik7XG4gICAgfVxufSJdfQ==