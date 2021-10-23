"use strict";
cc._RF.push(module, 'bdd09bYpc5GwI0jOASAzWlq', 'linklist');
// src/common/linklist.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkList = void 0;
var LinkList = /** @class */ (function () {
    function LinkList() {
        this._head = this._tail = null;
        this.pool = [];
    }
    LinkList.prototype.spawn_node = function (key, data) {
        var node = this.pool.pop();
        if (node) {
            node.key = key;
            node.data = data;
            node.next = null;
        }
        else {
            node = { key: key, data: data, next: null };
        }
        return node;
    };
    Object.defineProperty(LinkList.prototype, "head", {
        get: function () {
            return this._head;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(LinkList.prototype, "tail", {
        get: function () {
            return this._tail;
        },
        enumerable: false,
        configurable: true
    });
    LinkList.prototype.append = function (key, data) {
        var node = this.spawn_node(key, data);
        //将node加到linklist末尾
        if (this._tail) {
            this._tail.next = node;
            this._tail = node;
        }
        else {
            this._head = this._tail = node;
        }
        return node.key;
    };
    LinkList.prototype.remove = function (key) {
        if (!key) {
            return null;
        }
        if (!this._head) {
            return null;
        }
        var prev;
        var curr = this._head;
        while (curr && curr.key != key) {
            prev = curr;
            curr = curr.next;
        }
        //没找到
        if (!curr) {
            return null;
        }
        if (!prev) {
            //curr为头节点(要区分curr是否同时为尾节点)
            this._head = curr.next;
            if (!curr.next) {
                this._tail = null;
            }
        }
        else {
            //curr非头节点(要区分curr是否为尾节点)
            prev.next = curr.next;
            if (!curr.next) {
                this._tail = prev;
            }
        }
        this.pool.push(curr);
        return curr;
    };
    return LinkList;
}());
exports.LinkList = LinkList;

cc._RF.pop();