
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/event/EventDispatch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2V2ZW50L0V2ZW50RGlzcGF0Y2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFFcEQ7SUFBbUMsaUNBQWM7SUFBakQ7UUFBQSxxRUFrREM7UUFqRFcsZUFBUyxHQUFRLEVBQUUsQ0FBQyxDQUFVLG9CQUFvQjs7SUFpRDlELENBQUM7SUEvQ1UsaUJBQUcsR0FBVjtRQUNJLE9BQU8sT0FBTSxHQUFHLFdBQW1CLENBQUM7SUFDeEMsQ0FBQztJQUVELDRCQUFJLEdBQUosVUFBSyxLQUFpQjtRQUFFLGdCQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsK0JBQWdCOztRQUNwQyxJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixPQUFPO1NBQ1Y7UUFDRCxLQUFLLElBQUksQ0FBQyxHQUFXLENBQUMsRUFBRSxHQUFHLEdBQVcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEdBQUcsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDL0QsSUFBSSxFQUFFLEdBQVEsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLElBQUksSUFBSSxHQUFRLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDM0IsSUFBSSxFQUFFO2dCQUNGLEVBQUUsQ0FBQyxJQUFJLE9BQVAsRUFBRSxrQkFBTSxJQUFJLEdBQUssTUFBTSxHQUFFO1NBQ2hDO0lBQ0wsQ0FBQztJQUVELDJCQUFHLEdBQUgsVUFBSSxLQUFpQixFQUFFLEVBQVksRUFBRSxJQUFnQixFQUFFLE9BQWU7UUFBakMscUJBQUEsRUFBQSxXQUFnQjtRQUFFLHdCQUFBLEVBQUEsZUFBZTtRQUFFLGdCQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsK0JBQWdCOztRQUNwRixJQUFJLEdBQUcsR0FBVSxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLElBQUksQ0FBQyxHQUFHLEVBQUU7WUFDTixJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxFQUFFLENBQUM7U0FDcEM7UUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNuQixJQUFJLE9BQU8sRUFBRTtZQUNULEVBQUUsQ0FBQyxJQUFJLE9BQVAsRUFBRSxrQkFBTSxJQUFJLEdBQUssTUFBTSxHQUFFO1NBQzVCO0lBQ0wsQ0FBQztJQUVELDhCQUFNLEdBQU4sVUFBTyxLQUFpQixFQUFFLEVBQVk7UUFDbEMsSUFBSSxHQUFHLEdBQVUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QyxJQUFJLENBQUMsR0FBRyxFQUFFO1lBQ04sT0FBTztTQUNWO1FBQ0QsSUFBSSxLQUFLLEdBQVcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDWCxFQUFFLENBQUMsSUFBSSxDQUFDLDBCQUF3QixLQUFLLHlCQUFzQixDQUFDLENBQUM7WUFDN0QsT0FBTztTQUNWO1FBQ0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUVELDZCQUFLLEdBQUw7UUFDSSxLQUFLLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ2xDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUNMLG9CQUFDO0FBQUQsQ0FsREEsQUFrREMsQ0FsRGtDLHdCQUFjLEdBa0RoRDtBQWxEWSxzQ0FBYTtBQW9EMUIsV0FBVztBQUNYLElBQVksVUFZWDtBQVpELFdBQVksVUFBVTtJQUNsQixxRUFBaUIsQ0FBQTtJQUNqQixtRUFBZ0IsQ0FBQTtJQUNoQix1RUFBa0IsQ0FBQTtJQUNsQixpRkFBdUIsQ0FBQTtJQUN2QixpRkFBdUIsQ0FBQTtJQUN2Qix1RUFBa0IsQ0FBQTtJQUNsQixpRkFBdUIsQ0FBQTtJQUN2Qix5REFBVyxDQUFBO0lBQ1gsNkZBQTZCLENBQUE7SUFDN0IscURBQVMsQ0FBQTtJQUNULDRFQUFvQixDQUFBO0FBQ3hCLENBQUMsRUFaVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVlyQiIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b25DbGFzcyBmcm9tIFwiLi4vYmFzZS9TaW5nbGV0b25DbGFzc1wiO1xuXG5leHBvcnQgY2xhc3MgRXZlbnREaXNwYXRjaCBleHRlbmRzIFNpbmdsZXRvbkNsYXNzIHtcbiAgICBwcml2YXRlIGxpc3RlbmVyczogYW55ID0ge307ICAgICAgICAgIC8vRXZlbnRfTmFtZSA9PiBjYltdXG5cbiAgICBzdGF0aWMgaW5zKCk6IEV2ZW50RGlzcGF0Y2gge1xuICAgICAgICByZXR1cm4gc3VwZXIuaW5zKCkgYXMgRXZlbnREaXNwYXRjaDtcbiAgICB9XG5cbiAgICBmaXJlKGV2ZW50OiBFdmVudF9OYW1lLCAuLi5wYXJhbXM6IGFueVtdKTogdm9pZCB7XG4gICAgICAgIGxldCBjYnM6IGFueVtdID0gdGhpcy5saXN0ZW5lcnNbZXZlbnRdO1xuICAgICAgICBpZiAoIWNicykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDAsIGxlbjogbnVtYmVyID0gY2JzLmxlbmd0aDsgaSA8IGxlbjsgaSArPSAyKSB7XG4gICAgICAgICAgICBsZXQgY2I6IGFueSA9IGNic1tpXTtcbiAgICAgICAgICAgIGxldCBob3N0OiBhbnkgPSBjYnNbaSArIDFdO1xuICAgICAgICAgICAgaWYgKGNiKVxuICAgICAgICAgICAgICAgIGNiLmNhbGwoaG9zdCwgLi4ucGFyYW1zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGFkZChldmVudDogRXZlbnRfTmFtZSwgY2I6IEZ1bmN0aW9uLCBob3N0OiBhbnkgPSBudWxsLCBjYWxsTm93ID0gZmFsc2UsIC4uLnBhcmFtczogYW55W10pOiB2b2lkIHtcbiAgICAgICAgbGV0IGNiczogYW55W10gPSB0aGlzLmxpc3RlbmVyc1tldmVudF07XG4gICAgICAgIGlmICghY2JzKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVyc1tldmVudF0gPSBjYnMgPSBbXTtcbiAgICAgICAgfVxuICAgICAgICBjYnMucHVzaChjYiwgaG9zdCk7XG4gICAgICAgIGlmIChjYWxsTm93KSB7XG4gICAgICAgICAgICBjYi5jYWxsKGhvc3QsIC4uLnBhcmFtcyk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmUoZXZlbnQ6IEV2ZW50X05hbWUsIGNiOiBGdW5jdGlvbikge1xuICAgICAgICBsZXQgY2JzOiBhbnlbXSA9IHRoaXMubGlzdGVuZXJzW2V2ZW50XTtcbiAgICAgICAgaWYgKCFjYnMpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5kZXg6IG51bWJlciA9IGNicy5pbmRleE9mKGNiKTtcbiAgICAgICAgaWYgKGluZGV4IDwgMCkge1xuICAgICAgICAgICAgY2Mud2FybihgRXZlbnREaXNwYXRjaCByZW1vdmUgJHtldmVudH0sIGJ1dCBjYiBub3QgZXhpc3RzIWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNicy5zcGxpY2UoaW5kZXgsIDIpO1xuICAgIH1cblxuICAgIGNsZWFyKCkge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gdGhpcy5saXN0ZW5lcnMpIHtcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzW2tleV0ubGVuZ3RoID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IHt9O1xuICAgIH1cbn1cblxuLyoq5LqL5Lu25ZCN56ew5a6a5LmJKi9cbmV4cG9ydCBlbnVtIEV2ZW50X05hbWUge1xuICAgIEdBTUVfVElNRV9DSEFOR0VELFxuICAgIEdBTUVfQ1JFQVRFX0JBTEwsXG4gICAgR0FNRV9TQ09SRV9DSEFOR0VELFxuICAgIEdBTUVfQkFMTF9QT1dFUl9DSEFOR0VELFxuICAgIEdBTUVfQkVTVF9TQ09SRV9DSEFOR0VELFxuICAgIEdBTUVfT05fVE9VQ0hfTU9WRSxcbiAgICBHQU1FX1BPV0VSX1RZUEVfQ0hBTkdFRCxcbiAgICBHQU1FX1JFTElWRSxcbiAgICBHQU1FX1BMQVlfQlJJQ0tfUkVNT1ZFX0VGRkVDVCxcbiAgICBTSE9XX1RJUFMsXG4gICAgR0FNRV9TVEFSX0dFVF9FRkZFQ1QsXG59Il19