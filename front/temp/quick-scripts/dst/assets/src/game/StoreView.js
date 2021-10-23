
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