
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/timer/timer_mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3RpbWVyL3RpbWVyX21nci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQSx3Q0FBb0Q7QUFFcEQ7SUFPSTtRQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7UUFDZixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksbUJBQVEsRUFBZ0IsQ0FBQztRQUM3QyxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksbUJBQVEsRUFBZ0IsQ0FBQztJQUNwRCxDQUFDO0lBRU0sZ0JBQU8sR0FBZDtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLFFBQVEsRUFBRSxDQUFDO1NBQzlCO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ3JCLENBQUM7SUFFRCxzQkFBRyxHQUFILFVBQUksUUFBZ0IsRUFBRSxLQUFhLEVBQUUsTUFBYyxFQUFFLEVBQVcsRUFBRSxVQUEyQjtRQUEzQiwyQkFBQSxFQUFBLGtCQUEyQjtRQUN6RixJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksRUFBRSxFQUFFO1lBQ0osRUFBRSxDQUFDLFFBQVEsR0FBRyxRQUFRLENBQUM7WUFDdkIsRUFBRSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7WUFDakIsRUFBRSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7WUFDbkIsRUFBRSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7WUFDZixFQUFFLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNiLEVBQUUsQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1lBQzNCLEVBQUUsQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1NBQ2Q7YUFDSTtZQUNELEVBQUUsR0FBRyxFQUFFLFFBQVEsVUFBQSxFQUFFLEtBQUssT0FBQSxFQUFFLE1BQU0sUUFBQSxFQUFFLE9BQU8sRUFBRSxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxVQUFVLFlBQUEsRUFBRSxFQUFFLElBQUEsRUFBRSxDQUFDO1NBQzFFO1FBQ0QsSUFBTSxHQUFHLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ3BELCtDQUErQztRQUMvQyxPQUFPLEdBQUcsQ0FBQztJQUNmLENBQUM7SUFFRCx5QkFBTSxHQUFOLFVBQU8sR0FBVztRQUNkLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDM0I7SUFDTCxDQUFDO0lBRU8sNkJBQVUsR0FBbEIsVUFBbUIsR0FBVztRQUMxQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN2QyxJQUFJLElBQUksRUFBRTtZQUNOLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMxQiwrQ0FBK0M7WUFDL0MsT0FBTyxJQUFJLENBQUM7U0FDZjtRQUNELE9BQU8sS0FBSyxDQUFDO0lBQ2pCLENBQUM7SUFFTyxnQ0FBYSxHQUFyQixVQUFzQixHQUFXO1FBQzdCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzFDLElBQUksSUFBSSxFQUFFO1lBQ04sSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzFCLGtEQUFrRDtZQUNsRCxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDakIsQ0FBQztJQUVELHVCQUFJLEdBQUosVUFBSyxRQUFnQixFQUFFLEVBQVc7UUFDOUIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw0QkFBUyxHQUFULFVBQVUsUUFBZ0IsRUFBRSxNQUFjLEVBQUUsRUFBVztRQUNuRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFLENBQUMsRUFBRSxNQUFNLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDN0MsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxFQUFXO1FBQ2pCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELDRCQUFTLEdBQVQsVUFBVSxRQUFnQixFQUFFLEtBQWEsRUFBRSxFQUFXO1FBQ2xELE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM1QyxDQUFDO0lBRUQsdUJBQUksR0FBSixVQUFLLEtBQWEsRUFBRSxFQUFXO1FBQzNCLE9BQU8sSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUQsOEJBQVcsR0FBWCxVQUFZLEVBQVc7UUFDbkIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUN2QyxDQUFDO0lBRUQseUJBQU0sR0FBTixVQUFPLEVBQVU7UUFDYixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQztRQUU5QixXQUFXO1FBQ1gsT0FBTyxJQUFJLEVBQUU7WUFDVCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUN0QixrQ0FBa0M7Z0JBQ2xDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDdEIsSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDWixTQUFTO2FBQ1o7WUFFRCxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDOUQsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBQzFCLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ1osU0FBUzthQUNaO1lBRUQsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRTtnQkFDM0QsK0NBQStDO2dCQUMvQyxxREFBcUQ7Z0JBQ3JELElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2xCLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUNwQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsQ0FBQztnQkFDcEIsSUFBSSxHQUFHLElBQUksQ0FBQzthQUNmO2lCQUNJO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxJQUFJLEVBQUUsQ0FBQztnQkFDeEIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDcEI7U0FDSjtRQUVELFdBQVc7UUFDWCxJQUFJLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUM7UUFDN0IsT0FBTyxJQUFJLEVBQUU7WUFDVCxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO1lBQ3JCLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckIsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0wsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQXZJQSxBQXVJQyxJQUFBO0FBdklZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaGFuZGxlciwgZ2VuX2hhbmRsZXIgfSBmcm9tIFwiLi4vdXRpbFwiXG5pbXBvcnQgeyBMaW5rTGlzdCwgTGlua0xpc3ROb2RlIH0gZnJvbSBcIi4uL2xpbmtsaXN0XCJcblxuZXhwb3J0IGNsYXNzIFRpbWVyTWdyIHtcbiAgICBwcml2YXRlIHN0YXRpYyBpbnN0OiBUaW1lck1ncjtcbiAgICBwcml2YXRlIGl0ZXJMaXN0OiBMaW5rTGlzdDxUaW1lckhhbmRsZXI+O1xuICAgIHByaXZhdGUgcGVuZGluZ0xpc3Q6IExpbmtMaXN0PFRpbWVySGFuZGxlcj47XG4gICAgcHJpdmF0ZSBwb29sOiBUaW1lckhhbmRsZXJbXTtcbiAgICBwcml2YXRlIGtleTogbnVtYmVyO1xuXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5rZXkgPSAwO1xuICAgICAgICB0aGlzLnBvb2wgPSBbXTtcbiAgICAgICAgdGhpcy5pdGVyTGlzdCA9IG5ldyBMaW5rTGlzdDxUaW1lckhhbmRsZXI+KCk7XG4gICAgICAgIHRoaXMucGVuZGluZ0xpc3QgPSBuZXcgTGlua0xpc3Q8VGltZXJIYW5kbGVyPigpO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZXRJbnN0KCk6IFRpbWVyTWdyIHtcbiAgICAgICAgaWYgKCF0aGlzLmluc3QpIHtcbiAgICAgICAgICAgIHRoaXMuaW5zdCA9IG5ldyBUaW1lck1ncigpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLmluc3Q7XG4gICAgfVxuXG4gICAgYWRkKGludGVydmFsOiBudW1iZXIsIGRlbGF5OiBudW1iZXIsIHJlcGVhdDogbnVtYmVyLCBjYjogaGFuZGxlciwgaXNfdXBkYXRlcjogYm9vbGVhbiA9IGZhbHNlKTogbnVtYmVyIHtcbiAgICAgICAgbGV0IHRoID0gdGhpcy5wb29sLnBvcCgpO1xuICAgICAgICBpZiAodGgpIHtcbiAgICAgICAgICAgIHRoLmludGVydmFsID0gaW50ZXJ2YWw7XG4gICAgICAgICAgICB0aC5kZWxheSA9IGRlbGF5O1xuICAgICAgICAgICAgdGgucmVwZWF0ID0gcmVwZWF0O1xuICAgICAgICAgICAgdGguZWxhcHNlZCA9IDA7XG4gICAgICAgICAgICB0aC50aW1lcyA9IDA7XG4gICAgICAgICAgICB0aC5pc191cGRhdGVyID0gaXNfdXBkYXRlcjtcbiAgICAgICAgICAgIHRoLmNiID0gY2I7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aCA9IHsgaW50ZXJ2YWwsIGRlbGF5LCByZXBlYXQsIGVsYXBzZWQ6IDAsIHRpbWVzOiAwLCBpc191cGRhdGVyLCBjYiB9O1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGtleSA9IHRoaXMucGVuZGluZ0xpc3QuYXBwZW5kKCsrdGhpcy5rZXksIHRoKTtcbiAgICAgICAgLy8gY2MuaW5mbyhgW1RpbWVyTWdyXWFkZFBlbmRpbmcsIGtleT0ke2tleX1gKTtcbiAgICAgICAgcmV0dXJuIGtleTtcbiAgICB9XG5cbiAgICByZW1vdmUoa2V5OiBudW1iZXIpIHtcbiAgICAgICAgaWYgKCF0aGlzLnJlbW92ZUl0ZXIoa2V5KSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVQZW5kaW5nKGtleSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZUl0ZXIoa2V5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMuaXRlckxpc3QucmVtb3ZlKGtleSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgLy8gY2MuaW5mbyhgW1RpbWVyTWdyXXJlbW92ZUl0ZXIsIGtleT0ke2tleX1gKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlbW92ZVBlbmRpbmcoa2V5OiBudW1iZXIpIHtcbiAgICAgICAgY29uc3Qgbm9kZSA9IHRoaXMucGVuZGluZ0xpc3QucmVtb3ZlKGtleSk7XG4gICAgICAgIGlmIChub2RlKSB7XG4gICAgICAgICAgICB0aGlzLnBvb2wucHVzaChub2RlLmRhdGEpO1xuICAgICAgICAgICAgLy8gY2MuaW5mbyhgW1RpbWVyTWdyXXJlbW92ZVBlbmRpbmcsIGtleT0ke2tleX1gKTtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBsb29wKGludGVydmFsOiBudW1iZXIsIGNiOiBoYW5kbGVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKGludGVydmFsLCAwLCAwLCBjYik7XG4gICAgfVxuXG4gICAgbG9vcFRpbWVzKGludGVydmFsOiBudW1iZXIsIHJlcGVhdDogbnVtYmVyLCBjYjogaGFuZGxlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpbnRlcnZhbCwgMCwgcmVwZWF0LCBjYik7XG4gICAgfVxuXG4gICAgZnJhbWVMb29wKGNiOiBoYW5kbGVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKDEgLyAyNCwgMCwgMCwgY2IpO1xuICAgIH1cblxuICAgIGRlbGF5TG9vcChpbnRlcnZhbDogbnVtYmVyLCBkZWxheTogbnVtYmVyLCBjYjogaGFuZGxlcik6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZChpbnRlcnZhbCwgZGVsYXksIDAsIGNiKTtcbiAgICB9XG5cbiAgICBvbmNlKGRlbGF5OiBudW1iZXIsIGNiOiBoYW5kbGVyKTogbnVtYmVyIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkKDAsIGRlbGF5LCAxLCBjYik7XG4gICAgfVxuXG4gICAgYWRkX3VwZGF0ZXIoY2I6IGhhbmRsZXIpOiBudW1iZXIge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGQoMCwgMCwgMCwgY2IsIHRydWUpO1xuICAgIH1cblxuICAgIHVwZGF0ZShkdDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBub2RlID0gdGhpcy5pdGVyTGlzdC5oZWFkO1xuXG4gICAgICAgIC8v5omn6KGM5b2T5YmN5bin55qE5a6a5pe25ZmoXG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhLmlzX3VwZGF0ZXIpIHtcbiAgICAgICAgICAgICAgICAvL+WFiOS/neWtmG5leHTlvJXnlKjvvIzpmLLmraLlm57osIPlh73mlbDph4zlm57mlLZub2Rl5a+86Ie0bmV4dOiiq+S/ruaUuVxuICAgICAgICAgICAgICAgIGNvbnN0IG5leHQgPSBub2RlLm5leHQ7XG4gICAgICAgICAgICAgICAgbm9kZS5kYXRhLmNiLmV4ZWMoZHQpO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhLnJlcGVhdCAhPSAwICYmIG5vZGUuZGF0YS50aW1lcyA+PSBub2RlLmRhdGEucmVwZWF0KSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUl0ZXIobm9kZS5rZXkpO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0O1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobm9kZS5kYXRhLmVsYXBzZWQgPj0gbm9kZS5kYXRhLmRlbGF5ICsgbm9kZS5kYXRhLmludGVydmFsKSB7XG4gICAgICAgICAgICAgICAgLy9leGVj5Zue6LCD5Y+v6IO95Lya6LCD55SocmVtb3Zl5Ye95pWw5Zue5pS2dGltZXJIYW5kbGVyLumBv+WFjeaTjeS9nOW3suWbnuaUtueahOWvueixoeOAglxuICAgICAgICAgICAgICAgIC8vIGNjLmluZm8oYFtUaW1lck1ncl1leGVjSGFuZGxlciwga2V5PSR7bm9kZS5rZXl9YCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbmV4dCA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEudGltZXMrKztcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEuZWxhcHNlZCA9IG5vZGUuZGF0YS5kZWxheTtcbiAgICAgICAgICAgICAgICBub2RlLmRhdGEuY2IuZXhlYygpO1xuICAgICAgICAgICAgICAgIG5vZGUgPSBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgbm9kZS5kYXRhLmVsYXBzZWQgKz0gZHQ7XG4gICAgICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8v5re75Yqg5LiL5LiA5bin55qE5a6a5pe25ZmoXG4gICAgICAgIG5vZGUgPSB0aGlzLnBlbmRpbmdMaXN0LmhlYWQ7XG4gICAgICAgIHdoaWxlIChub2RlKSB7XG4gICAgICAgICAgICBjb25zdCBrZXkgPSBub2RlLmtleTtcbiAgICAgICAgICAgIGNvbnN0IHRoID0gbm9kZS5kYXRhO1xuICAgICAgICAgICAgbm9kZSA9IG5vZGUubmV4dDtcbiAgICAgICAgICAgIHRoaXMucGVuZGluZ0xpc3QucmVtb3ZlKGtleSk7XG4gICAgICAgICAgICB0aGlzLml0ZXJMaXN0LmFwcGVuZChrZXksIHRoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxudHlwZSBUaW1lckhhbmRsZXIgPSB7XG4gICAgaW50ZXJ2YWw6IG51bWJlcjsgICAgLy/miafooYzpl7TpmpQsIOWPquaJp+ihjOS4gOasoeeahOWumuaXtuWZqOWAvOS4ujDvvIzljZXkvY3np5JcbiAgICBkZWxheTogbnVtYmVyOyAgICAgICAvL+W7tuaXtuWkmuS5heaJp+ihjO+8jOWNleS9jeenklxuICAgIHJlcGVhdDogbnVtYmVyOyAgICAgIC8v6KaB5omn6KGM5aSa5bCR5qyh77yMMOihqOekuuaXoOmZkOasoVxuICAgIGVsYXBzZWQ6IG51bWJlcjsgICAgIC8v5bey6L+H5Y6755qE5pe26Ze0XG4gICAgdGltZXM6IG51bWJlcjsgICAgICAgLy/lt7LmiafooYzmrKHmlbBcbiAgICBpc191cGRhdGVyOiBib29sZWFuOyAvL+aYr+WQpuavj+W4p+iwg+eUqFxuICAgIGNiOiBoYW5kbGVyOyAgICAgICAgIC8v5Zue6LCD5Ye95pWwXG59Il19