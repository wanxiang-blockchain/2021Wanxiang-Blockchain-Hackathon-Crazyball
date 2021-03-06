import { handler, gen_handler } from "../util"
import { LinkList, LinkListNode } from "../linklist"

export class TimerMgr {
    private static inst: TimerMgr;
    private iterList: LinkList<TimerHandler>;
    private pendingList: LinkList<TimerHandler>;
    private pool: TimerHandler[];
    private key: number;

    private constructor() {
        this.key = 0;
        this.pool = [];
        this.iterList = new LinkList<TimerHandler>();
        this.pendingList = new LinkList<TimerHandler>();
    }

    static getInst(): TimerMgr {
        if (!this.inst) {
            this.inst = new TimerMgr();
        }
        return this.inst;
    }

    add(interval: number, delay: number, repeat: number, cb: handler, is_updater: boolean = false): number {
        let th = this.pool.pop();
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
            th = { interval, delay, repeat, elapsed: 0, times: 0, is_updater, cb };
        }
        const key = this.pendingList.append(++this.key, th);
        // cc.info(`[TimerMgr]addPending, key=${key}`);
        return key;
    }

    remove(key: number) {
        if (!this.removeIter(key)) {
            this.removePending(key);
        }
    }

    private removeIter(key: number) {
        const node = this.iterList.remove(key);
        if (node) {
            this.pool.push(node.data);
            // cc.info(`[TimerMgr]removeIter, key=${key}`);
            return true;
        }
        return false;
    }

    private removePending(key: number) {
        const node = this.pendingList.remove(key);
        if (node) {
            this.pool.push(node.data);
            // cc.info(`[TimerMgr]removePending, key=${key}`);
            return true;
        }
        return false;
    }

    loop(interval: number, cb: handler): number {
        return this.add(interval, 0, 0, cb);
    }

    loopTimes(interval: number, repeat: number, cb: handler): number {
        return this.add(interval, 0, repeat, cb);
    }

    frameLoop(cb: handler): number {
        return this.add(1 / 24, 0, 0, cb);
    }

    delayLoop(interval: number, delay: number, cb: handler): number {
        return this.add(interval, delay, 0, cb);
    }

    once(delay: number, cb: handler): number {
        return this.add(0, delay, 1, cb);
    }

    add_updater(cb: handler): number {
        return this.add(0, 0, 0, cb, true);
    }

    update(dt: number) {
        let node = this.iterList.head;

        //???????????????????????????
        while (node) {
            if (node.data.is_updater) {
                //?????????next????????????????????????????????????node??????next?????????
                const next = node.next;
                node.data.cb.exec(dt);
                node = next;
                continue;
            }

            if (node.data.repeat != 0 && node.data.times >= node.data.repeat) {
                const next = node.next;
                this.removeIter(node.key);
                node = next;
                continue;
            }

            if (node.data.elapsed >= node.data.delay + node.data.interval) {
                //exec?????????????????????remove????????????timerHandler.?????????????????????????????????
                // cc.info(`[TimerMgr]execHandler, key=${node.key}`);
                const next = node.next;
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

        //???????????????????????????
        node = this.pendingList.head;
        while (node) {
            const key = node.key;
            const th = node.data;
            node = node.next;
            this.pendingList.remove(key);
            this.iterList.append(key, th);
        }
    }
}

type TimerHandler = {
    interval: number;    //????????????, ?????????????????????????????????0????????????
    delay: number;       //??????????????????????????????
    repeat: number;      //?????????????????????0???????????????
    elapsed: number;     //??????????????????
    times: number;       //???????????????
    is_updater: boolean; //??????????????????
    cb: handler;         //????????????
}