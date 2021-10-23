"use strict";
cc._RF.push(module, '8395bFNuq1NjrVnqs7rG2hF', 'BrickItem');
// src/game/item/BrickItem.ts

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
var GameModel_1 = require("../model/GameModel");
var EventDispatch_1 = require("../../common/event/EventDispatch");
var GameConst_1 = require("../GameConst");
var BallItem_1 = require("./BallItem");
var AudioPlayer_1 = require("../../common/audio/AudioPlayer");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BrickItem = /** @class */ (function (_super) {
    __extends(BrickItem, _super);
    function BrickItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.lb_hp = null;
        _this.icon = null;
        _this.icon_hp_reduce = null;
        _this.icon_power = null;
        _this.brick_type = 0;
        _this.star_num = 0;
        _this.ball_num = 0;
        _this.effect_type = 0;
        _this.brick_radius_mul = 1;
        _this._hp = 1;
        _this._color_hp = 1;
        return _this;
    }
    Object.defineProperty(BrickItem.prototype, "hp", {
        get: function () {
            return this._hp;
        },
        set: function (hp) {
            var _this = this;
            var lastHp = this._hp;
            this._hp = hp;
            if (hp <= 0) {
                if (lastHp > 0) {
                    if (this.ball_num > 0) {
                        for (var index = 0; index < this.ball_num; index++) {
                            EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_CREATE_BALL);
                        }
                        AudioPlayer_1.AudioPlayer.ins().play_sound('balls');
                    }
                    if (this.star_num > 0) {
                        EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_STAR_GET_EFFECT, this.node.x, this.node.y, this.star_num);
                        GameModel_1.default.ins().ball_power += this.star_num;
                        AudioPlayer_1.AudioPlayer.ins().play_sound('star');
                    }
                    if (this.effect_type > 0) {
                        EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_POWER_TYPE_CHANGED, this.effect_type);
                    }
                    EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_PLAY_BRICK_REMOVE_EFFECT, this.node.x, this.node.y, this.icon_hp_reduce.color);
                }
                this.node.active = false;
            }
            else {
                this.lb_hp.string = "" + (hp > 1000000 ? Math.round(hp / 1000000) + 'M' : hp > 1000 ? Math.round(hp / 1000) + 'K' : hp);
                var theme_config = GameConst_1.default.ins().theme_config[0];
                if (theme_config) {
                    this.icon_hp_reduce.color = this.icon.color = theme_config.color[Math.ceil(hp / this._color_hp) - 1] || theme_config.color[0];
                }
                else {
                    this.icon_hp_reduce.color = this.icon.color = cc.Color.WHITE;
                }
                if (hp < lastHp) {
                    if (this.icon_hp_reduce.getNumberOfRunningActions() <= 0) {
                        this.icon_hp_reduce.active = true;
                        this.icon_hp_reduce.opacity = 255;
                        this.icon_hp_reduce.runAction(cc.sequence(cc.blink(0.2, 1), cc.callFunc(function () {
                            if (_this.icon_hp_reduce)
                                _this.icon_hp_reduce.active = false;
                        })));
                    }
                }
            }
        },
        enumerable: false,
        configurable: true
    });
    BrickItem.prototype.onLoad = function () {
        if (this.icon_power) {
            this.icon_power.runAction(cc.repeatForever(cc.sequence(cc.scaleTo(1, 1.2, 1.2), cc.scaleTo(1, 1, 1))));
        }
    };
    BrickItem.prototype.init = function (colors_num, hp) {
        var theme_config = GameConst_1.default.ins().theme_config[0];
        colors_num = colors_num > theme_config.color.length ? theme_config.color.length : colors_num;
        colors_num = colors_num > 0 ? colors_num : 1;
        this._color_hp = Math.ceil(hp / colors_num);
        this._hp = hp;
        this.hp = hp;
        this.icon_hp_reduce.active = false;
        this.icon_hp_reduce.stopAllActions();
    };
    BrickItem.prototype.reset = function () {
        this.node.stopAllActions();
        this.node.active = false;
    };
    BrickItem.prototype.update = function (dt) {
        if (this.lb_hp.node.angle !== -this.node.angle) {
            this.lb_hp.node.angle = -this.node.angle;
        }
    };
    BrickItem.prototype.onEndContact = function (contact, selfCollider, otherCollider) {
        switch (otherCollider.tag) {
            case 100: {
                var ballItem = otherCollider.node.getComponent(BallItem_1.default);
                if (ballItem && this.hp > 0) {
                    var power = GameModel_1.default.ins().ball_power * ballItem.power_scale;
                    power = power > this.hp ? this.hp : power;
                    this.hp -= power;
                    GameModel_1.default.ins().score += power;
                }
                break;
            }
        }
    };
    __decorate([
        property(cc.Label)
    ], BrickItem.prototype, "lb_hp", void 0);
    __decorate([
        property(cc.Node)
    ], BrickItem.prototype, "icon", void 0);
    __decorate([
        property(cc.Node)
    ], BrickItem.prototype, "icon_hp_reduce", void 0);
    __decorate([
        property(cc.Node)
    ], BrickItem.prototype, "icon_power", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickItem.prototype, "brick_type", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickItem.prototype, "star_num", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickItem.prototype, "ball_num", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickItem.prototype, "effect_type", void 0);
    __decorate([
        property(cc.Integer)
    ], BrickItem.prototype, "brick_radius_mul", void 0);
    BrickItem = __decorate([
        ccclass
    ], BrickItem);
    return BrickItem;
}(cc.Component));
exports.default = BrickItem;

cc._RF.pop();