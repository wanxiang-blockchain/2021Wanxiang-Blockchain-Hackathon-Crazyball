
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/PackItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9QYWNrSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUU1QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQW9DQztRQWxDQyxhQUFPLEdBQVksSUFBSSxDQUFDO1FBRXhCLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFFNUIsVUFBSSxHQUFjLElBQUksQ0FBQztRQUV2QixXQUFLLEdBQWEsSUFBSSxDQUFDO1FBRXZCLFlBQU0sR0FBRyxFQUFFLENBQUM7O0lBMEJkLENBQUM7SUF4QkMseUJBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLFlBQVksRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztRQUMxRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxVQUFVLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVELDJCQUFRLEdBQVIsVUFBUyxNQUFNLEVBQUUsR0FBVztRQUMxQixFQUFFLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLFdBQVcsRUFBRSxVQUFDLEdBQUcsRUFBRSxXQUEyQjtZQUN0RSxNQUFNLENBQUMsV0FBVyxHQUFHLFdBQVcsQ0FBQztRQUNuQyxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCwwQkFBTyxHQUFQLFVBQVEsR0FBRztRQUNULElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDO1FBQ2xCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7SUFDekMsQ0FBQztJQUVPLDRCQUFTLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFFTyxnQ0FBYSxHQUFyQjtRQUNFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxXQUFXLENBQUMsQ0FBQztJQUM3QyxDQUFDO0lBakNEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7NkNBQ007SUFFeEI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQzsrQ0FDUTtJQUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzBDQUNHO0lBRXZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7MkNBQ0k7SUFSSixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0M1QjtJQUFELGVBQUM7Q0FwQ0QsQUFvQ0MsQ0FwQ3FDLEVBQUUsQ0FBQyxTQUFTLEdBb0NqRDtrQkFwQ29CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhY2tJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGxpc3RCb3g6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuU3ByaXRlKVxuICBsaXN0Qm94Qmc6IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIGljb246IGNjLlNwcml0ZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgdGl0bGU6IGNjLkxhYmVsID0gbnVsbDtcblxuICBib3hPYmogPSB7fTtcblxuICBvbkxvYWQoKSB7XG4gICAgdGhpcy5saXN0Qm94Lm9uKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkxpc3RCb3gsIHRoaXMsIHRydWUpO1xuICAgIHRoaXMubGlzdEJveC5vbigndG91Y2hlbmQnLCB0aGlzLm9uTGlzdEJveE92ZXIsIHRoaXMsIHRydWUpO1xuICB9XG5cbiAgc2V0SW1hZ2UodGFyZ2V0LCB1cmw6IHN0cmluZykge1xuICAgIGNjLnJlc291cmNlcy5sb2FkKHVybCwgY2MuU3ByaXRlRnJhbWUsIChlcnIsIHNwcml0ZUZyYW1lOiBjYy5TcHJpdGVGcmFtZSkgPT4ge1xuICAgICAgdGFyZ2V0LnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgfSk7XG4gIH1cblxuICBpbml0Qm94KG9iaikge1xuICAgIHRoaXMuYm94T2JqID0gb2JqO1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5pY29uLCBvYmoudXJsKTtcbiAgICB0aGlzLnRpdGxlLnN0cmluZyA9ICd4JyArIG9iai5wYXlDb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgb25MaXN0Qm94KCkge1xuICAgIHRoaXMuc2V0SW1hZ2UodGhpcy5saXN0Qm94QmcsICdpbWFnZXMvZDInKTtcbiAgfVxuXG4gIHByaXZhdGUgb25MaXN0Qm94T3ZlcigpIHtcbiAgICB0aGlzLnNldEltYWdlKHRoaXMubGlzdEJveEJnLCAnaW1hZ2VzL2QxJyk7XG4gIH1cbn1cbiJdfQ==