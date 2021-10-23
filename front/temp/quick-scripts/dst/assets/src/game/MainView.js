
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