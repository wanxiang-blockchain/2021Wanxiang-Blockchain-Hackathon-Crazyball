"use strict";
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