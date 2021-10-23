"use strict";
cc._RF.push(module, '424697+0GpMebIfgAZGNA0h', 'pop_mgr');
// src/common/ui/pop_mgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UI_TRANSITION_TYPE = exports.UI_CONFIG = exports.pop_mgr = void 0;
var pool_mgr_1 = require("../pool/pool_mgr");
var util_1 = require("../util");
var pop_ui_base_1 = require("./pop_ui_base");
var timer_mgr_1 = require("../timer/timer_mgr");
var utils = require("../util");
var Tween_1 = require("../tween/Tween");
var pop_mgr = /** @class */ (function () {
    function pop_mgr() {
        this.ui_cache = {};
        this.ui_stack = new Array();
    }
    pop_mgr.get_inst = function () {
        if (!this.inst) {
            this.inst = new pop_mgr();
        }
        return this.inst;
    };
    pop_mgr.prototype.get_ui = function (path) {
        var ui = this.ui_cache[path];
        if (!ui) {
            this.ui_cache[path] = ui = { node: null, is_show: false };
        }
        return ui;
    };
    pop_mgr.prototype.clear = function () {
        for (var path in this.ui_cache) {
            this.hide(path);
        }
        this.ui_cache = {};
        this.ui_stack.length = 0;
    };
    pop_mgr.prototype.peek = function () {
        return this.ui_stack[this.ui_stack.length - 1];
    };
    pop_mgr.prototype.set_handlers = function (on_ui_show, on_ui_hide) {
        this.ui_show_handler = on_ui_show;
        this.ui_hide_handler = on_ui_hide;
    };
    pop_mgr.prototype.is_show = function (path) {
        var ui = this.ui_cache[path];
        return ui != null;
    };
    pop_mgr.prototype.show = function (path, transition) {
        var _this = this;
        var params = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            params[_i - 2] = arguments[_i];
        }
        var ui = this.get_ui(path);
        if (ui.is_show) {
            return;
        }
        ui.is_show = true;
        pool_mgr_1.pool_mgr.get_inst().get_ui(path, util_1.gen_handler(function (node) {
            if (!ui.is_show) {
                pool_mgr_1.pool_mgr.get_inst().put_ui(path, node);
                return;
            }
            ui.node = node;
            //应用过渡效果
            _this.applyTransitionEffect(node, transition);
            cc.director.getScene().getChildByName('Canvas').getChildByName('mid_layer').addChild(node);
            timer_mgr_1.TimerMgr.getInst().once(0, utils.gen_handler(function () {
                //在加到场景同一帧调用界面show方法，计算位置会不准确，故统一在下一帧调用show
                if (!ui.is_show) {
                    return;
                }
                var ui_base = node.getComponent(pop_ui_base_1.POP_UI_BASE);
                ui_base.ui_name = path;
                ui_base.__show__.apply(ui_base, params);
                //进栈
                _this.ui_stack.push(path);
                //钩子函数调用
                if (_this.ui_show_handler) {
                    _this.ui_show_handler.exec();
                }
            }));
        }, this));
    };
    //关闭界面时不destroy，只是从父节点移除并缓存
    pop_mgr.prototype.hide = function (path) {
        var ui = this.ui_cache[path];
        if (!ui) {
            return;
        }
        this.ui_cache[path] = null;
        ui.is_show = false;
        if (ui.node) {
            pool_mgr_1.pool_mgr.get_inst().put_ui(path, ui.node);
            //调用hide
            var ui_base = ui.node.getComponent(pop_ui_base_1.POP_UI_BASE);
            ui_base.__hide__();
            //出栈
            var lastIdx = this.ui_stack.lastIndexOf(path);
            if (lastIdx != -1) {
                this.ui_stack.splice(lastIdx, 1);
            }
            //钩子函数调用
            if (this.ui_hide_handler) {
                this.ui_hide_handler.exec();
            }
        }
    };
    pop_mgr.prototype.applyTransitionEffect = function (node, transition) {
        if (transition && transition.transType == UI_TRANSITION_TYPE.None) {
            return;
        }
        transition = transition || {
            transType: UI_TRANSITION_TYPE.FadeIn,
            duration: 500,
        };
        switch (transition.transType) {
            case UI_TRANSITION_TYPE.FadeIn:
                Tween_1.Tween.removeTweens(node);
                node.opacity = 0;
                Tween_1.Tween.get(node).to({ opacity: 255 }, transition.duration);
                break;
        }
    };
    return pop_mgr;
}());
exports.pop_mgr = pop_mgr;
//界面prefab路径配置, 相对于assets/resources目录
exports.UI_CONFIG = {
    overlay_bg: "prefab/panels/panel_overlay_bg",
};
var UI_TRANSITION_TYPE;
(function (UI_TRANSITION_TYPE) {
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["None"] = 1] = "None";
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["FadeIn"] = 2] = "FadeIn";
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["DropDown"] = 3] = "DropDown";
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["PopUp"] = 4] = "PopUp";
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["LeftIn"] = 5] = "LeftIn";
    UI_TRANSITION_TYPE[UI_TRANSITION_TYPE["RightIn"] = 6] = "RightIn";
})(UI_TRANSITION_TYPE = exports.UI_TRANSITION_TYPE || (exports.UI_TRANSITION_TYPE = {}));

cc._RF.pop();