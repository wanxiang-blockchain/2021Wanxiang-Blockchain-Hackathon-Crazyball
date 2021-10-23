"use strict";
cc._RF.push(module, 'eed4aQJ7TtAqptDX40AW5tU', 'EventDispatch');
// src/common/event/EventDispatch.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Event_Name = exports.EventDispatch = void 0;
var SingletonClass_1 = require("../base/SingletonClass");
var EventDispatch = /** @class */ (function (_super) {
    __extends(EventDispatch, _super);
    function EventDispatch() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.listeners = {}; //Event_Name => cb[]
        return _this;
    }
    EventDispatch.ins = function () {
        return _super.ins.call(this);
    };
    EventDispatch.prototype.fire = function (event) {
        var params = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            params[_i - 1] = arguments[_i];
        }
        var cbs = this.listeners[event];
        if (!cbs) {
            return;
        }
        for (var i = 0, len = cbs.length; i < len; i += 2) {
            var cb = cbs[i];
            var host = cbs[i + 1];
            if (cb)
                cb.call.apply(cb, __spreadArrays([host], params));
        }
    };
    EventDispatch.prototype.add = function (event, cb, host, callNow) {
        if (host === void 0) { host = null; }
        if (callNow === void 0) { callNow = false; }
        var params = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            params[_i - 4] = arguments[_i];
        }
        var cbs = this.listeners[event];
        if (!cbs) {
            this.listeners[event] = cbs = [];
        }
        cbs.push(cb, host);
        if (callNow) {
            cb.call.apply(cb, __spreadArrays([host], params));
        }
    };
    EventDispatch.prototype.remove = function (event, cb) {
        var cbs = this.listeners[event];
        if (!cbs) {
            return;
        }
        var index = cbs.indexOf(cb);
        if (index < 0) {
            cc.warn("EventDispatch remove " + event + ", but cb not exists!");
            return;
        }
        cbs.splice(index, 2);
    };
    EventDispatch.prototype.clear = function () {
        for (var key in this.listeners) {
            this.listeners[key].length = 0;
        }
        this.listeners = {};
    };
    return EventDispatch;
}(SingletonClass_1.default));
exports.EventDispatch = EventDispatch;
/**事件名称定义*/
var Event_Name;
(function (Event_Name) {
    Event_Name[Event_Name["GAME_TIME_CHANGED"] = 0] = "GAME_TIME_CHANGED";
    Event_Name[Event_Name["GAME_CREATE_BALL"] = 1] = "GAME_CREATE_BALL";
    Event_Name[Event_Name["GAME_SCORE_CHANGED"] = 2] = "GAME_SCORE_CHANGED";
    Event_Name[Event_Name["GAME_BALL_POWER_CHANGED"] = 3] = "GAME_BALL_POWER_CHANGED";
    Event_Name[Event_Name["GAME_BEST_SCORE_CHANGED"] = 4] = "GAME_BEST_SCORE_CHANGED";
    Event_Name[Event_Name["GAME_ON_TOUCH_MOVE"] = 5] = "GAME_ON_TOUCH_MOVE";
    Event_Name[Event_Name["GAME_POWER_TYPE_CHANGED"] = 6] = "GAME_POWER_TYPE_CHANGED";
    Event_Name[Event_Name["GAME_RELIVE"] = 7] = "GAME_RELIVE";
    Event_Name[Event_Name["GAME_PLAY_BRICK_REMOVE_EFFECT"] = 8] = "GAME_PLAY_BRICK_REMOVE_EFFECT";
    Event_Name[Event_Name["SHOW_TIPS"] = 9] = "SHOW_TIPS";
    Event_Name[Event_Name["GAME_STAR_GET_EFFECT"] = 10] = "GAME_STAR_GET_EFFECT";
})(Event_Name = exports.Event_Name || (exports.Event_Name = {}));

cc._RF.pop();