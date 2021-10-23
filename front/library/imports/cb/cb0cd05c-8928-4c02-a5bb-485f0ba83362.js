"use strict";
cc._RF.push(module, 'cb0cdBciShMAqW7SF8LqDNi', 'GameModel');
// src/game/model/GameModel.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonClass_1 = require("../../common/base/SingletonClass");
var EventDispatch_1 = require("../../common/event/EventDispatch");
var GameModel = /** @class */ (function (_super) {
    __extends(GameModel, _super);
    function GameModel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._fireBallDt = 2;
        _this._ball_power = 1;
        _this._ball_fire_speed = 2;
        _this._ball_init_count = 4;
        _this._score = 0;
        _this._revive_times = 0;
        return _this;
    }
    GameModel.ins = function () {
        return _super.ins.call(this);
    };
    Object.defineProperty(GameModel.prototype, "fireBallDt", {
        get: function () {
            return this._fireBallDt;
        },
        set: function (value) {
            value = value < 2 ? 2 : value;
            this._fireBallDt = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "ball_power", {
        get: function () {
            return this._ball_power;
        },
        set: function (value) {
            var oldValue = this._ball_power;
            value = value < 1 ? 1 : value;
            this._ball_power = value;
            EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_BALL_POWER_CHANGED, oldValue, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "ball_fire_speed", {
        get: function () {
            return this._ball_fire_speed;
        },
        set: function (value) {
            value = value < 2 ? 2 : value;
            this._ball_fire_speed = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "ball_init_count", {
        get: function () {
            return this._ball_init_count;
        },
        set: function (value) {
            value = value < 4 ? 4 : value;
            this._ball_init_count = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "score", {
        get: function () {
            return this._score;
        },
        set: function (value) {
            value = value < 0 ? 0 : value;
            var oldValue = this._score;
            this._score = value;
            EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_SCORE_CHANGED, oldValue, value);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameModel.prototype, "revive_times", {
        get: function () {
            return this._revive_times;
        },
        set: function (value) {
            value = value < 0 ? 0 : value;
            this._revive_times = value;
        },
        enumerable: false,
        configurable: true
    });
    GameModel.prototype.init = function () {
        this.reset();
    };
    GameModel.prototype.reset = function () {
        this.score = 0;
        this.revive_times = 0;
        this.ball_init_count = 5;
        this.ball_fire_speed = 1;
        this.ball_power = 1;
    };
    return GameModel;
}(SingletonClass_1.default));
exports.default = GameModel;

cc._RF.pop();