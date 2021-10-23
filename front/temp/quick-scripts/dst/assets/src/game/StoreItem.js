
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/StoreItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9TdG9yZUl0ZW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsMENBQThDO0FBQzlDLHVDQUFrQztBQUU1QixJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXdEQztRQXREQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBRTdCLG9CQUFjLEdBQWMsSUFBSSxDQUFDO1FBRWpDLGlCQUFXLEdBQWEsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBYyxJQUFJLENBQUM7UUFFM0IsWUFBTSxHQUFHLEVBQUUsQ0FBQzs7SUFxQ2QsQ0FBQztJQW5DQywwQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsWUFBWSxFQUFFLElBQUksQ0FBQyxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsR0FBVztRQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUcsRUFBRSxXQUEyQjtZQUN0RSxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwyQkFBTyxHQUFQLFVBQVEsR0FBRztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLEtBQUssQ0FBQztRQUM5QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxvQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLE9BQU8sQ0FBQztJQUN0RSxDQUFDO0lBRUQsNkJBQVMsR0FBVDtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUMzQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxjQUFjLEVBQUUsV0FBVyxDQUFDLENBQUM7UUFDaEQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDO0lBQy9DLENBQUM7SUFFRCxpQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQzNDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLGNBQWMsRUFBRSxXQUFXLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7SUFFTyxrQ0FBYyxHQUF0QjtRQUNFLGVBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQyxXQUFXLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxLQUFLLEdBQUcsRUFBRSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNuQyxLQUFLLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxlQUFLLENBQUMsR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDakUsZUFBSyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxZQUFZLENBQUMsVUFBVSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN4RSxDQUFDO0lBckREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztnREFDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzJDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7NENBQ0k7SUFFdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDVztJQUU3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO3FEQUNhO0lBRWpDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7a0RBQ1U7SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDTztJQWpCUixTQUFTO1FBRDdCLE9BQU87T0FDYSxTQUFTLENBd0Q3QjtJQUFELGdCQUFDO0NBeERELEFBd0RDLENBeERzQyxFQUFFLENBQUMsU0FBUyxHQXdEbEQ7a0JBeERvQixTQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZm9ybWF0UHJpY2UgfSBmcm9tICcuL2NvbW1vbi9Db21tb24nO1xuaW1wb3J0IFN0YXRlIGZyb20gJy4vbW9kZWwvU3RhdGUnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0b3JlSXRlbSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBsaXN0Qm94OiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgbGlzdEJveEJnOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBpY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHRpdGxlOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzdWJtaXRCdXR0b246IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBzdWJtaXRCdXR0b25CZzogY2MuU3ByaXRlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBzdWJtaXRUaXRsZTogY2MuTGFiZWwgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHN0b3JlUGF5OiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gIGJveE9iaiA9IHt9O1xuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnN1Ym1pdEJ1dHRvbi5vbigndG91Y2hzdGFydCcsIHRoaXMub25TdWJtaXRCdXR0b24sIHRoaXMpO1xuICB9XG5cbiAgc2V0SW1hZ2UodGFyZ2V0LCB1cmw6IHN0cmluZykge1xuICAgIGNjLnJlc291cmNlcy5sb2FkKHVybCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgdGFyZ2V0LnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgfSk7XG4gIH1cblxuICBpbml0Qm94KG9iaikge1xuICAgIHRoaXMuYm94T2JqID0gb2JqO1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5pY29uLCBvYmoudXJsKTtcbiAgICB0aGlzLnRpdGxlLnN0cmluZyA9IG9iai50aXRsZTtcbiAgICB0aGlzLnN1Ym1pdFRpdGxlLnN0cmluZyA9IGZvcm1hdFByaWNlKG9iai5wcmljZSwgMiwgdHJ1ZSkgKyAnIE5lYXInO1xuICB9XG5cbiAgb25MaXN0Qm94KCkge1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5saXN0Qm94QmcsICdpbWFnZXMvYjInKTtcbiAgICB0aGlzLnNldEltYWdlKHRoaXMuc3VibWl0QnV0dG9uQmcsICdpbWFnZXMvYzInKTtcbiAgICB0aGlzLnN1Ym1pdFRpdGxlLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgfVxuXG4gIG9uTGlzdEJveE92ZXIoKSB7XG4gICAgdGhpcy5zZXRJbWFnZSh0aGlzLmxpc3RCb3hCZywgJ2ltYWdlcy9iMScpO1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5zdWJtaXRCdXR0b25CZywgJ2ltYWdlcy9jMScpO1xuICAgIHRoaXMuc3VibWl0VGl0bGUubm9kZS5jb2xvciA9IGNjLmNvbG9yKDI1NSwgMjE3LCA3OSk7XG4gIH1cblxuICBwcml2YXRlIG9uU3VibWl0QnV0dG9uKCkge1xuICAgIFN0YXRlLmlucygpLnN0b3JlUGF5Qm94ID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdG9yZVBheSk7XG4gICAgbGV0IHNjZW5lID0gY2MuZGlyZWN0b3IuZ2V0U2NlbmUoKTtcbiAgICBzY2VuZS5nZXRDaGlsZEJ5TmFtZSgnQ2FudmFzJykuYWRkQ2hpbGQoU3RhdGUuaW5zKCkuc3RvcmVQYXlCb3gpO1xuICAgIFN0YXRlLmlucygpLnN0b3JlUGF5Qm94LmdldENvbXBvbmVudCgnU3RvcmVQYXknKS5pbml0Qm94KHRoaXMuYm94T2JqKTtcbiAgfVxufVxuIl19