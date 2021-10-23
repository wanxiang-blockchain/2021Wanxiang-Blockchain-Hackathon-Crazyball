
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/ui/pop_ui_base.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3VpL3BvcF91aV9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBOEM7QUFDOUMsNkNBQTJDO0FBQzNDLGdDQUE4QztBQUM5QyxzREFBdUQ7QUFDdkQsMERBQTBEO0FBRXBELElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLElBQU0sY0FBYyxHQUFXLGtCQUFrQixDQUFDO0FBR2xEO0lBQWlDLCtCQUFZO0lBQTdDO1FBQUEscUVBK0VDO1FBNUVHLGVBQVMsR0FBYyxJQUFJLENBQUM7O0lBNEVoQyxDQUFDO0lBOURHLHNCQUFJLGdDQUFPO1FBUlg7O1VBRUU7UUFDRixXQUFXO1FBQ1gsSUFBSTtRQUNKLDJDQUEyQztRQUMzQyxJQUFJO2FBRUosVUFBWSxLQUFhO1lBQ3JCLElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxDQUFDO1FBQzFCLENBQUM7OztPQUFBO0lBRUQ7O09BRUc7SUFDSCw4QkFBUSxHQUFSO1FBQUEsaUJBcUJDO1FBckJRLGdCQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsMkJBQWdCOztRQUNyQiw0Q0FBNEM7UUFDNUMsSUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLGVBQWUsRUFBRSxJQUFJLENBQUMsQ0FBQztTQUNuRjtRQUNELElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxPQUFPLE9BQVosSUFBSSxFQUFZLE1BQU0sRUFBRTtRQUV4QixRQUFRO1FBQ1IsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sRUFBRTtZQUNWLG1CQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFTLENBQUMsVUFBVSxFQUFFLGtCQUFXLENBQUMsVUFBQyxPQUFnQjtnQkFDMUUsSUFBSSxDQUFDLEtBQUksQ0FBQyxPQUFPLElBQUksS0FBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsY0FBYyxDQUFDLEVBQUU7b0JBQzNELG1CQUFRLENBQUMsUUFBUSxFQUFFLENBQUMsTUFBTSxDQUFDLG1CQUFTLENBQUMsVUFBVSxFQUFFLE9BQU8sQ0FBQyxDQUFDO29CQUMxRCxPQUFPO2lCQUNWO2dCQUNELE9BQU8sQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFDO2dCQUM5QixLQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDNUIsT0FBTyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMvQixDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsQ0FBQztTQUNiO0lBQ0wsQ0FBQztJQUVEOztPQUVHO0lBQ0gsOEJBQVEsR0FBUjtRQUNJLEVBQUUsQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUM5QixJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQ3BGO1FBQ0QsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUM7UUFDckIsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2YsMkNBQTJDO0lBQy9DLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsNkJBQU8sR0FBUDtRQUFRLGdCQUFnQjthQUFoQixVQUFnQixFQUFoQixxQkFBZ0IsRUFBaEIsSUFBZ0I7WUFBaEIsMkJBQWdCOztJQUV4QixDQUFDO0lBRUQsb0JBQW9CO0lBQ3BCLDZCQUFPLEdBQVA7SUFFQSxDQUFDO0lBRUQsU0FBUztJQUNULDBCQUFJLEdBQUo7UUFDSSxpQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDM0MsQ0FBQztJQUVELHFDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWixLQUFLLENBQUMsV0FBVyxDQUFDLEdBQUcsRUFBRSxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3JFLENBQUM7SUEzRUQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztrREFDUTtJQUhuQixXQUFXO1FBRHZCLE9BQU87T0FDSyxXQUFXLENBK0V2QjtJQUFELGtCQUFDO0NBL0VELEFBK0VDLENBL0VnQyxFQUFFLENBQUMsU0FBUyxHQStFNUM7QUEvRVksa0NBQVciLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBwb3BfbWdyLCBVSV9DT05GSUcgfSBmcm9tIFwiLi9wb3BfbWdyXCJcbmltcG9ydCB7IHBvb2xfbWdyIH0gZnJvbSBcIi4uL3Bvb2wvcG9vbF9tZ3JcIlxuaW1wb3J0IHsgaGFuZGxlciwgZ2VuX2hhbmRsZXIgfSBmcm9tIFwiLi4vdXRpbFwiXG5pbXBvcnQgKiBhcyBBdWRpbyBmcm9tIFwiLi4vLi4vY29tbW9uL2F1ZGlvL0F1ZGlvUGxheWVyXCJcbi8vIGltcG9ydCB7IHd4SHR0cENsaWVudCB9IGZyb20gXCIuLi8uLi9jb21tb24vd3hhcGkvaW5kZXhcIlxuXG5jb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuY29uc3QgcG9wX292ZXJsYXlfYmc6IHN0cmluZyA9IFwicGFuZWxfb3ZlcmxheV9iZ1wiO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGNsYXNzIFBPUF9VSV9CQVNFIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5CdXR0b24pXG4gICAgYnRuX2Nsb3NlOiBjYy5CdXR0b24gPSBudWxsO1xuXG4gICAgLy/nlYzpnaLlkI3lrZfvvIxVSV9DT05GSUcuKlxuICAgIHByaXZhdGUgX3VpX25hbWU6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgaXNfc2hvdzogYm9vbGVhbjtcblxuICAgIC8q55Sx5LqOcG9wX21ncue8k+WtmOetlueVpe+8jOatpOaWueazleWPquS8muWcqOmmluasoeaJk+W8gOeVjOmdouaXtuiwg+eUqDHmrKEsIOe8k+WtmOS7peWQjuWGjeaJk+W8gOS4jeS8muaJp+ihjG9uTG9hZC5cbiAgICAgICAg5Zug5q2k5LiN6IO955So5p2l5YGa5q+P5qyh5omT5byA55WM6Z2i5pe255qE5Yid5aeL5YyW5bel5L2cXG4gICAgKi9cbiAgICAvLyBvbkxvYWQoKVxuICAgIC8vIHtcbiAgICAvLyAgICAgY2MubG9nKFwib25fbG9hZCAwMDAwMDAwMDAwMDAwMDAwMFwiKTtcbiAgICAvLyB9XG5cbiAgICBzZXQgdWlfbmFtZSh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX3VpX25hbWUgPSB2YWx1ZTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDlj6rog73nlLFwb3BfbWdy6LCD55SoXG4gICAgICovXG4gICAgX19zaG93X18oLi4ucGFyYW1zOiBhbnlbXSk6IHZvaWQge1xuICAgICAgICAvLyBjYy5sb2coXCJzaG93XCIsIHRoaXMuX3VpX25hbWUsIC4uLnBhcmFtcyk7XG4gICAgICAgIGlmICh0aGlzLmJ0bl9jbG9zZSkge1xuICAgICAgICAgICAgdGhpcy5idG5fY2xvc2Uubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMub25DbG9zZUJ0blRvdWNoLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlzX3Nob3cgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uX3Nob3coLi4ucGFyYW1zKTtcblxuICAgICAgICAvL+a3u+WKoOmBrue9qeiDjOaZr1xuICAgICAgICBsZXQgb3ZlcmxheTogY2MuTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShwb3Bfb3ZlcmxheV9iZyk7XG4gICAgICAgIGlmICghb3ZlcmxheSkge1xuICAgICAgICAgICAgcG9vbF9tZ3IuZ2V0X2luc3QoKS5nZXRfdWkoVUlfQ09ORklHLm92ZXJsYXlfYmcsIGdlbl9oYW5kbGVyKChiZ19ub2RlOiBjYy5Ob2RlKTogdm9pZCA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLmlzX3Nob3cgfHwgdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKHBvcF9vdmVybGF5X2JnKSkge1xuICAgICAgICAgICAgICAgICAgICBwb29sX21nci5nZXRfaW5zdCgpLnB1dF91aShVSV9DT05GSUcub3ZlcmxheV9iZywgYmdfbm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYmdfbm9kZS5uYW1lID0gcG9wX292ZXJsYXlfYmc7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJnX25vZGUpO1xuICAgICAgICAgICAgICAgIGJnX25vZGUuc2V0U2libGluZ0luZGV4KDApO1xuICAgICAgICAgICAgfSwgdGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Y+q6IO955SxcG9wX21ncuiwg+eUqFxuICAgICAqL1xuICAgIF9faGlkZV9fKCk6IHZvaWQge1xuICAgICAgICBjYy5sb2coXCJoaWRlXCIsIHRoaXMuX3VpX25hbWUpO1xuICAgICAgICBpZiAodGhpcy5idG5fY2xvc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYnRuX2Nsb3NlLm5vZGUub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5vbkNsb3NlQnRuVG91Y2gsIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaXNfc2hvdyA9IGZhbHNlO1xuICAgICAgICB0aGlzLm9uX2hpZGUoKTtcbiAgICAgICAgLy8gd3hIdHRwQ2xpZW50LnVucmVnaXN0ZXJDdHhIYW5kbGVyKHRoaXMpO1xuICAgIH1cblxuICAgIC8qKuW8ueWHuueVjOmdouaXtuiwg+eUqO+8jOS4lOWcqG9uTG9hZOS5i+WQjuiwg+eUqO+8jOWPr+S7peeUqOadpeWBmuS4gOS6m+WIneWni+WMluW3peS9nCovXG4gICAgb25fc2hvdyguLi5wYXJhbXM6IGFueVtdKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICAvKirlhbPpl63nlYzpnaLml7bosIPnlKjvvIznlKjmnaXlgZrmuIXnkIblt6XkvZwqL1xuICAgIG9uX2hpZGUoKTogdm9pZCB7XG5cbiAgICB9XG5cbiAgICAvKirlhbPpl63oh6rouqsqL1xuICAgIGhpZGUoKTogdm9pZCB7XG4gICAgICAgIHBvcF9tZ3IuZ2V0X2luc3QoKS5oaWRlKHRoaXMuX3VpX25hbWUpO1xuICAgIH1cblxuICAgIG9uQ2xvc2VCdG5Ub3VjaCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5oaWRlKCk7XG4gICAgICAgIEF1ZGlvLkF1ZGlvUGxheWVyLmlucygpLnBsYXlfc291bmQoQXVkaW8uQVVESU9fQ09ORklHLkF1ZGlvX0J0bik7XG4gICAgfVxufSJdfQ==