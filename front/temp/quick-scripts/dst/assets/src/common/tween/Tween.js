
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/tween/Tween.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28890U/NmdCwqWMUik18OnQ', 'Tween');
// src/common/tween/Tween.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ease = exports.Tween = void 0;
var timer_mgr_1 = require("../timer/timer_mgr");
var util_1 = require("../util");
//////////////////////////////////////////////////////////////////////////////////////
//
//  Copyright (c) 2014-present, Egret Technology.
//  All rights reserved.
//  Redistribution and use in source and binary forms, with or without
//  modification, are permitted provided that the following conditions are met:
//
//     * Redistributions of source code must retain the above copyright
//       notice, this list of conditions and the following disclaimer.
//     * Redistributions in binary form must reproduce the above copyright
//       notice, this list of conditions and the following disclaimer in the
//       documentation and/or other materials provided with the distribution.
//     * Neither the name of the Egret nor the
//       names of its contributors may be used to endorse or promote products
//       derived from this software without specific prior written permission.
//
//  THIS SOFTWARE IS PROVIDED BY EGRET AND CONTRIBUTORS "AS IS" AND ANY EXPRESS
//  OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES
//  OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED.
//  IN NO EVENT SHALL EGRET AND CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT,
//  INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
//  LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;LOSS OF USE, DATA,
//  OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
//  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
//  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE,
//  EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
//
//////////////////////////////////////////////////////////////////////////////////////
/**
 * Tween is the animation easing class of Egret
 * @see http://edn.com/cn/docs/page/576 Tween ease animation
 * @version Egret 2.4
 * @platform Web,Native
 * @includeExample extension/tween/Tween.ts
 * @language en_US
 */
/**
 * Tween是Egret的动画缓动类
 * @see http://edn.com/cn/docs/page/576 Tween缓动动画
 * @version Egret 2.4
 * @platform Web,Native
 * @includeExample extension/tween/Tween.ts
 * @language zh_CN
 */
