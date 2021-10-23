"use strict";
cc._RF.push(module, 'fc8342e0DJGy6/8uxRlqj50', 'State');
// src/game/model/State.ts

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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
var SingletonClass_1 = require("../../common/base/SingletonClass");
var State = /** @class */ (function (_super) {
    __extends(State, _super);
    function State() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.imageList = [
            {
                type: 6,
                url: 'images/a1',
                title: '清一行',
                price: '10',
                payCount: 0,
                payList: [],
                // 冷却时间
                time: 0.3,
                maxCount: 0,
                sort: -1
            },
            {
                type: 1,
                url: 'images/a2',
                title: '冻全屏',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 2,
                url: 'images/a3',
                title: '两倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 3,
                url: 'images/a4',
                title: '三倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 4,
                url: 'images/a5',
                title: '五倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 5,
                url: 'images/a6',
                title: '清全屏',
                price: '10',
                payCount: 0,
                payList: [],
                time: 1,
                maxCount: 0,
                sort: -1
            },
            {
                type: 7,
                url: 'images/a7',
                title: '复活',
                price: '10',
                payCount: 0,
                payList: [],
                time: 0,
                maxCount: 0,
                sort: -1
            }
        ];
        _this.isLogin = false;
        _this.isPay = false;
        _this.mianNearConfig = {
            networkId: 'testnet',
            contractName: 'dev-1632965307540-55511993444317',
            // contractName: 'dev-1632724418776-68219858133201',
            nodeUrl: 'https://rpc.testnet.near.org',
            // nodeUrl: 'https://public-rpc.blockpi.io/http/near-testnet',
            walletUrl: 'https://wallet.testnet.near.org',
            helperUrl: 'https://helper.testnet.near.org'
            // explorerUrl: "https://explorer.testnet.near.org",
        };
        _this.mainNear = {
            near: {},
            walletAccount: {},
            contract: {},
            ownerKey: '',
            poolBalance: 0,
            maxScore: 0,
            balance: 0
        };
        _this.storeNearConfig = __assign(__assign({}, _this.mianNearConfig), { contractName: 'market.' + _this.mianNearConfig.contractName });
        _this.storeNear = {
            near: {},
            walletAccount: {},
            contract: {},
            ownerKey: '',
            poolBalance: 0,
            maxScore: 0,
            balance: 0
        };
        return _this;
    }
    State.ins = function () {
        return _super.ins.call(this);
    };
    State.prototype.resetImageList = function () {
        this.imageList = [
            {
                type: 6,
                url: 'images/a1',
                title: '清一行',
                price: '10',
                payCount: 0,
                payList: [],
                // 冷却时间
                time: 0.3,
                maxCount: 0,
                sort: -1
            },
            {
                type: 1,
                url: 'images/a2',
                title: '冻全屏',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 2,
                url: 'images/a3',
                title: '两倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 3,
                url: 'images/a4',
                title: '三倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 4,
                url: 'images/a5',
                title: '五倍速',
                price: '10',
                payCount: 0,
                payList: [],
                time: 10,
                maxCount: 0,
                sort: -1
            },
            {
                type: 5,
                url: 'images/a6',
                title: '清全屏',
                price: '10',
                payCount: 0,
                payList: [],
                time: 1,
                maxCount: 0,
                sort: -1
            },
            {
                type: 7,
                url: 'images/a7',
                title: '复活',
                price: '10',
                payCount: 0,
                payList: [],
                time: 0,
                maxCount: 0,
                sort: -1
            }
        ];
    };
    State.prototype.getList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, localStorageImageList, typeProcessIndex;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, State.ins().mainNear.contract.nft_tokens_for_owner({
                            account_id: State.ins().mainNear.ownerKey,
                            from_index: '0',
                            limit: 100000
                        })];
                    case 1:
                        result = _a.sent();
                        State.ins().resetImageList();
                        if (State.ins().isLogin && localStorage.getItem('imageList')) {
                            localStorageImageList = JSON.parse(localStorage.getItem('imageList'));
                            localStorageImageList.forEach(function (item, index) {
                                State.ins().imageList[index].sort = item.sort;
                            });
                        }
                        typeProcessIndex = function (res) {
                            var index = res;
                            switch (res) {
                                case 7:
                                    index = 6;
                                    break;
                                case 6:
                                    index = 0;
                                    break;
                            }
                            return index;
                        };
                        result.forEach(function (item, index) {
                            var arr = item.token_id.split(':');
                            var targetIndex = typeProcessIndex(Number(arr[0]));
                            State.ins().imageList[targetIndex].payCount++;
                            State.ins().imageList[targetIndex].payList.push(item);
                        });
                        localStorage.setItem('imageList', JSON.stringify(State.ins().imageList));
                        return [2 /*return*/];
                }
            });
        });
    };
    State.prototype.init = function () { };
    return State;
}(SingletonClass_1.default));
exports.default = State;

cc._RF.pop();