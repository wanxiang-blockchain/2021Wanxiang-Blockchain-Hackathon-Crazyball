
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_reversed_rotateTo');
require('./assets/src/common/audio/AudioPlayer');
require('./assets/src/common/base/SingletonClass');
require('./assets/src/common/event/EventDispatch');
require('./assets/src/common/linklist');
require('./assets/src/common/loader/loader_mgr');
require('./assets/src/common/localStorage/LocalStorage');
require('./assets/src/common/pool/pool_mgr');
require('./assets/src/common/pool/ui_pool');
require('./assets/src/common/random/RandomUtil');
require('./assets/src/common/timer/timer_mgr');
require('./assets/src/common/tween/Tween');
require('./assets/src/common/ui/pop_mgr');
require('./assets/src/common/ui/pop_ui_base');
require('./assets/src/common/util');
require('./assets/src/game/GameConst');
require('./assets/src/game/GameView');
require('./assets/src/game/MainView');
require('./assets/src/game/Over');
require('./assets/src/game/PackItem');
require('./assets/src/game/PackView');
require('./assets/src/game/StoreItem');
require('./assets/src/game/StorePay');
require('./assets/src/game/StoreView');
require('./assets/src/game/common/Common');
require('./assets/src/game/common/CommonLabelScroll');
require('./assets/src/game/item/BallItem');
require('./assets/src/game/item/BrickItem');
require('./assets/src/game/model/GameModel');
require('./assets/src/game/model/State');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/common/CommonLabelScroll.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '2b107OGN/dPgaWkAj9qT67K', 'CommonLabelScroll');
// src/game/common/CommonLabelScroll.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Tween_1 = require("../../common/tween/Tween");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var CommonLabelScroll = /** @class */ (function (_super) {
    __extends(CommonLabelScroll, _super);
    function CommonLabelScroll() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_num = null;
        _this._num = { value: 0 };
        return _this;
    }
    CommonLabelScroll.prototype.onEnable = function () {
        if (!this.lb_num) {
            this.lb_num = this.node.getComponent(cc.Label);
        }
        this.initValue(this._num.value);
    };
    CommonLabelScroll.prototype.initValue = function (value) {
        this._num.value = value;
        if (this.lb_num)
            this.lb_num.string = "" + Math.ceil(this._num.value);
    };
    CommonLabelScroll.prototype.updateValue = function (newValue, oldValue) {
        var _this = this;
        if (oldValue != void 0) {
            this.initValue(oldValue);
        }
        if (!this.lb_num) {
            this._num.value = newValue;
            return;
        }
        Tween_1.Tween.removeTweens(this._num);
        if (newValue < this._num.value) {
            if (newValue == this._num.value) {
                this._num.value = newValue;
                this.lb_num.string = "" + newValue;
            }
            else {
                Tween_1.Tween.get(this._num, {
                    onChange: function () {
                        _this.lb_num.string = "" + Math.ceil(_this._num.value);
                    }
                }).to({ value: newValue }, 1500);
            }
        }
        else {
            var offset_num = newValue - this._num.value;
            Tween_1.Tween.get(this._num, {
                onChange: function () {
                    _this.lb_num.string = "" + Math.ceil(_this._num.value);
                }
            }).to({ value: newValue }, 300 + (offset_num > 10 ? 700 : 0) + (offset_num > 100 ? 500 : 0) + (offset_num > 1000 ? 500 : 0));
        }
    };
    CommonLabelScroll.prototype.onDisable = function () {
        Tween_1.Tween.removeTweens(this._num);
    };
    __decorate([
        property(cc.Label)
    ], CommonLabelScroll.prototype, "lb_num", void 0);
    CommonLabelScroll = __decorate([
        ccclass
    ], CommonLabelScroll);
    return CommonLabelScroll;
}(cc.Component));
exports.default = CommonLabelScroll;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb21tb24vQ29tbW9uTGFiZWxTY3JvbGwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsa0RBQWlEO0FBRTNDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQStDLHFDQUFZO0lBQTNEO1FBQUEscUVBcURDO1FBbkRHLFlBQU0sR0FBYSxJQUFJLENBQUM7UUFFaEIsVUFBSSxHQUFHLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDOztJQWlEaEMsQ0FBQztJQS9DRyxvQ0FBUSxHQUFSO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZCxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNsRDtRQUNELElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBRUQscUNBQVMsR0FBVCxVQUFVLEtBQWE7UUFDbkIsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ3hCLElBQUksSUFBSSxDQUFDLE1BQU07WUFDWCxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUcsQ0FBQztJQUM3RCxDQUFDO0lBRUQsdUNBQVcsR0FBWCxVQUFZLFFBQWdCLEVBQUUsUUFBaUI7UUFBL0MsaUJBNkJDO1FBNUJHLElBQUksUUFBUSxJQUFJLEtBQUssQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxTQUFTLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDNUI7UUFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQztZQUMzQixPQUFPO1NBQ1Y7UUFFRCxhQUFLLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQTtRQUM3QixJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtZQUM1QixJQUFJLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDO2dCQUMzQixJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFHLFFBQVUsQ0FBQzthQUN0QztpQkFBTTtnQkFDSCxhQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7b0JBQ2pCLFFBQVEsRUFBRTt3QkFDTixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUcsQ0FBQztvQkFDekQsQ0FBQztpQkFDSixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3BDO1NBQ0o7YUFBTTtZQUNILElBQU0sVUFBVSxHQUFHLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUM5QyxhQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUU7Z0JBQ2pCLFFBQVEsRUFBRTtvQkFDTixLQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sR0FBRyxLQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUcsQ0FBQztnQkFDekQsQ0FBQzthQUNKLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLEVBQUUsR0FBRyxHQUFHLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEk7SUFDTCxDQUFDO0lBRUQscUNBQVMsR0FBVDtRQUNJLGFBQUssQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFsREQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDSztJQUZQLGlCQUFpQjtRQURyQyxPQUFPO09BQ2EsaUJBQWlCLENBcURyQztJQUFELHdCQUFDO0NBckRELEFBcURDLENBckQ4QyxFQUFFLENBQUMsU0FBUyxHQXFEMUQ7a0JBckRvQixpQkFBaUIiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBUd2VlbiB9IGZyb20gXCIuLi8uLi9jb21tb24vdHdlZW4vVHdlZW5cIjtcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbW1vbkxhYmVsU2Nyb2xsIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gICAgbGJfbnVtOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgICBwcml2YXRlIF9udW0gPSB7IHZhbHVlOiAwIH07XG5cbiAgICBvbkVuYWJsZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmxiX251bSkge1xuICAgICAgICAgICAgdGhpcy5sYl9udW0gPSB0aGlzLm5vZGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRWYWx1ZSh0aGlzLl9udW0udmFsdWUpO1xuICAgIH1cblxuICAgIGluaXRWYWx1ZSh2YWx1ZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuX251bS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBpZiAodGhpcy5sYl9udW0pXG4gICAgICAgICAgICB0aGlzLmxiX251bS5zdHJpbmcgPSBgJHtNYXRoLmNlaWwodGhpcy5fbnVtLnZhbHVlKX1gO1xuICAgIH1cblxuICAgIHVwZGF0ZVZhbHVlKG5ld1ZhbHVlOiBudW1iZXIsIG9sZFZhbHVlPzogbnVtYmVyKSB7XG4gICAgICAgIGlmIChvbGRWYWx1ZSAhPSB2b2lkIDApIHtcbiAgICAgICAgICAgIHRoaXMuaW5pdFZhbHVlKG9sZFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRoaXMubGJfbnVtKSB7XG4gICAgICAgICAgICB0aGlzLl9udW0udmFsdWUgPSBuZXdWYWx1ZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIFR3ZWVuLnJlbW92ZVR3ZWVucyh0aGlzLl9udW0pXG4gICAgICAgIGlmIChuZXdWYWx1ZSA8IHRoaXMuX251bS52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKG5ld1ZhbHVlID09IHRoaXMuX251bS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX251bS52YWx1ZSA9IG5ld1ZhbHVlO1xuICAgICAgICAgICAgICAgIHRoaXMubGJfbnVtLnN0cmluZyA9IGAke25ld1ZhbHVlfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFR3ZWVuLmdldCh0aGlzLl9udW0sIHtcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U6ICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGJfbnVtLnN0cmluZyA9IGAke01hdGguY2VpbCh0aGlzLl9udW0udmFsdWUpfWA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KS50byh7IHZhbHVlOiBuZXdWYWx1ZSB9LCAxNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldF9udW0gPSBuZXdWYWx1ZSAtIHRoaXMuX251bS52YWx1ZTtcbiAgICAgICAgICAgIFR3ZWVuLmdldCh0aGlzLl9udW0sIHtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZTogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxiX251bS5zdHJpbmcgPSBgJHtNYXRoLmNlaWwodGhpcy5fbnVtLnZhbHVlKX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pLnRvKHsgdmFsdWU6IG5ld1ZhbHVlIH0sIDMwMCArIChvZmZzZXRfbnVtID4gMTAgPyA3MDAgOiAwKSArIChvZmZzZXRfbnVtID4gMTAwID8gNTAwIDogMCkgKyAob2Zmc2V0X251bSA+IDEwMDAgPyA1MDAgOiAwKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBvbkRpc2FibGUoKSB7XG4gICAgICAgIFR3ZWVuLnJlbW92ZVR3ZWVucyh0aGlzLl9udW0pO1xuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateTo.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19d742HvqdAi5IlM5OGZd4L', 'use_reversed_rotateTo');
// migration/use_reversed_rotateTo.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.2.1/v2.2.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.2.1/v2.2.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateTo._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3JldmVyc2VkX3JvdGF0ZVRvLmpzIl0sIm5hbWVzIjpbImNjIiwiUm90YXRlVG8iLCJfcmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxRQUFaLEdBQXVCLElBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdjIuMS4wL3YyLjEuMS92Mi4yLjEvdjIuMi4yIHZlcnNpb25zLlxuICogWW91IGRvIG5vdCBuZWVkIHRvIG1hbnVhbGx5IGFkZCB0aGlzIHNjcmlwdCBpbiBhbnkgb3RoZXIgcHJvamVjdC5cbiAqIElmIHlvdSBkb24ndCB1c2UgY2MuQWN0aW9uIGluIHlvdXIgcHJvamVjdCwgeW91IGNhbiBkZWxldGUgdGhpcyBzY3JpcHQgZGlyZWN0bHkuXG4gKiBJZiB5b3VyIHByb2plY3QgaXMgaG9zdGVkIGluIFZDUyBzdWNoIGFzIGdpdCwgc3VibWl0IHRoaXMgc2NyaXB0IHRvZ2V0aGVyLlxuICpcbiAqIOatpOiEmuacrOeUsSBDb2NvcyBDcmVhdG9yIOiHquWKqOeUn+aIkO+8jOS7heeUqOS6juWFvOWuuSB2Mi4xLjAvdjIuMS4xL3YyLjIuMS92Mi4yLjIg54mI5pys55qE5bel56iL77yMXG4gKiDkvaDml6DpnIDlnKjku7vkvZXlhbblroPpobnnm67kuK3miYvliqjmt7vliqDmraTohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruS4reayoeeUqOWIsCBBY3Rpb27vvIzlj6/nm7TmjqXliKDpmaTor6XohJrmnKzjgIJcbiAqIOWmguaenOS9oOeahOmhueebruacieaJmOeuoeS6jiBnaXQg562J54mI5pys5bqT77yM6K+35bCG5q2k6ISa5pys5LiA5bm25LiK5Lyg44CCXG4gKi9cblxuY2MuUm90YXRlVG8uX3JldmVyc2UgPSB0cnVlO1xuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/MainView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7ed7dlumpFJ+LVYWQAFTYO3', 'MainView');
// src/game/MainView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("./common/Common");
var State_1 = require("./model/State");
var _a = window.nearApi, WalletAccount = _a.WalletAccount, keyStores = _a.keyStores, connect = _a.connect, Contract = _a.Contract;
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var MainView = /** @class */ (function (_super) {
    __extends(MainView, _super);
    function MainView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maxScore = null;
        _this.ball = null;
        _this.awardTotal = null;
        _this.userName = null;
        _this.myMoney = null;
        _this.startButton = null;
        _this.startTitle = null;
        _this.startPrice = null;
        _this.reloginButton = null;
        _this.packBox = null;
        _this.pack = null;
        _this.storeBox = null;
        _this.store = null;
        _this.loadingBox = null;
        _this.loading = null;
        return _this;
    }
    MainView.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var anim, animState;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.startButton.on('touchstart', this.onStartButton, this);
                        this.reloginButton.on('touchstart', this.onRelogin, this);
                        this.pack.on('touchstart', this.onPack, this);
                        this.store.on('touchstart', this.onStore, this);
                        anim = this.ball.getComponent(cc.Animation);
                        animState = anim.play();
                        animState.wrapMode = cc.WrapMode.Loop;
                        animState.repeatCount = Infinity;
                        this.maxScore.schedule(function () {
                            _this.initNear();
                        }, 5);
                        return [4 /*yield*/, this.initNear()];
                    case 1:
                        _a.sent();
                        this.initMarket();
                        return [4 /*yield*/, State_1.default.ins().getList()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainView.prototype.update = function () {
        this.maxScore.string = Common_1.formatPrice(State_1.default.ins().mainNear.maxScore, 0, false, ',');
        this.awardTotal.string = Common_1.formatPrice(State_1.default.ins().mainNear.poolBalance, 4) + ' Near';
        this.myMoney.string = Common_1.formatPrice(State_1.default.ins().mainNear.balance) + ' Near';
        if (State_1.default.ins().isLogin) {
            this.startPrice.active = true;
            this.startTitle.string = '开始游戏';
            this.reloginButton.active = true;
            this.packBox.active = true;
            this.storeBox.active = true;
        }
        if (State_1.default.ins().isPay) {
            this.startTitle.string = '开始游戏';
            this.startPrice.active = false;
        }
    };
    MainView.prototype.onPack = function () {
        cc.director.loadScene('pack');
    };
    MainView.prototype.onStore = function () {
        cc.director.loadScene('store');
    };
    MainView.prototype.toogleLoading = function (show) {
        if (show === void 0) { show = false; }
        if (show) {
            this.loadingBox.active = true;
            var anim = this.loading.getComponent(cc.Animation);
            var animState = anim.play();
            animState.wrapMode = cc.WrapMode.Loop;
            animState.repeatCount = Infinity;
        }
        else {
            this.loadingBox.active = false;
        }
    };
    MainView.prototype.onStartButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                if (State_1.default.ins().isLogin) {
                    if (State_1.default.ins().isPay) {
                        cc.director.loadScene('game');
                    }
                    else {
                        this.pay();
                    }
                }
                else {
                    this.goToGetAuth();
                }
                return [2 /*return*/];
            });
        });
    };
    MainView.prototype.initNear = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, results, account, _b, _c, go;
            return __generator(this, function (_d) {
                switch (_d.label) {
                    case 0:
                        _a = State_1.default.ins().mainNear;
                        return [4 /*yield*/, connect(Object.assign(State_1.default.ins().mianNearConfig, { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }))];
                    case 1:
                        _a.near = _d.sent();
                        State_1.default.ins().mainNear.walletAccount = new WalletAccount(State_1.default.ins().mainNear.near);
                        State_1.default.ins().isLogin = State_1.default.ins().mainNear.walletAccount.isSignedIn();
                        State_1.default.ins().mainNear.ownerKey = State_1.default.ins().mainNear.walletAccount.getAccountId();
                        this.userName.string = State_1.default.ins().mainNear.ownerKey;
                        if (!State_1.default.ins().isLogin) return [3 /*break*/, 6];
                        State_1.default.ins().mainNear.contract = new Contract(State_1.default.ins().mainNear.walletAccount.account(), State_1.default.ins().mianNearConfig.contractName, {
                            viewMethods: ['list_score', 'check_sign', 'nft_tokens_for_owner'],
                            changeMethods: ['upload_score', 'sign_up', 'play_game', 'nft_burn', 'nft_transfer', 'nft_approve'],
                            sender: State_1.default.ins().mainNear.walletAccount.account()
                        });
                        return [4 /*yield*/, State_1.default.ins().mainNear.contract.list_score()];
                    case 2:
                        results = _d.sent();
                        State_1.default.ins().mainNear.poolBalance = results.total_reward / 1000000000000000000000000;
                        if (results.rank && results.rank.length > 0) {
                            State_1.default.ins().mainNear.maxScore = results.rank[0].score || 0;
                        }
                        return [4 /*yield*/, State_1.default.ins().mainNear.near.account(State_1.default.ins().mainNear.walletAccount.getAccountId())];
                    case 3:
                        account = _d.sent();
                        _b = State_1.default.ins().mainNear;
                        return [4 /*yield*/, account.getAccountBalance()];
                    case 4:
                        _b.balance = (_d.sent()).available / 1000000000000000000000000;
                        _c = State_1.default.ins();
                        return [4 /*yield*/, State_1.default.ins().mainNear.contract.check_sign({
                                account_id: State_1.default.ins().mainNear.ownerKey
                            })];
                    case 5:
                        _c.isPay = _d.sent();
                        if (State_1.default.ins().isPay) {
                            go = localStorage.getItem('initScene');
                            if (go) {
                                localStorage.removeItem('initScene');
                                cc.director.loadScene(go);
                            }
                        }
                        else {
                            localStorage.removeItem('initScene');
                        }
                        return [3 /*break*/, 7];
                    case 6:
                        localStorage.removeItem('imageList');
                        _d.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    MainView.prototype.goToGetAuth = function () {
        State_1.default.ins().mainNear.walletAccount.requestSignIn(State_1.default.ins().mianNearConfig.contractName, 'demo');
    };
    MainView.prototype.pay = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.toogleLoading(true);
                        return [4 /*yield*/, State_1.default.ins().mainNear.contract.sign_up({
                                account_id: State_1.default.ins().mainNear.ownerKey
                            }, 300000000000000, window.nearApi.utils.format.parseNearAmount('1'))];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    MainView.prototype.onRelogin = function () {
        localStorage.removeItem('imageList');
        State_1.default.ins().mainNear.walletAccount.signOut();
        this.goToGetAuth();
    };
    MainView.prototype.initMarket = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = State_1.default.ins().storeNear;
                        return [4 /*yield*/, connect(Object.assign(State_1.default.ins().storeNearConfig, { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }))];
                    case 1:
                        _a.near = _b.sent();
                        State_1.default.ins().storeNear.walletAccount = new WalletAccount(State_1.default.ins().storeNear.near);
                        State_1.default.ins().storeNear.contract = new Contract(State_1.default.ins().storeNear.walletAccount.account(), State_1.default.ins().storeNearConfig.contractName, {
                            viewMethods: ['get_sales', 'get_sales_by_owner_id'],
                            changeMethods: ['offer'],
                            sender: State_1.default.ins().storeNear.walletAccount.account()
                        });
                        State_1.default.ins().storeNear.ownerKey = State_1.default.ins().storeNear.walletAccount.getAccountId();
                        return [2 /*return*/];
                }
            });
        });
    };
    __decorate([
        property(cc.Label)
    ], MainView.prototype, "maxScore", void 0);
    __decorate([
        property(cc.Node)
    ], MainView.prototype, "ball", void 0);
    __decorate([
        property(cc.Label)
    ], MainView.prototype, "awardTotal", void 0);
    __decorate([
        property(cc.Label)
    ], MainView.prototype, "userName", void 0);
    __decorate([
        property(cc.Label)
    ], MainView.prototype, "myMoney", void 0);
    __decorate([
        property(cc.Node)
    ], MainView.prototype, "startButton", void 0);
    __decorate([
        property(cc.Label)
    ], MainView.prototype, "startTitle", void 0);
    __decorate([
        property(cc.Node)
    ], MainView.prototype, "startPrice", void 0);
    __decorate([
        property(cc.Node)
    ], MainView.prototype, "reloginButton", void 0);
    __decorate([
        property(cc.Node)
    ], MainView.prototype, "packBox", void 0);
    __decorate([
        property(cc.Node)
    ], MainView.prototype, "pack", void 0);
    __decorate([
        property(cc.Node)
    ], MainView.prototype, "storeBox", void 0);
    __decorate([
        property(cc.Node)
    ], MainView.prototype, "store", void 0);
    __decorate([
        property([cc.Node])
    ], MainView.prototype, "loadingBox", void 0);
    __decorate([
        property([cc.Node])
    ], MainView.prototype, "loading", void 0);
    MainView = __decorate([
        ccclass
    ], MainView);
    return MainView;
}(cc.Component));
exports.default = MainView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9NYWluVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBOEM7QUFDOUMsdUNBQWtDO0FBRTVCLElBQUEsS0FBa0QsTUFBTSxDQUFDLE9BQU8sRUFBOUQsYUFBYSxtQkFBQSxFQUFFLFNBQVMsZUFBQSxFQUFFLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBbUIsQ0FBQztBQUVqRSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQTBLQztRQXhLQyxjQUFRLEdBQWEsSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFFNUIsY0FBUSxHQUFhLElBQUksQ0FBQztRQUUxQixhQUFPLEdBQWEsSUFBSSxDQUFDO1FBRXpCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBRTNCLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBRTlCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLFdBQUssR0FBWSxJQUFJLENBQUM7UUFFdEIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsYUFBTyxHQUFZLElBQUksQ0FBQzs7SUE0STFCLENBQUM7SUExSU8seUJBQU0sR0FBWjs7Ozs7Ozt3QkFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsQ0FBQzt3QkFDNUQs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LENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDTztJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNNO0lBRXpCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7aURBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztnREFDUztJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2dEQUNTO0lBRTNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7bURBQ1k7SUFFOUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDSTtJQUV0QjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztnREFDTztJQUUzQjtRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQzs2Q0FDSTtJQTlCTCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBMEs1QjtJQUFELGVBQUM7Q0ExS0QsQUEwS0MsQ0ExS3FDLEVBQUUsQ0FBQyxTQUFTLEdBMEtqRDtrQkExS29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4vY29tbW9uL0NvbW1vbic7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9tb2RlbC9TdGF0ZSc7XG5cbmNvbnN0IHsgV2FsbGV0QWNjb3VudCwga2V5U3RvcmVzLCBjb25uZWN0LCBDb250cmFjdCB9ID0gd2luZG93Lm5lYXJBcGk7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIG1heFNjb3JlOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBiYWxsOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBhd2FyZFRvdGFsOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdXNlck5hbWU6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBteU1vbmV5OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzdGFydEJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgc3RhcnRUaXRsZTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgc3RhcnRQcmljZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICByZWxvZ2luQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHBhY2tCb3g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgcGFjazogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzdG9yZUJveDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzdG9yZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShbY2MuTm9kZV0pXG4gIGxvYWRpbmdCb3g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoW2NjLk5vZGVdKVxuICBsb2FkaW5nOiBjYy5Ob2RlID0gbnVsbDtcblxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgdGhpcy5zdGFydEJ1dHRvbi5vbigndG91Y2hzdGFydCcsIHRoaXMub25TdGFydEJ1dHRvbiwgdGhpcyk7XG4gICAgdGhpcy5yZWxvZ2luQnV0dG9uLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vblJlbG9naW4sIHRoaXMpO1xuICAgIHRoaXMucGFjay5vbigndG91Y2hzdGFydCcsIHRoaXMub25QYWNrLCB0aGlzKTtcbiAgICB0aGlzLnN0b3JlLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vblN0b3JlLCB0aGlzKTtcblxuICAgIGxldCBhbmltID0gdGhpcy5iYWxsLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgIGxldCBhbmltU3RhdGUgPSBhbmltLnBsYXkoKTtcbiAgICBhbmltU3RhdGUud3JhcE1vZGUgPSBjYy5XcmFwTW9kZS5Mb29wO1xuICAgIGFuaW1TdGF0ZS5yZXBlYXRDb3VudCA9IEluZmluaXR5O1xuXG4gICAgdGhpcy5tYXhTY29yZS5zY2hlZHVsZSgoKSA9PiB7XG4gICAgICB0aGlzLmluaXROZWFyKCk7XG4gICAgfSwgNSk7XG4gICAgYXdhaXQgdGhpcy5pbml0TmVhcigpO1xuICAgIHRoaXMuaW5pdE1hcmtldCgpO1xuICAgIGF3YWl0IFN0YXRlLmlucygpLmdldExpc3QoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLm1heFNjb3JlLnN0cmluZyA9IGZvcm1hdFByaWNlKFN0YXRlLmlucygpLm1haW5OZWFyLm1heFNjb3JlLCAwLCBmYWxzZSwgJywnKTtcbiAgICB0aGlzLmF3YXJkVG90YWwuc3RyaW5nID0gZm9ybWF0UHJpY2UoU3RhdGUuaW5zKCkubWFpbk5lYXIucG9vbEJhbGFuY2UsIDQpICsgJyBOZWFyJztcbiAgICB0aGlzLm15TW9uZXkuc3RyaW5nID0gZm9ybWF0UHJpY2UoU3RhdGUuaW5zKCkubWFpbk5lYXIuYmFsYW5jZSkgKyAnIE5lYXInO1xuICAgIGlmIChTdGF0ZS5pbnMoKS5pc0xvZ2luKSB7XG4gICAgICB0aGlzLnN0YXJ0UHJpY2UuYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuc3RhcnRUaXRsZS5zdHJpbmcgPSAn5byA5aeL5ri45oiPJztcbiAgICAgIHRoaXMucmVsb2dpbkJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5wYWNrQm94LmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnN0b3JlQm94LmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIGlmIChTdGF0ZS5pbnMoKS5pc1BheSkge1xuICAgICAgdGhpcy5zdGFydFRpdGxlLnN0cmluZyA9ICflvIDlp4vmuLjmiI8nO1xuICAgICAgdGhpcy5zdGFydFByaWNlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgb25QYWNrKCkge1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgncGFjaycpO1xuICB9XG5cbiAgcHJpdmF0ZSBvblN0b3JlKCkge1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc3RvcmUnKTtcbiAgfVxuXG4gIHByaXZhdGUgdG9vZ2xlTG9hZGluZyhzaG93ID0gZmFsc2UpIHtcbiAgICBpZiAoc2hvdykge1xuICAgICAgdGhpcy5sb2FkaW5nQm94LmFjdGl2ZSA9IHRydWU7XG4gICAgICBsZXQgYW5pbSA9IHRoaXMubG9hZGluZy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgIGxldCBhbmltU3RhdGUgPSBhbmltLnBsYXkoKTtcbiAgICAgIGFuaW1TdGF0ZS53cmFwTW9kZSA9IGNjLldyYXBNb2RlLkxvb3A7XG4gICAgICBhbmltU3RhdGUucmVwZWF0Q291bnQgPSBJbmZpbml0eTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5sb2FkaW5nQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgb25TdGFydEJ1dHRvbigpIHtcbiAgICBpZiAoU3RhdGUuaW5zKCkuaXNMb2dpbikge1xuICAgICAgaWYgKFN0YXRlLmlucygpLmlzUGF5KSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5wYXkoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5nb1RvR2V0QXV0aCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgaW5pdE5lYXIoKSB7XG4gICAgU3RhdGUuaW5zKCkubWFpbk5lYXIubmVhciA9IGF3YWl0IGNvbm5lY3QoT2JqZWN0LmFzc2lnbihTdGF0ZS5pbnMoKS5taWFuTmVhckNvbmZpZywgeyBkZXBzOiB7IGtleVN0b3JlOiBuZXcga2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpIH0gfSkpO1xuICAgIFN0YXRlLmlucygpLm1haW5OZWFyLndhbGxldEFjY291bnQgPSBuZXcgV2FsbGV0QWNjb3VudChTdGF0ZS5pbnMoKS5tYWluTmVhci5uZWFyKTtcbiAgICBTdGF0ZS5pbnMoKS5pc0xvZ2luID0gU3RhdGUuaW5zKCkubWFpbk5lYXIud2FsbGV0QWNjb3VudC5pc1NpZ25lZEluKCk7XG4gICAgU3RhdGUuaW5zKCkubWFpbk5lYXIub3duZXJLZXkgPSBTdGF0ZS5pbnMoKS5tYWluTmVhci53YWxsZXRBY2NvdW50LmdldEFjY291bnRJZCgpO1xuICAgIHRoaXMudXNlck5hbWUuc3RyaW5nID0gU3RhdGUuaW5zKCkubWFpbk5lYXIub3duZXJLZXk7XG4gICAgaWYgKFN0YXRlLmlucygpLmlzTG9naW4pIHtcbiAgICAgIFN0YXRlLmlucygpLm1haW5OZWFyLmNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFN0YXRlLmlucygpLm1haW5OZWFyLndhbGxldEFjY291bnQuYWNjb3VudCgpLCBTdGF0ZS5pbnMoKS5taWFuTmVhckNvbmZpZy5jb250cmFjdE5hbWUsIHtcbiAgICAgICAgdmlld01ldGhvZHM6IFsnbGlzdF9zY29yZScsICdjaGVja19zaWduJywgJ25mdF90b2tlbnNfZm9yX293bmVyJ10sXG4gICAgICAgIGNoYW5nZU1ldGhvZHM6IFsndXBsb2FkX3Njb3JlJywgJ3NpZ25fdXAnLCAncGxheV9nYW1lJywgJ25mdF9idXJuJywgJ25mdF90cmFuc2ZlcicsICduZnRfYXBwcm92ZSddLFxuICAgICAgICBzZW5kZXI6IFN0YXRlLmlucygpLm1haW5OZWFyLndhbGxldEFjY291bnQuYWNjb3VudCgpXG4gICAgICB9KTtcbiAgICAgIGxldCByZXN1bHRzID0gYXdhaXQgU3RhdGUuaW5zKCkubWFpbk5lYXIuY29udHJhY3QubGlzdF9zY29yZSgpO1xuICAgICAgU3RhdGUuaW5zKCkubWFpbk5lYXIucG9vbEJhbGFuY2UgPSByZXN1bHRzLnRvdGFsX3Jld2FyZCAvIDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG4gICAgICBpZiAocmVzdWx0cy5yYW5rICYmIHJlc3VsdHMucmFuay5sZW5ndGggPiAwKSB7XG4gICAgICAgIFN0YXRlLmlucygpLm1haW5OZWFyLm1heFNjb3JlID0gcmVzdWx0cy5yYW5rWzBdLnNjb3JlIHx8IDA7XG4gICAgICB9XG4gICAgICBjb25zdCBhY2NvdW50ID0gYXdhaXQgU3RhdGUuaW5zKCkubWFpbk5lYXIubmVhci5hY2NvdW50KFN0YXRlLmlucygpLm1haW5OZWFyLndhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCkpO1xuICAgICAgU3RhdGUuaW5zKCkubWFpbk5lYXIuYmFsYW5jZSA9IChhd2FpdCBhY2NvdW50LmdldEFjY291bnRCYWxhbmNlKCkpLmF2YWlsYWJsZSAvIDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDA7XG5cbiAgICAgIFN0YXRlLmlucygpLmlzUGF5ID0gYXdhaXQgU3RhdGUuaW5zKCkubWFpbk5lYXIuY29udHJhY3QuY2hlY2tfc2lnbih7XG4gICAgICAgIGFjY291bnRfaWQ6IFN0YXRlLmlucygpLm1haW5OZWFyLm93bmVyS2V5XG4gICAgICB9KTtcblxuICAgICAgaWYgKFN0YXRlLmlucygpLmlzUGF5KSB7XG4gICAgICAgIGxldCBnbyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbml0U2NlbmUnKTtcbiAgICAgICAgaWYgKGdvKSB7XG4gICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2luaXRTY2VuZScpO1xuICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShnbyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpbml0U2NlbmUnKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2ltYWdlTGlzdCcpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgZ29Ub0dldEF1dGgoKSB7XG5cbiAgICBTdGF0ZS5pbnMoKS5tYWluTmVhci53YWxsZXRBY2NvdW50LnJlcXVlc3RTaWduSW4oU3RhdGUuaW5zKCkubWlhbk5lYXJDb25maWcuY29udHJhY3ROYW1lLCAnZGVtbycpO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBwYXkoKSB7XG4gICAgdGhpcy50b29nbGVMb2FkaW5nKHRydWUpO1xuICAgIGF3YWl0IFN0YXRlLmlucygpLm1haW5OZWFyLmNvbnRyYWN0LnNpZ25fdXAoXG4gICAgICB7XG4gICAgICAgIGFjY291bnRfaWQ6IFN0YXRlLmlucygpLm1haW5OZWFyLm93bmVyS2V5XG4gICAgICB9LFxuICAgICAgMzAwMDAwMDAwMDAwMDAwLFxuICAgICAgd2luZG93Lm5lYXJBcGkudXRpbHMuZm9ybWF0LnBhcnNlTmVhckFtb3VudCgnMScpXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgb25SZWxvZ2luKCkge1xuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdpbWFnZUxpc3QnKTtcbiAgICBTdGF0ZS5pbnMoKS5tYWluTmVhci53YWxsZXRBY2NvdW50LnNpZ25PdXQoKTtcbiAgICB0aGlzLmdvVG9HZXRBdXRoKCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXRNYXJrZXQoKSB7XG4gICAgU3RhdGUuaW5zKCkuc3RvcmVOZWFyLm5lYXIgPSBhd2FpdCBjb25uZWN0KE9iamVjdC5hc3NpZ24oU3RhdGUuaW5zKCkuc3RvcmVOZWFyQ29uZmlnLCB7IGRlcHM6IHsga2V5U3RvcmU6IG5ldyBrZXlTdG9yZXMuQnJvd3NlckxvY2FsU3RvcmFnZUtleVN0b3JlKCkgfSB9KSk7XG4gICAgU3RhdGUuaW5zKCkuc3RvcmVOZWFyLndhbGxldEFjY291bnQgPSBuZXcgV2FsbGV0QWNjb3VudChTdGF0ZS5pbnMoKS5zdG9yZU5lYXIubmVhcik7XG4gICAgU3RhdGUuaW5zKCkuc3RvcmVOZWFyLmNvbnRyYWN0ID0gbmV3IENvbnRyYWN0KFN0YXRlLmlucygpLnN0b3JlTmVhci53YWxsZXRBY2NvdW50LmFjY291bnQoKSwgU3RhdGUuaW5zKCkuc3RvcmVOZWFyQ29uZmlnLmNvbnRyYWN0TmFtZSwge1xuICAgICAgdmlld01ldGhvZHM6IFsnZ2V0X3NhbGVzJywgJ2dldF9zYWxlc19ieV9vd25lcl9pZCddLFxuICAgICAgY2hhbmdlTWV0aG9kczogWydvZmZlciddLFxuICAgICAgc2VuZGVyOiBTdGF0ZS5pbnMoKS5zdG9yZU5lYXIud2FsbGV0QWNjb3VudC5hY2NvdW50KClcbiAgICB9KTtcbiAgICBTdGF0ZS5pbnMoKS5zdG9yZU5lYXIub3duZXJLZXkgPSBTdGF0ZS5pbnMoKS5zdG9yZU5lYXIud2FsbGV0QWNjb3VudC5nZXRBY2NvdW50SWQoKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/item/BrickItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '8395bFNuq1NjrVnqs7rG2hF', 'BrickItem');
// src/game/item/BrickItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var GameModel_1 = require("../model/GameModel");
var EventDispatch_1 = require("../../common/event/EventDispatch");
var GameConst_1 = require("../GameConst");
var BallItem_1 = require("./BallItem");
var AudioPlayer_1 = require("../../common/audio/AudioPlayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickItem = /** @class */ (function (_super) {
    __extends(BrickItem, _super);
    function BrickItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_hp = null;
        _this.icon = null;
        _this.icon_hp_reduce = null;
        _this.icon_power = null;
        _this.brick_type = 0;
        _this.star_num = 0;
        _this.ball_num = 0;
        _this.effect_type = 0;
        _this.brick_radius_mul = 1;
        _this._hp = 1;
        _this._color_hp = 1;
        return _this;
    }
    Object.defineProperty(BrickItem.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (hp) {
            var _this = this;
            var lastHp = this._hp;
            this._hp = hp;
            if (hp <= 0) {
                if (lastHp > 0) {
                    if (this.ball_num > 0) {
                        for (var index = 0; index < this.ball_num; index++) {
                            EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_CREATE_BALL);
                        }
                        AudioPlayer_1.AudioPlayer.ins().play_sound('balls');
                    }
                    if (this.star_num > 0) {
                        EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_STAR_GET_EFFECT, this.node.x, this.node.y, this.star_num);
                        GameModel_1.default.ins().ball_power += this.star_num;
                        AudioPlayer_1.AudioPlayer.ins().play_sound('star');
                    }
                    if (this.effect_type > 0) {
                        EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_POWER_TYPE_CHANGED, this.effect_type);
                    }
                    EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_PLAY_BRICK_REMOVE_EFFECT, this.node.x, this.node.y, this.icon_hp_reduce.color);
                }
                this.node.active = false;
            }
            else {
                this.lb_hp.string = "" + (hp > 1000000 ? Math.round(hp / 1000000) + 'M' : hp > 1000 ? Math.round(hp / 1000) + 'K' : hp);
                var theme_config = GameConst_1.default.ins().theme_config[0];
                if (theme_config) {
                    this.icon_hp_reduce.color = this.icon.color = theme_config.color[Math.ceil(hp / this._color_hp) - 1] || theme_config.color[0];
                }
                else {
                    this.icon_hp_reduce.color = this.icon.color = cc.Color.WHITE;
                }
                if (hp < lastHp) {
                    if (this.icon_hp_reduce.getNumberOfRunningActions() <= 0) {
                        this.icon_hp_reduce.active = true;
                        this.icon_hp_reduce.opacity = 255;
                        this.icon_hp_reduce.runAction(cc.sequence(cc.blink(0.2, 1), cc.callFunc(function () {
                            if (_this.icon_hp_reduce)
                                _this.icon_hp_reduce.active = false;
                        })));
                    }
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    BrickItem.prototype.onLoad = function () {
        if (this.icon_power) {
            this.icon_power.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.2, 1.2), cc.scaleTo(1, 1, 1))));
        }
    };
    BrickItem.prototype.init = function (colors_num, hp) {
        var theme_config = GameConst_1.default.ins().theme_config[0];
        colors_num = colors_num > theme_config.color.length ? theme_config.color.length : colors_num;
        colors_num = colors_num > 0 ? colors_num : 1;
        this._color_hp = Math.ceil(hp / colors_num);
        this._hp = hp;
        this.hp = hp;
        this.icon_hp_reduce.active = false;
        this.icon_hp_reduce.stopAllActions();
    };
    BrickItem.prototype.reset = function () {
        this.node.stopAllActions();
        this.node.active = false;
    };
    BrickItem.prototype.update = function (dt) {
        if (this.lb_hp.node.angle !== -this.node.angle) {
            this.lb_hp.node.angle = -this.node.angle;
        }
    };
    BrickItem.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        switch (otherCollider.tag) {
            case 100: {
                var ballItem = otherCollider.node.getComponent(BallItem_1.default);
                if (ballItem && this.hp > 0) {
                    var power = GameModel_1.default.ins().ball_power * ballItem.power_scale;
                    power = power > this.hp ? this.hp : power;
                    this.hp -= power;
                    GameModel_1.default.ins().score += power;
                }
                break;
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], BrickItem.prototype, "lb_hp", void 0);
    __decorate([
        property(cc.Node)
    ], BrickItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], BrickItem.prototype, "icon_hp_reduce", void 0);
    __decorate([
        property(cc.Node)
    ], BrickItem.prototype, "icon_power", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickItem.prototype, "brick_type", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickItem.prototype, "star_num", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickItem.prototype, "ball_num", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickItem.prototype, "effect_type", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickItem.prototype, "brick_radius_mul", void 0);
    BrickItem = __decorate([
        ccclass
    ], BrickItem);
    return BrickItem;
}(cc.Component));
exports.default = BrickItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9pdGVtL0JyaWNrSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msa0VBQTZFO0FBQzdFLDBDQUFxQztBQUNyQyx1Q0FBa0M7QUFDbEMsOERBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNEhDO1FBMUhDLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHeEIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLFNBQUcsR0FBRyxDQUFDLENBQUM7UUFtRFIsZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUE2Q3hCLENBQUM7SUEvRkMsc0JBQVcseUJBQUU7YUE4Q2I7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQzthQWhERCxVQUFjLEVBQUU7WUFBaEIsaUJBNkNDO1lBNUNDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7d0JBQ3JCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxF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O2FBQ1A7U0FDRjtJQUNILENBQUM7SUF6SEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lEQUNFO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ0E7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDQTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2tEQUNHO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7dURBQ1E7SUExQlYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTRIN0I7SUFBRCxnQkFBQztDQTVIRCxBQTRIQyxDQTVIc0MsRUFBRSxDQUFDLFNBQVMsR0E0SGxEO2tCQTVIb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTW9kZWwgZnJvbSAnLi4vbW9kZWwvR2FtZU1vZGVsJztcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2gsIEV2ZW50X05hbWUgfSBmcm9tICcuLi8uLi9jb21tb24vZXZlbnQvRXZlbnREaXNwYXRjaCc7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gJy4uL0dhbWVDb25zdCc7XG5pbXBvcnQgQmFsbEl0ZW0gZnJvbSAnLi9CYWxsSXRlbSc7XG5pbXBvcnQgeyBBdWRpb1BsYXllciB9IGZyb20gJy4uLy4uL2NvbW1vbi9hdWRpby9BdWRpb1BsYXllcic7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmlja0l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxiX2hwOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGljb246IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBpY29uX2hwX3JlZHVjZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGljb25fcG93ZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICBicmlja190eXBlOiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICBzdGFyX251bTogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgYmFsbF9udW06IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIGVmZmVjdF90eXBlOiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICBicmlja19yYWRpdXNfbXVsOiBudW1iZXIgPSAxO1xuXG4gIHByaXZhdGUgX2hwID0gMTtcbiAgcHVibGljIHNldCBocChocCkge1xuICAgIGNvbnN0IGxhc3RIcCA9IHRoaXMuX2hwO1xuICAgIHRoaXMuX2hwID0gaHA7XG4gICAgaWYgKGhwIDw9IDApIHtcbiAgICAgIGlmIChsYXN0SHAgPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGxfbnVtID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJhbGxfbnVtOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoLmlucygpLmZpcmUoRXZlbnRfTmFtZS5HQU1FX0NSRUFURV9CQUxMKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnYmFsbHMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFyX251bSA+IDApIHtcbiAgICAgICAgICBFdmVudERpc3BhdGNoLmlucygpLmZpcmUoRXZlbnRfTmFtZS5HQU1FX1NUQVJfR0VUX0VGRkVDVCwgdGhpcy5ub2RlLngsIHRoaXMubm9kZS55LCB0aGlzLnN0YXJfbnVtKTtcbiAgICAgICAgICBHYW1lTW9kZWwuaW5zKCkuYmFsbF9wb3dlciArPSB0aGlzLnN0YXJfbnVtO1xuICAgICAgICAgIEF1ZGlvUGxheWVyLmlucygpLnBsYXlfc291bmQoJ3N0YXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZmZlY3RfdHlwZSA+IDApIHtcbiAgICAgICAgICBFdmVudERpc3BhdGNoLmlucygpLmZpcmUoRXZlbnRfTmFtZS5HQU1FX1BPV0VSX1RZUEVfQ0hBTkdFRCwgdGhpcy5lZmZlY3RfdHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnREaXNwYXRjaC5pbnMoKS5maXJlKEV2ZW50X05hbWUuR0FNRV9QTEFZX0JSSUNLX1JFTU9WRV9FRkZFQ1QsIHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSwgdGhpcy5pY29uX2hwX3JlZHVjZS5jb2xvcik7XG4gICAgICB9XG4gICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGJfaHAuc3RyaW5nID0gYCR7aHAgPiAxMDAwMDAwID8gTWF0aC5yb3VuZChocCAvIDEwMDAwMDApICsgJ00nIDogaHAgPiAxMDAwID8gTWF0aC5yb3VuZChocCAvIDEwMDApICsgJ0snIDogaHB9YDtcbiAgICAgIGNvbnN0IHRoZW1lX2NvbmZpZyA9IEdhbWVDb25zdC5pbnMoKS50aGVtZV9jb25maWdbMF07XG4gICAgICBpZiAodGhlbWVfY29uZmlnKSB7XG4gICAgICAgIHRoaXMuaWNvbl9ocF9yZWR1Y2UuY29sb3IgPSB0aGlzLmljb24uY29sb3IgPSB0aGVtZV9jb25maWcuY29sb3JbTWF0aC5jZWlsKGhwIC8gdGhpcy5fY29sb3JfaHApIC0gMV0gfHwgdGhlbWVfY29uZmlnLmNvbG9yWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pY29uX2hwX3JlZHVjZS5jb2xvciA9IHRoaXMuaWNvbi5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgfVxuICAgICAgaWYgKGhwIDwgbGFzdEhwKSB7XG4gICAgICAgIGlmICh0aGlzLmljb25faHBfcmVkdWNlLmdldE51bWJlck9mUnVubmluZ0FjdGlvbnMoKSA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5pY29uX2hwX3JlZHVjZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaWNvbl9ocF9yZWR1Y2Uub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICB0aGlzLmljb25faHBfcmVkdWNlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICBjYy5ibGluaygwLjIsIDEpLFxuICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWNvbl9ocF9yZWR1Y2UpIHRoaXMuaWNvbl9ocF9yZWR1Y2UuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGhwKCkge1xuICAgIHJldHVybiB0aGlzLl9ocDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbG9yX2hwID0gMTtcblxuICBvbkxvYWQoKSB7XG4gICAgaWYgKHRoaXMuaWNvbl9wb3dlcikge1xuICAgICAgdGhpcy5pY29uX3Bvd2VyLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMSwgMS4yLCAxLjIpLCBjYy5zY2FsZVRvKDEsIDEsIDEpKSkpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoY29sb3JzX251bTogbnVtYmVyLCBocDogbnVtYmVyKSB7XG4gICAgY29uc3QgdGhlbWVfY29uZmlnID0gR2FtZUNvbnN0LmlucygpLnRoZW1lX2NvbmZpZ1swXTtcbiAgICBjb2xvcnNfbnVtID0gY29sb3JzX251bSA+IHRoZW1lX2NvbmZpZy5jb2xvci5sZW5ndGggPyB0aGVtZV9jb25maWcuY29sb3IubGVuZ3RoIDogY29sb3JzX251bTtcbiAgICBjb2xvcnNfbnVtID0gY29sb3JzX251bSA+IDAgPyBjb2xvcnNfbnVtIDogMTtcbiAgICB0aGlzLl9jb2xvcl9ocCA9IE1hdGguY2VpbChocCAvIGNvbG9yc19udW0pO1xuICAgIHRoaXMuX2hwID0gaHA7XG4gICAgdGhpcy5ocCA9IGhwO1xuXG4gICAgdGhpcy5pY29uX2hwX3JlZHVjZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmljb25faHBfcmVkdWNlLnN0b3BBbGxBY3Rpb25zKCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAodGhpcy5sYl9ocC5ub2RlLmFuZ2xlICE9PSAtdGhpcy5ub2RlLmFuZ2xlKSB7XG4gICAgICB0aGlzLmxiX2hwLm5vZGUuYW5nbGUgPSAtdGhpcy5ub2RlLmFuZ2xlO1xuICAgIH1cbiAgfVxuXG4gIG9uRW5kQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcikge1xuICAgIHN3aXRjaCAob3RoZXJDb2xsaWRlci50YWcpIHtcbiAgICAgIGNhc2UgMTAwOiB7XG4gICAgICAgIGxldCBiYWxsSXRlbSA9IG90aGVyQ29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoQmFsbEl0ZW0pO1xuICAgICAgICBpZiAoYmFsbEl0ZW0gJiYgdGhpcy5ocCA+IDApIHtcbiAgICAgICAgICBsZXQgcG93ZXIgPSBHYW1lTW9kZWwuaW5zKCkuYmFsbF9wb3dlciAqIGJhbGxJdGVtLnBvd2VyX3NjYWxlO1xuICAgICAgICAgIHBvd2VyID0gcG93ZXIgPiB0aGlzLmhwID8gdGhpcy5ocCA6IHBvd2VyO1xuICAgICAgICAgIHRoaXMuaHAgLT0gcG93ZXI7XG4gICAgICAgICAgR2FtZU1vZGVsLmlucygpLnNjb3JlICs9IHBvd2VyO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cb0cdBciShMAqW7SF8LqDNi', 'GameModel');
// src/game/model/GameModel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonClass_1 = require("../../common/base/SingletonClass");
var EventDispatch_1 = require("../../common/event/EventDispatch");
var GameModel = /** @class */ (function (_super) {
    __extends(GameModel, _super);
    function GameModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fireBallDt = 2;
        _this._ball_power = 1;
        _this._ball_fire_speed = 2;
        _this._ball_init_count = 4;
        _this._score = 0;
        _this._revive_times = 0;
        return _this;
    }
    GameModel.ins = function () {
        return _super.ins.call(this);
    };
    Object.defineProperty(GameModel.prototype, "fireBallDt", {
        get: function () {
            return this._fireBallDt;
        },
        set: function (value) {
            value = value < 2 ? 2 : value;
            this._fireBallDt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "ball_power", {
        get: function () {
            return this._ball_power;
        },
        set: function (value) {
            var oldValue = this._ball_power;
            value = value < 1 ? 1 : value;
            this._ball_power = value;
            EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_BALL_POWER_CHANGED, oldValue, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "ball_fire_speed", {
        get: function () {
            return this._ball_fire_speed;
        },
        set: function (value) {
            value = value < 2 ? 2 : value;
            this._ball_fire_speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "ball_init_count", {
        get: function () {
            return this._ball_init_count;
        },
        set: function (value) {
            value = value < 4 ? 4 : value;
            this._ball_init_count = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            value = value < 0 ? 0 : value;
            var oldValue = this._score;
            this._score = value;
            EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_SCORE_CHANGED, oldValue, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "revive_times", {
        get: function () {
            return this._revive_times;
        },
        set: function (value) {
            value = value < 0 ? 0 : value;
            this._revive_times = value;
        },
        enumerable: false,
        configurable: true
    });
    GameModel.prototype.init = function () {
        this.reset();
    };
    GameModel.prototype.reset = function () {
        this.score = 0;
        this.revive_times = 0;
        this.ball_init_count = 5;
        this.ball_fire_speed = 1;
        this.ball_power = 1;
    };
    return GameModel;
}(SingletonClass_1.default));
exports.default = GameModel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9tb2RlbC9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELGtFQUE2RTtBQUU3RTtJQUF1Qyw2QkFBYztJQUFyRDtRQUFBLHFFQTBFQztRQXJFUyxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQVNoQixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQVdoQixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFTckIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBU3JCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFXWCxtQkFBYSxHQUFHLENBQUMsQ0FBQzs7SUFvQjVCLENBQUM7SUF6RVEsYUFBRyxHQUFWO1FBQ0UsT0FBTyxPQUFNLEdBQUcsV0FBZSxDQUFDO0lBQ2xDLENBQUM7SUFHRCxzQkFBVyxpQ0FBVTthQUlyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO2FBTkQsVUFBc0IsS0FBSztZQUN6QixLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxpQ0FBVTthQU1yQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO2FBUkQsVUFBc0IsS0FBSztZQUN6QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2xDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6Qiw2QkFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywwQkFBVSxDQUFDLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLHNDQUFlO2FBSTFCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzthQU5ELFVBQTJCLEtBQUs7WUFDOUIsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxzQ0FBZTthQUkxQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7YUFORCxVQUEyQixLQUFLO1lBQzlCLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsNEJBQUs7YUFNaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzthQVJELFVBQWlCLEtBQUs7WUFDcEIsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsNkJBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMEJBQVUsQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0UsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxtQ0FBWTthQUl2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDO2FBTkQsVUFBd0IsS0FBSztZQUMzQixLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFLTSx3QkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLHlCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxnQkFBQztBQUFELENBMUVBLEFBMEVDLENBMUVzQyx3QkFBYyxHQTBFcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uQ2xhc3MgZnJvbSAnLi4vLi4vY29tbW9uL2Jhc2UvU2luZ2xldG9uQ2xhc3MnO1xuaW1wb3J0IHsgRXZlbnREaXNwYXRjaCwgRXZlbnRfTmFtZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldmVudC9FdmVudERpc3BhdGNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1vZGVsIGV4dGVuZHMgU2luZ2xldG9uQ2xhc3Mge1xuICBzdGF0aWMgaW5zKCkge1xuICAgIHJldHVybiBzdXBlci5pbnMoKSBhcyBHYW1lTW9kZWw7XG4gIH1cblxuICBwcml2YXRlIF9maXJlQmFsbER0ID0gMjtcbiAgcHVibGljIHNldCBmaXJlQmFsbER0KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSA8IDIgPyAyIDogdmFsdWU7XG4gICAgdGhpcy5fZmlyZUJhbGxEdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyBnZXQgZmlyZUJhbGxEdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyZUJhbGxEdDtcbiAgfVxuXG4gIHByaXZhdGUgX2JhbGxfcG93ZXIgPSAxO1xuICBwdWJsaWMgc2V0IGJhbGxfcG93ZXIodmFsdWUpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX2JhbGxfcG93ZXI7XG4gICAgdmFsdWUgPSB2YWx1ZSA8IDEgPyAxIDogdmFsdWU7XG4gICAgdGhpcy5fYmFsbF9wb3dlciA9IHZhbHVlO1xuICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuZmlyZShFdmVudF9OYW1lLkdBTUVfQkFMTF9QT1dFUl9DSEFOR0VELCBvbGRWYWx1ZSwgdmFsdWUpO1xuICB9XG4gIHB1YmxpYyBnZXQgYmFsbF9wb3dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFsbF9wb3dlcjtcbiAgfVxuXG4gIHByaXZhdGUgX2JhbGxfZmlyZV9zcGVlZCA9IDI7XG4gIHB1YmxpYyBzZXQgYmFsbF9maXJlX3NwZWVkKHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSA8IDIgPyAyIDogdmFsdWU7XG4gICAgdGhpcy5fYmFsbF9maXJlX3NwZWVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIGdldCBiYWxsX2ZpcmVfc3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhbGxfZmlyZV9zcGVlZDtcbiAgfVxuXG4gIHByaXZhdGUgX2JhbGxfaW5pdF9jb3VudCA9IDQ7XG4gIHB1YmxpYyBzZXQgYmFsbF9pbml0X2NvdW50KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSA8IDQgPyA0IDogdmFsdWU7XG4gICAgdGhpcy5fYmFsbF9pbml0X2NvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIGdldCBiYWxsX2luaXRfY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhbGxfaW5pdF9jb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgX3Njb3JlID0gMDtcbiAgcHVibGljIHNldCBzY29yZSh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUgPCAwID8gMCA6IHZhbHVlO1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fc2NvcmU7XG4gICAgdGhpcy5fc2NvcmUgPSB2YWx1ZTtcbiAgICBFdmVudERpc3BhdGNoLmlucygpLmZpcmUoRXZlbnRfTmFtZS5HQU1FX1NDT1JFX0NIQU5HRUQsIG9sZFZhbHVlLCB2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGdldCBzY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gIH1cblxuICBwcml2YXRlIF9yZXZpdmVfdGltZXMgPSAwO1xuICBwdWJsaWMgc2V0IHJldml2ZV90aW1lcyh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUgPCAwID8gMCA6IHZhbHVlO1xuICAgIHRoaXMuX3Jldml2ZV90aW1lcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyBnZXQgcmV2aXZlX3RpbWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXZpdmVfdGltZXM7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5yZXZpdmVfdGltZXMgPSAwO1xuICAgIHRoaXMuYmFsbF9pbml0X2NvdW50ID0gNTtcbiAgICB0aGlzLmJhbGxfZmlyZV9zcGVlZCA9IDE7XG4gICAgdGhpcy5iYWxsX3Bvd2VyID0gMTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5e6fdXDEbdM/owIk62/j/0P', 'util');
// src/common/util.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyBreathAction = exports.createBreathAction = exports.extend = exports.strfmt = exports.load_external_img = exports.load_plist_img = exports.load_img = exports.gen_handler = exports.handler = void 0;
var loader_mgr_1 = require("../common/loader/loader_mgr");
// import * as consts from "../consts"
var handler_pool = [];
var handler_pool_size = 10;
//用于绑定回调函数this指针
var handler = /** @class */ (function () {
    function handler() {
    }
    handler.prototype.init = function (cb, host) {
        if (host === void 0) { host = null; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.cb = cb;
        this.host = host;
        this.args = args;
    };
    handler.prototype.exec = function () {
        var extras = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            extras[_i] = arguments[_i];
        }
        this.cb.apply(this.host, this.args.concat(extras));
    };
    return handler;
}());
exports.handler = handler;
function gen_handler(cb, host) {
    if (host === void 0) { host = null; }
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var single_handler = handler_pool.length < 0 ? handler_pool.pop() : new handler();
    //这里要展开args, 否则会将args当数组传给wrapper, 导致其args参数变成2维数组[[]]
    single_handler.init.apply(single_handler, __spreadArrays([cb, host], args));
    return single_handler;
}
exports.gen_handler = gen_handler;
function load_img(sprite, img_path) {
    loader_mgr_1.loader_mgr.get_inst().loadAsset(img_path, gen_handler(function (res) {
        sprite.spriteFrame = res;
    }), cc.SpriteFrame);
}
exports.load_img = load_img;
function load_plist_img(sprite, plist_path, key) {
    loader_mgr_1.loader_mgr.get_inst().loadAsset(plist_path, gen_handler(function (res) {
        var spriteFrame = res.getSpriteFrame(key);
        // cc.log(res);
        if (spriteFrame) {
            sprite.spriteFrame = spriteFrame;
        }
        else {
            cc.warn("path error (" + plist_path + " " + key + ")");
        }
    }), cc.SpriteAtlas);
}
exports.load_plist_img = load_plist_img;
var _external_img_cache = {};
function load_external_img(sprite, img_url, type) {
    if (_external_img_cache[img_url]) {
        sprite.spriteFrame = _external_img_cache[img_url];
        return;
    }
    sprite.node.active = false;
    loader_mgr_1.loader_mgr.get_inst().loadExternalAsset(img_url, gen_handler(function (res) {
        _external_img_cache[img_url] = new cc.SpriteFrame(res);
        if (sprite.node) {
            sprite.node.active = true;
            sprite.spriteFrame = _external_img_cache[img_url];
        }
    }), type);
}
exports.load_external_img = load_external_img;
function strfmt(fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return fmt.replace(/\{(\d+)\}/g, function (match, argIndex) {
        return args[argIndex] || match;
    });
}
exports.strfmt = strfmt;
function extend(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < sources.length; i += 1) {
        var source = sources[i];
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}
exports.extend = extend;
function createBreathAction(node) {
    var action = cc.repeatForever(cc.sequence(cc.scaleTo(0.6, 1.1), cc.scaleTo(0.6, 0.9)));
    node.runAction(action);
}
exports.createBreathAction = createBreathAction;
function destroyBreathAction(node) {
    node.stopAllActions();
}
exports.destroyBreathAction = destroyBreathAction;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUF3RDtBQUN4RCxzQ0FBc0M7QUFFdEMsSUFBSSxZQUFZLEdBQWMsRUFBRSxDQUFDO0FBQ2pDLElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0FBRTNCLGdCQUFnQjtBQUNoQjtJQUtJO0lBQWdCLENBQUM7SUFFakIsc0JBQUksR0FBSixVQUFLLEVBQVksRUFBRSxJQUFXO1FBQVgscUJBQUEsRUFBQSxXQUFXO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQUksR0FBSjtRQUFLLGdCQUFTO2FBQVQsVUFBUyxFQUFULHFCQUFTLEVBQVQsSUFBUztZQUFULDJCQUFTOztRQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsY0FBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksMEJBQU87QUFrQnBCLFNBQWdCLFdBQVcsQ0FBQyxFQUFZLEVBQUUsSUFBZ0I7SUFBaEIscUJBQUEsRUFBQSxXQUFnQjtJQUFFLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQsNkJBQWM7O0lBQ3RFLElBQUksY0FBYyxHQUFZLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUks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SSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7S0FDSjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFWRCx3QkFVQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLElBQWE7SUFDNUMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFIRCxnREFHQztBQUVELFNBQWdCLG1CQUFtQixDQUFDLElBQWE7SUFDN0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFGRCxrREFFQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRlcl9tZ3IgfSBmcm9tIFwiLi4vY29tbW9uL2xvYWRlci9sb2FkZXJfbWdyXCJcbi8vIGltcG9ydCAqIGFzIGNvbnN0cyBmcm9tIFwiLi4vY29uc3RzXCJcblxubGV0IGhhbmRsZXJfcG9vbDogaGFuZGxlcltdID0gW107XG5sZXQgaGFuZGxlcl9wb29sX3NpemUgPSAxMDtcblxuLy/nlKjkuo7nu5Hlrprlm57osIPlh73mlbB0aGlz5oyH6ZKIXG5leHBvcnQgY2xhc3MgaGFuZGxlciB7XG4gICAgcHJpdmF0ZSBjYjogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBob3N0OiBhbnk7XG4gICAgcHJpdmF0ZSBhcmdzOiBhbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpbml0KGNiOiBGdW5jdGlvbiwgaG9zdCA9IG51bGwsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIH1cblxuICAgIGV4ZWMoLi4uZXh0cmFzKSB7XG4gICAgICAgIHRoaXMuY2IuYXBwbHkodGhpcy5ob3N0LCB0aGlzLmFyZ3MuY29uY2F0KGV4dHJhcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbl9oYW5kbGVyKGNiOiBGdW5jdGlvbiwgaG9zdDogYW55ID0gbnVsbCwgLi4uYXJnczogYW55W10pOiBoYW5kbGVyIHtcbiAgICBsZXQgc2luZ2xlX2hhbmRsZXI6IGhhbmRsZXIgPSBoYW5kbGVyX3Bvb2wubGVuZ3RoIDwgMCA/IGhhbmRsZXJfcG9vbC5wb3AoKSA6IG5ldyBoYW5kbGVyKClcbiAgICAvL+i/memHjOimgeWxleW8gGFyZ3MsIOWQpuWImeS8muWwhmFyZ3PlvZPmlbDnu4TkvKDnu5l3cmFwcGVyLCDlr7zoh7TlhbZhcmdz5Y+C5pWw5Y+Y5oiQMue7tOaVsOe7hFtbXV1cbiAgICBzaW5nbGVfaGFuZGxlci5pbml0KGNiLCBob3N0LCAuLi5hcmdzKTtcbiAgICByZXR1cm4gc2luZ2xlX2hhbmRsZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkX2ltZyhzcHJpdGU6IGNjLlNwcml0ZSwgaW1nX3BhdGg6IHN0cmluZykge1xuICAgIGxvYWRlcl9tZ3IuZ2V0X2luc3QoKS5sb2FkQXNzZXQoaW1nX3BhdGgsIGdlbl9oYW5kbGVyKChyZXMpID0+IHtcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gcmVzO1xuICAgIH0pLCBjYy5TcHJpdGVGcmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkX3BsaXN0X2ltZyhzcHJpdGU6IGNjLlNwcml0ZSB8IGNjLlBhcnRpY2xlU3lzdGVtLCBwbGlzdF9wYXRoOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG4gICAgbG9hZGVyX21nci5nZXRfaW5zdCgpLmxvYWRBc3NldChwbGlzdF9wYXRoLCBnZW5faGFuZGxlcigocmVzOiBjYy5TcHJpdGVBdGxhcykgPT4ge1xuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IHJlcy5nZXRTcHJpdGVGcmFtZShrZXkpO1xuICAgICAgICAvLyBjYy5sb2cocmVzKTtcbiAgICAgICAgaWYgKHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYHBhdGggZXJyb3IgKCR7cGxpc3RfcGF0aH0gJHtrZXl9KWApO1xuICAgICAgICB9XG4gICAgfSksIGNjLlNwcml0ZUF0bGFzKTtcbn1cblxuY29uc3QgX2V4dGVybmFsX2ltZ19jYWNoZTogeyBbdXJsOiBzdHJpbmddOiBjYy5TcHJpdGVGcmFtZSB9ID0ge307XG5leHBvcnQgZnVuY3Rpb24gbG9hZF9leHRlcm5hbF9pbWcoc3ByaXRlOiBjYy5TcHJpdGUsIGltZ191cmw6IHN0cmluZywgdHlwZT86IHN0cmluZykge1xuICAgIGlmIChfZXh0ZXJuYWxfaW1nX2NhY2hlW2ltZ191cmxdKSB7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IF9leHRlcm5hbF9pbWdfY2FjaGVbaW1nX3VybF07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBsb2FkZXJfbWdyLmdldF9pbnN0KCkubG9hZEV4dGVybmFsQXNzZXQoaW1nX3VybCwgZ2VuX2hhbmRsZXIoKHJlcykgPT4ge1xuICAgICAgICBfZXh0ZXJuYWxfaW1nX2NhY2hlW2ltZ191cmxdID0gbmV3IGNjLlNwcml0ZUZyYW1lKHJlcyk7XG5cbiAgICAgICAgaWYgKHNwcml0ZS5ub2RlKSB7XG4gICAgICAgICAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gX2V4dGVybmFsX2ltZ19jYWNoZVtpbWdfdXJsXTtcbiAgICAgICAgfVxuICAgIH0pLCB0eXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmZtdChmbXQ6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICByZXR1cm4gZm10LnJlcGxhY2UoL1xceyhcXGQrKVxcfS9nLCAobWF0Y2g6IHN0cmluZywgYXJnSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleF0gfHwgbWF0Y2g7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2ldO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCcmVhdGhBY3Rpb24obm9kZTogY2MuTm9kZSkge1xuICAgIGNvbnN0IGFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjYsIDEuMSksIGNjLnNjYWxlVG8oMC42LCAwLjkpKSk7XG4gICAgbm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lCcmVhdGhBY3Rpb24obm9kZTogY2MuTm9kZSkge1xuICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/PackItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7d67ff44IpE/5UwxM3x1UNv', 'PackItem');
// src/game/PackItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PackItem = /** @class */ (function (_super) {
    __extends(PackItem, _super);
    function PackItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listBox = null;
        _this.listBoxBg = null;
        _this.icon = null;
        _this.title = null;
        _this.boxObj = {};
        return _this;
    }
    PackItem.prototype.onLoad = function () {
        this.listBox.on('touchstart', this.onListBox, this, true);
        this.listBox.on('touchend', this.onListBoxOver, this, true);
    };
    PackItem.prototype.setImage = function (target, url) {
        cc.resources.load(url, cc.SpriteFrame, function (err, spriteFrame) {
            target.spriteFrame = spriteFrame;
        });
    };
    PackItem.prototype.initBox = function (obj) {
        this.boxObj = obj;
        this.setImage(this.icon, obj.url);
        this.title.string = 'x' + obj.payCount;
    };
    PackItem.prototype.onListBox = function () {
        this.setImage(this.listBoxBg, 'images/d2');
    };
    PackItem.prototype.onListBoxOver = function () {
        this.setImage(this.listBoxBg, 'images/d1');
    };
    __decorate([
        property(cc.Node)
    ], PackItem.prototype, "listBox", void 0);
    __decorate([
        property(cc.Sprite)
    ], PackItem.prototype, "listBoxBg", void 0);
    __decorate([
        property(cc.Sprite)
    ], PackItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], PackItem.prototype, "title", void 0);
    PackItem = __decorate([
        ccclass
    ], PackItem);
    return PackItem;
}(cc.Component));
exports.default = PackItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9QYWNrSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9DQztRQWxDQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBRyxFQUFFLENBQUM7O0lBMEJkLENBQUM7SUF4QkMseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsR0FBVztRQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUcsRUFBRSxXQUEyQjtZQUN0RSxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsR0FBRztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQztJQUVPLDRCQUFTLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxnQ0FBYSxHQUFyQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFSSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0M1QjtJQUFELGVBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBb0NqRDtrQkFwQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhY2tJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGxpc3RCb3g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBsaXN0Qm94Qmc6IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIGljb246IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICBib3hPYmogPSB7fTtcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5saXN0Qm94Lm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkxpc3RCb3gsIHRoaXMsIHRydWUpO1xuICAgIHRoaXMubGlzdEJveC5vbigndG91Y2hlbmQnLCB0aGlzLm9uTGlzdEJveE92ZXIsIHRoaXMsIHRydWUpO1xuICB9XG5cbiAgc2V0SW1hZ2UodGFyZ2V0LCB1cmw6IHN0cmluZykge1xuICAgIGNjLnJlc291cmNlcy5sb2FkKHVybCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgdGFyZ2V0LnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgfSk7XG4gIH1cblxuICBpbml0Qm94KG9iaikge1xuICAgIHRoaXMuYm94T2JqID0gb2JqO1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5pY29uLCBvYmoudXJsKTtcbiAgICB0aGlzLnRpdGxlLnN0cmluZyA9ICd4JyArIG9iai5wYXlDb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgb25MaXN0Qm94KCkge1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5saXN0Qm94QmcsICdpbWFnZXMvZDInKTtcbiAgfVxuXG4gIHByaXZhdGUgb25MaXN0Qm94T3ZlcigpIHtcbiAgICB0aGlzLnNldEltYWdlKHRoaXMubGlzdEJveEJnLCAnaW1hZ2VzL2QxJyk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da5e90fyi5E2ok/vF/eouo6', 'GameView');
// src/game/GameView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BallItem_1 = require("./item/BallItem");
var GameConst_1 = require("./GameConst");
var GameModel_1 = require("./model/GameModel");
var BrickItem_1 = require("./item/BrickItem");
var RandomUtil_1 = require("../common/random/RandomUtil");
var EventDispatch_1 = require("../common/event/EventDispatch");
var AudioPlayer_1 = require("../common/audio/AudioPlayer");
var util_1 = require("../common/util");
var loader_mgr_1 = require("../common/loader/loader_mgr");
var Tween_1 = require("../common/tween/Tween");
var timer_mgr_1 = require("../common/timer/timer_mgr");
var Common_1 = require("./common/Common");
var State_1 = require("./model/State");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.bgTitle = null;
        _this.node_top = null;
        _this.stopButton = null;
        _this.startButton = null;
        _this.node_physics = null;
        _this.lb_ball_count = null;
        _this.lb_ball_power = null;
        _this.node_freeze = null;
        _this.bottomBarBox = null;
        _this.fucPrefab = null;
        _this.basePrefab = null;
        _this.lb_score = null;
        _this.node_power_progress = null;
        _this.balls_ins = [];
        _this.bricks_ins = [];
        _this.node_star_img = null;
        _this.star_ins = null;
        _this.overLine = null;
        _this.overObj = null;
        _this.clearLine = null;
        _this.clearAll = null;
        _this.cannon_head = null;
        _this.multipleBallCount = 0;
        _this.brick_max_count = 7;
        _this._star_pool = [];
        _this.balls_pool = [];
        _this.bricks_pool = [];
        _this.balls_in_game = [];
        _this.bricks_in_game = [];
        _this._updateDt = 0;
        _this._brick_speed = 1;
        _this._moved_length = 0;
        _this._moved_level = 0;
        // 1 big
        // 2 speed
        // 3 freeze
        _this._power_type = 0;
        _this._isGameOver = false;
        _this.selfFucActiveSet = new Set();
        _this._brick_img_pool = [];
        return _this;
    }
    GameView.prototype.onEnable = function () {
        State_1.default.ins().mainNear.contract.play_game({
            account_id: State_1.default.ins().mainNear.ownerKey
        });
        State_1.default.ins().isPay = false;
    };
    GameView.prototype.onLoad = function () {
        var _this = this;
        this.stopButton.on('touchstart', function () { return _this.onGameStatusToogle(false); }, this);
        this.startButton.on('touchstart', function () { return _this.onGameStatusToogle(true); }, this);
        this.initFuc();
        var random = Math.round(1000000 + Math.random() * 8999999).toString();
        RandomUtil_1.RandomUtil.ins().init(random);
        this.bg.on('touchmove', this.onTouchMove, this);
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().enabledAccumulator = true;
        for (var i = 0, len = this.balls_ins.length; i < len;) {
            this.balls_pool[i++] = [];
        }
        for (var i = 0, len = this.bricks_ins.length; i < len;) {
            this.bricks_pool[i++] = [];
        }
        this.gameStart();
    };
    GameView.prototype.initFuc = function () {
        var _this = this;
        if (this.bottomBarBox.children.length > 0) {
            this.bottomBarBox.removeAllChildren();
        }
        new Array(5).fill(1).forEach(function (item, index) {
            var target = null;
            if (index === 2) {
                target = cc.instantiate(_this.basePrefab);
                _this.cannon_head = target.getChildByName('baseBox');
            }
            else {
                target = cc.instantiate(_this.fucPrefab);
                var fucIndex_1 = index > 1 ? index - 1 : index;
                State_1.default.ins().imageList.map(function (item, index) {
                    if (item.sort === fucIndex_1 && item.payCount > 0) {
                        var targetSprite_1 = target.getComponent(cc.Sprite);
                        cc.resources.load(item.url, cc.SpriteFrame, function (err, spriteFrame) {
                            targetSprite_1.spriteFrame = spriteFrame;
                        });
                        var countBox = target.getChildByName('countBox');
                        countBox.active = true;
                        var title = countBox.getChildByName('title').getComponent(cc.Label);
                        title.string = item.title;
                        var countNode = target.getChildByName('count');
                        countNode.active = true;
                        var countLabel = countNode.getComponent(cc.Label);
                        countLabel.string = 'x' + item.payCount;
                        target.on('touchstart', function () { return _this.onFucTouchstart(target, item, index); }, _this);
                    }
                });
            }
            _this.bottomBarBox.addChild(target);
        });
    };
    GameView.prototype.onFucTouchstart = function (target, item, itemIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, bgTitleLabel, multiple, count, timeBox, timeBoxSprite, time, callback;
            var _this = this;
            return __generator(this, function (_a) {
                if (this._isGameOver || this.startButton.active)
                    return [2 /*return*/];
                if (State_1.default.ins().imageList[itemIndex].payCount <= 0)
                    return [2 /*return*/];
                if (this.selfFucActiveSet.has(item.type))
                    return [2 /*return*/];
                if (item.type === 2 || item.type === 3 || item.type === 4) {
                    if (this.selfFucActiveSet.has(2) || this.selfFucActiveSet.has(3) || this.selfFucActiveSet.has(4))
                        return [2 /*return*/];
                }
                this.selfFucActiveSet.add(item.type);
                if (item.payList.length > 0) {
                    tokenId = State_1.default.ins().imageList[itemIndex].payList.splice(0, 1)[0].token_id;
                    State_1.default.ins().mainNear.contract.nft_burn({
                        token_id: tokenId
                    });
                }
                this.bgTitle.active = true;
                bgTitleLabel = this.bgTitle.getComponent(cc.Label);
                multiple = 1;
                switch (item.type) {
                    case 6:
                        {
                            bgTitleLabel.string = '';
                            this._isGameOver = true;
                            cc.director.getPhysicsManager().enabled = false;
                            this.bricks_in_game.forEach(function (item) {
                                if (Math.abs(item.node.y - _this.bricks_in_game[0].node.y) < 45) {
                                    item.node.active = false;
                                    GameModel_1.default.ins().score += Number(item.lb_hp.string);
                                    if (item.star_num > 0) {
                                        GameModel_1.default.ins().ball_power += item.star_num;
                                        AudioPlayer_1.AudioPlayer.ins().play_sound('star');
                                    }
                                    if (item.ball_num > 0) {
                                        for (var index = 0; index < item.ball_num; index++) {
                                            EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_CREATE_BALL);
                                        }
                                        AudioPlayer_1.AudioPlayer.ins().play_sound('balls');
                                    }
                                }
                            });
                            this.clearLine.active = true;
                            this.clearLine.setPosition(750, this.bricks_in_game[0].node.y);
                            cc.tween(this.clearLine)
                                .to(0.3, { x: -750 })
                                .call(function () {
                                _this._isGameOver = false;
                                cc.director.getPhysicsManager().enabled = true;
                                _this.clearLine.active = false;
                            })
                                .start();
                        }
                        break;
                    case 1:
                        this.node_freeze.active = true;
                        bgTitleLabel.string = '冻结全屏';
                        break;
                    case 2:
                        this.cannon_head.scale = 1.4;
                        bgTitleLabel.string = '两倍加速';
                        multiple = 2;
                        break;
                    case 3:
                        this.cannon_head.scale = 1.7;
                        bgTitleLabel.string = '三倍加速';
                        multiple = 3;
                        break;
                    case 4:
                        this.cannon_head.scale = 2;
                        bgTitleLabel.string = '五倍加速';
                        multiple = 5;
                        break;
                    case 5:
                        {
                            bgTitleLabel.string = '';
                            this._isGameOver = true;
                            cc.director.getPhysicsManager().enabled = false;
                            this.bricks_in_game.forEach(function (item) {
                                item.node.active = false;
                                var hp = 0;
                                if (item.lb_hp.string.indexOf('M') !== -1) {
                                    hp = Number(item.lb_hp.string.split('M')[0]) * 1000000;
                                }
                                if (item.lb_hp.string.indexOf('K') !== -1) {
                                    hp = Number(item.lb_hp.string.split('K')[0]) * 1000;
                                }
                                GameModel_1.default.ins().score += hp;
                                if (item.star_num > 0) {
                                    GameModel_1.default.ins().ball_power += item.star_num;
                                    AudioPlayer_1.AudioPlayer.ins().play_sound('star');
                                }
                                if (item.ball_num > 0) {
                                    for (var index = 0; index < item.ball_num; index++) {
                                        EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_CREATE_BALL);
                                    }
                                    AudioPlayer_1.AudioPlayer.ins().play_sound('balls');
                                }
                            });
                            this.clearAll.active = true;
                            cc.tween(this.clearAll.getChildByName('bg3'))
                                .to(0.3, { angle: 180 })
                                .to(0.3, { angle: 360 })
                                .repeat(2)
                                .call(function () {
                                _this.clearAll.active = false;
                                _this.clearAll.getChildByName('bg3').angle = -0;
                                _this._isGameOver = false;
                                cc.director.getPhysicsManager().enabled = true;
                            })
                                .start();
                        }
                        break;
                }
                this.multipleBallCount = GameModel_1.default.ins().ball_power * (multiple - 1);
                GameModel_1.default.ins().ball_power += this.multipleBallCount;
                State_1.default.ins().imageList[itemIndex].payCount -= 1;
                count = target.getChildByName('count').getComponent(cc.Label);
                count.string = 'x' + State_1.default.ins().imageList[itemIndex].payCount.toString();
                AudioPlayer_1.AudioPlayer.ins().play_sound('levelup');
                timeBox = target.getChildByName('timeBox');
                timeBox.active = true;
                timeBoxSprite = timeBox.getComponent(cc.Sprite);
                cc.tween(timeBoxSprite)
                    .to(item.time, {
                    fillRange: 0
                })
                    .start();
                time = item.time;
                callback = function () {
                    time--;
                    _this.bgTitle.active = false;
                    if (time <= 0) {
                        _this.unschedule(callback);
                        timeBoxSprite.fillRange = 1;
                        timeBox.active = false;
                        if (item.type === 1) {
                            _this.node_freeze.active = false;
                        }
                        if (item.type === 2 || item.type === 3 || item.type === 4) {
                            _this.cannon_head.scale = 1;
                            GameModel_1.default.ins().ball_power -= _this.multipleBallCount;
                            _this.multipleBallCount = 0;
                        }
                        _this.selfFucActiveSet.delete(item.type);
                    }
                };
                this.schedule(callback, 1);
                return [2 /*return*/];
            });
        });
    };
    GameView.prototype.onGameStatusToogle = function (status) {
        if (!this.overObj.active) {
            AudioPlayer_1.AudioPlayer.ins().play_sound('btn');
            if (status) {
                this.stopButton.active = true;
                this.startButton.active = false;
                this._isGameOver = false;
                cc.director.getPhysicsManager().enabled = true;
                AudioPlayer_1.AudioPlayer.ins().play_music('bg');
            }
            else {
                this.stopButton.active = false;
                this.startButton.active = true;
                this._isGameOver = true;
                cc.director.getPhysicsManager().enabled = false;
                AudioPlayer_1.AudioPlayer.ins().stop_music();
            }
        }
    };
    GameView.prototype.onTouchMove = function (param) {
        var deltaX = param.getDeltaX();
        var deltaY = param.getDeltaY();
        var deltaR = Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 0.3;
        var sign = Math.sign(deltaX);
        var angle = -this.cannon_head.angle + deltaR * sign;
        angle = Math.abs(angle) >= 85 ? Math.sign(angle) * 85 : angle;
        this.cannon_head.angle = -angle;
    };
    GameView.prototype.gameStart = function () {
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_CREATE_BALL, this.createBall, this);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_RELIVE, this.gameRelive, this);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_ON_TOUCH_MOVE, this.onTouchMove, this);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_POWER_TYPE_CHANGED, this.updateGamePowerType, this);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_SCORE_CHANGED, this.updateScore, this, true);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_BALL_POWER_CHANGED, this.updateBallPower, this, true);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_PLAY_BRICK_REMOVE_EFFECT, this.playBrickDeleteEffect, this);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_STAR_GET_EFFECT, this.updateStarNumGetEffect, this);
        AudioPlayer_1.AudioPlayer.ins().play_music('bg');
        this.resetGame();
    };
    GameView.prototype.resetGame = function () {
        this.node_physics.active = true;
        this.cannon_head.angle = 0;
        cc.director.getPhysicsManager().enabled = true;
        this._updateDt = 0;
        this._moved_length = 0;
        this._moved_level = 0;
        this._isGameOver = false;
        this.updateGamePowerType(0);
        GameModel_1.default.ins().reset();
        var ball_init_count = GameModel_1.default.ins().ball_init_count;
        for (var index = 0; index < ball_init_count; index++) {
            this.createBall();
        }
        var brick_radius = GameConst_1.default.ins().brick_radius;
        for (var i = 0; i < 2; i++) {
            var rightNumber = Math.round(this.brick_max_count / 2);
            var leftNumber = -1 * Math.floor(this.brick_max_count / 2);
            for (var j = leftNumber; j < rightNumber; j++) {
                var hp = (i + 1) * GameModel_1.default.ins().ball_power + (ball_init_count - 4);
                hp = hp < 0 ? 1 : hp;
                this.createBrick(j * brick_radius * 2 + GameConst_1.default.ins().brick_init_x, i * brick_radius * 2 + GameConst_1.default.ins().brick_init_y, hp);
            }
        }
        this.lb_ball_power.string = "" + GameModel_1.default.ins().ball_power;
    };
    GameView.prototype.update = function (dt) {
        var _this = this;
        timer_mgr_1.TimerMgr.getInst().update(dt);
        if (this._isGameOver)
            return;
        if (this.node_freeze.active) {
            this._brick_speed = 0;
        }
        if (this._power_type > 0) {
            this.node_power_progress.width -= 1.5;
            if (this.node_power_progress.active && this.node_power_progress.width <= 0) {
                this.updateGamePowerType(0);
            }
            switch (this._power_type) {
                case 3: {
                    this._brick_speed = 0;
                    break;
                }
            }
        }
        this._updateDt++;
        this._moved_length += this._brick_speed;
        if (this._updateDt % GameModel_1.default.ins().fireBallDt === 0 || this._power_type === 2) {
            this.balls_in_game.some(function (item) {
                if (item.ball_status === BallItem_1.EnumBallStatus.onReady && (item.ball_type === 0 || _this._power_type === 2)) {
                    item.power_scale = _this._power_type === 1 ? 2 : 1;
                    item.fireBall(-_this.cannon_head.angle);
                    return true;
                }
                return false;
            });
        }
        var brick_radius = GameConst_1.default.ins().brick_radius;
        var ball_power = GameModel_1.default.ins().ball_power - this.multipleBallCount;
        var new_level = Math.floor(this._moved_length / 4 / brick_radius);
        if (new_level > this._moved_level) {
            this._moved_level++;
            var balls_in_game_length = this.balls_in_game.length / (this._power_type === 2 ? 2 : 1);
            var maxHp = Math.ceil(balls_in_game_length * ball_power * 0.5 + this._moved_level * ball_power * 1.2);
            var brick_type_percent = GameConst_1.default.ins().brick_type_percent;
            var big_j = -999;
            var item_i = -999, item_j = -999;
            if (this._moved_level % 12 === 0) {
                big_j = RandomUtil_1.RandomUtil.ins().randomNum(-2, 3);
                this.createBrick(-brick_radius + big_j * brick_radius * 2 + GameConst_1.default.ins().brick_init_x, brick_radius + GameConst_1.default.ins().brick_init_y, RandomUtil_1.RandomUtil.ins().randomNum(maxHp * 3, maxHp * 6), RandomUtil_1.RandomUtil.ins().randomNum(14, 16), 10);
            }
            if (this._moved_level % 11 === 0) {
                item_i = RandomUtil_1.RandomUtil.ins().randomNum(0, 1);
                item_j = RandomUtil_1.RandomUtil.ins().randomNum(-3, 3);
            }
            for (var i = 0; i < 2; i++) {
                for (var j = -3; j < 4; j++) {
                    if (j === big_j || j === big_j - 1) {
                    }
                    else {
                        var hp = i === item_i && j === item_j
                            ? RandomUtil_1.RandomUtil.ins().randomNum(ball_power, Math.ceil(maxHp / 2))
                            : RandomUtil_1.RandomUtil.ins().randomNum(-Math.round(maxHp / ((this._moved_level % 5) + 1)), maxHp);
                        var brick_type = i === item_i && j === item_j
                            ? RandomUtil_1.RandomUtil.ins().randomNum(11, 13)
                            : brick_type_percent[RandomUtil_1.RandomUtil.ins().randomNum(0, brick_type_percent.length - 1)];
                        if (hp >= ball_power) {
                            this.createBrick(j * brick_radius * 2 + GameConst_1.default.ins().brick_init_x, i * brick_radius * 2 + GameConst_1.default.ins().brick_init_y, hp, brick_type, Math.ceil((hp * 10) / maxHp));
                        }
                    }
                }
            }
        }
        var brick_min_y = 9999;
        for (var index = 0, len = this.bricks_in_game.length; index < len; index++) {
            var element = this.bricks_in_game[index];
            if (element && element.node) {
                var brick = element.node;
                if (element.hp <= 0 || !brick.active) {
                    if (this._updateDt % 60 === 0) {
                        element.reset();
                        this.bricks_in_game.splice(index, 1);
                        this.bricks_pool[element.brick_type].push(brick);
                        index--;
                    }
                }
                else {
                    brick.y -= this._brick_speed;
                    if (brick.y - element.brick_radius_mul * brick_radius <= this.overLine.y) {
                        this.gameOver();
                        return;
                    }
                    if (brick.y < brick_min_y) {
                        brick_min_y = brick.y;
                    }
                }
            }
        }
        this._brick_speed =
            brick_min_y > GameConst_1.default.ins().ball_init_y + brick_radius * 7 ? 1 : brick_min_y > GameConst_1.default.ins().ball_init_y + brick_radius * 5 ? 0.9 : 0.6;
    };
    GameView.prototype.createBall = function (x, y, status, ball_type) {
        if (x === void 0) { x = GameConst_1.default.ins().ball_init_x; }
        if (y === void 0) { y = GameConst_1.default.ins().ball_init_y; }
        if (status === void 0) { status = BallItem_1.EnumBallStatus.onReady; }
        if (ball_type === void 0) { ball_type = 0; }
        var ball = this.balls_pool[ball_type].shift();
        if (!ball) {
            ball = cc.instantiate(this.balls_ins[ball_type]);
            this.node_physics.addChild(ball);
        }
        var item = ball.getComponent(BallItem_1.default);
        item.init(x, y, status);
        ball.active = true;
        this.balls_in_game.unshift(item);
        this.lb_ball_count.string = "" + this.balls_in_game.length / 2;
        if (ball_type === 0) {
            this.createBall(GameConst_1.default.ins().ball_init_x, GameConst_1.default.ins().ball_init_y, BallItem_1.EnumBallStatus.onReady, 1);
        }
    };
    GameView.prototype.createBrick = function (x, y, hp, brick_type, colors_num) {
        if (x === void 0) { x = GameConst_1.default.ins().brick_init_x; }
        if (y === void 0) { y = GameConst_1.default.ins().brick_init_y; }
        if (hp === void 0) { hp = 1; }
        if (brick_type === void 0) { brick_type = 0; }
        if (colors_num === void 0) { colors_num = 1; }
        if (brick_type === this.brick_max_count && this.balls_in_game.length > 200) {
            brick_type = 0;
        }
        var brick = this.bricks_pool[brick_type].shift();
        if (!brick) {
            brick = cc.instantiate(this.bricks_ins[brick_type]);
            this.node_physics.addChild(brick);
        }
        var item = brick.getComponent(BrickItem_1.default);
        brick.active = true;
        brick.x = x;
        brick.y = y;
        item.init(colors_num, hp);
        this.bricks_in_game.push(item);
    };
    GameView.prototype.updateScore = function (old, newValue) {
        this.lb_score.string = Common_1.formatPrice(GameModel_1.default.ins().score, 0, false, ' ');
    };
    GameView.prototype.updateBallPower = function (old, newValue) {
        this.lb_ball_power.string = "" + GameModel_1.default.ins().ball_power;
    };
    GameView.prototype.updateStarNumGetEffect = function (x, y, count) {
        var _this = this;
        var targetPos = this.node_top.convertToNodeSpaceAR(this.node_star_img.convertToWorldSpaceAR(cc.v2(0, 0)));
        var _loop_1 = function (index) {
            var star_item = this_1._star_pool.shift();
            if (!star_item) {
                star_item = cc.instantiate(this_1.star_ins);
                this_1.node_top.addChild(star_item);
            }
            star_item.x = x;
            star_item.y = y;
            star_item.angle = 0;
            star_item.active = true;
            Tween_1.Tween.get(star_item)
                .to({ angle: 720, x: targetPos.x, y: targetPos.y }, 800 + 100 * index, Tween_1.Ease.getBackInOut(1.2))
                .call(function () {
                star_item.active = false;
                _this._star_pool.push(star_item);
                Tween_1.Tween.get(_this.node_star_img)
                    .to({ scale: 1.2 }, 300)
                    .to({ scale: 1 }, 300, Tween_1.Ease.backInOut)
                    .call(function () {
                    GameModel_1.default.ins().ball_power += 1;
                    _this.lb_ball_power.string = "" + GameModel_1.default.ins().ball_power;
                });
            });
        };
        var this_1 = this;
        for (var index = 0; index < count; index++) {
            _loop_1(index);
        }
    };
    GameView.prototype.playBrickDeleteEffect = function (x, y, color) {
        var _this = this;
        var theme_cfg = GameConst_1.default.ins().theme_config[0];
        if (theme_cfg) {
            loader_mgr_1.loader_mgr.get_inst().loadAsset('texture/plist/customize', util_1.gen_handler(function (res) {
                var spriteFrame = res.getSpriteFrame(theme_cfg.theme);
                if (spriteFrame) {
                    var _loop_2 = function (index) {
                        var i = (index % 3) - 1.5;
                        var j = Math.floor(index / 3) - 1.5;
                        var targetPosX = x + i * (100 + 150 * Math.random());
                        var targetPosY = y + j * (100 + 150 * Math.random());
                        var img = _this._brick_img_pool.shift();
                        if (!img) {
                            img = new cc.Node();
                            img.addComponent(cc.Sprite);
                            _this.node_physics.addChild(img);
                        }
                        img.active = true;
                        img.angle = 0;
                        img.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        img.color = color;
                        var size = Math.random() * 50 + 50;
                        img.width = img.height = size;
                        img.x = x;
                        img.y = y;
                        Tween_1.Tween.get(img)
                            .to({ x: targetPosX, y: targetPosY, width: size / 3, height: size / 3, angle: 1000 * Math.random() }, Math.random() * 500 + 500)
                            .call(function () {
                            img.active = false;
                            _this._brick_img_pool.push(img);
                        });
                    };
                    for (var index = 0; index < 9; index++) {
                        _loop_2(index);
                    }
                }
                else {
                }
            }), cc.SpriteAtlas);
        }
    };
    GameView.prototype.updateGamePowerType = function (power) {
        if (power === void 0) { power = 0; }
        if (power > 0) {
            if (this._power_type === 0) {
                this.node_power_progress.active = true;
                this.node_power_progress.width = 750;
                this._power_type = power;
                var bgTitleLabel = this.bgTitle.getComponent(cc.Label);
                switch (power) {
                    case 2: {
                        this.cannon_head.scale = 1.4;
                        break;
                    }
                    case 3: {
                        this.node_freeze.active = true;
                        break;
                    }
                }
                this.lb_ball_count.node.color = this.node_power_progress.color =
                    [cc.Color.WHITE, cc.Color.RED, cc.Color.YELLOW, cc.Color.GRAY][power] || cc.Color.WHITE;
                AudioPlayer_1.AudioPlayer.ins().play_sound('levelup');
            }
        }
        else {
            this.node_power_progress.active = false;
            this.node_power_progress.width = 750;
            this.lb_ball_count.node.color = cc.color(230, 150, 26);
            if (!this.selfFucActiveSet.has(1)) {
                this.node_freeze.active = false;
            }
            if (!this.selfFucActiveSet.has(2) && !this.selfFucActiveSet.has(3) && !this.selfFucActiveSet.has(4)) {
                this.cannon_head.scale = 1;
            }
            this._power_type = power;
        }
    };
    GameView.prototype.gameRelive = function () {
        var _this = this;
        this.bricks_in_game.forEach(function (value) {
            value.reset();
            _this.bricks_pool[value.brick_type].push(value.node);
        });
        this.bricks_in_game = [];
        this.overObj.active = false;
        this._isGameOver = false;
        cc.director.getPhysicsManager().enabled = true;
        AudioPlayer_1.AudioPlayer.ins().play_music('bg');
    };
    GameView.prototype.gameOver = function () {
        this._isGameOver = true;
        cc.director.getPhysicsManager().enabled = false;
        this.overObj.active = true;
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_RELIVE, this.gameRelive, this);
        AudioPlayer_1.AudioPlayer.ins().stop_music();
    };
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "bgTitle", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "node_top", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "stopButton", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "startButton", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "node_physics", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lb_ball_count", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lb_ball_power", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "node_freeze", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "bottomBarBox", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "fucPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "basePrefab", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lb_score", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "node_power_progress", void 0);
    __decorate([
        property([cc.Prefab])
    ], GameView.prototype, "balls_ins", void 0);
    __decorate([
        property([cc.Prefab])
    ], GameView.prototype, "bricks_ins", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "node_star_img", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "star_ins", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "overLine", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "overObj", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "clearLine", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "clearAll", void 0);
    GameView = __decorate([
        ccclass
    ], GameView);
    return GameView;
}(cc.Component));
exports.default = GameView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBMkQ7QUFDM0QseUNBQW9DO0FBQ3BDLCtDQUEwQztBQUMxQyw4Q0FBeUM7QUFDekMsMERBQXlEO0FBQ3pELCtEQUEwRTtBQUMxRSwyREFBMEQ7QUFDMUQsdUNBQTZDO0FBQzdDLDBEQUF5RDtBQUN6RCwrQ0FBb0Q7QUFDcEQsdURBQXFEO0FBQ3JELDBDQUE4QztBQUM5Qyx1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1b0JDO1FBcm9CQyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIseUJBQW1CLEdBQVksSUFBSSxDQUFDO1FBR3BDLGVBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBRTVCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUc3QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQWMsSUFB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QUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDa0I7SUFHcEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7K0NBQ007SUFFNUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0RBQ087SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFsRE4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVvQjVCO0lBQUQsZUFBQztDQXZvQkQsQUF1b0JDLENBdm9CcUMsRUFBRSxDQUFDLFNBQVMsR0F1b0JqRDtrQkF2b0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGxJdGVtLCB7IEVudW1CYWxsU3RhdHVzIH0gZnJvbSAnLi9pdGVtL0JhbGxJdGVtJztcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSAnLi9HYW1lQ29uc3QnO1xuaW1wb3J0IEdhbWVNb2RlbCBmcm9tICcuL21vZGVsL0dhbWVNb2RlbCc7XG5pbXBvcnQgQnJpY2tJdGVtIGZyb20gJy4vaXRlbS9Ccmlja0l0ZW0nO1xuaW1wb3J0IHsgUmFuZG9tVXRpbCB9IGZyb20gJy4uL2NvbW1vbi9yYW5kb20vUmFuZG9tVXRpbCc7XG5pbXBvcnQgeyBFdmVudERpc3BhdGNoLCBFdmVudF9OYW1lIH0gZnJvbSAnLi4vY29tbW9uL2V2ZW50L0V2ZW50RGlzcGF0Y2gnO1xuaW1wb3J0IHsgQXVkaW9QbGF5ZXIgfSBmcm9tICcuLi9jb21tb24vYXVkaW8vQXVkaW9QbGF5ZXInO1xuaW1wb3J0IHsgZ2VuX2hhbmRsZXIgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5pbXBvcnQgeyBsb2FkZXJfbWdyIH0gZnJvbSAnLi4vY29tbW9uL2xvYWRlci9sb2FkZXJfbWdyJztcbmltcG9ydCB7IFR3ZWVuLCBFYXNlIH0gZnJvbSAnLi4vY29tbW9uL3R3ZWVuL1R3ZWVuJztcbmltcG9ydCB7IFRpbWVyTWdyIH0gZnJvbSAnLi4vY29tbW9uL3RpbWVyL3RpbWVyX21ncic7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4vY29tbW9uL0NvbW1vbic7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9tb2RlbC9TdGF0ZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgYmc6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgYmdUaXRsZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBub2RlX3RvcDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzdG9wQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHN0YXJ0QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG5vZGVfcGh5c2ljczogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGJfYmFsbF9jb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxiX2JhbGxfcG93ZXI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG5vZGVfZnJlZXplOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGJvdHRvbUJhckJveDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGZ1Y1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgYmFzZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxiX3Njb3JlOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBub2RlX3Bvd2VyX3Byb2dyZXNzOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXG4gIGJhbGxzX2luczogY2MuUHJlZmFiW10gPSBbXTtcbiAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxuICBicmlja3NfaW5zOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBub2RlX3N0YXJfaW1nOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBzdGFyX2luczogY2MuUHJlZmFiID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgb3ZlckxpbmU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBvdmVyT2JqOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGNsZWFyTGluZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBjbGVhckFsbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgY2Fubm9uX2hlYWQ6IGNjLk5vZGUgPSBudWxsO1xuICBtdWx0aXBsZUJhbGxDb3VudCA9IDA7XG5cbiAgcHJpdmF0ZSBicmlja19tYXhfY291bnQgPSA3O1xuXG4gIHByaXZhdGUgX3N0YXJfcG9vbDogY2MuTm9kZVtdID0gW107XG5cbiAgcHJpdmF0ZSBiYWxsc19wb29sOiBjYy5Ob2RlW11bXSA9IFtdO1xuICBwcml2YXRlIGJyaWNrc19wb29sOiBjYy5Ob2RlW11bXSA9IFtdO1xuXG4gIHByaXZhdGUgYmFsbHNfaW5fZ2FtZTogQmFsbEl0ZW1bXSA9IFtdO1xuICBwcml2YXRlIGJyaWNrc19pbl9nYW1lOiBCcmlja0l0ZW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgX3VwZGF0ZUR0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9icmlja19zcGVlZDogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfbW92ZWRfbGVuZ3RoID0gMDtcbiAgcHJpdmF0ZSBfbW92ZWRfbGV2ZWwgPSAwO1xuICAvLyAxIGJpZ1xuICAvLyAyIHNwZWVkXG4gIC8vIDMgZnJlZXplXG4gIHByaXZhdGUgX3Bvd2VyX3R5cGUgPSAwO1xuICBfaXNHYW1lT3ZlciA9IGZhbHNlO1xuXG4gIHNlbGZGdWNBY3RpdmVTZXQgPSBuZXcgU2V0KCk7XG5cbiAgb25FbmFibGUoKSB7XG4gICAgU3RhdGUuaW5zKCkubWFpbk5lYXIuY29udHJhY3QucGxheV9nYW1lKHtcbiAgICAgIGFjY291bnRfaWQ6IFN0YXRlLmlucygpLm1haW5OZWFyLm93bmVyS2V5XG4gICAgfSk7XG4gICAgU3RhdGUuaW5zKCkuaXNQYXkgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnN0b3BCdXR0b24ub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLm9uR2FtZVN0YXR1c1Rvb2dsZShmYWxzZSksIHRoaXMpO1xuICAgIHRoaXMuc3RhcnRCdXR0b24ub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLm9uR2FtZVN0YXR1c1Rvb2dsZSh0cnVlKSwgdGhpcyk7XG5cbiAgICB0aGlzLmluaXRGdWMoKTtcblxuICAgIGxldCByYW5kb20gPSBNYXRoLnJvdW5kKDEwMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogODk5OTk5OSkudG9TdHJpbmcoKTtcbiAgICBSYW5kb21VdGlsLmlucygpLmluaXQocmFuZG9tKTtcblxuICAgIHRoaXMuYmcub24oJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkQWNjdW11bGF0b3IgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuYmFsbHNfaW5zLmxlbmd0aDsgaSA8IGxlbjsgKSB7XG4gICAgICB0aGlzLmJhbGxzX3Bvb2xbaSsrXSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmJyaWNrc19pbnMubGVuZ3RoOyBpIDwgbGVuOyApIHtcbiAgICAgIHRoaXMuYnJpY2tzX3Bvb2xbaSsrXSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuZ2FtZVN0YXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRGdWMoKSB7XG4gICAgaWYgKHRoaXMuYm90dG9tQmFyQm94LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYm90dG9tQmFyQm94LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfVxuICAgIG5ldyBBcnJheSg1KS5maWxsKDEpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgICB0YXJnZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhc2VQcmVmYWIpO1xuICAgICAgICB0aGlzLmNhbm5vbl9oZWFkID0gdGFyZ2V0LmdldENoaWxkQnlOYW1lKCdiYXNlQm94Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ1Y1ByZWZhYik7XG4gICAgICAgIGxldCBmdWNJbmRleCA9IGluZGV4ID4gMSA/IGluZGV4IC0gMSA6IGluZGV4O1xuICAgICAgICBTdGF0ZS5pbnMoKS5pbWFnZUxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnNvcnQgPT09IGZ1Y0luZGV4ICYmIGl0ZW0ucGF5Q291bnQgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0U3ByaXRlID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoaXRlbS51cmwsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgdGFyZ2V0U3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBjb3VudEJveCA9IHRhcmdldC5nZXRDaGlsZEJ5TmFtZSgnY291bnRCb3gnKTtcbiAgICAgICAgICAgIGNvdW50Qm94LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBjb3VudEJveC5nZXRDaGlsZEJ5TmFtZSgndGl0bGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgdGl0bGUuc3RyaW5nID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgIGxldCBjb3VudE5vZGUgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoJ2NvdW50Jyk7XG4gICAgICAgICAgICBjb3VudE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBjb3VudExhYmVsID0gY291bnROb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBjb3VudExhYmVsLnN0cmluZyA9ICd4JyArIGl0ZW0ucGF5Q291bnQ7XG4gICAgICAgICAgICB0YXJnZXQub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLm9uRnVjVG91Y2hzdGFydCh0YXJnZXQsIGl0ZW0sIGluZGV4KSwgdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm90dG9tQmFyQm94LmFkZENoaWxkKHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9uRnVjVG91Y2hzdGFydCh0YXJnZXQ6IGNjLk5vZGUsIGl0ZW0sIGl0ZW1JbmRleCkge1xuICAgIGlmICh0aGlzLl9pc0dhbWVPdmVyIHx8IHRoaXMuc3RhcnRCdXR0b24uYWN0aXZlKSByZXR1cm47XG4gICAgaWYgKFN0YXRlLmlucygpLmltYWdlTGlzdFtpdGVtSW5kZXhdLnBheUNvdW50IDw9IDApIHJldHVybjtcbiAgICBpZiAodGhpcy5zZWxmRnVjQWN0aXZlU2V0LmhhcyhpdGVtLnR5cGUpKSByZXR1cm47XG4gICAgaWYgKGl0ZW0udHlwZSA9PT0gMiB8fCBpdGVtLnR5cGUgPT09IDMgfHwgaXRlbS50eXBlID09PSA0KSB7XG4gICAgICBpZiAodGhpcy5zZWxmRnVjQWN0aXZlU2V0LmhhcygyKSB8fCB0aGlzLnNlbGZGdWNBY3RpdmVTZXQuaGFzKDMpIHx8IHRoaXMuc2VsZkZ1Y0FjdGl2ZVNldC5oYXMoNCkpIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWxmRnVjQWN0aXZlU2V0LmFkZChpdGVtLnR5cGUpO1xuXG4gICAgaWYgKGl0ZW0ucGF5TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdG9rZW5JZCA9IFN0YXRlLmlucygpLmltYWdlTGlzdFtpdGVtSW5kZXhdLnBheUxpc3Quc3BsaWNlKDAsIDEpWzBdLnRva2VuX2lkO1xuICAgICAgU3RhdGUuaW5zKCkubWFpbk5lYXIuY29udHJhY3QubmZ0X2J1cm4oe1xuICAgICAgICB0b2tlbl9pZDogdG9rZW5JZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5iZ1RpdGxlLmFjdGl2ZSA9IHRydWU7XG4gICAgbGV0IGJnVGl0bGVMYWJlbCA9IHRoaXMuYmdUaXRsZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIGxldCBtdWx0aXBsZSA9IDE7XG4gICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAge1xuICAgICAgICAgIGJnVGl0bGVMYWJlbC5zdHJpbmcgPSAnJztcbiAgICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJyaWNrc19pbl9nYW1lLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhpdGVtLm5vZGUueSAtIHRoaXMuYnJpY2tzX2luX2dhbWVbMF0ubm9kZS55KSA8IDQ1KSB7XG4gICAgICAgICAgICAgIGl0ZW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgR2FtZU1vZGVsLmlucygpLnNjb3JlICs9IE51bWJlcihpdGVtLmxiX2hwLnN0cmluZyk7XG4gICAgICAgICAgICAgIGlmIChpdGVtLnN0YXJfbnVtID4gMCkge1xuICAgICAgICAgICAgICAgIEdhbWVNb2RlbC5pbnMoKS5iYWxsX3Bvd2VyICs9IGl0ZW0uc3Rhcl9udW07XG4gICAgICAgICAgICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnc3RhcicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChpdGVtLmJhbGxfbnVtID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtLmJhbGxfbnVtOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICBFdmVudERpc3BhdGNoLmlucygpLmZpcmUoRXZlbnRfTmFtZS5HQU1FX0NSRUFURV9CQUxMKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnYmFsbHMnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY2xlYXJMaW5lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jbGVhckxpbmUuc2V0UG9zaXRpb24oNzUwLCB0aGlzLmJyaWNrc19pbl9nYW1lWzBdLm5vZGUueSk7XG4gICAgICAgICAgY2MudHdlZW4odGhpcy5jbGVhckxpbmUpXG4gICAgICAgICAgICAudG8oMC4zLCB7IHg6IC03NTAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5faXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyTGluZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5ub2RlX2ZyZWV6ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBiZ1RpdGxlTGFiZWwuc3RyaW5nID0gJ+WGu+e7k+WFqOWxjyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmNhbm5vbl9oZWFkLnNjYWxlID0gMS40O1xuICAgICAgICBiZ1RpdGxlTGFiZWwuc3RyaW5nID0gJ+S4pOWAjeWKoOmAnyc7XG4gICAgICAgIG11bHRpcGxlID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMuY2Fubm9uX2hlYWQuc2NhbGUgPSAxLjc7XG4gICAgICAgIGJnVGl0bGVMYWJlbC5zdHJpbmcgPSAn5LiJ5YCN5Yqg6YCfJztcbiAgICAgICAgbXVsdGlwbGUgPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5jYW5ub25faGVhZC5zY2FsZSA9IDI7XG4gICAgICAgIGJnVGl0bGVMYWJlbC5zdHJpbmcgPSAn5LqU5YCN5Yqg6YCfJztcbiAgICAgICAgbXVsdGlwbGUgPSA1O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAge1xuICAgICAgICAgIGJnVGl0bGVMYWJlbC5zdHJpbmcgPSAnJztcbiAgICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJyaWNrc19pbl9nYW1lLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBocCA9IDA7XG4gICAgICAgICAgICBpZiAoaXRlbS5sYl9ocC5zdHJpbmcuaW5kZXhPZignTScpICE9PSAtMSkge1xuICAgICAgICAgICAgICBocCA9IE51bWJlcihpdGVtLmxiX2hwLnN0cmluZy5zcGxpdCgnTScpWzBdKSAqIDEwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5sYl9ocC5zdHJpbmcuaW5kZXhPZignSycpICE9PSAtMSkge1xuICAgICAgICAgICAgICBocCA9IE51bWJlcihpdGVtLmxiX2hwLnN0cmluZy5zcGxpdCgnSycpWzBdKSAqIDEwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lTW9kZWwuaW5zKCkuc2NvcmUgKz0gaHA7XG4gICAgICAgICAgICBpZiAoaXRlbS5zdGFyX251bSA+IDApIHtcbiAgICAgICAgICAgICAgR2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXIgKz0gaXRlbS5zdGFyX251bTtcbiAgICAgICAgICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnc3RhcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uYmFsbF9udW0gPiAwKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtLmJhbGxfbnVtOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRjaC5pbnMoKS5maXJlKEV2ZW50X05hbWUuR0FNRV9DUkVBVEVfQkFMTCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnYmFsbHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNsZWFyQWxsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgY2MudHdlZW4odGhpcy5jbGVhckFsbC5nZXRDaGlsZEJ5TmFtZSgnYmczJykpXG4gICAgICAgICAgICAudG8oMC4zLCB7IGFuZ2xlOiAxODAgfSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgYW5nbGU6IDM2MCB9KVxuICAgICAgICAgICAgLnJlcGVhdCgyKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyQWxsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyQWxsLmdldENoaWxkQnlOYW1lKCdiZzMnKS5hbmdsZSA9IC0wO1xuICAgICAgICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5tdWx0aXBsZUJhbGxDb3VudCA9IEdhbWVNb2RlbC5pbnMoKS5iYWxsX3Bvd2VyICogKG11bHRpcGxlIC0gMSk7XG4gICAgR2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXIgKz0gdGhpcy5tdWx0aXBsZUJhbGxDb3VudDtcblxuICAgIFN0YXRlLmlucygpLmltYWdlTGlzdFtpdGVtSW5kZXhdLnBheUNvdW50IC09IDE7XG4gICAgbGV0IGNvdW50ID0gdGFyZ2V0LmdldENoaWxkQnlOYW1lKCdjb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgY291bnQuc3RyaW5nID0gJ3gnICsgU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W2l0ZW1JbmRleF0ucGF5Q291bnQudG9TdHJpbmcoKTtcbiAgICBBdWRpb1BsYXllci5pbnMoKS5wbGF5X3NvdW5kKCdsZXZlbHVwJyk7XG5cbiAgICBsZXQgdGltZUJveCA9IHRhcmdldC5nZXRDaGlsZEJ5TmFtZSgndGltZUJveCcpO1xuICAgIHRpbWVCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICBsZXQgdGltZUJveFNwcml0ZSA9IHRpbWVCb3guZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgY2MudHdlZW4odGltZUJveFNwcml0ZSlcbiAgICAgIC50byhpdGVtLnRpbWUsIHtcbiAgICAgICAgZmlsbFJhbmdlOiAwXG4gICAgICB9KVxuICAgICAgLnN0YXJ0KCk7XG5cbiAgICBsZXQgdGltZSA9IGl0ZW0udGltZTtcbiAgICBsZXQgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aW1lLS07XG4gICAgICB0aGlzLmJnVGl0bGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBpZiAodGltZSA8PSAwKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZShjYWxsYmFjayk7XG4gICAgICAgIHRpbWVCb3hTcHJpdGUuZmlsbFJhbmdlID0gMTtcbiAgICAgICAgdGltZUJveC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gMSkge1xuICAgICAgICAgIHRoaXMubm9kZV9mcmVlemUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gMiB8fCBpdGVtLnR5cGUgPT09IDMgfHwgaXRlbS50eXBlID09PSA0KSB7XG4gICAgICAgICAgdGhpcy5jYW5ub25faGVhZC5zY2FsZSA9IDE7XG4gICAgICAgICAgR2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXIgLT0gdGhpcy5tdWx0aXBsZUJhbGxDb3VudDtcbiAgICAgICAgICB0aGlzLm11bHRpcGxlQmFsbENvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGZGdWNBY3RpdmVTZXQuZGVsZXRlKGl0ZW0udHlwZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNjaGVkdWxlKGNhbGxiYWNrLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgb25HYW1lU3RhdHVzVG9vZ2xlKHN0YXR1cykge1xuICAgIGlmICghdGhpcy5vdmVyT2JqLmFjdGl2ZSkge1xuICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnYnRuJyk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIEF1ZGlvUGxheWVyLmlucygpLnBsYXlfbXVzaWMoJ2JnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3BCdXR0b24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBBdWRpb1BsYXllci5pbnMoKS5zdG9wX211c2ljKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoTW92ZShwYXJhbTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgIGNvbnN0IGRlbHRhWCA9IHBhcmFtLmdldERlbHRhWCgpO1xuICAgIGNvbnN0IGRlbHRhWSA9IHBhcmFtLmdldERlbHRhWSgpO1xuICAgIGNvbnN0IGRlbHRhUiA9IE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpICogMC4zO1xuICAgIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24oZGVsdGFYKTtcbiAgICBsZXQgYW5nbGUgPSAtdGhpcy5jYW5ub25faGVhZC5hbmdsZSArIGRlbHRhUiAqIHNpZ247XG4gICAgYW5nbGUgPSBNYXRoLmFicyhhbmdsZSkgPj0gODUgPyBNYXRoLnNpZ24oYW5nbGUpICogODUgOiBhbmdsZTtcbiAgICB0aGlzLmNhbm5vbl9oZWFkLmFuZ2xlID0gLWFuZ2xlO1xuICB9XG5cbiAgcHJpdmF0ZSBnYW1lU3RhcnQoKSB7XG4gICAgRXZlbnREaXNwYXRjaC5pbnMoKS5hZGQoRXZlbnRfTmFtZS5HQU1FX0NSRUFURV9CQUxMLCB0aGlzLmNyZWF0ZUJhbGwsIHRoaXMpO1xuICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuYWRkKEV2ZW50X05hbWUuR0FNRV9SRUxJVkUsIHRoaXMuZ2FtZVJlbGl2ZSwgdGhpcyk7XG4gICAgRXZlbnREaXNwYXRjaC5pbnMoKS5hZGQoRXZlbnRfTmFtZS5HQU1FX09OX1RPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuYWRkKEV2ZW50X05hbWUuR0FNRV9QT1dFUl9UWVBFX0NIQU5HRUQsIHRoaXMudXBkYXRlR2FtZVBvd2VyVHlwZSwgdGhpcyk7XG4gICAgRXZlbnREaXNwYXRjaC5pbnMoKS5hZGQoRXZlbnRfTmFtZS5HQU1FX1NDT1JFX0NIQU5HRUQsIHRoaXMudXBkYXRlU2NvcmUsIHRoaXMsIHRydWUpO1xuICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuYWRkKEV2ZW50X05hbWUuR0FNRV9CQUxMX1BPV0VSX0NIQU5HRUQsIHRoaXMudXBkYXRlQmFsbFBvd2VyLCB0aGlzLCB0cnVlKTtcbiAgICBFdmVudERpc3BhdGNoLmlucygpLmFkZChFdmVudF9OYW1lLkdBTUVfUExBWV9CUklDS19SRU1PVkVfRUZGRUNULCB0aGlzLnBsYXlCcmlja0RlbGV0ZUVmZmVjdCwgdGhpcyk7XG4gICAgRXZlbnREaXNwYXRjaC5pbnMoKS5hZGQoRXZlbnRfTmFtZS5HQU1FX1NUQVJfR0VUX0VGRkVDVCwgdGhpcy51cGRhdGVTdGFyTnVtR2V0RWZmZWN0LCB0aGlzKTtcbiAgICBBdWRpb1BsYXllci5pbnMoKS5wbGF5X211c2ljKCdiZycpO1xuXG4gICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRHYW1lKCkge1xuICAgIHRoaXMubm9kZV9waHlzaWNzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5jYW5ub25faGVhZC5hbmdsZSA9IDA7XG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLl91cGRhdGVEdCA9IDA7XG4gICAgdGhpcy5fbW92ZWRfbGVuZ3RoID0gMDtcbiAgICB0aGlzLl9tb3ZlZF9sZXZlbCA9IDA7XG4gICAgdGhpcy5faXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlR2FtZVBvd2VyVHlwZSgwKTtcbiAgICBHYW1lTW9kZWwuaW5zKCkucmVzZXQoKTtcbiAgICBjb25zdCBiYWxsX2luaXRfY291bnQgPSBHYW1lTW9kZWwuaW5zKCkuYmFsbF9pbml0X2NvdW50O1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBiYWxsX2luaXRfY291bnQ7IGluZGV4KyspIHtcbiAgICAgIHRoaXMuY3JlYXRlQmFsbCgpO1xuICAgIH1cbiAgICBjb25zdCBicmlja19yYWRpdXMgPSBHYW1lQ29uc3QuaW5zKCkuYnJpY2tfcmFkaXVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBsZXQgcmlnaHROdW1iZXIgPSBNYXRoLnJvdW5kKHRoaXMuYnJpY2tfbWF4X2NvdW50IC8gMik7XG4gICAgICBsZXQgbGVmdE51bWJlciA9IC0xICogTWF0aC5mbG9vcih0aGlzLmJyaWNrX21heF9jb3VudCAvIDIpO1xuICAgICAgZm9yIChsZXQgaiA9IGxlZnROdW1iZXI7IGogPCByaWdodE51bWJlcjsgaisrKSB7XG4gICAgICAgIGxldCBocCA9IChpICsgMSkgKiBHYW1lTW9kZWwuaW5zKCkuYmFsbF9wb3dlciArIChiYWxsX2luaXRfY291bnQgLSA0KTtcbiAgICAgICAgaHAgPSBocCA8IDAgPyAxIDogaHA7XG4gICAgICAgIHRoaXMuY3JlYXRlQnJpY2soaiAqIGJyaWNrX3JhZGl1cyAqIDIgKyBHYW1lQ29uc3QuaW5zKCkuYnJpY2tfaW5pdF94LCBpICogYnJpY2tfcmFkaXVzICogMiArIEdhbWVDb25zdC5pbnMoKS5icmlja19pbml0X3ksIGhwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxiX2JhbGxfcG93ZXIuc3RyaW5nID0gYCR7R2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXJ9YDtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIFRpbWVyTWdyLmdldEluc3QoKS51cGRhdGUoZHQpO1xuXG4gICAgaWYgKHRoaXMuX2lzR2FtZU92ZXIpIHJldHVybjtcblxuICAgIGlmICh0aGlzLm5vZGVfZnJlZXplLmFjdGl2ZSkge1xuICAgICAgdGhpcy5fYnJpY2tfc3BlZWQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3dlcl90eXBlID4gMCkge1xuICAgICAgdGhpcy5ub2RlX3Bvd2VyX3Byb2dyZXNzLndpZHRoIC09IDEuNTtcbiAgICAgIGlmICh0aGlzLm5vZGVfcG93ZXJfcHJvZ3Jlc3MuYWN0aXZlICYmIHRoaXMubm9kZV9wb3dlcl9wcm9ncmVzcy53aWR0aCA8PSAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlR2FtZVBvd2VyVHlwZSgwKTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAodGhpcy5fcG93ZXJfdHlwZSkge1xuICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICB0aGlzLl9icmlja19zcGVlZCA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVEdCsrO1xuICAgIHRoaXMuX21vdmVkX2xlbmd0aCArPSB0aGlzLl9icmlja19zcGVlZDtcblxuICAgIGlmICh0aGlzLl91cGRhdGVEdCAlIEdhbWVNb2RlbC5pbnMoKS5maXJlQmFsbER0ID09PSAwIHx8IHRoaXMuX3Bvd2VyX3R5cGUgPT09IDIpIHtcbiAgICAgIHRoaXMuYmFsbHNfaW5fZ2FtZS5zb21lKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmJhbGxfc3RhdHVzID09PSBFbnVtQmFsbFN0YXR1cy5vblJlYWR5ICYmIChpdGVtLmJhbGxfdHlwZSA9PT0gMCB8fCB0aGlzLl9wb3dlcl90eXBlID09PSAyKSkge1xuICAgICAgICAgIGl0ZW0ucG93ZXJfc2NhbGUgPSB0aGlzLl9wb3dlcl90eXBlID09PSAxID8gMiA6IDE7XG4gICAgICAgICAgaXRlbS5maXJlQmFsbCgtdGhpcy5jYW5ub25faGVhZC5hbmdsZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnJpY2tfcmFkaXVzID0gR2FtZUNvbnN0LmlucygpLmJyaWNrX3JhZGl1cztcbiAgICBjb25zdCBiYWxsX3Bvd2VyID0gR2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXIgLSB0aGlzLm11bHRpcGxlQmFsbENvdW50O1xuICAgIGNvbnN0IG5ld19sZXZlbCA9IE1hdGguZmxvb3IodGhpcy5fbW92ZWRfbGVuZ3RoIC8gNCAvIGJyaWNrX3JhZGl1cyk7XG4gICAgaWYgKG5ld19sZXZlbCA+IHRoaXMuX21vdmVkX2xldmVsKSB7XG4gICAgICB0aGlzLl9tb3ZlZF9sZXZlbCsrO1xuICAgICAgbGV0IGJhbGxzX2luX2dhbWVfbGVuZ3RoID0gdGhpcy5iYWxsc19pbl9nYW1lLmxlbmd0aCAvICh0aGlzLl9wb3dlcl90eXBlID09PSAyID8gMiA6IDEpO1xuICAgICAgY29uc3QgbWF4SHAgPSBNYXRoLmNlaWwoYmFsbHNfaW5fZ2FtZV9sZW5ndGggKiBiYWxsX3Bvd2VyICogMC41ICsgdGhpcy5fbW92ZWRfbGV2ZWwgKiBiYWxsX3Bvd2VyICogMS4yKTtcbiAgICAgIGNvbnN0IGJyaWNrX3R5cGVfcGVyY2VudCA9IEdhbWVDb25zdC5pbnMoKS5icmlja190eXBlX3BlcmNlbnQ7XG4gICAgICBsZXQgYmlnX2ogPSAtOTk5O1xuICAgICAgbGV0IGl0ZW1faSA9IC05OTksXG4gICAgICAgIGl0ZW1faiA9IC05OTk7XG4gICAgICBpZiAodGhpcy5fbW92ZWRfbGV2ZWwgJSAxMiA9PT0gMCkge1xuICAgICAgICBiaWdfaiA9IFJhbmRvbVV0aWwuaW5zKCkucmFuZG9tTnVtKC0yLCAzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCcmljayhcbiAgICAgICAgICAtYnJpY2tfcmFkaXVzICsgYmlnX2ogKiBicmlja19yYWRpdXMgKiAyICsgR2FtZUNvbnN0LmlucygpLmJyaWNrX2luaXRfeCxcbiAgICAgICAgICBicmlja19yYWRpdXMgKyBHYW1lQ29uc3QuaW5zKCkuYnJpY2tfaW5pdF95LFxuICAgICAgICAgIFJhbmRvbVV0aWwuaW5zKCkucmFuZG9tTnVtKG1heEhwICogMywgbWF4SHAgKiA2KSxcbiAgICAgICAgICBSYW5kb21VdGlsLmlucygpLnJhbmRvbU51bSgxNCwgMTYpLFxuICAgICAgICAgIDEwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbW92ZWRfbGV2ZWwgJSAxMSA9PT0gMCkge1xuICAgICAgICBpdGVtX2kgPSBSYW5kb21VdGlsLmlucygpLnJhbmRvbU51bSgwLCAxKTtcbiAgICAgICAgaXRlbV9qID0gUmFuZG9tVXRpbC5pbnMoKS5yYW5kb21OdW0oLTMsIDMpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IC0zOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgaWYgKGogPT09IGJpZ19qIHx8IGogPT09IGJpZ19qIC0gMSkge1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaHAgPVxuICAgICAgICAgICAgICBpID09PSBpdGVtX2kgJiYgaiA9PT0gaXRlbV9qXG4gICAgICAgICAgICAgICAgPyBSYW5kb21VdGlsLmlucygpLnJhbmRvbU51bShiYWxsX3Bvd2VyLCBNYXRoLmNlaWwobWF4SHAgLyAyKSlcbiAgICAgICAgICAgICAgICA6IFJhbmRvbVV0aWwuaW5zKCkucmFuZG9tTnVtKC1NYXRoLnJvdW5kKG1heEhwIC8gKCh0aGlzLl9tb3ZlZF9sZXZlbCAlIDUpICsgMSkpLCBtYXhIcCk7XG4gICAgICAgICAgICBsZXQgYnJpY2tfdHlwZSA9XG4gICAgICAgICAgICAgIGkgPT09IGl0ZW1faSAmJiBqID09PSBpdGVtX2pcbiAgICAgICAgICAgICAgICA/IFJhbmRvbVV0aWwuaW5zKCkucmFuZG9tTnVtKDExLCAxMylcbiAgICAgICAgICAgICAgICA6IGJyaWNrX3R5cGVfcGVyY2VudFtSYW5kb21VdGlsLmlucygpLnJhbmRvbU51bSgwLCBicmlja190eXBlX3BlcmNlbnQubGVuZ3RoIC0gMSldO1xuICAgICAgICAgICAgaWYgKGhwID49IGJhbGxfcG93ZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCcmljayhcbiAgICAgICAgICAgICAgICBqICogYnJpY2tfcmFkaXVzICogMiArIEdhbWVDb25zdC5pbnMoKS5icmlja19pbml0X3gsXG4gICAgICAgICAgICAgICAgaSAqIGJyaWNrX3JhZGl1cyAqIDIgKyBHYW1lQ29uc3QuaW5zKCkuYnJpY2tfaW5pdF95LFxuICAgICAgICAgICAgICAgIGhwLFxuICAgICAgICAgICAgICAgIGJyaWNrX3R5cGUsXG4gICAgICAgICAgICAgICAgTWF0aC5jZWlsKChocCAqIDEwKSAvIG1heEhwKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBicmlja19taW5feSA9IDk5OTk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSB0aGlzLmJyaWNrc19pbl9nYW1lLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmJyaWNrc19pbl9nYW1lW2luZGV4XTtcbiAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZSkge1xuICAgICAgICBjb25zdCBicmljayA9IGVsZW1lbnQubm9kZTtcbiAgICAgICAgaWYgKGVsZW1lbnQuaHAgPD0gMCB8fCAhYnJpY2suYWN0aXZlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUR0ICUgNjAgPT09IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuYnJpY2tzX2luX2dhbWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuYnJpY2tzX3Bvb2xbZWxlbWVudC5icmlja190eXBlXS5wdXNoKGJyaWNrKTtcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyaWNrLnkgLT0gdGhpcy5fYnJpY2tfc3BlZWQ7XG4gICAgICAgICAgaWYgKGJyaWNrLnkgLSBlbGVtZW50LmJyaWNrX3JhZGl1c19tdWwgKiBicmlja19yYWRpdXMgPD0gdGhpcy5vdmVyTGluZS55KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChicmljay55IDwgYnJpY2tfbWluX3kpIHtcbiAgICAgICAgICAgIGJyaWNrX21pbl95ID0gYnJpY2sueTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYnJpY2tfc3BlZWQgPVxuICAgICAgYnJpY2tfbWluX3kgPiBHYW1lQ29uc3QuaW5zKCkuYmFsbF9pbml0X3kgKyBicmlja19yYWRpdXMgKiA3ID8gMSA6IGJyaWNrX21pbl95ID4gR2FtZUNvbnN0LmlucygpLmJhbGxfaW5pdF95ICsgYnJpY2tfcmFkaXVzICogNSA/IDAuOSA6IDAuNjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQmFsbCh4ID0gR2FtZUNvbnN0LmlucygpLmJhbGxfaW5pdF94LCB5ID0gR2FtZUNvbnN0LmlucygpLmJhbGxfaW5pdF95LCBzdGF0dXMgPSBFbnVtQmFsbFN0YXR1cy5vblJlYWR5LCBiYWxsX3R5cGUgPSAwKSB7XG4gICAgbGV0IGJhbGwgPSB0aGlzLmJhbGxzX3Bvb2xbYmFsbF90eXBlXS5zaGlmdCgpO1xuICAgIGlmICghYmFsbCkge1xuICAgICAgYmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbHNfaW5zW2JhbGxfdHlwZV0pO1xuICAgICAgdGhpcy5ub2RlX3BoeXNpY3MuYWRkQ2hpbGQoYmFsbCk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSBiYWxsLmdldENvbXBvbmVudChCYWxsSXRlbSk7XG4gICAgaXRlbS5pbml0KHgsIHksIHN0YXR1cyk7XG4gICAgYmFsbC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYmFsbHNfaW5fZ2FtZS51bnNoaWZ0KGl0ZW0pO1xuICAgIHRoaXMubGJfYmFsbF9jb3VudC5zdHJpbmcgPSBgJHt0aGlzLmJhbGxzX2luX2dhbWUubGVuZ3RoIC8gMn1gO1xuICAgIGlmIChiYWxsX3R5cGUgPT09IDApIHtcbiAgICAgIHRoaXMuY3JlYXRlQmFsbChHYW1lQ29uc3QuaW5zKCkuYmFsbF9pbml0X3gsIEdhbWVDb25zdC5pbnMoKS5iYWxsX2luaXRfeSwgRW51bUJhbGxTdGF0dXMub25SZWFkeSwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVCcmljayh4ID0gR2FtZUNvbnN0LmlucygpLmJyaWNrX2luaXRfeCwgeSA9IEdhbWVDb25zdC5pbnMoKS5icmlja19pbml0X3ksIGhwID0gMSwgYnJpY2tfdHlwZSA9IDAsIGNvbG9yc19udW0gPSAxKSB7XG4gICAgaWYgKGJyaWNrX3R5cGUgPT09IHRoaXMuYnJpY2tfbWF4X2NvdW50ICYmIHRoaXMuYmFsbHNfaW5fZ2FtZS5sZW5ndGggPiAyMDApIHtcbiAgICAgIGJyaWNrX3R5cGUgPSAwO1xuICAgIH1cbiAgICBsZXQgYnJpY2sgPSB0aGlzLmJyaWNrc19wb29sW2JyaWNrX3R5cGVdLnNoaWZ0KCk7XG4gICAgaWYgKCFicmljaykge1xuICAgICAgYnJpY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJyaWNrc19pbnNbYnJpY2tfdHlwZV0pO1xuICAgICAgdGhpcy5ub2RlX3BoeXNpY3MuYWRkQ2hpbGQoYnJpY2spO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gYnJpY2suZ2V0Q29tcG9uZW50KEJyaWNrSXRlbSk7XG4gICAgYnJpY2suYWN0aXZlID0gdHJ1ZTtcbiAgICBicmljay54ID0geDtcbiAgICBicmljay55ID0geTtcbiAgICBpdGVtLmluaXQoY29sb3JzX251bSwgaHApO1xuICAgIHRoaXMuYnJpY2tzX2luX2dhbWUucHVzaChpdGVtKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2NvcmUob2xkPzogbnVtYmVyLCBuZXdWYWx1ZT86IG51bWJlcikge1xuICAgIHRoaXMubGJfc2NvcmUuc3RyaW5nID0gZm9ybWF0UHJpY2UoR2FtZU1vZGVsLmlucygpLnNjb3JlLCAwLCBmYWxzZSwgJyAnKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQmFsbFBvd2VyKG9sZD86IG51bWJlciwgbmV3VmFsdWU/OiBudW1iZXIpIHtcbiAgICB0aGlzLmxiX2JhbGxfcG93ZXIuc3RyaW5nID0gYCR7R2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXJ9YDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3Rhck51bUdldEVmZmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgY291bnQ6IG51bWJlcikge1xuICAgIGNvbnN0IHRhcmdldFBvcyA9IHRoaXMubm9kZV90b3AuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5ub2RlX3N0YXJfaW1nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSkpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgbGV0IHN0YXJfaXRlbSA9IHRoaXMuX3N0YXJfcG9vbC5zaGlmdCgpO1xuICAgICAgaWYgKCFzdGFyX2l0ZW0pIHtcbiAgICAgICAgc3Rhcl9pdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyX2lucyk7XG4gICAgICAgIHRoaXMubm9kZV90b3AuYWRkQ2hpbGQoc3Rhcl9pdGVtKTtcbiAgICAgIH1cbiAgICAgIHN0YXJfaXRlbS54ID0geDtcbiAgICAgIHN0YXJfaXRlbS55ID0geTtcbiAgICAgIHN0YXJfaXRlbS5hbmdsZSA9IDA7XG4gICAgICBzdGFyX2l0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIFR3ZWVuLmdldChzdGFyX2l0ZW0pXG4gICAgICAgIC50byh7IGFuZ2xlOiA3MjAsIHg6IHRhcmdldFBvcy54LCB5OiB0YXJnZXRQb3MueSB9LCA4MDAgKyAxMDAgKiBpbmRleCwgRWFzZS5nZXRCYWNrSW5PdXQoMS4yKSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgIHN0YXJfaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9zdGFyX3Bvb2wucHVzaChzdGFyX2l0ZW0pO1xuICAgICAgICAgIFR3ZWVuLmdldCh0aGlzLm5vZGVfc3Rhcl9pbWcpXG4gICAgICAgICAgICAudG8oeyBzY2FsZTogMS4yIH0sIDMwMClcbiAgICAgICAgICAgIC50byh7IHNjYWxlOiAxIH0sIDMwMCwgRWFzZS5iYWNrSW5PdXQpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgIEdhbWVNb2RlbC5pbnMoKS5iYWxsX3Bvd2VyICs9IDE7XG4gICAgICAgICAgICAgIHRoaXMubGJfYmFsbF9wb3dlci5zdHJpbmcgPSBgJHtHYW1lTW9kZWwuaW5zKCkuYmFsbF9wb3dlcn1gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2JyaWNrX2ltZ19wb29sOiBjYy5Ob2RlW10gPSBbXTtcbiAgcHJpdmF0ZSBwbGF5QnJpY2tEZWxldGVFZmZlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBjYy5Db2xvcikge1xuICAgIGNvbnN0IHRoZW1lX2NmZyA9IEdhbWVDb25zdC5pbnMoKS50aGVtZV9jb25maWdbMF07XG4gICAgaWYgKHRoZW1lX2NmZykge1xuICAgICAgbG9hZGVyX21nci5nZXRfaW5zdCgpLmxvYWRBc3NldChcbiAgICAgICAgJ3RleHR1cmUvcGxpc3QvY3VzdG9taXplJyxcbiAgICAgICAgZ2VuX2hhbmRsZXIoKHJlczogY2MuU3ByaXRlQXRsYXMpID0+IHtcbiAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IHJlcy5nZXRTcHJpdGVGcmFtZSh0aGVtZV9jZmcudGhlbWUpO1xuICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaSA9IChpbmRleCAlIDMpIC0gMS41O1xuICAgICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihpbmRleCAvIDMpIC0gMS41O1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQb3NYID0geCArIGkgKiAoMTAwICsgMTUwICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvc1kgPSB5ICsgaiAqICgxMDAgKyAxNTAgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgICAgbGV0IGltZyA9IHRoaXMuX2JyaWNrX2ltZ19wb29sLnNoaWZ0KCk7XG4gICAgICAgICAgICAgIGlmICghaW1nKSB7XG4gICAgICAgICAgICAgICAgaW1nID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgICAgICBpbWcuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlX3BoeXNpY3MuYWRkQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbWcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaW1nLmFuZ2xlID0gMDtcbiAgICAgICAgICAgICAgaW1nLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgIGltZy5jb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgICBjb25zdCBzaXplID0gTWF0aC5yYW5kb20oKSAqIDUwICsgNTA7XG4gICAgICAgICAgICAgIGltZy53aWR0aCA9IGltZy5oZWlnaHQgPSBzaXplO1xuICAgICAgICAgICAgICBpbWcueCA9IHg7XG4gICAgICAgICAgICAgIGltZy55ID0geTtcbiAgICAgICAgICAgICAgVHdlZW4uZ2V0KGltZylcbiAgICAgICAgICAgICAgICAudG8oeyB4OiB0YXJnZXRQb3NYLCB5OiB0YXJnZXRQb3NZLCB3aWR0aDogc2l6ZSAvIDMsIGhlaWdodDogc2l6ZSAvIDMsIGFuZ2xlOiAxMDAwICogTWF0aC5yYW5kb20oKSB9LCBNYXRoLnJhbmRvbSgpICogNTAwICsgNTAwKVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGltZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2JyaWNrX2ltZ19wb29sLnB1c2goaW1nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGNjLlNwcml0ZUF0bGFzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlR2FtZVBvd2VyVHlwZShwb3dlciA9IDApIHtcbiAgICBpZiAocG93ZXIgPiAwKSB7XG4gICAgICBpZiAodGhpcy5fcG93ZXJfdHlwZSA9PT0gMCkge1xuICAgICAgICB0aGlzLm5vZGVfcG93ZXJfcHJvZ3Jlc3MuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlX3Bvd2VyX3Byb2dyZXNzLndpZHRoID0gNzUwO1xuICAgICAgICB0aGlzLl9wb3dlcl90eXBlID0gcG93ZXI7XG4gICAgICAgIGxldCBiZ1RpdGxlTGFiZWwgPSB0aGlzLmJnVGl0bGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgc3dpdGNoIChwb3dlcikge1xuICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgdGhpcy5jYW5ub25faGVhZC5zY2FsZSA9IDEuNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICAgIHRoaXMubm9kZV9mcmVlemUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxiX2JhbGxfY291bnQubm9kZS5jb2xvciA9IHRoaXMubm9kZV9wb3dlcl9wcm9ncmVzcy5jb2xvciA9XG4gICAgICAgICAgW2NjLkNvbG9yLldISVRFLCBjYy5Db2xvci5SRUQsIGNjLkNvbG9yLllFTExPVywgY2MuQ29sb3IuR1JBWV1bcG93ZXJdIHx8IGNjLkNvbG9yLldISVRFO1xuICAgICAgICBBdWRpb1BsYXllci5pbnMoKS5wbGF5X3NvdW5kKCdsZXZlbHVwJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZV9wb3dlcl9wcm9ncmVzcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubm9kZV9wb3dlcl9wcm9ncmVzcy53aWR0aCA9IDc1MDtcbiAgICAgIHRoaXMubGJfYmFsbF9jb3VudC5ub2RlLmNvbG9yID0gY2MuY29sb3IoMjMwLCAxNTAsIDI2KTtcbiAgICAgIGlmICghdGhpcy5zZWxmRnVjQWN0aXZlU2V0LmhhcygxKSkge1xuICAgICAgICB0aGlzLm5vZGVfZnJlZXplLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNlbGZGdWNBY3RpdmVTZXQuaGFzKDIpICYmICF0aGlzLnNlbGZGdWNBY3RpdmVTZXQuaGFzKDMpICYmICF0aGlzLnNlbGZGdWNBY3RpdmVTZXQuaGFzKDQpKSB7XG4gICAgICAgIHRoaXMuY2Fubm9uX2hlYWQuc2NhbGUgPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5fcG93ZXJfdHlwZSA9IHBvd2VyO1xuICAgIH1cbiAgfVxuXG4gIGdhbWVSZWxpdmUoKSB7XG4gICAgdGhpcy5icmlja3NfaW5fZ2FtZS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgdmFsdWUucmVzZXQoKTtcbiAgICAgIHRoaXMuYnJpY2tzX3Bvb2xbdmFsdWUuYnJpY2tfdHlwZV0ucHVzaCh2YWx1ZS5ub2RlKTtcbiAgICB9KTtcbiAgICB0aGlzLmJyaWNrc19pbl9nYW1lID0gW107XG4gICAgdGhpcy5vdmVyT2JqLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIEF1ZGlvUGxheWVyLmlucygpLnBsYXlfbXVzaWMoJ2JnJyk7XG4gIH1cblxuICBwcml2YXRlIGdhbWVPdmVyKCkge1xuICAgIHRoaXMuX2lzR2FtZU92ZXIgPSB0cnVlO1xuICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMub3Zlck9iai5hY3RpdmUgPSB0cnVlO1xuICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuYWRkKEV2ZW50X05hbWUuR0FNRV9SRUxJVkUsIHRoaXMuZ2FtZVJlbGl2ZSwgdGhpcyk7XG4gICAgQXVkaW9QbGF5ZXIuaW5zKCkuc3RvcF9tdXNpYygpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/GameConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d7ekGOCtHeZcPBzFEwSxV', 'GameConst');
// src/game/GameConst.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonClass_1 = require("../common/base/SingletonClass");
var theme_configGameConst = /** @class */ (function (_super) {
    __extends(theme_configGameConst, _super);
    function theme_configGameConst() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ball_init_x = 0;
        _this.ball_init_y = -540;
        _this.ball_speed = 1000;
        _this.ball_radius = 15;
        _this.brick_radius = 43;
        _this.brick_init_x = 0;
        _this.brick_init_y = 600;
        _this.max_ball_init_count = 60;
        _this.max_ball_fire_speed = 10;
        _this.theme_price = 500;
        _this.sign_interval_sec = 3600;
        _this.theme_config = [
            {
                color: [
                    cc.color(242, 242, 242),
                    cc.color(24, 225, 156),
                    cc.color(20, 186, 242),
                    cc.color(188, 85, 250),
                    cc.color(238, 196, 39),
                    cc.color(244, 110, 57),
                    cc.color(199, 53, 67),
                ],
                theme: 'theme0'
            }
        ];
        _this.brick_type_percent = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            3,
            4,
            5,
            6,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            8,
            8,
            9,
            10 //星2 六
        ];
        return _this;
    }
    theme_configGameConst.ins = function () {
        return _super.ins.call(this);
    };
    return theme_configGameConst;
}(SingletonClass_1.default));
exports.default = theme_configGameConst;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9HYW1lQ29uc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRTNEO0lBQW1ELHlDQUFjO0lBQWpFO1FBQUEscUVBdUlDO1FBbElVLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFFbkIseUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHlCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUV6QixpQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUNsQix1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBMkM7WUFDOUQ7Z0JBQ0UsS0FBSyxFQUFFO29CQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7b0JBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7aUJBQ3RCO2dCQUNELEtBQUssRUFBRSxRQUFRO2FBQ2hCO1NBQ0YsQ0FBQztRQUVPLHdCQUFrQixHQUFHO1lBQzVCLENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxFQUFFLENBQUMsTUFBTTtTQUNWLENBQUM7O0lBQ0osQ0FBQztJQXRJUSx5QkFBRyxHQUFWO1FBQ0UsT0FBTyxPQUFNLEdBQUcsV0FBZSxDQUFDO0lBQ2xDLENBQUM7SUFvSUgsNEJBQUM7QUFBRCxDQXZJQSxBQXVJQyxDQXZJa0Qsd0JBQWMsR0F1SWhFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbkNsYXNzIGZyb20gJy4uL2NvbW1vbi9iYXNlL1NpbmdsZXRvbkNsYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGhlbWVfY29uZmlnR2FtZUNvbnN0IGV4dGVuZHMgU2luZ2xldG9uQ2xhc3Mge1xuICBzdGF0aWMgaW5zKCkge1xuICAgIHJldHVybiBzdXBlci5pbnMoKSBhcyBHYW1lQ29uc3Q7XG4gIH1cblxuICByZWFkb25seSBiYWxsX2luaXRfeCA9IDA7XG4gIHJlYWRvbmx5IGJhbGxfaW5pdF95ID0gLTU0MDtcbiAgcmVhZG9ubHkgYmFsbF9zcGVlZCA9IDEwMDA7XG4gIHJlYWRvbmx5IGJhbGxfcmFkaXVzID0gMTU7XG5cbiAgcmVhZG9ubHkgYnJpY2tfcmFkaXVzID0gNDM7XG4gIHJlYWRvbmx5IGJyaWNrX2luaXRfeCA9IDA7XG4gIHJlYWRvbmx5IGJyaWNrX2luaXRfeSA9IDYwMDtcblxuICByZWFkb25seSBtYXhfYmFsbF9pbml0X2NvdW50ID0gNjA7XG4gIHJlYWRvbmx5IG1heF9iYWxsX2ZpcmVfc3BlZWQgPSAxMDtcblxuICByZWFkb25seSB0aGVtZV9wcmljZSA9IDUwMDtcbiAgcmVhZG9ubHkgc2lnbl9pbnRlcnZhbF9zZWMgPSAzNjAwO1xuXG4gIHJlYWRvbmx5IHRoZW1lX2NvbmZpZzogeyBjb2xvcjogY2MuQ29sb3JbXTsgdGhlbWU6IHN0cmluZyB9W10gPSBbXG4gICAge1xuICAgICAgY29sb3I6IFtcbiAgICAgICAgY2MuY29sb3IoMjQyLCAyNDIsIDI0MiksXG4gICAgICAgIGNjLmNvbG9yKDI0LCAyMjUsIDE1NiksXG4gICAgICAgIGNjLmNvbG9yKDIwLCAxODYsIDI0MiksXG4gICAgICAgIGNjLmNvbG9yKDE4OCwgODUsIDI1MCksXG4gICAgICAgIGNjLmNvbG9yKDIzOCwgMTk2LCAzOSksXG4gICAgICAgIGNjLmNvbG9yKDI0NCwgMTEwLCA1NyksXG4gICAgICAgIGNjLmNvbG9yKDE5OSwgNTMsIDY3KSxcbiAgICAgIF0sXG4gICAgICB0aGVtZTogJ3RoZW1lMCdcbiAgICB9XG4gIF07XG5cbiAgcmVhZG9ubHkgYnJpY2tfdHlwZV9wZXJjZW50ID0gW1xuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLCAvL+ato+aWueW9olxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMSxcbiAgICAxLFxuICAgIDEsXG4gICAgMSxcbiAgICAxLFxuICAgIDEsIC8v5ZyGXG4gICAgMixcbiAgICAyLFxuICAgIDIsXG4gICAgMixcbiAgICAyLCAvL+WFrei+ueW9olxuICAgIDMsIC8v5LiJ6KeSMVxuICAgIDQsIC8v5LiJ6KeSMlxuICAgIDUsIC8v5LiJ6KeSM1xuICAgIDYsIC8v5LiJ6KeSNFxuICAgIDcsXG4gICAgNyxcbiAgICA3LFxuICAgIDcsXG4gICAgNyxcbiAgICA3LFxuICAgIDcsXG4gICAgNyxcbiAgICA3LCAvL+eQg1xuICAgIDgsXG4gICAgOCwgLy/mmJ8xIOato1xuICAgIDksIC8v5pifMSDlnIZcbiAgICAxMCAvL+aYnzIg5YWtXG4gIF07XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/common/Common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd14442XQN1NY5NBCRMHZBBm', 'Common');
// src/game/common/Common.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accDiv = exports.accMul = exports.toFixed = exports.formatPrice = void 0;
var formatPrice = function (num, scale, replenish, splitCode) {
    if (scale === void 0) { scale = 4; }
    if (replenish === void 0) { replenish = false; }
    if (splitCode === void 0) { splitCode = ','; }
    var str = exports.toFixed(num, scale, replenish).toString();
    var res = str || '0';
    var dot = '';
    var find = str.indexOf('.');
    if (find !== -1) {
        res = str.substring(0, find);
        dot = str.substring(str.length, find);
    }
    var intSum = res.replace(/\B(?=(?:\d{3})+$)/g, splitCode);
    var ret = intSum + dot;
    return ret;
};
exports.formatPrice = formatPrice;
var toFixed = function (number, scale, replenish, roundOff) {
    if (scale === void 0) { scale = 4; }
    if (replenish === void 0) { replenish = false; }
    if (roundOff === void 0) { roundOff = true; }
    var res = '';
    if (number) {
        var str = "" + number;
        if (str.indexOf('e') > -1 || str.indexOf('E') > -1) {
            var str_1 = number.toFixed(scale + 1);
            res = str_1.substring(0, str_1.length - 1);
        }
        else if (str.indexOf('.') > -1) {
            if (scale === 0) {
                res = str.substring(0, str.indexOf('.'));
            }
            else {
                if (roundOff) {
                    var resArr = res.toString().split('.');
                    if (resArr[1]) {
                        res = str.substring(0, str.indexOf('.') + scale + 1 + 1);
                        res = accDiv(Math.round(exports.accMul(Number(res), Math.pow(10, scale))), Math.pow(10, scale)).toString();
                    }
                    else {
                        res = str.substring(0, str.indexOf('.') + scale + 1);
                    }
                }
                else {
                    res = str.substring(0, str.indexOf('.') + scale + 1);
                }
            }
        }
        else {
            res = str;
        }
    }
    if (replenish) {
        res = res || '0';
        var resArr = res.toString().split('.');
        if (resArr[1]) {
            var diff = scale - resArr[1].length;
            if (diff > 0) {
                var a = [];
                a.length = diff;
                a.fill(0);
                var pushStr = a.join('');
                res = res + pushStr;
            }
        }
        else {
            if (Number(scale)) {
                var a = [];
                a.length = scale;
                a.fill(0);
                var pushStr = a.join('');
                res = res + "." + pushStr;
            }
        }
    }
    return res;
};
exports.toFixed = toFixed;
var accMul = function (arg1, arg2) {
    if (arg1 === void 0) { arg1 = 0; }
    if (arg2 === void 0) { arg2 = 0; }
    var m = 0;
    var s1 = arg1.toString();
    var s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    }
    catch (e) { }
    try {
        m += s2.split('.')[1].length;
    }
    catch (e) { }
    return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
};
exports.accMul = accMul;
function accDiv(arg1, arg2) {
    var t1 = 0;
    var t2 = 0;
    var r1;
    var r2;
    try {
        t1 = arg1.toString().split('.')[1].length;
    }
    catch (e) { }
    try {
        t2 = arg2.toString().split('.')[1].length;
    }
    catch (e) { }
    r1 = Number(arg1.toString().replace('.', ''));
    r2 = Number(arg2.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1);
}
exports.accDiv = accDiv;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb21tb24vQ29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU0sV0FBVyxHQUFHLFVBQUMsR0FBRyxFQUFFLEtBQVMsRUFBRSxTQUFpQixFQUFFLFNBQWU7SUFBN0Msc0JBQUEsRUFBQSxTQUFTO0lBQUUsMEJBQUEsRUFBQSxpQkFBaUI7SUFBRSwwQkFBQSxFQUFBLGVBQWU7SUFDNUUsSUFBSSxHQUFHLEdBQUcsZUFBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEQsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNyQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2YsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDdkM7SUFDRCxJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVELElBQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDekIsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFaVyxRQUFBLFdBQVcsZUFZdEI7QUFFSyxJQUFNLE9BQU8sR0FBRyxVQUFDLE1BQU0sRUFBRSxLQUFTLEVBQUUsU0FBaUIsRUFBRSxRQUFlO0lBQTdDLHNCQUFBLEVBQUEsU0FBUztJQUFFLDBCQUFBLEVBQUEsaUJBQWlCO0lBQUUseUJBQUEsRUFBQSxlQUFl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QUN2RixDQUFDLENBQUM7QUFaWSxRQUFBLE1BQU0sVUFZbEI7QUFFRCxTQUFnQixNQUFNLENBQUMsSUFBSSxFQUFFLElBQUk7SUFDaEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUVQLElBQUk7UUFDRixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDM0M7SUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO0lBQ2QsSUFBSTtRQUNGLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztLQUMzQztJQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7SUFDZCxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFmQSx3QkFlQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtYXRQcmljZSA9IChudW0sIHNjYWxlID0gNCwgcmVwbGVuaXNoID0gZmFsc2UsIHNwbGl0Q29kZSA9ICcsJykgPT4ge1xuICBsZXQgc3RyID0gdG9GaXhlZChudW0sIHNjYWxlLCByZXBsZW5pc2gpLnRvU3RyaW5nKCk7XG4gIGxldCByZXMgPSBzdHIgfHwgJzAnO1xuICBsZXQgZG90ID0gJyc7XG4gIGNvbnN0IGZpbmQgPSBzdHIuaW5kZXhPZignLicpO1xuICBpZiAoZmluZCAhPT0gLTEpIHtcbiAgICByZXMgPSBzdHIuc3Vic3RyaW5nKDAsIGZpbmQpO1xuICAgIGRvdCA9IHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCwgZmluZCk7XG4gIH1cbiAgY29uc3QgaW50U3VtID0gcmVzLnJlcGxhY2UoL1xcQig/PSg/OlxcZHszfSkrJCkvZywgc3BsaXRDb2RlKTtcbiAgY29uc3QgcmV0ID0gaW50U3VtICsgZG90O1xuICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IHRvRml4ZWQgPSAobnVtYmVyLCBzY2FsZSA9IDQsIHJlcGxlbmlzaCA9IGZhbHNlLCByb3VuZE9mZiA9IHRydWUpID0+IHtcbiAgbGV0IHJlcyA9ICcnO1xuICBpZiAobnVtYmVyKSB7XG4gICAgbGV0IHN0ciA9IGAke251bWJlcn1gO1xuICAgIGlmIChzdHIuaW5kZXhPZignZScpID4gLTEgfHwgc3RyLmluZGV4T2YoJ0UnKSA+IC0xKSB7XG4gICAgICBsZXQgc3RyID0gbnVtYmVyLnRvRml4ZWQoc2NhbGUgKyAxKTtcbiAgICAgIHJlcyA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICAgIH0gZWxzZSBpZiAoc3RyLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICBpZiAoc2NhbGUgPT09IDApIHtcbiAgICAgICAgcmVzID0gc3RyLnN1YnN0cmluZygwLCBzdHIuaW5kZXhPZignLicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyb3VuZE9mZikge1xuICAgICAgICAgIGxldCByZXNBcnIgPSByZXMudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICAgIGlmIChyZXNBcnJbMV0pIHtcbiAgICAgICAgICAgIHJlcyA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmluZGV4T2YoJy4nKSArIHNjYWxlICsgMSArIDEpO1xuICAgICAgICAgICAgcmVzID0gYWNjRGl2KE1hdGgucm91bmQoYWNjTXVsKE51bWJlcihyZXMpLCBNYXRoLnBvdygxMCwgc2NhbGUpKSksIE1hdGgucG93KDEwLCBzY2FsZSkpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmluZGV4T2YoJy4nKSArIHNjYWxlICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmluZGV4T2YoJy4nKSArIHNjYWxlICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0gc3RyO1xuICAgIH1cbiAgfVxuICBpZiAocmVwbGVuaXNoKSB7XG4gICAgcmVzID0gcmVzIHx8ICcwJztcbiAgICBsZXQgcmVzQXJyID0gcmVzLnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcbiAgICBpZiAocmVzQXJyWzFdKSB7XG4gICAgICBsZXQgZGlmZiA9IHNjYWxlIC0gcmVzQXJyWzFdLmxlbmd0aDtcbiAgICAgIGlmIChkaWZmID4gMCkge1xuICAgICAgICBsZXQgYSA9IFtdO1xuICAgICAgICBhLmxlbmd0aCA9IGRpZmY7XG4gICAgICAgIGEuZmlsbCgwKTtcbiAgICAgICAgbGV0IHB1c2hTdHIgPSBhLmpvaW4oJycpO1xuICAgICAgICByZXMgPSByZXMgKyBwdXNoU3RyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoTnVtYmVyKHNjYWxlKSkge1xuICAgICAgICBsZXQgYSA9IFtdO1xuICAgICAgICBhLmxlbmd0aCA9IHNjYWxlO1xuICAgICAgICBhLmZpbGwoMCk7XG4gICAgICAgIGxldCBwdXNoU3RyID0gYS5qb2luKCcnKTtcbiAgICAgICAgcmVzID0gYCR7cmVzfS4ke3B1c2hTdHJ9YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuIGV4cG9ydCBjb25zdCBhY2NNdWwgPSAoYXJnMSA9IDAsIGFyZzIgPSAwKSA9PiB7XG4gIGxldCBtID0gMDtcbiAgY29uc3QgczEgPSBhcmcxLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHMyID0gYXJnMi50b1N0cmluZygpO1xuXG4gIHRyeSB7XG4gICAgbSArPSBzMS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgfSBjYXRjaCAoZSkge31cbiAgdHJ5IHtcbiAgICBtICs9IHMyLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gKE51bWJlcihzMS5yZXBsYWNlKCcuJywgJycpKSAqIE51bWJlcihzMi5yZXBsYWNlKCcuJywgJycpKSkgLyBNYXRoLnBvdygxMCwgbSk7XG59O1xuXG4gZXhwb3J0IGZ1bmN0aW9uIGFjY0RpdihhcmcxLCBhcmcyKSB7XG4gIGxldCB0MSA9IDA7XG4gIGxldCB0MiA9IDA7XG4gIGxldCByMTtcbiAgbGV0IHIyO1xuXG4gIHRyeSB7XG4gICAgdDEgPSBhcmcxLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHRyeSB7XG4gICAgdDIgPSBhcmcyLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHIxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpKTtcbiAgcjIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICByZXR1cm4gKHIxIC8gcjIpICogTWF0aC5wb3coMTAsIHQyIC0gdDEpO1xufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/item/BallItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '908e7hGo41Op5knNUQ8AuMr', 'BallItem');
// src/game/item/BallItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnumBallStatus = void 0;
var GameConst_1 = require("../GameConst");
var GameModel_1 = require("../model/GameModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallItem = /** @class */ (function (_super) {
    __extends(BallItem, _super);
    function BallItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 0 default
        // 1 big
        _this.ball_type = 0;
        _this.ball_icon = null;
        _this._ball_status = 0;
        _this._power_scale = 1;
        return _this;
    }
    Object.defineProperty(BallItem.prototype, "ball_status", {
        get: function () {
            return this._ball_status;
        },
        set: function (status) {
            var _this = this;
            this._ball_status = status;
            switch (status) {
                case EnumBallStatus.onLand: {
                    this.scheduleOnce(function () {
                        if (_this.node && _this.node.active) {
                            _this.node.setPosition(GameConst_1.default.ins().ball_init_x, GameConst_1.default.ins().ball_init_y);
                            _this.ball_status = EnumBallStatus.onReady;
                        }
                    }, 0);
                    break;
                }
                case EnumBallStatus.onReady: {
                    break;
                }
                case EnumBallStatus.onRemoved: {
                    break;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BallItem.prototype, "power_scale", {
        get: function () {
            return this._power_scale;
        },
        set: function (value) {
            this._power_scale = value;
            this.ball_icon.node.setScale(value > 1 ? 1.5 : 1);
        },
        enumerable: false,
        configurable: true
    });
    BallItem.prototype.reset = function () {
        this.node.stopAllActions();
        this._ball_status = EnumBallStatus.onRemoved;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
        this.power_scale = 1;
        this.node.active = false;
    };
    BallItem.prototype.init = function (x, y, status) {
        this.power_scale = 1;
        this.node.x = x;
        this.node.y = y;
        this.ball_status = status;
        this.setImage(this.ball_icon, 'images/e1');
    };
    BallItem.prototype.setImage = function (target, url) {
        cc.resources.load(url, cc.SpriteFrame, function (err, spriteFrame) {
            target.spriteFrame = spriteFrame;
        });
    };
    BallItem.prototype.fireBall = function (fire_rotation) {
        var radians = (fire_rotation * Math.PI) / 180;
        var ball_speed = GameConst_1.default.ins().ball_speed + 100 * GameModel_1.default.ins().ball_fire_speed;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(Math.sin(radians) * ball_speed, Math.cos(radians) * ball_speed);
        this.ball_status = EnumBallStatus.onFire;
    };
    BallItem.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        switch (otherCollider.tag) {
            case 1: {
                if (this.node.active) {
                    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
                    this.ball_status = EnumBallStatus.onLand;
                }
                break;
            }
        }
    };
    __decorate([
        property(cc.Integer)
    ], BallItem.prototype, "ball_type", void 0);
    __decorate([
        property(cc.Sprite)
    ], BallItem.prototype, "ball_icon", void 0);
    BallItem = __decorate([
        ccclass
    ], BallItem);
    return BallItem;
}(cc.Component));
exports.default = BallItem;
var EnumBallStatus;
(function (EnumBallStatus) {
    EnumBallStatus[EnumBallStatus["onReady"] = 0] = "onReady";
    EnumBallStatus[EnumBallStatus["onLand"] = 1] = "onLand";
    EnumBallStatus[EnumBallStatus["onFire"] = 2] = "onFire";
    EnumBallStatus[EnumBallStatus["onRemoved"] = 3] = "onRemoved";
})(EnumBallStatus = exports.EnumBallStatus || (exports.EnumBallStatus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9pdGVtL0JhbGxJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFDckMsZ0RBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0ZDO1FBbkZDLFlBQVk7UUFDWixRQUFRO1FBRVIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRXBCLGtCQUFZLEdBQW1CLENBQUMsQ0FBQztRQXlCakMsa0JBQVksR0FBVyxDQUFDLENBQUM7O0lBa0RuQyxDQUFDO0lBMUVDLHNCQUFXLGlDQUFXO2FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUF1QixNQUFNO1lBQTdCLGlCQW1CQztZQWxCQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztZQUMzQixRQUFRLE1BQU0sRUFBRTtnQkFDZCxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQzt3QkFDaEIsSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNqQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUNoRixLQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7eUJBQzNDO29CQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDTixNQUFNO2lCQUNQO2dCQUNELEtBQUssY0FBYyxD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QyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7aUJBQzFDO2dCQUNELE1BQU07YUFDUDtTQUNGO0lBQ0gsQ0FBQztJQS9FRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNDO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1E7SUFQVCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0Y1QjtJQUFELGVBQUM7Q0FwRkQsQUFvRkMsQ0FwRnFDLEVBQUUsQ0FBQyxTQUFTLEdBb0ZqRDtrQkFwRm9CLFFBQVE7QUFzRjdCLElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN4Qix5REFBVyxDQUFBO0lBQ1gsdURBQVUsQ0FBQTtJQUNWLHVEQUFVLENBQUE7SUFDViw2REFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBS3pCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDb25zdCBmcm9tICcuLi9HYW1lQ29uc3QnO1xuaW1wb3J0IEdhbWVNb2RlbCBmcm9tICcuLi9tb2RlbC9HYW1lTW9kZWwnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgLy8gMCBkZWZhdWx0XG4gIC8vIDEgYmlnXG4gIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICBiYWxsX3R5cGU6IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgYmFsbF9pY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gIHByaXZhdGUgX2JhbGxfc3RhdHVzOiBFbnVtQmFsbFN0YXR1cyA9IDA7XG4gIHB1YmxpYyBnZXQgYmFsbF9zdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhbGxfc3RhdHVzO1xuICB9XG4gIHB1YmxpYyBzZXQgYmFsbF9zdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5fYmFsbF9zdGF0dXMgPSBzdGF0dXM7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgRW51bUJhbGxTdGF0dXMub25MYW5kOiB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihHYW1lQ29uc3QuaW5zKCkuYmFsbF9pbml0X3gsIEdhbWVDb25zdC5pbnMoKS5iYWxsX2luaXRfeSk7XG4gICAgICAgICAgICB0aGlzLmJhbGxfc3RhdHVzID0gRW51bUJhbGxTdGF0dXMub25SZWFkeTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgRW51bUJhbGxTdGF0dXMub25SZWFkeToge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgRW51bUJhbGxTdGF0dXMub25SZW1vdmVkOiB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Bvd2VyX3NjYWxlOiBudW1iZXIgPSAxO1xuICBwdWJsaWMgZ2V0IHBvd2VyX3NjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3dlcl9zY2FsZTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvd2VyX3NjYWxlKHZhbHVlKSB7XG4gICAgdGhpcy5fcG93ZXJfc2NhbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmJhbGxfaWNvbi5ub2RlLnNldFNjYWxlKHZhbHVlID4gMSA/IDEuNSA6IDEpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5fYmFsbF9zdGF0dXMgPSBFbnVtQmFsbFN0YXR1cy5vblJlbW92ZWQ7XG4gICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xuICAgIHRoaXMucG93ZXJfc2NhbGUgPSAxO1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGluaXQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHN0YXR1czogRW51bUJhbGxTdGF0dXMpIHtcbiAgICB0aGlzLnBvd2VyX3NjYWxlID0gMTtcbiAgICB0aGlzLm5vZGUueCA9IHg7XG4gICAgdGhpcy5ub2RlLnkgPSB5O1xuICAgIHRoaXMuYmFsbF9zdGF0dXMgPSBzdGF0dXM7XG5cbiAgICB0aGlzLnNldEltYWdlKHRoaXMuYmFsbF9pY29uLCAnaW1hZ2VzL2UxJyk7XG4gIH1cblxuICBzZXRJbWFnZSh0YXJnZXQsIHVybDogc3RyaW5nKSB7XG4gICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICB0YXJnZXQuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpcmVCYWxsKGZpcmVfcm90YXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IHJhZGlhbnMgPSAoZmlyZV9yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwO1xuICAgIGNvbnN0IGJhbGxfc3BlZWQgPSBHYW1lQ29uc3QuaW5zKCkuYmFsbF9zcGVlZCArIDEwMCAqIEdhbWVNb2RlbC5pbnMoKS5iYWxsX2ZpcmVfc3BlZWQ7XG4gICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKE1hdGguc2luKHJhZGlhbnMpICogYmFsbF9zcGVlZCwgTWF0aC5jb3MocmFkaWFucykgKiBiYWxsX3NwZWVkKTtcbiAgICB0aGlzLmJhbGxfc3RhdHVzID0gRW51bUJhbGxTdGF0dXMub25GaXJlO1xuICB9XG5cbiAgb25CZWdpbkNvbnRhY3QoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGZDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyLCBvdGhlckNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIpIHtcbiAgICBzd2l0Y2ggKG90aGVyQ29sbGlkZXIudGFnKSB7XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XG4gICAgICAgICAgdGhpcy5iYWxsX3N0YXR1cyA9IEVudW1CYWxsU3RhdHVzLm9uTGFuZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gRW51bUJhbGxTdGF0dXMge1xuICBvblJlYWR5ID0gMCxcbiAgb25MYW5kID0gMSxcbiAgb25GaXJlID0gMixcbiAgb25SZW1vdmVkID0gM1xufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/StoreView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'b64feD5RaFByazI2cLilej5', 'StoreView');
// src/game/StoreView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = window.nearApi, WalletAccount = _a.WalletAccount, keyStores = _a.keyStores, connect = _a.connect, Contract = _a.Contract;
var State_1 = require("./model/State");
var _b = cc._decorator, ccclass = _b.ccclass, property = _b.property;
var StoreView = /** @class */ (function (_super) {
    __extends(StoreView, _super);
    function StoreView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goBack = null;
        _this.listBox = null;
        _this.scrollView = null;
        _this.nav1 = null;
        _this.nav2 = null;
        _this.emptyBox = null;
        _this.listBoxArr = [];
        _this.typeObj = {};
        _this.typeDealObj = {};
        _this.resultMap = [];
        _this.resultDealMap = [];
        _this.activeIndex = 1;
        return _this;
    }
    StoreView.prototype.onLoad = function () {
        this.goBack.on('touchstart', this.onGoBack, this);
        this.initScrollView();
    };
    StoreView.prototype.initScrollView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a, from_index, limit, result, awaitResult;
            var _this = this;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = State_1.default.ins().storeNear;
                        return [4 /*yield*/, connect(Object.assign(State_1.default.ins().storeNearConfig, { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }))];
                    case 1:
                        _a.near = _b.sent();
                        State_1.default.ins().storeNear.walletAccount = new WalletAccount(State_1.default.ins().storeNear.near);
                        State_1.default.ins().storeNear.contract = new Contract(State_1.default.ins().storeNear.walletAccount.account(), State_1.default.ins().storeNearConfig.contractName, {
                            viewMethods: ['get_sales', 'get_sales_by_owner_id'],
                            changeMethods: ['offer'],
                            sender: State_1.default.ins().storeNear.walletAccount.account()
                        });
                        State_1.default.ins().storeNear.ownerKey = State_1.default.ins().storeNear.walletAccount.getAccountId();
                        from_index = 0;
                        limit = 80;
                        result = [];
                        awaitResult = function () { return __awaiter(_this, void 0, void 0, function () {
                            var res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, State_1.default.ins().storeNear.contract.get_sales({
                                            from_index: from_index.toString(),
                                            limit: limit.toString()
                                        })];
                                    case 1:
                                        res = _a.sent();
                                        result = result.concat(res);
                                        if (from_index !== 0 && res.length === 0) {
                                            // stop interval
                                            return [2 /*return*/, result];
                                        }
                                        else {
                                            from_index += limit;
                                            return [2 /*return*/, awaitResult()];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, awaitResult()];
                    case 2:
                        _b.sent();
                        this.typeObj = {};
                        this.typeDealObj = {};
                        this.resultMap = [];
                        this.resultDealMap = [];
                        result.forEach(function (item, index) {
                            var type = item.token_id.split(':')[0];
                            if (item.owner_id === 'nftball.testnet') {
                                if (!_this.resultMap[type]) {
                                    _this.resultMap[type] = [];
                                }
                                _this.resultMap[type].push(item);
                                if (_this.typeObj[type]) {
                                    _this.typeObj[type] += 1;
                                }
                                else {
                                    _this.typeObj[type] = 1;
                                }
                            }
                            else {
                                if (!_this.resultDealMap[type]) {
                                    _this.resultDealMap[type] = [];
                                }
                                _this.resultDealMap[type].push(item);
                                if (_this.typeDealObj[type]) {
                                    _this.typeDealObj[type] += 1;
                                }
                                else {
                                    _this.typeDealObj[type] = 1;
                                }
                            }
                        });
                        return [4 /*yield*/, this.renderDefault()];
                    case 3:
                        _b.sent();
                        return [4 /*yield*/, this.judgeEmpty()];
                    case 4:
                        _b.sent();
                        this.nav1.on('touchstart', function () { return _this.onNav(1); }, this);
                        this.nav2.on('touchstart', function () { return _this.onNav(2); }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    StoreView.prototype.renderDefault = function () {
        var _this = this;
        this.scrollView.content.removeAllChildren();
        var typeArr = Object.keys(this.typeObj);
        State_1.default.ins().imageList.forEach(function (item, index) {
            if (!typeArr.includes(item.type.toString()))
                return;
            item.maxCount = _this.typeObj[item.type];
            item.price = (_this.resultMap[item.type][0].conditions.near / 1000000000000000000000000).toString();
            var listBox = cc.instantiate(_this.listBox);
            _this.scrollView.content.addChild(listBox);
            listBox.getComponent('StoreItem').initBox(item);
            _this.listBoxArr.push(listBox);
            listBox.on('touchstart', function () {
                State_1.default.ins().storePayObj = _this.resultMap[item.type][0];
                State_1.default.ins().storePayIndex = index;
                _this.switchListBox(listBox);
            });
        });
    };
    StoreView.prototype.renderDeal = function () {
        var _this = this;
        this.scrollView.content.removeAllChildren();
        var typeDealArr = Object.keys(this.typeDealObj);
        State_1.default.ins()
            .imageList.concat()
            .forEach(function (item, index) {
            if (!typeDealArr.includes(item.type.toString()))
                return;
            item.price = (_this.resultDealMap[item.type][0].conditions.near / 1000000000000000000000000).toString();
            var listBox = cc.instantiate(_this.listBox);
            _this.scrollView.content.addChild(listBox);
            listBox.getComponent('StoreItem').initBox(item);
            _this.listBoxArr.push(listBox);
            listBox.on('touchstart', function () {
                State_1.default.ins().storePayObj = _this.resultDealMap[item.type][0];
                State_1.default.ins().storePayIndex = index;
                _this.switchListBox(listBox);
            });
        });
    };
    StoreView.prototype.switchListBox = function (box) {
        this.listBoxArr.forEach(function (item, idx) {
            item.getComponent('StoreItem').onListBoxOver();
            if (item === box) {
                item.getComponent('StoreItem').onListBox();
            }
        });
    };
    StoreView.prototype.onGoBack = function () {
        cc.director.loadScene('main');
    };
    StoreView.prototype.onNav = function (activeIndex) {
        this.activeIndex = activeIndex;
        var label = this["nav" + activeIndex].getChildByName('navLabel');
        label.opacity = 255 * 0.8;
        var navBg = this["nav" + activeIndex].getChildByName('navActive');
        navBg.active = true;
        var nextActive = 3 - activeIndex;
        var nextLabel = this["nav" + nextActive].getChildByName('navLabel');
        nextLabel.opacity = 255 * 0.6;
        var nextNavBg = this["nav" + nextActive].getChildByName('navActive');
        nextNavBg.active = false;
        this.judgeEmpty();
    };
    StoreView.prototype.judgeEmpty = function () {
        if (this.activeIndex === 1) {
            this.renderDefault();
            this.emptyBox.getChildByName('title').getComponent(cc.Label).string = '当前暂无商城道具';
        }
        else {
            this.renderDeal();
            this.emptyBox.getChildByName('title').getComponent(cc.Label).string = '当前暂无C2C道具';
        }
        this.emptyBox.active = this.scrollView.content.children.length === 0;
    };
    __decorate([
        property(cc.Node)
    ], StoreView.prototype, "goBack", void 0);
    __decorate([
        property(cc.Prefab)
    ], StoreView.prototype, "listBox", void 0);
    __decorate([
        property(cc.ScrollView)
    ], StoreView.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Node)
    ], StoreView.prototype, "nav1", void 0);
    __decorate([
        property(cc.Node)
    ], StoreView.prototype, "nav2", void 0);
    __decorate([
        property(cc.Node)
    ], StoreView.prototype, "emptyBox", void 0);
    StoreView = __decorate([
        ccclass
    ], StoreView);
    return StoreView;
}(cc.Component));
exports.default = StoreView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9TdG9yZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFrRCxNQUFNLENBQUMsT0FBTyxFQUE5RCxhQUFhLG1CQUFBLEVBQUUsU0FBUyxlQUFBLEVBQUUsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFtQixDQUFDO0FBQ3ZFLHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXdLQztRQXRLQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGFBQU8sR0FBYyxJQUFJLENBQUM7UUFFMUIsZ0JBQVUsR0FBa0IsSUFBSSxDQUFDO1FBRWpDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixjQUFRLEdBQVksSUFBSSxDQUFDO1FBRXpCLGdCQUFVLEdBQUcsRUFBRSxDQUFDO1FBQ2hCLGFBQU8sR0FBRyxFQUFFLENBQUM7UUFDYixpQkFBVyxHQUFHLEVBQUUsQ0FBQztRQUNqQixlQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ2YsbUJBQWEsR0FBRyxFQUFFLENBQUM7UUFDbkIsaUJBQVcsR0FBRyxDQUFDLENBQUM7O0lBcUpsQixDQUFDO0lBbkpDLDBCQUFNLEdBQU47UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRCxJQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVhLGtDQUFjLEdBQTVCOzs7Ozs7O3dCQUNFLEtBQUEsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMs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VSxDQUFDO2lEQUNTO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNPO0lBWk4sU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQXdLN0I7SUFBRCxnQkFBQztDQXhLRCxBQXdLQyxDQXhLc0MsRUFBRSxDQUFDLFNBQVMsR0F3S2xEO2tCQXhLb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHsgV2FsbGV0QWNjb3VudCwga2V5U3RvcmVzLCBjb25uZWN0LCBDb250cmFjdCB9ID0gd2luZG93Lm5lYXJBcGk7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9tb2RlbC9TdGF0ZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmVWaWV3IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGdvQmFjazogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGxpc3RCb3g6IGNjLlByZWZhYiA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICBzY3JvbGxWaWV3OiBjYy5TY3JvbGxWaWV3ID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG5hdjE6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbmF2MjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBlbXB0eUJveDogY2MuTm9kZSA9IG51bGw7XG5cbiAgbGlzdEJveEFyciA9IFtdO1xuICB0eXBlT2JqID0ge307XG4gIHR5cGVEZWFsT2JqID0ge307XG4gIHJlc3VsdE1hcCA9IFtdO1xuICByZXN1bHREZWFsTWFwID0gW107XG4gIGFjdGl2ZUluZGV4ID0gMTtcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5nb0JhY2sub24oJ3RvdWNoc3RhcnQnLCB0aGlzLm9uR29CYWNrLCB0aGlzKTtcbiAgICB0aGlzLmluaXRTY3JvbGxWaWV3KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGluaXRTY3JvbGxWaWV3KCkge1xuICAgIFN0YXRlLmlucygpLnN0b3JlTmVhci5uZWFyID0gYXdhaXQgY29ubmVjdChPYmplY3QuYXNzaWduKFN0YXRlLmlucygpLnN0b3JlTmVhckNvbmZpZywgeyBkZXBzOiB7IGtleVN0b3JlOiBuZXcga2V5U3RvcmVzLkJyb3dzZXJMb2NhbFN0b3JhZ2VLZXlTdG9yZSgpIH0gfSkpO1xuICAgIFN0YXRlLmlucygpLnN0b3JlTmVhci53YWxsZXRBY2NvdW50ID0gbmV3IFdhbGxldEFjY291bnQoU3RhdGUuaW5zKCkuc3RvcmVOZWFyLm5lYXIpO1xuICAgIFN0YXRlLmlucygpLnN0b3JlTmVhci5jb250cmFjdCA9IG5ldyBDb250cmFjdChTdGF0ZS5pbnMoKS5zdG9yZU5lYXIud2FsbGV0QWNjb3VudC5hY2NvdW50KCksIFN0YXRlLmlucygpLnN0b3JlTmVhckNvbmZpZy5jb250cmFjdE5hbWUsIHtcbiAgICAgIHZpZXdNZXRob2RzOiBbJ2dldF9zYWxlcycsICdnZXRfc2FsZXNfYnlfb3duZXJfaWQnXSxcbiAgICAgIGNoYW5nZU1ldGhvZHM6IFsnb2ZmZXInXSxcbiAgICAgIHNlbmRlcjogU3RhdGUuaW5zKCkuc3RvcmVOZWFyLndhbGxldEFjY291bnQuYWNjb3VudCgpXG4gICAgfSk7XG4gICAgU3RhdGUuaW5zKCkuc3RvcmVOZWFyLm93bmVyS2V5ID0gU3RhdGUuaW5zKCkuc3RvcmVOZWFyLndhbGxldEFjY291bnQuZ2V0QWNjb3VudElkKCk7XG4gICAgbGV0IGZyb21faW5kZXggPSAwO1xuICAgIGxldCBsaW1pdCA9IDgwO1xuICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICBsZXQgYXdhaXRSZXN1bHQgPSBhc3luYyAoKSA9PiB7XG4gICAgICBsZXQgcmVzID0gYXdhaXQgU3RhdGUuaW5zKCkuc3RvcmVOZWFyLmNvbnRyYWN0LmdldF9zYWxlcyh7XG4gICAgICAgIGZyb21faW5kZXg6IGZyb21faW5kZXgudG9TdHJpbmcoKSxcbiAgICAgICAgbGltaXQ6IGxpbWl0LnRvU3RyaW5nKClcbiAgICAgIH0pO1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LmNvbmNhdChyZXMpO1xuICAgICAgaWYgKGZyb21faW5kZXggIT09IDAgJiYgcmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAvLyBzdG9wIGludGVydmFsXG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBmcm9tX2luZGV4ICs9IGxpbWl0O1xuICAgICAgICByZXR1cm4gYXdhaXRSZXN1bHQoKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGF3YWl0IGF3YWl0UmVzdWx0KCk7XG5cbiAgICB0aGlzLnR5cGVPYmogPSB7fTtcbiAgICB0aGlzLnR5cGVEZWFsT2JqID0ge307XG4gICAgdGhpcy5yZXN1bHRNYXAgPSBbXTtcbiAgICB0aGlzLnJlc3VsdERlYWxNYXAgPSBbXTtcbiAgICByZXN1bHQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCB0eXBlID0gaXRlbS50b2tlbl9pZC5zcGxpdCgnOicpWzBdO1xuICAgICAgaWYgKGl0ZW0ub3duZXJfaWQgPT09ICduZnRiYWxsLnRlc3RuZXQnKSB7XG4gICAgICAgIGlmICghdGhpcy5yZXN1bHRNYXBbdHlwZV0pIHtcbiAgICAgICAgICB0aGlzLnJlc3VsdE1hcFt0eXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0TWFwW3R5cGVdLnB1c2goaXRlbSk7XG4gICAgICAgIGlmICh0aGlzLnR5cGVPYmpbdHlwZV0pIHtcbiAgICAgICAgICB0aGlzLnR5cGVPYmpbdHlwZV0gKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnR5cGVPYmpbdHlwZV0gPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpZiAoIXRoaXMucmVzdWx0RGVhbE1hcFt0eXBlXSkge1xuICAgICAgICAgIHRoaXMucmVzdWx0RGVhbE1hcFt0eXBlXSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVzdWx0RGVhbE1hcFt0eXBlXS5wdXNoKGl0ZW0pO1xuICAgICAgICBpZiAodGhpcy50eXBlRGVhbE9ialt0eXBlXSkge1xuICAgICAgICAgIHRoaXMudHlwZURlYWxPYmpbdHlwZV0gKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLnR5cGVEZWFsT2JqW3R5cGVdID0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgYXdhaXQgdGhpcy5yZW5kZXJEZWZhdWx0KCk7XG5cbiAgICBhd2FpdCB0aGlzLmp1ZGdlRW1wdHkoKTtcblxuICAgIHRoaXMubmF2MS5vbigndG91Y2hzdGFydCcsICgpID0+IHRoaXMub25OYXYoMSksIHRoaXMpO1xuICAgIHRoaXMubmF2Mi5vbigndG91Y2hzdGFydCcsICgpID0+IHRoaXMub25OYXYoMiksIHRoaXMpO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJEZWZhdWx0KCkge1xuICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgbGV0IHR5cGVBcnIgPSBPYmplY3Qua2V5cyh0aGlzLnR5cGVPYmopO1xuICAgIFN0YXRlLmlucygpLmltYWdlTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKCF0eXBlQXJyLmluY2x1ZGVzKGl0ZW0udHlwZS50b1N0cmluZygpKSkgcmV0dXJuO1xuICAgICAgaXRlbS5tYXhDb3VudCA9IHRoaXMudHlwZU9ialtpdGVtLnR5cGVdO1xuICAgICAgaXRlbS5wcmljZSA9ICh0aGlzLnJlc3VsdE1hcFtpdGVtLnR5cGVdWzBdLmNvbmRpdGlvbnMubmVhciAvIDEwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMDApLnRvU3RyaW5nKCk7XG4gICAgICBsZXQgbGlzdEJveCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEJveCk7XG4gICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDaGlsZChsaXN0Qm94KTtcbiAgICAgIGxpc3RCb3guZ2V0Q29tcG9uZW50KCdTdG9yZUl0ZW0nKS5pbml0Qm94KGl0ZW0pO1xuICAgICAgdGhpcy5saXN0Qm94QXJyLnB1c2gobGlzdEJveCk7XG4gICAgICBsaXN0Qm94Lm9uKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgICBTdGF0ZS5pbnMoKS5zdG9yZVBheU9iaiA9IHRoaXMucmVzdWx0TWFwW2l0ZW0udHlwZV1bMF07XG4gICAgICAgIFN0YXRlLmlucygpLnN0b3JlUGF5SW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5zd2l0Y2hMaXN0Qm94KGxpc3RCb3gpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlckRlYWwoKSB7XG4gICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICBsZXQgdHlwZURlYWxBcnIgPSBPYmplY3Qua2V5cyh0aGlzLnR5cGVEZWFsT2JqKTtcbiAgICBTdGF0ZS5pbnMoKVxuICAgICAgLmltYWdlTGlzdC5jb25jYXQoKVxuICAgICAgLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgIGlmICghdHlwZURlYWxBcnIuaW5jbHVkZXMoaXRlbS50eXBlLnRvU3RyaW5nKCkpKSByZXR1cm47XG4gICAgICAgIGl0ZW0ucHJpY2UgPSAodGhpcy5yZXN1bHREZWFsTWFwW2l0ZW0udHlwZV1bMF0uY29uZGl0aW9ucy5uZWFyIC8gMTAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMCkudG9TdHJpbmcoKTtcbiAgICAgICAgbGV0IGxpc3RCb3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RCb3gpO1xuICAgICAgICB0aGlzLnNjcm9sbFZpZXcuY29udGVudC5hZGRDaGlsZChsaXN0Qm94KTtcbiAgICAgICAgbGlzdEJveC5nZXRDb21wb25lbnQoJ1N0b3JlSXRlbScpLmluaXRCb3goaXRlbSk7XG4gICAgICAgIHRoaXMubGlzdEJveEFyci5wdXNoKGxpc3RCb3gpO1xuICAgICAgICBsaXN0Qm94Lm9uKCd0b3VjaHN0YXJ0JywgKCkgPT4ge1xuICAgICAgICAgIFN0YXRlLmlucygpLnN0b3JlUGF5T2JqID0gdGhpcy5yZXN1bHREZWFsTWFwW2l0ZW0udHlwZV1bMF07XG4gICAgICAgICAgU3RhdGUuaW5zKCkuc3RvcmVQYXlJbmRleCA9IGluZGV4O1xuICAgICAgICAgIHRoaXMuc3dpdGNoTGlzdEJveChsaXN0Qm94KTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgc3dpdGNoTGlzdEJveChib3gpIHtcbiAgICB0aGlzLmxpc3RCb3hBcnIuZm9yRWFjaCgoaXRlbSwgaWR4KSA9PiB7XG4gICAgICBpdGVtLmdldENvbXBvbmVudCgnU3RvcmVJdGVtJykub25MaXN0Qm94T3ZlcigpO1xuICAgICAgaWYgKGl0ZW0gPT09IGJveCkge1xuICAgICAgICBpdGVtLmdldENvbXBvbmVudCgnU3RvcmVJdGVtJykub25MaXN0Qm94KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uR29CYWNrKCkge1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xuICB9XG5cbiAgcHJpdmF0ZSBvbk5hdihhY3RpdmVJbmRleCkge1xuICAgIHRoaXMuYWN0aXZlSW5kZXggPSBhY3RpdmVJbmRleDtcbiAgICBsZXQgbGFiZWwgPSB0aGlzW2BuYXYke2FjdGl2ZUluZGV4fWBdLmdldENoaWxkQnlOYW1lKCduYXZMYWJlbCcpO1xuICAgIGxhYmVsLm9wYWNpdHkgPSAyNTUgKiAwLjg7XG4gICAgbGV0IG5hdkJnID0gdGhpc1tgbmF2JHthY3RpdmVJbmRleH1gXS5nZXRDaGlsZEJ5TmFtZSgnbmF2QWN0aXZlJyk7XG4gICAgbmF2QmcuYWN0aXZlID0gdHJ1ZTtcblxuICAgIGxldCBuZXh0QWN0aXZlID0gMyAtIGFjdGl2ZUluZGV4O1xuICAgIGxldCBuZXh0TGFiZWwgPSB0aGlzW2BuYXYke25leHRBY3RpdmV9YF0uZ2V0Q2hpbGRCeU5hbWUoJ25hdkxhYmVsJyk7XG4gICAgbmV4dExhYmVsLm9wYWNpdHkgPSAyNTUgKiAwLjY7XG4gICAgbGV0IG5leHROYXZCZyA9IHRoaXNbYG5hdiR7bmV4dEFjdGl2ZX1gXS5nZXRDaGlsZEJ5TmFtZSgnbmF2QWN0aXZlJyk7XG4gICAgbmV4dE5hdkJnLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuanVkZ2VFbXB0eSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBqdWRnZUVtcHR5KCkge1xuICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSAxKSB7XG4gICAgICB0aGlzLnJlbmRlckRlZmF1bHQoKTtcbiAgICAgIHRoaXMuZW1wdHlCb3guZ2V0Q2hpbGRCeU5hbWUoJ3RpdGxlJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSAn5b2T5YmN5pqC5peg5ZWG5Z+O6YGT5YW3JztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW5kZXJEZWFsKCk7XG4gICAgICB0aGlzLmVtcHR5Qm94LmdldENoaWxkQnlOYW1lKCd0aXRsZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gJ+W9k+WJjeaaguaXoEMyQ+mBk+WFtyc7XG4gICAgfVxuICAgIHRoaXMuZW1wdHlCb3guYWN0aXZlID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuY2hpbGRyZW4ubGVuZ3RoID09PSAwO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/model/State.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc8342e0DJGy6/8uxRlqj50', 'State');
// src/game/model/State.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonClass_1 = require("../../common/base/SingletonClass");
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imageList = [
            {
                type: 6,
                url: 'images/a1',
                title: '清一行',
                price: '10',
                payCount: 0,
                payList: [],
                // 冷却时间
                time: 0.3,
                maxCount: 0,
                sort: -1
            },
            {
                type: 1,
                url: 'images/a2',
                title: '冻全屏',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 2,
                url: 'images/a3',
                title: '两倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 3,
                url: 'images/a4',
                title: '三倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 4,
                url: 'images/a5',
                title: '五倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 5,
                url: 'images/a6',
                title: '清全屏',
                price: '10',
                payCount: 0,
                payList: [],
                time: 1,
                maxCount: 0,
                sort: -1
            },
            {
                type: 7,
                url: 'images/a7',
                title: '复活',
                price: '10',
                payCount: 0,
                payList: [],
                time: 0,
                maxCount: 0,
                sort: -1
            }
        ];
        _this.isLogin = false;
        _this.isPay = false;
        _this.mianNearConfig = {
            networkId: 'testnet',
            contractName: 'dev-1632965307540-55511993444317',
            // contractName: 'dev-1632724418776-68219858133201',
            nodeUrl: 'https://rpc.testnet.near.org',
            // nodeUrl: 'https://public-rpc.blockpi.io/http/near-testnet',
            walletUrl: 'https://wallet.testnet.near.org',
            helperUrl: 'https://helper.testnet.near.org'
            // explorerUrl: "https://explorer.testnet.near.org",
        };
        _this.mainNear = {
            near: {},
            walletAccount: {},
            contract: {},
            ownerKey: '',
            poolBalance: 0,
            maxScore: 0,
            balance: 0
        };
        _this.storeNearConfig = __assign(__assign({}, _this.mianNearConfig), { contractName: 'market.' + _this.mianNearConfig.contractName });
        _this.storeNear = {
            near: {},
            walletAccount: {},
            contract: {},
            ownerKey: '',
            poolBalance: 0,
            maxScore: 0,
            balance: 0
        };
        return _this;
    }
    State.ins = function () {
        return _super.ins.call(this);
    };
    State.prototype.resetImageList = function () {
        this.imageList = [
            {
                type: 6,
                url: 'images/a1',
                title: '清一行',
                price: '10',
                payCount: 0,
                payList: [],
                // 冷却时间
                time: 0.3,
                maxCount: 0,
                sort: -1
            },
            {
                type: 1,
                url: 'images/a2',
                title: '冻全屏',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 2,
                url: 'images/a3',
                title: '两倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 3,
                url: 'images/a4',
                title: '三倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 4,
                url: 'images/a5',
                title: '五倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 5,
                url: 'images/a6',
                title: '清全屏',
                price: '10',
                payCount: 0,
                payList: [],
                time: 1,
                maxCount: 0,
                sort: -1
            },
            {
                type: 7,
                url: 'images/a7',
                title: '复活',
                price: '10',
                payCount: 0,
                payList: [],
                time: 0,
                maxCount: 0,
                sort: -1
            }
        ];
    };
    State.prototype.getList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, localStorageImageList, typeProcessIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, State.ins().mainNear.contract.nft_tokens_for_owner({
                            account_id: State.ins().mainNear.ownerKey,
                            from_index: '0',
                            limit: 100000
                        })];
                    case 1:
                        result = _a.sent();
                        State.ins().resetImageList();
                        if (State.ins().isLogin && localStorage.getItem('imageList')) {
                            localStorageImageList = JSON.parse(localStorage.getItem('imageList'));
                            localStorageImageList.forEach(function (item, index) {
                                State.ins().imageList[index].sort = item.sort;
                            });
                        }
                        typeProcessIndex = function (res) {
                            var index = res;
                            switch (res) {
                                case 7:
                                    index = 6;
                                    break;
                                case 6:
                                    index = 0;
                                    break;
                            }
                            return index;
                        };
                        result.forEach(function (item, index) {
                            var arr = item.token_id.split(':');
                            var targetIndex = typeProcessIndex(Number(arr[0]));
                            State.ins().imageList[targetIndex].payCount++;
                            State.ins().imageList[targetIndex].payList.push(item);
                        });
                        localStorage.setItem('imageList', JSON.stringify(State.ins().imageList));
                        return [2 /*return*/];
                }
            });
        });
    };
    State.prototype.init = function () { };
    return State;
}(SingletonClass_1.default));
exports.default = State;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9tb2RlbC9TdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUE4RDtBQUM5RDtJQUFtQyx5QkFBYztJQUFqRDtRQUFBLHFFQWlQQztRQTdPUSxlQUFTLEdBQUc7WUFDakI7Z0JBQ0UsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLFdBQVc7Z0JBQ2hCLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU87Z0JBQ1AsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNUO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLFdBQVc7Z0JBQ2hCLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxDQUFDO2dCQUNYLElBQUksRUFBRSxDQUFDLENBQUM7YUFDVDtZQUNEO2dCQUNFLElBQUksRUFBRSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsSUFBSTtnQkFDWCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsRUFBRTtnQkFDUixRQUFRLEVBQUUsQ0FBQztnQkFDWCxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ1Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsV0FBVztnQkFD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QUFDO3lCQUNKO3dCQUNHLGdCQUFnQixHQUFHLFVBQUMsR0FBRzs0QkFDekIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDOzRCQUNoQixRQUFPLEdBQUcsRUFBRTtnQ0FDVixLQUFLLENBQUM7b0NBQ0osS0FBSyxHQUFHLENBQUMsQ0FBQztvQ0FDVixNQUFNO2dDQUNSLEtBQUssQ0FBQztvQ0FDSixLQUFLLEdBQUcsQ0FBQyxDQUFDO29DQUNWLE1BQU07NkJBQ1Q7NEJBQ0QsT0FBTyxLQUFLLENBQUM7d0JBQ2YsQ0FBQyxDQUFBO3dCQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSzs0QkFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ25DLElBQUksV0FBVyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDOzRCQUM5QyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3hELENBQUMsQ0FBQyxDQUFDO3dCQUNILFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBQzFFO0lBd0NNLG9CQUFJLEdBQVgsY0FBZSxDQUFDO0lBQ2xCLFlBQUM7QUFBRCxDQWpQQSxBQWlQQyxDQWpQa0Msd0JBQWMsR0FpUGhEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbkNsYXNzIGZyb20gJy4uLy4uL2NvbW1vbi9iYXNlL1NpbmdsZXRvbkNsYXNzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgU2luZ2xldG9uQ2xhc3Mge1xuICBzdGF0aWMgaW5zKCkge1xuICAgIHJldHVybiBzdXBlci5pbnMoKSBhcyBTdGF0ZTtcbiAgfVxuICBwdWJsaWMgaW1hZ2VMaXN0ID0gW1xuICAgIHtcbiAgICAgIHR5cGU6IDYsXG4gICAgICB1cmw6ICdpbWFnZXMvYTEnLFxuICAgICAgdGl0bGU6ICfmuIXkuIDooYwnLFxuICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICBwYXlDb3VudDogMCxcbiAgICAgIHBheUxpc3Q6IFtdLFxuICAgICAgLy8g5Ya35Y205pe26Ze0XG4gICAgICB0aW1lOiAwLjMsXG4gICAgICBtYXhDb3VudDogMCxcbiAgICAgIHNvcnQ6IC0xXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAxLFxuICAgICAgdXJsOiAnaW1hZ2VzL2EyJyxcbiAgICAgIHRpdGxlOiAn5Ya75YWo5bGPJyxcbiAgICAgIHByaWNlOiAnMTAnLFxuICAgICAgcGF5Q291bnQ6IDAsXG4gICAgICBwYXlMaXN0OiBbXSxcbiAgICAgIHRpbWU6IDEwLFxuICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICBzb3J0OiAtMVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogMixcbiAgICAgIHVybDogJ2ltYWdlcy9hMycsXG4gICAgICB0aXRsZTogJ+S4pOWAjemAnycsXG4gICAgICBwcmljZTogJzEwJyxcbiAgICAgIHBheUNvdW50OiAwLFxuICAgICAgcGF5TGlzdDogW10sXG4gICAgICB0aW1lOiAxMCxcbiAgICAgIG1heENvdW50OiAwLFxuICAgICAgc29ydDogLTFcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IDMsXG4gICAgICB1cmw6ICdpbWFnZXMvYTQnLFxuICAgICAgdGl0bGU6ICfkuInlgI3pgJ8nLFxuICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICBwYXlDb3VudDogMCxcbiAgICAgIHBheUxpc3Q6IFtdLFxuICAgICAgdGltZTogMTAsXG4gICAgICBtYXhDb3VudDogMCxcbiAgICAgIHNvcnQ6IC0xXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiA0LFxuICAgICAgdXJsOiAnaW1hZ2VzL2E1JyxcbiAgICAgIHRpdGxlOiAn5LqU5YCN6YCfJyxcbiAgICAgIHByaWNlOiAnMTAnLFxuICAgICAgcGF5Q291bnQ6IDAsXG4gICAgICBwYXlMaXN0OiBbXSxcbiAgICAgIHRpbWU6IDEwLFxuICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICBzb3J0OiAtMVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogNSxcbiAgICAgIHVybDogJ2ltYWdlcy9hNicsXG4gICAgICB0aXRsZTogJ+a4heWFqOWxjycsXG4gICAgICBwcmljZTogJzEwJyxcbiAgICAgIHBheUNvdW50OiAwLFxuICAgICAgcGF5TGlzdDogW10sXG4gICAgICB0aW1lOiAxLFxuICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICBzb3J0OiAtMVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogNyxcbiAgICAgIHVybDogJ2ltYWdlcy9hNycsXG4gICAgICB0aXRsZTogJ+Wkjea0uycsXG4gICAgICBwcmljZTogJzEwJyxcbiAgICAgIHBheUNvdW50OiAwLFxuICAgICAgcGF5TGlzdDogW10sXG4gICAgICB0aW1lOiAwLFxuICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICBzb3J0OiAtMVxuICAgIH1cbiAgXTtcblxuICBwdWJsaWMgcmVzZXRJbWFnZUxpc3QoKSB7XG4gICAgdGhpcy5pbWFnZUxpc3QgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IDYsXG4gICAgICAgIHVybDogJ2ltYWdlcy9hMScsXG4gICAgICAgIHRpdGxlOiAn5riF5LiA6KGMJyxcbiAgICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICAgIHBheUNvdW50OiAwLFxuICAgICAgICBwYXlMaXN0OiBbXSxcbiAgICAgICAgLy8g5Ya35Y205pe26Ze0XG4gICAgICAgIHRpbWU6IDAuMyxcbiAgICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICAgIHNvcnQ6IC0xXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAxLFxuICAgICAgICB1cmw6ICdpbWFnZXMvYTInLFxuICAgICAgICB0aXRsZTogJ+WGu+WFqOWxjycsXG4gICAgICAgIHByaWNlOiAnMTAnLFxuICAgICAgICBwYXlDb3VudDogMCxcbiAgICAgICAgcGF5TGlzdDogW10sXG4gICAgICAgIHRpbWU6IDEwLFxuICAgICAgICBtYXhDb3VudDogMCxcbiAgICAgICAgc29ydDogLTFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IDIsXG4gICAgICAgIHVybDogJ2ltYWdlcy9hMycsXG4gICAgICAgIHRpdGxlOiAn5Lik5YCN6YCfJyxcbiAgICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICAgIHBheUNvdW50OiAwLFxuICAgICAgICBwYXlMaXN0OiBbXSxcbiAgICAgICAgdGltZTogMTAsXG4gICAgICAgIG1heENvdW50OiAwLFxuICAgICAgICBzb3J0OiAtMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogMyxcbiAgICAgICAgdXJsOiAnaW1hZ2VzL2E0JyxcbiAgICAgICAgdGl0bGU6ICfkuInlgI3pgJ8nLFxuICAgICAgICBwcmljZTogJzEwJyxcbiAgICAgICAgcGF5Q291bnQ6IDAsXG4gICAgICAgIHBheUxpc3Q6IFtdLFxuICAgICAgICB0aW1lOiAxMCxcbiAgICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICAgIHNvcnQ6IC0xXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiA0LFxuICAgICAgICB1cmw6ICdpbWFnZXMvYTUnLFxuICAgICAgICB0aXRsZTogJ+S6lOWAjemAnycsXG4gICAgICAgIHByaWNlOiAnMTAnLFxuICAgICAgICBwYXlDb3VudDogMCxcbiAgICAgICAgcGF5TGlzdDogW10sXG4gICAgICAgIHRpbWU6IDEwLFxuICAgICAgICBtYXhDb3VudDogMCxcbiAgICAgICAgc29ydDogLTFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IDUsXG4gICAgICAgIHVybDogJ2ltYWdlcy9hNicsXG4gICAgICAgIHRpdGxlOiAn5riF5YWo5bGPJyxcbiAgICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICAgIHBheUNvdW50OiAwLFxuICAgICAgICBwYXlMaXN0OiBbXSxcbiAgICAgICAgdGltZTogMSxcbiAgICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICAgIHNvcnQ6IC0xXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiA3LFxuICAgICAgICB1cmw6ICdpbWFnZXMvYTcnLFxuICAgICAgICB0aXRsZTogJ+Wkjea0uycsXG4gICAgICAgIHByaWNlOiAnMTAnLFxuICAgICAgICBwYXlDb3VudDogMCxcbiAgICAgICAgcGF5TGlzdDogW10sXG4gICAgICAgIHRpbWU6IDAsXG4gICAgICAgIG1heENvdW50OiAwLFxuICAgICAgICBzb3J0OiAtMVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0TGlzdCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgU3RhdGUuaW5zKCkubWFpbk5lYXIuY29udHJhY3QubmZ0X3Rva2Vuc19mb3Jfb3duZXIoe1xuICAgICAgYWNjb3VudF9pZDogU3RhdGUuaW5zKCkubWFpbk5lYXIub3duZXJLZXksXG4gICAgICBmcm9tX2luZGV4OiAnMCcsXG4gICAgICBsaW1pdDogMTAwMDAwXG4gICAgfSk7XG4gICAgU3RhdGUuaW5zKCkucmVzZXRJbWFnZUxpc3QoKTtcbiAgICBpZiAoU3RhdGUuaW5zKCkuaXNMb2dpbiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hZ2VMaXN0JykpIHtcbiAgICAgIGxldCBsb2NhbFN0b3JhZ2VJbWFnZUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFnZUxpc3QnKSk7XG4gICAgICBsb2NhbFN0b3JhZ2VJbWFnZUxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W2luZGV4XS5zb3J0ID0gaXRlbS5zb3J0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCB0eXBlUHJvY2Vzc0luZGV4ID0gKHJlcykgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gcmVzO1xuICAgICAgc3dpdGNoKHJlcykge1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5kZXggPSA2O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICByZXN1bHQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBhcnIgPSBpdGVtLnRva2VuX2lkLnNwbGl0KCc6Jyk7XG4gICAgICBsZXQgdGFyZ2V0SW5kZXggPSB0eXBlUHJvY2Vzc0luZGV4KE51bWJlcihhcnJbMF0pKTtcbiAgICAgIFN0YXRlLmlucygpLmltYWdlTGlzdFt0YXJnZXRJbmRleF0ucGF5Q291bnQrKztcbiAgICAgIFN0YXRlLmlucygpLmltYWdlTGlzdFt0YXJnZXRJbmRleF0ucGF5TGlzdC5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFnZUxpc3QnLCBKU09OLnN0cmluZ2lmeShTdGF0ZS5pbnMoKS5pbWFnZUxpc3QpKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xvZ2luID0gZmFsc2U7XG4gIHB1YmxpYyBpc1BheSA9IGZhbHNlO1xuICBwdWJsaWMgbWlhbk5lYXJDb25maWcgPSB7XG4gICAgbmV0d29ya0lkOiAndGVzdG5ldCcsXG4gICAgY29udHJhY3ROYW1lOiAnZGV2LTE2MzI5NjUzMDc1NDAtNTU1MTE5OTM0NDQzMTcnLFxuICAgIC8vIGNvbnRyYWN0TmFtZTogJ2Rldi0xNjMyNzI0NDE4Nzc2LTY4MjE5ODU4MTMzMjAxJyxcbiAgICBub2RlVXJsOiAnaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZycsXG4gICAgLy8gbm9kZVVybDogJ2h0dHBzOi8vcHVibGljLXJwYy5ibG9ja3BpLmlvL2h0dHAvbmVhci10ZXN0bmV0JyxcbiAgICB3YWxsZXRVcmw6ICdodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnJyxcbiAgICBoZWxwZXJVcmw6ICdodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnJ1xuICAgIC8vIGV4cGxvcmVyVXJsOiBcImh0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICB9O1xuICBwdWJsaWMgbWFpbk5lYXI6IGFueSA9IHtcbiAgICBuZWFyOiB7fSxcbiAgICB3YWxsZXRBY2NvdW50OiB7fSxcbiAgICBjb250cmFjdDoge30sXG4gICAgb3duZXJLZXk6ICcnLFxuICAgIHBvb2xCYWxhbmNlOiAwLFxuICAgIG1heFNjb3JlOiAwLFxuICAgIGJhbGFuY2U6IDBcbiAgfTtcbiAgcHVibGljIHN0b3JlTmVhckNvbmZpZyA9IHtcbiAgICAuLi50aGlzLm1pYW5OZWFyQ29uZmlnLFxuICAgIGNvbnRyYWN0TmFtZTogJ21hcmtldC4nICsgdGhpcy5taWFuTmVhckNvbmZpZy5jb250cmFjdE5hbWUsXG4gIH07XG4gIHB1YmxpYyBzdG9yZU5lYXI6IGFueSA9IHtcbiAgICBuZWFyOiB7fSxcbiAgICB3YWxsZXRBY2NvdW50OiB7fSxcbiAgICBjb250cmFjdDoge30sXG4gICAgb3duZXJLZXk6ICcnLFxuICAgIHBvb2xCYWxhbmNlOiAwLFxuICAgIG1heFNjb3JlOiAwLFxuICAgIGJhbGFuY2U6IDBcbiAgfTtcbiAgcHVibGljIHN0b3JlUGF5Qm94O1xuICBwdWJsaWMgc3RvcmVQYXlJbmRleDtcbiAgcHVibGljIHN0b3JlUGF5T2JqO1xuICBwdWJsaWMgaW5pdFNjZW5lO1xuICBwdWJsaWMgaW5pdCgpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/StoreItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '7a0ebyzXRNE+rztH+BgiUFx', 'StoreItem');
// src/game/StoreItem.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("./common/Common");
var State_1 = require("./model/State");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StoreItem = /** @class */ (function (_super) {
    __extends(StoreItem, _super);
    function StoreItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listBox = null;
        _this.listBoxBg = null;
        _this.icon = null;
        _this.title = null;
        _this.submitButton = null;
        _this.submitButtonBg = null;
        _this.submitTitle = null;
        _this.storePay = null;
        _this.boxObj = {};
        return _this;
    }
    StoreItem.prototype.onLoad = function () {
        this.submitButton.on('touchstart', this.onSubmitButton, this);
    };
    StoreItem.prototype.setImage = function (target, url) {
        cc.resources.load(url, cc.SpriteFrame, function (err, spriteFrame) {
            target.spriteFrame = spriteFrame;
        });
    };
    StoreItem.prototype.initBox = function (obj) {
        this.boxObj = obj;
        this.setImage(this.icon, obj.url);
        this.title.string = obj.title;
        this.submitTitle.string = Common_1.formatPrice(obj.price, 2, true) + ' Near';
    };
    StoreItem.prototype.onListBox = function () {
        this.setImage(this.listBoxBg, 'images/b2');
        this.setImage(this.submitButtonBg, 'images/c2');
        this.submitTitle.node.color = cc.Color.WHITE;
    };
    StoreItem.prototype.onListBoxOver = function () {
        this.setImage(this.listBoxBg, 'images/b1');
        this.setImage(this.submitButtonBg, 'images/c1');
        this.submitTitle.node.color = cc.color(255, 217, 79);
    };
    StoreItem.prototype.onSubmitButton = function () {
        State_1.default.ins().storePayBox = cc.instantiate(this.storePay);
        var scene = cc.director.getScene();
        scene.getChildByName('Canvas').addChild(State_1.default.ins().storePayBox);
        State_1.default.ins().storePayBox.getComponent('StorePay').initBox(this.boxObj);
    };
    __decorate([
        property(cc.Node)
    ], StoreItem.prototype, "listBox", void 0);
    __decorate([
        property(cc.Sprite)
    ], StoreItem.prototype, "listBoxBg", void 0);
    __decorate([
        property(cc.Sprite)
    ], StoreItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], StoreItem.prototype, "title", void 0);
    __decorate([
        property(cc.Node)
    ], StoreItem.prototype, "submitButton", void 0);
    __decorate([
        property(cc.Sprite)
    ], StoreItem.prototype, "submitButtonBg", void 0);
    __decorate([
        property(cc.Label)
    ], StoreItem.prototype, "submitTitle", void 0);
    __decorate([
        property(cc.Prefab)
    ], StoreItem.prototype, "storePay", void 0);
    StoreItem = __decorate([
        ccclass
    ], StoreItem);
    return StoreItem;
}(cc.Component));
exports.default = StoreItem;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9TdG9yZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQThDO0FBQzlDLHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXdEQztRQXREQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsWUFBTSxHQUFHLEVBQUUsQ0FBQzs7SUFxQ2QsQ0FBQztJQW5DQywwQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsR0FBVztRQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUcsRUFBRSxXQUEyQjtZQUN0RSxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQkFBTyxHQUFQLFVBQVEsR0FBRztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxvQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUN0RSxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxrQ0FBYyxHQUF0QjtRQUNFLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBckREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNhO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDTztJQWpCUixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBd0Q3QjtJQUFELGdCQUFDO0NBeERELEFBd0RDLENBeERzQyxFQUFFLENBQUMsU0FBUyxHQXdEbEQ7a0JBeERvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuL2NvbW1vbi9Db21tb24nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vbW9kZWwvU3RhdGUnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBsaXN0Qm94OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgbGlzdEJveEJnOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzdWJtaXRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBzdWJtaXRCdXR0b25CZzogY2MuU3ByaXRlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBzdWJtaXRUaXRsZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHN0b3JlUGF5OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gIGJveE9iaiA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5vbigndG91Y2hzdGFydCcsIHRoaXMub25TdWJtaXRCdXR0b24sIHRoaXMpO1xuICB9XG5cbiAgc2V0SW1hZ2UodGFyZ2V0LCB1cmw6IHN0cmluZykge1xuICAgIGNjLnJlc291cmNlcy5sb2FkKHVybCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgdGFyZ2V0LnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgfSk7XG4gIH1cblxuICBpbml0Qm94KG9iaikge1xuICAgIHRoaXMuYm94T2JqID0gb2JqO1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5pY29uLCBvYmoudXJsKTtcbiAgICB0aGlzLnRpdGxlLnN0cmluZyA9IG9iai50aXRsZTtcbiAgICB0aGlzLnN1Ym1pdFRpdGxlLnN0cmluZyA9IGZvcm1hdFByaWNlKG9iai5wcmljZSwgMiwgdHJ1ZSkgKyAnIE5lYXInO1xuICB9XG5cbiAgb25MaXN0Qm94KCkge1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5saXN0Qm94QmcsICdpbWFnZXMvYjInKTtcbiAgICB0aGlzLnNldEltYWdlKHRoaXMuc3VibWl0QnV0dG9uQmcsICdpbWFnZXMvYzInKTtcbiAgICB0aGlzLnN1Ym1pdFRpdGxlLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgfVxuXG4gIG9uTGlzdEJveE92ZXIoKSB7XG4gICAgdGhpcy5zZXRJbWFnZSh0aGlzLmxpc3RCb3hCZywgJ2ltYWdlcy9iMScpO1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5zdWJtaXRCdXR0b25CZywgJ2ltYWdlcy9jMScpO1xuICAgIHRoaXMuc3VibWl0VGl0bGUubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjE3LCA3OSk7XG4gIH1cblxuICBwcml2YXRlIG9uU3VibWl0QnV0dG9uKCkge1xuICAgIFN0YXRlLmlucygpLnN0b3JlUGF5Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdG9yZVBheSk7XG4gICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICBzY2VuZS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJykuYWRkQ2hpbGQoU3RhdGUuaW5zKCkuc3RvcmVQYXlCb3gpO1xuICAgIFN0YXRlLmlucygpLnN0b3JlUGF5Qm94LmdldENvbXBvbmVudCgnU3RvcmVQYXknKS5pbml0Qm94KHRoaXMuYm94T2JqKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/PackView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc991HPfOdM0K/C4Sln24zj', 'PackView');
// src/game/PackView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var State_1 = require("./model/State");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PackView = /** @class */ (function (_super) {
    __extends(PackView, _super);
    function PackView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goBack = null;
        _this.listBox = null;
        _this.scrollView = null;
        _this.fucList = null;
        _this.fucBox = null;
        _this.emptyBox = null;
        _this.nav1 = null;
        _this.nav2 = null;
        _this.sellEmptyBox = null;
        _this.sellScrollView = null;
        _this.tips = null;
        _this.longTapBox = null;
        _this.giveModel = null;
        _this.sellModel = null;
        _this.mask = null;
        _this.sellListBox = null;
        _this.activeIndex = 1;
        _this.tapTime = 0;
        _this.moveIcon = null;
        _this.moveIndex = -1;
        _this.moveCancel = 0;
        _this.moveTargetIndex = -1;
        return _this;
    }
    PackView.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.goBack.on('touchstart', this.onGoBack, this);
                        return [4 /*yield*/, State_1.default.ins().getList()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.judgeEmpty()];
                    case 2:
                        _a.sent();
                        this.nav1.on('touchstart', function () { return _this.onNav(1); }, this);
                        this.nav2.on('touchstart', function () { return _this.onNav(2); }, this);
                        this.tips.getChildByName('tipsClose').on('touchstart', function () {
                            _this.tips.active = false;
                            localStorage.setItem('packTips', 'false');
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    PackView.prototype.judgeEmpty = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scrollView.content.active = false;
                        this.emptyBox.active = false;
                        this.sellScrollView.content.active = false;
                        this.sellEmptyBox.active = false;
                        this.fucList.active = false;
                        this.tips.active = false;
                        if (!(this.activeIndex === 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.renderScrollView()];
                    case 1:
                        _a.sent();
                        if (!(this.scrollView.content.children.length > 0)) return [3 /*break*/, 3];
                        this.scrollView.content.active = true;
                        return [4 /*yield*/, this.renderFucList()];
                    case 2:
                        _a.sent();
                        this.tips.active = localStorage.getItem('packTips') !== 'false';
                        this.fucList.active = true;
                        return [3 /*break*/, 4];
                    case 3:
                        this.emptyBox.active = true;
                        this.emptyBox.getChildByName('goStore').on('touchstart', function () {
                            cc.director.loadScene('store');
                        }, this);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.renderSellScrollView()];
                    case 6:
                        _a.sent();
                        if (this.sellScrollView.content.children.length > 0) {
                            this.sellScrollView.content.active = true;
                        }
                        else {
                            this.sellEmptyBox.active = true;
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    PackView.prototype.onNav = function (activeIndex) {
        this.activeIndex = activeIndex;
        var label = this["nav" + activeIndex].getChildByName('navLabel');
        label.opacity = 255 * 0.8;
        var navBg = this["nav" + activeIndex].getChildByName('navActive');
        navBg.active = true;
        var nextActive = 3 - activeIndex;
        var nextLabel = this["nav" + nextActive].getChildByName('navLabel');
        nextLabel.opacity = 255 * 0.6;
        var nextNavBg = this["nav" + nextActive].getChildByName('navActive');
        nextNavBg.active = false;
        this.judgeEmpty();
    };
    PackView.prototype.renderScrollView = function () {
        var _this = this;
        var content = this.scrollView.content;
        content.removeAllChildren();
        State_1.default.ins().imageList.forEach(function (item, index) {
            if (item.payCount === 0)
                return;
            if (item.sort !== -1)
                return;
            var listBox = cc.instantiate(_this.listBox);
            content.addChild(listBox);
            listBox.getComponent('PackItem').initBox(item);
            listBox.on('touchstart', function (event) {
                _this.longTapBox.active = false;
                _this.scheduleOnce(function () {
                    _this.longTap(event, listBox, index);
                }, 1);
                if (item.type === 7)
                    return;
                _this.ontouchstart(event, listBox, index);
            }, _this, true);
            if (item.type === 7)
                return;
            listBox.on('touchmove', function (e) {
                _this.unscheduleAllCallbacks();
                _this.onTouchmove(e);
            }, _this, true);
            listBox.on('touchcancel', function () {
                _this.unscheduleAllCallbacks();
                _this.onTouchcancel(1);
            }, _this, true);
            var scene = cc.director.getScene();
            scene.getChildByName('Canvas').on('touchend', function () {
                _this.unscheduleAllCallbacks();
                _this.removeMoveBox();
            }, _this, true);
        });
    };
    PackView.prototype.longTap = function (event, target, index) {
        var _this = this;
        var eventX = event.target.x;
        var eventY = event.target.y;
        var eventWidth = event.target.width;
        var eventHeight = event.target.height;
        var longTapBoxBounding = this.longTapBox.getBoundingBox();
        var width = longTapBoxBounding.width;
        var height = longTapBoxBounding.height;
        var xProcess = eventX + width / 2 - eventWidth / 2;
        var yProcess = eventY + 1051 / 2 - height / 2 - eventHeight / 2;
        var tips = this.longTapBox.getChildByName('tips');
        tips.setPosition(-90, 96.104);
        if (xProcess > 300) {
            xProcess = xProcess - width + eventWidth;
            tips.setPosition(90, 96.104);
        }
        this.longTapBox.setPosition(xProcess, yProcess);
        this.longTapBox.active = true;
        this.longTapBox.getChildByName('give').on('touchstart', function () {
            _this.longTapBox.active = false;
            _this.showGiveModel(target, index);
        }, this);
        this.longTapBox.getChildByName('sell').once('touchstart', function () {
            _this.longTapBox.active = false;
            _this.showSellModel(target, index);
        }, this);
    };
    PackView.prototype.showGiveModel = function (target, index) {
        var _this = this;
        this.giveModel.getChildByName('icon').getComponent(cc.Sprite).spriteFrame = target.getChildByName('icon').getComponent(cc.Sprite).spriteFrame;
        this.giveModel.getChildByName('iconTitleBox').getChildByName('iconTitle').getComponent(cc.Label).string = State_1.default.ins().imageList[index].title;
        this.giveModel.active = true;
        this.mask.active = true;
        var input = this.giveModel.getChildByName('inputContext').getChildByName('inputBox').getComponent(cc.EditBox);
        var inputValue = '';
        var inputUpdate = function (text, editbox, customEventData) {
            inputValue = text.string;
            if (inputValue) {
                _this.giveModel.getChildByName('submit').getChildByName('title').opacity = 255;
            }
            else {
                _this.giveModel.getChildByName('submit').getChildByName('title').opacity = 88;
            }
        };
        input.node.on('text-changed', inputUpdate, this);
        this.giveModel.getChildByName('close').on('touchstart', function () {
            _this.giveModel.active = false;
            _this.mask.active = false;
        }, this);
        this.giveModel.getChildByName('submit').on('touchstart', function () {
            if (!inputValue)
                return;
            State_1.default.ins().mainNear.contract.nft_transfer({
                receiver_id: inputValue,
                token_id: State_1.default.ins().imageList[index].payList.splice(0, 1)[0].token_id
            }, 300000000000000, window.nearApi.utils.format.parseNearAmount('0.000000000000000000000001'));
        }, this);
    };
    PackView.prototype.showSellModel = function (target, index) {
        var _this = this;
        this.sellModel.getChildByName('icon').getComponent(cc.Sprite).spriteFrame = target.getChildByName('icon').getComponent(cc.Sprite).spriteFrame;
        this.sellModel.getChildByName('iconTitleBox').getChildByName('iconTitle').getComponent(cc.Label).string = State_1.default.ins().imageList[index].title;
        this.sellModel.active = true;
        this.mask.active = true;
        this.sellModel.getChildByName('close').on('touchstart', function () {
            _this.sellModel.active = false;
            _this.mask.active = false;
        }, this);
        this.sellModel.getChildByName('submit').on('touchstart', function () {
            var next = State_1.default.ins().imageList[index].payList.splice(0, 1)[0];
            State_1.default.ins().mainNear.contract.nft_approve({
                account_id: State_1.default.ins().storeNearConfig.contractName,
                token_id: next.token_id,
                msg: JSON.stringify({
                    sale_conditions: {
                        near: window.nearApi.utils.format.parseNearAmount('1'),
                        token_type: next.token_id.split(':')[0],
                        is_auction: 'false'
                    }
                })
            }, 300000000000000, window.nearApi.utils.format.parseNearAmount('0.00051'));
        }, this);
    };
    PackView.prototype.renderSellScrollView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content, from_index, limit, result, awaitResult, typeObj, typeArr;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        content = this.scrollView.content;
                        content.removeAllChildren();
                        from_index = 0;
                        limit = 80;
                        result = [];
                        awaitResult = function () { return __awaiter(_this, void 0, void 0, function () {
                            var res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, State_1.default.ins().storeNear.contract.get_sales_by_owner_id({
                                            account_id: State_1.default.ins().storeNear.ownerKey,
                                            from_index: from_index.toString(),
                                            limit: limit
                                        })];
                                    case 1:
                                        res = _a.sent();
                                        result = result.concat(res);
                                        if (from_index !== 0 && res.length === 0) {
                                            return [2 /*return*/, result];
                                        }
                                        else {
                                            from_index += limit;
                                            return [2 /*return*/, awaitResult()];
                                        }
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        return [4 /*yield*/, awaitResult()];
                    case 1:
                        _a.sent();
                        typeObj = {};
                        result.forEach(function (item, index) {
                            var type = item.token_id.split(':')[0];
                            if (typeObj[type]) {
                                typeObj[type] += 1;
                            }
                            else {
                                typeObj[type] = 1;
                            }
                        });
                        typeArr = Object.keys(typeObj);
                        State_1.default.ins()
                            .imageList.concat()
                            .forEach(function (item, index) {
                            if (!typeArr.includes(item.type.toString()))
                                return;
                            var listBox = cc.instantiate(_this.sellListBox);
                            content.addChild(listBox);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PackView.prototype.ontouchstart = function (event, target, index) {
        return __awaiter(this, void 0, void 0, function () {
            var scene;
            return __generator(this, function (_a) {
                this.moveIcon = cc.instantiate(target.getChildByName('icon'));
                scene = cc.director.getScene();
                scene.addChild(this.moveIcon);
                this.onTouchmove(event);
                this.moveIndex = index;
                return [2 /*return*/];
            });
        });
    };
    PackView.prototype.onTouchmove = function (event) {
        var _this = this;
        var pos = event.getLocation();
        var delta = event.getDelta();
        this.moveIcon.setPosition(pos.x + delta.x, pos.y + delta.y);
        this.moveTargetIndex = -1;
        var moveIconBox = this.moveIcon.getBoundingBox();
        this.fucList.children.forEach(function (fucBox, index) {
            if (cc.Intersection.rectRect(moveIconBox, fucBox.getBoundingBox())) {
                _this.moveTargetIndex = index;
            }
        });
    };
    PackView.prototype.onTouchcancel = function (step) {
        if (step === void 0) { step = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.moveCancel += step;
                if (this.moveTargetIndex !== -1) {
                    this.moveCancel = 0;
                    this.removeMoveBox();
                    State_1.default.ins().imageList.forEach(function (item, index) {
                        if (item.sort === _this.moveTargetIndex) {
                            item.sort = -1;
                        }
                    });
                    State_1.default.ins().imageList[this.moveIndex].sort = this.moveTargetIndex;
                    localStorage.setItem('imageList', JSON.stringify(State_1.default.ins().imageList));
                    this.renderFucList();
                    this.renderScrollView();
                }
                else {
                    if (this.moveCancel === 2) {
                        State_1.default.ins().imageList[this.moveIndex].sort = this.moveTargetIndex;
                        localStorage.setItem('imageList', JSON.stringify(State_1.default.ins().imageList));
                        this.removeMoveBox();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    PackView.prototype.removeMoveBox = function () {
        var scene = cc.director.getScene();
        scene.removeChild(this.moveIcon);
        this.moveCancel = 0;
    };
    PackView.prototype.renderFucList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fucListLength;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.fucList) {
                    this.fucList.removeAllChildren();
                }
                fucListLength = 4;
                new Array(fucListLength).fill(1).map(function (item, index) {
                    var fuc = cc.instantiate(_this.fucBox);
                    var defaultContent = fuc.getChildByName('default');
                    var fucIndex = defaultContent.getChildByName('index');
                    var fucLabel = fucIndex.getComponent(cc.Label);
                    fucLabel.string = (index + 1).toString();
                    _this.fucList.addChild(fuc);
                });
                State_1.default.ins().imageList.forEach(function (item, index) {
                    if (item.sort >= 0 && item.payCount > 0) {
                        var targetBox = _this.fucList.children[item.sort];
                        var defaultContent = targetBox.getChildByName('default');
                        var set = targetBox.getChildByName('set');
                        var icon = set.getChildByName('icon');
                        var iconSprite_1 = icon.getComponent(cc.Sprite);
                        var count = set.getChildByName('countBox').getChildByName('count');
                        var countLabel = count.getComponent(cc.Label);
                        countLabel.string = 'x ' + State_1.default.ins().imageList[index].payCount;
                        defaultContent.active = false;
                        set.active = true;
                        cc.resources.load(item.url, cc.SpriteFrame, function (err, spriteFrame) {
                            iconSprite_1.spriteFrame = spriteFrame;
                        });
                        var listBox_1 = cc.instantiate(_this.listBox);
                        listBox_1.getComponent('PackItem').initBox(item);
                        targetBox.on('touchstart', function (event) {
                            _this.longTapBox.active = false;
                            _this.ontouchstart(event, listBox_1, index);
                        }, _this, true);
                        targetBox.on('touchmove', _this.onTouchmove, _this, true);
                        targetBox.on('touchcancel', function () {
                            _this.onTouchcancel(2);
                            if (_this.moveTargetIndex === -1) {
                                State_1.default.ins().imageList[index].sort = -1;
                                _this.renderFucList();
                                _this.renderScrollView();
                            }
                        }, _this, true);
                        targetBox.on('touchend', _this.removeMoveBox, _this, true);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    PackView.prototype.onGoBack = function () {
        cc.director.loadScene('main');
    };
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "goBack", void 0);
    __decorate([
        property(cc.Prefab)
    ], PackView.prototype, "listBox", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PackView.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "fucList", void 0);
    __decorate([
        property(cc.Prefab)
    ], PackView.prototype, "fucBox", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "emptyBox", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "nav1", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "nav2", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "sellEmptyBox", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PackView.prototype, "sellScrollView", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "tips", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "longTapBox", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "giveModel", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "sellModel", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "mask", void 0);
    __decorate([
        property(cc.Prefab)
    ], PackView.prototype, "sellListBox", void 0);
    PackView = __decorate([
        ccclass
    ], PackView);
    return PackView;
}(cc.Component));
exports.default = PackView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9QYWNrVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErYUM7UUE3YUMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUVqQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isb0JBQWMsR0FBa0IsSUFBSSxDQUFDO1FBRXJDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQXNFWixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YscUJBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFtVXZCLENBQUM7SUExWU8seUJBQU0sR0FBWjs7Ozs7O3dCQUNFLElB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QUFDLFVBQVUsQ0FBQztnREFDUztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO29EQUNhO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0lBaENYLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErYTVCO0lBQUQsZUFBQztDQS9hRCxBQSthQyxDQS9hcUMsRUFBRSxDQUFDLFNBQVMsR0ErYWpEO2tCQS9hb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGF0ZSBmcm9tICcuL21vZGVsL1N0YXRlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWNrVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnb0JhY2s6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBsaXN0Qm94OiBjYy5QcmVmYWIgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBmdWNMaXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgZnVjQm94OiBjYy5QcmVmYWIgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZW1wdHlCb3g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbmF2MTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBuYXYyOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHNlbGxFbXB0eUJveDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICBzZWxsU2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB0aXBzOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGxvbmdUYXBCb3g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ2l2ZU1vZGVsOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHNlbGxNb2RlbDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgc2VsbExpc3RCb3g6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgYWN0aXZlSW5kZXggPSAxO1xuICB0YXBUaW1lID0gMDtcblxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgdGhpcy5nb0JhY2sub24oJ3RvdWNoc3RhcnQnLCB0aGlzLm9uR29CYWNrLCB0aGlzKTtcblxuICAgIGF3YWl0IFN0YXRlLmlucygpLmdldExpc3QoKTtcblxuICAgIGF3YWl0IHRoaXMuanVkZ2VFbXB0eSgpO1xuICAgIHRoaXMubmF2MS5vbigndG91Y2hzdGFydCcsICgpID0+IHRoaXMub25OYXYoMSksIHRoaXMpO1xuICAgIHRoaXMubmF2Mi5vbigndG91Y2hzdGFydCcsICgpID0+IHRoaXMub25OYXYoMiksIHRoaXMpO1xuICAgIHRoaXMudGlwcy5nZXRDaGlsZEJ5TmFtZSgndGlwc0Nsb3NlJykub24oXG4gICAgICAndG91Y2hzdGFydCcsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMudGlwcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhY2tUaXBzJywgJ2ZhbHNlJyk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGp1ZGdlRW1wdHkoKSB7XG4gICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5lbXB0eUJveC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGxTY3JvbGxWaWV3LmNvbnRlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxsRW1wdHlCb3guYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5mdWNMaXN0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudGlwcy5hY3RpdmUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSAxKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlclNjcm9sbFZpZXcoKTtcbiAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyRnVjTGlzdCgpO1xuICAgICAgICB0aGlzLnRpcHMuYWN0aXZlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BhY2tUaXBzJykgIT09ICdmYWxzZSc7XG4gICAgICAgIHRoaXMuZnVjTGlzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbXB0eUJveC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtcHR5Qm94LmdldENoaWxkQnlOYW1lKCdnb1N0b3JlJykub24oXG4gICAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc3RvcmUnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXJTZWxsU2Nyb2xsVmlldygpO1xuICAgICAgaWYgKHRoaXMuc2VsbFNjcm9sbFZpZXcuY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2VsbFNjcm9sbFZpZXcuY29udGVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxsRW1wdHlCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uTmF2KGFjdGl2ZUluZGV4KSB7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgIGxldCBsYWJlbCA9IHRoaXNbYG5hdiR7YWN0aXZlSW5kZXh9YF0uZ2V0Q2hpbGRCeU5hbWUoJ25hdkxhYmVsJyk7XG4gICAgbGFiZWwub3BhY2l0eSA9IDI1NSAqIDAuODtcbiAgICBsZXQgbmF2QmcgPSB0aGlzW2BuYXYke2FjdGl2ZUluZGV4fWBdLmdldENoaWxkQnlOYW1lKCduYXZBY3RpdmUnKTtcbiAgICBuYXZCZy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgbGV0IG5leHRBY3RpdmUgPSAzIC0gYWN0aXZlSW5kZXg7XG4gICAgbGV0IG5leHRMYWJlbCA9IHRoaXNbYG5hdiR7bmV4dEFjdGl2ZX1gXS5nZXRDaGlsZEJ5TmFtZSgnbmF2TGFiZWwnKTtcbiAgICBuZXh0TGFiZWwub3BhY2l0eSA9IDI1NSAqIDAuNjtcbiAgICBsZXQgbmV4dE5hdkJnID0gdGhpc1tgbmF2JHtuZXh0QWN0aXZlfWBdLmdldENoaWxkQnlOYW1lKCduYXZBY3RpdmUnKTtcbiAgICBuZXh0TmF2QmcuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5qdWRnZUVtcHR5KCk7XG4gIH1cblxuICBtb3ZlSWNvbiA9IG51bGw7XG4gIG1vdmVJbmRleCA9IC0xO1xuICBtb3ZlQ2FuY2VsID0gMDtcbiAgbW92ZVRhcmdldEluZGV4ID0gLTE7XG5cbiAgcHJpdmF0ZSByZW5kZXJTY3JvbGxWaWV3KCkge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIFN0YXRlLmlucygpLmltYWdlTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0ucGF5Q291bnQgPT09IDApIHJldHVybjtcbiAgICAgIGlmIChpdGVtLnNvcnQgIT09IC0xKSByZXR1cm47XG4gICAgICBsZXQgbGlzdEJveCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEJveCk7XG4gICAgICBjb250ZW50LmFkZENoaWxkKGxpc3RCb3gpO1xuICAgICAgbGlzdEJveC5nZXRDb21wb25lbnQoJ1BhY2tJdGVtJykuaW5pdEJveChpdGVtKTtcbiAgICAgIGxpc3RCb3gub24oXG4gICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb25nVGFwQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9uZ1RhcChldmVudCwgbGlzdEJveCwgaW5kZXgpO1xuICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IDcpIHJldHVybjtcbiAgICAgICAgICB0aGlzLm9udG91Y2hzdGFydChldmVudCwgbGlzdEJveCwgaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gNykgcmV0dXJuO1xuICAgICAgbGlzdEJveC5vbihcbiAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgdGhpcy5vblRvdWNobW92ZShlKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICAgIGxpc3RCb3gub24oXG4gICAgICAgICd0b3VjaGNhbmNlbCcsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICB0aGlzLm9uVG91Y2hjYW5jZWwoMSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgICBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpLm9uKFxuICAgICAgICAndG91Y2hlbmQnLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVNb3ZlQm94KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvbmdUYXAoZXZlbnQsIHRhcmdldCwgaW5kZXgpIHtcbiAgICBsZXQgZXZlbnRYID0gZXZlbnQudGFyZ2V0Lng7XG4gICAgbGV0IGV2ZW50WSA9IGV2ZW50LnRhcmdldC55O1xuICAgIGxldCBldmVudFdpZHRoID0gZXZlbnQudGFyZ2V0LndpZHRoO1xuICAgIGxldCBldmVudEhlaWdodCA9IGV2ZW50LnRhcmdldC5oZWlnaHQ7XG4gICAgbGV0IGxvbmdUYXBCb3hCb3VuZGluZyA9IHRoaXMubG9uZ1RhcEJveC5nZXRCb3VuZGluZ0JveCgpO1xuICAgIGxldCB3aWR0aCA9IGxvbmdUYXBCb3hCb3VuZGluZy53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gbG9uZ1RhcEJveEJvdW5kaW5nLmhlaWdodDtcbiAgICBsZXQgeFByb2Nlc3MgPSBldmVudFggKyB3aWR0aCAvIDIgLSBldmVudFdpZHRoIC8gMjtcbiAgICBsZXQgeVByb2Nlc3MgPSBldmVudFkgKyAxMDUxIC8gMiAtIGhlaWdodCAvIDIgLSBldmVudEhlaWdodCAvIDI7XG4gICAgbGV0IHRpcHMgPSB0aGlzLmxvbmdUYXBCb3guZ2V0Q2hpbGRCeU5hbWUoJ3RpcHMnKTtcbiAgICB0aXBzLnNldFBvc2l0aW9uKC05MCwgOTYuMTA0KTtcbiAgICBpZiAoeFByb2Nlc3MgPiAzMDApIHtcbiAgICAgIHhQcm9jZXNzID0geFByb2Nlc3MgLSB3aWR0aCArIGV2ZW50V2lkdGg7XG4gICAgICB0aXBzLnNldFBvc2l0aW9uKDkwLCA5Ni4xMDQpO1xuICAgIH1cbiAgICB0aGlzLmxvbmdUYXBCb3guc2V0UG9zaXRpb24oeFByb2Nlc3MsIHlQcm9jZXNzKTtcbiAgICB0aGlzLmxvbmdUYXBCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmxvbmdUYXBCb3guZ2V0Q2hpbGRCeU5hbWUoJ2dpdmUnKS5vbihcbiAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5sb25nVGFwQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dHaXZlTW9kZWwodGFyZ2V0LCBpbmRleCk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5sb25nVGFwQm94LmdldENoaWxkQnlOYW1lKCdzZWxsJykub25jZShcbiAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5sb25nVGFwQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dTZWxsTW9kZWwodGFyZ2V0LCBpbmRleCk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNob3dHaXZlTW9kZWwodGFyZ2V0LCBpbmRleCkge1xuICAgIHRoaXMuZ2l2ZU1vZGVsLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICB0aGlzLmdpdmVNb2RlbC5nZXRDaGlsZEJ5TmFtZSgnaWNvblRpdGxlQm94JykuZ2V0Q2hpbGRCeU5hbWUoJ2ljb25UaXRsZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W2luZGV4XS50aXRsZTtcbiAgICB0aGlzLmdpdmVNb2RlbC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xuICAgIGxldCBpbnB1dCA9IHRoaXMuZ2l2ZU1vZGVsLmdldENoaWxkQnlOYW1lKCdpbnB1dENvbnRleHQnKS5nZXRDaGlsZEJ5TmFtZSgnaW5wdXRCb3gnKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgbGV0IGlucHV0VmFsdWUgPSAnJztcbiAgICBsZXQgaW5wdXRVcGRhdGUgPSAodGV4dCwgZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKSA9PiB7XG4gICAgICBpbnB1dFZhbHVlID0gdGV4dC5zdHJpbmc7XG4gICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICB0aGlzLmdpdmVNb2RlbC5nZXRDaGlsZEJ5TmFtZSgnc3VibWl0JykuZ2V0Q2hpbGRCeU5hbWUoJ3RpdGxlJykub3BhY2l0eSA9IDI1NTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2l2ZU1vZGVsLmdldENoaWxkQnlOYW1lKCdzdWJtaXQnKS5nZXRDaGlsZEJ5TmFtZSgndGl0bGUnKS5vcGFjaXR5ID0gODg7XG4gICAgICB9XG4gICAgfTtcbiAgICBpbnB1dC5ub2RlLm9uKCd0ZXh0LWNoYW5nZWQnLCBpbnB1dFVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5naXZlTW9kZWwuZ2V0Q2hpbGRCeU5hbWUoJ2Nsb3NlJykub24oXG4gICAgICAndG91Y2hzdGFydCcsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2l2ZU1vZGVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5naXZlTW9kZWwuZ2V0Q2hpbGRCeU5hbWUoJ3N1Ym1pdCcpLm9uKFxuICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoIWlucHV0VmFsdWUpIHJldHVybjtcbiAgICAgICAgU3RhdGUuaW5zKCkubWFpbk5lYXIuY29udHJhY3QubmZ0X3RyYW5zZmVyKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlY2VpdmVyX2lkOiBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgdG9rZW5faWQ6IFN0YXRlLmlucygpLmltYWdlTGlzdFtpbmRleF0ucGF5TGlzdC5zcGxpY2UoMCwgMSlbMF0udG9rZW5faWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIDMwMDAwMDAwMDAwMDAwMCxcbiAgICAgICAgICB3aW5kb3cubmVhckFwaS51dGlscy5mb3JtYXQucGFyc2VOZWFyQW1vdW50KCcwLjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMScpXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNob3dTZWxsTW9kZWwodGFyZ2V0LCBpbmRleCkge1xuICAgIHRoaXMuc2VsbE1vZGVsLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICB0aGlzLnNlbGxNb2RlbC5nZXRDaGlsZEJ5TmFtZSgnaWNvblRpdGxlQm94JykuZ2V0Q2hpbGRCeU5hbWUoJ2ljb25UaXRsZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W2luZGV4XS50aXRsZTtcbiAgICB0aGlzLnNlbGxNb2RlbC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc2VsbE1vZGVsLmdldENoaWxkQnlOYW1lKCdjbG9zZScpLm9uKFxuICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGxNb2RlbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuc2VsbE1vZGVsLmdldENoaWxkQnlOYW1lKCdzdWJtaXQnKS5vbihcbiAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgbGV0IG5leHQgPSBTdGF0ZS5pbnMoKS5pbWFnZUxpc3RbaW5kZXhdLnBheUxpc3Quc3BsaWNlKDAsIDEpWzBdO1xuICAgICAgICBTdGF0ZS5pbnMoKS5tYWluTmVhci5jb250cmFjdC5uZnRfYXBwcm92ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY2NvdW50X2lkOiBTdGF0ZS5pbnMoKS5zdG9yZU5lYXJDb25maWcuY29udHJhY3ROYW1lLFxuICAgICAgICAgICAgdG9rZW5faWQ6IG5leHQudG9rZW5faWQsXG4gICAgICAgICAgICBtc2c6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgc2FsZV9jb25kaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgbmVhcjogd2luZG93Lm5lYXJBcGkudXRpbHMuZm9ybWF0LnBhcnNlTmVhckFtb3VudCgnMScpLFxuICAgICAgICAgICAgICAgIHRva2VuX3R5cGU6IG5leHQudG9rZW5faWQuc3BsaXQoJzonKVswXSxcbiAgICAgICAgICAgICAgICBpc19hdWN0aW9uOiAnZmFsc2UnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMDAwMDAwMDAwMDAwMDAsXG4gICAgICAgICAgd2luZG93Lm5lYXJBcGkudXRpbHMuZm9ybWF0LnBhcnNlTmVhckFtb3VudCgnMC4wMDA1MScpXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlclNlbGxTY3JvbGxWaWV3KCkge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIGxldCBmcm9tX2luZGV4ID0gMDtcbiAgICBsZXQgbGltaXQgPSA4MDtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgbGV0IGF3YWl0UmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IFN0YXRlLmlucygpLnN0b3JlTmVhci5jb250cmFjdC5nZXRfc2FsZXNfYnlfb3duZXJfaWQoe1xuICAgICAgICBhY2NvdW50X2lkOiBTdGF0ZS5pbnMoKS5zdG9yZU5lYXIub3duZXJLZXksXG4gICAgICAgIGZyb21faW5kZXg6IGZyb21faW5kZXgudG9TdHJpbmcoKSxcbiAgICAgICAgbGltaXQ6IGxpbWl0XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQocmVzKTtcbiAgICAgIGlmIChmcm9tX2luZGV4ICE9PSAwICYmIHJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb21faW5kZXggKz0gbGltaXQ7XG4gICAgICAgIHJldHVybiBhd2FpdFJlc3VsdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgYXdhaXQgYXdhaXRSZXN1bHQoKTtcbiAgICBsZXQgdHlwZU9iaiA9IHt9O1xuICAgIHJlc3VsdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHR5cGUgPSBpdGVtLnRva2VuX2lkLnNwbGl0KCc6JylbMF07XG4gICAgICBpZiAodHlwZU9ialt0eXBlXSkge1xuICAgICAgICB0eXBlT2JqW3R5cGVdICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlT2JqW3R5cGVdID0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgdHlwZUFyciA9IE9iamVjdC5rZXlzKHR5cGVPYmopO1xuICAgIFN0YXRlLmlucygpXG4gICAgICAuaW1hZ2VMaXN0LmNvbmNhdCgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCF0eXBlQXJyLmluY2x1ZGVzKGl0ZW0udHlwZS50b1N0cmluZygpKSkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdEJveCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2VsbExpc3RCb3gpO1xuICAgICAgICBjb250ZW50LmFkZENoaWxkKGxpc3RCb3gpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9udG91Y2hzdGFydChldmVudCwgdGFyZ2V0LCBpbmRleCkge1xuICAgIHRoaXMubW92ZUljb24gPSBjYy5pbnN0YW50aWF0ZSh0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKSk7XG4gICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICBzY2VuZS5hZGRDaGlsZCh0aGlzLm1vdmVJY29uKTtcbiAgICB0aGlzLm9uVG91Y2htb3ZlKGV2ZW50KTtcbiAgICB0aGlzLm1vdmVJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNobW92ZShldmVudCkge1xuICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgIGxldCBkZWx0YSA9IGV2ZW50LmdldERlbHRhKCk7XG4gICAgdGhpcy5tb3ZlSWNvbi5zZXRQb3NpdGlvbihwb3MueCArIGRlbHRhLngsIHBvcy55ICsgZGVsdGEueSk7XG4gICAgdGhpcy5tb3ZlVGFyZ2V0SW5kZXggPSAtMTtcbiAgICBsZXQgbW92ZUljb25Cb3ggPSB0aGlzLm1vdmVJY29uLmdldEJvdW5kaW5nQm94KCk7XG4gICAgdGhpcy5mdWNMaXN0LmNoaWxkcmVuLmZvckVhY2goKGZ1Y0JveCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucmVjdFJlY3QobW92ZUljb25Cb3gsIGZ1Y0JveC5nZXRCb3VuZGluZ0JveCgpKSkge1xuICAgICAgICB0aGlzLm1vdmVUYXJnZXRJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBvblRvdWNoY2FuY2VsKHN0ZXAgPSAxKSB7XG4gICAgdGhpcy5tb3ZlQ2FuY2VsICs9IHN0ZXA7XG5cbiAgICBpZiAodGhpcy5tb3ZlVGFyZ2V0SW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm1vdmVDYW5jZWwgPSAwO1xuICAgICAgdGhpcy5yZW1vdmVNb3ZlQm94KCk7XG4gICAgICBTdGF0ZS5pbnMoKS5pbWFnZUxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uc29ydCA9PT0gdGhpcy5tb3ZlVGFyZ2V0SW5kZXgpIHtcbiAgICAgICAgICBpdGVtLnNvcnQgPSAtMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBTdGF0ZS5pbnMoKS5pbWFnZUxpc3RbdGhpcy5tb3ZlSW5kZXhdLnNvcnQgPSB0aGlzLm1vdmVUYXJnZXRJbmRleDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFnZUxpc3QnLCBKU09OLnN0cmluZ2lmeShTdGF0ZS5pbnMoKS5pbWFnZUxpc3QpKTtcbiAgICAgIHRoaXMucmVuZGVyRnVjTGlzdCgpO1xuICAgICAgdGhpcy5yZW5kZXJTY3JvbGxWaWV3KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vdmVDYW5jZWwgPT09IDIpIHtcbiAgICAgICAgU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W3RoaXMubW92ZUluZGV4XS5zb3J0ID0gdGhpcy5tb3ZlVGFyZ2V0SW5kZXg7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFnZUxpc3QnLCBKU09OLnN0cmluZ2lmeShTdGF0ZS5pbnMoKS5pbWFnZUxpc3QpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVNb3ZlQm94KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVNb3ZlQm94KCkge1xuICAgIGxldCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5tb3ZlSWNvbik7XG4gICAgdGhpcy5tb3ZlQ2FuY2VsID0gMDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyRnVjTGlzdCgpIHtcbiAgICBpZiAodGhpcy5mdWNMaXN0KSB7XG4gICAgICB0aGlzLmZ1Y0xpc3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICB9XG4gICAgbGV0IGZ1Y0xpc3RMZW5ndGggPSA0O1xuICAgIG5ldyBBcnJheShmdWNMaXN0TGVuZ3RoKS5maWxsKDEpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBmdWMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ1Y0JveCk7XG4gICAgICBsZXQgZGVmYXVsdENvbnRlbnQgPSBmdWMuZ2V0Q2hpbGRCeU5hbWUoJ2RlZmF1bHQnKTtcbiAgICAgIGxldCBmdWNJbmRleCA9IGRlZmF1bHRDb250ZW50LmdldENoaWxkQnlOYW1lKCdpbmRleCcpO1xuICAgICAgbGV0IGZ1Y0xhYmVsID0gZnVjSW5kZXguZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgIGZ1Y0xhYmVsLnN0cmluZyA9IChpbmRleCArIDEpLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmZ1Y0xpc3QuYWRkQ2hpbGQoZnVjKTtcbiAgICB9KTtcbiAgICBTdGF0ZS5pbnMoKS5pbWFnZUxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtLnNvcnQgPj0gMCAmJiBpdGVtLnBheUNvdW50ID4gMCkge1xuICAgICAgICBsZXQgdGFyZ2V0Qm94ID0gdGhpcy5mdWNMaXN0LmNoaWxkcmVuW2l0ZW0uc29ydF07XG4gICAgICAgIGxldCBkZWZhdWx0Q29udGVudCA9IHRhcmdldEJveC5nZXRDaGlsZEJ5TmFtZSgnZGVmYXVsdCcpO1xuICAgICAgICBsZXQgc2V0ID0gdGFyZ2V0Qm94LmdldENoaWxkQnlOYW1lKCdzZXQnKTtcbiAgICAgICAgbGV0IGljb24gPSBzZXQuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKTtcbiAgICAgICAgbGV0IGljb25TcHJpdGUgPSBpY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBsZXQgY291bnQgPSBzZXQuZ2V0Q2hpbGRCeU5hbWUoJ2NvdW50Qm94JykuZ2V0Q2hpbGRCeU5hbWUoJ2NvdW50Jyk7XG4gICAgICAgIGxldCBjb3VudExhYmVsID0gY291bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgY291bnRMYWJlbC5zdHJpbmcgPSAneCAnICsgU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W2luZGV4XS5wYXlDb3VudDtcbiAgICAgICAgZGVmYXVsdENvbnRlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHNldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChpdGVtLnVybCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgIGljb25TcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGxpc3RCb3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RCb3gpO1xuICAgICAgICBsaXN0Qm94LmdldENvbXBvbmVudCgnUGFja0l0ZW0nKS5pbml0Qm94KGl0ZW0pO1xuICAgICAgICB0YXJnZXRCb3gub24oXG4gICAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb25nVGFwQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vbnRvdWNoc3RhcnQoZXZlbnQsIGxpc3RCb3gsIGluZGV4KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICB0YXJnZXRCb3gub24oJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaG1vdmUsIHRoaXMsIHRydWUpO1xuICAgICAgICB0YXJnZXRCb3gub24oXG4gICAgICAgICAgJ3RvdWNoY2FuY2VsJyxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hjYW5jZWwoMik7XG4gICAgICAgICAgICBpZiAodGhpcy5tb3ZlVGFyZ2V0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgIFN0YXRlLmlucygpLmltYWdlTGlzdFtpbmRleF0uc29ydCA9IC0xO1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlckZ1Y0xpc3QoKTtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTY3JvbGxWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgdGFyZ2V0Qm94Lm9uKCd0b3VjaGVuZCcsIHRoaXMucmVtb3ZlTW92ZUJveCwgdGhpcywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uR29CYWNrKCkge1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/StorePay.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '4e35eTB3FJIIKGZFEaWdkLg', 'StorePay');
// src/game/StorePay.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("./common/Common");
var State_1 = require("./model/State");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StorePay = /** @class */ (function (_super) {
    __extends(StorePay, _super);
    function StorePay() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.maskBox = null;
        _this.mask = null;
        _this.closeButton = null;
        _this.icon = null;
        _this.title = null;
        _this.price = null;
        _this.delButton = null;
        _this.count = null;
        _this.addButton = null;
        _this.totalPrice = null;
        _this.buyButton = null;
        _this._count = 1;
        _this._totalPrice = 0;
        _this.boxObj = null;
        return _this;
    }
    StorePay.prototype.onLoad = function () {
        this.closeButton.on('touchstart', this.onClose, this);
        this.buyButton.on('touchstart', this.onBuy, this);
        this.mask.on('touchstart', function (event) {
            event.stopPropagation();
        }, this);
    };
    StorePay.prototype.setImage = function (target, url) {
        cc.resources.load(url, cc.SpriteFrame, function (err, spriteFrame) {
            target.spriteFrame = spriteFrame;
        });
    };
    StorePay.prototype.initBox = function (obj) {
        this.boxObj = obj;
        this.maskBox.active = true;
        this.setImage(this.icon, obj.url);
        this.title.string = obj.title;
        this.price.string = Common_1.formatPrice(obj.price, 2, true) + ' Near';
        this.watchCount();
    };
    StorePay.prototype.watchCount = function () {
        this.count.string = this._count.toString();
        this._totalPrice = this._count * Number(this.boxObj.price);
        this.totalPrice.string = Common_1.formatPrice(this._totalPrice, 2, true) + ' Near';
    };
    StorePay.prototype.onClose = function () {
        this.maskBox.active = false;
        var scene = cc.director.getScene();
        scene.getChildByName('Canvas').removeChild(State_1.default.ins().storePayBox);
    };
    StorePay.prototype.onBuy = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                State_1.default.ins().storeNear.contract.offer({
                    nft_contract_id: State_1.default.ins().storePayObj.nft_contract_id,
                    token_id: State_1.default.ins().storePayObj.token_id
                }, 300000000000000, window.nearApi.utils.format.parseNearAmount(this._totalPrice.toString()));
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], StorePay.prototype, "maskBox", void 0);
    __decorate([
        property(cc.Node)
    ], StorePay.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], StorePay.prototype, "closeButton", void 0);
    __decorate([
        property(cc.Sprite)
    ], StorePay.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], StorePay.prototype, "title", void 0);
    __decorate([
        property(cc.Label)
    ], StorePay.prototype, "price", void 0);
    __decorate([
        property(cc.Node)
    ], StorePay.prototype, "delButton", void 0);
    __decorate([
        property(cc.Label)
    ], StorePay.prototype, "count", void 0);
    __decorate([
        property(cc.Node)
    ], StorePay.prototype, "addButton", void 0);
    __decorate([
        property(cc.Label)
    ], StorePay.prototype, "totalPrice", void 0);
    __decorate([
        property(cc.Node)
    ], StorePay.prototype, "buyButton", void 0);
    StorePay = __decorate([
        ccclass
    ], StorePay);
    return StorePay;
}(cc.Component));
exports.default = StorePay;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9TdG9yZVBheS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBOEM7QUFDOUMsdUNBQWtDO0FBRTVCLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBNkVDO1FBM0VDLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixVQUFJLEdBQWMsSUFBSSxDQUFDO1FBRXZCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsV0FBSyxHQUFhLElBQUksQ0FBQztRQUV2QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixnQkFBVSxHQUFhLElBQUksQ0FBQztRQUU1QixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFDWCxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQUNoQixZQUFNLEdBQUcsSUFBSSxDQUFDOztJQW1EaEIsQ0FBQztJQWpEQyx5QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbEQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQ1YsWUFBWSxFQUNaLFVBQUMsS0FBSztZQUNKLEtB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QyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsyQ0FDSTtJQUV2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7Z0RBQ1M7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsrQ0FDUTtJQXRCUCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBNkU1QjtJQUFELGVBQUM7Q0E3RUQsQUE2RUMsQ0E3RXFDLEVBQUUsQ0FBQyxTQUFTLEdBNkVqRDtrQkE3RW9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4vY29tbW9uL0NvbW1vbic7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9tb2RlbC9TdGF0ZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmVQYXkgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbWFza0JveDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGNsb3NlQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgaWNvbjogY2MuU3ByaXRlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICB0aXRsZTogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHByaWNlOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBkZWxCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGNvdW50OiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBhZGRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHRvdGFsUHJpY2U6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGJ1eUJ1dHRvbjogY2MuTm9kZSA9IG51bGw7XG5cbiAgX2NvdW50ID0gMTtcbiAgX3RvdGFsUHJpY2UgPSAwO1xuICBib3hPYmogPSBudWxsO1xuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmNsb3NlQnV0dG9uLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsb3NlLCB0aGlzKTtcbiAgICB0aGlzLmJ1eUJ1dHRvbi5vbigndG91Y2hzdGFydCcsIHRoaXMub25CdXksIHRoaXMpO1xuICAgIHRoaXMubWFzay5vbihcbiAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgIChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIH0sXG4gICAgICB0aGlzXG4gICAgKTtcbiAgfVxuXG4gIHNldEltYWdlKHRhcmdldCwgdXJsOiBzdHJpbmcpIHtcbiAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHtcbiAgICAgIHRhcmdldC5zcHJpdGVGcmFtZSA9IHNwcml0ZUZyYW1lO1xuICAgIH0pO1xuICB9XG5cbiAgaW5pdEJveChvYmopIHtcbiAgICB0aGlzLmJveE9iaiA9IG9iajtcbiAgICB0aGlzLm1hc2tCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLnNldEltYWdlKHRoaXMuaWNvbiwgb2JqLnVybCk7XG4gICAgdGhpcy50aXRsZS5zdHJpbmcgPSBvYmoudGl0bGU7XG4gICAgdGhpcy5wcmljZS5zdHJpbmcgPSBmb3JtYXRQcmljZShvYmoucHJpY2UsIDIsIHRydWUpICsgJyBOZWFyJztcbiAgICB0aGlzLndhdGNoQ291bnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgd2F0Y2hDb3VudCgpIHtcbiAgICB0aGlzLmNvdW50LnN0cmluZyA9IHRoaXMuX2NvdW50LnRvU3RyaW5nKCk7XG4gICAgdGhpcy5fdG90YWxQcmljZSA9IHRoaXMuX2NvdW50ICogTnVtYmVyKHRoaXMuYm94T2JqLnByaWNlKTtcbiAgICB0aGlzLnRvdGFsUHJpY2Uuc3RyaW5nID0gZm9ybWF0UHJpY2UodGhpcy5fdG90YWxQcmljZSwgMiwgdHJ1ZSkgKyAnIE5lYXInO1xuICB9XG5cbiAgcHJpdmF0ZSBvbkNsb3NlKCkge1xuICAgIHRoaXMubWFza0JveC5hY3RpdmUgPSBmYWxzZTtcbiAgICB2YXIgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgIHNjZW5lLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKS5yZW1vdmVDaGlsZChTdGF0ZS5pbnMoKS5zdG9yZVBheUJveCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9uQnV5KCkge1xuICAgIFN0YXRlLmlucygpLnN0b3JlTmVhci5jb250cmFjdC5vZmZlcihcbiAgICAgIHtcbiAgICAgICAgbmZ0X2NvbnRyYWN0X2lkOiBTdGF0ZS5pbnMoKS5zdG9yZVBheU9iai5uZnRfY29udHJhY3RfaWQsXG4gICAgICAgIHRva2VuX2lkOiBTdGF0ZS5pbnMoKS5zdG9yZVBheU9iai50b2tlbl9pZFxuICAgICAgfSxcbiAgICAgIDMwMDAwMDAwMDAwMDAwMCxcbiAgICAgIHdpbmRvdy5uZWFyQXBpLnV0aWxzLmZvcm1hdC5wYXJzZU5lYXJBbW91bnQodGhpcy5fdG90YWxQcmljZS50b1N0cmluZygpKVxuICAgICk7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/Over.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9859fMkmBtA8ofFDi2WwDrb', 'Over');
// src/game/Over.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("./common/Common");
var GameModel_1 = require("./model/GameModel");
var AudioPlayer_1 = require("../common/audio/AudioPlayer");
var EventDispatch_1 = require("../common/event/EventDispatch");
var State_1 = require("./model/State");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Over = /** @class */ (function (_super) {
    __extends(Over, _super);
    function Over() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.overBox = null;
        _this.mask = null;
        _this.loading = null;
        _this.fail = null;
        _this.win = null;
        _this.count = null;
        _this.countBox = null;
        _this.diff = null;
        _this.reliveCount = null;
        _this.reliveBox = null;
        _this.reloadBox = null;
        _this.goBack = null;
        _this.getMoneyBox = null;
        _this.getMoneyTitle = null;
        return _this;
    }
    Over.prototype.onLoad = function () {
        this.mask.on('touchstart', function () { }, this, true);
    };
    Over.prototype.onEnable = function () {
        return __awaiter(this, void 0, void 0, function () {
            var count, reliveObj;
            return __generator(this, function (_a) {
                this.win.active = false;
                this.fail.active = false;
                this.countBox.active = false;
                this.goBack.on('touchstart', this.onGoBack, this);
                count = GameModel_1.default.ins().score;
                this.count.string = Common_1.formatPrice(count, 0, false, ' ');
                this.loading.active = true;
                cc.tween(this.loading)
                    .repeatForever(cc.tween().by(0.3, { angle: 90 }))
                    .start();
                this.loading.active = false;
                this.countBox.active = true;
                if (Number(count) > Number(State_1.default.ins().mainNear.maxScore)) {
                    State_1.default.ins().mainNear.contract.upload_score({ account_id: State_1.default.ins().mainNear.ownerKey, score: count });
                    this.win.active = true;
                    this.fail.active = false;
                    this.getMoneyTitle.string = "\u4FDD\u6301\u4E00\u5929\u64C2\u4E3B\u540E\u5956\u52B1\u81EA\u52A8\u53D1\u653E";
                    this.getMoneyBox.on('touchstart', this.onGoBack);
                    AudioPlayer_1.AudioPlayer.ins().play_sound('congra');
                }
                else {
                    this.win.active = false;
                    this.fail.active = true;
                    this.reliveBox.once('touchstart', this.onReliveBox, this);
                    this.reloadBox.on('touchstart', this.onReloadBox, this);
                    this.diff.string = Common_1.formatPrice(State_1.default.ins().mainNear.maxScore - count, 0, false, ' ');
                    reliveObj = State_1.default.ins().imageList.find(function (item) {
                        return item.type === 7;
                    });
                    this.reliveCount.string = 'x' + reliveObj.payCount.toString();
                    AudioPlayer_1.AudioPlayer.ins().play_sound('win');
                }
                return [2 /*return*/];
            });
        });
    };
    Over.prototype.onGoBack = function () {
        cc.director.loadScene('main');
    };
    Over.prototype.onReliveBox = function () {
        return __awaiter(this, void 0, void 0, function () {
            var findIndex, tokenId;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        findIndex = State_1.default.ins().imageList.findIndex(function (item, index) {
                            return item.type === 7;
                        });
                        if (!(findIndex > -1)) return [3 /*break*/, 2];
                        tokenId = State_1.default.ins().imageList[findIndex].payList.splice(0, 1)[0].token_id;
                        State_1.default.ins().imageList[findIndex].payCount -= 1;
                        return [4 /*yield*/, State_1.default.ins().mainNear.contract.nft_burn({
                                token_id: tokenId
                            })];
                    case 1:
                        _a.sent();
                        EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_RELIVE);
                        return [3 /*break*/, 2];
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Over.prototype.onReloadBox = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                localStorage.setItem('initScene', 'game');
                State_1.default.ins().mainNear.contract.sign_up({
                    account_id: State_1.default.ins().mainNear.ownerKey
                }, 300000000000000, window.nearApi.utils.format.parseNearAmount('1'));
                return [2 /*return*/];
            });
        });
    };
    __decorate([
        property(cc.Node)
    ], Over.prototype, "overBox", void 0);
    __decorate([
        property(cc.Node)
    ], Over.prototype, "mask", void 0);
    __decorate([
        property(cc.Node)
    ], Over.prototype, "loading", void 0);
    __decorate([
        property(cc.Node)
    ], Over.prototype, "fail", void 0);
    __decorate([
        property(cc.Node)
    ], Over.prototype, "win", void 0);
    __decorate([
        property(cc.Label)
    ], Over.prototype, "count", void 0);
    __decorate([
        property(cc.Node)
    ], Over.prototype, "countBox", void 0);
    __decorate([
        property(cc.Label)
    ], Over.prototype, "diff", void 0);
    __decorate([
        property(cc.Label)
    ], Over.prototype, "reliveCount", void 0);
    __decorate([
        property(cc.Node)
    ], Over.prototype, "reliveBox", void 0);
    __decorate([
        property(cc.Node)
    ], Over.prototype, "reloadBox", void 0);
    __decorate([
        property(cc.Node)
    ], Over.prototype, "goBack", void 0);
    __decorate([
        property(cc.Node)
    ], Over.prototype, "getMoneyBox", void 0);
    __decorate([
        property(cc.Label)
    ], Over.prototype, "getMoneyTitle", void 0);
    Over = __decorate([
        ccclass
    ], Over);
    return Over;
}(cc.Component));
exports.default = Over;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9PdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE4QztBQUM5QywrQ0FBMEM7QUFDMUMsMkRBQTBEO0FBQzFELCtEQUEwRTtBQUMxRSx1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFnR0M7UUE5RkMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQWEsSUFBSSxDQUFDOztJQW9FakMsQ0FBQztJQWxFQyxxQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUssdUJBQVEsR0FBZDs7OztnQkFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMs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dCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4vY29tbW9uL0NvbW1vbic7XG5pbXBvcnQgR2FtZU1vZGVsIGZyb20gJy4vbW9kZWwvR2FtZU1vZGVsJztcbmltcG9ydCB7IEF1ZGlvUGxheWVyIH0gZnJvbSAnLi4vY29tbW9uL2F1ZGlvL0F1ZGlvUGxheWVyJztcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2gsIEV2ZW50X05hbWUgfSBmcm9tICcuLi9jb21tb24vZXZlbnQvRXZlbnREaXNwYXRjaCc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9tb2RlbC9TdGF0ZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBvdmVyQm94OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG1hc2s6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBmYWlsOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHdpbjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgY291bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGNvdW50Qm94OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBkaWZmOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgcmVsaXZlQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHJlbGl2ZUJveDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICByZWxvYWRCb3g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ29CYWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGdldE1vbmV5Qm94OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBnZXRNb25leVRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubWFzay5vbigndG91Y2hzdGFydCcsICgpID0+IHt9LCB0aGlzLCB0cnVlKTtcbiAgfVxuXG4gIGFzeW5jIG9uRW5hYmxlKCkge1xuICAgIHRoaXMud2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZmFpbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNvdW50Qm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZ29CYWNrLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkdvQmFjaywgdGhpcyk7XG5cbiAgICBsZXQgY291bnQgPSBHYW1lTW9kZWwuaW5zKCkuc2NvcmU7XG4gICAgdGhpcy5jb3VudC5zdHJpbmcgPSBmb3JtYXRQcmljZShjb3VudCwgMCwgZmFsc2UsICcgJyk7XG4gICAgdGhpcy5sb2FkaW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgY2MudHdlZW4odGhpcy5sb2FkaW5nKVxuICAgICAgLnJlcGVhdEZvcmV2ZXIoY2MudHdlZW4oKS5ieSgwLjMsIHsgYW5nbGU6IDkwIH0pKVxuICAgICAgLnN0YXJ0KCk7XG4gICAgdGhpcy5sb2FkaW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY291bnRCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoTnVtYmVyKGNvdW50KSA+IE51bWJlcihTdGF0ZS5pbnMoKS5tYWluTmVhci5tYXhTY29yZSkpIHtcbiAgICAgIFN0YXRlLmlucygpLm1haW5OZWFyLmNvbnRyYWN0LnVwbG9hZF9zY29yZSh7IGFjY291bnRfaWQ6IFN0YXRlLmlucygpLm1haW5OZWFyLm93bmVyS2V5LCBzY29yZTogY291bnQgfSk7XG4gICAgICB0aGlzLndpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5mYWlsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5nZXRNb25leVRpdGxlLnN0cmluZyA9IGDkv53mjIHkuIDlpKnmk4LkuLvlkI7lpZblirHoh6rliqjlj5HmlL5gO1xuICAgICAgdGhpcy5nZXRNb25leUJveC5vbigndG91Y2hzdGFydCcsIHRoaXMub25Hb0JhY2spO1xuICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnY29uZ3JhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5mYWlsLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnJlbGl2ZUJveC5vbmNlKCd0b3VjaHN0YXJ0JywgdGhpcy5vblJlbGl2ZUJveCwgdGhpcyk7XG4gICAgICB0aGlzLnJlbG9hZEJveC5vbigndG91Y2hzdGFydCcsIHRoaXMub25SZWxvYWRCb3gsIHRoaXMpO1xuICAgICAgdGhpcy5kaWZmLnN0cmluZyA9IGZvcm1hdFByaWNlKFN0YXRlLmlucygpLm1haW5OZWFyLm1heFNjb3JlIC0gY291bnQsIDAsIGZhbHNlLCAnICcpO1xuICAgICAgbGV0IHJlbGl2ZU9iaiA9IFN0YXRlLmlucygpLmltYWdlTGlzdC5maW5kKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLnR5cGUgPT09IDc7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVsaXZlQ291bnQuc3RyaW5nID0gJ3gnICsgcmVsaXZlT2JqLnBheUNvdW50LnRvU3RyaW5nKCk7XG4gICAgICBBdWRpb1BsYXllci5pbnMoKS5wbGF5X3NvdW5kKCd3aW4nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uR29CYWNrKCkge1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xuICB9XG4gIHByaXZhdGUgYXN5bmMgb25SZWxpdmVCb3goKSB7XG4gICAgbGV0IGZpbmRJbmRleCA9IFN0YXRlLmlucygpLmltYWdlTGlzdC5maW5kSW5kZXgoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS50eXBlID09PSA3O1xuICAgIH0pO1xuICAgIGlmIChmaW5kSW5kZXggPiAtMSkge1xuICAgICAgbGV0IHRva2VuSWQgPSBTdGF0ZS5pbnMoKS5pbWFnZUxpc3RbZmluZEluZGV4XS5wYXlMaXN0LnNwbGljZSgwLCAxKVswXS50b2tlbl9pZDtcbiAgICAgIFN0YXRlLmlucygpLmltYWdlTGlzdFtmaW5kSW5kZXhdLnBheUNvdW50IC09IDE7XG4gICAgICBhd2FpdCBTdGF0ZS5pbnMoKS5tYWluTmVhci5jb250cmFjdC5uZnRfYnVybih7XG4gICAgICAgIHRva2VuX2lkOiB0b2tlbklkXG4gICAgICB9KTtcbiAgICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuZmlyZShFdmVudF9OYW1lLkdBTUVfUkVMSVZFKTtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGFzeW5jIG9uUmVsb2FkQm94KCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0U2NlbmUnLCAnZ2FtZScpO1xuICAgIFN0YXRlLmlucygpLm1haW5OZWFyLmNvbnRyYWN0LnNpZ25fdXAoXG4gICAgICB7XG4gICAgICAgIGFjY291bnRfaWQ6IFN0YXRlLmlucygpLm1haW5OZWFyLm93bmVyS2V5XG4gICAgICB9LFxuICAgICAgMzAwMDAwMDAwMDAwMDAwLFxuICAgICAgd2luZG93Lm5lYXJBcGkudXRpbHMuZm9ybWF0LnBhcnNlTmVhckFtb3VudCgnMScpXG4gICAgKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/base/SingletonClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '67b6bxkrdtJJph7b4mJgN8P', 'SingletonClass');
// src/common/base/SingletonClass.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonClass = /** @class */ (function () {
    function SingletonClass() {
    }
    SingletonClass.ins = function () {
        if (!this._ins) {
            this._ins = new this;
        }
        return this._ins;
    };
    return SingletonClass;
}());
exports.default = SingletonClass;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2Jhc2UvU2luZ2xldG9uQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUNJO0lBQTBCLENBQUM7SUFFYixrQkFBRyxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZXRvbkNsYXNzIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7IH1cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zOiBTaW5nbGV0b25DbGFzcztcbiAgICBwdWJsaWMgc3RhdGljIGlucygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2lucyA9IG5ldyB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnM7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/audio/AudioPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ded9VqaA5MjZErune4OGJZ', 'AudioPlayer');
// src/common/audio/AudioPlayer.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AUDIO_CONFIG = exports.AudioPlayer = void 0;
var loader_mgr_1 = require("../loader/loader_mgr");
var utils = require("../util");
var SingletonClass_1 = require("../base/SingletonClass");
var LocalStorage_1 = require("../localStorage/LocalStorage");
var MUSIC_PATH = "sound/{0}";
var SOUND_PATH = "sound/{0}";
var AudioPlayer = /** @class */ (function (_super) {
    __extends(AudioPlayer, _super);
    function AudioPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clip_cache = new Map();
        _this.loading_map = new Map();
        _this.music_id = -1;
        _this.music_volume = 0.5;
        _this.music_mute = false;
        _this.sound_ids = [];
        _this.sound_volume = 1;
        _this.sound_mute = false;
        return _this;
    }
    AudioPlayer.ins = function () {
        return _super.ins.call(this);
    };
    // init() {
    //     this.set_music_mute(LocalStorage.ins().getLocal(CONST_STORAGE_KEY.KEY_MUSIC_IS_MUTE, false));
    //     this.set_music_volume(LocalStorage.ins().getLocal(CONST_STORAGE_KEY.KEY_MUSIC_VOLUME, 0.5));
    //     this.set_sound_mute(LocalStorage.ins().getLocal(CONST_STORAGE_KEY.KEY_SOUND_IS_MUTE, false));
    //     this.set_sound_volume(LocalStorage.ins().getLocal(CONST_STORAGE_KEY.KEY_SOUND_VOLUME, 1));
    // }
    AudioPlayer.prototype.flush = function () {
        // wxapi.wxStorage.set(Consts.Game.SoundMute, this.sound_mute ? "1" : "0");
    };
    //同时只能播放一个
    AudioPlayer.prototype.play_music = function (name) {
        if (this.music_id >= 0) {
            this.stop_music();
        }
        var path = utils.strfmt(MUSIC_PATH, name);
        this.curr_music = name;
        if (this.music_mute) {
            // cc.log("music is mute");
            return;
        }
        var clip = this.clip_cache.get(path);
        if (clip) {
            this.play_clip(clip, this.music_volume, true, AudioType.Music);
        }
        else {
            var task = { type: AudioType.Music, name: name, path: path, volume: this.music_volume, loop: true };
            this.load_task(task);
        }
    };
    AudioPlayer.prototype.stop_music = function () {
        if (this.music_id < 0) {
            // cc.log("no music is playing");
            return;
        }
        cc.audioEngine.stop(this.music_id);
        this.music_id = -1;
    };
    AudioPlayer.prototype.get_music_mute = function () {
        return this.music_mute;
    };
    AudioPlayer.prototype.set_music_mute = function (is_mute) {
        this.music_mute = is_mute;
        LocalStorage_1.LocalStorage.ins().setLocal(LocalStorage_1.CONST_STORAGE_KEY.KEY_MUSIC_IS_MUTE, is_mute);
        if (this.music_id < 0) {
            if (!is_mute && this.curr_music) {
                this.play_music(this.curr_music);
            }
            return;
        }
        if (is_mute) {
            cc.audioEngine.pause(this.music_id);
        }
        else {
            cc.audioEngine.resume(this.music_id);
        }
    };
    //0~1
    AudioPlayer.prototype.set_music_volume = function (volume) {
        this.music_volume = volume;
        if (this.music_id >= 0) {
            cc.audioEngine.setVolume(this.music_id, volume);
        }
        LocalStorage_1.LocalStorage.ins().setLocal(LocalStorage_1.CONST_STORAGE_KEY.KEY_MUSIC_VOLUME, volume);
    };
    AudioPlayer.prototype.load_task = function (task) {
        var path = task.path;
        if (this.loading_map.get(path)) {
            return;
        }
        this.loading_map.set(path, true);
        loader_mgr_1.loader_mgr.get_inst().loadRawAsset(path, utils.gen_handler(this.on_clip_loaded, this, task));
    };
    AudioPlayer.prototype.on_clip_loaded = function (task, clip) {
        this.clip_cache.set(task.path, clip);
        if (task.type == AudioType.Music && task.name != this.curr_music) {
            return;
        }
        this.play_clip(clip, task.volume, task.loop, task.type, task.cb);
    };
    AudioPlayer.prototype.play_clip = function (clip, volume, loop, type, cb) {
        var _this = this;
        var aid = cc.audioEngine.play(clip, loop, volume);
        if (type == AudioType.Music) {
            this.music_id = aid;
        }
        else if (type == AudioType.Sound) {
            this.sound_ids.push(aid);
            cc.audioEngine.setFinishCallback(aid, function () {
                _this.on_sound_finished(aid);
                cb && cb.exec();
            });
        }
    };
    AudioPlayer.prototype.on_sound_finished = function (aid) {
        var idx = this.sound_ids.findIndex(function (id) {
            return id == aid;
        });
        if (idx != -1) {
            this.sound_ids.splice(idx, 1);
        }
    };
    //可同时播放多个
    AudioPlayer.prototype.play_sound = function (name, cb) {
        if (this.sound_mute) {
            // cc.log("sound is mute");
            return;
        }
        var path = utils.strfmt(SOUND_PATH, name);
        var clip = this.clip_cache.get(path);
        if (clip) {
            this.play_clip(clip, this.sound_volume, false, AudioType.Sound, cb);
        }
        else {
            var task = { type: AudioType.Sound, name: name, path: path, volume: this.sound_volume, loop: false, cb: cb };
            this.load_task(task);
        }
    };
    AudioPlayer.prototype.get_sound_mute = function () {
        return this.sound_mute;
    };
    AudioPlayer.prototype.set_sound_mute = function (is_mute) {
        this.sound_mute = is_mute;
        this.sound_ids.forEach(function (sid) {
            if (is_mute) {
                cc.audioEngine.pause(sid);
            }
            else {
                cc.audioEngine.resume(sid);
            }
        });
        LocalStorage_1.LocalStorage.ins().setLocal(LocalStorage_1.CONST_STORAGE_KEY.KEY_SOUND_IS_MUTE, is_mute);
    };
    //0~1
    AudioPlayer.prototype.set_sound_volume = function (volume) {
        this.sound_volume = volume;
        this.sound_ids.forEach(function (sid) {
            cc.audioEngine.setVolume(sid, volume);
        });
        LocalStorage_1.LocalStorage.ins().setLocal(LocalStorage_1.CONST_STORAGE_KEY.KEY_SOUND_VOLUME, volume);
    };
    AudioPlayer.prototype.stop_sound = function () {
        this.sound_ids.forEach(function (sid) {
            cc.audioEngine.stop(sid);
        });
        this.sound_ids.length = 0;
    };
    AudioPlayer.prototype.clear_cache = function () {
        this.clip_cache.forEach(function (clip, key) {
            loader_mgr_1.loader_mgr.get_inst().release(clip);
        });
        this.clip_cache.clear();
        this.loading_map.clear();
        cc.audioEngine.uncacheAll();
    };
    return AudioPlayer;
}(SingletonClass_1.default));
exports.AudioPlayer = AudioPlayer;
var AudioType;
(function (AudioType) {
    AudioType[AudioType["Music"] = 1] = "Music";
    AudioType[AudioType["Sound"] = 2] = "Sound";
})(AudioType || (AudioType = {}));
exports.AUDIO_CONFIG = {
    Audio_Btn: "button",
    Audio_levelup: "levelup",
    Audio_star: "star",
    Audio_balls: "balls",
    Audio_Bgm: "bg",
    Audio_gameover: "gameover",
    Audio_win: "win",
    Audio_congra: "congra",
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2F1ZGlvL0F1ZGlvUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBaUQ7QUFDakQsK0JBQWdDO0FBQ2hDLHlEQUFvRDtBQUNwRCw2REFBK0U7QUFFL0UsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDO0FBQy9CLElBQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQztBQUUvQjtJQUFpQywrQkFBYztJQUEvQztRQUFBLHFFQTRMQztRQTNMVyxnQkFBVSxHQUE4QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2xELGlCQUFXLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUFHOUMsY0FBUSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBQzNCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7O0lBaUx4QyxDQUFDO0lBOUtVLGVBQUcsR0FBVjtRQUNJLE9BQU8sT0FBTSxHQUFHLFdBQWlCLENBQUM7SUFDdEMsQ0FBQztJQUVELFdBQVc7SUFDWCxvR0FBb0c7SUFDcEcsbUdBQW1HO0lBQ25HLG9HQUFvRztJQUNwRyxpR0FBaUc7SUFDakcsSUFBSTtJQUVKLDJCQUFLLEdBQUw7UUFDSSwyRUFBMkU7SUFDL0UsQ0FBQztJQUVELFVBQVU7SUFDVixnQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFB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UUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0E1TEEsQUE0TEMsQ0E1TGdDLHdCQUFjLEdBNEw5QztBQTVMWSxrQ0FBVztBQThMeEIsSUFBSyxTQUdKO0FBSEQsV0FBSyxTQUFTO0lBQ1YsMkNBQVMsQ0FBQTtJQUNULDJDQUFTLENBQUE7QUFDYixDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtBQVdZLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxTQUFTO0lBQ3hCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsY0FBYyxFQUFFLFVBQVU7SUFDMUIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsWUFBWSxFQUFFLFFBQVE7Q0FFekIsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRlcl9tZ3IgfSBmcm9tIFwiLi4vbG9hZGVyL2xvYWRlcl9tZ3JcIlxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4uL3V0aWxcIlxuaW1wb3J0IFNpbmdsZXRvbkNsYXNzIGZyb20gXCIuLi9iYXNlL1NpbmdsZXRvbkNsYXNzXCI7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIENPTlNUX1NUT1JBR0VfS0VZIH0gZnJvbSBcIi4uL2xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2VcIjtcblxuY29uc3QgTVVTSUNfUEFUSCA9IFwic291bmQvezB9XCI7XG5jb25zdCBTT1VORF9QQVRIID0gXCJzb3VuZC97MH1cIjtcblxuZXhwb3J0IGNsYXNzIEF1ZGlvUGxheWVyIGV4dGVuZHMgU2luZ2xldG9uQ2xhc3Mge1xuICAgIHByaXZhdGUgY2xpcF9jYWNoZTogTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPiA9IG5ldyBNYXAoKTtcbiAgICBwcml2YXRlIGxvYWRpbmdfbWFwOiBNYXA8c3RyaW5nLCBib29sZWFuPiA9IG5ldyBNYXAoKTtcblxuICAgIHByaXZhdGUgY3Vycl9tdXNpYzogc3RyaW5nO1xuICAgIHByaXZhdGUgbXVzaWNfaWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgbXVzaWNfdm9sdW1lOiBudW1iZXIgPSAwLjU7XG4gICAgcHJpdmF0ZSBtdXNpY19tdXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHNvdW5kX2lkczogbnVtYmVyW10gPSBbXTtcbiAgICBwcml2YXRlIHNvdW5kX3ZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIHNvdW5kX211dGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgc3RhdGljIGlucygpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmlucygpIGFzIEF1ZGlvUGxheWVyO1xuICAgIH1cblxuICAgIC8vIGluaXQoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0X211c2ljX211dGUoTG9jYWxTdG9yYWdlLmlucygpLmdldExvY2FsKENPTlNUX1NUT1JBR0VfS0VZLktFWV9NVVNJQ19JU19NVVRFLCBmYWxzZSkpO1xuICAgIC8vICAgICB0aGlzLnNldF9tdXNpY192b2x1bWUoTG9jYWxTdG9yYWdlLmlucygpLmdldExvY2FsKENPTlNUX1NUT1JBR0VfS0VZLktFWV9NVVNJQ19WT0xVTUUsIDAuNSkpO1xuICAgIC8vICAgICB0aGlzLnNldF9zb3VuZF9tdXRlKExvY2FsU3RvcmFnZS5pbnMoKS5nZXRMb2NhbChDT05TVF9TVE9SQUdFX0tFWS5LRVlfU09VTkRfSVNfTVVURSwgZmFsc2UpKTtcbiAgICAvLyAgICAgdGhpcy5zZXRfc291bmRfdm9sdW1lKExvY2FsU3RvcmFnZS5pbnMoKS5nZXRMb2NhbChDT05TVF9TVE9SQUdFX0tFWS5LRVlfU09VTkRfVk9MVU1FLCAxKSk7XG4gICAgLy8gfVxuXG4gICAgZmx1c2goKSB7XG4gICAgICAgIC8vIHd4YXBpLnd4U3RvcmFnZS5zZXQoQ29uc3RzLkdhbWUuU291bmRNdXRlLCB0aGlzLnNvdW5kX211dGUgPyBcIjFcIiA6IFwiMFwiKTtcbiAgICB9XG5cbiAgICAvL+WQjOaXtuWPquiDveaSreaUvuS4gOS4qlxuICAgIHBsYXlfbXVzaWMobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLm11c2ljX2lkID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcF9tdXNpYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhdGggPSB1dGlscy5zdHJmbXQoTVVTSUNfUEFUSCwgbmFtZSk7XG4gICAgICAgIHRoaXMuY3Vycl9tdXNpYyA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHRoaXMubXVzaWNfbXV0ZSkge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwibXVzaWMgaXMgbXV0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2xpcCA9IHRoaXMuY2xpcF9jYWNoZS5nZXQocGF0aCk7XG4gICAgICAgIGlmIChjbGlwKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlfY2xpcChjbGlwLCB0aGlzLm11c2ljX3ZvbHVtZSwgdHJ1ZSwgQXVkaW9UeXBlLk11c2ljKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0YXNrOiBBdWRpb1BsYXlUYXNrID0geyB0eXBlOiBBdWRpb1R5cGUuTXVzaWMsIG5hbWU6IG5hbWUsIHBhdGg6IHBhdGgsIHZvbHVtZTogdGhpcy5tdXNpY192b2x1bWUsIGxvb3A6IHRydWUgfTtcbiAgICAgICAgICAgIHRoaXMubG9hZF90YXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcF9tdXNpYygpIHtcbiAgICAgICAgaWYgKHRoaXMubXVzaWNfaWQgPCAwKSB7XG4gICAgICAgICAgICAvLyBjYy5sb2coXCJubyBtdXNpYyBpcyBwbGF5aW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5tdXNpY19pZCk7XG4gICAgICAgIHRoaXMubXVzaWNfaWQgPSAtMTtcbiAgICB9XG5cbiAgICBnZXRfbXVzaWNfbXV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVzaWNfbXV0ZTtcbiAgICB9XG5cbiAgICBzZXRfbXVzaWNfbXV0ZShpc19tdXRlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubXVzaWNfbXV0ZSA9IGlzX211dGU7XG4gICAgICAgIExvY2FsU3RvcmFnZS5pbnMoKS5zZXRMb2NhbChDT05TVF9TVE9SQUdFX0tFWS5LRVlfTVVTSUNfSVNfTVVURSwgaXNfbXV0ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMubXVzaWNfaWQgPCAwKSB7XG4gICAgICAgICAgICBpZiAoIWlzX211dGUgJiYgdGhpcy5jdXJyX211c2ljKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5X211c2ljKHRoaXMuY3Vycl9tdXNpYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzX211dGUpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMubXVzaWNfaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMubXVzaWNfaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8wfjFcbiAgICBzZXRfbXVzaWNfdm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubXVzaWNfdm9sdW1lID0gdm9sdW1lO1xuICAgICAgICBpZiAodGhpcy5tdXNpY19pZCA+PSAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5tdXNpY19pZCwgdm9sdW1lKTtcbiAgICAgICAgfVxuICAgICAgICBMb2NhbFN0b3JhZ2UuaW5zKCkuc2V0TG9jYWwoQ09OU1RfU1RPUkFHRV9LRVkuS0VZX01VU0lDX1ZPTFVNRSwgdm9sdW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRfdGFzayh0YXNrOiBBdWRpb1BsYXlUYXNrKSB7XG4gICAgICAgIGxldCBwYXRoID0gdGFzay5wYXRoO1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nX21hcC5nZXQocGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmdfbWFwLnNldChwYXRoLCB0cnVlKTtcbiAgICAgICAgbG9hZGVyX21nci5nZXRfaW5zdCgpLmxvYWRSYXdBc3NldChwYXRoLCB1dGlscy5nZW5faGFuZGxlcih0aGlzLm9uX2NsaXBfbG9hZGVkLCB0aGlzLCB0YXNrKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbl9jbGlwX2xvYWRlZCh0YXNrOiBBdWRpb1BsYXlUYXNrLCBjbGlwOiBjYy5BdWRpb0NsaXApIHtcbiAgICAgICAgdGhpcy5jbGlwX2NhY2hlLnNldCh0YXNrLnBhdGgsIGNsaXApO1xuICAgICAgICBpZiAodGFzay50eXBlID09IEF1ZGlvVHlwZS5NdXNpYyAmJiB0YXNrLm5hbWUgIT0gdGhpcy5jdXJyX211c2ljKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5X2NsaXAoY2xpcCwgdGFzay52b2x1bWUsIHRhc2subG9vcCwgdGFzay50eXBlLCB0YXNrLmNiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlfY2xpcChjbGlwLCB2b2x1bWU6IG51bWJlciwgbG9vcDogYm9vbGVhbiwgdHlwZTogQXVkaW9UeXBlLCBjYj86IHV0aWxzLmhhbmRsZXIpIHtcbiAgICAgICAgbGV0IGFpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgbG9vcCwgdm9sdW1lKTtcbiAgICAgICAgaWYgKHR5cGUgPT0gQXVkaW9UeXBlLk11c2ljKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljX2lkID0gYWlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gQXVkaW9UeXBlLlNvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kX2lkcy5wdXNoKGFpZCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhaWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uX3NvdW5kX2ZpbmlzaGVkKGFpZCk7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IuZXhlYygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uX3NvdW5kX2ZpbmlzaGVkKGFpZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLnNvdW5kX2lkcy5maW5kSW5kZXgoKGlkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaWQgPT0gYWlkO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlkeCAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZF9pZHMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WPr+WQjOaXtuaSreaUvuWkmuS4qlxuICAgIHBsYXlfc291bmQobmFtZTogc3RyaW5nLCBjYj86IHV0aWxzLmhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRfbXV0ZSkge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwic291bmQgaXMgbXV0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGF0aCA9IHV0aWxzLnN0cmZtdChTT1VORF9QQVRILCBuYW1lKTtcbiAgICAgICAgbGV0IGNsaXAgPSB0aGlzLmNsaXBfY2FjaGUuZ2V0KHBhdGgpO1xuICAgICAgICBpZiAoY2xpcCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5X2NsaXAoY2xpcCwgdGhpcy5zb3VuZF92b2x1bWUsIGZhbHNlLCBBdWRpb1R5cGUuU291bmQsIGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0YXNrOiBBdWRpb1BsYXlUYXNrID0geyB0eXBlOiBBdWRpb1R5cGUuU291bmQsIG5hbWU6IG5hbWUsIHBhdGg6IHBhdGgsIHZvbHVtZTogdGhpcy5zb3VuZF92b2x1bWUsIGxvb3A6IGZhbHNlLCBjYiB9O1xuICAgICAgICAgICAgdGhpcy5sb2FkX3Rhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRfc291bmRfbXV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291bmRfbXV0ZTtcbiAgICB9XG5cbiAgICBzZXRfc291bmRfbXV0ZShpc19tdXRlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc291bmRfbXV0ZSA9IGlzX211dGU7XG4gICAgICAgIHRoaXMuc291bmRfaWRzLmZvckVhY2goKHNpZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzX211dGUpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZShzaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUoc2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIExvY2FsU3RvcmFnZS5pbnMoKS5zZXRMb2NhbChDT05TVF9TVE9SQUdFX0tFWS5LRVlfU09VTkRfSVNfTVVURSwgaXNfbXV0ZSk7XG4gICAgfVxuXG4gICAgLy8wfjFcbiAgICBzZXRfc291bmRfdm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc291bmRfdm9sdW1lID0gdm9sdW1lO1xuICAgICAgICB0aGlzLnNvdW5kX2lkcy5mb3JFYWNoKChzaWQpID0+IHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShzaWQsIHZvbHVtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBMb2NhbFN0b3JhZ2UuaW5zKCkuc2V0TG9jYWwoQ09OU1RfU1RPUkFHRV9LRVkuS0VZX1NPVU5EX1ZPTFVNRSwgdm9sdW1lKTtcbiAgICB9XG5cbiAgICBzdG9wX3NvdW5kKCkge1xuICAgICAgICB0aGlzLnNvdW5kX2lkcy5mb3JFYWNoKChzaWQpID0+IHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3Aoc2lkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc291bmRfaWRzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgY2xlYXJfY2FjaGUoKSB7XG4gICAgICAgIHRoaXMuY2xpcF9jYWNoZS5mb3JFYWNoKChjbGlwLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxvYWRlcl9tZ3IuZ2V0X2luc3QoKS5yZWxlYXNlKGNsaXApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGlwX2NhY2hlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMubG9hZGluZ19tYXAuY2xlYXIoKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUudW5jYWNoZUFsbCgpO1xuICAgIH1cbn1cblxuZW51bSBBdWRpb1R5cGUge1xuICAgIE11c2ljID0gMSxcbiAgICBTb3VuZCA9IDIsXG59XG5cbmludGVyZmFjZSBBdWRpb1BsYXlUYXNrIHtcbiAgICB0eXBlOiBBdWRpb1R5cGU7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICB2b2x1bWU6IG51bWJlcjtcbiAgICBsb29wOiBib29sZWFuO1xuICAgIGNiPzogdXRpbHMuaGFuZGxlcjtcbn1cblxuZXhwb3J0IGNvbnN0IEFVRElPX0NPTkZJRyA9IHtcbiAgICBBdWRpb19CdG46IFwiYnV0dG9uXCIsXG4gICAgQXVkaW9fbGV2ZWx1cDogXCJsZXZlbHVwXCIsXG4gICAgQXVkaW9fc3RhcjogXCJzdGFyXCIsXG4gICAgQXVkaW9fYmFsbHM6IFwiYmFsbHNcIixcbiAgICBBdWRpb19CZ206IFwiYmdcIixcbiAgICBBdWRpb19nYW1lb3ZlcjogXCJnYW1lb3ZlclwiLFxuICAgIEF1ZGlvX3dpbjogXCJ3aW5cIixcbiAgICBBdWRpb19jb25ncmE6IFwiY29uZ3JhXCIsXG5cbn0iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/random/RandomUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '9dcebZ21S1CcoCfjaM6tclf', 'RandomUtil');
// src/common/random/RandomUtil.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomUtil = exports.RandomSeedType = void 0;
var SingletonClass_1 = require("../base/SingletonClass");
var RandomSeedType;
(function (RandomSeedType) {
    RandomSeedType[RandomSeedType["UNDEFINED"] = 0] = "UNDEFINED";
})(RandomSeedType = exports.RandomSeedType || (exports.RandomSeedType = {}));
var RandomUtil = /** @class */ (function (_super) {
    __extends(RandomUtil, _super);
    function RandomUtil() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._seeds = [];
        _this._seedIndex = [];
        _this._selectedIndexes = [];
        _this._randomSeed = '0123456789abcdef';
        return _this;
    }
    RandomUtil.ins = function () {
        return _super.ins.call(this);
    };
    RandomUtil.prototype.init = function (randomSeed) {
        if (randomSeed === void 0) { randomSeed = '0123456789abcdef'; }
        this._randomSeed = randomSeed;
        var keysAll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this._seeds = [];
        this._selectedIndexes = [];
        this._seedIndex = [];
        for (var _i = 0, keysAll_1 = keysAll; _i < keysAll_1.length; _i++) {
            var key = keysAll_1[_i];
            this.resetSeed(key);
        }
    };
    RandomUtil.prototype.resetSeed = function (randomSeedType) {
        this._seeds[randomSeedType] = [];
        this._selectedIndexes[randomSeedType] = [];
        this._seedIndex[randomSeedType] = 0;
        for (var i = 0; i < this._randomSeed.length; i++) {
            var fix = parseInt(this._randomSeed[i], 36) || 0;
            fix = (9301 * fix + 49297) % (10485763) || 0;
            this._seeds[randomSeedType].push(fix);
        }
    };
    RandomUtil.prototype.randomNum = function (min, max, randomSeedType) {
        if (randomSeedType === void 0) { randomSeedType = RandomSeedType.UNDEFINED; }
        if (min > max)
            max = min;
        var seedIndex = this._seedIndex[randomSeedType] % this._randomSeed.length;
        var ret = min + (this._seeds[randomSeedType][seedIndex]) % (max - min + 1);
        this._seeds[randomSeedType][seedIndex] = (9301 * this._seeds[randomSeedType][seedIndex] + 49297) % (10485763) || 0;
        this._seedIndex[randomSeedType]++;
        this._selectedIndexes[randomSeedType].push(ret);
        return ret;
    };
    RandomUtil.prototype.randomNumArray = function (min, max, count, randomSeedType) {
        if (randomSeedType === void 0) { randomSeedType = RandomSeedType.UNDEFINED; }
        if (min > max)
            max = min;
        var ret = [];
        if (max - min + 1 < count) {
            count = max - min + 1;
        }
        for (var i = 0; i < count;) {
            var randomNum = this.randomNum(min, max, randomSeedType);
            if (ret.indexOf(randomNum) < 0) {
                ret.push(randomNum);
                i++;
            }
        }
        return ret;
    };
    /**百分比概率 */
    RandomUtil.prototype.getPercentProbability = function (percent, randomSeedType) {
        if (randomSeedType === void 0) { randomSeedType = RandomSeedType.UNDEFINED; }
        var randomNum = this.randomNum(1, 100, randomSeedType);
        // egret.log("getPercentProbability", percent, randomNum)
        return (percent >= randomNum);
    };
    return RandomUtil;
}(SingletonClass_1.default));
exports.RandomUtil = RandomUtil;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3JhbmRvbS9SYW5kb21VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFFcEQsSUFBWSxjQUVYO0FBRkQsV0FBWSxjQUFjO0lBQ3RCLDZEQUFhLENBQUE7QUFDakIsQ0FBQyxFQUZXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBRXpCO0FBRUQ7SUFBZ0MsOEJBQWM7SUFBOUM7UUFBQSxxRUFxRUM7UUFoRVcsWUFBTSxHQUFlLEVBQUUsQ0FBQTtRQUN2QixnQkFBVSxHQUFhLEVBQUUsQ0FBQztRQUMxQixzQkFBZ0IsR0FBZSxFQUFFLENBQUE7UUFDakMsaUJBQVcsR0FBRyxrQkFBa0IsQ0FBQTs7SUE2RDVDLENBQUM7SUFwRWlCLGNBQUcsR0FBakI7UUFDSSxPQUFPLE9BQU0sR0FBRyxXQUFnQixDQUFBO0lBQ3BDLENBQUM7SUFPTSx5QkFBSSxHQUFYLFVBQVksVUFBdUM7UUFBdkMsMkJBQUEsRUFBQSwrQkFBdUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFFOUIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFrQixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtZQUF0QixJQUFNLEdBQUcsZ0JBQUE7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3RCO0lBQ0wsQ0FBQztJQUVNLDhCQUFTLEdBQWhCLFVBQWlCLGNBQThCO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RELElBQUksR0FBRyxHQUFXLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RCxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3hDO0lBQ0wsQ0FBQztJQUVNLDhCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxHQUFXLEVBQUUsY0FBeUQ7UUFBekQsK0JBQUEsRUFBQSxpQkFBaUMsY0FBYyxDQUFDLFNBQVM7UUFDaEcsSUFBSSxHQUFHLEdBQUcsR0FBRztZQUNULEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDYixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFBO1FBQzNFLElBQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xILElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9DLE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQztJQUVNLG1DQUFjLEdBQXJCLFVBQXNCLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYSxFQUFFLGNBQXlEO1FBQXpELCtCQUFBLEVBQUEsaUJBQWlDLGNBQWMsQ0FBQyxTQUFTO1FBQ3BILElBQUksR0FBRyxHQUFHLEdBQUc7WUFDVCxHQUFHLEdBQUcsR0FBRyxDQUFBO1FBQ2IsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBQ2QsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDdkIsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1NBQ3hCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRztZQUN4QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUE7WUFDMUQsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDbkIsQ0FBQyxFQUFFLENBQUM7YUFDUDtTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDZCxDQUFDO0lBRUQsV0FBVztJQUNKLDBDQUFxQixHQUE1QixVQUE2QixPQUFlLEVBQUUsY0FBeUQ7UUFBekQsK0JBQUEsRUFBQSxpQkFBaUMsY0FBYyxDQUFDLFNBQVM7UUFDbkcsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELHlEQUF5RDtRQUN6RCxPQUFPLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFTCxpQkFBQztBQUFELENBckVBLEFBcUVDLENBckUrQix3QkFBYyxHQXFFN0M7QUFyRVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uQ2xhc3MgZnJvbSBcIi4uL2Jhc2UvU2luZ2xldG9uQ2xhc3NcIjtcblxuZXhwb3J0IGVudW0gUmFuZG9tU2VlZFR5cGUge1xuICAgIFVOREVGSU5FRCA9IDAsXG59XG5cbmV4cG9ydCBjbGFzcyBSYW5kb21VdGlsIGV4dGVuZHMgU2luZ2xldG9uQ2xhc3Mge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuaW5zKCkgYXMgUmFuZG9tVXRpbFxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlZWRzOiBudW1iZXJbXVtdID0gW11cbiAgICBwcml2YXRlIF9zZWVkSW5kZXg6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleGVzOiBudW1iZXJbXVtdID0gW11cbiAgICBwcml2YXRlIF9yYW5kb21TZWVkID0gJzAxMjM0NTY3ODlhYmNkZWYnXG5cbiAgICBwdWJsaWMgaW5pdChyYW5kb21TZWVkOiBzdHJpbmcgPSAnMDEyMzQ1Njc4OWFiY2RlZicpIHtcbiAgICAgICAgdGhpcy5fcmFuZG9tU2VlZCA9IHJhbmRvbVNlZWQ7XG5cbiAgICAgICAgY29uc3Qga2V5c0FsbCA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF1cbiAgICAgICAgdGhpcy5fc2VlZHMgPSBbXTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleGVzID0gW107XG4gICAgICAgIHRoaXMuX3NlZWRJbmRleCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzQWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U2VlZChrZXkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRTZWVkKHJhbmRvbVNlZWRUeXBlOiBSYW5kb21TZWVkVHlwZSkge1xuICAgICAgICB0aGlzLl9zZWVkc1tyYW5kb21TZWVkVHlwZV0gPSBbXVxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ZXNbcmFuZG9tU2VlZFR5cGVdID0gW107XG4gICAgICAgIHRoaXMuX3NlZWRJbmRleFtyYW5kb21TZWVkVHlwZV0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9yYW5kb21TZWVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZml4OiBudW1iZXIgPSBwYXJzZUludCh0aGlzLl9yYW5kb21TZWVkW2ldLCAzNikgfHwgMDtcbiAgICAgICAgICAgIGZpeCA9ICg5MzAxICogZml4ICsgNDkyOTcpICUgKDEwNDg1NzYzKSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fc2VlZHNbcmFuZG9tU2VlZFR5cGVdLnB1c2goZml4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJhbmRvbU51bShtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHJhbmRvbVNlZWRUeXBlOiBSYW5kb21TZWVkVHlwZSA9IFJhbmRvbVNlZWRUeXBlLlVOREVGSU5FRCk6IG51bWJlciB7XG4gICAgICAgIGlmIChtaW4gPiBtYXgpXG4gICAgICAgICAgICBtYXggPSBtaW5cbiAgICAgICAgY29uc3Qgc2VlZEluZGV4ID0gdGhpcy5fc2VlZEluZGV4W3JhbmRvbVNlZWRUeXBlXSAlIHRoaXMuX3JhbmRvbVNlZWQubGVuZ3RoXG4gICAgICAgIGNvbnN0IHJldCA9IG1pbiArICh0aGlzLl9zZWVkc1tyYW5kb21TZWVkVHlwZV1bc2VlZEluZGV4XSkgJSAobWF4IC0gbWluICsgMSlcbiAgICAgICAgdGhpcy5fc2VlZHNbcmFuZG9tU2VlZFR5cGVdW3NlZWRJbmRleF0gPSAoOTMwMSAqIHRoaXMuX3NlZWRzW3JhbmRvbVNlZWRUeXBlXVtzZWVkSW5kZXhdICsgNDkyOTcpICUgKDEwNDg1NzYzKSB8fCAwXG4gICAgICAgIHRoaXMuX3NlZWRJbmRleFtyYW5kb21TZWVkVHlwZV0rKztcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleGVzW3JhbmRvbVNlZWRUeXBlXS5wdXNoKHJldClcbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIHB1YmxpYyByYW5kb21OdW1BcnJheShtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIHJhbmRvbVNlZWRUeXBlOiBSYW5kb21TZWVkVHlwZSA9IFJhbmRvbVNlZWRUeXBlLlVOREVGSU5FRCk6IG51bWJlcltdIHtcbiAgICAgICAgaWYgKG1pbiA+IG1heClcbiAgICAgICAgICAgIG1heCA9IG1pblxuICAgICAgICBjb25zdCByZXQgPSBbXVxuICAgICAgICBpZiAobWF4IC0gbWluICsgMSA8IGNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IG1heCAtIG1pbiArIDFcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50Oykge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gdGhpcy5yYW5kb21OdW0obWluLCBtYXgsIHJhbmRvbVNlZWRUeXBlKVxuICAgICAgICAgICAgaWYgKHJldC5pbmRleE9mKHJhbmRvbU51bSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2gocmFuZG9tTnVtKVxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoq55m+5YiG5q+U5qaC546HICovXG4gICAgcHVibGljIGdldFBlcmNlbnRQcm9iYWJpbGl0eShwZXJjZW50OiBudW1iZXIsIHJhbmRvbVNlZWRUeXBlOiBSYW5kb21TZWVkVHlwZSA9IFJhbmRvbVNlZWRUeXBlLlVOREVGSU5FRCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCByYW5kb21OdW0gPSB0aGlzLnJhbmRvbU51bSgxLCAxMDAsIHJhbmRvbVNlZWRUeXBlKVxuICAgICAgICAvLyBlZ3JldC5sb2coXCJnZXRQZXJjZW50UHJvYmFiaWxpdHlcIiwgcGVyY2VudCwgcmFuZG9tTnVtKVxuICAgICAgICByZXR1cm4gKHBlcmNlbnQgPj0gcmFuZG9tTnVtKVxuICAgIH1cblxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/localStorage/LocalStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '268f8O0nHBNeLgcPVchYcOV', 'LocalStorage');
// src/common/localStorage/LocalStorage.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONST_STORAGE_KEY = exports.LocalStorage = void 0;
var SingletonClass_1 = require("../base/SingletonClass");
var LocalStorage = /** @class */ (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._game_key = 'nonstop_balls_tt_';
        return _this;
    }
    LocalStorage.ins = function () {
        return _super.ins.call(this);
    };
    LocalStorage.prototype.setLocal = function (key, value) {
        try {
            if (typeof value == 'object')
                value = JSON.stringify(value);
            cc.sys.localStorage.setItem(this.str_encrypt(this._game_key + key), this.str_encrypt(value, this._game_key + key));
        }
        catch (e) {
        }
    };
    LocalStorage.prototype.getLocal = function (key, defaultValue) {
        try {
            var result = cc.sys.localStorage.getItem(this.str_encrypt(this._game_key + key));
            if (result == null) {
                return defaultValue;
            }
            result = this.str_decrypt(result, this._game_key + key);
            switch (typeof defaultValue) {
                case 'object': {
                    var ret = defaultValue;
                    try {
                        var parse = JSON.parse(result);
                        if (typeof parse === 'object') {
                            ret = parse;
                        }
                    }
                    catch (_a) {
                    }
                    return ret;
                }
                case "boolean": {
                    return (result === "true");
                }
                case "number": {
                    return Number(result) || defaultValue;
                }
            }
            return result;
        }
        catch (e) {
            return defaultValue;
        }
    };
    /**
     * 加密函数
     * @param str 待加密字符串
     * @returns {string}
     */
    LocalStorage.prototype.str_encrypt = function (str, pwd) {
        if (pwd === void 0) { pwd = this._game_key; }
        var pwd_length = 0;
        for (var index = 0, len = pwd.length; index < len; index++) {
            pwd_length += pwd.charCodeAt(index);
        }
        str = str.toString();
        str += pwd;
        var c = String.fromCharCode(str.charCodeAt(0) + str.length * pwd_length);
        for (var i = 1; i < str.length; i++) {
            c += String.fromCharCode(str.charCodeAt(i) + str.charCodeAt(i - 1));
        }
        return encodeURIComponent(c);
    };
    /**
     * 解密函数
     * @param str 待解密字符串
     * @returns {string}
     */
    LocalStorage.prototype.str_decrypt = function (str, pwd) {
        if (pwd === void 0) { pwd = this._game_key; }
        var pwd_length = 0;
        for (var index = 0, len = pwd.length; index < len; index++) {
            pwd_length += pwd.charCodeAt(index);
        }
        str = str.toString();
        str = decodeURIComponent(str);
        var c = String.fromCharCode(str.charCodeAt(0) - str.length * pwd_length);
        for (var i = 1; i < str.length; i++) {
            c += String.fromCharCode(str.charCodeAt(i) - c.charCodeAt(i - 1));
        }
        return c.slice(0, c.length - pwd.length);
    };
    return LocalStorage;
}(SingletonClass_1.default));
exports.LocalStorage = LocalStorage;
exports.CONST_STORAGE_KEY = {
    KEY_MUSIC_VOLUME: "KEY_MUSIC_VOLUME",
    KEY_SOUND_VOLUME: "KEY_SOUND_VOLUME",
    KEY_SOUND_IS_MUTE: "KEY_SOUND_IS_MUTE",
    KEY_MUSIC_IS_MUTE: "KEY_MUSIC_IS_MUTE",
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUdwRDtJQUFrQyxnQ0FBYztJQUFoRDtRQUFBLHFFQTBGQztRQXBGVyxlQUFTLEdBQUcsbUJBQW1CLENBQUE7O0lBb0YzQyxDQUFDO0lBeEZpQixnQkFBRyxHQUFqQjtRQUNJLE9BQU8sT0FBTSxHQUFHLFdBQWtCLENBQUE7SUFDdEMsQ0FBQztJQUlNLCtCQUFRLEdBQWYsVUFBZ0IsR0FBVyxFQUFFLEtBQUs7UUFDOUIsSUFBSTtZQUNBLElBQUksT0FBTyxLQUFLLElBQUksUUFBUTtnQkFDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDckg7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUVYO0lBQ0wsQ0FBQztJQUVNLCtCQUFRLEdBQWYsVUFBZ0IsR0FBVyxFQUFFLFlBQWE7UUFDdEMsSUFBSTtZQUNBLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ2hCLE9BQU8sWUFBWSxDQUFBO2FBQ3RCO1lBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FB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RTtZQUNqQyxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckU7UUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCxtQkFBQztBQUFELENBMUZBLEFBMEZDLENBMUZpQyx3QkFBYyxHQTBGL0M7QUExRlksb0NBQVk7QUE0RlosUUFBQSxpQkFBaUIsR0FBRztJQUM3QixnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0lBQ3BDLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxpQkFBaUIsRUFBRSxtQkFBbUI7Q0FDekMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b25DbGFzcyBmcm9tIFwiLi4vYmFzZS9TaW5nbGV0b25DbGFzc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2UgZXh0ZW5kcyBTaW5nbGV0b25DbGFzcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGlucygpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmlucygpIGFzIExvY2FsU3RvcmFnZVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dhbWVfa2V5ID0gJ25vbnN0b3BfYmFsbHNfdHRfJ1xuXG4gICAgcHVibGljIHNldExvY2FsKGtleTogc3RyaW5nLCB2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RyX2VuY3J5cHQodGhpcy5fZ2FtZV9rZXkgKyBrZXkpLCB0aGlzLnN0cl9lbmNyeXB0KHZhbHVlLCB0aGlzLl9nYW1lX2tleSArIGtleSkpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvY2FsKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RyX2VuY3J5cHQodGhpcy5fZ2FtZV9rZXkgKyBrZXkpKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuc3RyX2RlY3J5cHQocmVzdWx0LCB0aGlzLl9nYW1lX2tleSArIGtleSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldCA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZSA9IEpTT04ucGFyc2UocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcGFyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2h7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocmVzdWx0ID09PSBcInRydWVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIocmVzdWx0KSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqXG5cdCAqIOWKoOWvhuWHveaVsFxuXHQgKiBAcGFyYW0gc3RyIOW+heWKoOWvhuWtl+espuS4slxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cbiAgICBwcml2YXRlIHN0cl9lbmNyeXB0KHN0cjogc3RyaW5nLCBwd2Q6IHN0cmluZyA9IHRoaXMuX2dhbWVfa2V5KSB7XG4gICAgICAgIGxldCBwd2RfbGVuZ3RoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSBwd2QubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgICAgICAgcHdkX2xlbmd0aCArPSBwd2QuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIgPSBzdHIudG9TdHJpbmcoKVxuICAgICAgICBzdHIgKz0gcHdkO1xuICAgICAgICBsZXQgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RyLmNoYXJDb2RlQXQoMCkgKyBzdHIubGVuZ3RoICogcHdkX2xlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RyLmNoYXJDb2RlQXQoaSkgKyBzdHIuY2hhckNvZGVBdChpIC0gMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoYyk7XG4gICAgfVxuXG5cdC8qKlxuXHQgKiDop6Plr4blh73mlbBcblx0ICogQHBhcmFtIHN0ciDlvoXop6Plr4blrZfnrKbkuLJcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG4gICAgcHJpdmF0ZSBzdHJfZGVjcnlwdChzdHI6IHN0cmluZywgcHdkOiBzdHJpbmcgPSB0aGlzLl9nYW1lX2tleSkge1xuICAgICAgICBsZXQgcHdkX2xlbmd0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gcHdkLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgICAgICAgIHB3ZF9sZW5ndGggKz0gcHdkLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHN0ciA9IHN0ci50b1N0cmluZygpXG4gICAgICAgIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChzdHIpO1xuICAgICAgICBsZXQgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RyLmNoYXJDb2RlQXQoMCkgLSBzdHIubGVuZ3RoICogcHdkX2xlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RyLmNoYXJDb2RlQXQoaSkgLSBjLmNoYXJDb2RlQXQoaSAtIDEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYy5zbGljZSgwLCBjLmxlbmd0aCAtIHB3ZC5sZW5ndGgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IENPTlNUX1NUT1JBR0VfS0VZID0ge1xuICAgIEtFWV9NVVNJQ19WT0xVTUU6IGBLRVlfTVVTSUNfVk9MVU1FYCxcbiAgICBLRVlfU09VTkRfVk9MVU1FOiBgS0VZX1NPVU5EX1ZPTFVNRWAsXG4gICAgS0VZX1NPVU5EX0lTX01VVEU6IGBLRVlfU09VTkRfSVNfTVVURWAsXG4gICAgS0VZX01VU0lDX0lTX01VVEU6IGBLRVlfTVVTSUNfSVNfTVVURWAsXG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/ui/pop_mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '424697+0GpMebIfgAZGNA0h', 'pop_mgr');
// src/common/ui/pop_mgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_TRANSITION_TYPE = exports.UI_CONFIG = exports.pop_mgr = void 0;
var pool_mgr_1 = require("../pool/pool_mgr");
var util_1 = require("../util");
var pop_ui_base_1 = require("./pop_ui_base");
var timer_mgr_1 = require("../timer/timer_mgr");
var utils = require("../util");
var Tween_1 = require("../tween/Tween");
var pop_mgr = /** @class */ (function () {
    function pop_mgr() {
        this.ui_cache = {};
        this.ui_stack = new Array();
    }
    pop_mgr.get_inst = function () {
        if (!this.inst) {
            this.inst = new pop_mgr();
        }
        return this.inst;
    };
    pop_mgr.prototype.get_ui = function (path) {
        var ui = this.ui_cache[path];
        if (!ui) {
            this.ui_cache[path] = ui = { node: null, is_show: false };
        }
        return ui;
    };
    pop_mgr.prototype.clear = function () {
        for (var path in this.ui_cache) {
            this.hide(path);
        }
        this.ui_cache = {};
        this.ui_stack.length = 0;
    };
    pop_mgr.prototype.peek = function () {
        return this.ui_stack[this.ui_stack.length - 1];
    };
    pop_mgr.prototype.set_handlers = function (on_ui_show, on_ui_hide) {
        this.ui_show_handler = on_ui_show;
        this.ui_hide_handler = on_ui_hide;
    };
    pop_mgr.prototype.is_show = function (path) {
        var ui = this.ui_cache[path];
        return ui != null;
    };
    pop_mgr.prototype.show = function (path, transition) {
        var _this = this;
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var ui = this.get_ui(path);
        if (ui.is_show) {
            return;
        }
        ui.is_show = true;
        pool_mgr_1.pool_mgr.get_inst().get_ui(path, util_1.gen_handler(function (node) {
            if (!ui.is_show) {
                pool_mgr_1.pool_mgr.get_inst().put_ui(path, node);
                return;
            }
            ui.node = node;
            //应用过渡效果
            _this.applyTransitionEffect(node, transition);
            cc.director.getScene().getChildByName('Canvas').getChildByName('mid_layer').addChild(node);
            timer_mgr_1.TimerMgr.getInst().once(0, utils.gen_handler(function () {
                //在加到场景同一帧调用界面show方法，计算位置会不准确，故统一在下一帧调用show
                if (!ui.is_show) {
                    return;
                }
                var ui_base = node.getComponent(pop_ui_base_1.POP_UI_BASE);
                ui_base.ui_name = path;
                ui_base.__show__.apply(ui_base, params);
                //进栈
                _this.ui_stack.push(path);
                //钩子函数调用
                if (_this.ui_show_handler) {
                    _this.ui_show_handler.exec();
                }
            }));
        }, this));
    };
    //关闭界面时不destroy，只是从父节点移除并缓存
    pop_mgr.prototype.hide = function (path) {
        var ui = this.ui_cache[path];
        if (!ui) {
            return;
        }
        this.ui_cache[path] = null;
        ui.is_show = false;
        if (ui.node) {
            pool_mgr_1.pool_mgr.get_inst().put_ui(path, ui.node);
            //调用hide
            var ui_base = ui.node.getComponent(pop_ui_base_1.POP_UI_BASE);
            ui_base.__hide__();
            //出栈
            var lastIdx = this.ui_stack.lastIndexOf(path);
            if (lastIdx != -1) {
                this.ui_stack.splice(lastIdx, 1);
            }
            //钩子函数调用
            if (this.ui_hide_handler) {
                this.ui_hide_handler.exec();
            }
        }
    };
    pop_mgr.prototype.applyTransitionEffect = function (node, transition) {
        if (transition && transition.transType == UI_TRANSITION_TYPE.None) {
            return;
        }
        transition = transition || {
            transType: UI_TRANSITION_TYPE.FadeIn,
            duration: 500,
        };
        switch (transition.transType) {
            case UI_TRANSITION_TYPE.FadeIn:
                Tween_1.Tween.removeTweens(node);
                node.opacity = 0;
                Tween_1.Tween.get(node).to({ opacity: 255 }, transition.duration);
                break;
        }
    };
    return pop_mgr;
}());
exports.pop_mgr = pop_mgr;
//界面prefab路径配置, 相对于assets/resources目录
exports.UI_CONFIG = {
    overlay_bg: "prefab/panels/panel_overlay_bg",
};
var UI_TRANSITION_TYPE;
(function (UI_TRANSITION_TYPE) {
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["None"] = 1] = "None";
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["FadeIn"] = 2] = "FadeIn";
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["DropDown"] = 3] = "DropDown";
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["PopUp"] = 4] = "PopUp";
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["LeftIn"] = 5] = "LeftIn";
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["RightIn"] = 6] = "RightIn";
})(UI_TRANSITION_TYPE = exports.UI_TRANSITION_TYPE || (exports.UI_TRANSITION_TYPE = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3VpL3BvcF9tZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJDO0FBQzNDLGdDQUE4QztBQUM5Qyw2Q0FBMkM7QUFDM0MsZ0RBQTZDO0FBQzdDLCtCQUFnQztBQUNoQyx3Q0FBdUM7QUFFdkM7SUFPSTtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sZ0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTyx3QkFBTSxHQUFkLFVBQWUsSUFBWTtRQUN2QixJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQzdEO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBSSxHQUFKO1FBQ0ksT0FBTyxJQUFJLENB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QUEySEMsSUFBQTtBQTNIWSwwQkFBTztBQWtJcEIscUNBQXFDO0FBQ3hCLFFBQUEsU0FBUyxHQUFHO0lBQ3JCLFVBQVUsRUFBRSxnQ0FBZ0M7Q0FDL0MsQ0FBQTtBQVFELElBQWtCLGtCQU9qQjtBQVBELFdBQWtCLGtCQUFrQjtJQUNoQywyREFBUSxDQUFBO0lBQ1IsK0RBQU0sQ0FBQTtJQUNOLG1FQUFRLENBQUE7SUFDUiw2REFBSyxDQUFBO0lBQ0wsK0RBQU0sQ0FBQTtJQUNOLGlFQUFPLENBQUE7QUFDWCxDQUFDLEVBUGlCLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBT25DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9vbF9tZ3IgfSBmcm9tIFwiLi4vcG9vbC9wb29sX21nclwiXG5pbXBvcnQgeyBoYW5kbGVyLCBnZW5faGFuZGxlciB9IGZyb20gXCIuLi91dGlsXCJcbmltcG9ydCB7IFBPUF9VSV9CQVNFIH0gZnJvbSBcIi4vcG9wX3VpX2Jhc2VcIlxuaW1wb3J0IHsgVGltZXJNZ3IgfSBmcm9tIFwiLi4vdGltZXIvdGltZXJfbWdyXCJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgeyBUd2VlbiB9IGZyb20gXCIuLi90d2Vlbi9Ud2VlblwiO1xuXG5leHBvcnQgY2xhc3MgcG9wX21nciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdDogcG9wX21ncjtcbiAgICBwcml2YXRlIHVpX2NhY2hlOiBhbnk7ICAgICAgICAgICAvL3BhdGggPT4gcG9wX3VpXG4gICAgcHJpdmF0ZSB1aV9zdGFjazogQXJyYXk8c3RyaW5nPjsgLy91aSBzdGFja3NcbiAgICBwcml2YXRlIHVpX3Nob3dfaGFuZGxlcjogaGFuZGxlcjtcbiAgICBwcml2YXRlIHVpX2hpZGVfaGFuZGxlcjogaGFuZGxlcjtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudWlfY2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy51aV9zdGFjayA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldF9pbnN0KCk6IHBvcF9tZ3Ige1xuICAgICAgICBpZiAoIXRoaXMuaW5zdCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0ID0gbmV3IHBvcF9tZ3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0X3VpKHBhdGg6IHN0cmluZyk6IHBvcF91aSB7XG4gICAgICAgIGxldCB1aTogcG9wX3VpID0gdGhpcy51aV9jYWNoZVtwYXRoXTtcbiAgICAgICAgaWYgKCF1aSkge1xuICAgICAgICAgICAgdGhpcy51aV9jYWNoZVtwYXRoXSA9IHVpID0geyBub2RlOiBudWxsLCBpc19zaG93OiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1aTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZm9yIChsZXQgcGF0aCBpbiB0aGlzLnVpX2NhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUocGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aV9jYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLnVpX3N0YWNrLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlfc3RhY2tbdGhpcy51aV9zdGFjay5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBzZXRfaGFuZGxlcnMob25fdWlfc2hvdzogaGFuZGxlciwgb25fdWlfaGlkZTogaGFuZGxlcikge1xuICAgICAgICB0aGlzLnVpX3Nob3dfaGFuZGxlciA9IG9uX3VpX3Nob3c7XG4gICAgICAgIHRoaXMudWlfaGlkZV9oYW5kbGVyID0gb25fdWlfaGlkZTtcbiAgICB9XG5cbiAgICBpc19zaG93KHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgdWk6IHBvcF91aSA9IHRoaXMudWlfY2FjaGVbcGF0aF07XG4gICAgICAgIHJldHVybiB1aSAhPSBudWxsO1xuICAgIH1cblxuICAgIHNob3cocGF0aDogc3RyaW5nLCB0cmFuc2l0aW9uPzogVUlfVFJBTlNJVElPTiwgLi4ucGFyYW1zOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBsZXQgdWk6IHBvcF91aSA9IHRoaXMuZ2V0X3VpKHBhdGgpO1xuICAgICAgICBpZiAodWkuaXNfc2hvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVpLmlzX3Nob3cgPSB0cnVlO1xuICAgICAgICBwb29sX21nci5nZXRfaW5zdCgpLmdldF91aShwYXRoLCBnZW5faGFuZGxlcigobm9kZTogY2MuTm9kZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKCF1aS5pc19zaG93KSB7XG4gICAgICAgICAgICAgICAgcG9vbF9tZ3IuZ2V0X2luc3QoKS5wdXRfdWkocGF0aCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWkubm9kZSA9IG5vZGU7XG4gICAgICAgICAgICAvL+W6lOeUqOi/h+a4oeaViOaenFxuICAgICAgICAgICAgdGhpcy5hcHBseVRyYW5zaXRpb25FZmZlY3Qobm9kZSwgdHJhbnNpdGlvbik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKS5nZXRDaGlsZEJ5TmFtZSgnbWlkX2xheWVyJykuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBUaW1lck1nci5nZXRJbnN0KCkub25jZSgwLCB1dGlscy5nZW5faGFuZGxlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy/lnKjliqDliLDlnLrmma/lkIzkuIDluKfosIPnlKjnlYzpnaJzaG935pa55rOV77yM6K6h566X5L2N572u5Lya5LiN5YeG56Gu77yM5pWF57uf5LiA5Zyo5LiL5LiA5bin6LCD55Soc2hvd1xuICAgICAgICAgICAgICAgIGlmICghdWkuaXNfc2hvdykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB1aV9iYXNlID0gbm9kZS5nZXRDb21wb25lbnQoUE9QX1VJX0JBU0UpIGFzIFBPUF9VSV9CQVNFO1xuICAgICAgICAgICAgICAgIHVpX2Jhc2UudWlfbmFtZSA9IHBhdGg7XG4gICAgICAgICAgICAgICAgdWlfYmFzZS5fX3Nob3dfXyguLi5wYXJhbXMpO1xuICAgICAgICAgICAgICAgIC8v6L+b5qCIXG4gICAgICAgICAgICAgICAgdGhpcy51aV9zdGFjay5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIC8v6ZKp5a2Q5Ye95pWw6LCD55SoXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudWlfc2hvd19oYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfc2hvd19oYW5kbGVyLmV4ZWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sIHRoaXMpKTtcbiAgICB9XG5cbiAgICAvL+WFs+mXreeVjOmdouaXtuS4jWRlc3Ryb3nvvIzlj6rmmK/ku47niLboioLngrnnp7vpmaTlubbnvJPlrZhcbiAgICBoaWRlKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgdWk6IHBvcF91aSA9IHRoaXMudWlfY2FjaGVbcGF0aF07XG4gICAgICAgIGlmICghdWkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpX2NhY2hlW3BhdGhdID0gbnVsbDtcbiAgICAgICAgdWkuaXNfc2hvdyA9IGZhbHNlO1xuICAgICAgICBpZiAodWkubm9kZSkge1xuICAgICAgICAgICAgcG9vbF9tZ3IuZ2V0X2luc3QoKS5wdXRfdWkocGF0aCwgdWkubm9kZSk7XG4gICAgICAgICAgICAvL+iwg+eUqGhpZGVcbiAgICAgICAgICAgIGxldCB1aV9iYXNlID0gdWkubm9kZS5nZXRDb21wb25lbnQoUE9QX1VJX0JBU0UpIGFzIFBPUF9VSV9CQVNFO1xuICAgICAgICAgICAgdWlfYmFzZS5fX2hpZGVfXygpO1xuICAgICAgICAgICAgLy/lh7rmoIhcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJZHggPSB0aGlzLnVpX3N0YWNrLmxhc3RJbmRleE9mKHBhdGgpO1xuICAgICAgICAgICAgaWYgKGxhc3RJZHggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3N0YWNrLnNwbGljZShsYXN0SWR4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v6ZKp5a2Q5Ye95pWw6LCD55SoXG4gICAgICAgICAgICBpZiAodGhpcy51aV9oaWRlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2hpZGVfaGFuZGxlci5leGVjKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBseVRyYW5zaXRpb25FZmZlY3Qobm9kZTogY2MuTm9kZSwgdHJhbnNpdGlvbjogVUlfVFJBTlNJVElPTikge1xuICAgICAgICBpZiAodHJhbnNpdGlvbiAmJiB0cmFuc2l0aW9uLnRyYW5zVHlwZSA9PSBVSV9UUkFOU0lUSU9OX1RZUEUuTm9uZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uIHx8IHtcbiAgICAgICAgICAgIHRyYW5zVHlwZTogVUlfVFJBTlNJVElPTl9UWVBFLkZhZGVJbixcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIH07XG4gICAgICAgIHN3aXRjaCAodHJhbnNpdGlvbi50cmFuc1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVUlfVFJBTlNJVElPTl9UWVBFLkZhZGVJbjpcbiAgICAgICAgICAgICAgICBUd2Vlbi5yZW1vdmVUd2VlbnMobm9kZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBUd2Vlbi5nZXQobm9kZSkudG8oeyBvcGFjaXR5OiAyNTUgfSwgdHJhbnNpdGlvbi5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnR5cGUgcG9wX3VpID0ge1xuICAgIG5vZGU6IGNjLk5vZGU7XG4gICAgaXNfc2hvdzogYm9vbGVhbjtcbn1cblxuLy/nlYzpnaJwcmVmYWLot6/lvoTphY3nva4sIOebuOWvueS6jmFzc2V0cy9yZXNvdXJjZXPnm67lvZVcbmV4cG9ydCBjb25zdCBVSV9DT05GSUcgPSB7XG4gICAgb3ZlcmxheV9iZzogXCJwcmVmYWIvcGFuZWxzL3BhbmVsX292ZXJsYXlfYmdcIixcbn1cblxuaW50ZXJmYWNlIFVJX1RSQU5TSVRJT04ge1xuICAgIHRyYW5zVHlwZTogVUlfVFJBTlNJVElPTl9UWVBFO1xuICAgIHR3ZWVuRnVuYz86IEZ1bmN0aW9uO1xuICAgIGR1cmF0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBVSV9UUkFOU0lUSU9OX1RZUEUge1xuICAgIE5vbmUgPSAxLFxuICAgIEZhZGVJbixcbiAgICBEcm9wRG93bixcbiAgICBQb3BVcCxcbiAgICBMZWZ0SW4sXG4gICAgUmlnaHRJbixcbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/timer/timer_mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '55db98KfNxEboJhHMMpseOV', 'timer_mgr');
// src/common/timer/timer_mgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerMgr = void 0;
var linklist_1 = require("../linklist");
var TimerMgr = /** @class */ (function () {
    function TimerMgr() {
        this.key = 0;
        this.pool = [];
        this.iterList = new linklist_1.LinkList();
        this.pendingList = new linklist_1.LinkList();
    }
    TimerMgr.getInst = function () {
        if (!this.inst) {
            this.inst = new TimerMgr();
        }
        return this.inst;
    };
    TimerMgr.prototype.add = function (interval, delay, repeat, cb, is_updater) {
        if (is_updater === void 0) { is_updater = false; }
        var th = this.pool.pop();
        if (th) {
            th.interval = interval;
            th.delay = delay;
            th.repeat = repeat;
            th.elapsed = 0;
            th.times = 0;
            th.is_updater = is_updater;
            th.cb = cb;
        }
        else {
            th = { interval: interval, delay: delay, repeat: repeat, elapsed: 0, times: 0, is_updater: is_updater, cb: cb };
        }
        var key = this.pendingList.append(++this.key, th);
        // cc.info(`[TimerMgr]addPending, key=${key}`);
        return key;
    };
    TimerMgr.prototype.remove = function (key) {
        if (!this.removeIter(key)) {
            this.removePending(key);
        }
    };
    TimerMgr.prototype.removeIter = function (key) {
        var node = this.iterList.remove(key);
        if (node) {
            this.pool.push(node.data);
            // cc.info(`[TimerMgr]removeIter, key=${key}`);
            return true;
        }
        return false;
    };
    TimerMgr.prototype.removePending = function (key) {
        var node = this.pendingList.remove(key);
        if (node) {
            this.pool.push(node.data);
            // cc.info(`[TimerMgr]removePending, key=${key}`);
            return true;
        }
        return false;
    };
    TimerMgr.prototype.loop = function (interval, cb) {
        return this.add(interval, 0, 0, cb);
    };
    TimerMgr.prototype.loopTimes = function (interval, repeat, cb) {
        return this.add(interval, 0, repeat, cb);
    };
    TimerMgr.prototype.frameLoop = function (cb) {
        return this.add(1 / 24, 0, 0, cb);
    };
    TimerMgr.prototype.delayLoop = function (interval, delay, cb) {
        return this.add(interval, delay, 0, cb);
    };
    TimerMgr.prototype.once = function (delay, cb) {
        return this.add(0, delay, 1, cb);
    };
    TimerMgr.prototype.add_updater = function (cb) {
        return this.add(0, 0, 0, cb, true);
    };
    TimerMgr.prototype.update = function (dt) {
        var node = this.iterList.head;
        //执行当前帧的定时器
        while (node) {
            if (node.data.is_updater) {
                //先保存next引用，防止回调函数里回收node导致next被修改
                var next = node.next;
                node.data.cb.exec(dt);
                node = next;
                continue;
            }
            if (node.data.repeat != 0 && node.data.times >= node.data.repeat) {
                var next = node.next;
                this.removeIter(node.key);
                node = next;
                continue;
            }
            if (node.data.elapsed >= node.data.delay + node.data.interval) {
                //exec回调可能会调用remove函数回收timerHandler.避免操作已回收的对象。
                // cc.info(`[TimerMgr]execHandler, key=${node.key}`);
                var next = node.next;
                node.data.times++;
                node.data.elapsed = node.data.delay;
                node.data.cb.exec();
                node = next;
            }
            else {
                node.data.elapsed += dt;
                node = node.next;
            }
        }
        //添加下一帧的定时器
        node = this.pendingList.head;
        while (node) {
            var key = node.key;
            var th = node.data;
            node = node.next;
            this.pendingList.remove(key);
            this.iterList.append(key, th);
        }
    };
    return TimerMgr;
}());
exports.TimerMgr = TimerMgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3RpbWVyL3RpbWVyX21nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3Q0FBb0Q7QUFFcEQ7SUFPSTtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBZ0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksbUJBQVEsRUFBZ0IsQ0FBQztJQUNwRCxDQUFDO0lBRU0sZ0JBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksUUFBZ0IsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLEVBQVcsRUFBRSxVQUEyQjtRQUEzQiwyQkFBQSxFQUFBLGtCQUEyQjtRQUN6RixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksRUFBRSxFQUFFO1lBQ0osRUFBRSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDdkIsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDakIsRUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDbkIsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDZixFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNiLEVBQUUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7YUFDSTtZQUNELEVBQUUsR0FBRyxFQUFFLFFBQVEs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QyxJQUFJLENBQUM7UUFDN0IsT0FBTyxJQUFJLEVBQUU7WUFDVCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3JCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXZJQSxBQXVJQyxJQUFBO0FBdklZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlciwgZ2VuX2hhbmRsZXIgfSBmcm9tIFwiLi4vdXRpbFwiXG5pbXBvcnQgeyBMaW5rTGlzdCwgTGlua0xpc3ROb2RlIH0gZnJvbSBcIi4uL2xpbmtsaXN0XCJcblxuZXhwb3J0IGNsYXNzIFRpbWVyTWdyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0OiBUaW1lck1ncjtcbiAgICBwcml2YXRlIGl0ZXJMaXN0OiBMaW5rTGlzdDxUaW1lckhhbmRsZXI+O1xuICAgIHByaXZhdGUgcGVuZGluZ0xpc3Q6IExpbmtMaXN0PFRpbWVySGFuZGxlcj47XG4gICAgcHJpdmF0ZSBwb29sOiBUaW1lckhhbmRsZXJbXTtcbiAgICBwcml2YXRlIGtleTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXkgPSAwO1xuICAgICAgICB0aGlzLnBvb2wgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVyTGlzdCA9IG5ldyBMaW5rTGlzdDxUaW1lckhhbmRsZXI+KCk7XG4gICAgICAgIHRoaXMucGVuZGluZ0xpc3QgPSBuZXcgTGlua0xpc3Q8VGltZXJIYW5kbGVyPigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0KCk6IFRpbWVyTWdyIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3QpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdCA9IG5ldyBUaW1lck1ncigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3Q7XG4gICAgfVxuXG4gICAgYWRkKGludGVydmFsOiBudW1iZXIsIGRlbGF5OiBudW1iZXIsIHJlcGVhdDogbnVtYmVyLCBjYjogaGFuZGxlciwgaXNfdXBkYXRlcjogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHRoID0gdGhpcy5wb29sLnBvcCgpO1xuICAgICAgICBpZiAodGgpIHtcbiAgICAgICAgICAgIHRoLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgICAgICB0aC5kZWxheSA9IGRlbGF5O1xuICAgICAgICAgICAgdGgucmVwZWF0ID0gcmVwZWF0O1xuICAgICAgICAgICAgdGguZWxhcHNlZCA9IDA7XG4gICAgICAgICAgICB0aC50aW1lcyA9IDA7XG4gICAgICAgICAgICB0aC5pc191cGRhdGVyID0gaXNfdXBkYXRlcjtcbiAgICAgICAgICAgIHRoLmNiID0gY2I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aCA9IHsgaW50ZXJ2YWwsIGRlbGF5LCByZXBlYXQsIGVsYXBzZWQ6IDAsIHRpbWVzOiAwLCBpc191cGRhdGVyLCBjYiB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMucGVuZGluZ0xpc3QuYXBwZW5kKCsrdGhpcy5rZXksIHRoKTtcbiAgICAgICAgLy8gY2MuaW5mbyhgW1RpbWVyTWdyXWFkZFBlbmRpbmcsIGtleT0ke2tleX1gKTtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cbiAgICByZW1vdmUoa2V5OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZUl0ZXIoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVQZW5kaW5nKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUl0ZXIoa2V5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuaXRlckxpc3QucmVtb3ZlKGtleSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgLy8gY2MuaW5mbyhgW1RpbWVyTWdyXXJlbW92ZUl0ZXIsIGtleT0ke2tleX1gKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZVBlbmRpbmcoa2V5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMucGVuZGluZ0xpc3QucmVtb3ZlKGtleSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgLy8gY2MuaW5mbyhgW1RpbWVyTWdyXXJlbW92ZVBlbmRpbmcsIGtleT0ke2tleX1gKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsb29wKGludGVydmFsOiBudW1iZXIsIGNiOiBoYW5kbGVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGludGVydmFsLCAwLCAwLCBjYik7XG4gICAgfVxuXG4gICAgbG9vcFRpbWVzKGludGVydmFsOiBudW1iZXIsIHJlcGVhdDogbnVtYmVyLCBjYjogaGFuZGxlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpbnRlcnZhbCwgMCwgcmVwZWF0LCBjYik7XG4gICAgfVxuXG4gICAgZnJhbWVMb29wKGNiOiBoYW5kbGVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKDEgLyAyNCwgMCwgMCwgY2IpO1xuICAgIH1cblxuICAgIGRlbGF5TG9vcChpbnRlcnZhbDogbnVtYmVyLCBkZWxheTogbnVtYmVyLCBjYjogaGFuZGxlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpbnRlcnZhbCwgZGVsYXksIDAsIGNiKTtcbiAgICB9XG5cbiAgICBvbmNlKGRlbGF5OiBudW1iZXIsIGNiOiBoYW5kbGVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKDAsIGRlbGF5LCAxLCBjYik7XG4gICAgfVxuXG4gICAgYWRkX3VwZGF0ZXIoY2I6IGhhbmRsZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoMCwgMCwgMCwgY2IsIHRydWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVyTGlzdC5oZWFkO1xuXG4gICAgICAgIC8v5omn6KGM5b2T5YmN5bin55qE5a6a5pe25ZmoXG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhLmlzX3VwZGF0ZXIpIHtcbiAgICAgICAgICAgICAgICAvL+WFiOS/neWtmG5leHTlvJXnlKjvvIzpmLLmraLlm57osIPlh73mlbDph4zlm57mlLZub2Rl5a+86Ie0bmV4dOiiq+S/ruaUuVxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgbm9kZS5kYXRhLmNiLmV4ZWMoZHQpO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhLnJlcGVhdCAhPSAwICYmIG5vZGUuZGF0YS50aW1lcyA+PSBub2RlLmRhdGEucmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZXIobm9kZS5rZXkpO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhLmVsYXBzZWQgPj0gbm9kZS5kYXRhLmRlbGF5ICsgbm9kZS5kYXRhLmludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgLy9leGVj5Zue6LCD5Y+v6IO95Lya6LCD55SocmVtb3Zl5Ye95pWw5Zue5pS2dGltZXJIYW5kbGVyLumBv+WFjeaTjeS9nOW3suWbnuaUtueahOWvueixoeOAglxuICAgICAgICAgICAgICAgIC8vIGNjLmluZm8oYFtUaW1lck1ncl1leGVjSGFuZGxlciwga2V5PSR7bm9kZS5rZXl9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEudGltZXMrKztcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEuZWxhcHNlZCA9IG5vZGUuZGF0YS5kZWxheTtcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEuY2IuZXhlYygpO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5kYXRhLmVsYXBzZWQgKz0gZHQ7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v5re75Yqg5LiL5LiA5bin55qE5a6a5pe25ZmoXG4gICAgICAgIG5vZGUgPSB0aGlzLnBlbmRpbmdMaXN0LmhlYWQ7XG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBub2RlLmtleTtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gbm9kZS5kYXRhO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0xpc3QucmVtb3ZlKGtleSk7XG4gICAgICAgICAgICB0aGlzLml0ZXJMaXN0LmFwcGVuZChrZXksIHRoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudHlwZSBUaW1lckhhbmRsZXIgPSB7XG4gICAgaW50ZXJ2YWw6IG51bWJlcjsgICAgLy/miafooYzpl7TpmpQsIOWPquaJp+ihjOS4gOasoeeahOWumuaXtuWZqOWAvOS4ujDvvIzljZXkvY3np5JcbiAgICBkZWxheTogbnVtYmVyOyAgICAgICAvL+W7tuaXtuWkmuS5heaJp+ihjO+8jOWNleS9jeenklxuICAgIHJlcGVhdDogbnVtYmVyOyAgICAgIC8v6KaB5omn6KGM5aSa5bCR5qyh77yMMOihqOekuuaXoOmZkOasoVxuICAgIGVsYXBzZWQ6IG51bWJlcjsgICAgIC8v5bey6L+H5Y6755qE5pe26Ze0XG4gICAgdGltZXM6IG51bWJlcjsgICAgICAgLy/lt7LmiafooYzmrKHmlbBcbiAgICBpc191cGRhdGVyOiBib29sZWFuOyAvL+aYr+WQpuavj+W4p+iwg+eUqFxuICAgIGNiOiBoYW5kbGVyOyAgICAgICAgIC8v5Zue6LCD5Ye95pWwXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/event/EventDispatch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'eed4aQJ7TtAqptDX40AW5tU', 'EventDispatch');
// src/common/event/EventDispatch.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event_Name = exports.EventDispatch = void 0;
var SingletonClass_1 = require("../base/SingletonClass");
var EventDispatch = /** @class */ (function (_super) {
    __extends(EventDispatch, _super);
    function EventDispatch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listeners = {}; //Event_Name => cb[]
        return _this;
    }
    EventDispatch.ins = function () {
        return _super.ins.call(this);
    };
    EventDispatch.prototype.fire = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var cbs = this.listeners[event];
        if (!cbs) {
            return;
        }
        for (var i = 0, len = cbs.length; i < len; i += 2) {
            var cb = cbs[i];
            var host = cbs[i + 1];
            if (cb)
                cb.call.apply(cb, __spreadArrays([host], params));
        }
    };
    EventDispatch.prototype.add = function (event, cb, host, callNow) {
        if (host === void 0) { host = null; }
        if (callNow === void 0) { callNow = false; }
        var params = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            params[_i - 4] = arguments[_i];
        }
        var cbs = this.listeners[event];
        if (!cbs) {
            this.listeners[event] = cbs = [];
        }
        cbs.push(cb, host);
        if (callNow) {
            cb.call.apply(cb, __spreadArrays([host], params));
        }
    };
    EventDispatch.prototype.remove = function (event, cb) {
        var cbs = this.listeners[event];
        if (!cbs) {
            return;
        }
        var index = cbs.indexOf(cb);
        if (index < 0) {
            cc.warn("EventDispatch remove " + event + ", but cb not exists!");
            return;
        }
        cbs.splice(index, 2);
    };
    EventDispatch.prototype.clear = function () {
        for (var key in this.listeners) {
            this.listeners[key].length = 0;
        }
        this.listeners = {};
    };
    return EventDispatch;
}(SingletonClass_1.default));
exports.EventDispatch = EventDispatch;
/**事件名称定义*/
var Event_Name;
(function (Event_Name) {
    Event_Name[Event_Name["GAME_TIME_CHANGED"] = 0] = "GAME_TIME_CHANGED";
    Event_Name[Event_Name["GAME_CREATE_BALL"] = 1] = "GAME_CREATE_BALL";
    Event_Name[Event_Name["GAME_SCORE_CHANGED"] = 2] = "GAME_SCORE_CHANGED";
    Event_Name[Event_Name["GAME_BALL_POWER_CHANGED"] = 3] = "GAME_BALL_POWER_CHANGED";
    Event_Name[Event_Name["GAME_BEST_SCORE_CHANGED"] = 4] = "GAME_BEST_SCORE_CHANGED";
    Event_Name[Event_Name["GAME_ON_TOUCH_MOVE"] = 5] = "GAME_ON_TOUCH_MOVE";
    Event_Name[Event_Name["GAME_POWER_TYPE_CHANGED"] = 6] = "GAME_POWER_TYPE_CHANGED";
    Event_Name[Event_Name["GAME_RELIVE"] = 7] = "GAME_RELIVE";
    Event_Name[Event_Name["GAME_PLAY_BRICK_REMOVE_EFFECT"] = 8] = "GAME_PLAY_BRICK_REMOVE_EFFECT";
    Event_Name[Event_Name["SHOW_TIPS"] = 9] = "SHOW_TIPS";
    Event_Name[Event_Name["GAME_STAR_GET_EFFECT"] = 10] = "GAME_STAR_GET_EFFECT";
})(Event_Name = exports.Event_Name || (exports.Event_Name = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2V2ZW50L0V2ZW50RGlzcGF0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFFcEQ7SUFBbUMsaUNBQWM7SUFBakQ7UUFBQSxxRUFrREM7UUFqRFcsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFVLG9CQUFvQjs7SUFpRDlELENBQUM7SUEvQ1UsaUJBQUcsR0FBVjtRQUNJLE9BQU8sT0FBTSxHQUFHLFdBQW1CLENBQUM7SUFDeEMsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxLQUFpQjtRQUFFLGdCQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsK0JBQWdCOztRQUNwQyxJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixPQUFPO1NBQ1Y7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxHQUFHLEdBQVcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0QsSUFBSSxFQUFFLEdBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksSUFBSSxHQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxFQUFFO2dCQUNGLEVBQUUsQ0FBQyxJQUFJLE9BQVAsRUFBRSxrQkFBTSxJQUFJLEdBQUssTUFBTSxHQUFFO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELDJCQUFHLEdBQUgsVUFBSSxLQUFpQixFQUFFLEVBQVksRUFBRSxJQUFnQixFQUFFLE9BQWU7UUFBakMscUJBQUEsRUFBQSxXQUFnQjtRQUFFLHdCQUFBLEVBQUEsZUFBZTtRQUFFLGdCQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsK0JBQWdCOztRQUNwRixJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDcEM7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLE9BQU8sRUFBRTtZQUNULEVBQUUsQ0FBQyxJQUFJLE9BQVAsRUFBRSxrQkFBTSxJQUFJLEdBQUssTUFBTSxHQUFFO1NBQzVCO0lBQ0wsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxLQUFpQixFQUFFLEVBQVk7UUFDbEMsSUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sT0FBTztTQUNWO1FBQ0QsSUFBSSxLQUFLLEdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUF3QixLQUFLLHlCQUFzQixDQUFDLENBQUM7WUFDN0QsT0FBTztTQUNWO1FBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FsREEsQUFrREMsQ0FsRGtDLHdCQUFjLEdBa0RoRDtBQWxEWSxzQ0FBYTtBQW9EMUIsV0FBVztBQUNYLElBQVksVUFZWDtBQVpELFdBQVksVUFBVTtJQUNsQixxRUFBaUIsQ0FBQTtJQUNqQixtRUFBZ0IsQ0FBQTtJQUNoQix1RUFBa0IsQ0FBQTtJQUNsQixpRkFBdUIsQ0FBQTtJQUN2QixpRkFBdUIsQ0FBQTtJQUN2Qix1RUFBa0IsQ0FBQTtJQUNsQixpRkFBdUIsQ0FBQTtJQUN2Qix5REFBVyxDQUFBO0lBQ1gsNkZBQTZCLENBQUE7SUFDN0IscURBQVMsQ0FBQTtJQUNULDRFQUFvQixDQUFBO0FBQ3hCLENBQUMsRUFaVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVlyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b25DbGFzcyBmcm9tIFwiLi4vYmFzZS9TaW5nbGV0b25DbGFzc1wiO1xuXG5leHBvcnQgY2xhc3MgRXZlbnREaXNwYXRjaCBleHRlbmRzIFNpbmdsZXRvbkNsYXNzIHtcbiAgICBwcml2YXRlIGxpc3RlbmVyczogYW55ID0ge307ICAgICAgICAgIC8vRXZlbnRfTmFtZSA9PiBjYltdXG5cbiAgICBzdGF0aWMgaW5zKCk6IEV2ZW50RGlzcGF0Y2gge1xuICAgICAgICByZXR1cm4gc3VwZXIuaW5zKCkgYXMgRXZlbnREaXNwYXRjaDtcbiAgICB9XG5cbiAgICBmaXJlKGV2ZW50OiBFdmVudF9OYW1lLCAuLi5wYXJhbXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGxldCBjYnM6IGFueVtdID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgICBpZiAoIWNicykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDAsIGxlbjogbnVtYmVyID0gY2JzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICAgICAgICBsZXQgY2I6IGFueSA9IGNic1tpXTtcbiAgICAgICAgICAgIGxldCBob3N0OiBhbnkgPSBjYnNbaSArIDFdO1xuICAgICAgICAgICAgaWYgKGNiKVxuICAgICAgICAgICAgICAgIGNiLmNhbGwoaG9zdCwgLi4ucGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZChldmVudDogRXZlbnRfTmFtZSwgY2I6IEZ1bmN0aW9uLCBob3N0OiBhbnkgPSBudWxsLCBjYWxsTm93ID0gZmFsc2UsIC4uLnBhcmFtczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgbGV0IGNiczogYW55W10gPSB0aGlzLmxpc3RlbmVyc1tldmVudF07XG4gICAgICAgIGlmICghY2JzKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBjYnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjYnMucHVzaChjYiwgaG9zdCk7XG4gICAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgICAgICBjYi5jYWxsKGhvc3QsIC4uLnBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmUoZXZlbnQ6IEV2ZW50X05hbWUsIGNiOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgY2JzOiBhbnlbXSA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgaWYgKCFjYnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IGNicy5pbmRleE9mKGNiKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgY2Mud2FybihgRXZlbnREaXNwYXRjaCByZW1vdmUgJHtldmVudH0sIGJ1dCBjYiBub3QgZXhpc3RzIWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNicy5zcGxpY2UoaW5kZXgsIDIpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2tleV0ubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIH1cbn1cblxuLyoq5LqL5Lu25ZCN56ew5a6a5LmJKi9cbmV4cG9ydCBlbnVtIEV2ZW50X05hbWUge1xuICAgIEdBTUVfVElNRV9DSEFOR0VELFxuICAgIEdBTUVfQ1JFQVRFX0JBTEwsXG4gICAgR0FNRV9TQ09SRV9DSEFOR0VELFxuICAgIEdBTUVfQkFMTF9QT1dFUl9DSEFOR0VELFxuICAgIEdBTUVfQkVTVF9TQ09SRV9DSEFOR0VELFxuICAgIEdBTUVfT05fVE9VQ0hfTU9WRSxcbiAgICBHQU1FX1BPV0VSX1RZUEVfQ0hBTkdFRCxcbiAgICBHQU1FX1JFTElWRSxcbiAgICBHQU1FX1BMQVlfQlJJQ0tfUkVNT1ZFX0VGRkVDVCxcbiAgICBTSE9XX1RJUFMsXG4gICAgR0FNRV9TVEFSX0dFVF9FRkZFQ1QsXG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/loader/loader_mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ef581f23+RGqbKbSbfR960u', 'loader_mgr');
// src/common/loader/loader_mgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loader_mgr = void 0;
var loader_mgr = /** @class */ (function () {
    function loader_mgr() {
    }
    ;
    loader_mgr.get_inst = function () {
        if (!loader_mgr.inst) {
            loader_mgr.inst = new loader_mgr();
        }
        return loader_mgr.inst;
    };
    /**从远程url下载资源 */
    loader_mgr.prototype.loadExternalAsset = function (url, cb, type) {
        var res = cc.loader.getRes(url);
        if (res) {
            cb.exec(res);
            return;
        }
        cc.loader.load(type ? { url: url, type: type } : url, function (err, res) {
            if (err) {
                cc.warn("loadExternalAsset error", url);
                return;
            }
            cb.exec(res);
        });
    };
    /**从远程url下载资源列表 */
    loader_mgr.prototype.loadExternalAssets = function (urls, cb, types) {
        var loaded_res = {};
        var unloaded_urls = [];
        urls.forEach(function (url) {
            var res = cc.loader.getRes(url);
            if (res) {
                loaded_res[url] = res;
            }
            else {
                unloaded_urls.push(url);
            }
        });
        if (unloaded_urls.length == 0) {
            cb.exec(loaded_res);
            return;
        }
        var loadTasks = [];
        unloaded_urls.forEach(function (url, i) {
            types ? loadTasks.push({ url: url, type: types[i] }) : loadTasks.push(url);
        });
        cc.loader.load(loadTasks, function (errs, res) {
            cc.log("loadExternalAssets from remote url");
            if (errs) {
                cc.warn("loadExternalAssets error", errs);
                return;
            }
            unloaded_urls.forEach(function (url) {
                loaded_res[url] = res.getContent(url);
            });
            cb.exec(loaded_res);
        });
    };
    /**从resources目录加载rawasset，rawaaset是指cc.Texture2D, cc.AudioClip, cc.ParticleAsset*/
    loader_mgr.prototype.loadRawAsset = function (url, cb) {
        var res = cc.loader.getRes(url);
        if (res) {
            cb.exec(res);
            return;
        }
        cc.loader.loadRes(url, function (err, res) {
            if (err) {
                cc.warn("loadRawAsset error", url);
                return;
            }
            cb.exec(res);
        });
    };
    /**从resources目录加载asset，asset是指cc.SpriteFrame, cc.AnimationClip, cc.Prefab*/
    loader_mgr.prototype.loadAsset = function (url, cb, asset_type) {
        var res = cc.loader.getRes(url, asset_type);
        if (res) {
            cb.exec(res);
            return;
        }
        cc.loader.loadRes(url, asset_type, function (err, res) {
            if (err) {
                cc.warn("loadAsset error", url);
                return;
            }
            cb.exec(res);
        });
    };
    /**从resources目录加载asset/rawasset列表，省略资源后缀*/
    loader_mgr.prototype.loadResArray = function (urls, cb) {
        var loaded_res = {};
        var unloaded_urls = [];
        urls.forEach(function (url) {
            var res = cc.loader.getRes(url);
            if (res) {
                loaded_res[url] = res;
            }
            else {
                unloaded_urls.push(url);
            }
        });
        if (unloaded_urls.length == 0) {
            cb.exec(loaded_res);
            return;
        }
        cc.loader.loadResArray(unloaded_urls, function (err, res_arr) {
            if (err) {
                cc.warn("loadResArray error", unloaded_urls);
                return;
            }
            unloaded_urls.forEach(function (url) {
                loaded_res[url] = cc.loader.getRes(url);
            });
            cb.exec(loaded_res);
        });
    };
    /**从resources目录加载prefab(省略资源后缀)，加载成功后生成prefab实例*/
    loader_mgr.prototype.loadPrefabObj = function (url, cb) {
        var res = cc.loader.getRes(url, cc.Prefab);
        if (res) {
            var node = cc.instantiate(res);
            cb.exec(node);
            return;
        }
        //err is typeof Error, err.message
        cc.loader.loadRes(url, cc.Prefab, function (err, res) {
            if (err) {
                cc.warn("loadPrefabObj error", url, err);
                return;
            }
            var node = cc.instantiate(res);
            cb.exec(node);
        });
    };
    /**从resources目录加载prefab列表(省略资源后缀)，加载成功后生成prefab实例*/
    loader_mgr.prototype.loadPrefabObjArray = function (urls, cb) {
        var loaded_obj = {};
        var unloaded_urls = [];
        urls.forEach(function (url) {
            var res = cc.loader.getRes(url, cc.Prefab);
            if (res) {
                loaded_obj[url] = cc.instantiate(res);
            }
            else {
                unloaded_urls.push(url);
            }
        });
        if (unloaded_urls.length == 0) {
            cb.exec(loaded_obj);
            return;
        }
        cc.loader.loadResArray(unloaded_urls, cc.Prefab, function (err, res_arr) {
            if (err) {
                cc.warn("loadPrefabObjArray error", unloaded_urls);
                return;
            }
            unloaded_urls.forEach(function (url) {
                loaded_obj[url] = cc.instantiate(cc.loader.getRes(url, cc.Prefab));
            });
            cb.exec(loaded_obj);
        });
    };
    loader_mgr.prototype.loadPrefabDir = function (dir_path, cb) {
        var map = {};
        cc.loader.loadResDir(dir_path, cc.Prefab, function (err, res_arr, urls) {
            if (err) {
                cc.warn("loadPrefabObjDir error", dir_path);
                return;
            }
            urls.forEach(function (url) {
                map[url] = cc.loader.getRes(url, cc.Prefab);
            });
            cb.exec(map);
        });
    };
    loader_mgr.prototype.loadPrefabObjDir = function (dir_path, cb) {
        var map = {};
        cc.loader.loadResDir(dir_path, cc.Prefab, function (err, res_arr, urls) {
            if (err) {
                cc.warn("loadPrefabObjDir error", dir_path);
                return;
            }
            urls.forEach(function (url) {
                map[url] = cc.instantiate(cc.loader.getRes(url, cc.Prefab));
            });
            cb.exec(map);
        });
    };
    loader_mgr.prototype.release = function (urlOrAssetOrNode) {
        if (urlOrAssetOrNode instanceof cc.Node) {
            //释放节点,从场景上移除
            urlOrAssetOrNode.destroy();
        }
        else {
            //释放缓存引用和资源内容
            cc.loader.release(urlOrAssetOrNode);
        }
    };
    return loader_mgr;
}());
exports.loader_mgr = loader_mgr;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2xvYWRlci9sb2FkZXJfbWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBRUk7SUFBd0IsQ0FBQztJQUFBLENBQUM7SUFFbkIsbUJBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUN0QztRQUNELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLHNDQUFpQixHQUFqQixVQUFrQixHQUFXLEVBQUUsRUFBVyxFQUFFLElBQWE7UUFDckQsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxHQUFHLEVBQUU7WUFDTCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsT0FBTztTQUNWO1FBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ2hELElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLE9BQU87YUFDVjtZQUNELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLHVDQUFrQixHQUFsQixVQUFtQixJQUFjLEVBQUUsRUFBVyxFQUFFLEtBQWdCO1FBQzVELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLGFBQWEsR0FBYSxF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aU5DLElBQUE7QUFqTlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVyLCBnZW5faGFuZGxlciB9IGZyb20gXCIuLi91dGlsXCJcblxuZXhwb3J0IGNsYXNzIGxvYWRlcl9tZ3Ige1xuICAgIHByaXZhdGUgc3RhdGljIGluc3Q6IGxvYWRlcl9tZ3I7XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfTtcblxuICAgIHN0YXRpYyBnZXRfaW5zdCgpOiBsb2FkZXJfbWdyIHtcbiAgICAgICAgaWYgKCFsb2FkZXJfbWdyLmluc3QpIHtcbiAgICAgICAgICAgIGxvYWRlcl9tZ3IuaW5zdCA9IG5ldyBsb2FkZXJfbWdyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvYWRlcl9tZ3IuaW5zdDtcbiAgICB9XG5cbiAgICAvKirku47ov5znqIt1cmzkuIvovb3otYTmupAgKi9cbiAgICBsb2FkRXh0ZXJuYWxBc3NldCh1cmw6IHN0cmluZywgY2I6IGhhbmRsZXIsIHR5cGU/OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcmVzID0gY2MubG9hZGVyLmdldFJlcyh1cmwpO1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBjYi5leGVjKHJlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWQodHlwZSA/IHsgdXJsLCB0eXBlIH0gOiB1cmwsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJsb2FkRXh0ZXJuYWxBc3NldCBlcnJvclwiLCB1cmwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNiLmV4ZWMocmVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoq5LuO6L+c56iLdXJs5LiL6L296LWE5rqQ5YiX6KGoICovXG4gICAgbG9hZEV4dGVybmFsQXNzZXRzKHVybHM6IHN0cmluZ1tdLCBjYjogaGFuZGxlciwgdHlwZXM/OiBzdHJpbmdbXSkge1xuICAgICAgICBsZXQgbG9hZGVkX3JlcyA9IHt9O1xuICAgICAgICBsZXQgdW5sb2FkZWRfdXJsczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgdXJscy5mb3JFYWNoKHVybCA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzID0gY2MubG9hZGVyLmdldFJlcyh1cmwpO1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIGxvYWRlZF9yZXNbdXJsXSA9IHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVubG9hZGVkX3VybHMucHVzaCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVubG9hZGVkX3VybHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNiLmV4ZWMobG9hZGVkX3Jlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkVGFza3MgPSBbXTtcbiAgICAgICAgdW5sb2FkZWRfdXJscy5mb3JFYWNoKCh1cmwsIGkpID0+IHtcbiAgICAgICAgICAgIHR5cGVzID8gbG9hZFRhc2tzLnB1c2goeyB1cmwsIHR5cGU6IHR5cGVzW2ldIH0pIDogbG9hZFRhc2tzLnB1c2godXJsKTtcbiAgICAgICAgfSlcbiAgICAgICAgY2MubG9hZGVyLmxvYWQobG9hZFRhc2tzLCAoZXJycywgcmVzKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCJsb2FkRXh0ZXJuYWxBc3NldHMgZnJvbSByZW1vdGUgdXJsXCIpO1xuICAgICAgICAgICAgaWYgKGVycnMpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZEV4dGVybmFsQXNzZXRzIGVycm9yXCIsIGVycnMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVubG9hZGVkX3VybHMuZm9yRWFjaCh1cmwgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlZF9yZXNbdXJsXSA9IHJlcy5nZXRDb250ZW50KHVybCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNiLmV4ZWMobG9hZGVkX3Jlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKuS7jnJlc291cmNlc+ebruW9leWKoOi9vXJhd2Fzc2V077yMcmF3YWFzZXTmmK/mjIdjYy5UZXh0dXJlMkQsIGNjLkF1ZGlvQ2xpcCwgY2MuUGFydGljbGVBc3NldCovXG4gICAgbG9hZFJhd0Fzc2V0KHVybDogc3RyaW5nLCBjYjogaGFuZGxlcikge1xuICAgICAgICBsZXQgcmVzOiBhbnkgPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCk7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIGNiLmV4ZWMocmVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIChlcnI6IGFueSwgcmVzOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZFJhd0Fzc2V0IGVycm9yXCIsIHVybCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2IuZXhlYyhyZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKirku45yZXNvdXJjZXPnm67lvZXliqDovb1hc3NldO+8jGFzc2V05piv5oyHY2MuU3ByaXRlRnJhbWUsIGNjLkFuaW1hdGlvbkNsaXAsIGNjLlByZWZhYiovXG4gICAgbG9hZEFzc2V0KHVybDogc3RyaW5nLCBjYjogaGFuZGxlciwgYXNzZXRfdHlwZTogdHlwZW9mIGNjLkFzc2V0KTogdm9pZCB7XG4gICAgICAgIGxldCByZXM6IGFueSA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBhc3NldF90eXBlKTtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgY2IuZXhlYyhyZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgYXNzZXRfdHlwZSwgKGVycjogYW55LCByZXM6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJsb2FkQXNzZXQgZXJyb3JcIiwgdXJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYi5leGVjKHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKuS7jnJlc291cmNlc+ebruW9leWKoOi9vWFzc2V0L3Jhd2Fzc2V05YiX6KGo77yM55yB55Wl6LWE5rqQ5ZCO57yAKi9cbiAgICBsb2FkUmVzQXJyYXkodXJsczogc3RyaW5nW10sIGNiOiBoYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIGxldCBsb2FkZWRfcmVzOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IHVubG9hZGVkX3VybHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIHVybHMuZm9yRWFjaCgodXJsOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGxldCByZXM6IGFueSA9IGNjLmxvYWRlci5nZXRSZXModXJsKTtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWRfcmVzW3VybF0gPSByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bmxvYWRlZF91cmxzLnB1c2godXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1bmxvYWRlZF91cmxzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBjYi5leGVjKGxvYWRlZF9yZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzQXJyYXkodW5sb2FkZWRfdXJscywgKGVycjogYW55LCByZXNfYXJyOiBhbnlbXSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJsb2FkUmVzQXJyYXkgZXJyb3JcIiwgdW5sb2FkZWRfdXJscyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW5sb2FkZWRfdXJscy5mb3JFYWNoKCh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlZF9yZXNbdXJsXSA9IGNjLmxvYWRlci5nZXRSZXModXJsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2IuZXhlYyhsb2FkZWRfcmVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoq5LuOcmVzb3VyY2Vz55uu5b2V5Yqg6L29cHJlZmFiKOecgeeVpei1hOa6kOWQjue8gCnvvIzliqDovb3miJDlip/lkI7nlJ/miJBwcmVmYWLlrp7kvosqL1xuICAgIGxvYWRQcmVmYWJPYmoodXJsOiBzdHJpbmcsIGNiOiBoYW5kbGVyKSB7XG4gICAgICAgIGxldCByZXM6IGFueSA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBjYy5QcmVmYWIpO1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyk7XG4gICAgICAgICAgICBjYi5leGVjKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vZXJyIGlzIHR5cGVvZiBFcnJvciwgZXJyLm1lc3NhZ2VcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBjYy5QcmVmYWIsIChlcnI6IGFueSwgcmVzOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZFByZWZhYk9iaiBlcnJvclwiLCB1cmwsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShyZXMpO1xuICAgICAgICAgICAgY2IuZXhlYyhub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoq5LuOcmVzb3VyY2Vz55uu5b2V5Yqg6L29cHJlZmFi5YiX6KGoKOecgeeVpei1hOa6kOWQjue8gCnvvIzliqDovb3miJDlip/lkI7nlJ/miJBwcmVmYWLlrp7kvosqL1xuICAgIGxvYWRQcmVmYWJPYmpBcnJheSh1cmxzOiBzdHJpbmdbXSwgY2I6IGhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxvYWRlZF9vYmo6IGFueSA9IHt9O1xuICAgICAgICBsZXQgdW5sb2FkZWRfdXJsczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgdXJscy5mb3JFYWNoKCh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgbGV0IHJlczogYW55ID0gY2MubG9hZGVyLmdldFJlcyh1cmwsIGNjLlByZWZhYik7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkX29ialt1cmxdID0gY2MuaW5zdGFudGlhdGUocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVubG9hZGVkX3VybHMucHVzaCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVubG9hZGVkX3VybHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNiLmV4ZWMobG9hZGVkX29iaik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNBcnJheSh1bmxvYWRlZF91cmxzLCBjYy5QcmVmYWIsIChlcnI6IGFueSwgcmVzX2FycjogYW55W10pOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZFByZWZhYk9iakFycmF5IGVycm9yXCIsIHVubG9hZGVkX3VybHMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVubG9hZGVkX3VybHMuZm9yRWFjaCgodXJsOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZWRfb2JqW3VybF0gPSBjYy5pbnN0YW50aWF0ZShjYy5sb2FkZXIuZ2V0UmVzKHVybCwgY2MuUHJlZmFiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNiLmV4ZWMobG9hZGVkX29iaik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRQcmVmYWJEaXIoZGlyX3BhdGg6IHN0cmluZywgY2I6IGhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1hcDogYW55ID0ge307XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKGRpcl9wYXRoLCBjYy5QcmVmYWIsIChlcnI6IGFueSwgcmVzX2FycjogYW55W10sIHVybHM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihcImxvYWRQcmVmYWJPYmpEaXIgZXJyb3JcIiwgZGlyX3BhdGgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybHMuZm9yRWFjaCgodXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFwW3VybF0gPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCwgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2IuZXhlYyhtYXApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkUHJlZmFiT2JqRGlyKGRpcl9wYXRoOiBzdHJpbmcsIGNiOiBoYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIGxldCBtYXA6IGFueSA9IHt9O1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihkaXJfcGF0aCwgY2MuUHJlZmFiLCAoZXJyOiBhbnksIHJlc19hcnI6IGFueVtdLCB1cmxzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJsb2FkUHJlZmFiT2JqRGlyIGVycm9yXCIsIGRpcl9wYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxzLmZvckVhY2goKHVybCkgPT4ge1xuICAgICAgICAgICAgICAgIG1hcFt1cmxdID0gY2MuaW5zdGFudGlhdGUoY2MubG9hZGVyLmdldFJlcyh1cmwsIGNjLlByZWZhYikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYi5leGVjKG1hcCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbGVhc2UodXJsT3JBc3NldE9yTm9kZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh1cmxPckFzc2V0T3JOb2RlIGluc3RhbmNlb2YgY2MuTm9kZSkge1xuICAgICAgICAgICAgLy/ph4rmlL7oioLngrks5LuO5Zy65pmv5LiK56e76ZmkXG4gICAgICAgICAgICB1cmxPckFzc2V0T3JOb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8v6YeK5pS+57yT5a2Y5byV55So5ZKM6LWE5rqQ5YaF5a65XG4gICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZSh1cmxPckFzc2V0T3JOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/tween/Tween.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28890U/NmdCwqWMUik18OnQ', 'Tween');
// src/common/tween/Tween.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ease = exports.Tween = void 0;
var timer_mgr_1 = require("../timer/timer_mgr");
var util_1 = require("../util");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
/**
 * Tween is the animation easing class of Egret
 * @see http://edn.com/cn/docs/page/576 Tween ease animation
 * @version Egret 2.4
 * @platform Web,Native
 * @includeExample extension/tween/Tween.ts
 * @language en_US
 */
/**
 * Tween是Egret的动画缓动类
 * @see http://edn.com/cn/docs/page/576 Tween缓动动画
 * @version Egret 2.4
 * @platform Web,Native
 * @includeExample extension/tween/Tween.ts
 * @language zh_CN
 */
var Tween = /** @class */ (function () {
    /**
     * 创建一个 Tween 对象
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    function Tween(target, props, pluginData) {
        /**
         * @private
         */
        this._target = null;
        /**
         * @private
         */
        this._useTicks = false;
        /**
         * @private
         */
        this.ignoreGlobalPause = false;
        /**
         * @private
         */
        this.loop = false;
        /**
         * @private
         */
        this.pluginData = null;
        /**
         * @private
         */
        this._steps = null;
        /**
         * @private
         */
        this.paused = false;
        /**
         * @private
         */
        this.duration = 0;
        /**
         * @private
         */
        this._prevPos = -1;
        /**
         * @private
         */
        this.position = null;
        /**
         * @private
         */
        this._prevPosition = 0;
        /**
         * @private
         */
        this._stepPosition = 0;
        /**
         * @private
         */
        this.passive = false;
        this.initialize(target, props, pluginData);
    }
    /**
     * Activate an object and add a Tween animation to the object
     * @param target {any} The object to be activated
     * @param props {any} Parameters, support loop onChange onChangeObj
     * @param pluginData {any} Write realized
     * @param override {boolean} Whether to remove the object before adding a tween, the default value false
     * Not recommended, you can use Tween.removeTweens(target) instead.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 激活一个对象，对其添加 Tween 动画
     * @param target {any} 要激活 Tween 的对象
     * @param props {any} 参数，支持loop(循环播放) onChange(变化函数) onChangeObj(变化函数作用域)
     * @param pluginData {any} 暂未实现
     * @param override {boolean} 是否移除对象之前添加的tween，默认值false。
     * 不建议使用，可使用 Tween.removeTweens(target) 代替。
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.get = function (target, props, pluginData, override) {
        if (pluginData === void 0) { pluginData = null; }
        if (override === void 0) { override = false; }
        if (override) {
            Tween.removeTweens(target);
        }
        return new Tween(target, props, pluginData);
    };
    /**
     * Delete all Tween animations from an object
     * @param target The object whose Tween to be deleted
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 删除一个对象上的全部 Tween 动画
     * @param target  需要移除 Tween 的对象
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.removeTweens = function (target) {
        if (!target.tween_count) {
            return;
        }
        var tweens = Tween._tweens;
        for (var i = tweens.length - 1; i >= 0; i--) {
            if (tweens[i]._target == target) {
                tweens[i].paused = true;
                tweens.splice(i, 1);
            }
        }
        target.tween_count = 0;
    };
    /**
     * Pause all Tween animations of a certain object
     * @param target The object whose Tween to be paused
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 暂停某个对象的所有 Tween
     * @param target 要暂停 Tween 的对象
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.pauseTweens = function (target) {
        if (!target.tween_count) {
            return;
        }
        var tweens = Tween._tweens;
        for (var i = tweens.length - 1; i >= 0; i--) {
            if (tweens[i]._target == target) {
                tweens[i].paused = true;
            }
        }
    };
    /**
     * Resume playing all easing of a certain object
     * @param target The object whose Tween to be resumed
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 继续播放某个对象的所有缓动
     * @param target 要继续播放 Tween 的对象
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.resumeTweens = function (target) {
        if (!target.tween_count) {
            return;
        }
        var tweens = Tween._tweens;
        for (var i = tweens.length - 1; i >= 0; i--) {
            if (tweens[i]._target == target) {
                tweens[i].paused = false;
            }
        }
    };
    /**
     * @private
     *
     * @param delta ms
     * @param paused
     */
    Tween.tick = function (delta, paused) {
        if (paused === void 0) { paused = false; }
        var tweens = Tween._tweens.concat();
        for (var i = tweens.length - 1; i >= 0; i--) {
            var tween = tweens[i];
            if ((paused && !tween.ignoreGlobalPause) || tween.paused) {
                continue;
            }
            tween.$tick(tween._useTicks ? 1 : delta);
        }
    };
    /**
     * @private
     *
     * @param tween
     * @param value
     */
    Tween._register = function (tween, value) {
        var target = tween._target;
        var tweens = Tween._tweens;
        if (value) {
            if (target) {
                target.tween_count = target.tween_count > 0 ? target.tween_count + 1 : 1;
            }
            tweens.push(tween);
            if (!Tween._inited) {
                Tween._inited = true;
                timer_mgr_1.TimerMgr.getInst().add_updater(util_1.gen_handler(function (t) {
                    Tween.tick(t * 1000);
                }));
            }
        }
        else {
            if (target) {
                target.tween_count--;
            }
            var i = tweens.length;
            while (i--) {
                if (tweens[i] == tween) {
                    tweens.splice(i, 1);
                    return;
                }
            }
        }
    };
    /**
     * Delete all Tween
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 删除所有 Tween
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.removeAllTweens = function () {
        var tweens = Tween._tweens;
        for (var i = 0, l = tweens.length; i < l; i++) {
            var tween = tweens[i];
            tween.paused = true;
            tween._target.tween_count = 0;
        }
        tweens.length = 0;
    };
    /**
     * @private
     *
     * @param target
     * @param props
     * @param pluginData
     */
    Tween.prototype.initialize = function (target, props, pluginData) {
        this._target = target;
        if (props) {
            this._useTicks = props.useTicks;
            this.ignoreGlobalPause = props.ignoreGlobalPause;
            this.loop = props.loop;
            // props.onChange && this.addEventListener("change", props.onChange, props.onChangeObj);
            this.onChange = props.onChange;
            this.onChangeObj = props.onChangeObj;
            if (props.override) {
                Tween.removeTweens(target);
            }
        }
        this.pluginData = pluginData || {};
        this._curQueueProps = {};
        this._initQueueProps = {};
        this._steps = [];
        if (props && props.paused) {
            this.paused = true;
        }
        else {
            Tween._register(this, true);
        }
        if (props && props.position != null) {
            this.setPosition(props.position, Tween.NONE);
        }
    };
    /**
     * @private
     *
     * @param value
     * @param actionsMode
     * @returns
     */
    Tween.prototype.setPosition = function (value, actionsMode) {
        if (actionsMode === void 0) { actionsMode = 1; }
        if (value < 0) {
            value = 0;
        }
        //正常化位置
        var t = value;
        var end = false;
        if (t >= this.duration) {
            if (this.loop) {
                var newTime = t % this.duration;
                if (t > 0 && newTime === 0) {
                    t = this.duration;
                }
                else {
                    t = newTime;
                }
            }
            else {
                t = this.duration;
                end = true;
            }
        }
        if (t == this._prevPos) {
            return end;
        }
        if (end) {
            this.setPaused(true);
        }
        var prevPos = this._prevPos;
        this.position = this._prevPos = t;
        this._prevPosition = value;
        if (this._target) {
            if (this._steps.length > 0) {
                // 找到新的tween
                var l = this._steps.length;
                var stepIndex = -1;
                for (var i = 0; i < l; i++) {
                    if (this._steps[i].type == "step") {
                        stepIndex = i;
                        if (this._steps[i].t <= t && this._steps[i].t + this._steps[i].d >= t) {
                            break;
                        }
                    }
                }
                for (var i = 0; i < l; i++) {
                    if (this._steps[i].type == "action") {
                        //执行actions
                        if (actionsMode != 0) {
                            if (this._useTicks) {
                                this._runAction(this._steps[i], t, t);
                            }
                            else if (actionsMode == 1 && t < prevPos) {
                                if (prevPos != this.duration) {
                                    this._runAction(this._steps[i], prevPos, this.duration);
                                }
                                this._runAction(this._steps[i], 0, t, true);
                            }
                            else {
                                this._runAction(this._steps[i], prevPos, t);
                            }
                        }
                    }
                    else if (this._steps[i].type == "step") {
                        if (stepIndex == i) {
                            var step = this._steps[stepIndex];
                            this._updateTargetProps(step, Math.min((this._stepPosition = t - step.t) / step.d, 1));
                        }
                    }
                }
            }
        }
        // this.dispatchEventWith("change");
        this.onChange && this.onChange.call(this.onChangeObj);
        return end;
    };
    /**
     * @private
     *
     * @param startPos
     * @param endPos
     * @param includeStart
     */
    Tween.prototype._runAction = function (action, startPos, endPos, includeStart) {
        if (includeStart === void 0) { includeStart = false; }
        var sPos = startPos;
        var ePos = endPos;
        if (startPos > endPos) {
            //把所有的倒置
            sPos = endPos;
            ePos = startPos;
        }
        var pos = action.t;
        if (pos == ePos || (pos > sPos && pos < ePos) || (includeStart && pos == startPos)) {
            action.f.apply(action.o, action.p);
        }
    };
    /**
     * @private
     *
     * @param step
     * @param ratio
     */
    Tween.prototype._updateTargetProps = function (step, ratio) {
        var p0, p1, v, v0, v1, arr;
        if (!step && ratio == 1) {
            this.passive = false;
            p0 = p1 = this._curQueueProps;
        }
        else {
            this.passive = !!step.v;
            //不更新props.
            if (this.passive) {
                return;
            }
            //使用ease
            if (step.e) {
                ratio = step.e(ratio, 0, 1, 1);
            }
            p0 = step.p0;
            p1 = step.p1;
        }
        for (var n in this._initQueueProps) {
            if ((v0 = p0[n]) == null) {
                p0[n] = v0 = this._initQueueProps[n];
            }
            if ((v1 = p1[n]) == null) {
                p1[n] = v1 = v0;
            }
            if (v0 == v1 || ratio == 0 || ratio == 1 || (typeof (v0) != "number")) {
                v = ratio == 1 ? v1 : v0;
            }
            else {
                v = v0 + (v1 - v0) * ratio;
            }
            var ignore = false;
            if (arr = Tween._plugins[n]) {
                for (var i = 0, l = arr.length; i < l; i++) {
                    var v2 = arr[i].tween(this, n, v, p0, p1, ratio, !!step && p0 == p1, !step);
                    if (v2 == Tween.IGNORE) {
                        ignore = true;
                    }
                    else {
                        v = v2;
                    }
                }
            }
            if (!ignore) {
                this._target[n] = v;
            }
        }
    };
    /**
     * Whether setting is paused
     * @param value {boolean} Whether to pause
     * @returns Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 设置是否暂停
     * @param value {boolean} 是否暂停
     * @returns Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.prototype.setPaused = function (value) {
        if (this.paused == value) {
            return this;
        }
        this.paused = value;
        Tween._register(this, !value);
        return this;
    };
    /**
     * @private
     *
     * @param props
     * @returns
     */
    Tween.prototype._cloneProps = function (props) {
        var o = {};
        for (var n in props) {
            o[n] = props[n];
        }
        return o;
    };
    /**
     * @private
     *
     * @param o
     * @returns
     */
    Tween.prototype._addStep = function (o) {
        if (o.d > 0) {
            o.type = "step";
            this._steps.push(o);
            o.t = this.duration;
            this.duration += o.d;
        }
        return this;
    };
    /**
     * @private
     *
     * @param o
     * @returns
     */
    Tween.prototype._appendQueueProps = function (o) {
        var arr, oldValue, i, l, injectProps;
        for (var n in o) {
            if (this._initQueueProps[n] === undefined) {
                oldValue = this._target[n];
                //设置plugins
                if (arr = Tween._plugins[n]) {
                    for (i = 0, l = arr.length; i < l; i++) {
                        oldValue = arr[i].init(this, n, oldValue);
                    }
                }
                this._initQueueProps[n] = this._curQueueProps[n] = (oldValue === undefined) ? null : oldValue;
            }
            else {
                oldValue = this._curQueueProps[n];
            }
        }
        for (var n in o) {
            oldValue = this._curQueueProps[n];
            if (arr = Tween._plugins[n]) {
                injectProps = injectProps || {};
                for (i = 0, l = arr.length; i < l; i++) {
                    if (arr[i].step) {
                        arr[i].step(this, n, oldValue, o[n], injectProps);
                    }
                }
            }
            this._curQueueProps[n] = o[n];
        }
        if (injectProps) {
            this._appendQueueProps(injectProps);
        }
        return this._curQueueProps;
    };
    /**
     * @private
     *
     * @param o
     * @returns
     */
    Tween.prototype._addAction = function (o) {
        o.t = this.duration;
        o.type = "action";
        this._steps.push(o);
        return this;
    };
    /**
     * @private
     *
     * @param props
     * @param o
     */
    Tween.prototype._set = function (props, o) {
        for (var n in props) {
            o[n] = props[n];
        }
    };
    /**
     * Wait the specified milliseconds before the execution of the next animation
     * @param duration {number} Waiting time, in milliseconds
     * @param passive {boolean} Whether properties are updated during the waiting time
     * @returns Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 等待指定毫秒后执行下一个动画
     * @param duration {number} 要等待的时间，以毫秒为单位
     * @param passive {boolean} 等待期间属性是否会更新
     * @returns Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.prototype.wait = function (duration, passive) {
        if (duration == null || duration <= 0) {
            return this;
        }
        var o = this._cloneProps(this._curQueueProps);
        return this._addStep({ d: duration, p0: o, p1: o, v: passive });
    };
    /**
     * Modify the property of the specified object to a specified value
     * @param props {Object} Property set of an object
     * @param duration {number} Duration
     * @param ease {Ease} Easing algorithm
     * @returns {Tween} Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 将指定对象的属性修改为指定值
     * @param props {Object} 对象的属性集合
     * @param duration {number} 持续时间
     * @param ease {Ease} 缓动算法
     * @returns {Tween} Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.prototype.to = function (props, duration, ease) {
        if (ease === void 0) { ease = undefined; }
        if (isNaN(duration) || duration < 0) {
            duration = 0;
        }
        this._addStep({ d: duration || 0, p0: this._cloneProps(this._curQueueProps), e: ease, p1: this._cloneProps(this._appendQueueProps(props)) });
        //加入一步set，防止游戏极其卡顿时候，to后面的call取到的属性值不对
        return this.set(props);
    };
    /**
     * Execute callback function
     * @param callback {Function} Callback method
     * @param thisObj {any} this action scope of the callback method
     * @param params {any[]} Parameter of the callback method
     * @returns {Tween} Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @example
     * <pre>
     *  Tween.get(display).call(function (a:number, b:string) {
     *      console.log("a: " + a); // the first parameter passed 233
     *      console.log("b: " + b); // the second parameter passed “hello”
     *  }, this, [233, "hello"]);
     * </pre>
     * @language en_US
     */
    /**
     * 执行回调函数
     * @param callback {Function} 回调方法
     * @param thisObj {any} 回调方法this作用域
     * @param params {any[]} 回调方法参数
     * @returns {Tween} Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @example
     * <pre>
     *  Tween.get(display).call(function (a:number, b:string) {
     *      console.log("a: " + a); //对应传入的第一个参数 233
     *      console.log("b: " + b); //对应传入的第二个参数 “hello”
     *  }, this, [233, "hello"]);
     * </pre>
     * @language zh_CN
     */
    Tween.prototype.call = function (callback, thisObj, params) {
        if (thisObj === void 0) { thisObj = undefined; }
        if (params === void 0) { params = undefined; }
        return this._addAction({ f: callback, p: params ? params : [], o: thisObj ? thisObj : this._target });
    };
    /**
     * Now modify the properties of the specified object to the specified value
     * @param props {Object} Property set of an object
     * @param target The object whose Tween to be resumed
     * @returns {Tween} Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     */
    /**
     * 立即将指定对象的属性修改为指定值
     * @param props {Object} 对象的属性集合
     * @param target 要继续播放 Tween 的对象
     * @returns {Tween} Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     */
    Tween.prototype.set = function (props, target) {
        if (target === void 0) { target = null; }
        //更新当前数据，保证缓动流畅性
        this._appendQueueProps(props);
        return this._addAction({ f: this._set, o: this, p: [props, target ? target : this._target] });
    };
    /**
     * Execute
     * @param tween {Tween} The Tween object to be operated. Default: this
     * @returns {Tween} Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 执行
     * @param tween {Tween} 需要操作的 Tween 对象，默认this
     * @returns {Tween} Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.prototype.play = function (tween) {
        if (!tween) {
            tween = this;
        }
        return this.call(tween.setPaused, tween, [false]);
    };
    /**
     * Pause
     * @param tween {Tween} The Tween object to be operated. Default: this
     * @returns {Tween} Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 暂停
     * @param tween {Tween} 需要操作的 Tween 对象，默认this
     * @returns {Tween} Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.prototype.pause = function (tween) {
        if (!tween) {
            tween = this;
        }
        return this.call(tween.setPaused, tween, [true]);
    };
    /**
     * @method Tween#tick
     * @param delta {number}
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    Tween.prototype.$tick = function (delta) {
        if (this.paused) {
            return;
        }
        this.setPosition(this._prevPosition + delta);
    };
    /**
     * 不做特殊处理
     * @constant {number} Tween.NONE
     * @private
     */
    Tween.NONE = 0;
    /**
     * 循环
     * @constant {number} Tween.LOOP
     * @private
     */
    Tween.LOOP = 1;
    /**
     * 倒序
     * @constant {number} Tween.REVERSE
     * @private
     */
    Tween.REVERSE = 2;
    /**
     * @private
     */
    Tween._tweens = [];
    /**
     * @private
     */
    Tween.IGNORE = {};
    /**
     * @private
     */
    Tween._plugins = {};
    /**
     * @private
     */
    Tween._inited = false;
    Tween._lastTime = 0;
    return Tween;
}());
exports.Tween = Tween;
var Ease = /** @class */ (function () {
    /**
     * @version Egret 2.4
     * @platform Web,Native
     */
    function Ease() {
    }
    /**
     * get.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.get = function (amount) {
        if (amount < -1) {
            amount = -1;
        }
        if (amount > 1) {
            amount = 1;
        }
        return function (t) {
            if (amount == 0) {
                return t;
            }
            if (amount < 0) {
                return t * (t * -amount + 1 + amount);
            }
            return t * ((2 - t) * amount + (1 - amount));
        };
    };
    /**
     * get pow in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get pow in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getPowIn = function (pow) {
        return function (t) {
            return Math.pow(t, pow);
        };
    };
    /**
     * get pow out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get pow out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getPowOut = function (pow) {
        return function (t) {
            return 1 - Math.pow(1 - t, pow);
        };
    };
    /**
     * get pow in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get pow in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getPowInOut = function (pow) {
        return function (t) {
            if ((t *= 2) < 1)
                return 0.5 * Math.pow(t, pow);
            return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow));
        };
    };
    /**
     * sine in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * sine in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.sineIn = function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
    };
    /**
     * sine out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * sine out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.sineOut = function (t) {
        return Math.sin(t * Math.PI / 2);
    };
    /**
     * sine in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * sine in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.sineInOut = function (t) {
        return -0.5 * (Math.cos(Math.PI * t) - 1);
    };
    /**
     * get back in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get back in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getBackIn = function (amount) {
        return function (t) {
            return t * t * ((amount + 1) * t - amount);
        };
    };
    /**
     * get back out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get back out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getBackOut = function (amount) {
        return function (t) {
            return (--t * t * ((amount + 1) * t + amount) + 1);
        };
    };
    /**
     * get back in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get back in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getBackInOut = function (amount) {
        amount *= 1.525;
        return function (t) {
            if ((t *= 2) < 1)
                return 0.5 * (t * t * ((amount + 1) * t - amount));
            return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
        };
    };
    /**
     * circ in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * circ in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.circIn = function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
    };
    /**
     * circ out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * circ out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.circOut = function (t) {
        return Math.sqrt(1 - (--t) * t);
    };
    /**
     * circ in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * circ in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.circInOut = function (t) {
        if ((t *= 2) < 1) {
            return -0.5 * (Math.sqrt(1 - t * t) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    };
    /**
     * bounce in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * bounce in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.bounceIn = function (t) {
        return 1 - Ease.bounceOut(1 - t);
    };
    /**
     * bounce out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * bounce out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.bounceOut = function (t) {
        if (t < 1 / 2.75) {
            return (7.5625 * t * t);
        }
        else if (t < 2 / 2.75) {
            return (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);
        }
        else if (t < 2.5 / 2.75) {
            return (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375);
        }
        else {
            return (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
        }
    };
    /**
     * bounce in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * bounce in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.bounceInOut = function (t) {
        if (t < 0.5)
            return Ease.bounceIn(t * 2) * .5;
        return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
    };
    /**
     * get elastic in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get elastic in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getElasticIn = function (amplitude, period) {
        var pi2 = Math.PI * 2;
        return function (t) {
            if (t == 0 || t == 1)
                return t;
            var s = period / pi2 * Math.asin(1 / amplitude);
            return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
        };
    };
    /**
     * get elastic out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get elastic out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getElasticOut = function (amplitude, period) {
        var pi2 = Math.PI * 2;
        return function (t) {
            if (t == 0 || t == 1)
                return t;
            var s = period / pi2 * Math.asin(1 / amplitude);
            return (amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1);
        };
    };
    /**
     * get elastic in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get elastic in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getElasticInOut = function (amplitude, period) {
        var pi2 = Math.PI * 2;
        return function (t) {
            var s = period / pi2 * Math.asin(1 / amplitude);
            if ((t *= 2) < 1)
                return -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
            return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * 0.5 + 1;
        };
    };
    /**
     * quad in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quad in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quadIn = Ease.getPowIn(2);
    /**
     * quad out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quad out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quadOut = Ease.getPowOut(2);
    /**
     * quad in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quad in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quadInOut = Ease.getPowInOut(2);
    /**
     * cubic in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * cubic in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.cubicIn = Ease.getPowIn(3);
    /**
     * cubic out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * cubic out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.cubicOut = Ease.getPowOut(3);
    /**
     * cubic in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * cubic in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.cubicInOut = Ease.getPowInOut(3);
    /**
     * quart in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quart in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quartIn = Ease.getPowIn(4);
    /**
     * quart out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quart out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quartOut = Ease.getPowOut(4);
    /**
     * quart in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quart in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quartInOut = Ease.getPowInOut(4);
    /**
     * quint in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quint in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quintIn = Ease.getPowIn(5);
    /**
     * quint out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quint out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quintOut = Ease.getPowOut(5);
    /**
     * quint in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quint in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quintInOut = Ease.getPowInOut(5);
    /**
     * back in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * back in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.backIn = Ease.getBackIn(1.7);
    /**
     * back out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * back out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.backOut = Ease.getBackOut(1.7);
    /**
     * back in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * back in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.backInOut = Ease.getBackInOut(1.7);
    /**
     * elastic in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * elastic in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.elasticIn = Ease.getElasticIn(1, 0.3);
    /**
     * elastic out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * elastic out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.elasticOut = Ease.getElasticOut(1, 0.3);
    /**
     * elastic in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * elastic in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.elasticInOut = Ease.getElasticInOut(1, 0.3 * 1.5);
    return Ease;
}());
exports.Ease = Ease;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3R3ZWVuL1R3ZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE4QztBQUM5QyxnQ0FBc0M7QUFFdEMsc0ZBQXNGO0FBQ3RGLEVBQUU7QUFDRixpREFBaUQ7QUFDakQsd0JBQXdCO0FBQ3hCLHNFQUFzRTtBQUN0RSwrRUFBK0U7QUFDL0UsRUFBRTtBQUNGLHVFQUF1RTtBQUN2RSxzRUFBc0U7QUFDdEUsMEVBQTBFO0FBQzFFLDRFQUE0RTtBQUM1RSw2RUFBNkU7QUFDN0UsOENBQThDO0FBQzlDLDZFQUE2RTtBQUM3RSw4RUFBOEU7QUFDOUUsRUFBRTtBQUNGLCtFQUErRTtBQUMvRSxnRkFBZ0Y7QUFDaEYsMkVBQTJFO0FBQzNFLGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFDaEYsOEVBQThFO0FBQzlFLDZFQUE2RTtBQUM3RSx3RUFBd0U7QUFDeEUsZ0ZBQWdGO0FBQ2hGLHNEQUFzRDtBQUN0RCxFQUFFO0FBQ0Ysc0ZBQXNGO0FBR3RGOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7SUFpU0k7Ozs7O09BS0c7SUFDSCxlQUFZLE1BQVcsRUFBRSxLQUFVLEVBQUUsVUFBZTtRQWxRcEQ7O1dBRUc7UUFDSyxZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQzVCOztXQUVHO1FBQ0ssY0FBUyxHQUFZLEtBQUssQ0FBQztRQUNuQzs7V0FFRztRQUNLLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUMzQzs7V0FFRztRQUNLLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDOUI7O1dBRUc7UUFDSyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBUzFCOztXQUVHO1FBQ0ssV0FBTSxHQUFVLElBQUksQ0FBQztRQUM3Qjs7V0FFRztRQUNLLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDaEM7O1dBRUc7UUFDSyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQzdCOztXQUVHO1FBQ0ssYUFBUSxHQUFXLENBQUMsQ0FB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S0c7SUFDSDs7Ozs7T0FLRztJQUNXLFdBQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBb0IzQzs7Ozs7T0FLRztJQUNIOzs7OztPQUtHO0lBQ1csWUFBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFzQjdDOzs7OztPQUtHO0lBQ0g7Ozs7O09BS0c7SUFDVyxjQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQW1JakQ7Ozs7O09BS0c7SUFDSDs7Ozs7T0FLRztJQUNXLGNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQXVCcEQ7Ozs7O09BS0c7SUFDSDs7Ozs7T0FLRztJQUNXLGVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQXVCdEQ7Ozs7O09BS0c7SUFDSDs7Ozs7T0FLRztJQUNXLGlCQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLFdBQUM7Q0FobUJELEFBZ21CQyxJQUFBO0FBaG1CWSxvQkFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVyTWdyIH0gZnJvbSBcIi4uL3RpbWVyL3RpbWVyX21nclwiO1xuaW1wb3J0IHsgZ2VuX2hhbmRsZXIgfSBmcm9tIFwiLi4vdXRpbFwiO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRWdyZXQgVGVjaG5vbG9neS5cbi8vICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuLy9cbi8vICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuLy8gICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbi8vICAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIEVncmV0IG5vciB0aGVcbi8vICAgICAgIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXG4vLyAgICAgICBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBFR1JFVCBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1Ncbi8vICBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTXG4vLyAgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbi8vICBJTiBOTyBFVkVOVCBTSEFMTCBFR1JFVCBBTkQgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4vLyAgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7TE9TUyBPRiBVU0UsIERBVEEsXG4vLyAgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRlxuLy8gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4vLyAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuLy8gIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vKipcbiAqIFR3ZWVuIGlzIHRoZSBhbmltYXRpb24gZWFzaW5nIGNsYXNzIG9mIEVncmV0XG4gKiBAc2VlIGh0dHA6Ly9lZG4uY29tL2NuL2RvY3MvcGFnZS81NzYgVHdlZW4gZWFzZSBhbmltYXRpb25cbiAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAqIEBpbmNsdWRlRXhhbXBsZSBleHRlbnNpb24vdHdlZW4vVHdlZW4udHNcbiAqIEBsYW5ndWFnZSBlbl9VU1xuICovXG4vKipcbiAqIFR3ZWVu5pivRWdyZXTnmoTliqjnlLvnvJPliqjnsbtcbiAqIEBzZWUgaHR0cDovL2Vkbi5jb20vY24vZG9jcy9wYWdlLzU3NiBUd2Vlbue8k+WKqOWKqOeUu1xuICogQHZlcnNpb24gRWdyZXQgMi40XG4gKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICogQGluY2x1ZGVFeGFtcGxlIGV4dGVuc2lvbi90d2Vlbi9Ud2Vlbi50c1xuICogQGxhbmd1YWdlIHpoX0NOXG4gKi9cbmV4cG9ydCBjbGFzcyBUd2VlbiB7XG4gICAgLyoqXG4gICAgICog5LiN5YGa54m55q6K5aSE55CGXG4gICAgICogQGNvbnN0YW50IHtudW1iZXJ9IFR3ZWVuLk5PTkVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIE5PTkUgPSAwO1xuICAgIC8qKlxuICAgICAqIOW+queOr1xuICAgICAqIEBjb25zdGFudCB7bnVtYmVyfSBUd2Vlbi5MT09QXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBMT09QID0gMTtcbiAgICAvKipcbiAgICAgKiDlgJLluo9cbiAgICAgKiBAY29uc3RhbnQge251bWJlcn0gVHdlZW4uUkVWRVJTRVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgUkVWRVJTRSA9IDI7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIF90d2VlbnM6IFR3ZWVuW10gPSBbXTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIElHTk9SRSA9IHt9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3BsdWdpbnMgPSB7fTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIF9pbml0ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdGFyZ2V0OiBhbnkgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXNlVGlja3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgaWdub3JlR2xvYmFsUGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgbG9vcDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBwbHVnaW5EYXRhID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2N1clF1ZXVlUHJvcHM7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0UXVldWVQcm9wcztcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3N0ZXBzOiBhbnlbXSA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHBhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBkdXJhdGlvbjogbnVtYmVyID0gMDtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByZXZQb3M6IG51bWJlciA9IC0xO1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByZXZQb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3N0ZXBQb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgcGFzc2l2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBvbkNoYW5nZTogRnVuY3Rpb25cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgb25DaGFuZ2VPYmpcblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlIGFuIG9iamVjdCBhbmQgYWRkIGEgVHdlZW4gYW5pbWF0aW9uIHRvIHRoZSBvYmplY3RcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IHthbnl9IFRoZSBvYmplY3QgdG8gYmUgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHByb3BzIHthbnl9IFBhcmFtZXRlcnMsIHN1cHBvcnQgbG9vcCBvbkNoYW5nZSBvbkNoYW5nZU9ialxuICAgICAqIEBwYXJhbSBwbHVnaW5EYXRhIHthbnl9IFdyaXRlIHJlYWxpemVkXG4gICAgICogQHBhcmFtIG92ZXJyaWRlIHtib29sZWFufSBXaGV0aGVyIHRvIHJlbW92ZSB0aGUgb2JqZWN0IGJlZm9yZSBhZGRpbmcgYSB0d2VlbiwgdGhlIGRlZmF1bHQgdmFsdWUgZmFsc2VcbiAgICAgKiBOb3QgcmVjb21tZW5kZWQsIHlvdSBjYW4gdXNlIFR3ZWVuLnJlbW92ZVR3ZWVucyh0YXJnZXQpIGluc3RlYWQuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDmv4DmtLvkuIDkuKrlr7nosaHvvIzlr7nlhbbmt7vliqAgVHdlZW4g5Yqo55S7XG4gICAgICogQHBhcmFtIHRhcmdldCB7YW55fSDopoHmv4DmtLsgVHdlZW4g55qE5a+56LGhXG4gICAgICogQHBhcmFtIHByb3BzIHthbnl9IOWPguaVsO+8jOaUr+aMgWxvb3Ao5b6q546v5pKt5pS+KSBvbkNoYW5nZSjlj5jljJblh73mlbApIG9uQ2hhbmdlT2JqKOWPmOWMluWHveaVsOS9nOeUqOWfnylcbiAgICAgKiBAcGFyYW0gcGx1Z2luRGF0YSB7YW55fSDmmoLmnKrlrp7njrBcbiAgICAgKiBAcGFyYW0gb3ZlcnJpZGUge2Jvb2xlYW59IOaYr+WQpuenu+mZpOWvueixoeS5i+WJjea3u+WKoOeahHR3ZWVu77yM6buY6K6k5YC8ZmFsc2XjgIJcbiAgICAgKiDkuI3lu7rorq7kvb/nlKjvvIzlj6/kvb/nlKggVHdlZW4ucmVtb3ZlVHdlZW5zKHRhcmdldCkg5Luj5pu/44CCXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldCh0YXJnZXQ6IGFueSwgcHJvcHM/OiB7IGxvb3A/OiBib29sZWFuLCBvbkNoYW5nZT86IEZ1bmN0aW9uLCBvbkNoYW5nZU9iaj86IGFueSB9LCBwbHVnaW5EYXRhOiBhbnkgPSBudWxsLCBvdmVycmlkZTogYm9vbGVhbiA9IGZhbHNlKTogVHdlZW4ge1xuICAgICAgICBpZiAob3ZlcnJpZGUpIHtcbiAgICAgICAgICAgIFR3ZWVuLnJlbW92ZVR3ZWVucyh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0LCBwcm9wcywgcGx1Z2luRGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGFsbCBUd2VlbiBhbmltYXRpb25zIGZyb20gYW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHRhcmdldCBUaGUgb2JqZWN0IHdob3NlIFR3ZWVuIHRvIGJlIGRlbGV0ZWRcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIOWIoOmZpOS4gOS4quWvueixoeS4iueahOWFqOmDqCBUd2VlbiDliqjnlLtcbiAgICAgKiBAcGFyYW0gdGFyZ2V0ICDpnIDopoHnp7vpmaQgVHdlZW4g55qE5a+56LGhXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZVR3ZWVucyh0YXJnZXQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRhcmdldC50d2Vlbl9jb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0d2VlbnM6IFR3ZWVuW10gPSBUd2Vlbi5fdHdlZW5zO1xuICAgICAgICBmb3IgKGxldCBpID0gdHdlZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodHdlZW5zW2ldLl90YXJnZXQgPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdHdlZW5zW2ldLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHdlZW5zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQudHdlZW5fY291bnQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlIGFsbCBUd2VlbiBhbmltYXRpb25zIG9mIGEgY2VydGFpbiBvYmplY3RcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSBvYmplY3Qgd2hvc2UgVHdlZW4gdG8gYmUgcGF1c2VkXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDmmoLlgZzmn5DkuKrlr7nosaHnmoTmiYDmnIkgVHdlZW5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOimgeaaguWBnCBUd2VlbiDnmoTlr7nosaFcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcGF1c2VUd2VlbnModGFyZ2V0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0YXJnZXQudHdlZW5fY291bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdHdlZW5zOiBUd2VlbltdID0gVHdlZW4uX3R3ZWVucztcbiAgICAgICAgZm9yIChsZXQgaSA9IHR3ZWVucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHR3ZWVuc1tpXS5fdGFyZ2V0ID09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHR3ZWVuc1tpXS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdW1lIHBsYXlpbmcgYWxsIGVhc2luZyBvZiBhIGNlcnRhaW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHRhcmdldCBUaGUgb2JqZWN0IHdob3NlIFR3ZWVuIHRvIGJlIHJlc3VtZWRcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIOe7p+e7reaSreaUvuafkOS4quWvueixoeeahOaJgOaciee8k+WKqFxuICAgICAqIEBwYXJhbSB0YXJnZXQg6KaB57un57ut5pKt5pS+IFR3ZWVuIOeahOWvueixoVxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZXN1bWVUd2VlbnModGFyZ2V0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0YXJnZXQudHdlZW5fY291bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdHdlZW5zOiBUd2VlbltdID0gVHdlZW4uX3R3ZWVucztcbiAgICAgICAgZm9yIChsZXQgaSA9IHR3ZWVucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHR3ZWVuc1tpXS5fdGFyZ2V0ID09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHR3ZWVuc1tpXS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogXG4gICAgICogQHBhcmFtIGRlbHRhIG1zXG4gICAgICogQHBhcmFtIHBhdXNlZCBcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyB0aWNrKGRlbHRhOiBudW1iZXIsIHBhdXNlZCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0d2VlbnM6IFR3ZWVuW10gPSBUd2Vlbi5fdHdlZW5zLmNvbmNhdCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gdHdlZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgdHdlZW46IFR3ZWVuID0gdHdlZW5zW2ldO1xuICAgICAgICAgICAgaWYgKChwYXVzZWQgJiYgIXR3ZWVuLmlnbm9yZUdsb2JhbFBhdXNlKSB8fCB0d2Vlbi5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR3ZWVuLiR0aWNrKHR3ZWVuLl91c2VUaWNrcyA/IDEgOiBkZWx0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfbGFzdFRpbWU6IG51bWJlciA9IDA7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdHdlZW4gXG4gICAgICogQHBhcmFtIHZhbHVlIFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIF9yZWdpc3Rlcih0d2VlbjogVHdlZW4sIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGxldCB0YXJnZXQ6IGFueSA9IHR3ZWVuLl90YXJnZXQ7XG4gICAgICAgIGxldCB0d2VlbnM6IFR3ZWVuW10gPSBUd2Vlbi5fdHdlZW5zO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudHdlZW5fY291bnQgPSB0YXJnZXQudHdlZW5fY291bnQgPiAwID8gdGFyZ2V0LnR3ZWVuX2NvdW50ICsgMSA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0d2VlbnMucHVzaCh0d2Vlbik7XG4gICAgICAgICAgICBpZiAoIVR3ZWVuLl9pbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBUd2Vlbi5faW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBUaW1lck1nci5nZXRJbnN0KCkuYWRkX3VwZGF0ZXIoZ2VuX2hhbmRsZXIoKHQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBUd2Vlbi50aWNrKHQgKiAxMDAwKVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC50d2Vlbl9jb3VudC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSB0d2VlbnMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIGlmICh0d2VlbnNbaV0gPT0gdHdlZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdHdlZW5zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhbGwgVHdlZW5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIOWIoOmZpOaJgOaciSBUd2VlblxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBbGxUd2VlbnMoKTogdm9pZCB7XG4gICAgICAgIGxldCB0d2VlbnM6IFR3ZWVuW10gPSBUd2Vlbi5fdHdlZW5zO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHR3ZWVucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0d2VlbjogVHdlZW4gPSB0d2VlbnNbaV07XG4gICAgICAgICAgICB0d2Vlbi5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdHdlZW4uX3RhcmdldC50d2Vlbl9jb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHdlZW5zLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65LiA5LiqIFR3ZWVuIOWvueixoVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IGFueSwgcHJvcHM6IGFueSwgcGx1Z2luRGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSh0YXJnZXQsIHByb3BzLCBwbHVnaW5EYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB0YXJnZXQgXG4gICAgICogQHBhcmFtIHByb3BzIFxuICAgICAqIEBwYXJhbSBwbHVnaW5EYXRhIFxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdGlhbGl6ZSh0YXJnZXQ6IGFueSwgcHJvcHM6IGFueSwgcGx1Z2luRGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLl91c2VUaWNrcyA9IHByb3BzLnVzZVRpY2tzO1xuICAgICAgICAgICAgdGhpcy5pZ25vcmVHbG9iYWxQYXVzZSA9IHByb3BzLmlnbm9yZUdsb2JhbFBhdXNlO1xuICAgICAgICAgICAgdGhpcy5sb29wID0gcHJvcHMubG9vcDtcbiAgICAgICAgICAgIC8vIHByb3BzLm9uQ2hhbmdlICYmIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBwcm9wcy5vbkNoYW5nZSwgcHJvcHMub25DaGFuZ2VPYmopO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZU9iaiA9IHByb3BzLm9uQ2hhbmdlT2JqO1xuICAgICAgICAgICAgaWYgKHByb3BzLm92ZXJyaWRlKSB7XG4gICAgICAgICAgICAgICAgVHdlZW4ucmVtb3ZlVHdlZW5zKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsdWdpbkRhdGEgPSBwbHVnaW5EYXRhIHx8IHt9O1xuICAgICAgICB0aGlzLl9jdXJRdWV1ZVByb3BzID0ge307XG4gICAgICAgIHRoaXMuX2luaXRRdWV1ZVByb3BzID0ge307XG4gICAgICAgIHRoaXMuX3N0ZXBzID0gW107XG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFR3ZWVuLl9yZWdpc3Rlcih0aGlzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMucG9zaXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihwcm9wcy5wb3NpdGlvbiwgVHdlZW4uTk9ORSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB2YWx1ZSBcbiAgICAgKiBAcGFyYW0gYWN0aW9uc01vZGUgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIHNldFBvc2l0aW9uKHZhbHVlOiBudW1iZXIsIGFjdGlvbnNNb2RlOiBudW1iZXIgPSAxKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5q2j5bi45YyW5L2N572uXG4gICAgICAgIGxldCB0OiBudW1iZXIgPSB2YWx1ZTtcbiAgICAgICAgbGV0IGVuZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBpZiAodCA+PSB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1RpbWUgPSB0ICUgdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAodCA+IDAgJiYgbmV3VGltZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0ID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ID0gbmV3VGltZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBlbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0ID09IHRoaXMuX3ByZXZQb3MpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBhdXNlZCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmV2UG9zID0gdGhpcy5fcHJldlBvcztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuX3ByZXZQb3MgPSB0O1xuICAgICAgICB0aGlzLl9wcmV2UG9zaXRpb24gPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIOaJvuWIsOaWsOeahHR3ZWVuXG4gICAgICAgICAgICAgICAgbGV0IGwgPSB0aGlzLl9zdGVwcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbGV0IHN0ZXBJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwc1tpXS50eXBlID09IFwic3RlcFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBzW2ldLnQgPD0gdCAmJiB0aGlzLl9zdGVwc1tpXS50ICsgdGhpcy5fc3RlcHNbaV0uZCA+PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBzW2ldLnR5cGUgPT0gXCJhY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/miafooYxhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uc01vZGUgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl91c2VUaWNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW5BY3Rpb24odGhpcy5fc3RlcHNbaV0sIHQsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhY3Rpb25zTW9kZSA9PSAxICYmIHQgPCBwcmV2UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2UG9zICE9IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bkFjdGlvbih0aGlzLl9zdGVwc1tpXSwgcHJldlBvcywgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVuQWN0aW9uKHRoaXMuX3N0ZXBzW2ldLCAwLCB0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bkFjdGlvbih0aGlzLl9zdGVwc1tpXSwgcHJldlBvcywgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0ZXBzW2ldLnR5cGUgPT0gXCJzdGVwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGVwSW5kZXggPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gdGhpcy5fc3RlcHNbc3RlcEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXJnZXRQcm9wcyhzdGVwLCBNYXRoLm1pbigodGhpcy5fc3RlcFBvc2l0aW9uID0gdCAtIHN0ZXAudCkgLyBzdGVwLmQsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuZGlzcGF0Y2hFdmVudFdpdGgoXCJjaGFuZ2VcIik7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgJiYgdGhpcy5vbkNoYW5nZS5jYWxsKHRoaXMub25DaGFuZ2VPYmopO1xuICAgICAgICByZXR1cm4gZW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogXG4gICAgICogQHBhcmFtIHN0YXJ0UG9zIFxuICAgICAqIEBwYXJhbSBlbmRQb3MgXG4gICAgICogQHBhcmFtIGluY2x1ZGVTdGFydCBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9ydW5BY3Rpb24oYWN0aW9uOiBhbnksIHN0YXJ0UG9zOiBudW1iZXIsIGVuZFBvczogbnVtYmVyLCBpbmNsdWRlU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgc1BvczogbnVtYmVyID0gc3RhcnRQb3M7XG4gICAgICAgIGxldCBlUG9zOiBudW1iZXIgPSBlbmRQb3M7XG4gICAgICAgIGlmIChzdGFydFBvcyA+IGVuZFBvcykge1xuICAgICAgICAgICAgLy/miormiYDmnInnmoTlgJLnva5cbiAgICAgICAgICAgIHNQb3MgPSBlbmRQb3M7XG4gICAgICAgICAgICBlUG9zID0gc3RhcnRQb3M7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvcyA9IGFjdGlvbi50O1xuICAgICAgICBpZiAocG9zID09IGVQb3MgfHwgKHBvcyA+IHNQb3MgJiYgcG9zIDwgZVBvcykgfHwgKGluY2x1ZGVTdGFydCAmJiBwb3MgPT0gc3RhcnRQb3MpKSB7XG4gICAgICAgICAgICBhY3Rpb24uZi5hcHBseShhY3Rpb24ubywgYWN0aW9uLnApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc3RlcCBcbiAgICAgKiBAcGFyYW0gcmF0aW8gXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlVGFyZ2V0UHJvcHMoc3RlcDogYW55LCByYXRpbzogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwMCwgcDEsIHYsIHYwLCB2MSwgYXJyO1xuICAgICAgICBpZiAoIXN0ZXAgJiYgcmF0aW8gPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5wYXNzaXZlID0gZmFsc2U7XG4gICAgICAgICAgICBwMCA9IHAxID0gdGhpcy5fY3VyUXVldWVQcm9wcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFzc2l2ZSA9ICEhc3RlcC52O1xuICAgICAgICAgICAgLy/kuI3mm7TmlrBwcm9wcy5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+S9v+eUqGVhc2VcbiAgICAgICAgICAgIGlmIChzdGVwLmUpIHtcbiAgICAgICAgICAgICAgICByYXRpbyA9IHN0ZXAuZShyYXRpbywgMCwgMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwMCA9IHN0ZXAucDA7XG4gICAgICAgICAgICBwMSA9IHN0ZXAucDE7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBuIGluIHRoaXMuX2luaXRRdWV1ZVByb3BzKSB7XG4gICAgICAgICAgICBpZiAoKHYwID0gcDBbbl0pID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwMFtuXSA9IHYwID0gdGhpcy5faW5pdFF1ZXVlUHJvcHNbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHYxID0gcDFbbl0pID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwMVtuXSA9IHYxID0gdjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodjAgPT0gdjEgfHwgcmF0aW8gPT0gMCB8fCByYXRpbyA9PSAxIHx8ICh0eXBlb2YgKHYwKSAhPSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgICAgIHYgPSByYXRpbyA9PSAxID8gdjEgOiB2MDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdiA9IHYwICsgKHYxIC0gdjApICogcmF0aW87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpZ25vcmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChhcnIgPSBUd2Vlbi5fcGx1Z2luc1tuXSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdjIgPSBhcnJbaV0udHdlZW4odGhpcywgbiwgdiwgcDAsIHAxLCByYXRpbywgISFzdGVwICYmIHAwID09IHAxLCAhc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2MiA9PSBUd2Vlbi5JR05PUkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdjI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlnbm9yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldFtuXSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgc2V0dGluZyBpcyBwYXVzZWRcbiAgICAgKiBAcGFyYW0gdmFsdWUge2Jvb2xlYW59IFdoZXRoZXIgdG8gcGF1c2VcbiAgICAgKiBAcmV0dXJucyBUd2VlbiBvYmplY3QgaXRzZWxmXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDorr7nva7mmK/lkKbmmoLlgZxcbiAgICAgKiBAcGFyYW0gdmFsdWUge2Jvb2xlYW59IOaYr+WQpuaaguWBnFxuICAgICAqIEByZXR1cm5zIFR3ZWVu5a+56LGh5pys6LqrXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UGF1c2VkKHZhbHVlOiBib29sZWFuKTogVHdlZW4ge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF1c2VkID0gdmFsdWU7XG4gICAgICAgIFR3ZWVuLl9yZWdpc3Rlcih0aGlzLCAhdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSBwcm9wcyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jbG9uZVByb3BzKHByb3BzOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQgbyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBuIGluIHByb3BzKSB7XG4gICAgICAgICAgICBvW25dID0gcHJvcHNbbl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hZGRTdGVwKG8pOiBUd2VlbiB7XG4gICAgICAgIGlmIChvLmQgPiAwKSB7XG4gICAgICAgICAgICBvLnR5cGUgPSBcInN0ZXBcIjtcbiAgICAgICAgICAgIHRoaXMuX3N0ZXBzLnB1c2gobyk7XG4gICAgICAgICAgICBvLnQgPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiArPSBvLmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hcHBlbmRRdWV1ZVByb3BzKG8pOiBhbnkge1xuICAgICAgICBsZXQgYXJyLCBvbGRWYWx1ZSwgaSwgbCwgaW5qZWN0UHJvcHM7XG4gICAgICAgIGZvciAobGV0IG4gaW4gbykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luaXRRdWV1ZVByb3BzW25dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9IHRoaXMuX3RhcmdldFtuXTtcbiAgICAgICAgICAgICAgICAvL+iuvue9rnBsdWdpbnNcbiAgICAgICAgICAgICAgICBpZiAoYXJyID0gVHdlZW4uX3BsdWdpbnNbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlID0gYXJyW2ldLmluaXQodGhpcywgbiwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRRdWV1ZVByb3BzW25dID0gdGhpcy5fY3VyUXVldWVQcm9wc1tuXSA9IChvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkKSA/IG51bGwgOiBvbGRWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgPSB0aGlzLl9jdXJRdWV1ZVByb3BzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgbiBpbiBvKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZSA9IHRoaXMuX2N1clF1ZXVlUHJvcHNbbl07XG4gICAgICAgICAgICBpZiAoYXJyID0gVHdlZW4uX3BsdWdpbnNbbl0pIHtcbiAgICAgICAgICAgICAgICBpbmplY3RQcm9wcyA9IGluamVjdFByb3BzIHx8IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0uc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldLnN0ZXAodGhpcywgbiwgb2xkVmFsdWUsIG9bbl0sIGluamVjdFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2N1clF1ZXVlUHJvcHNbbl0gPSBvW25dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmplY3RQcm9wcykge1xuICAgICAgICAgICAgdGhpcy5fYXBwZW5kUXVldWVQcm9wcyhpbmplY3RQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clF1ZXVlUHJvcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hZGRBY3Rpb24obyk6IFR3ZWVuIHtcbiAgICAgICAgby50ID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgby50eXBlID0gXCJhY3Rpb25cIjtcbiAgICAgICAgdGhpcy5fc3RlcHMucHVzaChvKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gcHJvcHMgXG4gICAgICogQHBhcmFtIG8gXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2V0KHByb3BzOiBhbnksIG8pOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgbiBpbiBwcm9wcykge1xuICAgICAgICAgICAgb1tuXSA9IHByb3BzW25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FpdCB0aGUgc3BlY2lmaWVkIG1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgbmV4dCBhbmltYXRpb25cbiAgICAgKiBAcGFyYW0gZHVyYXRpb24ge251bWJlcn0gV2FpdGluZyB0aW1lLCBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAcGFyYW0gcGFzc2l2ZSB7Ym9vbGVhbn0gV2hldGhlciBwcm9wZXJ0aWVzIGFyZSB1cGRhdGVkIGR1cmluZyB0aGUgd2FpdGluZyB0aW1lXG4gICAgICogQHJldHVybnMgVHdlZW4gb2JqZWN0IGl0c2VsZlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICog562J5b6F5oyH5a6a5q+r56eS5ZCO5omn6KGM5LiL5LiA5Liq5Yqo55S7XG4gICAgICogQHBhcmFtIGR1cmF0aW9uIHtudW1iZXJ9IOimgeetieW+heeahOaXtumXtO+8jOS7peavq+enkuS4uuWNleS9jVxuICAgICAqIEBwYXJhbSBwYXNzaXZlIHtib29sZWFufSDnrYnlvoXmnJ/pl7TlsZ7mgKfmmK/lkKbkvJrmm7TmlrBcbiAgICAgKiBAcmV0dXJucyBUd2VlbuWvueixoeacrOi6q1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHdhaXQoZHVyYXRpb246IG51bWJlciwgcGFzc2l2ZT86IGJvb2xlYW4pOiBUd2VlbiB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PSBudWxsIHx8IGR1cmF0aW9uIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvID0gdGhpcy5fY2xvbmVQcm9wcyh0aGlzLl9jdXJRdWV1ZVByb3BzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZFN0ZXAoeyBkOiBkdXJhdGlvbiwgcDA6IG8sIHAxOiBvLCB2OiBwYXNzaXZlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vZGlmeSB0aGUgcHJvcGVydHkgb2YgdGhlIHNwZWNpZmllZCBvYmplY3QgdG8gYSBzcGVjaWZpZWQgdmFsdWVcbiAgICAgKiBAcGFyYW0gcHJvcHMge09iamVjdH0gUHJvcGVydHkgc2V0IG9mIGFuIG9iamVjdFxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiB7bnVtYmVyfSBEdXJhdGlvblxuICAgICAqIEBwYXJhbSBlYXNlIHtFYXNlfSBFYXNpbmcgYWxnb3JpdGhtXG4gICAgICogQHJldHVybnMge1R3ZWVufSBUd2VlbiBvYmplY3QgaXRzZWxmXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDlsIbmjIflrprlr7nosaHnmoTlsZ7mgKfkv67mlLnkuLrmjIflrprlgLxcbiAgICAgKiBAcGFyYW0gcHJvcHMge09iamVjdH0g5a+56LGh55qE5bGe5oCn6ZuG5ZCIXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIHtudW1iZXJ9IOaMgee7reaXtumXtFxuICAgICAqIEBwYXJhbSBlYXNlIHtFYXNlfSDnvJPliqjnrpfms5VcbiAgICAgKiBAcmV0dXJucyB7VHdlZW59IFR3ZWVu5a+56LGh5pys6LqrXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cblxuICAgIHB1YmxpYyB0byhwcm9wczogYW55LCBkdXJhdGlvbj86IG51bWJlciwgZWFzZTogRnVuY3Rpb24gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzTmFOKGR1cmF0aW9uKSB8fCBkdXJhdGlvbiA8IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hZGRTdGVwKHsgZDogZHVyYXRpb24gfHwgMCwgcDA6IHRoaXMuX2Nsb25lUHJvcHModGhpcy5fY3VyUXVldWVQcm9wcyksIGU6IGVhc2UsIHAxOiB0aGlzLl9jbG9uZVByb3BzKHRoaXMuX2FwcGVuZFF1ZXVlUHJvcHMocHJvcHMpKSB9KTtcbiAgICAgICAgLy/liqDlhaXkuIDmraVzZXTvvIzpmLLmraLmuLjmiI/mnoHlhbbljaHpob/ml7blgJnvvIx0b+WQjumdoueahGNhbGzlj5bliLDnmoTlsZ7mgKflgLzkuI3lr7lcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHByb3BzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gQ2FsbGJhY2sgbWV0aG9kXG4gICAgICogQHBhcmFtIHRoaXNPYmoge2FueX0gdGhpcyBhY3Rpb24gc2NvcGUgb2YgdGhlIGNhbGxiYWNrIG1ldGhvZFxuICAgICAqIEBwYXJhbSBwYXJhbXMge2FueVtdfSBQYXJhbWV0ZXIgb2YgdGhlIGNhbGxiYWNrIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtUd2Vlbn0gVHdlZW4gb2JqZWN0IGl0c2VsZlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiA8cHJlPlxuICAgICAqICBUd2Vlbi5nZXQoZGlzcGxheSkuY2FsbChmdW5jdGlvbiAoYTpudW1iZXIsIGI6c3RyaW5nKSB7XG4gICAgICogICAgICBjb25zb2xlLmxvZyhcImE6IFwiICsgYSk7IC8vIHRoZSBmaXJzdCBwYXJhbWV0ZXIgcGFzc2VkIDIzM1xuICAgICAqICAgICAgY29uc29sZS5sb2coXCJiOiBcIiArIGIpOyAvLyB0aGUgc2Vjb25kIHBhcmFtZXRlciBwYXNzZWQg4oCcaGVsbG/igJ1cbiAgICAgKiAgfSwgdGhpcywgWzIzMywgXCJoZWxsb1wiXSk7XG4gICAgICogPC9wcmU+XG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICog5omn6KGM5Zue6LCD5Ye95pWwXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0g5Zue6LCD5pa55rOVXG4gICAgICogQHBhcmFtIHRoaXNPYmoge2FueX0g5Zue6LCD5pa55rOVdGhpc+S9nOeUqOWfn1xuICAgICAqIEBwYXJhbSBwYXJhbXMge2FueVtdfSDlm57osIPmlrnms5Xlj4LmlbBcbiAgICAgKiBAcmV0dXJucyB7VHdlZW59IFR3ZWVu5a+56LGh5pys6LqrXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIDxwcmU+XG4gICAgICogIFR3ZWVuLmdldChkaXNwbGF5KS5jYWxsKGZ1bmN0aW9uIChhOm51bWJlciwgYjpzdHJpbmcpIHtcbiAgICAgKiAgICAgIGNvbnNvbGUubG9nKFwiYTogXCIgKyBhKTsgLy/lr7nlupTkvKDlhaXnmoTnrKzkuIDkuKrlj4LmlbAgMjMzXG4gICAgICogICAgICBjb25zb2xlLmxvZyhcImI6IFwiICsgYik7IC8v5a+55bqU5Lyg5YWl55qE56ys5LqM5Liq5Y+C5pWwIOKAnGhlbGxv4oCdXG4gICAgICogIH0sIHRoaXMsIFsyMzMsIFwiaGVsbG9cIl0pO1xuICAgICAqIDwvcHJlPlxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBjYWxsKGNhbGxiYWNrOiBGdW5jdGlvbiwgdGhpc09iajogYW55ID0gdW5kZWZpbmVkLCBwYXJhbXM6IGFueVtdID0gdW5kZWZpbmVkKTogVHdlZW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQWN0aW9uKHsgZjogY2FsbGJhY2ssIHA6IHBhcmFtcyA/IHBhcmFtcyA6IFtdLCBvOiB0aGlzT2JqID8gdGhpc09iaiA6IHRoaXMuX3RhcmdldCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3cgbW9kaWZ5IHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzcGVjaWZpZWQgb2JqZWN0IHRvIHRoZSBzcGVjaWZpZWQgdmFsdWVcbiAgICAgKiBAcGFyYW0gcHJvcHMge09iamVjdH0gUHJvcGVydHkgc2V0IG9mIGFuIG9iamVjdFxuICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIG9iamVjdCB3aG9zZSBUd2VlbiB0byBiZSByZXN1bWVkXG4gICAgICogQHJldHVybnMge1R3ZWVufSBUd2VlbiBvYmplY3QgaXRzZWxmXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDnq4vljbPlsIbmjIflrprlr7nosaHnmoTlsZ7mgKfkv67mlLnkuLrmjIflrprlgLxcbiAgICAgKiBAcGFyYW0gcHJvcHMge09iamVjdH0g5a+56LGh55qE5bGe5oCn6ZuG5ZCIXG4gICAgICogQHBhcmFtIHRhcmdldCDopoHnu6fnu63mkq3mlL4gVHdlZW4g55qE5a+56LGhXG4gICAgICogQHJldHVybnMge1R3ZWVufSBUd2VlbuWvueixoeacrOi6q1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICovXG4gICAgcHVibGljIHNldChwcm9wczogYW55LCB0YXJnZXQgPSBudWxsKTogVHdlZW4ge1xuICAgICAgICAvL+abtOaWsOW9k+WJjeaVsOaNru+8jOS/neivgee8k+WKqOa1geeVheaAp1xuICAgICAgICB0aGlzLl9hcHBlbmRRdWV1ZVByb3BzKHByb3BzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZEFjdGlvbih7IGY6IHRoaXMuX3NldCwgbzogdGhpcywgcDogW3Byb3BzLCB0YXJnZXQgPyB0YXJnZXQgOiB0aGlzLl90YXJnZXRdIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVcbiAgICAgKiBAcGFyYW0gdHdlZW4ge1R3ZWVufSBUaGUgVHdlZW4gb2JqZWN0IHRvIGJlIG9wZXJhdGVkLiBEZWZhdWx0OiB0aGlzXG4gICAgICogQHJldHVybnMge1R3ZWVufSBUd2VlbiBvYmplY3QgaXRzZWxmXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDmiafooYxcbiAgICAgKiBAcGFyYW0gdHdlZW4ge1R3ZWVufSDpnIDopoHmk43kvZznmoQgVHdlZW4g5a+56LGh77yM6buY6K6kdGhpc1xuICAgICAqIEByZXR1cm5zIHtUd2Vlbn0gVHdlZW7lr7nosaHmnKzouqtcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5KHR3ZWVuPzogVHdlZW4pOiBUd2VlbiB7XG4gICAgICAgIGlmICghdHdlZW4pIHtcbiAgICAgICAgICAgIHR3ZWVuID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsKHR3ZWVuLnNldFBhdXNlZCwgdHdlZW4sIFtmYWxzZV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlXG4gICAgICogQHBhcmFtIHR3ZWVuIHtUd2Vlbn0gVGhlIFR3ZWVuIG9iamVjdCB0byBiZSBvcGVyYXRlZC4gRGVmYXVsdDogdGhpc1xuICAgICAqIEByZXR1cm5zIHtUd2Vlbn0gVHdlZW4gb2JqZWN0IGl0c2VsZlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICog5pqC5YGcXG4gICAgICogQHBhcmFtIHR3ZWVuIHtUd2Vlbn0g6ZyA6KaB5pON5L2c55qEIFR3ZWVuIOWvueixoe+8jOm7mOiupHRoaXNcbiAgICAgKiBAcmV0dXJucyB7VHdlZW59IFR3ZWVu5a+56LGh5pys6LqrXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgcGF1c2UodHdlZW4/OiBUd2Vlbik6IFR3ZWVuIHtcbiAgICAgICAgaWYgKCF0d2Vlbikge1xuICAgICAgICAgICAgdHdlZW4gPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGwodHdlZW4uc2V0UGF1c2VkLCB0d2VlbiwgW3RydWVdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIFR3ZWVuI3RpY2tcbiAgICAgKiBAcGFyYW0gZGVsdGEge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICovXG4gICAgcHVibGljICR0aWNrKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wcmV2UG9zaXRpb24gKyBkZWx0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWFzZSB7XG4gICAgLyoqXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGdldOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXQoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGFtb3VudCA8IC0xKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW1vdW50ID4gMSkge1xuICAgICAgICAgICAgYW1vdW50ID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQ6IG51bWJlcikge1xuICAgICAgICAgICAgaWYgKGFtb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYW1vdW50IDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ICogKHQgKiAtYW1vdW50ICsgMSArIGFtb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdCAqICgoMiAtIHQpICogYW1vdW50ICsgKDEgLSBhbW91bnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBwb3cgaW4uU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBnZXQgcG93IGlu44CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldFBvd0luKHBvdzogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodDogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3codCwgcG93KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBwb3cgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogZ2V0IHBvdyBvdXTjgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UG93T3V0KHBvdzogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodDogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSB0LCBwb3cpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHBvdyBpbiBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBnZXQgcG93IGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRQb3dJbk91dChwb3c6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQ6IG51bWJlcikge1xuICAgICAgICAgICAgaWYgKCh0ICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIE1hdGgucG93KHQsIHBvdyk7XG4gICAgICAgICAgICByZXR1cm4gMSAtIDAuNSAqIE1hdGguYWJzKE1hdGgucG93KDIgLSB0LCBwb3cpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHF1YWQgaW4uU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBxdWFkIGlu44CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1YWRJbiA9IEVhc2UuZ2V0UG93SW4oMik7XG4gICAgLyoqXG4gICAgICogcXVhZCBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBxdWFkIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBxdWFkT3V0ID0gRWFzZS5nZXRQb3dPdXQoMik7XG4gICAgLyoqXG4gICAgICogcXVhZCBpbiBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBxdWFkIGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBxdWFkSW5PdXQgPSBFYXNlLmdldFBvd0luT3V0KDIpO1xuICAgIC8qKlxuICAgICAqIGN1YmljIGluLlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogY3ViaWMgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3ViaWNJbiA9IEVhc2UuZ2V0UG93SW4oMyk7XG4gICAgLyoqXG4gICAgICogY3ViaWMgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogY3ViaWMgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGN1YmljT3V0ID0gRWFzZS5nZXRQb3dPdXQoMyk7XG4gICAgLyoqXG4gICAgICogY3ViaWMgaW4gb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogY3ViaWMgaW4gb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGN1YmljSW5PdXQgPSBFYXNlLmdldFBvd0luT3V0KDMpO1xuICAgIC8qKlxuICAgICAqIHF1YXJ0IGluLlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVhcnQgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcXVhcnRJbiA9IEVhc2UuZ2V0UG93SW4oNCk7XG4gICAgLyoqXG4gICAgICogcXVhcnQgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVhcnQgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1YXJ0T3V0ID0gRWFzZS5nZXRQb3dPdXQoNCk7XG4gICAgLyoqXG4gICAgICogcXVhcnQgaW4gb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVhcnQgaW4gb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1YXJ0SW5PdXQgPSBFYXNlLmdldFBvd0luT3V0KDQpO1xuICAgIC8qKlxuICAgICAqIHF1aW50IGluLlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVpbnQgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcXVpbnRJbiA9IEVhc2UuZ2V0UG93SW4oNSk7XG4gICAgLyoqXG4gICAgICogcXVpbnQgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVpbnQgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1aW50T3V0ID0gRWFzZS5nZXRQb3dPdXQoNSk7XG4gICAgLyoqXG4gICAgICogcXVpbnQgaW4gb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVpbnQgaW4gb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1aW50SW5PdXQgPSBFYXNlLmdldFBvd0luT3V0KDUpO1xuXG4gICAgLyoqXG4gICAgICogc2luZSBpbi5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIHNpbmUgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2luZUluKHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gMSAtIE1hdGguY29zKHQgKiBNYXRoLlBJIC8gMik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2luZSBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBzaW5lIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBzaW5lT3V0KHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5zaW4odCAqIE1hdGguUEkgLyAyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzaW5lIGluIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIHNpbmUgaW4gb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHNpbmVJbk91dCh0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQpIC0gMSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgYmFjayBpbi5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGdldCBiYWNrIGlu44CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEJhY2tJbihhbW91bnQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQ6IG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHQgKiB0ICogKChhbW91bnQgKyAxKSAqIHQgLSBhbW91bnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYmFjayBpbi5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGJhY2sgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYmFja0luID0gRWFzZS5nZXRCYWNrSW4oMS43KTtcblxuICAgIC8qKlxuICAgICAqIGdldCBiYWNrIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGdldCBiYWNrIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRCYWNrT3V0KGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuICgtLXQgKiB0ICogKChhbW91bnQgKyAxKSAqIHQgKyBhbW91bnQpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBiYWNrIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGJhY2sgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGJhY2tPdXQgPSBFYXNlLmdldEJhY2tPdXQoMS43KTtcblxuICAgIC8qKlxuICAgICAqIGdldCBiYWNrIGluIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGdldCBiYWNrIGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRCYWNrSW5PdXQoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgYW1vdW50ICo9IDEuNTI1O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQ6IG51bWJlcikge1xuICAgICAgICAgICAgaWYgKCh0ICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqICh0ICogdCAqICgoYW1vdW50ICsgMSkgKiB0IC0gYW1vdW50KSk7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgoYW1vdW50ICsgMSkgKiB0ICsgYW1vdW50KSArIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYmFjayBpbiBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBiYWNrIGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBiYWNrSW5PdXQgPSBFYXNlLmdldEJhY2tJbk91dCgxLjcpO1xuXG4gICAgLyoqXG4gICAgICogY2lyYyBpbi5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGNpcmMgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2lyY0luKHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gLShNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNpcmMgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogY2lyYyBvdXTjgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2lyY091dCh0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgxIC0gKC0tdCkgKiB0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaXJjIGluIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGNpcmMgaW4gb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNpcmNJbk91dCh0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCh0ICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGJvdW5jZSBpbi5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGJvdW5jZSBpbuOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBib3VuY2VJbih0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBFYXNlLmJvdW5jZU91dCgxIC0gdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYm91bmNlIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGJvdW5jZSBvdXTjgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYm91bmNlT3V0KHQ6IG51bWJlcikge1xuICAgICAgICBpZiAodCA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gKDcuNTYyNSAqIHQgKiB0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0IDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiAoNy41NjI1ICogKHQgLT0gMS41IC8gMi43NSkgKiB0ICsgMC43NSk7XG4gICAgICAgIH0gZWxzZSBpZiAodCA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiAoNy41NjI1ICogKHQgLT0gMi4yNSAvIDIuNzUpICogdCArIDAuOTM3NSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDcuNTYyNSAqICh0IC09IDIuNjI1IC8gMi43NSkgKiB0ICsgMC45ODQzNzUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYm91bmNlIGluIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGJvdW5jZSBpbiBvdXTjgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYm91bmNlSW5PdXQodDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0IDwgMC41KSByZXR1cm4gRWFzZS5ib3VuY2VJbih0ICogMikgKiAuNTtcbiAgICAgICAgcmV0dXJuIEVhc2UuYm91bmNlT3V0KHQgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IGVsYXN0aWMgaW4uU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBnZXQgZWxhc3RpYyBpbuOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRFbGFzdGljSW4oYW1wbGl0dWRlOiBudW1iZXIsIHBlcmlvZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwaTIgPSBNYXRoLlBJICogMjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGlmICh0ID09IDAgfHwgdCA9PSAxKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGxldCBzID0gcGVyaW9kIC8gcGkyICogTWF0aC5hc2luKDEgLyBhbXBsaXR1ZGUpO1xuICAgICAgICAgICAgcmV0dXJuIC0oYW1wbGl0dWRlICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAtIHMpICogcGkyIC8gcGVyaW9kKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBlbGFzdGljIGluLlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogZWxhc3RpYyBpbuOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBlbGFzdGljSW4gPSBFYXNlLmdldEVsYXN0aWNJbigxLCAwLjMpO1xuXG4gICAgLyoqXG4gICAgICogZ2V0IGVsYXN0aWMgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogZ2V0IGVsYXN0aWMgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEVsYXN0aWNPdXQoYW1wbGl0dWRlOiBudW1iZXIsIHBlcmlvZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwaTIgPSBNYXRoLlBJICogMjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGlmICh0ID09IDAgfHwgdCA9PSAxKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGxldCBzID0gcGVyaW9kIC8gcGkyICogTWF0aC5hc2luKDEgLyBhbXBsaXR1ZGUpO1xuICAgICAgICAgICAgcmV0dXJuIChhbXBsaXR1ZGUgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKCh0IC0gcykgKiBwaTIgLyBwZXJpb2QpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBlbGFzdGljIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGVsYXN0aWMgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGVsYXN0aWNPdXQgPSBFYXNlLmdldEVsYXN0aWNPdXQoMSwgMC4zKTtcblxuICAgIC8qKlxuICAgICAqIGdldCBlbGFzdGljIGluIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGdldCBlbGFzdGljIGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRFbGFzdGljSW5PdXQoYW1wbGl0dWRlOiBudW1iZXIsIHBlcmlvZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwaTIgPSBNYXRoLlBJICogMjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGxldCBzID0gcGVyaW9kIC8gcGkyICogTWF0aC5hc2luKDEgLyBhbXBsaXR1ZGUpO1xuICAgICAgICAgICAgaWYgKCh0ICo9IDIpIDwgMSkgcmV0dXJuIC0wLjUgKiAoYW1wbGl0dWRlICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAtIHMpICogcGkyIC8gcGVyaW9kKSk7XG4gICAgICAgICAgICByZXR1cm4gYW1wbGl0dWRlICogTWF0aC5wb3coMiwgLTEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgLSBzKSAqIHBpMiAvIHBlcmlvZCkgKiAwLjUgKyAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZWxhc3RpYyBpbiBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBlbGFzdGljIGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBlbGFzdGljSW5PdXQgPSBFYXNlLmdldEVsYXN0aWNJbk91dCgxLCAwLjMgKiAxLjUpO1xufVxuXG4iXX0=
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/ui/pop_ui_base.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e2e68FLOYBOaqRk0bNgNIyc', 'pop_ui_base');
// src/common/ui/pop_ui_base.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.POP_UI_BASE = void 0;
var pop_mgr_1 = require("./pop_mgr");
var pool_mgr_1 = require("../pool/pool_mgr");
var util_1 = require("../util");
var Audio = require("../../common/audio/AudioPlayer");
// import { wxHttpClient } from "../../common/wxapi/index"
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var pop_overlay_bg = "panel_overlay_bg";
var POP_UI_BASE = /** @class */ (function (_super) {
    __extends(POP_UI_BASE, _super);
    function POP_UI_BASE() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        return _this;
    }
    Object.defineProperty(POP_UI_BASE.prototype, "ui_name", {
        /*由于pop_mgr缓存策略，此方法只会在首次打开界面时调用1次, 缓存以后再打开不会执行onLoad.
            因此不能用来做每次打开界面时的初始化工作
        */
        // onLoad()
        // {
        //     cc.log("on_load 00000000000000000");
        // }
        set: function (value) {
            this._ui_name = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 只能由pop_mgr调用
     */
    POP_UI_BASE.prototype.__show__ = function () {
        var _this = this;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        // cc.log("show", this._ui_name, ...params);
        if (this.btn_close) {
            this.btn_close.node.on(cc.Node.EventType.TOUCH_END, this.onCloseBtnTouch, this);
        }
        this.is_show = true;
        this.on_show.apply(this, params);
        //添加遮罩背景
        var overlay = this.node.getChildByName(pop_overlay_bg);
        if (!overlay) {
            pool_mgr_1.pool_mgr.get_inst().get_ui(pop_mgr_1.UI_CONFIG.overlay_bg, util_1.gen_handler(function (bg_node) {
                if (!_this.is_show || _this.node.getChildByName(pop_overlay_bg)) {
                    pool_mgr_1.pool_mgr.get_inst().put_ui(pop_mgr_1.UI_CONFIG.overlay_bg, bg_node);
                    return;
                }
                bg_node.name = pop_overlay_bg;
                _this.node.addChild(bg_node);
                bg_node.setSiblingIndex(0);
            }, this));
        }
    };
    /**
     * 只能由pop_mgr调用
     */
    POP_UI_BASE.prototype.__hide__ = function () {
        cc.log("hide", this._ui_name);
        if (this.btn_close) {
            this.btn_close.node.off(cc.Node.EventType.TOUCH_END, this.onCloseBtnTouch, this);
        }
        this.is_show = false;
        this.on_hide();
        // wxHttpClient.unregisterCtxHandler(this);
    };
    /**弹出界面时调用，且在onLoad之后调用，可以用来做一些初始化工作*/
    POP_UI_BASE.prototype.on_show = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
    };
    /**关闭界面时调用，用来做清理工作*/
    POP_UI_BASE.prototype.on_hide = function () {
    };
    /**关闭自身*/
    POP_UI_BASE.prototype.hide = function () {
        pop_mgr_1.pop_mgr.get_inst().hide(this._ui_name);
    };
    POP_UI_BASE.prototype.onCloseBtnTouch = function () {
        this.hide();
        Audio.AudioPlayer.ins().play_sound(Audio.AUDIO_CONFIG.Audio_Btn);
    };
    __decorate([
        property(cc.Button)
    ], POP_UI_BASE.prototype, "btn_close", void 0);
    POP_UI_BASE = __decorate([
        ccclass
    ], POP_UI_BASE);
    return POP_UI_BASE;
}(cc.Component));
exports.POP_UI_BASE = POP_UI_BASE;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3VpL3BvcF91aV9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBOEM7QUFDOUMsNkNBQTJDO0FBQzNDLGdDQUE4QztBQUM5QyxzREFBdUQ7QUFDdkQsMERBQTBEO0FBRXBELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQU0sY0FBYyxHQUFXLGtCQUFrQixDQUFDO0FBR2xEO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBK0VDO1FBNUVHLGVBQVMsR0FBYyxJQUFJLENBQUM7O0lBNEVoQyxDQUFDO0lBOURHLHNCQUFJLGdDQUFPO1FBUlg7O1VBRUU7UUFDRixXQUFXO1FBQ1gsSUFBSTtRQUNKLDJDQUEyQztRQUMzQyxJQUFJO2FBRUosVUFBWSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSCw4QkFBUSxHQUFSO1FBQUEsaUJBcUJDO1FBckJRLGdCQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsMkJBQWdCOztRQUNyQiw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuRjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLE9BQVosSUFBSSxFQUFZLE1BQU0sRUFBRTtRQUV4QixRQUFRO1FBQ1IsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLG1CQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFTLENBQUMsVUFBVSxFQUFFLGtCQUFXLENBQUMsVUFBQyxPQUFnQjtnQkFDMUUsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7b0JBQzNELG1CQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUMxRCxPQUFPO2lCQUNWO2dCQUNELE9BQU8sQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO2dCQUM5QixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOEJBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BGO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsMkNBQTJDO0lBQy9DLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsNkJBQU8sR0FBUDtRQUFRLGdCQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsMkJBQWdCOztJQUV4QixDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLDZCQUFPLEdBQVA7SUFFQSxDQUFDO0lBRUQsU0FBUztJQUNULDBCQUFJLEdBQUo7UUFDSSxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUEzRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUTtJQUhuQixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBK0V2QjtJQUFELGtCQUFDO0NBL0VELEFBK0VDLENBL0VnQyxFQUFFLENBQUMsU0FBUyxHQStFNUM7QUEvRVksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3BfbWdyLCBVSV9DT05GSUcgfSBmcm9tIFwiLi9wb3BfbWdyXCJcbmltcG9ydCB7IHBvb2xfbWdyIH0gZnJvbSBcIi4uL3Bvb2wvcG9vbF9tZ3JcIlxuaW1wb3J0IHsgaGFuZGxlciwgZ2VuX2hhbmRsZXIgfSBmcm9tIFwiLi4vdXRpbFwiXG5pbXBvcnQgKiBhcyBBdWRpbyBmcm9tIFwiLi4vLi4vY29tbW9uL2F1ZGlvL0F1ZGlvUGxheWVyXCJcbi8vIGltcG9ydCB7IHd4SHR0cENsaWVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vd3hhcGkvaW5kZXhcIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgcG9wX292ZXJsYXlfYmc6IHN0cmluZyA9IFwicGFuZWxfb3ZlcmxheV9iZ1wiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBPUF9VSV9CQVNFIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuX2Nsb3NlOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgLy/nlYzpnaLlkI3lrZfvvIxVSV9DT05GSUcuKlxuICAgIHByaXZhdGUgX3VpX25hbWU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgaXNfc2hvdzogYm9vbGVhbjtcblxuICAgIC8q55Sx5LqOcG9wX21ncue8k+WtmOetlueVpe+8jOatpOaWueazleWPquS8muWcqOmmluasoeaJk+W8gOeVjOmdouaXtuiwg+eUqDHmrKEsIOe8k+WtmOS7peWQjuWGjeaJk+W8gOS4jeS8muaJp+ihjG9uTG9hZC5cbiAgICAgICAg5Zug5q2k5LiN6IO955So5p2l5YGa5q+P5qyh5omT5byA55WM6Z2i5pe255qE5Yid5aeL5YyW5bel5L2cXG4gICAgKi9cbiAgICAvLyBvbkxvYWQoKVxuICAgIC8vIHtcbiAgICAvLyAgICAgY2MubG9nKFwib25fbG9hZCAwMDAwMDAwMDAwMDAwMDAwMFwiKTtcbiAgICAvLyB9XG5cbiAgICBzZXQgdWlfbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3VpX25hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj6rog73nlLFwb3BfbWdy6LCD55SoXG4gICAgICovXG4gICAgX19zaG93X18oLi4ucGFyYW1zOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICAvLyBjYy5sb2coXCJzaG93XCIsIHRoaXMuX3VpX25hbWUsIC4uLnBhcmFtcyk7XG4gICAgICAgIGlmICh0aGlzLmJ0bl9jbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5idG5fY2xvc2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbG9zZUJ0blRvdWNoLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzX3Nob3cgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uX3Nob3coLi4ucGFyYW1zKTtcblxuICAgICAgICAvL+a3u+WKoOmBrue9qeiDjOaZr1xuICAgICAgICBsZXQgb3ZlcmxheTogY2MuTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShwb3Bfb3ZlcmxheV9iZyk7XG4gICAgICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgICAgICAgcG9vbF9tZ3IuZ2V0X2luc3QoKS5nZXRfdWkoVUlfQ09ORklHLm92ZXJsYXlfYmcsIGdlbl9oYW5kbGVyKChiZ19ub2RlOiBjYy5Ob2RlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzX3Nob3cgfHwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKHBvcF9vdmVybGF5X2JnKSkge1xuICAgICAgICAgICAgICAgICAgICBwb29sX21nci5nZXRfaW5zdCgpLnB1dF91aShVSV9DT05GSUcub3ZlcmxheV9iZywgYmdfbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmdfbm9kZS5uYW1lID0gcG9wX292ZXJsYXlfYmc7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJnX25vZGUpO1xuICAgICAgICAgICAgICAgIGJnX25vZGUuc2V0U2libGluZ0luZGV4KDApO1xuICAgICAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+q6IO955SxcG9wX21ncuiwg+eUqFxuICAgICAqL1xuICAgIF9faGlkZV9fKCk6IHZvaWQge1xuICAgICAgICBjYy5sb2coXCJoaWRlXCIsIHRoaXMuX3VpX25hbWUpO1xuICAgICAgICBpZiAodGhpcy5idG5fY2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYnRuX2Nsb3NlLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsb3NlQnRuVG91Y2gsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNfc2hvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uX2hpZGUoKTtcbiAgICAgICAgLy8gd3hIdHRwQ2xpZW50LnVucmVnaXN0ZXJDdHhIYW5kbGVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKuW8ueWHuueVjOmdouaXtuiwg+eUqO+8jOS4lOWcqG9uTG9hZOS5i+WQjuiwg+eUqO+8jOWPr+S7peeUqOadpeWBmuS4gOS6m+WIneWni+WMluW3peS9nCovXG4gICAgb25fc2hvdyguLi5wYXJhbXM6IGFueVtdKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICAvKirlhbPpl63nlYzpnaLml7bosIPnlKjvvIznlKjmnaXlgZrmuIXnkIblt6XkvZwqL1xuICAgIG9uX2hpZGUoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICAvKirlhbPpl63oh6rouqsqL1xuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHBvcF9tZ3IuZ2V0X2luc3QoKS5oaWRlKHRoaXMuX3VpX25hbWUpO1xuICAgIH1cblxuICAgIG9uQ2xvc2VCdG5Ub3VjaCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIEF1ZGlvLkF1ZGlvUGxheWVyLmlucygpLnBsYXlfc291bmQoQXVkaW8uQVVESU9fQ09ORklHLkF1ZGlvX0J0bik7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/linklist.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bdd09bYpc5GwI0jOASAzWlq', 'linklist');
// src/common/linklist.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkList = void 0;
var LinkList = /** @class */ (function () {
    function LinkList() {
        this._head = this._tail = null;
        this.pool = [];
    }
    LinkList.prototype.spawn_node = function (key, data) {
        var node = this.pool.pop();
        if (node) {
            node.key = key;
            node.data = data;
            node.next = null;
        }
        else {
            node = { key: key, data: data, next: null };
        }
        return node;
    };
    Object.defineProperty(LinkList.prototype, "head", {
        get: function () {
            return this._head;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkList.prototype, "tail", {
        get: function () {
            return this._tail;
        },
        enumerable: false,
        configurable: true
    });
    LinkList.prototype.append = function (key, data) {
        var node = this.spawn_node(key, data);
        //将node加到linklist末尾
        if (this._tail) {
            this._tail.next = node;
            this._tail = node;
        }
        else {
            this._head = this._tail = node;
        }
        return node.key;
    };
    LinkList.prototype.remove = function (key) {
        if (!key) {
            return null;
        }
        if (!this._head) {
            return null;
        }
        var prev;
        var curr = this._head;
        while (curr && curr.key != key) {
            prev = curr;
            curr = curr.next;
        }
        //没找到
        if (!curr) {
            return null;
        }
        if (!prev) {
            //curr为头节点(要区分curr是否同时为尾节点)
            this._head = curr.next;
            if (!curr.next) {
                this._tail = null;
            }
        }
        else {
            //curr非头节点(要区分curr是否为尾节点)
            prev.next = curr.next;
            if (!curr.next) {
                this._tail = prev;
            }
        }
        this.pool.push(curr);
        return curr;
    };
    return LinkList;
}());
exports.LinkList = LinkList;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2xpbmtsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0lBTUk7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyw2QkFBVSxHQUFsQixVQUFtQixHQUFVLEVBQUUsSUFBTTtRQUVqQyxJQUFJLElBQUksR0FBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQyxJQUFHLElBQUksRUFDUDtZQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFFRDtZQUNJLElBQUksR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQUksMEJBQUk7YUFBUjtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBCQUFJO2FBQVI7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCx5QkFBTSxHQUFOLFVBQU8sR0FBVSxFQUFFLElBQU07UUFFckIsSUFBSSxJQUFJLEdBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELG1CQUFtQjtRQUNuQixJQUFHLElBQUksQ0FBQyxLQUFLLEVBQ2I7WUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDckI7YUFFRDtZQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxHQUFVO1FBRWIsSUFBRyxDQUFDLEdBQUcsRUFDUDtZQUNJLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDZDtZQUNJLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLElBQW9CLENBQUM7UUFDekIsSUFBSSxJQUFJLEdBQW1CLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEMsT0FBTSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQzdCO1lBQ0ksSUFBSSxHQUFHLElBQUksQ0FBQztZQUNaLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBQ0QsS0FBSztRQUNMLElBQUcsQ0FBQyxJQUFJLEVBQ1I7WUFDSSxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBRyxDQUFDLElBQUksRUFDUjtZQUNJLDJCQUEyQjtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2I7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDckI7U0FDSjthQUVEO1lBQ0kseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFDYjtnQkFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNyQjtTQUNKO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQWpHQSxBQWlHQyxJQUFBO0FBakdZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgTGlua0xpc3ROb2RlPFQ+ID0ge1xuICAgIGtleTpudW1iZXI7XG4gICAgZGF0YTpUO1xuICAgIG5leHQ6TGlua0xpc3ROb2RlPFQ+O1xufVxuXG5leHBvcnQgY2xhc3MgTGlua0xpc3Q8VD5cbntcbiAgICBwcml2YXRlIHBvb2w6TGlua0xpc3ROb2RlPFQ+W107XG4gICAgcHJpdmF0ZSBfaGVhZDpMaW5rTGlzdE5vZGU8VD47XG4gICAgcHJpdmF0ZSBfdGFpbDpMaW5rTGlzdE5vZGU8VD47XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLl9oZWFkID0gdGhpcy5fdGFpbCA9IG51bGw7XG4gICAgICAgIHRoaXMucG9vbCA9IFtdO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd25fbm9kZShrZXk6bnVtYmVyLCBkYXRhOlQpOkxpbmtMaXN0Tm9kZTxUPlxuICAgIHtcbiAgICAgICAgbGV0IG5vZGU6TGlua0xpc3ROb2RlPFQ+ID0gdGhpcy5wb29sLnBvcCgpO1xuICAgICAgICBpZihub2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICBub2RlLmtleSA9IGtleTtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbm9kZSA9IHtrZXk6a2V5LCBkYXRhOmRhdGEsIG5leHQ6bnVsbH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIFxuICAgIGdldCBoZWFkKCk6TGlua0xpc3ROb2RlPFQ+XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVhZDtcbiAgICB9XG5cbiAgICBnZXQgdGFpbCgpOkxpbmtMaXN0Tm9kZTxUPlxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhaWw7XG4gICAgfVxuXG4gICAgYXBwZW5kKGtleTpudW1iZXIsIGRhdGE6VCk6bnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbm9kZTpMaW5rTGlzdE5vZGU8VD4gPSB0aGlzLnNwYXduX25vZGUoa2V5LCBkYXRhKTtcbiAgICAgICAgLy/lsIZub2Rl5Yqg5YiwbGlua2xpc3TmnKvlsL5cbiAgICAgICAgaWYodGhpcy5fdGFpbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgICAgIHRoaXMuX3RhaWwgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlLmtleTtcbiAgICB9XG5cbiAgICByZW1vdmUoa2V5Om51bWJlcik6TGlua0xpc3ROb2RlPFQ+XG4gICAge1xuICAgICAgICBpZigha2V5KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5faGVhZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZXY6TGlua0xpc3ROb2RlPFQ+O1xuICAgICAgICBsZXQgY3VycjpMaW5rTGlzdE5vZGU8VD4gPSB0aGlzLl9oZWFkO1xuICAgICAgICB3aGlsZShjdXJyICYmIGN1cnIua2V5ICE9IGtleSlcbiAgICAgICAge1xuICAgICAgICAgICAgcHJldiA9IGN1cnI7XG4gICAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIC8v5rKh5om+5YiwXG4gICAgICAgIGlmKCFjdXJyKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZighcHJldilcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jdXJy5Li65aS06IqC54K5KOimgeWMuuWIhmN1cnLmmK/lkKblkIzml7bkuLrlsL7oioLngrkpXG4gICAgICAgICAgICB0aGlzLl9oZWFkID0gY3Vyci5uZXh0O1xuICAgICAgICAgICAgaWYoIWN1cnIubmV4dClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY3VycumdnuWktOiKgueCuSjopoHljLrliIZjdXJy5piv5ZCm5Li65bC+6IqC54K5KVxuICAgICAgICAgICAgcHJldi5uZXh0ID0gY3Vyci5uZXh0O1xuICAgICAgICAgICAgaWYoIWN1cnIubmV4dClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWlsID0gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvb2wucHVzaChjdXJyKTtcbiAgICAgICAgcmV0dXJuIGN1cnI7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------
