"use strict";
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