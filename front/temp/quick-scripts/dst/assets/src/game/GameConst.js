
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/GameConst.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '39d7ekGOCtHeZcPBzFEwSxV', 'GameConst');
// src/game/GameConst.ts

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
var SingletonClass_1 = require("../common/base/SingletonClass");
var theme_configGameConst = /** @class */ (function (_super) {
    __extends(theme_configGameConst, _super);
    function theme_configGameConst() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.ball_init_x = 0;
        _this.ball_init_y = -540;
        _this.ball_speed = 1000;
        _this.ball_radius = 15;
        _this.brick_radius = 43;
        _this.brick_init_x = 0;
        _this.brick_init_y = 600;
        _this.max_ball_init_count = 60;
        _this.max_ball_fire_speed = 10;
        _this.theme_price = 500;
        _this.sign_interval_sec = 3600;
        _this.theme_config = [
            {
                color: [
                    cc.color(242, 242, 242),
                    cc.color(24, 225, 156),
                    cc.color(20, 186, 242),
                    cc.color(188, 85, 250),
                    cc.color(238, 196, 39),
                    cc.color(244, 110, 57),
                    cc.color(199, 53, 67),
                ],
                theme: 'theme0'
            }
        ];
        _this.brick_type_percent = [
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            0,
            1,
            1,
            1,
            1,
            1,
            1,
            2,
            2,
            2,
            2,
            2,
            3,
            4,
            5,
            6,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            7,
            8,
            8,
            9,
            10 //星2 六
        ];
        return _this;
    }
    theme_configGameConst.ins = function () {
        return _super.ins.call(this);
    };
    return theme_configGameConst;
}(SingletonClass_1.default));
exports.default = theme_configGameConst;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9HYW1lQ29uc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsZ0VBQTJEO0FBRTNEO0lBQW1ELHlDQUFjO0lBQWpFO1FBQUEscUVBdUlDO1FBbElVLGlCQUFXLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLGlCQUFXLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDbkIsZ0JBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEIsaUJBQVcsR0FBRyxFQUFFLENBQUM7UUFFakIsa0JBQVksR0FBRyxFQUFFLENBQUM7UUFDbEIsa0JBQVksR0FBRyxDQUFDLENBQUM7UUFDakIsa0JBQVksR0FBRyxHQUFHLENBQUM7UUFFbkIseUJBQW1CLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLHlCQUFtQixHQUFHLEVBQUUsQ0FBQztRQUV6QixpQkFBVyxHQUFHLEdBQUcsQ0FBQztRQUNsQix1QkFBaUIsR0FBRyxJQUFJLENBQUM7UUFFekIsa0JBQVksR0FBMkM7WUFDOUQ7Z0JBQ0UsS0FBSyxFQUFFO29CQUNMLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7b0JBQ3ZCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxFQUFFLEdBQUcsRUFBRSxHQUFHLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxHQUFHLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUM7b0JBQ3RCLEVBQUUsQ0FBQyxLQUFLLENBQUMsR0FBRyxFQUFFLEVBQUUsRUFBRSxFQUFFLENBQUM7aUJBQ3RCO2dCQUNELEtBQUssRUFBRSxRQUFRO2FBQ2hCO1NBQ0YsQ0FBQztRQUVPLHdCQUFrQixHQUFHO1lBQzVCLENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxDQUFDO1lBQ0QsQ0FBQztZQUNELENBQUM7WUFDRCxFQUFFLENBQUMsTUFBTTtTQUNWLENBQUM7O0lBQ0osQ0FBQztJQXRJUSx5QkFBRyxHQUFWO1FBQ0UsT0FBTyxPQUFNLEdBQUcsV0FBZSxDQUFDO0lBQ2xDLENBQUM7SUFvSUgsNEJBQUM7QUFBRCxDQXZJQSxBQXVJQyxDQXZJa0Qsd0JBQWMsR0F1SWhFIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFNpbmdsZXRvbkNsYXNzIGZyb20gJy4uL2NvbW1vbi9iYXNlL1NpbmdsZXRvbkNsYXNzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgdGhlbWVfY29uZmlnR2FtZUNvbnN0IGV4dGVuZHMgU2luZ2xldG9uQ2xhc3Mge1xuICBzdGF0aWMgaW5zKCkge1xuICAgIHJldHVybiBzdXBlci5pbnMoKSBhcyBHYW1lQ29uc3Q7XG4gIH1cblxuICByZWFkb25seSBiYWxsX2luaXRfeCA9IDA7XG4gIHJlYWRvbmx5IGJhbGxfaW5pdF95ID0gLTU0MDtcbiAgcmVhZG9ubHkgYmFsbF9zcGVlZCA9IDEwMDA7XG4gIHJlYWRvbmx5IGJhbGxfcmFkaXVzID0gMTU7XG5cbiAgcmVhZG9ubHkgYnJpY2tfcmFkaXVzID0gNDM7XG4gIHJlYWRvbmx5IGJyaWNrX2luaXRfeCA9IDA7XG4gIHJlYWRvbmx5IGJyaWNrX2luaXRfeSA9IDYwMDtcblxuICByZWFkb25seSBtYXhfYmFsbF9pbml0X2NvdW50ID0gNjA7XG4gIHJlYWRvbmx5IG1heF9iYWxsX2ZpcmVfc3BlZWQgPSAxMDtcblxuICByZWFkb25seSB0aGVtZV9wcmljZSA9IDUwMDtcbiAgcmVhZG9ubHkgc2lnbl9pbnRlcnZhbF9zZWMgPSAzNjAwO1xuXG4gIHJlYWRvbmx5IHRoZW1lX2NvbmZpZzogeyBjb2xvcjogY2MuQ29sb3JbXTsgdGhlbWU6IHN0cmluZyB9W10gPSBbXG4gICAge1xuICAgICAgY29sb3I6IFtcbiAgICAgICAgY2MuY29sb3IoMjQyLCAyNDIsIDI0MiksXG4gICAgICAgIGNjLmNvbG9yKDI0LCAyMjUsIDE1NiksXG4gICAgICAgIGNjLmNvbG9yKDIwLCAxODYsIDI0MiksXG4gICAgICAgIGNjLmNvbG9yKDE4OCwgODUsIDI1MCksXG4gICAgICAgIGNjLmNvbG9yKDIzOCwgMTk2LCAzOSksXG4gICAgICAgIGNjLmNvbG9yKDI0NCwgMTEwLCA1NyksXG4gICAgICAgIGNjLmNvbG9yKDE5OSwgNTMsIDY3KSxcbiAgICAgIF0sXG4gICAgICB0aGVtZTogJ3RoZW1lMCdcbiAgICB9XG4gIF07XG5cbiAgcmVhZG9ubHkgYnJpY2tfdHlwZV9wZXJjZW50ID0gW1xuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLCAvL+ato+aWueW9olxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMCxcbiAgICAwLFxuICAgIDAsXG4gICAgMSxcbiAgICAxLFxuICAgIDEsXG4gICAgMSxcbiAgICAxLFxuICAgIDEsIC8v5ZyGXG4gICAgMixcbiAgICAyLFxuICAgIDIsXG4gICAgMixcbiAgICAyLCAvL+WFrei+ueW9olxuICAgIDMsIC8v5LiJ6KeSMVxuICAgIDQsIC8v5LiJ6KeSMlxuICAgIDUsIC8v5LiJ6KeSM1xuICAgIDYsIC8v5LiJ6KeSNFxuICAgIDcsXG4gICAgNyxcbiAgICA3LFxuICAgIDcsXG4gICAgNyxcbiAgICA3LFxuICAgIDcsXG4gICAgNyxcbiAgICA3LCAvL+eQg1xuICAgIDgsXG4gICAgOCwgLy/mmJ8xIOato1xuICAgIDksIC8v5pifMSDlnIZcbiAgICAxMCAvL+aYnzIg5YWtXG4gIF07XG59XG4iXX0=