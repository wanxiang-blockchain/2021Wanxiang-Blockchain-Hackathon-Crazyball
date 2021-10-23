
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/ui/pop_mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3VpL3BvcF9tZ3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkNBQTJDO0FBQzNDLGdDQUE4QztBQUM5Qyw2Q0FBMkM7QUFDM0MsZ0RBQTZDO0FBQzdDLCtCQUFnQztBQUNoQyx3Q0FBdUM7QUFFdkM7SUFPSTtRQUNJLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLEVBQVUsQ0FBQztJQUN4QyxDQUFDO0lBRU0sZ0JBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDO1NBQzdCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFTyx3QkFBTSxHQUFkLFVBQWUsSUFBWTtRQUN2QixJQUFJLEVBQUUsR0FBVyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsR0FBRyxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLEtBQUssRUFBRSxDQUFDO1NBQzdEO1FBQ0QsT0FBTyxFQUFFLENBQUM7SUFDZCxDQUFDO0lBRUQsdUJBQUssR0FBTDtRQUNJLEtBQUssSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ25CO1FBQ0QsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFRCxzQkFBSSxHQUFKO1FBQ0ksT0FBTyxJQUFJLENB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QUEySEMsSUFBQTtBQTNIWSwwQkFBTztBQWtJcEIscUNBQXFDO0FBQ3hCLFFBQUEsU0FBUyxHQUFHO0lBQ3JCLFVBQVUsRUFBRSxnQ0FBZ0M7Q0FDL0MsQ0FBQTtBQVFELElBQWtCLGtCQU9qQjtBQVBELFdBQWtCLGtCQUFrQjtJQUNoQywyREFBUSxDQUFBO0lBQ1IsK0RBQU0sQ0FBQTtJQUNOLG1FQUFRLENBQUE7SUFDUiw2REFBSyxDQUFBO0lBQ0wsK0RBQU0sQ0FBQTtJQUNOLGlFQUFPLENBQUE7QUFDWCxDQUFDLEVBUGlCLGtCQUFrQixHQUFsQiwwQkFBa0IsS0FBbEIsMEJBQWtCLFFBT25DIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcG9vbF9tZ3IgfSBmcm9tIFwiLi4vcG9vbC9wb29sX21nclwiXG5pbXBvcnQgeyBoYW5kbGVyLCBnZW5faGFuZGxlciB9IGZyb20gXCIuLi91dGlsXCJcbmltcG9ydCB7IFBPUF9VSV9CQVNFIH0gZnJvbSBcIi4vcG9wX3VpX2Jhc2VcIlxuaW1wb3J0IHsgVGltZXJNZ3IgfSBmcm9tIFwiLi4vdGltZXIvdGltZXJfbWdyXCJcbmltcG9ydCAqIGFzIHV0aWxzIGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgeyBUd2VlbiB9IGZyb20gXCIuLi90d2Vlbi9Ud2VlblwiO1xuXG5leHBvcnQgY2xhc3MgcG9wX21nciB7XG4gICAgcHJpdmF0ZSBzdGF0aWMgaW5zdDogcG9wX21ncjtcbiAgICBwcml2YXRlIHVpX2NhY2hlOiBhbnk7ICAgICAgICAgICAvL3BhdGggPT4gcG9wX3VpXG4gICAgcHJpdmF0ZSB1aV9zdGFjazogQXJyYXk8c3RyaW5nPjsgLy91aSBzdGFja3NcbiAgICBwcml2YXRlIHVpX3Nob3dfaGFuZGxlcjogaGFuZGxlcjtcbiAgICBwcml2YXRlIHVpX2hpZGVfaGFuZGxlcjogaGFuZGxlcjtcblxuICAgIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMudWlfY2FjaGUgPSB7fTtcbiAgICAgICAgdGhpcy51aV9zdGFjayA9IG5ldyBBcnJheTxzdHJpbmc+KCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGdldF9pbnN0KCk6IHBvcF9tZ3Ige1xuICAgICAgICBpZiAoIXRoaXMuaW5zdCkge1xuICAgICAgICAgICAgdGhpcy5pbnN0ID0gbmV3IHBvcF9tZ3IoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5pbnN0O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0X3VpKHBhdGg6IHN0cmluZyk6IHBvcF91aSB7XG4gICAgICAgIGxldCB1aTogcG9wX3VpID0gdGhpcy51aV9jYWNoZVtwYXRoXTtcbiAgICAgICAgaWYgKCF1aSkge1xuICAgICAgICAgICAgdGhpcy51aV9jYWNoZVtwYXRoXSA9IHVpID0geyBub2RlOiBudWxsLCBpc19zaG93OiBmYWxzZSB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1aTtcbiAgICB9XG5cbiAgICBjbGVhcigpIHtcbiAgICAgICAgZm9yIChsZXQgcGF0aCBpbiB0aGlzLnVpX2NhY2hlKSB7XG4gICAgICAgICAgICB0aGlzLmhpZGUocGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy51aV9jYWNoZSA9IHt9O1xuICAgICAgICB0aGlzLnVpX3N0YWNrLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgcGVlaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudWlfc3RhY2tbdGhpcy51aV9zdGFjay5sZW5ndGggLSAxXTtcbiAgICB9XG5cbiAgICBzZXRfaGFuZGxlcnMob25fdWlfc2hvdzogaGFuZGxlciwgb25fdWlfaGlkZTogaGFuZGxlcikge1xuICAgICAgICB0aGlzLnVpX3Nob3dfaGFuZGxlciA9IG9uX3VpX3Nob3c7XG4gICAgICAgIHRoaXMudWlfaGlkZV9oYW5kbGVyID0gb25fdWlfaGlkZTtcbiAgICB9XG5cbiAgICBpc19zaG93KHBhdGg6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgICAgICBsZXQgdWk6IHBvcF91aSA9IHRoaXMudWlfY2FjaGVbcGF0aF07XG4gICAgICAgIHJldHVybiB1aSAhPSBudWxsO1xuICAgIH1cblxuICAgIHNob3cocGF0aDogc3RyaW5nLCB0cmFuc2l0aW9uPzogVUlfVFJBTlNJVElPTiwgLi4ucGFyYW1zOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICBsZXQgdWk6IHBvcF91aSA9IHRoaXMuZ2V0X3VpKHBhdGgpO1xuICAgICAgICBpZiAodWkuaXNfc2hvdykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHVpLmlzX3Nob3cgPSB0cnVlO1xuICAgICAgICBwb29sX21nci5nZXRfaW5zdCgpLmdldF91aShwYXRoLCBnZW5faGFuZGxlcigobm9kZTogY2MuTm9kZSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKCF1aS5pc19zaG93KSB7XG4gICAgICAgICAgICAgICAgcG9vbF9tZ3IuZ2V0X2luc3QoKS5wdXRfdWkocGF0aCwgbm9kZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdWkubm9kZSA9IG5vZGU7XG4gICAgICAgICAgICAvL+W6lOeUqOi/h+a4oeaViOaenFxuICAgICAgICAgICAgdGhpcy5hcHBseVRyYW5zaXRpb25FZmZlY3Qobm9kZSwgdHJhbnNpdGlvbik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRTY2VuZSgpLmdldENoaWxkQnlOYW1lKCdDYW52YXMnKS5nZXRDaGlsZEJ5TmFtZSgnbWlkX2xheWVyJykuYWRkQ2hpbGQobm9kZSk7XG4gICAgICAgICAgICBUaW1lck1nci5nZXRJbnN0KCkub25jZSgwLCB1dGlscy5nZW5faGFuZGxlcigoKSA9PiB7XG4gICAgICAgICAgICAgICAgLy/lnKjliqDliLDlnLrmma/lkIzkuIDluKfosIPnlKjnlYzpnaJzaG935pa55rOV77yM6K6h566X5L2N572u5Lya5LiN5YeG56Gu77yM5pWF57uf5LiA5Zyo5LiL5LiA5bin6LCD55Soc2hvd1xuICAgICAgICAgICAgICAgIGlmICghdWkuaXNfc2hvdykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCB1aV9iYXNlID0gbm9kZS5nZXRDb21wb25lbnQoUE9QX1VJX0JBU0UpIGFzIFBPUF9VSV9CQVNFO1xuICAgICAgICAgICAgICAgIHVpX2Jhc2UudWlfbmFtZSA9IHBhdGg7XG4gICAgICAgICAgICAgICAgdWlfYmFzZS5fX3Nob3dfXyguLi5wYXJhbXMpO1xuICAgICAgICAgICAgICAgIC8v6L+b5qCIXG4gICAgICAgICAgICAgICAgdGhpcy51aV9zdGFjay5wdXNoKHBhdGgpO1xuICAgICAgICAgICAgICAgIC8v6ZKp5a2Q5Ye95pWw6LCD55SoXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudWlfc2hvd19oYW5kbGVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudWlfc2hvd19oYW5kbGVyLmV4ZWMoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KSk7XG4gICAgICAgIH0sIHRoaXMpKTtcbiAgICB9XG5cbiAgICAvL+WFs+mXreeVjOmdouaXtuS4jWRlc3Ryb3nvvIzlj6rmmK/ku47niLboioLngrnnp7vpmaTlubbnvJPlrZhcbiAgICBoaWRlKHBhdGg6IHN0cmluZyk6IHZvaWQge1xuICAgICAgICBsZXQgdWk6IHBvcF91aSA9IHRoaXMudWlfY2FjaGVbcGF0aF07XG4gICAgICAgIGlmICghdWkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnVpX2NhY2hlW3BhdGhdID0gbnVsbDtcbiAgICAgICAgdWkuaXNfc2hvdyA9IGZhbHNlO1xuICAgICAgICBpZiAodWkubm9kZSkge1xuICAgICAgICAgICAgcG9vbF9tZ3IuZ2V0X2luc3QoKS5wdXRfdWkocGF0aCwgdWkubm9kZSk7XG4gICAgICAgICAgICAvL+iwg+eUqGhpZGVcbiAgICAgICAgICAgIGxldCB1aV9iYXNlID0gdWkubm9kZS5nZXRDb21wb25lbnQoUE9QX1VJX0JBU0UpIGFzIFBPUF9VSV9CQVNFO1xuICAgICAgICAgICAgdWlfYmFzZS5fX2hpZGVfXygpO1xuICAgICAgICAgICAgLy/lh7rmoIhcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJZHggPSB0aGlzLnVpX3N0YWNrLmxhc3RJbmRleE9mKHBhdGgpO1xuICAgICAgICAgICAgaWYgKGxhc3RJZHggIT0gLTEpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX3N0YWNrLnNwbGljZShsYXN0SWR4LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8v6ZKp5a2Q5Ye95pWw6LCD55SoXG4gICAgICAgICAgICBpZiAodGhpcy51aV9oaWRlX2hhbmRsZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVpX2hpZGVfaGFuZGxlci5leGVjKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBhcHBseVRyYW5zaXRpb25FZmZlY3Qobm9kZTogY2MuTm9kZSwgdHJhbnNpdGlvbjogVUlfVFJBTlNJVElPTikge1xuICAgICAgICBpZiAodHJhbnNpdGlvbiAmJiB0cmFuc2l0aW9uLnRyYW5zVHlwZSA9PSBVSV9UUkFOU0lUSU9OX1RZUEUuTm9uZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyYW5zaXRpb24gPSB0cmFuc2l0aW9uIHx8IHtcbiAgICAgICAgICAgIHRyYW5zVHlwZTogVUlfVFJBTlNJVElPTl9UWVBFLkZhZGVJbixcbiAgICAgICAgICAgIGR1cmF0aW9uOiA1MDAsXG4gICAgICAgIH07XG4gICAgICAgIHN3aXRjaCAodHJhbnNpdGlvbi50cmFuc1R5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgVUlfVFJBTlNJVElPTl9UWVBFLkZhZGVJbjpcbiAgICAgICAgICAgICAgICBUd2Vlbi5yZW1vdmVUd2VlbnMobm9kZSk7XG4gICAgICAgICAgICAgICAgbm9kZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgICAgICBUd2Vlbi5nZXQobm9kZSkudG8oeyBvcGFjaXR5OiAyNTUgfSwgdHJhbnNpdGlvbi5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbnR5cGUgcG9wX3VpID0ge1xuICAgIG5vZGU6IGNjLk5vZGU7XG4gICAgaXNfc2hvdzogYm9vbGVhbjtcbn1cblxuLy/nlYzpnaJwcmVmYWLot6/lvoTphY3nva4sIOebuOWvueS6jmFzc2V0cy9yZXNvdXJjZXPnm67lvZVcbmV4cG9ydCBjb25zdCBVSV9DT05GSUcgPSB7XG4gICAgb3ZlcmxheV9iZzogXCJwcmVmYWIvcGFuZWxzL3BhbmVsX292ZXJsYXlfYmdcIixcbn1cblxuaW50ZXJmYWNlIFVJX1RSQU5TSVRJT04ge1xuICAgIHRyYW5zVHlwZTogVUlfVFJBTlNJVElPTl9UWVBFO1xuICAgIHR3ZWVuRnVuYz86IEZ1bmN0aW9uO1xuICAgIGR1cmF0aW9uPzogbnVtYmVyO1xufVxuXG5leHBvcnQgY29uc3QgZW51bSBVSV9UUkFOU0lUSU9OX1RZUEUge1xuICAgIE5vbmUgPSAxLFxuICAgIEZhZGVJbixcbiAgICBEcm9wRG93bixcbiAgICBQb3BVcCxcbiAgICBMZWZ0SW4sXG4gICAgUmlnaHRJbixcbn0iXX0=