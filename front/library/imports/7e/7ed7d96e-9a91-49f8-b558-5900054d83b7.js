"use strict";
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