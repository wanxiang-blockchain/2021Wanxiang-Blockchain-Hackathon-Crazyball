"use strict";
cc._RF.push(module, '55db98KfNxEboJhHMMpseOV', 'timer_mgr');
// src/common/timer/timer_mgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TimerMgr = void 0;
var linklist_1 = require("../linklist");
var TimerMgr = /** @class */ (function () {
    function TimerMgr() {
        this.key = 0;
        this.pool = [];
        this.iterList = new linklist_1.LinkList();
        this.pendingList = new linklist_1.LinkList();
    }
    TimerMgr.getInst = function () {
        if (!this.inst) {
            this.inst = new TimerMgr();
        }
        return this.inst;
    };
    TimerMgr.prototype.add = function (interval, delay, repeat, cb, is_updater) {
        if (is_updater === void 0) { is_updater = false; }
        var th = this.pool.pop();
        if (th) {
            th.interval = interval;
            th.delay = delay;
            th.repeat = repeat;
            th.elapsed = 0;
            th.times = 0;
            th.is_updater = is_updater;
            th.cb = cb;
        }
        else {
            th = { interval: interval, delay: delay, repeat: repeat, elapsed: 0, times: 0, is_updater: is_updater, cb: cb };
        }
        var key = this.pendingList.append(++this.key, th);
        // cc.info(`[TimerMgr]addPending, key=${key}`);
        return key;
    };
    TimerMgr.prototype.remove = function (key) {
        if (!this.removeIter(key)) {
            this.removePending(key);
        }
    };
    TimerMgr.prototype.removeIter = function (key) {
        var node = this.iterList.remove(key);
        if (node) {
            this.pool.push(node.data);
            // cc.info(`[TimerMgr]removeIter, key=${key}`);
            return true;
        }
        return false;
    };
    TimerMgr.prototype.removePending = function (key) {
        var node = this.pendingList.remove(key);
        if (node) {
            this.pool.push(node.data);
            // cc.info(`[TimerMgr]removePending, key=${key}`);
            return true;
        }
        return false;
    };
    TimerMgr.prototype.loop = function (interval, cb) {
        return this.add(interval, 0, 0, cb);
    };
    TimerMgr.prototype.loopTimes = function (interval, repeat, cb) {
        return this.add(interval, 0, repeat, cb);
    };
    TimerMgr.prototype.frameLoop = function (cb) {
        return this.add(1 / 24, 0, 0, cb);
    };
    TimerMgr.prototype.delayLoop = function (interval, delay, cb) {
        return this.add(interval, delay, 0, cb);
    };
    TimerMgr.prototype.once = function (delay, cb) {
        return this.add(0, delay, 1, cb);
    };
    TimerMgr.prototype.add_updater = function (cb) {
        return this.add(0, 0, 0, cb, true);
    };
    TimerMgr.prototype.update = function (dt) {
        var node = this.iterList.head;
        //执行当前帧的定时器
        while (node) {
            if (node.data.is_updater) {
                //先保存next引用，防止回调函数里回收node导致next被修改
                var next = node.next;
                node.data.cb.exec(dt);
                node = next;
                continue;
            }
            if (node.data.repeat != 0 && node.data.times >= node.data.repeat) {
                var next = node.next;
                this.removeIter(node.key);
                node = next;
                continue;
            }
            if (node.data.elapsed >= node.data.delay + node.data.interval) {
                //exec回调可能会调用remove函数回收timerHandler.避免操作已回收的对象。
                // cc.info(`[TimerMgr]execHandler, key=${node.key}`);
                var next = node.next;
                node.data.times++;
                node.data.elapsed = node.data.delay;
                node.data.cb.exec();
                node = next;
            }
            else {
                node.data.elapsed += dt;
                node = node.next;
            }
        }
        //添加下一帧的定时器
        node = this.pendingList.head;
        while (node) {
            var key = node.key;
            var th = node.data;
            node = node.next;
            this.pendingList.remove(key);
            this.iterList.append(key, th);
        }
    };
    return TimerMgr;
}());
exports.TimerMgr = TimerMgr;

cc._RF.pop();