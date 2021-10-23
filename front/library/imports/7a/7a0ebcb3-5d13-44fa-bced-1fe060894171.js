"use strict";
cc._RF.push(module, '7a0ebyzXRNE+rztH+BgiUFx', 'StoreItem');
// src/game/StoreItem.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var Common_1 = require("./common/Common");
var State_1 = require("./model/State");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var StoreItem = /** @class */ (function (_super) {
    __extends(StoreItem, _super);
    function StoreItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listBox = null;
        _this.listBoxBg = null;
        _this.icon = null;
        _this.title = null;
        _this.submitButton = null;
        _this.submitButtonBg = null;
        _this.submitTitle = null;
        _this.storePay = null;
        _this.boxObj = {};
        return _this;
    }
    StoreItem.prototype.onLoad = function () {
        this.submitButton.on('touchstart', this.onSubmitButton, this);
    };
    StoreItem.prototype.setImage = function (target, url) {
        cc.resources.load(url, cc.SpriteFrame, function (err, spriteFrame) {
            target.spriteFrame = spriteFrame;
        });
    };
    StoreItem.prototype.initBox = function (obj) {
        this.boxObj = obj;
        this.setImage(this.icon, obj.url);
        this.title.string = obj.title;
        this.submitTitle.string = Common_1.formatPrice(obj.price, 2, true) + ' Near';
    };
    StoreItem.prototype.onListBox = function () {
        this.setImage(this.listBoxBg, 'images/b2');
        this.setImage(this.submitButtonBg, 'images/c2');
        this.submitTitle.node.color = cc.Color.WHITE;
    };
    StoreItem.prototype.onListBoxOver = function () {
        this.setImage(this.listBoxBg, 'images/b1');
        this.setImage(this.submitButtonBg, 'images/c1');
        this.submitTitle.node.color = cc.color(255, 217, 79);
    };
    StoreItem.prototype.onSubmitButton = function () {
        State_1.default.ins().storePayBox = cc.instantiate(this.storePay);
        var scene = cc.director.getScene();
        scene.getChildByName('Canvas').addChild(State_1.default.ins().storePayBox);
        State_1.default.ins().storePayBox.getComponent('StorePay').initBox(this.boxObj);
    };
    __decorate([
        property(cc.Node)
    ], StoreItem.prototype, "listBox", void 0);
    __decorate([
        property(cc.Sprite)
    ], StoreItem.prototype, "listBoxBg", void 0);
    __decorate([
        property(cc.Sprite)
    ], StoreItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], StoreItem.prototype, "title", void 0);
    __decorate([
        property(cc.Node)
    ], StoreItem.prototype, "submitButton", void 0);
    __decorate([
        property(cc.Sprite)
    ], StoreItem.prototype, "submitButtonBg", void 0);
    __decorate([
        property(cc.Label)
    ], StoreItem.prototype, "submitTitle", void 0);
    __decorate([
        property(cc.Prefab)
    ], StoreItem.prototype, "storePay", void 0);
    StoreItem = __decorate([
        ccclass
    ], StoreItem);
    return StoreItem;
}(cc.Component));
exports.default = StoreItem;

cc._RF.pop();