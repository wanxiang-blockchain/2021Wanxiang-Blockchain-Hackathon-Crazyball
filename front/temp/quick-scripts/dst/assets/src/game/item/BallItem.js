
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/item/BallItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '908e7hGo41Op5knNUQ8AuMr', 'BallItem');
// src/game/item/BallItem.ts

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
exports.EnumBallStatus = void 0;
var GameConst_1 = require("../GameConst");
var GameModel_1 = require("../model/GameModel");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BallItem = /** @class */ (function (_super) {
    __extends(BallItem, _super);
    function BallItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // 0 default
        // 1 big
        _this.ball_type = 0;
        _this.ball_icon = null;
        _this._ball_status = 0;
        _this._power_scale = 1;
        return _this;
    }
    Object.defineProperty(BallItem.prototype, "ball_status", {
        get: function () {
            return this._ball_status;
        },
        set: function (status) {
            var _this = this;
            this._ball_status = status;
            switch (status) {
                case EnumBallStatus.onLand: {
                    this.scheduleOnce(function () {
                        if (_this.node && _this.node.active) {
                            _this.node.setPosition(GameConst_1.default.ins().ball_init_x, GameConst_1.default.ins().ball_init_y);
                            _this.ball_status = EnumBallStatus.onReady;
                        }
                    }, 0);
                    break;
                }
                case EnumBallStatus.onReady: {
                    break;
                }
                case EnumBallStatus.onRemoved: {
                    break;
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(BallItem.prototype, "power_scale", {
        get: function () {
            return this._power_scale;
        },
        set: function (value) {
            this._power_scale = value;
            this.ball_icon.node.setScale(value > 1 ? 1.5 : 1);
        },
        enumerable: false,
        configurable: true
    });
    BallItem.prototype.reset = function () {
        this.node.stopAllActions();
        this._ball_status = EnumBallStatus.onRemoved;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
        this.power_scale = 1;
        this.node.active = false;
    };
    BallItem.prototype.init = function (x, y, status) {
        this.power_scale = 1;
        this.node.x = x;
        this.node.y = y;
        this.ball_status = status;
        this.setImage(this.ball_icon, 'images/e1');
    };
    BallItem.prototype.setImage = function (target, url) {
        cc.resources.load(url, cc.SpriteFrame, function (err, spriteFrame) {
            target.spriteFrame = spriteFrame;
        });
    };
    BallItem.prototype.fireBall = function (fire_rotation) {
        var radians = (fire_rotation * Math.PI) / 180;
        var ball_speed = GameConst_1.default.ins().ball_speed + 100 * GameModel_1.default.ins().ball_fire_speed;
        this.getComponent(cc.RigidBody).linearVelocity = cc.v2(Math.sin(radians) * ball_speed, Math.cos(radians) * ball_speed);
        this.ball_status = EnumBallStatus.onFire;
    };
    BallItem.prototype.onBeginContact = function (contact, selfCollider, otherCollider) {
        switch (otherCollider.tag) {
            case 1: {
                if (this.node.active) {
                    this.getComponent(cc.RigidBody).linearVelocity = cc.v2(0, 0);
                    this.ball_status = EnumBallStatus.onLand;
                }
                break;
            }
        }
    };
    __decorate([
        property(cc.Integer)
    ], BallItem.prototype, "ball_type", void 0);
    __decorate([
        property(cc.Sprite)
    ], BallItem.prototype, "ball_icon", void 0);
    BallItem = __decorate([
        ccclass
    ], BallItem);
    return BallItem;
}(cc.Component));
exports.default = BallItem;
var EnumBallStatus;
(function (EnumBallStatus) {
    EnumBallStatus[EnumBallStatus["onReady"] = 0] = "onReady";
    EnumBallStatus[EnumBallStatus["onLand"] = 1] = "onLand";
    EnumBallStatus[EnumBallStatus["onFire"] = 2] = "onFire";
    EnumBallStatus[EnumBallStatus["onRemoved"] = 3] = "onRemoved";
})(EnumBallStatus = exports.EnumBallStatus || (exports.EnumBallStatus = {}));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9pdGVtL0JhbGxJdGVtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwwQ0FBcUM7QUFDckMsZ0RBQTJDO0FBRXJDLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRTVDO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBb0ZDO1FBbkZDLFlBQVk7UUFDWixRQUFRO1FBRVIsZUFBUyxHQUFXLENBQUMsQ0FBQztRQUd0QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRXBCLGtCQUFZLEdBQW1CLENBQUMsQ0FBQztRQXlCakMsa0JBQVksR0FBVyxDQUFDLENBQUM7O0lBa0RuQyxDQUFDO0lBMUVDLHNCQUFXLGlDQUFXO2FBQXRCO1lBQ0UsT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNCLENBQUM7YUFDRCxVQUF1QixNQUFNO1lBQTdCLGlCQW1CQztZQWxCQyxJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztZQUMzQixRQUFRLE1BQU0sRUFBRTtnQkFDZCxLQUFLLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztvQkFDMUIsSUFBSSxDQUFDLFlBQVksQ0FBQzt3QkFDaEIsSUFBSSxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFOzRCQUNqQyxLQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsRUFBRSxtQkFBUyxDQUFDLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxDQUFDOzRCQUNoRixLQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxPQUFPLENBQUM7eUJBQzNDO29CQUNILENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDTixNQUFNO2lCQUNQO2dCQUNELEtBQUssY0FBYyxD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QyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM3RCxJQUFJLENBQUMsV0FBVyxHQUFHLGNBQWMsQ0FBQyxNQUFNLENBQUM7aUJBQzFDO2dCQUNELE1BQU07YUFDUDtTQUNGO0lBQ0gsQ0FBQztJQS9FRDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDOytDQUNDO0lBR3RCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ1E7SUFQVCxRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBb0Y1QjtJQUFELGVBQUM7Q0FwRkQsQUFvRkMsQ0FwRnFDLEVBQUUsQ0FBQyxTQUFTLEdBb0ZqRDtrQkFwRm9CLFFBQVE7QUFzRjdCLElBQVksY0FLWDtBQUxELFdBQVksY0FBYztJQUN4Qix5REFBVyxDQUFBO0lBQ1gsdURBQVUsQ0FBQTtJQUNWLHVEQUFVLENBQUE7SUFDViw2REFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUxXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBS3pCIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdhbWVDb25zdCBmcm9tICcuLi9HYW1lQ29uc3QnO1xuaW1wb3J0IEdhbWVNb2RlbCBmcm9tICcuLi9tb2RlbC9HYW1lTW9kZWwnO1xuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJhbGxJdGVtIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgLy8gMCBkZWZhdWx0XG4gIC8vIDEgYmlnXG4gIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICBiYWxsX3R5cGU6IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZSlcbiAgYmFsbF9pY29uOiBjYy5TcHJpdGUgPSBudWxsO1xuXG4gIHByaXZhdGUgX2JhbGxfc3RhdHVzOiBFbnVtQmFsbFN0YXR1cyA9IDA7XG4gIHB1YmxpYyBnZXQgYmFsbF9zdGF0dXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhbGxfc3RhdHVzO1xuICB9XG4gIHB1YmxpYyBzZXQgYmFsbF9zdGF0dXMoc3RhdHVzKSB7XG4gICAgdGhpcy5fYmFsbF9zdGF0dXMgPSBzdGF0dXM7XG4gICAgc3dpdGNoIChzdGF0dXMpIHtcbiAgICAgIGNhc2UgRW51bUJhbGxTdGF0dXMub25MYW5kOiB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlICYmIHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihHYW1lQ29uc3QuaW5zKCkuYmFsbF9pbml0X3gsIEdhbWVDb25zdC5pbnMoKS5iYWxsX2luaXRfeSk7XG4gICAgICAgICAgICB0aGlzLmJhbGxfc3RhdHVzID0gRW51bUJhbGxTdGF0dXMub25SZWFkeTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIDApO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgRW51bUJhbGxTdGF0dXMub25SZWFkeToge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGNhc2UgRW51bUJhbGxTdGF0dXMub25SZW1vdmVkOiB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Bvd2VyX3NjYWxlOiBudW1iZXIgPSAxO1xuICBwdWJsaWMgZ2V0IHBvd2VyX3NjYWxlKCkge1xuICAgIHJldHVybiB0aGlzLl9wb3dlcl9zY2FsZTtcbiAgfVxuICBwdWJsaWMgc2V0IHBvd2VyX3NjYWxlKHZhbHVlKSB7XG4gICAgdGhpcy5fcG93ZXJfc2NhbGUgPSB2YWx1ZTtcbiAgICB0aGlzLmJhbGxfaWNvbi5ub2RlLnNldFNjYWxlKHZhbHVlID4gMSA/IDEuNSA6IDEpO1xuICB9XG5cbiAgcmVzZXQoKSB7XG4gICAgdGhpcy5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgdGhpcy5fYmFsbF9zdGF0dXMgPSBFbnVtQmFsbFN0YXR1cy5vblJlbW92ZWQ7XG4gICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKDAsIDApO1xuICAgIHRoaXMucG93ZXJfc2NhbGUgPSAxO1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgfVxuXG4gIGluaXQoeDogbnVtYmVyLCB5OiBudW1iZXIsIHN0YXR1czogRW51bUJhbGxTdGF0dXMpIHtcbiAgICB0aGlzLnBvd2VyX3NjYWxlID0gMTtcbiAgICB0aGlzLm5vZGUueCA9IHg7XG4gICAgdGhpcy5ub2RlLnkgPSB5O1xuICAgIHRoaXMuYmFsbF9zdGF0dXMgPSBzdGF0dXM7XG5cbiAgICB0aGlzLnNldEltYWdlKHRoaXMuYmFsbF9pY29uLCAnaW1hZ2VzL2UxJyk7XG4gIH1cblxuICBzZXRJbWFnZSh0YXJnZXQsIHVybDogc3RyaW5nKSB7XG4gICAgY2MucmVzb3VyY2VzLmxvYWQodXJsLCBjYy5TcHJpdGVGcmFtZSwgKGVyciwgc3ByaXRlRnJhbWU6IGNjLlNwcml0ZUZyYW1lKSA9PiB7XG4gICAgICB0YXJnZXQuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICB9KTtcbiAgfVxuXG4gIGZpcmVCYWxsKGZpcmVfcm90YXRpb246IG51bWJlcikge1xuICAgIGNvbnN0IHJhZGlhbnMgPSAoZmlyZV9yb3RhdGlvbiAqIE1hdGguUEkpIC8gMTgwO1xuICAgIGNvbnN0IGJhbGxfc3BlZWQgPSBHYW1lQ29uc3QuaW5zKCkuYmFsbF9zcGVlZCArIDEwMCAqIEdhbWVNb2RlbC5pbnMoKS5iYWxsX2ZpcmVfc3BlZWQ7XG4gICAgdGhpcy5nZXRDb21wb25lbnQoY2MuUmlnaWRCb2R5KS5saW5lYXJWZWxvY2l0eSA9IGNjLnYyKE1hdGguc2luKHJhZGlhbnMpICogYmFsbF9zcGVlZCwgTWF0aC5jb3MocmFkaWFucykgKiBiYWxsX3NwZWVkKTtcbiAgICB0aGlzLmJhbGxfc3RhdHVzID0gRW51bUJhbGxTdGF0dXMub25GaXJlO1xuICB9XG5cbiAgb25CZWdpbkNvbnRhY3QoY29udGFjdDogY2MuUGh5c2ljc0NvbnRhY3QsIHNlbGZDb2xsaWRlcjogY2MuUGh5c2ljc0NvbGxpZGVyLCBvdGhlckNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIpIHtcbiAgICBzd2l0Y2ggKG90aGVyQ29sbGlkZXIudGFnKSB7XG4gICAgICBjYXNlIDE6IHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5hY3RpdmUpIHtcbiAgICAgICAgICB0aGlzLmdldENvbXBvbmVudChjYy5SaWdpZEJvZHkpLmxpbmVhclZlbG9jaXR5ID0gY2MudjIoMCwgMCk7XG4gICAgICAgICAgdGhpcy5iYWxsX3N0YXR1cyA9IEVudW1CYWxsU3RhdHVzLm9uTGFuZDtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGVudW0gRW51bUJhbGxTdGF0dXMge1xuICBvblJlYWR5ID0gMCxcbiAgb25MYW5kID0gMSxcbiAgb25GaXJlID0gMixcbiAgb25SZW1vdmVkID0gM1xufVxuIl19