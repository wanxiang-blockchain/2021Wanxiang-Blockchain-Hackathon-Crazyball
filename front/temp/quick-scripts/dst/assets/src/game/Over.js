
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9PdmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBDQUE4QztBQUM5QywrQ0FBMEM7QUFDMUMsMkRBQTBEO0FBQzFELCtEQUEwRTtBQUMxRSx1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUFnR0M7UUE5RkMsYUFBTyxHQUFZLElBQUksQ0FBQztRQUV4QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUVyQixTQUFHLEdBQVksSUFBSSxDQUFDO1FBRXBCLFdBQUssR0FBYSxJQUFJLENBQUM7UUFFdkIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQWEsSUFBSSxDQUFDO1FBRXRCLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRTdCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFFMUIsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixZQUFNLEdBQVksSUFBSSxDQUFDO1FBRXZCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBRTVCLG1CQUFhLEdBQWEsSUFBSSxDQUFDOztJQW9FakMsQ0FBQztJQWxFQyxxQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLGNBQU8sQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBRUssdUJBQVEsR0FBZDs7OztnQkFDRSxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDekIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO2dCQUM3QixJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUUsQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFFOUMsS0FBSyxHQUFHLG1CQUFTLENBQUMsR0FBRyxFQUFFLENBQUMsS0FBSyxDQUFDO2dCQUNsQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxvQkFBVyxDQUFDLEtBQUssRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsQ0FBQyxDQUFDO2dCQUN0RCxJQUFJLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7Z0JBQzNCLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFDbkIsYUFBYSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7cUJBQ2hELEtBQUssRUFBRSxDQUFDO2dCQUNYLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO2dCQUM1QixJQUFJLE1BQU0sQ0FBQyxLQUFLLENBQUMsR0FBRyxNQUFNLENBQUMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDekQsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLEVBQUUsVUFBVSxFQUFFLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxDQUFDO29CQUN4RyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7b0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDekIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLEdBQUcsZ0ZBQWUsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakQseUJBQVcsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7aUJBQ3hDO3FCQUFNO29CQUNMLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztvQkFDeEIsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDO29CQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztvQkFDMUQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLENBQUM7b0JBQ3hELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLG9CQUFXLENBQUMsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEdBQUcsS0FBSyxFQUFFLENBQUMsRUFBRSxLQUFLLEVBQUUsR0FBRyxDQUFDLENBQUM7b0JBQ2pGLFNBQVMsR0FBRyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxVQUFDLElBQUk7d0JBQzlDLE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7b0JBQ3pCLENBQUMsQ0FBQyxDQUFDO29CQUNILElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxHQUFHLEdBQUcsR0FBRyxTQUFTLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxDQUFDO29CQUM5RCx5QkFBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztpQkFDckM7Ozs7S0FDRjtJQUVPLHVCQUFRLEdBQWhCO1FBQ0UsRUFBRSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDaEMsQ0FBQztJQUNhLDBCQUFXLEdBQXpCOzs7Ozs7d0JBQ00sU0FBUyxHQUFHLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLFVBQUMsSUFBSSxFQUFFLEtBQUs7NEJBQzFELE9BQU8sSUFBSSxDQUFDLElBQUksS0FBSyxDQUFDLENBQUM7d0JBQ3pCLENBQUMsQ0FBQyxDQUFDOzZCQUNDLENBQUEsU0FBUyxHQUFHLENBQUMsQ0FBQyxDQUFBLEVBQWQsd0JBQWM7d0JBQ1osT0FBTyxHQUFHLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsUUFBUSxDQUFDO3dCQUNoRixlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDLFFBQVEsSUFBSSxDQUFDLENBQUM7d0JBQy9DLHFCQUFNLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQztnQ0FDM0MsUUFBUSxFQUFFLE9BQU87NkJBQ2xCLENBQUMsRUFBQTs7d0JBRkYsU0FFRSxDQUFDO3dCQUNILDZCQUFhLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUFVLENBQUMsV0FBVyxDQUFDLENBQUM7Ozs7OztLQUdwRDtJQUNhLDBCQUFXLEdBQXpCOzs7Z0JBQ0UsWUFBWSxDQUFDLE9BQU8sQ0FBQyxXQUFXLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzFDLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FDbkM7b0JBQ0UsVUFBVSxFQUFFLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsUUFBUTtpQkFDMUMsRUFDRCxlQUFlLEVBQ2YsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsQ0FDakQsQ0FBQzs7OztLQUNIO0lBN0ZEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7eUNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztzQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3lDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7c0NBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztxQ0FDRTtJQUVwQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3VDQUNJO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ087SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztzQ0FDRztJQUV0QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDOzZDQUNVO0lBRTdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MkNBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzsyQ0FDUTtJQUUxQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO3dDQUNLO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ1U7SUFFNUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzsrQ0FDWTtJQTVCWixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBZ0d4QjtJQUFELFdBQUM7Q0FoR0QsQUFnR0MsQ0FoR2lDLEVBQUUsQ0FBQyxTQUFTLEdBZ0c3QztrQkFoR29CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4vY29tbW9uL0NvbW1vbic7XG5pbXBvcnQgR2FtZU1vZGVsIGZyb20gJy4vbW9kZWwvR2FtZU1vZGVsJztcbmltcG9ydCB7IEF1ZGlvUGxheWVyIH0gZnJvbSAnLi4vY29tbW9uL2F1ZGlvL0F1ZGlvUGxheWVyJztcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2gsIEV2ZW50X05hbWUgfSBmcm9tICcuLi9jb21tb24vZXZlbnQvRXZlbnREaXNwYXRjaCc7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9tb2RlbC9TdGF0ZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgT3ZlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBvdmVyQm94OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG1hc2s6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbG9hZGluZzogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBmYWlsOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHdpbjogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgY291bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGNvdW50Qm94OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBkaWZmOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgcmVsaXZlQ291bnQ6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHJlbGl2ZUJveDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICByZWxvYWRCb3g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ29CYWNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGdldE1vbmV5Qm94OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBnZXRNb25leVRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgb25Mb2FkKCkge1xuICAgIHRoaXMubWFzay5vbigndG91Y2hzdGFydCcsICgpID0+IHt9LCB0aGlzLCB0cnVlKTtcbiAgfVxuXG4gIGFzeW5jIG9uRW5hYmxlKCkge1xuICAgIHRoaXMud2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZmFpbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmNvdW50Qm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuZ29CYWNrLm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkdvQmFjaywgdGhpcyk7XG5cbiAgICBsZXQgY291bnQgPSBHYW1lTW9kZWwuaW5zKCkuc2NvcmU7XG4gICAgdGhpcy5jb3VudC5zdHJpbmcgPSBmb3JtYXRQcmljZShjb3VudCwgMCwgZmFsc2UsICcgJyk7XG4gICAgdGhpcy5sb2FkaW5nLmFjdGl2ZSA9IHRydWU7XG4gICAgY2MudHdlZW4odGhpcy5sb2FkaW5nKVxuICAgICAgLnJlcGVhdEZvcmV2ZXIoY2MudHdlZW4oKS5ieSgwLjMsIHsgYW5nbGU6IDkwIH0pKVxuICAgICAgLnN0YXJ0KCk7XG4gICAgdGhpcy5sb2FkaW5nLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuY291bnRCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICBpZiAoTnVtYmVyKGNvdW50KSA+IE51bWJlcihTdGF0ZS5pbnMoKS5tYWluTmVhci5tYXhTY29yZSkpIHtcbiAgICAgIFN0YXRlLmlucygpLm1haW5OZWFyLmNvbnRyYWN0LnVwbG9hZF9zY29yZSh7IGFjY291bnRfaWQ6IFN0YXRlLmlucygpLm1haW5OZWFyLm93bmVyS2V5LCBzY29yZTogY291bnQgfSk7XG4gICAgICB0aGlzLndpbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5mYWlsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5nZXRNb25leVRpdGxlLnN0cmluZyA9IGDkv53mjIHkuIDlpKnmk4LkuLvlkI7lpZblirHoh6rliqjlj5HmlL5gO1xuICAgICAgdGhpcy5nZXRNb25leUJveC5vbigndG91Y2hzdGFydCcsIHRoaXMub25Hb0JhY2spO1xuICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnY29uZ3JhJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMud2luLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgdGhpcy5mYWlsLmFjdGl2ZSA9IHRydWU7XG4gICAgICB0aGlzLnJlbGl2ZUJveC5vbmNlKCd0b3VjaHN0YXJ0JywgdGhpcy5vblJlbGl2ZUJveCwgdGhpcyk7XG4gICAgICB0aGlzLnJlbG9hZEJveC5vbigndG91Y2hzdGFydCcsIHRoaXMub25SZWxvYWRCb3gsIHRoaXMpO1xuICAgICAgdGhpcy5kaWZmLnN0cmluZyA9IGZvcm1hdFByaWNlKFN0YXRlLmlucygpLm1haW5OZWFyLm1heFNjb3JlIC0gY291bnQsIDAsIGZhbHNlLCAnICcpO1xuICAgICAgbGV0IHJlbGl2ZU9iaiA9IFN0YXRlLmlucygpLmltYWdlTGlzdC5maW5kKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBpdGVtLnR5cGUgPT09IDc7XG4gICAgICB9KTtcbiAgICAgIHRoaXMucmVsaXZlQ291bnQuc3RyaW5nID0gJ3gnICsgcmVsaXZlT2JqLnBheUNvdW50LnRvU3RyaW5nKCk7XG4gICAgICBBdWRpb1BsYXllci5pbnMoKS5wbGF5X3NvdW5kKCd3aW4nKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uR29CYWNrKCkge1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xuICB9XG4gIHByaXZhdGUgYXN5bmMgb25SZWxpdmVCb3goKSB7XG4gICAgbGV0IGZpbmRJbmRleCA9IFN0YXRlLmlucygpLmltYWdlTGlzdC5maW5kSW5kZXgoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4gaXRlbS50eXBlID09PSA3O1xuICAgIH0pO1xuICAgIGlmIChmaW5kSW5kZXggPiAtMSkge1xuICAgICAgbGV0IHRva2VuSWQgPSBTdGF0ZS5pbnMoKS5pbWFnZUxpc3RbZmluZEluZGV4XS5wYXlMaXN0LnNwbGljZSgwLCAxKVswXS50b2tlbl9pZDtcbiAgICAgIFN0YXRlLmlucygpLmltYWdlTGlzdFtmaW5kSW5kZXhdLnBheUNvdW50IC09IDE7XG4gICAgICBhd2FpdCBTdGF0ZS5pbnMoKS5tYWluTmVhci5jb250cmFjdC5uZnRfYnVybih7XG4gICAgICAgIHRva2VuX2lkOiB0b2tlbklkXG4gICAgICB9KTtcbiAgICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuZmlyZShFdmVudF9OYW1lLkdBTUVfUkVMSVZFKTtcbiAgICB9IGVsc2Uge1xuICAgIH1cbiAgfVxuICBwcml2YXRlIGFzeW5jIG9uUmVsb2FkQm94KCkge1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbml0U2NlbmUnLCAnZ2FtZScpO1xuICAgIFN0YXRlLmlucygpLm1haW5OZWFyLmNvbnRyYWN0LnNpZ25fdXAoXG4gICAgICB7XG4gICAgICAgIGFjY291bnRfaWQ6IFN0YXRlLmlucygpLm1haW5OZWFyLm93bmVyS2V5XG4gICAgICB9LFxuICAgICAgMzAwMDAwMDAwMDAwMDAwLFxuICAgICAgd2luZG93Lm5lYXJBcGkudXRpbHMuZm9ybWF0LnBhcnNlTmVhckFtb3VudCgnMScpXG4gICAgKTtcbiAgfVxufVxuIl19