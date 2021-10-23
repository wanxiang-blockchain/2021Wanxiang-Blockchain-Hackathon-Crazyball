"use strict";
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