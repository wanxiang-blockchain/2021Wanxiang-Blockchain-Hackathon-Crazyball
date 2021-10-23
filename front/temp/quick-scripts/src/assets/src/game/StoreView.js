"use strict";
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