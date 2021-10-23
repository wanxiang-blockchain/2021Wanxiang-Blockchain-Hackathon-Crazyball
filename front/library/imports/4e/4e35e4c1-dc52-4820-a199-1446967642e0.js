"use strict";
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