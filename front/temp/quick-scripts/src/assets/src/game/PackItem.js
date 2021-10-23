"use strict";
cc._RF.push(module, '7d67ff44IpE/5UwxM3x1UNv', 'PackItem');
// src/game/PackItem.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var PackItem = /** @class */ (function (_super) {
    __extends(PackItem, _super);
    function PackItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listBox = null;
        _this.listBoxBg = null;
        _this.icon = null;
        _this.title = null;
        _this.boxObj = {};
        return _this;
    }
    PackItem.prototype.onLoad = function () {
        this.listBox.on('touchstart', this.onListBox, this, true);
        this.listBox.on('touchend', this.onListBoxOver, this, true);
    };
    PackItem.prototype.setImage = function (target, url) {
        cc.resources.load(url, cc.SpriteFrame, function (err, spriteFrame) {
            target.spriteFrame = spriteFrame;
        });
    };
    PackItem.prototype.initBox = function (obj) {
        this.boxObj = obj;
        this.setImage(this.icon, obj.url);
        this.title.string = 'x' + obj.payCount;
    };
    PackItem.prototype.onListBox = function () {
        this.setImage(this.listBoxBg, 'images/d2');
    };
    PackItem.prototype.onListBoxOver = function () {
        this.setImage(this.listBoxBg, 'images/d1');
    };
    __decorate([
        property(cc.Node)
    ], PackItem.prototype, "listBox", void 0);
    __decorate([
        property(cc.Sprite)
    ], PackItem.prototype, "listBoxBg", void 0);
    __decorate([
        property(cc.Sprite)
    ], PackItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], PackItem.prototype, "title", void 0);
    PackItem = __decorate([
        ccclass
    ], PackItem);
    return PackItem;
}(cc.Component));
exports.default = PackItem;

cc._RF.pop();