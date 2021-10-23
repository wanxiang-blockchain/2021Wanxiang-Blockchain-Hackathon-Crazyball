
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/model/State.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9tb2RlbC9TdGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1FQUE4RDtBQUM5RDtJQUFtQyx5QkFBYztJQUFqRDtRQUFBLHFFQWlQQztRQTdPUSxlQUFTLEdBQUc7WUFDakI7Z0JBQ0UsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLFdBQVc7Z0JBQ2hCLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2dCQUNYLE9BQU87Z0JBQ1AsSUFBSSxFQUFFLEdBQUc7Z0JBQ1QsUUFBUSxFQUFFLENBQUM7Z0JBQ1gsSUFBSSxFQUFFLENBQUMsQ0FBQzthQUNUO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLFdBQVc7Z0JBQ2hCLEtBQUssRUFBRSxLQUFLO2dCQUNaLEtBQUssRUFBRSxJQUFJO2dCQUNYLFFBQVEsRUFBRSxDQUFDO2dCQUNYLE9BQU8sRUFBRSxFQUFFO2dCQUNYLElBQUksRUFBRSxFQUFFO2dCQUNSLFFBQVEsRUFBRSxDQUFDO2dCQUNYLElBQUksRUFBRSxDQUFDLENBQUM7YUFDVDtZQUNEO2dCQUNFLElBQUksRUFBRSxDQUFDO2dCQUNQLEdBQUcsRUFBRSxXQUFXO2dCQUNoQixLQUFLLEVBQUUsS0FBSztnQkFDWixLQUFLLEVBQUUsSUFBSTtnQkFDWCxRQUFRLEVBQUUsQ0FBQztnQkFDWCxPQUFPLEVBQUUsRUFBRTtnQkFDWCxJQUFJLEVBQUUsRUFBRTtnQkFDUixRQUFRLEVBQUUsQ0FBQztnQkFDWCxJQUFJLEVBQUUsQ0FBQyxDQUFDO2FBQ1Q7WUFDRDtnQkFDRSxJQUFJLEVBQUUsQ0FBQztnQkFDUCxHQUFHLEVBQUUsV0FBVztnQkFD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QUFDO3lCQUNKO3dCQUNHLGdCQUFnQixHQUFHLFVBQUMsR0FBRzs0QkFDekIsSUFBSSxLQUFLLEdBQUcsR0FBRyxDQUFDOzRCQUNoQixRQUFPLEdBQUcsRUFBRTtnQ0FDVixLQUFLLENBQUM7b0NBQ0osS0FBSyxHQUFHLENBQUMsQ0FBQztvQ0FDVixNQUFNO2dDQUNSLEtBQUssQ0FBQztvQ0FDSixLQUFLLEdBQUcsQ0FBQyxDQUFDO29DQUNWLE1BQU07NkJBQ1Q7NEJBQ0QsT0FBTyxLQUFLLENBQUM7d0JBQ2YsQ0FBQyxDQUFBO3dCQUNELE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJLEVBQUUsS0FBSzs0QkFDekIsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7NEJBQ25DLElBQUksV0FBVyxHQUFHLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNuRCxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDOzRCQUM5QyxLQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3hELENBQUMsQ0FBQyxDQUFDO3dCQUNILFlBQVksQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7Ozs7O0tBQzFFO0lBd0NNLG9CQUFJLEdBQVgsY0FBZSxDQUFDO0lBQ2xCLFlBQUM7QUFBRCxDQWpQQSxBQWlQQyxDQWpQa0Msd0JBQWMsR0FpUGhEIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbkNsYXNzIGZyb20gJy4uLy4uL2NvbW1vbi9iYXNlL1NpbmdsZXRvbkNsYXNzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0YXRlIGV4dGVuZHMgU2luZ2xldG9uQ2xhc3Mge1xuICBzdGF0aWMgaW5zKCkge1xuICAgIHJldHVybiBzdXBlci5pbnMoKSBhcyBTdGF0ZTtcbiAgfVxuICBwdWJsaWMgaW1hZ2VMaXN0ID0gW1xuICAgIHtcbiAgICAgIHR5cGU6IDYsXG4gICAgICB1cmw6ICdpbWFnZXMvYTEnLFxuICAgICAgdGl0bGU6ICfmuIXkuIDooYwnLFxuICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICBwYXlDb3VudDogMCxcbiAgICAgIHBheUxpc3Q6IFtdLFxuICAgICAgLy8g5Ya35Y205pe26Ze0XG4gICAgICB0aW1lOiAwLjMsXG4gICAgICBtYXhDb3VudDogMCxcbiAgICAgIHNvcnQ6IC0xXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiAxLFxuICAgICAgdXJsOiAnaW1hZ2VzL2EyJyxcbiAgICAgIHRpdGxlOiAn5Ya75YWo5bGPJyxcbiAgICAgIHByaWNlOiAnMTAnLFxuICAgICAgcGF5Q291bnQ6IDAsXG4gICAgICBwYXlMaXN0OiBbXSxcbiAgICAgIHRpbWU6IDEwLFxuICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICBzb3J0OiAtMVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogMixcbiAgICAgIHVybDogJ2ltYWdlcy9hMycsXG4gICAgICB0aXRsZTogJ+S4pOWAjemAnycsXG4gICAgICBwcmljZTogJzEwJyxcbiAgICAgIHBheUNvdW50OiAwLFxuICAgICAgcGF5TGlzdDogW10sXG4gICAgICB0aW1lOiAxMCxcbiAgICAgIG1heENvdW50OiAwLFxuICAgICAgc29ydDogLTFcbiAgICB9LFxuICAgIHtcbiAgICAgIHR5cGU6IDMsXG4gICAgICB1cmw6ICdpbWFnZXMvYTQnLFxuICAgICAgdGl0bGU6ICfkuInlgI3pgJ8nLFxuICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICBwYXlDb3VudDogMCxcbiAgICAgIHBheUxpc3Q6IFtdLFxuICAgICAgdGltZTogMTAsXG4gICAgICBtYXhDb3VudDogMCxcbiAgICAgIHNvcnQ6IC0xXG4gICAgfSxcbiAgICB7XG4gICAgICB0eXBlOiA0LFxuICAgICAgdXJsOiAnaW1hZ2VzL2E1JyxcbiAgICAgIHRpdGxlOiAn5LqU5YCN6YCfJyxcbiAgICAgIHByaWNlOiAnMTAnLFxuICAgICAgcGF5Q291bnQ6IDAsXG4gICAgICBwYXlMaXN0OiBbXSxcbiAgICAgIHRpbWU6IDEwLFxuICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICBzb3J0OiAtMVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogNSxcbiAgICAgIHVybDogJ2ltYWdlcy9hNicsXG4gICAgICB0aXRsZTogJ+a4heWFqOWxjycsXG4gICAgICBwcmljZTogJzEwJyxcbiAgICAgIHBheUNvdW50OiAwLFxuICAgICAgcGF5TGlzdDogW10sXG4gICAgICB0aW1lOiAxLFxuICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICBzb3J0OiAtMVxuICAgIH0sXG4gICAge1xuICAgICAgdHlwZTogNyxcbiAgICAgIHVybDogJ2ltYWdlcy9hNycsXG4gICAgICB0aXRsZTogJ+Wkjea0uycsXG4gICAgICBwcmljZTogJzEwJyxcbiAgICAgIHBheUNvdW50OiAwLFxuICAgICAgcGF5TGlzdDogW10sXG4gICAgICB0aW1lOiAwLFxuICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICBzb3J0OiAtMVxuICAgIH1cbiAgXTtcblxuICBwdWJsaWMgcmVzZXRJbWFnZUxpc3QoKSB7XG4gICAgdGhpcy5pbWFnZUxpc3QgPSBbXG4gICAgICB7XG4gICAgICAgIHR5cGU6IDYsXG4gICAgICAgIHVybDogJ2ltYWdlcy9hMScsXG4gICAgICAgIHRpdGxlOiAn5riF5LiA6KGMJyxcbiAgICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICAgIHBheUNvdW50OiAwLFxuICAgICAgICBwYXlMaXN0OiBbXSxcbiAgICAgICAgLy8g5Ya35Y205pe26Ze0XG4gICAgICAgIHRpbWU6IDAuMyxcbiAgICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICAgIHNvcnQ6IC0xXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiAxLFxuICAgICAgICB1cmw6ICdpbWFnZXMvYTInLFxuICAgICAgICB0aXRsZTogJ+WGu+WFqOWxjycsXG4gICAgICAgIHByaWNlOiAnMTAnLFxuICAgICAgICBwYXlDb3VudDogMCxcbiAgICAgICAgcGF5TGlzdDogW10sXG4gICAgICAgIHRpbWU6IDEwLFxuICAgICAgICBtYXhDb3VudDogMCxcbiAgICAgICAgc29ydDogLTFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IDIsXG4gICAgICAgIHVybDogJ2ltYWdlcy9hMycsXG4gICAgICAgIHRpdGxlOiAn5Lik5YCN6YCfJyxcbiAgICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICAgIHBheUNvdW50OiAwLFxuICAgICAgICBwYXlMaXN0OiBbXSxcbiAgICAgICAgdGltZTogMTAsXG4gICAgICAgIG1heENvdW50OiAwLFxuICAgICAgICBzb3J0OiAtMVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZTogMyxcbiAgICAgICAgdXJsOiAnaW1hZ2VzL2E0JyxcbiAgICAgICAgdGl0bGU6ICfkuInlgI3pgJ8nLFxuICAgICAgICBwcmljZTogJzEwJyxcbiAgICAgICAgcGF5Q291bnQ6IDAsXG4gICAgICAgIHBheUxpc3Q6IFtdLFxuICAgICAgICB0aW1lOiAxMCxcbiAgICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICAgIHNvcnQ6IC0xXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiA0LFxuICAgICAgICB1cmw6ICdpbWFnZXMvYTUnLFxuICAgICAgICB0aXRsZTogJ+S6lOWAjemAnycsXG4gICAgICAgIHByaWNlOiAnMTAnLFxuICAgICAgICBwYXlDb3VudDogMCxcbiAgICAgICAgcGF5TGlzdDogW10sXG4gICAgICAgIHRpbWU6IDEwLFxuICAgICAgICBtYXhDb3VudDogMCxcbiAgICAgICAgc29ydDogLTFcbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIHR5cGU6IDUsXG4gICAgICAgIHVybDogJ2ltYWdlcy9hNicsXG4gICAgICAgIHRpdGxlOiAn5riF5YWo5bGPJyxcbiAgICAgICAgcHJpY2U6ICcxMCcsXG4gICAgICAgIHBheUNvdW50OiAwLFxuICAgICAgICBwYXlMaXN0OiBbXSxcbiAgICAgICAgdGltZTogMSxcbiAgICAgICAgbWF4Q291bnQ6IDAsXG4gICAgICAgIHNvcnQ6IC0xXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0eXBlOiA3LFxuICAgICAgICB1cmw6ICdpbWFnZXMvYTcnLFxuICAgICAgICB0aXRsZTogJ+Wkjea0uycsXG4gICAgICAgIHByaWNlOiAnMTAnLFxuICAgICAgICBwYXlDb3VudDogMCxcbiAgICAgICAgcGF5TGlzdDogW10sXG4gICAgICAgIHRpbWU6IDAsXG4gICAgICAgIG1heENvdW50OiAwLFxuICAgICAgICBzb3J0OiAtMVxuICAgICAgfVxuICAgIF07XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgZ2V0TGlzdCgpIHtcbiAgICBsZXQgcmVzdWx0ID0gYXdhaXQgU3RhdGUuaW5zKCkubWFpbk5lYXIuY29udHJhY3QubmZ0X3Rva2Vuc19mb3Jfb3duZXIoe1xuICAgICAgYWNjb3VudF9pZDogU3RhdGUuaW5zKCkubWFpbk5lYXIub3duZXJLZXksXG4gICAgICBmcm9tX2luZGV4OiAnMCcsXG4gICAgICBsaW1pdDogMTAwMDAwXG4gICAgfSk7XG4gICAgU3RhdGUuaW5zKCkucmVzZXRJbWFnZUxpc3QoKTtcbiAgICBpZiAoU3RhdGUuaW5zKCkuaXNMb2dpbiAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnaW1hZ2VMaXN0JykpIHtcbiAgICAgIGxldCBsb2NhbFN0b3JhZ2VJbWFnZUxpc3QgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdpbWFnZUxpc3QnKSk7XG4gICAgICBsb2NhbFN0b3JhZ2VJbWFnZUxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W2luZGV4XS5zb3J0ID0gaXRlbS5zb3J0O1xuICAgICAgfSk7XG4gICAgfVxuICAgIGxldCB0eXBlUHJvY2Vzc0luZGV4ID0gKHJlcykgPT4ge1xuICAgICAgbGV0IGluZGV4ID0gcmVzO1xuICAgICAgc3dpdGNoKHJlcykge1xuICAgICAgICBjYXNlIDc6XG4gICAgICAgICAgaW5kZXggPSA2O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIDY6XG4gICAgICAgICAgaW5kZXggPSAwO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGluZGV4O1xuICAgIH1cbiAgICByZXN1bHQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBhcnIgPSBpdGVtLnRva2VuX2lkLnNwbGl0KCc6Jyk7XG4gICAgICBsZXQgdGFyZ2V0SW5kZXggPSB0eXBlUHJvY2Vzc0luZGV4KE51bWJlcihhcnJbMF0pKTtcbiAgICAgIFN0YXRlLmlucygpLmltYWdlTGlzdFt0YXJnZXRJbmRleF0ucGF5Q291bnQrKztcbiAgICAgIFN0YXRlLmlucygpLmltYWdlTGlzdFt0YXJnZXRJbmRleF0ucGF5TGlzdC5wdXNoKGl0ZW0pO1xuICAgIH0pO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFnZUxpc3QnLCBKU09OLnN0cmluZ2lmeShTdGF0ZS5pbnMoKS5pbWFnZUxpc3QpKTtcbiAgfVxuXG4gIHB1YmxpYyBpc0xvZ2luID0gZmFsc2U7XG4gIHB1YmxpYyBpc1BheSA9IGZhbHNlO1xuICBwdWJsaWMgbWlhbk5lYXJDb25maWcgPSB7XG4gICAgbmV0d29ya0lkOiAndGVzdG5ldCcsXG4gICAgY29udHJhY3ROYW1lOiAnZGV2LTE2MzI5NjUzMDc1NDAtNTU1MTE5OTM0NDQzMTcnLFxuICAgIC8vIGNvbnRyYWN0TmFtZTogJ2Rldi0xNjMyNzI0NDE4Nzc2LTY4MjE5ODU4MTMzMjAxJyxcbiAgICBub2RlVXJsOiAnaHR0cHM6Ly9ycGMudGVzdG5ldC5uZWFyLm9yZycsXG4gICAgLy8gbm9kZVVybDogJ2h0dHBzOi8vcHVibGljLXJwYy5ibG9ja3BpLmlvL2h0dHAvbmVhci10ZXN0bmV0JyxcbiAgICB3YWxsZXRVcmw6ICdodHRwczovL3dhbGxldC50ZXN0bmV0Lm5lYXIub3JnJyxcbiAgICBoZWxwZXJVcmw6ICdodHRwczovL2hlbHBlci50ZXN0bmV0Lm5lYXIub3JnJ1xuICAgIC8vIGV4cGxvcmVyVXJsOiBcImh0dHBzOi8vZXhwbG9yZXIudGVzdG5ldC5uZWFyLm9yZ1wiLFxuICB9O1xuICBwdWJsaWMgbWFpbk5lYXI6IGFueSA9IHtcbiAgICBuZWFyOiB7fSxcbiAgICB3YWxsZXRBY2NvdW50OiB7fSxcbiAgICBjb250cmFjdDoge30sXG4gICAgb3duZXJLZXk6ICcnLFxuICAgIHBvb2xCYWxhbmNlOiAwLFxuICAgIG1heFNjb3JlOiAwLFxuICAgIGJhbGFuY2U6IDBcbiAgfTtcbiAgcHVibGljIHN0b3JlTmVhckNvbmZpZyA9IHtcbiAgICAuLi50aGlzLm1pYW5OZWFyQ29uZmlnLFxuICAgIGNvbnRyYWN0TmFtZTogJ21hcmtldC4nICsgdGhpcy5taWFuTmVhckNvbmZpZy5jb250cmFjdE5hbWUsXG4gIH07XG4gIHB1YmxpYyBzdG9yZU5lYXI6IGFueSA9IHtcbiAgICBuZWFyOiB7fSxcbiAgICB3YWxsZXRBY2NvdW50OiB7fSxcbiAgICBjb250cmFjdDoge30sXG4gICAgb3duZXJLZXk6ICcnLFxuICAgIHBvb2xCYWxhbmNlOiAwLFxuICAgIG1heFNjb3JlOiAwLFxuICAgIGJhbGFuY2U6IDBcbiAgfTtcbiAgcHVibGljIHN0b3JlUGF5Qm94O1xuICBwdWJsaWMgc3RvcmVQYXlJbmRleDtcbiAgcHVibGljIHN0b3JlUGF5T2JqO1xuICBwdWJsaWMgaW5pdFNjZW5lO1xuICBwdWJsaWMgaW5pdCgpIHt9XG59XG4iXX0=