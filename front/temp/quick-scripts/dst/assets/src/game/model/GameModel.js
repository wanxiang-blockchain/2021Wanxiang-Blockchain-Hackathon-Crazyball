
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/model/GameModel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9tb2RlbC9HYW1lTW9kZWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsbUVBQThEO0FBQzlELGtFQUE2RTtBQUU3RTtJQUF1Qyw2QkFBYztJQUFyRDtRQUFBLHFFQTBFQztRQXJFUyxpQkFBVyxHQUFHLENBQUMsQ0FBQztRQVNoQixpQkFBVyxHQUFHLENBQUMsQ0FBQztRQVdoQixzQkFBZ0IsR0FBRyxDQUFDLENBQUM7UUFTckIsc0JBQWdCLEdBQUcsQ0FBQyxDQUFDO1FBU3JCLFlBQU0sR0FBRyxDQUFDLENBQUM7UUFXWCxtQkFBYSxHQUFHLENBQUMsQ0FBQzs7SUFvQjVCLENBQUM7SUF6RVEsYUFBRyxHQUFWO1FBQ0UsT0FBTyxPQUFNLEdBQUcsV0FBZSxDQUFDO0lBQ2xDLENBQUM7SUFHRCxzQkFBVyxpQ0FBVTthQUlyQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO2FBTkQsVUFBc0IsS0FBSztZQUN6QixLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxpQ0FBVTthQU1yQjtZQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztRQUMxQixDQUFDO2FBUkQsVUFBc0IsS0FBSztZQUN6QixJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDO1lBQ2xDLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsV0FBVyxHQUFHLEtBQUssQ0FBQztZQUN6Qiw2QkFBYSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQywwQkFBVSxDQUFDLHVCQUF1QixFQUFFLFFBQVEsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUNoRixDQUFDOzs7T0FBQTtJQU1ELHNCQUFXLHNDQUFlO2FBSTFCO1lBQ0UsT0FBTyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDL0IsQ0FBQzthQU5ELFVBQTJCLEtBQUs7WUFDOUIsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxLQUFLLENBQUM7UUFDaEMsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxzQ0FBZTthQUkxQjtZQUNFLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1FBQy9CLENBQUM7YUFORCxVQUEyQixLQUFLO1lBQzlCLEtBQUssR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztZQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsS0FBSyxDQUFDO1FBQ2hDLENBQUM7OztPQUFBO0lBTUQsc0JBQVcsNEJBQUs7YUFNaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDckIsQ0FBQzthQVJELFVBQWlCLEtBQUs7WUFDcEIsS0FBSyxHQUFHLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO1lBQzlCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7WUFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsNkJBQWEsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsMEJBQVUsQ0FBQyxrQkFBa0IsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDM0UsQ0FBQzs7O09BQUE7SUFNRCxzQkFBVyxtQ0FBWTthQUl2QjtZQUNFLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM1QixDQUFDO2FBTkQsVUFBd0IsS0FBSztZQUMzQixLQUFLLEdBQUcsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7WUFDOUIsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDN0IsQ0FBQzs7O09BQUE7SUFLTSx3QkFBSSxHQUFYO1FBQ0UsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ2YsQ0FBQztJQUVNLHlCQUFLLEdBQVo7UUFDRSxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxlQUFlLEdBQUcsQ0FBQyxDQUFDO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO0lBQ3RCLENBQUM7SUFDSCxnQkFBQztBQUFELENBMUVBLEFBMEVDLENBMUVzQyx3QkFBYyxHQTBFcEQiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uQ2xhc3MgZnJvbSAnLi4vLi4vY29tbW9uL2Jhc2UvU2luZ2xldG9uQ2xhc3MnO1xuaW1wb3J0IHsgRXZlbnREaXNwYXRjaCwgRXZlbnRfTmFtZSB9IGZyb20gJy4uLy4uL2NvbW1vbi9ldmVudC9FdmVudERpc3BhdGNoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZU1vZGVsIGV4dGVuZHMgU2luZ2xldG9uQ2xhc3Mge1xuICBzdGF0aWMgaW5zKCkge1xuICAgIHJldHVybiBzdXBlci5pbnMoKSBhcyBHYW1lTW9kZWw7XG4gIH1cblxuICBwcml2YXRlIF9maXJlQmFsbER0ID0gMjtcbiAgcHVibGljIHNldCBmaXJlQmFsbER0KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSA8IDIgPyAyIDogdmFsdWU7XG4gICAgdGhpcy5fZmlyZUJhbGxEdCA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyBnZXQgZmlyZUJhbGxEdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZmlyZUJhbGxEdDtcbiAgfVxuXG4gIHByaXZhdGUgX2JhbGxfcG93ZXIgPSAxO1xuICBwdWJsaWMgc2V0IGJhbGxfcG93ZXIodmFsdWUpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IHRoaXMuX2JhbGxfcG93ZXI7XG4gICAgdmFsdWUgPSB2YWx1ZSA8IDEgPyAxIDogdmFsdWU7XG4gICAgdGhpcy5fYmFsbF9wb3dlciA9IHZhbHVlO1xuICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuZmlyZShFdmVudF9OYW1lLkdBTUVfQkFMTF9QT1dFUl9DSEFOR0VELCBvbGRWYWx1ZSwgdmFsdWUpO1xuICB9XG4gIHB1YmxpYyBnZXQgYmFsbF9wb3dlcigpIHtcbiAgICByZXR1cm4gdGhpcy5fYmFsbF9wb3dlcjtcbiAgfVxuXG4gIHByaXZhdGUgX2JhbGxfZmlyZV9zcGVlZCA9IDI7XG4gIHB1YmxpYyBzZXQgYmFsbF9maXJlX3NwZWVkKHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSA8IDIgPyAyIDogdmFsdWU7XG4gICAgdGhpcy5fYmFsbF9maXJlX3NwZWVkID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIGdldCBiYWxsX2ZpcmVfc3BlZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhbGxfZmlyZV9zcGVlZDtcbiAgfVxuXG4gIHByaXZhdGUgX2JhbGxfaW5pdF9jb3VudCA9IDQ7XG4gIHB1YmxpYyBzZXQgYmFsbF9pbml0X2NvdW50KHZhbHVlKSB7XG4gICAgdmFsdWUgPSB2YWx1ZSA8IDQgPyA0IDogdmFsdWU7XG4gICAgdGhpcy5fYmFsbF9pbml0X2NvdW50ID0gdmFsdWU7XG4gIH1cbiAgcHVibGljIGdldCBiYWxsX2luaXRfY291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2JhbGxfaW5pdF9jb3VudDtcbiAgfVxuXG4gIHByaXZhdGUgX3Njb3JlID0gMDtcbiAgcHVibGljIHNldCBzY29yZSh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUgPCAwID8gMCA6IHZhbHVlO1xuICAgIGNvbnN0IG9sZFZhbHVlID0gdGhpcy5fc2NvcmU7XG4gICAgdGhpcy5fc2NvcmUgPSB2YWx1ZTtcbiAgICBFdmVudERpc3BhdGNoLmlucygpLmZpcmUoRXZlbnRfTmFtZS5HQU1FX1NDT1JFX0NIQU5HRUQsIG9sZFZhbHVlLCB2YWx1ZSk7XG4gIH1cbiAgcHVibGljIGdldCBzY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fc2NvcmU7XG4gIH1cblxuICBwcml2YXRlIF9yZXZpdmVfdGltZXMgPSAwO1xuICBwdWJsaWMgc2V0IHJldml2ZV90aW1lcyh2YWx1ZSkge1xuICAgIHZhbHVlID0gdmFsdWUgPCAwID8gMCA6IHZhbHVlO1xuICAgIHRoaXMuX3Jldml2ZV90aW1lcyA9IHZhbHVlO1xuICB9XG4gIHB1YmxpYyBnZXQgcmV2aXZlX3RpbWVzKCkge1xuICAgIHJldHVybiB0aGlzLl9yZXZpdmVfdGltZXM7XG4gIH1cblxuICBwdWJsaWMgaW5pdCgpIHtcbiAgICB0aGlzLnJlc2V0KCk7XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoKSB7XG4gICAgdGhpcy5zY29yZSA9IDA7XG4gICAgdGhpcy5yZXZpdmVfdGltZXMgPSAwO1xuICAgIHRoaXMuYmFsbF9pbml0X2NvdW50ID0gNTtcbiAgICB0aGlzLmJhbGxfZmlyZV9zcGVlZCA9IDE7XG4gICAgdGhpcy5iYWxsX3Bvd2VyID0gMTtcbiAgfVxufVxuIl19