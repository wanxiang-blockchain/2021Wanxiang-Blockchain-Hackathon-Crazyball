
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/PackView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fc991HPfOdM0K/C4Sln24zj', 'PackView');
// src/game/PackView.ts

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
var State_1 = require("./model/State");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PackView = /** @class */ (function (_super) {
    __extends(PackView, _super);
    function PackView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.goBack = null;
        _this.listBox = null;
        _this.scrollView = null;
        _this.fucList = null;
        _this.fucBox = null;
        _this.emptyBox = null;
        _this.nav1 = null;
        _this.nav2 = null;
        _this.sellEmptyBox = null;
        _this.sellScrollView = null;
        _this.tips = null;
        _this.longTapBox = null;
        _this.giveModel = null;
        _this.sellModel = null;
        _this.mask = null;
        _this.sellListBox = null;
        _this.activeIndex = 1;
        _this.tapTime = 0;
        _this.moveIcon = null;
        _this.moveIndex = -1;
        _this.moveCancel = 0;
        _this.moveTargetIndex = -1;
        return _this;
    }
    PackView.prototype.onLoad = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.goBack.on('touchstart', this.onGoBack, this);
                        return [4 /*yield*/, State_1.default.ins().getList()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.judgeEmpty()];
                    case 2:
                        _a.sent();
                        this.nav1.on('touchstart', function () { return _this.onNav(1); }, this);
                        this.nav2.on('touchstart', function () { return _this.onNav(2); }, this);
                        this.tips.getChildByName('tipsClose').on('touchstart', function () {
                            _this.tips.active = false;
                            localStorage.setItem('packTips', 'false');
                        }, this);
                        return [2 /*return*/];
                }
            });
        });
    };
    PackView.prototype.judgeEmpty = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.scrollView.content.active = false;
                        this.emptyBox.active = false;
                        this.sellScrollView.content.active = false;
                        this.sellEmptyBox.active = false;
                        this.fucList.active = false;
                        this.tips.active = false;
                        if (!(this.activeIndex === 1)) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.renderScrollView()];
                    case 1:
                        _a.sent();
                        if (!(this.scrollView.content.children.length > 0)) return [3 /*break*/, 3];
                        this.scrollView.content.active = true;
                        return [4 /*yield*/, this.renderFucList()];
                    case 2:
                        _a.sent();
                        this.tips.active = localStorage.getItem('packTips') !== 'false';
                        this.fucList.active = true;
                        return [3 /*break*/, 4];
                    case 3:
                        this.emptyBox.active = true;
                        this.emptyBox.getChildByName('goStore').on('touchstart', function () {
                            cc.director.loadScene('store');
                        }, this);
                        _a.label = 4;
                    case 4: return [3 /*break*/, 7];
                    case 5: return [4 /*yield*/, this.renderSellScrollView()];
                    case 6:
                        _a.sent();
                        if (this.sellScrollView.content.children.length > 0) {
                            this.sellScrollView.content.active = true;
                        }
                        else {
                            this.sellEmptyBox.active = true;
                        }
                        _a.label = 7;
                    case 7: return [2 /*return*/];
                }
            });
        });
    };
    PackView.prototype.onNav = function (activeIndex) {
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
    PackView.prototype.renderScrollView = function () {
        var _this = this;
        var content = this.scrollView.content;
        content.removeAllChildren();
        State_1.default.ins().imageList.forEach(function (item, index) {
            if (item.payCount === 0)
                return;
            if (item.sort !== -1)
                return;
            var listBox = cc.instantiate(_this.listBox);
            content.addChild(listBox);
            listBox.getComponent('PackItem').initBox(item);
            listBox.on('touchstart', function (event) {
                _this.longTapBox.active = false;
                _this.scheduleOnce(function () {
                    _this.longTap(event, listBox, index);
                }, 1);
                if (item.type === 7)
                    return;
                _this.ontouchstart(event, listBox, index);
            }, _this, true);
            if (item.type === 7)
                return;
            listBox.on('touchmove', function (e) {
                _this.unscheduleAllCallbacks();
                _this.onTouchmove(e);
            }, _this, true);
            listBox.on('touchcancel', function () {
                _this.unscheduleAllCallbacks();
                _this.onTouchcancel(1);
            }, _this, true);
            var scene = cc.director.getScene();
            scene.getChildByName('Canvas').on('touchend', function () {
                _this.unscheduleAllCallbacks();
                _this.removeMoveBox();
            }, _this, true);
        });
    };
    PackView.prototype.longTap = function (event, target, index) {
        var _this = this;
        var eventX = event.target.x;
        var eventY = event.target.y;
        var eventWidth = event.target.width;
        var eventHeight = event.target.height;
        var longTapBoxBounding = this.longTapBox.getBoundingBox();
        var width = longTapBoxBounding.width;
        var height = longTapBoxBounding.height;
        var xProcess = eventX + width / 2 - eventWidth / 2;
        var yProcess = eventY + 1051 / 2 - height / 2 - eventHeight / 2;
        var tips = this.longTapBox.getChildByName('tips');
        tips.setPosition(-90, 96.104);
        if (xProcess > 300) {
            xProcess = xProcess - width + eventWidth;
            tips.setPosition(90, 96.104);
        }
        this.longTapBox.setPosition(xProcess, yProcess);
        this.longTapBox.active = true;
        this.longTapBox.getChildByName('give').on('touchstart', function () {
            _this.longTapBox.active = false;
            _this.showGiveModel(target, index);
        }, this);
        this.longTapBox.getChildByName('sell').once('touchstart', function () {
            _this.longTapBox.active = false;
            _this.showSellModel(target, index);
        }, this);
    };
    PackView.prototype.showGiveModel = function (target, index) {
        var _this = this;
        this.giveModel.getChildByName('icon').getComponent(cc.Sprite).spriteFrame = target.getChildByName('icon').getComponent(cc.Sprite).spriteFrame;
        this.giveModel.getChildByName('iconTitleBox').getChildByName('iconTitle').getComponent(cc.Label).string = State_1.default.ins().imageList[index].title;
        this.giveModel.active = true;
        this.mask.active = true;
        var input = this.giveModel.getChildByName('inputContext').getChildByName('inputBox').getComponent(cc.EditBox);
        var inputValue = '';
        var inputUpdate = function (text, editbox, customEventData) {
            inputValue = text.string;
            if (inputValue) {
                _this.giveModel.getChildByName('submit').getChildByName('title').opacity = 255;
            }
            else {
                _this.giveModel.getChildByName('submit').getChildByName('title').opacity = 88;
            }
        };
        input.node.on('text-changed', inputUpdate, this);
        this.giveModel.getChildByName('close').on('touchstart', function () {
            _this.giveModel.active = false;
            _this.mask.active = false;
        }, this);
        this.giveModel.getChildByName('submit').on('touchstart', function () {
            if (!inputValue)
                return;
            State_1.default.ins().mainNear.contract.nft_transfer({
                receiver_id: inputValue,
                token_id: State_1.default.ins().imageList[index].payList.splice(0, 1)[0].token_id
            }, 300000000000000, window.nearApi.utils.format.parseNearAmount('0.000000000000000000000001'));
        }, this);
    };
    PackView.prototype.showSellModel = function (target, index) {
        var _this = this;
        this.sellModel.getChildByName('icon').getComponent(cc.Sprite).spriteFrame = target.getChildByName('icon').getComponent(cc.Sprite).spriteFrame;
        this.sellModel.getChildByName('iconTitleBox').getChildByName('iconTitle').getComponent(cc.Label).string = State_1.default.ins().imageList[index].title;
        this.sellModel.active = true;
        this.mask.active = true;
        this.sellModel.getChildByName('close').on('touchstart', function () {
            _this.sellModel.active = false;
            _this.mask.active = false;
        }, this);
        this.sellModel.getChildByName('submit').on('touchstart', function () {
            var next = State_1.default.ins().imageList[index].payList.splice(0, 1)[0];
            State_1.default.ins().mainNear.contract.nft_approve({
                account_id: State_1.default.ins().storeNearConfig.contractName,
                token_id: next.token_id,
                msg: JSON.stringify({
                    sale_conditions: {
                        near: window.nearApi.utils.format.parseNearAmount('1'),
                        token_type: next.token_id.split(':')[0],
                        is_auction: 'false'
                    }
                })
            }, 300000000000000, window.nearApi.utils.format.parseNearAmount('0.00051'));
        }, this);
    };
    PackView.prototype.renderSellScrollView = function () {
        return __awaiter(this, void 0, void 0, function () {
            var content, from_index, limit, result, awaitResult, typeObj, typeArr;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        content = this.scrollView.content;
                        content.removeAllChildren();
                        from_index = 0;
                        limit = 80;
                        result = [];
                        awaitResult = function () { return __awaiter(_this, void 0, void 0, function () {
                            var res;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, State_1.default.ins().storeNear.contract.get_sales_by_owner_id({
                                            account_id: State_1.default.ins().storeNear.ownerKey,
                                            from_index: from_index.toString(),
                                            limit: limit
                                        })];
                                    case 1:
                                        res = _a.sent();
                                        result = result.concat(res);
                                        if (from_index !== 0 && res.length === 0) {
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
                    case 1:
                        _a.sent();
                        typeObj = {};
                        result.forEach(function (item, index) {
                            var type = item.token_id.split(':')[0];
                            if (typeObj[type]) {
                                typeObj[type] += 1;
                            }
                            else {
                                typeObj[type] = 1;
                            }
                        });
                        typeArr = Object.keys(typeObj);
                        State_1.default.ins()
                            .imageList.concat()
                            .forEach(function (item, index) {
                            if (!typeArr.includes(item.type.toString()))
                                return;
                            var listBox = cc.instantiate(_this.sellListBox);
                            content.addChild(listBox);
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    PackView.prototype.ontouchstart = function (event, target, index) {
        return __awaiter(this, void 0, void 0, function () {
            var scene;
            return __generator(this, function (_a) {
                this.moveIcon = cc.instantiate(target.getChildByName('icon'));
                scene = cc.director.getScene();
                scene.addChild(this.moveIcon);
                this.onTouchmove(event);
                this.moveIndex = index;
                return [2 /*return*/];
            });
        });
    };
    PackView.prototype.onTouchmove = function (event) {
        var _this = this;
        var pos = event.getLocation();
        var delta = event.getDelta();
        this.moveIcon.setPosition(pos.x + delta.x, pos.y + delta.y);
        this.moveTargetIndex = -1;
        var moveIconBox = this.moveIcon.getBoundingBox();
        this.fucList.children.forEach(function (fucBox, index) {
            if (cc.Intersection.rectRect(moveIconBox, fucBox.getBoundingBox())) {
                _this.moveTargetIndex = index;
            }
        });
    };
    PackView.prototype.onTouchcancel = function (step) {
        if (step === void 0) { step = 1; }
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                this.moveCancel += step;
                if (this.moveTargetIndex !== -1) {
                    this.moveCancel = 0;
                    this.removeMoveBox();
                    State_1.default.ins().imageList.forEach(function (item, index) {
                        if (item.sort === _this.moveTargetIndex) {
                            item.sort = -1;
                        }
                    });
                    State_1.default.ins().imageList[this.moveIndex].sort = this.moveTargetIndex;
                    localStorage.setItem('imageList', JSON.stringify(State_1.default.ins().imageList));
                    this.renderFucList();
                    this.renderScrollView();
                }
                else {
                    if (this.moveCancel === 2) {
                        State_1.default.ins().imageList[this.moveIndex].sort = this.moveTargetIndex;
                        localStorage.setItem('imageList', JSON.stringify(State_1.default.ins().imageList));
                        this.removeMoveBox();
                    }
                }
                return [2 /*return*/];
            });
        });
    };
    PackView.prototype.removeMoveBox = function () {
        var scene = cc.director.getScene();
        scene.removeChild(this.moveIcon);
        this.moveCancel = 0;
    };
    PackView.prototype.renderFucList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var fucListLength;
            var _this = this;
            return __generator(this, function (_a) {
                if (this.fucList) {
                    this.fucList.removeAllChildren();
                }
                fucListLength = 4;
                new Array(fucListLength).fill(1).map(function (item, index) {
                    var fuc = cc.instantiate(_this.fucBox);
                    var defaultContent = fuc.getChildByName('default');
                    var fucIndex = defaultContent.getChildByName('index');
                    var fucLabel = fucIndex.getComponent(cc.Label);
                    fucLabel.string = (index + 1).toString();
                    _this.fucList.addChild(fuc);
                });
                State_1.default.ins().imageList.forEach(function (item, index) {
                    if (item.sort >= 0 && item.payCount > 0) {
                        var targetBox = _this.fucList.children[item.sort];
                        var defaultContent = targetBox.getChildByName('default');
                        var set = targetBox.getChildByName('set');
                        var icon = set.getChildByName('icon');
                        var iconSprite_1 = icon.getComponent(cc.Sprite);
                        var count = set.getChildByName('countBox').getChildByName('count');
                        var countLabel = count.getComponent(cc.Label);
                        countLabel.string = 'x ' + State_1.default.ins().imageList[index].payCount;
                        defaultContent.active = false;
                        set.active = true;
                        cc.resources.load(item.url, cc.SpriteFrame, function (err, spriteFrame) {
                            iconSprite_1.spriteFrame = spriteFrame;
                        });
                        var listBox_1 = cc.instantiate(_this.listBox);
                        listBox_1.getComponent('PackItem').initBox(item);
                        targetBox.on('touchstart', function (event) {
                            _this.longTapBox.active = false;
                            _this.ontouchstart(event, listBox_1, index);
                        }, _this, true);
                        targetBox.on('touchmove', _this.onTouchmove, _this, true);
                        targetBox.on('touchcancel', function () {
                            _this.onTouchcancel(2);
                            if (_this.moveTargetIndex === -1) {
                                State_1.default.ins().imageList[index].sort = -1;
                                _this.renderFucList();
                                _this.renderScrollView();
                            }
                        }, _this, true);
                        targetBox.on('touchend', _this.removeMoveBox, _this, true);
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    PackView.prototype.onGoBack = function () {
        cc.director.loadScene('main');
    };
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "goBack", void 0);
    __decorate([
        property(cc.Prefab)
    ], PackView.prototype, "listBox", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PackView.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "fucList", void 0);
    __decorate([
        property(cc.Prefab)
    ], PackView.prototype, "fucBox", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "emptyBox", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "nav1", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "nav2", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "sellEmptyBox", void 0);
    __decorate([
        property(cc.ScrollView)
    ], PackView.prototype, "sellScrollView", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "tips", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "longTapBox", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "giveModel", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "sellModel", void 0);
    __decorate([
        property(cc.Node)
    ], PackView.prototype, "mask", void 0);
    __decorate([
        property(cc.Prefab)
    ], PackView.prototype, "sellListBox", void 0);
    PackView = __decorate([
        ccclass
    ], PackView);
    return PackView;
}(cc.Component));
exports.default = PackView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9QYWNrVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUErYUM7UUE3YUMsWUFBTSxHQUFZLElBQUksQ0FBQztRQUV2QixhQUFPLEdBQWMsSUFBSSxDQUFDO1FBRTFCLGdCQUFVLEdBQWtCLElBQUksQ0FBQztRQUVqQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFFekIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixVQUFJLEdBQVksSUFBSSxDQUFDO1FBRXJCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFFN0Isb0JBQWMsR0FBa0IsSUFBSSxDQUFDO1FBRXJDLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsZ0JBQVUsR0FBWSxJQUFJLENBQUM7UUFFM0IsZUFBUyxHQUFZLElBQUksQ0FBQztRQUUxQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBRTFCLFVBQUksR0FBWSxJQUFJLENBQUM7UUFFckIsaUJBQVcsR0FBYyxJQUFJLENBQUM7UUFFOUIsaUJBQVcsR0FBRyxDQUFDLENBQUM7UUFDaEIsYUFBTyxHQUFHLENBQUMsQ0FBQztRQXNFWixjQUFRLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLGVBQVMsR0FBRyxDQUFDLENBQUMsQ0FBQztRQUNmLGdCQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ2YscUJBQWUsR0FBRyxDQUFDLENBQUMsQ0FBQzs7SUFtVXZCLENBQUM7SUExWU8seUJBQU0sR0FBWjs7Ozs7O3dCQUNFLElB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QUFDLFVBQVUsQ0FBQztnREFDUztJQUVqQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzZDQUNNO0lBRXhCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NENBQ0s7SUFFekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs4Q0FDTztJQUV6QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzBDQUNHO0lBRXJCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztrREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsVUFBVSxDQUFDO29EQUNhO0lBRXJDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MENBQ0c7SUFFckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztnREFDUztJQUUzQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7K0NBQ1E7SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzswQ0FDRztJQUVyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2lEQUNVO0lBaENYLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0ErYTVCO0lBQUQsZUFBQztDQS9hRCxBQSthQyxDQS9hcUMsRUFBRSxDQUFDLFNBQVMsR0ErYWpEO2tCQS9hb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTdGF0ZSBmcm9tICcuL21vZGVsL1N0YXRlJztcblxuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWNrVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBnb0JhY2s6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBsaXN0Qm94OiBjYy5QcmVmYWIgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU2Nyb2xsVmlldylcbiAgc2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBmdWNMaXN0OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgZnVjQm94OiBjYy5QcmVmYWIgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZW1wdHlCb3g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgbmF2MTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBuYXYyOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHNlbGxFbXB0eUJveDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TY3JvbGxWaWV3KVxuICBzZWxsU2Nyb2xsVmlldzogY2MuU2Nyb2xsVmlldyA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICB0aXBzOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGxvbmdUYXBCb3g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ2l2ZU1vZGVsOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHNlbGxNb2RlbDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBtYXNrOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgc2VsbExpc3RCb3g6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgYWN0aXZlSW5kZXggPSAxO1xuICB0YXBUaW1lID0gMDtcblxuICBhc3luYyBvbkxvYWQoKSB7XG4gICAgdGhpcy5nb0JhY2sub24oJ3RvdWNoc3RhcnQnLCB0aGlzLm9uR29CYWNrLCB0aGlzKTtcblxuICAgIGF3YWl0IFN0YXRlLmlucygpLmdldExpc3QoKTtcblxuICAgIGF3YWl0IHRoaXMuanVkZ2VFbXB0eSgpO1xuICAgIHRoaXMubmF2MS5vbigndG91Y2hzdGFydCcsICgpID0+IHRoaXMub25OYXYoMSksIHRoaXMpO1xuICAgIHRoaXMubmF2Mi5vbigndG91Y2hzdGFydCcsICgpID0+IHRoaXMub25OYXYoMiksIHRoaXMpO1xuICAgIHRoaXMudGlwcy5nZXRDaGlsZEJ5TmFtZSgndGlwc0Nsb3NlJykub24oXG4gICAgICAndG91Y2hzdGFydCcsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMudGlwcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3BhY2tUaXBzJywgJ2ZhbHNlJyk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGp1ZGdlRW1wdHkoKSB7XG4gICAgdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5lbXB0eUJveC5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLnNlbGxTY3JvbGxWaWV3LmNvbnRlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5zZWxsRW1wdHlCb3guYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5mdWNMaXN0LmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMudGlwcy5hY3RpdmUgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLmFjdGl2ZUluZGV4ID09PSAxKSB7XG4gICAgICBhd2FpdCB0aGlzLnJlbmRlclNjcm9sbFZpZXcoKTtcbiAgICAgIGlmICh0aGlzLnNjcm9sbFZpZXcuY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2Nyb2xsVmlldy5jb250ZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGF3YWl0IHRoaXMucmVuZGVyRnVjTGlzdCgpO1xuICAgICAgICB0aGlzLnRpcHMuYWN0aXZlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BhY2tUaXBzJykgIT09ICdmYWxzZSc7XG4gICAgICAgIHRoaXMuZnVjTGlzdC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lbXB0eUJveC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLmVtcHR5Qm94LmdldENoaWxkQnlOYW1lKCdnb1N0b3JlJykub24oXG4gICAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnc3RvcmUnKTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoaXNcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgYXdhaXQgdGhpcy5yZW5kZXJTZWxsU2Nyb2xsVmlldygpO1xuICAgICAgaWYgKHRoaXMuc2VsbFNjcm9sbFZpZXcuY29udGVudC5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2VsbFNjcm9sbFZpZXcuY29udGVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zZWxsRW1wdHlCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBwcml2YXRlIG9uTmF2KGFjdGl2ZUluZGV4KSB7XG4gICAgdGhpcy5hY3RpdmVJbmRleCA9IGFjdGl2ZUluZGV4O1xuICAgIGxldCBsYWJlbCA9IHRoaXNbYG5hdiR7YWN0aXZlSW5kZXh9YF0uZ2V0Q2hpbGRCeU5hbWUoJ25hdkxhYmVsJyk7XG4gICAgbGFiZWwub3BhY2l0eSA9IDI1NSAqIDAuODtcbiAgICBsZXQgbmF2QmcgPSB0aGlzW2BuYXYke2FjdGl2ZUluZGV4fWBdLmdldENoaWxkQnlOYW1lKCduYXZBY3RpdmUnKTtcbiAgICBuYXZCZy5hY3RpdmUgPSB0cnVlO1xuXG4gICAgbGV0IG5leHRBY3RpdmUgPSAzIC0gYWN0aXZlSW5kZXg7XG4gICAgbGV0IG5leHRMYWJlbCA9IHRoaXNbYG5hdiR7bmV4dEFjdGl2ZX1gXS5nZXRDaGlsZEJ5TmFtZSgnbmF2TGFiZWwnKTtcbiAgICBuZXh0TGFiZWwub3BhY2l0eSA9IDI1NSAqIDAuNjtcbiAgICBsZXQgbmV4dE5hdkJnID0gdGhpc1tgbmF2JHtuZXh0QWN0aXZlfWBdLmdldENoaWxkQnlOYW1lKCduYXZBY3RpdmUnKTtcbiAgICBuZXh0TmF2QmcuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5qdWRnZUVtcHR5KCk7XG4gIH1cblxuICBtb3ZlSWNvbiA9IG51bGw7XG4gIG1vdmVJbmRleCA9IC0xO1xuICBtb3ZlQ2FuY2VsID0gMDtcbiAgbW92ZVRhcmdldEluZGV4ID0gLTE7XG5cbiAgcHJpdmF0ZSByZW5kZXJTY3JvbGxWaWV3KCkge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIFN0YXRlLmlucygpLmltYWdlTGlzdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0ucGF5Q291bnQgPT09IDApIHJldHVybjtcbiAgICAgIGlmIChpdGVtLnNvcnQgIT09IC0xKSByZXR1cm47XG4gICAgICBsZXQgbGlzdEJveCA9IGNjLmluc3RhbnRpYXRlKHRoaXMubGlzdEJveCk7XG4gICAgICBjb250ZW50LmFkZENoaWxkKGxpc3RCb3gpO1xuICAgICAgbGlzdEJveC5nZXRDb21wb25lbnQoJ1BhY2tJdGVtJykuaW5pdEJveChpdGVtKTtcbiAgICAgIGxpc3RCb3gub24oXG4gICAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICAgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgdGhpcy5sb25nVGFwQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9uZ1RhcChldmVudCwgbGlzdEJveCwgaW5kZXgpO1xuICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgIGlmIChpdGVtLnR5cGUgPT09IDcpIHJldHVybjtcbiAgICAgICAgICB0aGlzLm9udG91Y2hzdGFydChldmVudCwgbGlzdEJveCwgaW5kZXgpO1xuICAgICAgICB9LFxuICAgICAgICB0aGlzLFxuICAgICAgICB0cnVlXG4gICAgICApO1xuICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gNykgcmV0dXJuO1xuICAgICAgbGlzdEJveC5vbihcbiAgICAgICAgJ3RvdWNobW92ZScsXG4gICAgICAgIChlKSA9PiB7XG4gICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgdGhpcy5vblRvdWNobW92ZShlKTtcbiAgICAgICAgfSxcbiAgICAgICAgdGhpcyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICAgIGxpc3RCb3gub24oXG4gICAgICAgICd0b3VjaGNhbmNlbCcsXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLnVuc2NoZWR1bGVBbGxDYWxsYmFja3MoKTtcbiAgICAgICAgICB0aGlzLm9uVG91Y2hjYW5jZWwoMSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgICBsZXQgc2NlbmUgPSBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpO1xuICAgICAgc2NlbmUuZ2V0Q2hpbGRCeU5hbWUoJ0NhbnZhcycpLm9uKFxuICAgICAgICAndG91Y2hlbmQnLFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgdGhpcy51bnNjaGVkdWxlQWxsQ2FsbGJhY2tzKCk7XG4gICAgICAgICAgdGhpcy5yZW1vdmVNb3ZlQm94KCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRoaXMsXG4gICAgICAgIHRydWVcbiAgICAgICk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGxvbmdUYXAoZXZlbnQsIHRhcmdldCwgaW5kZXgpIHtcbiAgICBsZXQgZXZlbnRYID0gZXZlbnQudGFyZ2V0Lng7XG4gICAgbGV0IGV2ZW50WSA9IGV2ZW50LnRhcmdldC55O1xuICAgIGxldCBldmVudFdpZHRoID0gZXZlbnQudGFyZ2V0LndpZHRoO1xuICAgIGxldCBldmVudEhlaWdodCA9IGV2ZW50LnRhcmdldC5oZWlnaHQ7XG4gICAgbGV0IGxvbmdUYXBCb3hCb3VuZGluZyA9IHRoaXMubG9uZ1RhcEJveC5nZXRCb3VuZGluZ0JveCgpO1xuICAgIGxldCB3aWR0aCA9IGxvbmdUYXBCb3hCb3VuZGluZy53aWR0aDtcbiAgICBsZXQgaGVpZ2h0ID0gbG9uZ1RhcEJveEJvdW5kaW5nLmhlaWdodDtcbiAgICBsZXQgeFByb2Nlc3MgPSBldmVudFggKyB3aWR0aCAvIDIgLSBldmVudFdpZHRoIC8gMjtcbiAgICBsZXQgeVByb2Nlc3MgPSBldmVudFkgKyAxMDUxIC8gMiAtIGhlaWdodCAvIDIgLSBldmVudEhlaWdodCAvIDI7XG4gICAgbGV0IHRpcHMgPSB0aGlzLmxvbmdUYXBCb3guZ2V0Q2hpbGRCeU5hbWUoJ3RpcHMnKTtcbiAgICB0aXBzLnNldFBvc2l0aW9uKC05MCwgOTYuMTA0KTtcbiAgICBpZiAoeFByb2Nlc3MgPiAzMDApIHtcbiAgICAgIHhQcm9jZXNzID0geFByb2Nlc3MgLSB3aWR0aCArIGV2ZW50V2lkdGg7XG4gICAgICB0aXBzLnNldFBvc2l0aW9uKDkwLCA5Ni4xMDQpO1xuICAgIH1cbiAgICB0aGlzLmxvbmdUYXBCb3guc2V0UG9zaXRpb24oeFByb2Nlc3MsIHlQcm9jZXNzKTtcbiAgICB0aGlzLmxvbmdUYXBCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmxvbmdUYXBCb3guZ2V0Q2hpbGRCeU5hbWUoJ2dpdmUnKS5vbihcbiAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5sb25nVGFwQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dHaXZlTW9kZWwodGFyZ2V0LCBpbmRleCk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5sb25nVGFwQm94LmdldENoaWxkQnlOYW1lKCdzZWxsJykub25jZShcbiAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5sb25nVGFwQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNob3dTZWxsTW9kZWwodGFyZ2V0LCBpbmRleCk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNob3dHaXZlTW9kZWwodGFyZ2V0LCBpbmRleCkge1xuICAgIHRoaXMuZ2l2ZU1vZGVsLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICB0aGlzLmdpdmVNb2RlbC5nZXRDaGlsZEJ5TmFtZSgnaWNvblRpdGxlQm94JykuZ2V0Q2hpbGRCeU5hbWUoJ2ljb25UaXRsZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W2luZGV4XS50aXRsZTtcbiAgICB0aGlzLmdpdmVNb2RlbC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xuICAgIGxldCBpbnB1dCA9IHRoaXMuZ2l2ZU1vZGVsLmdldENoaWxkQnlOYW1lKCdpbnB1dENvbnRleHQnKS5nZXRDaGlsZEJ5TmFtZSgnaW5wdXRCb3gnKS5nZXRDb21wb25lbnQoY2MuRWRpdEJveCk7XG4gICAgbGV0IGlucHV0VmFsdWUgPSAnJztcbiAgICBsZXQgaW5wdXRVcGRhdGUgPSAodGV4dCwgZWRpdGJveCwgY3VzdG9tRXZlbnREYXRhKSA9PiB7XG4gICAgICBpbnB1dFZhbHVlID0gdGV4dC5zdHJpbmc7XG4gICAgICBpZiAoaW5wdXRWYWx1ZSkge1xuICAgICAgICB0aGlzLmdpdmVNb2RlbC5nZXRDaGlsZEJ5TmFtZSgnc3VibWl0JykuZ2V0Q2hpbGRCeU5hbWUoJ3RpdGxlJykub3BhY2l0eSA9IDI1NTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZ2l2ZU1vZGVsLmdldENoaWxkQnlOYW1lKCdzdWJtaXQnKS5nZXRDaGlsZEJ5TmFtZSgndGl0bGUnKS5vcGFjaXR5ID0gODg7XG4gICAgICB9XG4gICAgfTtcbiAgICBpbnB1dC5ub2RlLm9uKCd0ZXh0LWNoYW5nZWQnLCBpbnB1dFVwZGF0ZSwgdGhpcyk7XG4gICAgdGhpcy5naXZlTW9kZWwuZ2V0Q2hpbGRCeU5hbWUoJ2Nsb3NlJykub24oXG4gICAgICAndG91Y2hzdGFydCcsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMuZ2l2ZU1vZGVsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLm1hc2suYWN0aXZlID0gZmFsc2U7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gICAgdGhpcy5naXZlTW9kZWwuZ2V0Q2hpbGRCeU5hbWUoJ3N1Ym1pdCcpLm9uKFxuICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBpZiAoIWlucHV0VmFsdWUpIHJldHVybjtcbiAgICAgICAgU3RhdGUuaW5zKCkubWFpbk5lYXIuY29udHJhY3QubmZ0X3RyYW5zZmVyKFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlY2VpdmVyX2lkOiBpbnB1dFZhbHVlLFxuICAgICAgICAgICAgdG9rZW5faWQ6IFN0YXRlLmlucygpLmltYWdlTGlzdFtpbmRleF0ucGF5TGlzdC5zcGxpY2UoMCwgMSlbMF0udG9rZW5faWRcbiAgICAgICAgICB9LFxuICAgICAgICAgIDMwMDAwMDAwMDAwMDAwMCxcbiAgICAgICAgICB3aW5kb3cubmVhckFwaS51dGlscy5mb3JtYXQucGFyc2VOZWFyQW1vdW50KCcwLjAwMDAwMDAwMDAwMDAwMDAwMDAwMDAwMScpXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIHNob3dTZWxsTW9kZWwodGFyZ2V0LCBpbmRleCkge1xuICAgIHRoaXMuc2VsbE1vZGVsLmdldENoaWxkQnlOYW1lKCdpY29uJykuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZTtcbiAgICB0aGlzLnNlbGxNb2RlbC5nZXRDaGlsZEJ5TmFtZSgnaWNvblRpdGxlQm94JykuZ2V0Q2hpbGRCeU5hbWUoJ2ljb25UaXRsZScpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W2luZGV4XS50aXRsZTtcbiAgICB0aGlzLnNlbGxNb2RlbC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMubWFzay5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuc2VsbE1vZGVsLmdldENoaWxkQnlOYW1lKCdjbG9zZScpLm9uKFxuICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnNlbGxNb2RlbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5tYXNrLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfSxcbiAgICAgIHRoaXNcbiAgICApO1xuICAgIHRoaXMuc2VsbE1vZGVsLmdldENoaWxkQnlOYW1lKCdzdWJtaXQnKS5vbihcbiAgICAgICd0b3VjaHN0YXJ0JyxcbiAgICAgICgpID0+IHtcbiAgICAgICAgbGV0IG5leHQgPSBTdGF0ZS5pbnMoKS5pbWFnZUxpc3RbaW5kZXhdLnBheUxpc3Quc3BsaWNlKDAsIDEpWzBdO1xuICAgICAgICBTdGF0ZS5pbnMoKS5tYWluTmVhci5jb250cmFjdC5uZnRfYXBwcm92ZShcbiAgICAgICAgICB7XG4gICAgICAgICAgICBhY2NvdW50X2lkOiBTdGF0ZS5pbnMoKS5zdG9yZU5lYXJDb25maWcuY29udHJhY3ROYW1lLFxuICAgICAgICAgICAgdG9rZW5faWQ6IG5leHQudG9rZW5faWQsXG4gICAgICAgICAgICBtc2c6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgc2FsZV9jb25kaXRpb25zOiB7XG4gICAgICAgICAgICAgICAgbmVhcjogd2luZG93Lm5lYXJBcGkudXRpbHMuZm9ybWF0LnBhcnNlTmVhckFtb3VudCgnMScpLFxuICAgICAgICAgICAgICAgIHRva2VuX3R5cGU6IG5leHQudG9rZW5faWQuc3BsaXQoJzonKVswXSxcbiAgICAgICAgICAgICAgICBpc19hdWN0aW9uOiAnZmFsc2UnXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSxcbiAgICAgICAgICAzMDAwMDAwMDAwMDAwMDAsXG4gICAgICAgICAgd2luZG93Lm5lYXJBcGkudXRpbHMuZm9ybWF0LnBhcnNlTmVhckFtb3VudCgnMC4wMDA1MScpXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgdGhpc1xuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHJlbmRlclNlbGxTY3JvbGxWaWV3KCkge1xuICAgIGxldCBjb250ZW50ID0gdGhpcy5zY3JvbGxWaWV3LmNvbnRlbnQ7XG4gICAgY29udGVudC5yZW1vdmVBbGxDaGlsZHJlbigpO1xuICAgIGxldCBmcm9tX2luZGV4ID0gMDtcbiAgICBsZXQgbGltaXQgPSA4MDtcbiAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgbGV0IGF3YWl0UmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xuICAgICAgbGV0IHJlcyA9IGF3YWl0IFN0YXRlLmlucygpLnN0b3JlTmVhci5jb250cmFjdC5nZXRfc2FsZXNfYnlfb3duZXJfaWQoe1xuICAgICAgICBhY2NvdW50X2lkOiBTdGF0ZS5pbnMoKS5zdG9yZU5lYXIub3duZXJLZXksXG4gICAgICAgIGZyb21faW5kZXg6IGZyb21faW5kZXgudG9TdHJpbmcoKSxcbiAgICAgICAgbGltaXQ6IGxpbWl0XG4gICAgICB9KTtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5jb25jYXQocmVzKTtcbiAgICAgIGlmIChmcm9tX2luZGV4ICE9PSAwICYmIHJlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb21faW5kZXggKz0gbGltaXQ7XG4gICAgICAgIHJldHVybiBhd2FpdFJlc3VsdCgpO1xuICAgICAgfVxuICAgIH07XG4gICAgYXdhaXQgYXdhaXRSZXN1bHQoKTtcbiAgICBsZXQgdHlwZU9iaiA9IHt9O1xuICAgIHJlc3VsdC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgbGV0IHR5cGUgPSBpdGVtLnRva2VuX2lkLnNwbGl0KCc6JylbMF07XG4gICAgICBpZiAodHlwZU9ialt0eXBlXSkge1xuICAgICAgICB0eXBlT2JqW3R5cGVdICs9IDE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0eXBlT2JqW3R5cGVdID0gMTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBsZXQgdHlwZUFyciA9IE9iamVjdC5rZXlzKHR5cGVPYmopO1xuICAgIFN0YXRlLmlucygpXG4gICAgICAuaW1hZ2VMaXN0LmNvbmNhdCgpXG4gICAgICAuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKCF0eXBlQXJyLmluY2x1ZGVzKGl0ZW0udHlwZS50b1N0cmluZygpKSkgcmV0dXJuO1xuICAgICAgICBsZXQgbGlzdEJveCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc2VsbExpc3RCb3gpO1xuICAgICAgICBjb250ZW50LmFkZENoaWxkKGxpc3RCb3gpO1xuICAgICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9udG91Y2hzdGFydChldmVudCwgdGFyZ2V0LCBpbmRleCkge1xuICAgIHRoaXMubW92ZUljb24gPSBjYy5pbnN0YW50aWF0ZSh0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKSk7XG4gICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICBzY2VuZS5hZGRDaGlsZCh0aGlzLm1vdmVJY29uKTtcbiAgICB0aGlzLm9uVG91Y2htb3ZlKGV2ZW50KTtcbiAgICB0aGlzLm1vdmVJbmRleCA9IGluZGV4O1xuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNobW92ZShldmVudCkge1xuICAgIGxldCBwb3MgPSBldmVudC5nZXRMb2NhdGlvbigpO1xuICAgIGxldCBkZWx0YSA9IGV2ZW50LmdldERlbHRhKCk7XG4gICAgdGhpcy5tb3ZlSWNvbi5zZXRQb3NpdGlvbihwb3MueCArIGRlbHRhLngsIHBvcy55ICsgZGVsdGEueSk7XG4gICAgdGhpcy5tb3ZlVGFyZ2V0SW5kZXggPSAtMTtcbiAgICBsZXQgbW92ZUljb25Cb3ggPSB0aGlzLm1vdmVJY29uLmdldEJvdW5kaW5nQm94KCk7XG4gICAgdGhpcy5mdWNMaXN0LmNoaWxkcmVuLmZvckVhY2goKGZ1Y0JveCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjYy5JbnRlcnNlY3Rpb24ucmVjdFJlY3QobW92ZUljb25Cb3gsIGZ1Y0JveC5nZXRCb3VuZGluZ0JveCgpKSkge1xuICAgICAgICB0aGlzLm1vdmVUYXJnZXRJbmRleCA9IGluZGV4O1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBvblRvdWNoY2FuY2VsKHN0ZXAgPSAxKSB7XG4gICAgdGhpcy5tb3ZlQ2FuY2VsICs9IHN0ZXA7XG5cbiAgICBpZiAodGhpcy5tb3ZlVGFyZ2V0SW5kZXggIT09IC0xKSB7XG4gICAgICB0aGlzLm1vdmVDYW5jZWwgPSAwO1xuICAgICAgdGhpcy5yZW1vdmVNb3ZlQm94KCk7XG4gICAgICBTdGF0ZS5pbnMoKS5pbWFnZUxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGl0ZW0uc29ydCA9PT0gdGhpcy5tb3ZlVGFyZ2V0SW5kZXgpIHtcbiAgICAgICAgICBpdGVtLnNvcnQgPSAtMTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBTdGF0ZS5pbnMoKS5pbWFnZUxpc3RbdGhpcy5tb3ZlSW5kZXhdLnNvcnQgPSB0aGlzLm1vdmVUYXJnZXRJbmRleDtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFnZUxpc3QnLCBKU09OLnN0cmluZ2lmeShTdGF0ZS5pbnMoKS5pbWFnZUxpc3QpKTtcbiAgICAgIHRoaXMucmVuZGVyRnVjTGlzdCgpO1xuICAgICAgdGhpcy5yZW5kZXJTY3JvbGxWaWV3KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLm1vdmVDYW5jZWwgPT09IDIpIHtcbiAgICAgICAgU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W3RoaXMubW92ZUluZGV4XS5zb3J0ID0gdGhpcy5tb3ZlVGFyZ2V0SW5kZXg7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdpbWFnZUxpc3QnLCBKU09OLnN0cmluZ2lmeShTdGF0ZS5pbnMoKS5pbWFnZUxpc3QpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVNb3ZlQm94KCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSByZW1vdmVNb3ZlQm94KCkge1xuICAgIGxldCBzY2VuZSA9IGNjLmRpcmVjdG9yLmdldFNjZW5lKCk7XG4gICAgc2NlbmUucmVtb3ZlQ2hpbGQodGhpcy5tb3ZlSWNvbik7XG4gICAgdGhpcy5tb3ZlQ2FuY2VsID0gMDtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgcmVuZGVyRnVjTGlzdCgpIHtcbiAgICBpZiAodGhpcy5mdWNMaXN0KSB7XG4gICAgICB0aGlzLmZ1Y0xpc3QucmVtb3ZlQWxsQ2hpbGRyZW4oKTtcbiAgICB9XG4gICAgbGV0IGZ1Y0xpc3RMZW5ndGggPSA0O1xuICAgIG5ldyBBcnJheShmdWNMaXN0TGVuZ3RoKS5maWxsKDEpLm1hcCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGxldCBmdWMgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ1Y0JveCk7XG4gICAgICBsZXQgZGVmYXVsdENvbnRlbnQgPSBmdWMuZ2V0Q2hpbGRCeU5hbWUoJ2RlZmF1bHQnKTtcbiAgICAgIGxldCBmdWNJbmRleCA9IGRlZmF1bHRDb250ZW50LmdldENoaWxkQnlOYW1lKCdpbmRleCcpO1xuICAgICAgbGV0IGZ1Y0xhYmVsID0gZnVjSW5kZXguZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgIGZ1Y0xhYmVsLnN0cmluZyA9IChpbmRleCArIDEpLnRvU3RyaW5nKCk7XG4gICAgICB0aGlzLmZ1Y0xpc3QuYWRkQ2hpbGQoZnVjKTtcbiAgICB9KTtcbiAgICBTdGF0ZS5pbnMoKS5pbWFnZUxpc3QuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChpdGVtLnNvcnQgPj0gMCAmJiBpdGVtLnBheUNvdW50ID4gMCkge1xuICAgICAgICBsZXQgdGFyZ2V0Qm94ID0gdGhpcy5mdWNMaXN0LmNoaWxkcmVuW2l0ZW0uc29ydF07XG4gICAgICAgIGxldCBkZWZhdWx0Q29udGVudCA9IHRhcmdldEJveC5nZXRDaGlsZEJ5TmFtZSgnZGVmYXVsdCcpO1xuICAgICAgICBsZXQgc2V0ID0gdGFyZ2V0Qm94LmdldENoaWxkQnlOYW1lKCdzZXQnKTtcbiAgICAgICAgbGV0IGljb24gPSBzZXQuZ2V0Q2hpbGRCeU5hbWUoJ2ljb24nKTtcbiAgICAgICAgbGV0IGljb25TcHJpdGUgPSBpY29uLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBsZXQgY291bnQgPSBzZXQuZ2V0Q2hpbGRCeU5hbWUoJ2NvdW50Qm94JykuZ2V0Q2hpbGRCeU5hbWUoJ2NvdW50Jyk7XG4gICAgICAgIGxldCBjb3VudExhYmVsID0gY291bnQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgY291bnRMYWJlbC5zdHJpbmcgPSAneCAnICsgU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W2luZGV4XS5wYXlDb3VudDtcbiAgICAgICAgZGVmYXVsdENvbnRlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHNldC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy5yZXNvdXJjZXMubG9hZChpdGVtLnVybCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgICAgIGljb25TcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IGxpc3RCb3ggPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmxpc3RCb3gpO1xuICAgICAgICBsaXN0Qm94LmdldENvbXBvbmVudCgnUGFja0l0ZW0nKS5pbml0Qm94KGl0ZW0pO1xuICAgICAgICB0YXJnZXRCb3gub24oXG4gICAgICAgICAgJ3RvdWNoc3RhcnQnLFxuICAgICAgICAgIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb25nVGFwQm94LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5vbnRvdWNoc3RhcnQoZXZlbnQsIGxpc3RCb3gsIGluZGV4KTtcbiAgICAgICAgICB9LFxuICAgICAgICAgIHRoaXMsXG4gICAgICAgICAgdHJ1ZVxuICAgICAgICApO1xuICAgICAgICB0YXJnZXRCb3gub24oJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaG1vdmUsIHRoaXMsIHRydWUpO1xuICAgICAgICB0YXJnZXRCb3gub24oXG4gICAgICAgICAgJ3RvdWNoY2FuY2VsJyxcbiAgICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uVG91Y2hjYW5jZWwoMik7XG4gICAgICAgICAgICBpZiAodGhpcy5tb3ZlVGFyZ2V0SW5kZXggPT09IC0xKSB7XG4gICAgICAgICAgICAgIFN0YXRlLmlucygpLmltYWdlTGlzdFtpbmRleF0uc29ydCA9IC0xO1xuICAgICAgICAgICAgICB0aGlzLnJlbmRlckZ1Y0xpc3QoKTtcbiAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTY3JvbGxWaWV3KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB0aGlzLFxuICAgICAgICAgIHRydWVcbiAgICAgICAgKTtcbiAgICAgICAgdGFyZ2V0Qm94Lm9uKCd0b3VjaGVuZCcsIHRoaXMucmVtb3ZlTW92ZUJveCwgdGhpcywgdHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIG9uR29CYWNrKCkge1xuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnbWFpbicpO1xuICB9XG59XG4iXX0=