
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/item/BrickItem.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9pdGVtL0JyaWNrSXRlbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBMkM7QUFDM0Msa0VBQTZFO0FBQzdFLDBDQUFxQztBQUNyQyx1Q0FBa0M7QUFDbEMsOERBQTZEO0FBRXZELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDO0lBQXVDLDZCQUFZO0lBQW5EO1FBQUEscUVBNEhDO1FBMUhDLFdBQUssR0FBYSxJQUFJLENBQUM7UUFHdkIsVUFBSSxHQUFZLElBQUksQ0FBQztRQUdyQixvQkFBYyxHQUFZLElBQUksQ0FBQztRQUcvQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUczQixnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUd2QixjQUFRLEdBQVcsQ0FBQyxDQUFDO1FBR3JCLGNBQVEsR0FBVyxDQUFDLENBQUM7UUFHckIsaUJBQVcsR0FBVyxDQUFDLENBQUM7UUFHeEIsc0JBQWdCLEdBQVcsQ0FBQyxDQUFDO1FBRXJCLFNBQUcsR0FBRyxDQUFDLENBQUM7UUFtRFIsZUFBUyxHQUFHLENBQUMsQ0FBQzs7SUE2Q3hCLENBQUM7SUEvRkMsc0JBQVcseUJBQUU7YUE4Q2I7WUFDRSxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7UUFDbEIsQ0FBQzthQWhERCxVQUFjLEVBQUU7WUFBaEIsaUJBNkNDO1lBNUNDLElBQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7WUFDeEIsSUFBSSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUM7WUFDZCxJQUFJLEVBQUUsSUFBSSxDQUFDLEVBQUU7Z0JBQ1gsSUFBSSxNQUFNLEdBQUcsQ0FBQyxFQUFFO29CQUNkLElBQUksSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLEVBQUU7d0JBQ3JCLEtBQUssSUFBSSxLQUFLLEdBQUcsQ0FBQyxF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O2FBQ1A7U0FDRjtJQUNILENBQUM7SUF6SEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs0Q0FDSTtJQUd2QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOzJDQUNHO0lBR3JCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7cURBQ2E7SUFHL0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQztpREFDUztJQUczQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2lEQUNFO0lBR3ZCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7K0NBQ0E7SUFHckI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQzsrQ0FDQTtJQUdyQjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO2tEQUNHO0lBR3hCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUM7dURBQ1E7SUExQlYsU0FBUztRQUQ3QixPQUFPO09BQ2EsU0FBUyxDQTRIN0I7SUFBRCxnQkFBQztDQTVIRCxBQTRIQyxDQTVIc0MsRUFBRSxDQUFDLFNBQVMsR0E0SGxEO2tCQTVIb0IsU0FBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lTW9kZWwgZnJvbSAnLi4vbW9kZWwvR2FtZU1vZGVsJztcbmltcG9ydCB7IEV2ZW50RGlzcGF0Y2gsIEV2ZW50X05hbWUgfSBmcm9tICcuLi8uLi9jb21tb24vZXZlbnQvRXZlbnREaXNwYXRjaCc7XG5pbXBvcnQgR2FtZUNvbnN0IGZyb20gJy4uL0dhbWVDb25zdCc7XG5pbXBvcnQgQmFsbEl0ZW0gZnJvbSAnLi9CYWxsSXRlbSc7XG5pbXBvcnQgeyBBdWRpb1BsYXllciB9IGZyb20gJy4uLy4uL2NvbW1vbi9hdWRpby9BdWRpb1BsYXllcic7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCcmlja0l0ZW0gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxiX2hwOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGljb246IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBpY29uX2hwX3JlZHVjZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGljb25fcG93ZXI6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICBicmlja190eXBlOiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICBzdGFyX251bTogbnVtYmVyID0gMDtcblxuICBAcHJvcGVydHkoY2MuSW50ZWdlcilcbiAgYmFsbF9udW06IG51bWJlciA9IDA7XG5cbiAgQHByb3BlcnR5KGNjLkludGVnZXIpXG4gIGVmZmVjdF90eXBlOiBudW1iZXIgPSAwO1xuXG4gIEBwcm9wZXJ0eShjYy5JbnRlZ2VyKVxuICBicmlja19yYWRpdXNfbXVsOiBudW1iZXIgPSAxO1xuXG4gIHByaXZhdGUgX2hwID0gMTtcbiAgcHVibGljIHNldCBocChocCkge1xuICAgIGNvbnN0IGxhc3RIcCA9IHRoaXMuX2hwO1xuICAgIHRoaXMuX2hwID0gaHA7XG4gICAgaWYgKGhwIDw9IDApIHtcbiAgICAgIGlmIChsYXN0SHAgPiAwKSB7XG4gICAgICAgIGlmICh0aGlzLmJhbGxfbnVtID4gMCkge1xuICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJhbGxfbnVtOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBFdmVudERpc3BhdGNoLmlucygpLmZpcmUoRXZlbnRfTmFtZS5HQU1FX0NSRUFURV9CQUxMKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnYmFsbHMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zdGFyX251bSA+IDApIHtcbiAgICAgICAgICBFdmVudERpc3BhdGNoLmlucygpLmZpcmUoRXZlbnRfTmFtZS5HQU1FX1NUQVJfR0VUX0VGRkVDVCwgdGhpcy5ub2RlLngsIHRoaXMubm9kZS55LCB0aGlzLnN0YXJfbnVtKTtcbiAgICAgICAgICBHYW1lTW9kZWwuaW5zKCkuYmFsbF9wb3dlciArPSB0aGlzLnN0YXJfbnVtO1xuICAgICAgICAgIEF1ZGlvUGxheWVyLmlucygpLnBsYXlfc291bmQoJ3N0YXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lZmZlY3RfdHlwZSA+IDApIHtcbiAgICAgICAgICBFdmVudERpc3BhdGNoLmlucygpLmZpcmUoRXZlbnRfTmFtZS5HQU1FX1BPV0VSX1RZUEVfQ0hBTkdFRCwgdGhpcy5lZmZlY3RfdHlwZSk7XG4gICAgICAgIH1cbiAgICAgICAgRXZlbnREaXNwYXRjaC5pbnMoKS5maXJlKEV2ZW50X05hbWUuR0FNRV9QTEFZX0JSSUNLX1JFTU9WRV9FRkZFQ1QsIHRoaXMubm9kZS54LCB0aGlzLm5vZGUueSwgdGhpcy5pY29uX2hwX3JlZHVjZS5jb2xvcik7XG4gICAgICB9XG4gICAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubGJfaHAuc3RyaW5nID0gYCR7aHAgPiAxMDAwMDAwID8gTWF0aC5yb3VuZChocCAvIDEwMDAwMDApICsgJ00nIDogaHAgPiAxMDAwID8gTWF0aC5yb3VuZChocCAvIDEwMDApICsgJ0snIDogaHB9YDtcbiAgICAgIGNvbnN0IHRoZW1lX2NvbmZpZyA9IEdhbWVDb25zdC5pbnMoKS50aGVtZV9jb25maWdbMF07XG4gICAgICBpZiAodGhlbWVfY29uZmlnKSB7XG4gICAgICAgIHRoaXMuaWNvbl9ocF9yZWR1Y2UuY29sb3IgPSB0aGlzLmljb24uY29sb3IgPSB0aGVtZV9jb25maWcuY29sb3JbTWF0aC5jZWlsKGhwIC8gdGhpcy5fY29sb3JfaHApIC0gMV0gfHwgdGhlbWVfY29uZmlnLmNvbG9yWzBdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5pY29uX2hwX3JlZHVjZS5jb2xvciA9IHRoaXMuaWNvbi5jb2xvciA9IGNjLkNvbG9yLldISVRFO1xuICAgICAgfVxuICAgICAgaWYgKGhwIDwgbGFzdEhwKSB7XG4gICAgICAgIGlmICh0aGlzLmljb25faHBfcmVkdWNlLmdldE51bWJlck9mUnVubmluZ0FjdGlvbnMoKSA8PSAwKSB7XG4gICAgICAgICAgdGhpcy5pY29uX2hwX3JlZHVjZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgIHRoaXMuaWNvbl9ocF9yZWR1Y2Uub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICB0aGlzLmljb25faHBfcmVkdWNlLnJ1bkFjdGlvbihcbiAgICAgICAgICAgIGNjLnNlcXVlbmNlKFxuICAgICAgICAgICAgICBjYy5ibGluaygwLjIsIDEpLFxuICAgICAgICAgICAgICBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuaWNvbl9ocF9yZWR1Y2UpIHRoaXMuaWNvbl9ocF9yZWR1Y2UuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBwdWJsaWMgZ2V0IGhwKCkge1xuICAgIHJldHVybiB0aGlzLl9ocDtcbiAgfVxuXG4gIHByaXZhdGUgX2NvbG9yX2hwID0gMTtcblxuICBvbkxvYWQoKSB7XG4gICAgaWYgKHRoaXMuaWNvbl9wb3dlcikge1xuICAgICAgdGhpcy5pY29uX3Bvd2VyLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLnNjYWxlVG8oMSwgMS4yLCAxLjIpLCBjYy5zY2FsZVRvKDEsIDEsIDEpKSkpO1xuICAgIH1cbiAgfVxuXG4gIGluaXQoY29sb3JzX251bTogbnVtYmVyLCBocDogbnVtYmVyKSB7XG4gICAgY29uc3QgdGhlbWVfY29uZmlnID0gR2FtZUNvbnN0LmlucygpLnRoZW1lX2NvbmZpZ1swXTtcbiAgICBjb2xvcnNfbnVtID0gY29sb3JzX251bSA+IHRoZW1lX2NvbmZpZy5jb2xvci5sZW5ndGggPyB0aGVtZV9jb25maWcuY29sb3IubGVuZ3RoIDogY29sb3JzX251bTtcbiAgICBjb2xvcnNfbnVtID0gY29sb3JzX251bSA+IDAgPyBjb2xvcnNfbnVtIDogMTtcbiAgICB0aGlzLl9jb2xvcl9ocCA9IE1hdGguY2VpbChocCAvIGNvbG9yc19udW0pO1xuICAgIHRoaXMuX2hwID0gaHA7XG4gICAgdGhpcy5ocCA9IGhwO1xuXG4gICAgdGhpcy5pY29uX2hwX3JlZHVjZS5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLmljb25faHBfcmVkdWNlLnN0b3BBbGxBY3Rpb25zKCk7XG4gIH1cblxuICByZXNldCgpIHtcbiAgICB0aGlzLm5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gIH1cblxuICB1cGRhdGUoZHQpIHtcbiAgICBpZiAodGhpcy5sYl9ocC5ub2RlLmFuZ2xlICE9PSAtdGhpcy5ub2RlLmFuZ2xlKSB7XG4gICAgICB0aGlzLmxiX2hwLm5vZGUuYW5nbGUgPSAtdGhpcy5ub2RlLmFuZ2xlO1xuICAgIH1cbiAgfVxuXG4gIG9uRW5kQ29udGFjdChjb250YWN0OiBjYy5QaHlzaWNzQ29udGFjdCwgc2VsZkNvbGxpZGVyOiBjYy5QaHlzaWNzQ29sbGlkZXIsIG90aGVyQ29sbGlkZXI6IGNjLlBoeXNpY3NDb2xsaWRlcikge1xuICAgIHN3aXRjaCAob3RoZXJDb2xsaWRlci50YWcpIHtcbiAgICAgIGNhc2UgMTAwOiB7XG4gICAgICAgIGxldCBiYWxsSXRlbSA9IG90aGVyQ29sbGlkZXIubm9kZS5nZXRDb21wb25lbnQoQmFsbEl0ZW0pO1xuICAgICAgICBpZiAoYmFsbEl0ZW0gJiYgdGhpcy5ocCA+IDApIHtcbiAgICAgICAgICBsZXQgcG93ZXIgPSBHYW1lTW9kZWwuaW5zKCkuYmFsbF9wb3dlciAqIGJhbGxJdGVtLnBvd2VyX3NjYWxlO1xuICAgICAgICAgIHBvd2VyID0gcG93ZXIgPiB0aGlzLmhwID8gdGhpcy5ocCA6IHBvd2VyO1xuICAgICAgICAgIHRoaXMuaHAgLT0gcG93ZXI7XG4gICAgICAgICAgR2FtZU1vZGVsLmlucygpLnNjb3JlICs9IHBvd2VyO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19