var Tween = /** @class */ (function () {
    /**
     * 创建一个 Tween 对象
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    function Tween(target, props, pluginData) {
        /**
         * @private
         */
        this._target = null;
        /**
         * @private
         */
        this._useTicks = false;
        /**
         * @private
         */
        this.ignoreGlobalPause = false;
        /**
         * @private
         */
        this.loop = false;
        /**
         * @private
         */
        this.pluginData = null;
        /**
         * @private
         */
        this._steps = null;
        /**
         * @private
         */
        this.paused = false;
        /**
         * @private
         */
        this.duration = 0;
        /**
         * @private
         */
        this._prevPos = -1;
        /**
         * @private
         */
        this.position = null;
        /**
         * @private
         */
        this._prevPosition = 0;
        /**
         * @private
         */
        this._stepPosition = 0;
        /**
         * @private
         */
        this.passive = false;
        this.initialize(target, props, pluginData);
    }
    /**
     * Activate an object and add a Tween animation to the object
     * @param target {any} The object to be activated
     * @param props {any} Parameters, support loop onChange onChangeObj
     * @param pluginData {any} Write realized
     * @param override {boolean} Whether to remove the object before adding a tween, the default value false
     * Not recommended, you can use Tween.removeTweens(target) instead.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 激活一个对象，对其添加 Tween 动画
     * @param target {any} 要激活 Tween 的对象
     * @param props {any} 参数，支持loop(循环播放) onChange(变化函数) onChangeObj(变化函数作用域)
     * @param pluginData {any} 暂未实现
     * @param override {boolean} 是否移除对象之前添加的tween，默认值false。
     * 不建议使用，可使用 Tween.removeTweens(target) 代替。
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.get = function (target, props, pluginData, override) {
        if (pluginData === void 0) { pluginData = null; }
        if (override === void 0) { override = false; }
        if (override) {
            Tween.removeTweens(target);
        }
        return new Tween(target, props, pluginData);
    };
    /**
     * Delete all Tween animations from an object
     * @param target The object whose Tween to be deleted
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 删除一个对象上的全部 Tween 动画
     * @param target  需要移除 Tween 的对象
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.removeTweens = function (target) {
        if (!target.tween_count) {
            return;
        }
        var tweens = Tween._tweens;
        for (var i = tweens.length - 1; i >= 0; i--) {
            if (tweens[i]._target == target) {
                tweens[i].paused = true;
                tweens.splice(i, 1);
            }
        }
        target.tween_count = 0;
    };
    /**
     * Pause all Tween animations of a certain object
     * @param target The object whose Tween to be paused
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 暂停某个对象的所有 Tween
     * @param target 要暂停 Tween 的对象
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.pauseTweens = function (target) {
        if (!target.tween_count) {
            return;
        }
        var tweens = Tween._tweens;
        for (var i = tweens.length - 1; i >= 0; i--) {
            if (tweens[i]._target == target) {
                tweens[i].paused = true;
            }
        }
    };
    /**
     * Resume playing all easing of a certain object
     * @param target The object whose Tween to be resumed
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 继续播放某个对象的所有缓动
     * @param target 要继续播放 Tween 的对象
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.resumeTweens = function (target) {
        if (!target.tween_count) {
            return;
        }
        var tweens = Tween._tweens;
        for (var i = tweens.length - 1; i >= 0; i--) {
            if (tweens[i]._target == target) {
                tweens[i].paused = false;
            }
        }
    };
    /**
     * @private
     *
     * @param delta ms
     * @param paused
     */
    Tween.tick = function (delta, paused) {
        if (paused === void 0) { paused = false; }
        var tweens = Tween._tweens.concat();
        for (var i = tweens.length - 1; i >= 0; i--) {
            var tween = tweens[i];
            if ((paused && !tween.ignoreGlobalPause) || tween.paused) {
                continue;
            }
            tween.$tick(tween._useTicks ? 1 : delta);
        }
    };
    /**
     * @private
     *
     * @param tween
     * @param value
     */
    Tween._register = function (tween, value) {
        var target = tween._target;
        var tweens = Tween._tweens;
        if (value) {
            if (target) {
                target.tween_count = target.tween_count > 0 ? target.tween_count + 1 : 1;
            }
            tweens.push(tween);
            if (!Tween._inited) {
                Tween._inited = true;
                timer_mgr_1.TimerMgr.getInst().add_updater(util_1.gen_handler(function (t) {
                    Tween.tick(t * 1000);
                }));
            }
        }
        else {
            if (target) {
                target.tween_count--;
            }
            var i = tweens.length;
            while (i--) {
                if (tweens[i] == tween) {
                    tweens.splice(i, 1);
                    return;
                }
            }
        }
    };
    /**
     * Delete all Tween
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 删除所有 Tween
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.removeAllTweens = function () {
        var tweens = Tween._tweens;
        for (var i = 0, l = tweens.length; i < l; i++) {
            var tween = tweens[i];
            tween.paused = true;
            tween._target.tween_count = 0;
        }
        tweens.length = 0;
    };
    /**
     * @private
     *
     * @param target
     * @param props
     * @param pluginData
     */
    Tween.prototype.initialize = function (target, props, pluginData) {
        this._target = target;
        if (props) {
            this._useTicks = props.useTicks;
            this.ignoreGlobalPause = props.ignoreGlobalPause;
            this.loop = props.loop;
            // props.onChange && this.addEventListener("change", props.onChange, props.onChangeObj);
            this.onChange = props.onChange;
            this.onChangeObj = props.onChangeObj;
            if (props.override) {
                Tween.removeTweens(target);
            }
        }
        this.pluginData = pluginData || {};
        this._curQueueProps = {};
        this._initQueueProps = {};
        this._steps = [];
        if (props && props.paused) {
            this.paused = true;
        }
        else {
            Tween._register(this, true);
        }
        if (props && props.position != null) {
            this.setPosition(props.position, Tween.NONE);
        }
    };
    /**
     * @private
     *
     * @param value
     * @param actionsMode
     * @returns
     */
    Tween.prototype.setPosition = function (value, actionsMode) {
        if (actionsMode === void 0) { actionsMode = 1; }
        if (value < 0) {
            value = 0;
        }
        //正常化位置
        var t = value;
        var end = false;
        if (t >= this.duration) {
            if (this.loop) {
                var newTime = t % this.duration;
                if (t > 0 && newTime === 0) {
                    t = this.duration;
                }
                else {
                    t = newTime;
                }
            }
            else {
                t = this.duration;
                end = true;
            }
        }
        if (t == this._prevPos) {
            return end;
        }
        if (end) {
            this.setPaused(true);
        }
        var prevPos = this._prevPos;
        this.position = this._prevPos = t;
        this._prevPosition = value;
        if (this._target) {
            if (this._steps.length > 0) {
                // 找到新的tween
                var l = this._steps.length;
                var stepIndex = -1;
                for (var i = 0; i < l; i++) {
                    if (this._steps[i].type == "step") {
                        stepIndex = i;
                        if (this._steps[i].t <= t && this._steps[i].t + this._steps[i].d >= t) {
                            break;
                        }
                    }
                }
                for (var i = 0; i < l; i++) {
                    if (this._steps[i].type == "action") {
                        //执行actions
                        if (actionsMode != 0) {
                            if (this._useTicks) {
                                this._runAction(this._steps[i], t, t);
                            }
                            else if (actionsMode == 1 && t < prevPos) {
                                if (prevPos != this.duration) {
                                    this._runAction(this._steps[i], prevPos, this.duration);
                                }
                                this._runAction(this._steps[i], 0, t, true);
                            }
                            else {
                                this._runAction(this._steps[i], prevPos, t);
                            }
                        }
                    }
                    else if (this._steps[i].type == "step") {
                        if (stepIndex == i) {
                            var step = this._steps[stepIndex];
                            this._updateTargetProps(step, Math.min((this._stepPosition = t - step.t) / step.d, 1));
                        }
                    }
                }
            }
        }
        // this.dispatchEventWith("change");
        this.onChange && this.onChange.call(this.onChangeObj);
        return end;
    };
    /**
     * @private
     *
     * @param startPos
     * @param endPos
     * @param includeStart
     */
    Tween.prototype._runAction = function (action, startPos, endPos, includeStart) {
        if (includeStart === void 0) { includeStart = false; }
        var sPos = startPos;
        var ePos = endPos;
        if (startPos > endPos) {
            //把所有的倒置
            sPos = endPos;
            ePos = startPos;
        }
        var pos = action.t;
        if (pos == ePos || (pos > sPos && pos < ePos) || (includeStart && pos == startPos)) {
            action.f.apply(action.o, action.p);
        }
    };
    /**
     * @private
     *
     * @param step
     * @param ratio
     */
    Tween.prototype._updateTargetProps = function (step, ratio) {
        var p0, p1, v, v0, v1, arr;
        if (!step && ratio == 1) {
            this.passive = false;
            p0 = p1 = this._curQueueProps;
        }
        else {
            this.passive = !!step.v;
            //不更新props.
            if (this.passive) {
                return;
            }
            //使用ease
            if (step.e) {
                ratio = step.e(ratio, 0, 1, 1);
            }
            p0 = step.p0;
            p1 = step.p1;
        }
        for (var n in this._initQueueProps) {
            if ((v0 = p0[n]) == null) {
                p0[n] = v0 = this._initQueueProps[n];
            }
            if ((v1 = p1[n]) == null) {
                p1[n] = v1 = v0;
            }
            if (v0 == v1 || ratio == 0 || ratio == 1 || (typeof (v0) != "number")) {
                v = ratio == 1 ? v1 : v0;
            }
            else {
                v = v0 + (v1 - v0) * ratio;
            }
            var ignore = false;
            if (arr = Tween._plugins[n]) {
                for (var i = 0, l = arr.length; i < l; i++) {
                    var v2 = arr[i].tween(this, n, v, p0, p1, ratio, !!step && p0 == p1, !step);
                    if (v2 == Tween.IGNORE) {
                        ignore = true;
                    }
                    else {
                        v = v2;
                    }
                }
            }
            if (!ignore) {
                this._target[n] = v;
            }
        }
    };
    /**
     * Whether setting is paused
     * @param value {boolean} Whether to pause
     * @returns Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 设置是否暂停
     * @param value {boolean} 是否暂停
     * @returns Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.prototype.setPaused = function (value) {
        if (this.paused == value) {
            return this;
        }
        this.paused = value;
        Tween._register(this, !value);
        return this;
    };
    /**
     * @private
     *
     * @param props
     * @returns
     */
    Tween.prototype._cloneProps = function (props) {
        var o = {};
        for (var n in props) {
            o[n] = props[n];
        }
        return o;
    };
    /**
     * @private
     *
     * @param o
     * @returns
     */
    Tween.prototype._addStep = function (o) {
        if (o.d > 0) {
            o.type = "step";
            this._steps.push(o);
            o.t = this.duration;
            this.duration += o.d;
        }
        return this;
    };
    /**
     * @private
     *
     * @param o
     * @returns
     */
    Tween.prototype._appendQueueProps = function (o) {
        var arr, oldValue, i, l, injectProps;
        for (var n in o) {
            if (this._initQueueProps[n] === undefined) {
                oldValue = this._target[n];
                //设置plugins
                if (arr = Tween._plugins[n]) {
                    for (i = 0, l = arr.length; i < l; i++) {
                        oldValue = arr[i].init(this, n, oldValue);
                    }
                }
                this._initQueueProps[n] = this._curQueueProps[n] = (oldValue === undefined) ? null : oldValue;
            }
            else {
                oldValue = this._curQueueProps[n];
            }
        }
        for (var n in o) {
            oldValue = this._curQueueProps[n];
            if (arr = Tween._plugins[n]) {
                injectProps = injectProps || {};
                for (i = 0, l = arr.length; i < l; i++) {
                    if (arr[i].step) {
                        arr[i].step(this, n, oldValue, o[n], injectProps);
                    }
                }
            }
            this._curQueueProps[n] = o[n];
        }
        if (injectProps) {
            this._appendQueueProps(injectProps);
        }
        return this._curQueueProps;
    };
    /**
     * @private
     *
     * @param o
     * @returns
     */
    Tween.prototype._addAction = function (o) {
        o.t = this.duration;
        o.type = "action";
        this._steps.push(o);
        return this;
    };
    /**
     * @private
     *
     * @param props
     * @param o
     */
    Tween.prototype._set = function (props, o) {
        for (var n in props) {
            o[n] = props[n];
        }
    };
    /**
     * Wait the specified milliseconds before the execution of the next animation
     * @param duration {number} Waiting time, in milliseconds
     * @param passive {boolean} Whether properties are updated during the waiting time
     * @returns Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 等待指定毫秒后执行下一个动画
     * @param duration {number} 要等待的时间，以毫秒为单位
     * @param passive {boolean} 等待期间属性是否会更新
     * @returns Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.prototype.wait = function (duration, passive) {
        if (duration == null || duration <= 0) {
            return this;
        }
        var o = this._cloneProps(this._curQueueProps);
        return this._addStep({ d: duration, p0: o, p1: o, v: passive });
    };
    /**
     * Modify the property of the specified object to a specified value
     * @param props {Object} Property set of an object
     * @param duration {number} Duration
     * @param ease {Ease} Easing algorithm
     * @returns {Tween} Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 将指定对象的属性修改为指定值
     * @param props {Object} 对象的属性集合
     * @param duration {number} 持续时间
     * @param ease {Ease} 缓动算法
     * @returns {Tween} Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.prototype.to = function (props, duration, ease) {
        if (ease === void 0) { ease = undefined; }
        if (isNaN(duration) || duration < 0) {
            duration = 0;
        }
        this._addStep({ d: duration || 0, p0: this._cloneProps(this._curQueueProps), e: ease, p1: this._cloneProps(this._appendQueueProps(props)) });
        //加入一步set，防止游戏极其卡顿时候，to后面的call取到的属性值不对
        return this.set(props);
    };
    /**
     * Execute callback function
     * @param callback {Function} Callback method
     * @param thisObj {any} this action scope of the callback method
     * @param params {any[]} Parameter of the callback method
     * @returns {Tween} Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @example
     * <pre>
     *  Tween.get(display).call(function (a:number, b:string) {
     *      console.log("a: " + a); // the first parameter passed 233
     *      console.log("b: " + b); // the second parameter passed “hello”
     *  }, this, [233, "hello"]);
     * </pre>
     * @language en_US
     */
    /**
     * 执行回调函数
     * @param callback {Function} 回调方法
     * @param thisObj {any} 回调方法this作用域
     * @param params {any[]} 回调方法参数
     * @returns {Tween} Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @example
     * <pre>
     *  Tween.get(display).call(function (a:number, b:string) {
     *      console.log("a: " + a); //对应传入的第一个参数 233
     *      console.log("b: " + b); //对应传入的第二个参数 “hello”
     *  }, this, [233, "hello"]);
     * </pre>
     * @language zh_CN
     */
    Tween.prototype.call = function (callback, thisObj, params) {
        if (thisObj === void 0) { thisObj = undefined; }
        if (params === void 0) { params = undefined; }
        return this._addAction({ f: callback, p: params ? params : [], o: thisObj ? thisObj : this._target });
    };
    /**
     * Now modify the properties of the specified object to the specified value
     * @param props {Object} Property set of an object
     * @param target The object whose Tween to be resumed
     * @returns {Tween} Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     */
    /**
     * 立即将指定对象的属性修改为指定值
     * @param props {Object} 对象的属性集合
     * @param target 要继续播放 Tween 的对象
     * @returns {Tween} Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     */
    Tween.prototype.set = function (props, target) {
        if (target === void 0) { target = null; }
        //更新当前数据，保证缓动流畅性
        this._appendQueueProps(props);
        return this._addAction({ f: this._set, o: this, p: [props, target ? target : this._target] });
    };
    /**
     * Execute
     * @param tween {Tween} The Tween object to be operated. Default: this
     * @returns {Tween} Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 执行
     * @param tween {Tween} 需要操作的 Tween 对象，默认this
     * @returns {Tween} Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.prototype.play = function (tween) {
        if (!tween) {
            tween = this;
        }
        return this.call(tween.setPaused, tween, [false]);
    };
    /**
     * Pause
     * @param tween {Tween} The Tween object to be operated. Default: this
     * @returns {Tween} Tween object itself
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * 暂停
     * @param tween {Tween} 需要操作的 Tween 对象，默认this
     * @returns {Tween} Tween对象本身
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Tween.prototype.pause = function (tween) {
        if (!tween) {
            tween = this;
        }
        return this.call(tween.setPaused, tween, [true]);
    };
    /**
     * @method Tween#tick
     * @param delta {number}
     * @private
     * @version Egret 2.4
     * @platform Web,Native
     */
    Tween.prototype.$tick = function (delta) {
        if (this.paused) {
            return;
        }
        this.setPosition(this._prevPosition + delta);
    };
    /**
     * 不做特殊处理
     * @constant {number} Tween.NONE
     * @private
     */
    Tween.NONE = 0;
    /**
     * 循环
     * @constant {number} Tween.LOOP
     * @private
     */
    Tween.LOOP = 1;
    /**
     * 倒序
     * @constant {number} Tween.REVERSE
     * @private
     */
    Tween.REVERSE = 2;
    /**
     * @private
     */
    Tween._tweens = [];
    /**
     * @private
     */
    Tween.IGNORE = {};
    /**
     * @private
     */
    Tween._plugins = {};
    /**
     * @private
     */
    Tween._inited = false;
    Tween._lastTime = 0;
    return Tween;
}());
exports.Tween = Tween;
var Ease = /** @class */ (function () {
    /**
     * @version Egret 2.4
     * @platform Web,Native
     */
    function Ease() {
    }
    /**
     * get.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.get = function (amount) {
        if (amount < -1) {
            amount = -1;
        }
        if (amount > 1) {
            amount = 1;
        }
        return function (t) {
            if (amount == 0) {
                return t;
            }
            if (amount < 0) {
                return t * (t * -amount + 1 + amount);
            }
            return t * ((2 - t) * amount + (1 - amount));
        };
    };
    /**
     * get pow in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get pow in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getPowIn = function (pow) {
        return function (t) {
            return Math.pow(t, pow);
        };
    };
    /**
     * get pow out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get pow out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getPowOut = function (pow) {
        return function (t) {
            return 1 - Math.pow(1 - t, pow);
        };
    };
    /**
     * get pow in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get pow in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getPowInOut = function (pow) {
        return function (t) {
            if ((t *= 2) < 1)
                return 0.5 * Math.pow(t, pow);
            return 1 - 0.5 * Math.abs(Math.pow(2 - t, pow));
        };
    };
    /**
     * sine in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * sine in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.sineIn = function (t) {
        return 1 - Math.cos(t * Math.PI / 2);
    };
    /**
     * sine out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * sine out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.sineOut = function (t) {
        return Math.sin(t * Math.PI / 2);
    };
    /**
     * sine in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * sine in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.sineInOut = function (t) {
        return -0.5 * (Math.cos(Math.PI * t) - 1);
    };
    /**
     * get back in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get back in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getBackIn = function (amount) {
        return function (t) {
            return t * t * ((amount + 1) * t - amount);
        };
    };
    /**
     * get back out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get back out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getBackOut = function (amount) {
        return function (t) {
            return (--t * t * ((amount + 1) * t + amount) + 1);
        };
    };
    /**
     * get back in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get back in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getBackInOut = function (amount) {
        amount *= 1.525;
        return function (t) {
            if ((t *= 2) < 1)
                return 0.5 * (t * t * ((amount + 1) * t - amount));
            return 0.5 * ((t -= 2) * t * ((amount + 1) * t + amount) + 2);
        };
    };
    /**
     * circ in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * circ in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.circIn = function (t) {
        return -(Math.sqrt(1 - t * t) - 1);
    };
    /**
     * circ out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * circ out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.circOut = function (t) {
        return Math.sqrt(1 - (--t) * t);
    };
    /**
     * circ in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * circ in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.circInOut = function (t) {
        if ((t *= 2) < 1) {
            return -0.5 * (Math.sqrt(1 - t * t) - 1);
        }
        return 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
    };
    /**
     * bounce in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * bounce in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.bounceIn = function (t) {
        return 1 - Ease.bounceOut(1 - t);
    };
    /**
     * bounce out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * bounce out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.bounceOut = function (t) {
        if (t < 1 / 2.75) {
            return (7.5625 * t * t);
        }
        else if (t < 2 / 2.75) {
            return (7.5625 * (t -= 1.5 / 2.75) * t + 0.75);
        }
        else if (t < 2.5 / 2.75) {
            return (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375);
        }
        else {
            return (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
        }
    };
    /**
     * bounce in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * bounce in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.bounceInOut = function (t) {
        if (t < 0.5)
            return Ease.bounceIn(t * 2) * .5;
        return Ease.bounceOut(t * 2 - 1) * 0.5 + 0.5;
    };
    /**
     * get elastic in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get elastic in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getElasticIn = function (amplitude, period) {
        var pi2 = Math.PI * 2;
        return function (t) {
            if (t == 0 || t == 1)
                return t;
            var s = period / pi2 * Math.asin(1 / amplitude);
            return -(amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
        };
    };
    /**
     * get elastic out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get elastic out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getElasticOut = function (amplitude, period) {
        var pi2 = Math.PI * 2;
        return function (t) {
            if (t == 0 || t == 1)
                return t;
            var s = period / pi2 * Math.asin(1 / amplitude);
            return (amplitude * Math.pow(2, -10 * t) * Math.sin((t - s) * pi2 / period) + 1);
        };
    };
    /**
     * get elastic in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * get elastic in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.getElasticInOut = function (amplitude, period) {
        var pi2 = Math.PI * 2;
        return function (t) {
            var s = period / pi2 * Math.asin(1 / amplitude);
            if ((t *= 2) < 1)
                return -0.5 * (amplitude * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - s) * pi2 / period));
            return amplitude * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - s) * pi2 / period) * 0.5 + 1;
        };
    };
    /**
     * quad in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quad in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quadIn = Ease.getPowIn(2);
    /**
     * quad out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quad out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quadOut = Ease.getPowOut(2);
    /**
     * quad in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quad in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quadInOut = Ease.getPowInOut(2);
    /**
     * cubic in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * cubic in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.cubicIn = Ease.getPowIn(3);
    /**
     * cubic out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * cubic out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.cubicOut = Ease.getPowOut(3);
    /**
     * cubic in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * cubic in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.cubicInOut = Ease.getPowInOut(3);
    /**
     * quart in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quart in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quartIn = Ease.getPowIn(4);
    /**
     * quart out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quart out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quartOut = Ease.getPowOut(4);
    /**
     * quart in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quart in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quartInOut = Ease.getPowInOut(4);
    /**
     * quint in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quint in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quintIn = Ease.getPowIn(5);
    /**
     * quint out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quint out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quintOut = Ease.getPowOut(5);
    /**
     * quint in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * quint in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.quintInOut = Ease.getPowInOut(5);
    /**
     * back in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * back in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.backIn = Ease.getBackIn(1.7);
    /**
     * back out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * back out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.backOut = Ease.getBackOut(1.7);
    /**
     * back in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * back in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.backInOut = Ease.getBackInOut(1.7);
    /**
     * elastic in.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * elastic in。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.elasticIn = Ease.getElasticIn(1, 0.3);
    /**
     * elastic out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * elastic out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.elasticOut = Ease.getElasticOut(1, 0.3);
    /**
     * elastic in out.See example.
     * @version Egret 2.4
     * @platform Web,Native
     * @language en_US
     */
    /**
     * elastic in out。请查看示例
     * @version Egret 2.4
     * @platform Web,Native
     * @language zh_CN
     */
    Ease.elasticInOut = Ease.getElasticInOut(1, 0.3 * 1.5);
    return Ease;
}());
exports.Ease = Ease;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3R3ZWVuL1R3ZWVuLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGdEQUE4QztBQUM5QyxnQ0FBc0M7QUFFdEMsc0ZBQXNGO0FBQ3RGLEVBQUU7QUFDRixpREFBaUQ7QUFDakQsd0JBQXdCO0FBQ3hCLHNFQUFzRTtBQUN0RSwrRUFBK0U7QUFDL0UsRUFBRTtBQUNGLHVFQUF1RTtBQUN2RSxzRUFBc0U7QUFDdEUsMEVBQTBFO0FBQzFFLDRFQUE0RTtBQUM1RSw2RUFBNkU7QUFDN0UsOENBQThDO0FBQzlDLDZFQUE2RTtBQUM3RSw4RUFBOEU7QUFDOUUsRUFBRTtBQUNGLCtFQUErRTtBQUMvRSxnRkFBZ0Y7QUFDaEYsMkVBQTJFO0FBQzNFLGdGQUFnRjtBQUNoRixnRkFBZ0Y7QUFDaEYsOEVBQThFO0FBQzlFLDZFQUE2RTtBQUM3RSx3RUFBd0U7QUFDeEUsZ0ZBQWdGO0FBQ2hGLHNEQUFzRDtBQUN0RCxFQUFFO0FBQ0Ysc0ZBQXNGO0FBR3RGOzs7Ozs7O0dBT0c7QUFDSDs7Ozs7OztHQU9HO0FBQ0g7SUFpU0k7Ozs7O09BS0c7SUFDSCxlQUFZLE1BQVcsRUFBRSxLQUFVLEVBQUUsVUFBZTtRQWxRcEQ7O1dBRUc7UUFDSyxZQUFPLEdBQVEsSUFBSSxDQUFDO1FBQzVCOztXQUVHO1FBQ0ssY0FBUyxHQUFZLEtBQUssQ0FBQztRQUNuQzs7V0FFRztRQUNLLHNCQUFpQixHQUFZLEtBQUssQ0FBQztRQUMzQzs7V0FFRztRQUNLLFNBQUksR0FBWSxLQUFLLENBQUM7UUFDOUI7O1dBRUc7UUFDSyxlQUFVLEdBQUcsSUFBSSxDQUFDO1FBUzFCOztXQUVHO1FBQ0ssV0FBTSxHQUFVLElBQUksQ0FBQztRQUM3Qjs7V0FFRztRQUNLLFdBQU0sR0FBWSxLQUFLLENBQUM7UUFDaEM7O1dBRUc7UUFDSyxhQUFRLEdBQVcsQ0FBQyxDQUFDO1FBQzdCOztXQUVHO1FBQ0ssYUFBUSxHQUFXLENBQUMsQ0FB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S0c7SUFDSDs7Ozs7T0FLRztJQUNXLFdBQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBb0IzQzs7Ozs7T0FLRztJQUNIOzs7OztPQUtHO0lBQ1csWUFBTyxHQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7SUFzQjdDOzs7OztPQUtHO0lBQ0g7Ozs7O09BS0c7SUFDVyxjQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQW1JakQ7Ozs7O09BS0c7SUFDSDs7Ozs7T0FLRztJQUNXLGNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQXVCcEQ7Ozs7O09BS0c7SUFDSDs7Ozs7T0FLRztJQUNXLGVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztJQXVCdEQ7Ozs7O09BS0c7SUFDSDs7Ozs7T0FLRztJQUNXLGlCQUFZLEdBQUcsSUFBSSxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDO0lBQ3BFLFdBQUM7Q0FobUJELEFBZ21CQyxJQUFBO0FBaG1CWSxvQkFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbWVyTWdyIH0gZnJvbSBcIi4uL3RpbWVyL3RpbWVyX21nclwiO1xuaW1wb3J0IHsgZ2VuX2hhbmRsZXIgfSBmcm9tIFwiLi4vdXRpbFwiO1xuXG4vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuLy9cbi8vICBDb3B5cmlnaHQgKGMpIDIwMTQtcHJlc2VudCwgRWdyZXQgVGVjaG5vbG9neS5cbi8vICBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy8gIFJlZGlzdHJpYnV0aW9uIGFuZCB1c2UgaW4gc291cmNlIGFuZCBiaW5hcnkgZm9ybXMsIHdpdGggb3Igd2l0aG91dFxuLy8gIG1vZGlmaWNhdGlvbiwgYXJlIHBlcm1pdHRlZCBwcm92aWRlZCB0aGF0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9ucyBhcmUgbWV0OlxuLy9cbi8vICAgICAqIFJlZGlzdHJpYnV0aW9ucyBvZiBzb3VyY2UgY29kZSBtdXN0IHJldGFpbiB0aGUgYWJvdmUgY29weXJpZ2h0XG4vLyAgICAgICBub3RpY2UsIHRoaXMgbGlzdCBvZiBjb25kaXRpb25zIGFuZCB0aGUgZm9sbG93aW5nIGRpc2NsYWltZXIuXG4vLyAgICAgKiBSZWRpc3RyaWJ1dGlvbnMgaW4gYmluYXJ5IGZvcm0gbXVzdCByZXByb2R1Y2UgdGhlIGFib3ZlIGNvcHlyaWdodFxuLy8gICAgICAgbm90aWNlLCB0aGlzIGxpc3Qgb2YgY29uZGl0aW9ucyBhbmQgdGhlIGZvbGxvd2luZyBkaXNjbGFpbWVyIGluIHRoZVxuLy8gICAgICAgZG9jdW1lbnRhdGlvbiBhbmQvb3Igb3RoZXIgbWF0ZXJpYWxzIHByb3ZpZGVkIHdpdGggdGhlIGRpc3RyaWJ1dGlvbi5cbi8vICAgICAqIE5laXRoZXIgdGhlIG5hbWUgb2YgdGhlIEVncmV0IG5vciB0aGVcbi8vICAgICAgIG5hbWVzIG9mIGl0cyBjb250cmlidXRvcnMgbWF5IGJlIHVzZWQgdG8gZW5kb3JzZSBvciBwcm9tb3RlIHByb2R1Y3RzXG4vLyAgICAgICBkZXJpdmVkIGZyb20gdGhpcyBzb2Z0d2FyZSB3aXRob3V0IHNwZWNpZmljIHByaW9yIHdyaXR0ZW4gcGVybWlzc2lvbi5cbi8vXG4vLyAgVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBCWSBFR1JFVCBBTkQgQ09OVFJJQlVUT1JTIFwiQVMgSVNcIiBBTkQgQU5ZIEVYUFJFU1Ncbi8vICBPUiBJTVBMSUVEIFdBUlJBTlRJRVMsIElOQ0xVRElORywgQlVUIE5PVCBMSU1JVEVEIFRPLCBUSEUgSU1QTElFRCBXQVJSQU5USUVTXG4vLyAgT0YgTUVSQ0hBTlRBQklMSVRZIEFORCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBUkUgRElTQ0xBSU1FRC5cbi8vICBJTiBOTyBFVkVOVCBTSEFMTCBFR1JFVCBBTkQgQ09OVFJJQlVUT1JTIEJFIExJQUJMRSBGT1IgQU5ZIERJUkVDVCwgSU5ESVJFQ1QsXG4vLyAgSU5DSURFTlRBTCwgU1BFQ0lBTCwgRVhFTVBMQVJZLCBPUiBDT05TRVFVRU5USUFMIERBTUFHRVMgKElOQ0xVRElORywgQlVUIE5PVFxuLy8gIExJTUlURUQgVE8sIFBST0NVUkVNRU5UIE9GIFNVQlNUSVRVVEUgR09PRFMgT1IgU0VSVklDRVM7TE9TUyBPRiBVU0UsIERBVEEsXG4vLyAgT1IgUFJPRklUUzsgT1IgQlVTSU5FU1MgSU5URVJSVVBUSU9OKSBIT1dFVkVSIENBVVNFRCBBTkQgT04gQU5ZIFRIRU9SWSBPRlxuLy8gIExJQUJJTElUWSwgV0hFVEhFUiBJTiBDT05UUkFDVCwgU1RSSUNUIExJQUJJTElUWSwgT1IgVE9SVCAoSU5DTFVESU5HXG4vLyAgTkVHTElHRU5DRSBPUiBPVEhFUldJU0UpIEFSSVNJTkcgSU4gQU5ZIFdBWSBPVVQgT0YgVEhFIFVTRSBPRiBUSElTIFNPRlRXQVJFLFxuLy8gIEVWRU4gSUYgQURWSVNFRCBPRiBUSEUgUE9TU0lCSUxJVFkgT0YgU1VDSCBEQU1BR0UuXG4vL1xuLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cblxuXG4vKipcbiAqIFR3ZWVuIGlzIHRoZSBhbmltYXRpb24gZWFzaW5nIGNsYXNzIG9mIEVncmV0XG4gKiBAc2VlIGh0dHA6Ly9lZG4uY29tL2NuL2RvY3MvcGFnZS81NzYgVHdlZW4gZWFzZSBhbmltYXRpb25cbiAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAqIEBpbmNsdWRlRXhhbXBsZSBleHRlbnNpb24vdHdlZW4vVHdlZW4udHNcbiAqIEBsYW5ndWFnZSBlbl9VU1xuICovXG4vKipcbiAqIFR3ZWVu5pivRWdyZXTnmoTliqjnlLvnvJPliqjnsbtcbiAqIEBzZWUgaHR0cDovL2Vkbi5jb20vY24vZG9jcy9wYWdlLzU3NiBUd2Vlbue8k+WKqOWKqOeUu1xuICogQHZlcnNpb24gRWdyZXQgMi40XG4gKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICogQGluY2x1ZGVFeGFtcGxlIGV4dGVuc2lvbi90d2Vlbi9Ud2Vlbi50c1xuICogQGxhbmd1YWdlIHpoX0NOXG4gKi9cbmV4cG9ydCBjbGFzcyBUd2VlbiB7XG4gICAgLyoqXG4gICAgICog5LiN5YGa54m55q6K5aSE55CGXG4gICAgICogQGNvbnN0YW50IHtudW1iZXJ9IFR3ZWVuLk5PTkVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIE5PTkUgPSAwO1xuICAgIC8qKlxuICAgICAqIOW+queOr1xuICAgICAqIEBjb25zdGFudCB7bnVtYmVyfSBUd2Vlbi5MT09QXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyBMT09QID0gMTtcbiAgICAvKipcbiAgICAgKiDlgJLluo9cbiAgICAgKiBAY29uc3RhbnQge251bWJlcn0gVHdlZW4uUkVWRVJTRVxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgUkVWRVJTRSA9IDI7XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIF90d2VlbnM6IFR3ZWVuW10gPSBbXTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIElHTk9SRSA9IHt9O1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBzdGF0aWMgX3BsdWdpbnMgPSB7fTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIF9pbml0ZWQgPSBmYWxzZTtcblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdGFyZ2V0OiBhbnkgPSBudWxsO1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXNlVGlja3M6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgaWdub3JlR2xvYmFsUGF1c2U6IGJvb2xlYW4gPSBmYWxzZTtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgbG9vcDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBwbHVnaW5EYXRhID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX2N1clF1ZXVlUHJvcHM7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIF9pbml0UXVldWVQcm9wcztcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3N0ZXBzOiBhbnlbXSA9IG51bGw7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKi9cbiAgICBwcml2YXRlIHBhdXNlZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBkdXJhdGlvbjogbnVtYmVyID0gMDtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByZXZQb3M6IG51bWJlciA9IC0xO1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBwb3NpdGlvbjogbnVtYmVyID0gbnVsbDtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3ByZXZQb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgX3N0ZXBQb3NpdGlvbjogbnVtYmVyID0gMDtcbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgcGFzc2l2ZTogYm9vbGVhbiA9IGZhbHNlO1xuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICovXG4gICAgcHJpdmF0ZSBvbkNoYW5nZTogRnVuY3Rpb25cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIHByaXZhdGUgb25DaGFuZ2VPYmpcblxuICAgIC8qKlxuICAgICAqIEFjdGl2YXRlIGFuIG9iamVjdCBhbmQgYWRkIGEgVHdlZW4gYW5pbWF0aW9uIHRvIHRoZSBvYmplY3RcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IHthbnl9IFRoZSBvYmplY3QgdG8gYmUgYWN0aXZhdGVkXG4gICAgICogQHBhcmFtIHByb3BzIHthbnl9IFBhcmFtZXRlcnMsIHN1cHBvcnQgbG9vcCBvbkNoYW5nZSBvbkNoYW5nZU9ialxuICAgICAqIEBwYXJhbSBwbHVnaW5EYXRhIHthbnl9IFdyaXRlIHJlYWxpemVkXG4gICAgICogQHBhcmFtIG92ZXJyaWRlIHtib29sZWFufSBXaGV0aGVyIHRvIHJlbW92ZSB0aGUgb2JqZWN0IGJlZm9yZSBhZGRpbmcgYSB0d2VlbiwgdGhlIGRlZmF1bHQgdmFsdWUgZmFsc2VcbiAgICAgKiBOb3QgcmVjb21tZW5kZWQsIHlvdSBjYW4gdXNlIFR3ZWVuLnJlbW92ZVR3ZWVucyh0YXJnZXQpIGluc3RlYWQuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDmv4DmtLvkuIDkuKrlr7nosaHvvIzlr7nlhbbmt7vliqAgVHdlZW4g5Yqo55S7XG4gICAgICogQHBhcmFtIHRhcmdldCB7YW55fSDopoHmv4DmtLsgVHdlZW4g55qE5a+56LGhXG4gICAgICogQHBhcmFtIHByb3BzIHthbnl9IOWPguaVsO+8jOaUr+aMgWxvb3Ao5b6q546v5pKt5pS+KSBvbkNoYW5nZSjlj5jljJblh73mlbApIG9uQ2hhbmdlT2JqKOWPmOWMluWHveaVsOS9nOeUqOWfnylcbiAgICAgKiBAcGFyYW0gcGx1Z2luRGF0YSB7YW55fSDmmoLmnKrlrp7njrBcbiAgICAgKiBAcGFyYW0gb3ZlcnJpZGUge2Jvb2xlYW59IOaYr+WQpuenu+mZpOWvueixoeS5i+WJjea3u+WKoOeahHR3ZWVu77yM6buY6K6k5YC8ZmFsc2XjgIJcbiAgICAgKiDkuI3lu7rorq7kvb/nlKjvvIzlj6/kvb/nlKggVHdlZW4ucmVtb3ZlVHdlZW5zKHRhcmdldCkg5Luj5pu/44CCXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldCh0YXJnZXQ6IGFueSwgcHJvcHM/OiB7IGxvb3A/OiBib29sZWFuLCBvbkNoYW5nZT86IEZ1bmN0aW9uLCBvbkNoYW5nZU9iaj86IGFueSB9LCBwbHVnaW5EYXRhOiBhbnkgPSBudWxsLCBvdmVycmlkZTogYm9vbGVhbiA9IGZhbHNlKTogVHdlZW4ge1xuICAgICAgICBpZiAob3ZlcnJpZGUpIHtcbiAgICAgICAgICAgIFR3ZWVuLnJlbW92ZVR3ZWVucyh0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBuZXcgVHdlZW4odGFyZ2V0LCBwcm9wcywgcGx1Z2luRGF0YSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogRGVsZXRlIGFsbCBUd2VlbiBhbmltYXRpb25zIGZyb20gYW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHRhcmdldCBUaGUgb2JqZWN0IHdob3NlIFR3ZWVuIHRvIGJlIGRlbGV0ZWRcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIOWIoOmZpOS4gOS4quWvueixoeS4iueahOWFqOmDqCBUd2VlbiDliqjnlLtcbiAgICAgKiBAcGFyYW0gdGFyZ2V0ICDpnIDopoHnp7vpmaQgVHdlZW4g55qE5a+56LGhXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHJlbW92ZVR3ZWVucyh0YXJnZXQ6IGFueSk6IHZvaWQge1xuICAgICAgICBpZiAoIXRhcmdldC50d2Vlbl9jb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxldCB0d2VlbnM6IFR3ZWVuW10gPSBUd2Vlbi5fdHdlZW5zO1xuICAgICAgICBmb3IgKGxldCBpID0gdHdlZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBpZiAodHdlZW5zW2ldLl90YXJnZXQgPT0gdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgdHdlZW5zW2ldLnBhdXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgdHdlZW5zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0YXJnZXQudHdlZW5fY291bnQgPSAwO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlIGFsbCBUd2VlbiBhbmltYXRpb25zIG9mIGEgY2VydGFpbiBvYmplY3RcbiAgICAgKiBAcGFyYW0gdGFyZ2V0IFRoZSBvYmplY3Qgd2hvc2UgVHdlZW4gdG8gYmUgcGF1c2VkXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDmmoLlgZzmn5DkuKrlr7nosaHnmoTmiYDmnIkgVHdlZW5cbiAgICAgKiBAcGFyYW0gdGFyZ2V0IOimgeaaguWBnCBUd2VlbiDnmoTlr7nosaFcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcGF1c2VUd2VlbnModGFyZ2V0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0YXJnZXQudHdlZW5fY291bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdHdlZW5zOiBUd2VlbltdID0gVHdlZW4uX3R3ZWVucztcbiAgICAgICAgZm9yIChsZXQgaSA9IHR3ZWVucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHR3ZWVuc1tpXS5fdGFyZ2V0ID09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHR3ZWVuc1tpXS5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogUmVzdW1lIHBsYXlpbmcgYWxsIGVhc2luZyBvZiBhIGNlcnRhaW4gb2JqZWN0XG4gICAgICogQHBhcmFtIHRhcmdldCBUaGUgb2JqZWN0IHdob3NlIFR3ZWVuIHRvIGJlIHJlc3VtZWRcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIOe7p+e7reaSreaUvuafkOS4quWvueixoeeahOaJgOaciee8k+WKqFxuICAgICAqIEBwYXJhbSB0YXJnZXQg6KaB57un57ut5pKt5pS+IFR3ZWVuIOeahOWvueixoVxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZXN1bWVUd2VlbnModGFyZ2V0OiBhbnkpOiB2b2lkIHtcbiAgICAgICAgaWYgKCF0YXJnZXQudHdlZW5fY291bnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdHdlZW5zOiBUd2VlbltdID0gVHdlZW4uX3R3ZWVucztcbiAgICAgICAgZm9yIChsZXQgaSA9IHR3ZWVucy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgaWYgKHR3ZWVuc1tpXS5fdGFyZ2V0ID09IHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHR3ZWVuc1tpXS5wYXVzZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogXG4gICAgICogQHBhcmFtIGRlbHRhIG1zXG4gICAgICogQHBhcmFtIHBhdXNlZCBcbiAgICAgKi9cbiAgICBwcml2YXRlIHN0YXRpYyB0aWNrKGRlbHRhOiBudW1iZXIsIHBhdXNlZCA9IGZhbHNlKSB7XG4gICAgICAgIGxldCB0d2VlbnM6IFR3ZWVuW10gPSBUd2Vlbi5fdHdlZW5zLmNvbmNhdCgpO1xuICAgICAgICBmb3IgKGxldCBpID0gdHdlZW5zLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgdHdlZW46IFR3ZWVuID0gdHdlZW5zW2ldO1xuICAgICAgICAgICAgaWYgKChwYXVzZWQgJiYgIXR3ZWVuLmlnbm9yZUdsb2JhbFBhdXNlKSB8fCB0d2Vlbi5wYXVzZWQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHR3ZWVuLiR0aWNrKHR3ZWVuLl91c2VUaWNrcyA/IDEgOiBkZWx0YSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHN0YXRpYyBfbGFzdFRpbWU6IG51bWJlciA9IDA7XG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gdHdlZW4gXG4gICAgICogQHBhcmFtIHZhbHVlIFxuICAgICAqL1xuICAgIHByaXZhdGUgc3RhdGljIF9yZWdpc3Rlcih0d2VlbjogVHdlZW4sIHZhbHVlOiBib29sZWFuKTogdm9pZCB7XG4gICAgICAgIGxldCB0YXJnZXQ6IGFueSA9IHR3ZWVuLl90YXJnZXQ7XG4gICAgICAgIGxldCB0d2VlbnM6IFR3ZWVuW10gPSBUd2Vlbi5fdHdlZW5zO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXQudHdlZW5fY291bnQgPSB0YXJnZXQudHdlZW5fY291bnQgPiAwID8gdGFyZ2V0LnR3ZWVuX2NvdW50ICsgMSA6IDE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0d2VlbnMucHVzaCh0d2Vlbik7XG4gICAgICAgICAgICBpZiAoIVR3ZWVuLl9pbml0ZWQpIHtcbiAgICAgICAgICAgICAgICBUd2Vlbi5faW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBUaW1lck1nci5nZXRJbnN0KCkuYWRkX3VwZGF0ZXIoZ2VuX2hhbmRsZXIoKHQ6IG51bWJlcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBUd2Vlbi50aWNrKHQgKiAxMDAwKVxuICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRhcmdldCkge1xuICAgICAgICAgICAgICAgIHRhcmdldC50d2Vlbl9jb3VudC0tO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGkgPSB0d2VlbnMubGVuZ3RoO1xuICAgICAgICAgICAgd2hpbGUgKGktLSkge1xuICAgICAgICAgICAgICAgIGlmICh0d2VlbnNbaV0gPT0gdHdlZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgdHdlZW5zLnNwbGljZShpLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIERlbGV0ZSBhbGwgVHdlZW5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIOWIoOmZpOaJgOaciSBUd2VlblxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyByZW1vdmVBbGxUd2VlbnMoKTogdm9pZCB7XG4gICAgICAgIGxldCB0d2VlbnM6IFR3ZWVuW10gPSBUd2Vlbi5fdHdlZW5zO1xuICAgICAgICBmb3IgKGxldCBpID0gMCwgbCA9IHR3ZWVucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgIGxldCB0d2VlbjogVHdlZW4gPSB0d2VlbnNbaV07XG4gICAgICAgICAgICB0d2Vlbi5wYXVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdHdlZW4uX3RhcmdldC50d2Vlbl9jb3VudCA9IDA7XG4gICAgICAgIH1cbiAgICAgICAgdHdlZW5zLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog5Yib5bu65LiA5LiqIFR3ZWVuIOWvueixoVxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQ6IGFueSwgcHJvcHM6IGFueSwgcGx1Z2luRGF0YTogYW55KSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSh0YXJnZXQsIHByb3BzLCBwbHVnaW5EYXRhKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB0YXJnZXQgXG4gICAgICogQHBhcmFtIHByb3BzIFxuICAgICAqIEBwYXJhbSBwbHVnaW5EYXRhIFxuICAgICAqL1xuICAgIHByaXZhdGUgaW5pdGlhbGl6ZSh0YXJnZXQ6IGFueSwgcHJvcHM6IGFueSwgcGx1Z2luRGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3RhcmdldCA9IHRhcmdldDtcbiAgICAgICAgaWYgKHByb3BzKSB7XG4gICAgICAgICAgICB0aGlzLl91c2VUaWNrcyA9IHByb3BzLnVzZVRpY2tzO1xuICAgICAgICAgICAgdGhpcy5pZ25vcmVHbG9iYWxQYXVzZSA9IHByb3BzLmlnbm9yZUdsb2JhbFBhdXNlO1xuICAgICAgICAgICAgdGhpcy5sb29wID0gcHJvcHMubG9vcDtcbiAgICAgICAgICAgIC8vIHByb3BzLm9uQ2hhbmdlICYmIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNoYW5nZVwiLCBwcm9wcy5vbkNoYW5nZSwgcHJvcHMub25DaGFuZ2VPYmopO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHByb3BzLm9uQ2hhbmdlO1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZU9iaiA9IHByb3BzLm9uQ2hhbmdlT2JqO1xuICAgICAgICAgICAgaWYgKHByb3BzLm92ZXJyaWRlKSB7XG4gICAgICAgICAgICAgICAgVHdlZW4ucmVtb3ZlVHdlZW5zKHRhcmdldCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnBsdWdpbkRhdGEgPSBwbHVnaW5EYXRhIHx8IHt9O1xuICAgICAgICB0aGlzLl9jdXJRdWV1ZVByb3BzID0ge307XG4gICAgICAgIHRoaXMuX2luaXRRdWV1ZVByb3BzID0ge307XG4gICAgICAgIHRoaXMuX3N0ZXBzID0gW107XG4gICAgICAgIGlmIChwcm9wcyAmJiBwcm9wcy5wYXVzZWQpIHtcbiAgICAgICAgICAgIHRoaXMucGF1c2VkID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIFR3ZWVuLl9yZWdpc3Rlcih0aGlzLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJvcHMgJiYgcHJvcHMucG9zaXRpb24gIT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5zZXRQb3NpdGlvbihwcm9wcy5wb3NpdGlvbiwgVHdlZW4uTk9ORSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSB2YWx1ZSBcbiAgICAgKiBAcGFyYW0gYWN0aW9uc01vZGUgXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgcHVibGljIHNldFBvc2l0aW9uKHZhbHVlOiBudW1iZXIsIGFjdGlvbnNNb2RlOiBudW1iZXIgPSAxKTogYm9vbGVhbiB7XG4gICAgICAgIGlmICh2YWx1ZSA8IDApIHtcbiAgICAgICAgICAgIHZhbHVlID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8v5q2j5bi45YyW5L2N572uXG4gICAgICAgIGxldCB0OiBudW1iZXIgPSB2YWx1ZTtcbiAgICAgICAgbGV0IGVuZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgICAgICBpZiAodCA+PSB0aGlzLmR1cmF0aW9uKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5sb29wKSB7XG4gICAgICAgICAgICAgICAgdmFyIG5ld1RpbWUgPSB0ICUgdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBpZiAodCA+IDAgJiYgbmV3VGltZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0ID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0ID0gbmV3VGltZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0ID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgICAgICAgICBlbmQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0ID09IHRoaXMuX3ByZXZQb3MpIHtcbiAgICAgICAgICAgIHJldHVybiBlbmQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kKSB7XG4gICAgICAgICAgICB0aGlzLnNldFBhdXNlZCh0cnVlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBwcmV2UG9zID0gdGhpcy5fcHJldlBvcztcbiAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMuX3ByZXZQb3MgPSB0O1xuICAgICAgICB0aGlzLl9wcmV2UG9zaXRpb24gPSB2YWx1ZTtcblxuICAgICAgICBpZiAodGhpcy5fdGFyZ2V0KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5fc3RlcHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIC8vIOaJvuWIsOaWsOeahHR3ZWVuXG4gICAgICAgICAgICAgICAgbGV0IGwgPSB0aGlzLl9zdGVwcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgbGV0IHN0ZXBJbmRleCA9IC0xO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl9zdGVwc1tpXS50eXBlID09IFwic3RlcFwiKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBzW2ldLnQgPD0gdCAmJiB0aGlzLl9zdGVwc1tpXS50ICsgdGhpcy5fc3RlcHNbaV0uZCA+PSB0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX3N0ZXBzW2ldLnR5cGUgPT0gXCJhY3Rpb25cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy/miafooYxhY3Rpb25zXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYWN0aW9uc01vZGUgIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLl91c2VUaWNrcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9ydW5BY3Rpb24odGhpcy5fc3RlcHNbaV0sIHQsIHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChhY3Rpb25zTW9kZSA9PSAxICYmIHQgPCBwcmV2UG9zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwcmV2UG9zICE9IHRoaXMuZHVyYXRpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bkFjdGlvbih0aGlzLl9zdGVwc1tpXSwgcHJldlBvcywgdGhpcy5kdXJhdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcnVuQWN0aW9uKHRoaXMuX3N0ZXBzW2ldLCAwLCB0LCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3J1bkFjdGlvbih0aGlzLl9zdGVwc1tpXSwgcHJldlBvcywgdCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuX3N0ZXBzW2ldLnR5cGUgPT0gXCJzdGVwXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGVwSW5kZXggPT0gaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBzdGVwID0gdGhpcy5fc3RlcHNbc3RlcEluZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl91cGRhdGVUYXJnZXRQcm9wcyhzdGVwLCBNYXRoLm1pbigodGhpcy5fc3RlcFBvc2l0aW9uID0gdCAtIHN0ZXAudCkgLyBzdGVwLmQsIDEpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHRoaXMuZGlzcGF0Y2hFdmVudFdpdGgoXCJjaGFuZ2VcIik7XG4gICAgICAgIHRoaXMub25DaGFuZ2UgJiYgdGhpcy5vbkNoYW5nZS5jYWxsKHRoaXMub25DaGFuZ2VPYmopO1xuICAgICAgICByZXR1cm4gZW5kO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwcml2YXRlXG4gICAgICogXG4gICAgICogQHBhcmFtIHN0YXJ0UG9zIFxuICAgICAqIEBwYXJhbSBlbmRQb3MgXG4gICAgICogQHBhcmFtIGluY2x1ZGVTdGFydCBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9ydW5BY3Rpb24oYWN0aW9uOiBhbnksIHN0YXJ0UG9zOiBudW1iZXIsIGVuZFBvczogbnVtYmVyLCBpbmNsdWRlU3RhcnQ6IGJvb2xlYW4gPSBmYWxzZSkge1xuICAgICAgICBsZXQgc1BvczogbnVtYmVyID0gc3RhcnRQb3M7XG4gICAgICAgIGxldCBlUG9zOiBudW1iZXIgPSBlbmRQb3M7XG4gICAgICAgIGlmIChzdGFydFBvcyA+IGVuZFBvcykge1xuICAgICAgICAgICAgLy/miormiYDmnInnmoTlgJLnva5cbiAgICAgICAgICAgIHNQb3MgPSBlbmRQb3M7XG4gICAgICAgICAgICBlUG9zID0gc3RhcnRQb3M7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHBvcyA9IGFjdGlvbi50O1xuICAgICAgICBpZiAocG9zID09IGVQb3MgfHwgKHBvcyA+IHNQb3MgJiYgcG9zIDwgZVBvcykgfHwgKGluY2x1ZGVTdGFydCAmJiBwb3MgPT0gc3RhcnRQb3MpKSB7XG4gICAgICAgICAgICBhY3Rpb24uZi5hcHBseShhY3Rpb24ubywgYWN0aW9uLnApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gc3RlcCBcbiAgICAgKiBAcGFyYW0gcmF0aW8gXG4gICAgICovXG4gICAgcHJpdmF0ZSBfdXBkYXRlVGFyZ2V0UHJvcHMoc3RlcDogYW55LCByYXRpbzogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwMCwgcDEsIHYsIHYwLCB2MSwgYXJyO1xuICAgICAgICBpZiAoIXN0ZXAgJiYgcmF0aW8gPT0gMSkge1xuICAgICAgICAgICAgdGhpcy5wYXNzaXZlID0gZmFsc2U7XG4gICAgICAgICAgICBwMCA9IHAxID0gdGhpcy5fY3VyUXVldWVQcm9wcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFzc2l2ZSA9ICEhc3RlcC52O1xuICAgICAgICAgICAgLy/kuI3mm7TmlrBwcm9wcy5cbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3NpdmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvL+S9v+eUqGVhc2VcbiAgICAgICAgICAgIGlmIChzdGVwLmUpIHtcbiAgICAgICAgICAgICAgICByYXRpbyA9IHN0ZXAuZShyYXRpbywgMCwgMSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwMCA9IHN0ZXAucDA7XG4gICAgICAgICAgICBwMSA9IHN0ZXAucDE7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBuIGluIHRoaXMuX2luaXRRdWV1ZVByb3BzKSB7XG4gICAgICAgICAgICBpZiAoKHYwID0gcDBbbl0pID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwMFtuXSA9IHYwID0gdGhpcy5faW5pdFF1ZXVlUHJvcHNbbl07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHYxID0gcDFbbl0pID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwMVtuXSA9IHYxID0gdjA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodjAgPT0gdjEgfHwgcmF0aW8gPT0gMCB8fCByYXRpbyA9PSAxIHx8ICh0eXBlb2YgKHYwKSAhPSBcIm51bWJlclwiKSkge1xuICAgICAgICAgICAgICAgIHYgPSByYXRpbyA9PSAxID8gdjEgOiB2MDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdiA9IHYwICsgKHYxIC0gdjApICogcmF0aW87XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGxldCBpZ25vcmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGlmIChhcnIgPSBUd2Vlbi5fcGx1Z2luc1tuXSkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBsID0gYXJyLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgdjIgPSBhcnJbaV0udHdlZW4odGhpcywgbiwgdiwgcDAsIHAxLCByYXRpbywgISFzdGVwICYmIHAwID09IHAxLCAhc3RlcCk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2MiA9PSBUd2Vlbi5JR05PUkUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlnbm9yZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2ID0gdjI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWlnbm9yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuX3RhcmdldFtuXSA9IHY7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFdoZXRoZXIgc2V0dGluZyBpcyBwYXVzZWRcbiAgICAgKiBAcGFyYW0gdmFsdWUge2Jvb2xlYW59IFdoZXRoZXIgdG8gcGF1c2VcbiAgICAgKiBAcmV0dXJucyBUd2VlbiBvYmplY3QgaXRzZWxmXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDorr7nva7mmK/lkKbmmoLlgZxcbiAgICAgKiBAcGFyYW0gdmFsdWUge2Jvb2xlYW59IOaYr+WQpuaaguWBnFxuICAgICAqIEByZXR1cm5zIFR3ZWVu5a+56LGh5pys6LqrXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc2V0UGF1c2VkKHZhbHVlOiBib29sZWFuKTogVHdlZW4ge1xuICAgICAgICBpZiAodGhpcy5wYXVzZWQgPT0gdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucGF1c2VkID0gdmFsdWU7XG4gICAgICAgIFR3ZWVuLl9yZWdpc3Rlcih0aGlzLCAhdmFsdWUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIFxuICAgICAqIEBwYXJhbSBwcm9wcyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9jbG9uZVByb3BzKHByb3BzOiBhbnkpOiBhbnkge1xuICAgICAgICBsZXQgbyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBuIGluIHByb3BzKSB7XG4gICAgICAgICAgICBvW25dID0gcHJvcHNbbl07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG87XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hZGRTdGVwKG8pOiBUd2VlbiB7XG4gICAgICAgIGlmIChvLmQgPiAwKSB7XG4gICAgICAgICAgICBvLnR5cGUgPSBcInN0ZXBcIjtcbiAgICAgICAgICAgIHRoaXMuX3N0ZXBzLnB1c2gobyk7XG4gICAgICAgICAgICBvLnQgPSB0aGlzLmR1cmF0aW9uO1xuICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiArPSBvLmQ7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hcHBlbmRRdWV1ZVByb3BzKG8pOiBhbnkge1xuICAgICAgICBsZXQgYXJyLCBvbGRWYWx1ZSwgaSwgbCwgaW5qZWN0UHJvcHM7XG4gICAgICAgIGZvciAobGV0IG4gaW4gbykge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luaXRRdWV1ZVByb3BzW25dID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBvbGRWYWx1ZSA9IHRoaXMuX3RhcmdldFtuXTtcbiAgICAgICAgICAgICAgICAvL+iuvue9rnBsdWdpbnNcbiAgICAgICAgICAgICAgICBpZiAoYXJyID0gVHdlZW4uX3BsdWdpbnNbbl0pIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChpID0gMCwgbCA9IGFyci5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9sZFZhbHVlID0gYXJyW2ldLmluaXQodGhpcywgbiwgb2xkVmFsdWUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuX2luaXRRdWV1ZVByb3BzW25dID0gdGhpcy5fY3VyUXVldWVQcm9wc1tuXSA9IChvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkKSA/IG51bGwgOiBvbGRWYWx1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgb2xkVmFsdWUgPSB0aGlzLl9jdXJRdWV1ZVByb3BzW25dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChsZXQgbiBpbiBvKSB7XG4gICAgICAgICAgICBvbGRWYWx1ZSA9IHRoaXMuX2N1clF1ZXVlUHJvcHNbbl07XG4gICAgICAgICAgICBpZiAoYXJyID0gVHdlZW4uX3BsdWdpbnNbbl0pIHtcbiAgICAgICAgICAgICAgICBpbmplY3RQcm9wcyA9IGluamVjdFByb3BzIHx8IHt9O1xuICAgICAgICAgICAgICAgIGZvciAoaSA9IDAsIGwgPSBhcnIubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhcnJbaV0uc3RlcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXJyW2ldLnN0ZXAodGhpcywgbiwgb2xkVmFsdWUsIG9bbl0sIGluamVjdFByb3BzKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuX2N1clF1ZXVlUHJvcHNbbl0gPSBvW25dO1xuICAgICAgICB9XG4gICAgICAgIGlmIChpbmplY3RQcm9wcykge1xuICAgICAgICAgICAgdGhpcy5fYXBwZW5kUXVldWVQcm9wcyhpbmplY3RQcm9wcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2N1clF1ZXVlUHJvcHM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gbyBcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBwcml2YXRlIF9hZGRBY3Rpb24obyk6IFR3ZWVuIHtcbiAgICAgICAgby50ID0gdGhpcy5kdXJhdGlvbjtcbiAgICAgICAgby50eXBlID0gXCJhY3Rpb25cIjtcbiAgICAgICAgdGhpcy5fc3RlcHMucHVzaChvKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0gcHJvcHMgXG4gICAgICogQHBhcmFtIG8gXG4gICAgICovXG4gICAgcHJpdmF0ZSBfc2V0KHByb3BzOiBhbnksIG8pOiB2b2lkIHtcbiAgICAgICAgZm9yIChsZXQgbiBpbiBwcm9wcykge1xuICAgICAgICAgICAgb1tuXSA9IHByb3BzW25dO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogV2FpdCB0aGUgc3BlY2lmaWVkIG1pbGxpc2Vjb25kcyBiZWZvcmUgdGhlIGV4ZWN1dGlvbiBvZiB0aGUgbmV4dCBhbmltYXRpb25cbiAgICAgKiBAcGFyYW0gZHVyYXRpb24ge251bWJlcn0gV2FpdGluZyB0aW1lLCBpbiBtaWxsaXNlY29uZHNcbiAgICAgKiBAcGFyYW0gcGFzc2l2ZSB7Ym9vbGVhbn0gV2hldGhlciBwcm9wZXJ0aWVzIGFyZSB1cGRhdGVkIGR1cmluZyB0aGUgd2FpdGluZyB0aW1lXG4gICAgICogQHJldHVybnMgVHdlZW4gb2JqZWN0IGl0c2VsZlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICog562J5b6F5oyH5a6a5q+r56eS5ZCO5omn6KGM5LiL5LiA5Liq5Yqo55S7XG4gICAgICogQHBhcmFtIGR1cmF0aW9uIHtudW1iZXJ9IOimgeetieW+heeahOaXtumXtO+8jOS7peavq+enkuS4uuWNleS9jVxuICAgICAqIEBwYXJhbSBwYXNzaXZlIHtib29sZWFufSDnrYnlvoXmnJ/pl7TlsZ7mgKfmmK/lkKbkvJrmm7TmlrBcbiAgICAgKiBAcmV0dXJucyBUd2VlbuWvueixoeacrOi6q1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHdhaXQoZHVyYXRpb246IG51bWJlciwgcGFzc2l2ZT86IGJvb2xlYW4pOiBUd2VlbiB7XG4gICAgICAgIGlmIChkdXJhdGlvbiA9PSBudWxsIHx8IGR1cmF0aW9uIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIGxldCBvID0gdGhpcy5fY2xvbmVQcm9wcyh0aGlzLl9jdXJRdWV1ZVByb3BzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZFN0ZXAoeyBkOiBkdXJhdGlvbiwgcDA6IG8sIHAxOiBvLCB2OiBwYXNzaXZlIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE1vZGlmeSB0aGUgcHJvcGVydHkgb2YgdGhlIHNwZWNpZmllZCBvYmplY3QgdG8gYSBzcGVjaWZpZWQgdmFsdWVcbiAgICAgKiBAcGFyYW0gcHJvcHMge09iamVjdH0gUHJvcGVydHkgc2V0IG9mIGFuIG9iamVjdFxuICAgICAqIEBwYXJhbSBkdXJhdGlvbiB7bnVtYmVyfSBEdXJhdGlvblxuICAgICAqIEBwYXJhbSBlYXNlIHtFYXNlfSBFYXNpbmcgYWxnb3JpdGhtXG4gICAgICogQHJldHVybnMge1R3ZWVufSBUd2VlbiBvYmplY3QgaXRzZWxmXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDlsIbmjIflrprlr7nosaHnmoTlsZ7mgKfkv67mlLnkuLrmjIflrprlgLxcbiAgICAgKiBAcGFyYW0gcHJvcHMge09iamVjdH0g5a+56LGh55qE5bGe5oCn6ZuG5ZCIXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIHtudW1iZXJ9IOaMgee7reaXtumXtFxuICAgICAqIEBwYXJhbSBlYXNlIHtFYXNlfSDnvJPliqjnrpfms5VcbiAgICAgKiBAcmV0dXJucyB7VHdlZW59IFR3ZWVu5a+56LGh5pys6LqrXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cblxuICAgIHB1YmxpYyB0byhwcm9wczogYW55LCBkdXJhdGlvbj86IG51bWJlciwgZWFzZTogRnVuY3Rpb24gPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGlzTmFOKGR1cmF0aW9uKSB8fCBkdXJhdGlvbiA8IDApIHtcbiAgICAgICAgICAgIGR1cmF0aW9uID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9hZGRTdGVwKHsgZDogZHVyYXRpb24gfHwgMCwgcDA6IHRoaXMuX2Nsb25lUHJvcHModGhpcy5fY3VyUXVldWVQcm9wcyksIGU6IGVhc2UsIHAxOiB0aGlzLl9jbG9uZVByb3BzKHRoaXMuX2FwcGVuZFF1ZXVlUHJvcHMocHJvcHMpKSB9KTtcbiAgICAgICAgLy/liqDlhaXkuIDmraVzZXTvvIzpmLLmraLmuLjmiI/mnoHlhbbljaHpob/ml7blgJnvvIx0b+WQjumdoueahGNhbGzlj5bliLDnmoTlsZ7mgKflgLzkuI3lr7lcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0KHByb3BzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBFeGVjdXRlIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0gQ2FsbGJhY2sgbWV0aG9kXG4gICAgICogQHBhcmFtIHRoaXNPYmoge2FueX0gdGhpcyBhY3Rpb24gc2NvcGUgb2YgdGhlIGNhbGxiYWNrIG1ldGhvZFxuICAgICAqIEBwYXJhbSBwYXJhbXMge2FueVtdfSBQYXJhbWV0ZXIgb2YgdGhlIGNhbGxiYWNrIG1ldGhvZFxuICAgICAqIEByZXR1cm5zIHtUd2Vlbn0gVHdlZW4gb2JqZWN0IGl0c2VsZlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGV4YW1wbGVcbiAgICAgKiA8cHJlPlxuICAgICAqICBUd2Vlbi5nZXQoZGlzcGxheSkuY2FsbChmdW5jdGlvbiAoYTpudW1iZXIsIGI6c3RyaW5nKSB7XG4gICAgICogICAgICBjb25zb2xlLmxvZyhcImE6IFwiICsgYSk7IC8vIHRoZSBmaXJzdCBwYXJhbWV0ZXIgcGFzc2VkIDIzM1xuICAgICAqICAgICAgY29uc29sZS5sb2coXCJiOiBcIiArIGIpOyAvLyB0aGUgc2Vjb25kIHBhcmFtZXRlciBwYXNzZWQg4oCcaGVsbG/igJ1cbiAgICAgKiAgfSwgdGhpcywgWzIzMywgXCJoZWxsb1wiXSk7XG4gICAgICogPC9wcmU+XG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICog5omn6KGM5Zue6LCD5Ye95pWwXG4gICAgICogQHBhcmFtIGNhbGxiYWNrIHtGdW5jdGlvbn0g5Zue6LCD5pa55rOVXG4gICAgICogQHBhcmFtIHRoaXNPYmoge2FueX0g5Zue6LCD5pa55rOVdGhpc+S9nOeUqOWfn1xuICAgICAqIEBwYXJhbSBwYXJhbXMge2FueVtdfSDlm57osIPmlrnms5Xlj4LmlbBcbiAgICAgKiBAcmV0dXJucyB7VHdlZW59IFR3ZWVu5a+56LGh5pys6LqrXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAZXhhbXBsZVxuICAgICAqIDxwcmU+XG4gICAgICogIFR3ZWVuLmdldChkaXNwbGF5KS5jYWxsKGZ1bmN0aW9uIChhOm51bWJlciwgYjpzdHJpbmcpIHtcbiAgICAgKiAgICAgIGNvbnNvbGUubG9nKFwiYTogXCIgKyBhKTsgLy/lr7nlupTkvKDlhaXnmoTnrKzkuIDkuKrlj4LmlbAgMjMzXG4gICAgICogICAgICBjb25zb2xlLmxvZyhcImI6IFwiICsgYik7IC8v5a+55bqU5Lyg5YWl55qE56ys5LqM5Liq5Y+C5pWwIOKAnGhlbGxv4oCdXG4gICAgICogIH0sIHRoaXMsIFsyMzMsIFwiaGVsbG9cIl0pO1xuICAgICAqIDwvcHJlPlxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBjYWxsKGNhbGxiYWNrOiBGdW5jdGlvbiwgdGhpc09iajogYW55ID0gdW5kZWZpbmVkLCBwYXJhbXM6IGFueVtdID0gdW5kZWZpbmVkKTogVHdlZW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fYWRkQWN0aW9uKHsgZjogY2FsbGJhY2ssIHA6IHBhcmFtcyA/IHBhcmFtcyA6IFtdLCBvOiB0aGlzT2JqID8gdGhpc09iaiA6IHRoaXMuX3RhcmdldCB9KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBOb3cgbW9kaWZ5IHRoZSBwcm9wZXJ0aWVzIG9mIHRoZSBzcGVjaWZpZWQgb2JqZWN0IHRvIHRoZSBzcGVjaWZpZWQgdmFsdWVcbiAgICAgKiBAcGFyYW0gcHJvcHMge09iamVjdH0gUHJvcGVydHkgc2V0IG9mIGFuIG9iamVjdFxuICAgICAqIEBwYXJhbSB0YXJnZXQgVGhlIG9iamVjdCB3aG9zZSBUd2VlbiB0byBiZSByZXN1bWVkXG4gICAgICogQHJldHVybnMge1R3ZWVufSBUd2VlbiBvYmplY3QgaXRzZWxmXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDnq4vljbPlsIbmjIflrprlr7nosaHnmoTlsZ7mgKfkv67mlLnkuLrmjIflrprlgLxcbiAgICAgKiBAcGFyYW0gcHJvcHMge09iamVjdH0g5a+56LGh55qE5bGe5oCn6ZuG5ZCIXG4gICAgICogQHBhcmFtIHRhcmdldCDopoHnu6fnu63mkq3mlL4gVHdlZW4g55qE5a+56LGhXG4gICAgICogQHJldHVybnMge1R3ZWVufSBUd2VlbuWvueixoeacrOi6q1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICovXG4gICAgcHVibGljIHNldChwcm9wczogYW55LCB0YXJnZXQgPSBudWxsKTogVHdlZW4ge1xuICAgICAgICAvL+abtOaWsOW9k+WJjeaVsOaNru+8jOS/neivgee8k+WKqOa1geeVheaAp1xuICAgICAgICB0aGlzLl9hcHBlbmRRdWV1ZVByb3BzKHByb3BzKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FkZEFjdGlvbih7IGY6IHRoaXMuX3NldCwgbzogdGhpcywgcDogW3Byb3BzLCB0YXJnZXQgPyB0YXJnZXQgOiB0aGlzLl90YXJnZXRdIH0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEV4ZWN1dGVcbiAgICAgKiBAcGFyYW0gdHdlZW4ge1R3ZWVufSBUaGUgVHdlZW4gb2JqZWN0IHRvIGJlIG9wZXJhdGVkLiBEZWZhdWx0OiB0aGlzXG4gICAgICogQHJldHVybnMge1R3ZWVufSBUd2VlbiBvYmplY3QgaXRzZWxmXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiDmiafooYxcbiAgICAgKiBAcGFyYW0gdHdlZW4ge1R3ZWVufSDpnIDopoHmk43kvZznmoQgVHdlZW4g5a+56LGh77yM6buY6K6kdGhpc1xuICAgICAqIEByZXR1cm5zIHtUd2Vlbn0gVHdlZW7lr7nosaHmnKzouqtcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBwbGF5KHR3ZWVuPzogVHdlZW4pOiBUd2VlbiB7XG4gICAgICAgIGlmICghdHdlZW4pIHtcbiAgICAgICAgICAgIHR3ZWVuID0gdGhpcztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5jYWxsKHR3ZWVuLnNldFBhdXNlZCwgdHdlZW4sIFtmYWxzZV0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIFBhdXNlXG4gICAgICogQHBhcmFtIHR3ZWVuIHtUd2Vlbn0gVGhlIFR3ZWVuIG9iamVjdCB0byBiZSBvcGVyYXRlZC4gRGVmYXVsdDogdGhpc1xuICAgICAqIEByZXR1cm5zIHtUd2Vlbn0gVHdlZW4gb2JqZWN0IGl0c2VsZlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICog5pqC5YGcXG4gICAgICogQHBhcmFtIHR3ZWVuIHtUd2Vlbn0g6ZyA6KaB5pON5L2c55qEIFR3ZWVuIOWvueixoe+8jOm7mOiupHRoaXNcbiAgICAgKiBAcmV0dXJucyB7VHdlZW59IFR3ZWVu5a+56LGh5pys6LqrXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgcGF1c2UodHdlZW4/OiBUd2Vlbik6IFR3ZWVuIHtcbiAgICAgICAgaWYgKCF0d2Vlbikge1xuICAgICAgICAgICAgdHdlZW4gPSB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmNhbGwodHdlZW4uc2V0UGF1c2VkLCB0d2VlbiwgW3RydWVdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIFR3ZWVuI3RpY2tcbiAgICAgKiBAcGFyYW0gZGVsdGEge251bWJlcn1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICovXG4gICAgcHVibGljICR0aWNrKGRlbHRhOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRQb3NpdGlvbih0aGlzLl9wcmV2UG9zaXRpb24gKyBkZWx0YSk7XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgRWFzZSB7XG4gICAgLyoqXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKi9cbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGdldOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXQoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKGFtb3VudCA8IC0xKSB7XG4gICAgICAgICAgICBhbW91bnQgPSAtMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYW1vdW50ID4gMSkge1xuICAgICAgICAgICAgYW1vdW50ID0gMTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQ6IG51bWJlcikge1xuICAgICAgICAgICAgaWYgKGFtb3VudCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYW1vdW50IDwgMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0ICogKHQgKiAtYW1vdW50ICsgMSArIGFtb3VudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdCAqICgoMiAtIHQpICogYW1vdW50ICsgKDEgLSBhbW91bnQpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBwb3cgaW4uU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBnZXQgcG93IGlu44CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldFBvd0luKHBvdzogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodDogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5wb3codCwgcG93KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldCBwb3cgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogZ2V0IHBvdyBvdXTjgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgZ2V0UG93T3V0KHBvdzogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodDogbnVtYmVyKSB7XG4gICAgICAgICAgICByZXR1cm4gMSAtIE1hdGgucG93KDEgLSB0LCBwb3cpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IHBvdyBpbiBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBnZXQgcG93IGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRQb3dJbk91dChwb3c6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQ6IG51bWJlcikge1xuICAgICAgICAgICAgaWYgKCh0ICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqIE1hdGgucG93KHQsIHBvdyk7XG4gICAgICAgICAgICByZXR1cm4gMSAtIDAuNSAqIE1hdGguYWJzKE1hdGgucG93KDIgLSB0LCBwb3cpKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHF1YWQgaW4uU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBxdWFkIGlu44CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1YWRJbiA9IEVhc2UuZ2V0UG93SW4oMik7XG4gICAgLyoqXG4gICAgICogcXVhZCBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBxdWFkIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBxdWFkT3V0ID0gRWFzZS5nZXRQb3dPdXQoMik7XG4gICAgLyoqXG4gICAgICogcXVhZCBpbiBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBxdWFkIGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBxdWFkSW5PdXQgPSBFYXNlLmdldFBvd0luT3V0KDIpO1xuICAgIC8qKlxuICAgICAqIGN1YmljIGluLlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogY3ViaWMgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY3ViaWNJbiA9IEVhc2UuZ2V0UG93SW4oMyk7XG4gICAgLyoqXG4gICAgICogY3ViaWMgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogY3ViaWMgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGN1YmljT3V0ID0gRWFzZS5nZXRQb3dPdXQoMyk7XG4gICAgLyoqXG4gICAgICogY3ViaWMgaW4gb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogY3ViaWMgaW4gb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGN1YmljSW5PdXQgPSBFYXNlLmdldFBvd0luT3V0KDMpO1xuICAgIC8qKlxuICAgICAqIHF1YXJ0IGluLlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVhcnQgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcXVhcnRJbiA9IEVhc2UuZ2V0UG93SW4oNCk7XG4gICAgLyoqXG4gICAgICogcXVhcnQgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVhcnQgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1YXJ0T3V0ID0gRWFzZS5nZXRQb3dPdXQoNCk7XG4gICAgLyoqXG4gICAgICogcXVhcnQgaW4gb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVhcnQgaW4gb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1YXJ0SW5PdXQgPSBFYXNlLmdldFBvd0luT3V0KDQpO1xuICAgIC8qKlxuICAgICAqIHF1aW50IGluLlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVpbnQgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgcXVpbnRJbiA9IEVhc2UuZ2V0UG93SW4oNSk7XG4gICAgLyoqXG4gICAgICogcXVpbnQgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVpbnQgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1aW50T3V0ID0gRWFzZS5nZXRQb3dPdXQoNSk7XG4gICAgLyoqXG4gICAgICogcXVpbnQgaW4gb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogcXVpbnQgaW4gb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHF1aW50SW5PdXQgPSBFYXNlLmdldFBvd0luT3V0KDUpO1xuXG4gICAgLyoqXG4gICAgICogc2luZSBpbi5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIHNpbmUgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgc2luZUluKHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gMSAtIE1hdGguY29zKHQgKiBNYXRoLlBJIC8gMik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2luZSBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBzaW5lIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBzaW5lT3V0KHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gTWF0aC5zaW4odCAqIE1hdGguUEkgLyAyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBzaW5lIGluIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIHNpbmUgaW4gb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIHNpbmVJbk91dCh0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5jb3MoTWF0aC5QSSAqIHQpIC0gMSlcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBnZXQgYmFjayBpbi5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGdldCBiYWNrIGlu44CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEJhY2tJbihhbW91bnQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQ6IG51bWJlcikge1xuICAgICAgICAgICAgcmV0dXJuIHQgKiB0ICogKChhbW91bnQgKyAxKSAqIHQgLSBhbW91bnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYmFjayBpbi5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGJhY2sgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYmFja0luID0gRWFzZS5nZXRCYWNrSW4oMS43KTtcblxuICAgIC8qKlxuICAgICAqIGdldCBiYWNrIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGdldCBiYWNrIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRCYWNrT3V0KGFtb3VudDogbnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgcmV0dXJuICgtLXQgKiB0ICogKChhbW91bnQgKyAxKSAqIHQgKyBhbW91bnQpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBiYWNrIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGJhY2sgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGJhY2tPdXQgPSBFYXNlLmdldEJhY2tPdXQoMS43KTtcblxuICAgIC8qKlxuICAgICAqIGdldCBiYWNrIGluIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGdldCBiYWNrIGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRCYWNrSW5PdXQoYW1vdW50OiBudW1iZXIpIHtcbiAgICAgICAgYW1vdW50ICo9IDEuNTI1O1xuICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHQ6IG51bWJlcikge1xuICAgICAgICAgICAgaWYgKCh0ICo9IDIpIDwgMSkgcmV0dXJuIDAuNSAqICh0ICogdCAqICgoYW1vdW50ICsgMSkgKiB0IC0gYW1vdW50KSk7XG4gICAgICAgICAgICByZXR1cm4gMC41ICogKCh0IC09IDIpICogdCAqICgoYW1vdW50ICsgMSkgKiB0ICsgYW1vdW50KSArIDIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYmFjayBpbiBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBiYWNrIGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBiYWNrSW5PdXQgPSBFYXNlLmdldEJhY2tJbk91dCgxLjcpO1xuXG4gICAgLyoqXG4gICAgICogY2lyYyBpbi5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGNpcmMgaW7jgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2lyY0luKHQ6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gLShNYXRoLnNxcnQoMSAtIHQgKiB0KSAtIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGNpcmMgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogY2lyYyBvdXTjgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgY2lyY091dCh0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgxIC0gKC0tdCkgKiB0KTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBjaXJjIGluIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGNpcmMgaW4gb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGNpcmNJbk91dCh0OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCh0ICo9IDIpIDwgMSkge1xuICAgICAgICAgICAgcmV0dXJuIC0wLjUgKiAoTWF0aC5zcXJ0KDEgLSB0ICogdCkgLSAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gMC41ICogKE1hdGguc3FydCgxIC0gKHQgLT0gMikgKiB0KSArIDEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGJvdW5jZSBpbi5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGJvdW5jZSBpbuOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBib3VuY2VJbih0OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIDEgLSBFYXNlLmJvdW5jZU91dCgxIC0gdCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYm91bmNlIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGJvdW5jZSBvdXTjgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYm91bmNlT3V0KHQ6IG51bWJlcikge1xuICAgICAgICBpZiAodCA8IDEgLyAyLjc1KSB7XG4gICAgICAgICAgICByZXR1cm4gKDcuNTYyNSAqIHQgKiB0KTtcbiAgICAgICAgfSBlbHNlIGlmICh0IDwgMiAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiAoNy41NjI1ICogKHQgLT0gMS41IC8gMi43NSkgKiB0ICsgMC43NSk7XG4gICAgICAgIH0gZWxzZSBpZiAodCA8IDIuNSAvIDIuNzUpIHtcbiAgICAgICAgICAgIHJldHVybiAoNy41NjI1ICogKHQgLT0gMi4yNSAvIDIuNzUpICogdCArIDAuOTM3NSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gKDcuNTYyNSAqICh0IC09IDIuNjI1IC8gMi43NSkgKiB0ICsgMC45ODQzNzUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogYm91bmNlIGluIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGJvdW5jZSBpbiBvdXTjgILor7fmn6XnnIvnpLrkvotcbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSB6aF9DTlxuICAgICAqL1xuICAgIHB1YmxpYyBzdGF0aWMgYm91bmNlSW5PdXQodDogbnVtYmVyKSB7XG4gICAgICAgIGlmICh0IDwgMC41KSByZXR1cm4gRWFzZS5ib3VuY2VJbih0ICogMikgKiAuNTtcbiAgICAgICAgcmV0dXJuIEVhc2UuYm91bmNlT3V0KHQgKiAyIC0gMSkgKiAwLjUgKyAwLjU7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZ2V0IGVsYXN0aWMgaW4uU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBnZXQgZWxhc3RpYyBpbuOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRFbGFzdGljSW4oYW1wbGl0dWRlOiBudW1iZXIsIHBlcmlvZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwaTIgPSBNYXRoLlBJICogMjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGlmICh0ID09IDAgfHwgdCA9PSAxKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGxldCBzID0gcGVyaW9kIC8gcGkyICogTWF0aC5hc2luKDEgLyBhbXBsaXR1ZGUpO1xuICAgICAgICAgICAgcmV0dXJuIC0oYW1wbGl0dWRlICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAtIHMpICogcGkyIC8gcGVyaW9kKSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBlbGFzdGljIGluLlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogZWxhc3RpYyBpbuOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBlbGFzdGljSW4gPSBFYXNlLmdldEVsYXN0aWNJbigxLCAwLjMpO1xuXG4gICAgLyoqXG4gICAgICogZ2V0IGVsYXN0aWMgb3V0LlNlZSBleGFtcGxlLlxuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIGVuX1VTXG4gICAgICovXG4gICAgLyoqXG4gICAgICogZ2V0IGVsYXN0aWMgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGdldEVsYXN0aWNPdXQoYW1wbGl0dWRlOiBudW1iZXIsIHBlcmlvZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwaTIgPSBNYXRoLlBJICogMjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGlmICh0ID09IDAgfHwgdCA9PSAxKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGxldCBzID0gcGVyaW9kIC8gcGkyICogTWF0aC5hc2luKDEgLyBhbXBsaXR1ZGUpO1xuICAgICAgICAgICAgcmV0dXJuIChhbXBsaXR1ZGUgKiBNYXRoLnBvdygyLCAtMTAgKiB0KSAqIE1hdGguc2luKCh0IC0gcykgKiBwaTIgLyBwZXJpb2QpICsgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBlbGFzdGljIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGVsYXN0aWMgb3V044CC6K+35p+l55yL56S65L6LXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgemhfQ05cbiAgICAgKi9cbiAgICBwdWJsaWMgc3RhdGljIGVsYXN0aWNPdXQgPSBFYXNlLmdldEVsYXN0aWNPdXQoMSwgMC4zKTtcblxuICAgIC8qKlxuICAgICAqIGdldCBlbGFzdGljIGluIG91dC5TZWUgZXhhbXBsZS5cbiAgICAgKiBAdmVyc2lvbiBFZ3JldCAyLjRcbiAgICAgKiBAcGxhdGZvcm0gV2ViLE5hdGl2ZVxuICAgICAqIEBsYW5ndWFnZSBlbl9VU1xuICAgICAqL1xuICAgIC8qKlxuICAgICAqIGdldCBlbGFzdGljIGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBnZXRFbGFzdGljSW5PdXQoYW1wbGl0dWRlOiBudW1iZXIsIHBlcmlvZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBwaTIgPSBNYXRoLlBJICogMjtcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uICh0OiBudW1iZXIpIHtcbiAgICAgICAgICAgIGxldCBzID0gcGVyaW9kIC8gcGkyICogTWF0aC5hc2luKDEgLyBhbXBsaXR1ZGUpO1xuICAgICAgICAgICAgaWYgKCh0ICo9IDIpIDwgMSkgcmV0dXJuIC0wLjUgKiAoYW1wbGl0dWRlICogTWF0aC5wb3coMiwgMTAgKiAodCAtPSAxKSkgKiBNYXRoLnNpbigodCAtIHMpICogcGkyIC8gcGVyaW9kKSk7XG4gICAgICAgICAgICByZXR1cm4gYW1wbGl0dWRlICogTWF0aC5wb3coMiwgLTEwICogKHQgLT0gMSkpICogTWF0aC5zaW4oKHQgLSBzKSAqIHBpMiAvIHBlcmlvZCkgKiAwLjUgKyAxO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogZWxhc3RpYyBpbiBvdXQuU2VlIGV4YW1wbGUuXG4gICAgICogQHZlcnNpb24gRWdyZXQgMi40XG4gICAgICogQHBsYXRmb3JtIFdlYixOYXRpdmVcbiAgICAgKiBAbGFuZ3VhZ2UgZW5fVVNcbiAgICAgKi9cbiAgICAvKipcbiAgICAgKiBlbGFzdGljIGluIG91dOOAguivt+afpeeci+ekuuS+i1xuICAgICAqIEB2ZXJzaW9uIEVncmV0IDIuNFxuICAgICAqIEBwbGF0Zm9ybSBXZWIsTmF0aXZlXG4gICAgICogQGxhbmd1YWdlIHpoX0NOXG4gICAgICovXG4gICAgcHVibGljIHN0YXRpYyBlbGFzdGljSW5PdXQgPSBFYXNlLmdldEVsYXN0aWNJbk91dCgxLCAwLjMgKiAxLjUpO1xufVxuXG4iXX0=