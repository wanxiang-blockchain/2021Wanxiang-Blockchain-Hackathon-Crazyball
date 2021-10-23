"use strict";
cc._RF.push(module, 'e2e68FLOYBOaqRk0bNgNIyc', 'pop_ui_base');
// src/common/ui/pop_ui_base.ts

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
exports.POP_UI_BASE = void 0;
var pop_mgr_1 = require("./pop_mgr");
var pool_mgr_1 = require("../pool/pool_mgr");
var util_1 = require("../util");
var Audio = require("../../common/audio/AudioPlayer");
// import { wxHttpClient } from "../../common/wxapi/index"
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var pop_overlay_bg = "panel_overlay_bg";
var POP_UI_BASE = /** @class */ (function (_super) {
    __extends(POP_UI_BASE, _super);
    function POP_UI_BASE() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.btn_close = null;
        return _this;
    }
    Object.defineProperty(POP_UI_BASE.prototype, "ui_name", {
        /*由于pop_mgr缓存策略，此方法只会在首次打开界面时调用1次, 缓存以后再打开不会执行onLoad.
            因此不能用来做每次打开界面时的初始化工作
        */
        // onLoad()
        // {
        //     cc.log("on_load 00000000000000000");
        // }
        set: function (value) {
            this._ui_name = value;
        },
        enumerable: false,
        configurable: true
    });
    /**
     * 只能由pop_mgr调用
     */
    POP_UI_BASE.prototype.__show__ = function () {
        var _this = this;
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
        // cc.log("show", this._ui_name, ...params);
        if (this.btn_close) {
            this.btn_close.node.on(cc.Node.EventType.TOUCH_END, this.onCloseBtnTouch, this);
        }
        this.is_show = true;
        this.on_show.apply(this, params);
        //添加遮罩背景
        var overlay = this.node.getChildByName(pop_overlay_bg);
        if (!overlay) {
            pool_mgr_1.pool_mgr.get_inst().get_ui(pop_mgr_1.UI_CONFIG.overlay_bg, util_1.gen_handler(function (bg_node) {
                if (!_this.is_show || _this.node.getChildByName(pop_overlay_bg)) {
                    pool_mgr_1.pool_mgr.get_inst().put_ui(pop_mgr_1.UI_CONFIG.overlay_bg, bg_node);
                    return;
                }
                bg_node.name = pop_overlay_bg;
                _this.node.addChild(bg_node);
                bg_node.setSiblingIndex(0);
            }, this));
        }
    };
    /**
     * 只能由pop_mgr调用
     */
    POP_UI_BASE.prototype.__hide__ = function () {
        cc.log("hide", this._ui_name);
        if (this.btn_close) {
            this.btn_close.node.off(cc.Node.EventType.TOUCH_END, this.onCloseBtnTouch, this);
        }
        this.is_show = false;
        this.on_hide();
        // wxHttpClient.unregisterCtxHandler(this);
    };
    /**弹出界面时调用，且在onLoad之后调用，可以用来做一些初始化工作*/
    POP_UI_BASE.prototype.on_show = function () {
        var params = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            params[_i] = arguments[_i];
        }
    };
    /**关闭界面时调用，用来做清理工作*/
    POP_UI_BASE.prototype.on_hide = function () {
    };
    /**关闭自身*/
    POP_UI_BASE.prototype.hide = function () {
        pop_mgr_1.pop_mgr.get_inst().hide(this._ui_name);
    };
    POP_UI_BASE.prototype.onCloseBtnTouch = function () {
        this.hide();
        Audio.AudioPlayer.ins().play_sound(Audio.AUDIO_CONFIG.Audio_Btn);
    };
    __decorate([
        property(cc.Button)
    ], POP_UI_BASE.prototype, "btn_close", void 0);
    POP_UI_BASE = __decorate([
        ccclass
    ], POP_UI_BASE);
    return POP_UI_BASE;
}(cc.Component));
exports.POP_UI_BASE = POP_UI_BASE;

cc._RF.pop();