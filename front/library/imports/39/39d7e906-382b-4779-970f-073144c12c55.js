"use strict";
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