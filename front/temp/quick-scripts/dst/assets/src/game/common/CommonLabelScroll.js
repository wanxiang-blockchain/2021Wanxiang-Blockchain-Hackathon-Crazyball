
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