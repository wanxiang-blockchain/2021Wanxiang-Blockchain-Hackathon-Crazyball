"use strict";
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