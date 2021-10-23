
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