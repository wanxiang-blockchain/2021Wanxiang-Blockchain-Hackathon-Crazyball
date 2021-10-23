"use strict";
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