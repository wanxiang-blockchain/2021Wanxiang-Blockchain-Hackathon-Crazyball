
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/linklist.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2xpbmtsaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQU1BO0lBTUk7UUFFSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO1FBQy9CLElBQUksQ0FBQyxJQUFJLEdBQUcsRUFBRSxDQUFDO0lBQ25CLENBQUM7SUFFTyw2QkFBVSxHQUFsQixVQUFtQixHQUFVLEVBQUUsSUFBTTtRQUVqQyxJQUFJLElBQUksR0FBbUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUMzQyxJQUFHLElBQUksRUFDUDtZQUNJLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1lBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7U0FDcEI7YUFFRDtZQUNJLElBQUksR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUUsSUFBSSxFQUFDLElBQUksRUFBRSxJQUFJLEVBQUMsSUFBSSxFQUFDLENBQUM7U0FDMUM7UUFDRCxPQUFPLElBQUksQ0FBQztJQUNoQixDQUFDO0lBRUQsc0JBQUksMEJBQUk7YUFBUjtZQUVJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLDBCQUFJO2FBQVI7WUFFSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQzs7O09BQUE7SUFFRCx5QkFBTSxHQUFOLFVBQU8sR0FBVSxFQUFFLElBQU07UUFFckIsSUFBSSxJQUFJLEdBQW1CLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQ3RELG1CQUFtQjtRQUNuQixJQUFHLElBQUksQ0FBQyxLQUFLLEVBQ2I7WUFDSSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDdkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDckI7YUFFRDtZQUNJLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7U0FDbEM7UUFDRCxPQUFPLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDcEIsQ0FBQztJQUVELHlCQUFNLEdBQU4sVUFBTyxHQUFVO1FBRWIsSUFBRyxDQUFDLEdBQUcsRUFDUDtZQUNJLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFDZDtZQUNJLE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxJQUFJLElBQW9CLENBQUM7UUFDekIsSUFBSSxJQUFJLEdBQW1CLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEMsT0FBTSxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLEVBQzdCO1lBQ0ksSUFBSSxHQUFHLElBQUksQ0FBQztZQUNaLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1NBQ3BCO1FBQ0QsS0FBSztRQUNMLElBQUcsQ0FBQyxJQUFJLEVBQ1I7WUFDSSxPQUFPLElBQUksQ0FBQztTQUNmO1FBQ0QsSUFBRyxDQUFDLElBQUksRUFDUjtZQUNJLDJCQUEyQjtZQUMzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDdkIsSUFBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQ2I7Z0JBQ0ksSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7YUFDckI7U0FDSjthQUVEO1lBQ0kseUJBQXlCO1lBQ3pCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQztZQUN0QixJQUFHLENBQUMsSUFBSSxDQUFDLElBQUksRUFDYjtnQkFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQzthQUNyQjtTQUNKO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDckIsT0FBTyxJQUFJLENBQUM7SUFDaEIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQWpHQSxBQWlHQyxJQUFBO0FBakdZLDRCQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IHR5cGUgTGlua0xpc3ROb2RlPFQ+ID0ge1xuICAgIGtleTpudW1iZXI7XG4gICAgZGF0YTpUO1xuICAgIG5leHQ6TGlua0xpc3ROb2RlPFQ+O1xufVxuXG5leHBvcnQgY2xhc3MgTGlua0xpc3Q8VD5cbntcbiAgICBwcml2YXRlIHBvb2w6TGlua0xpc3ROb2RlPFQ+W107XG4gICAgcHJpdmF0ZSBfaGVhZDpMaW5rTGlzdE5vZGU8VD47XG4gICAgcHJpdmF0ZSBfdGFpbDpMaW5rTGlzdE5vZGU8VD47XG5cbiAgICBjb25zdHJ1Y3RvcigpXG4gICAge1xuICAgICAgICB0aGlzLl9oZWFkID0gdGhpcy5fdGFpbCA9IG51bGw7XG4gICAgICAgIHRoaXMucG9vbCA9IFtdO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3Bhd25fbm9kZShrZXk6bnVtYmVyLCBkYXRhOlQpOkxpbmtMaXN0Tm9kZTxUPlxuICAgIHtcbiAgICAgICAgbGV0IG5vZGU6TGlua0xpc3ROb2RlPFQ+ID0gdGhpcy5wb29sLnBvcCgpO1xuICAgICAgICBpZihub2RlKVxuICAgICAgICB7XG4gICAgICAgICAgICBub2RlLmtleSA9IGtleTtcbiAgICAgICAgICAgIG5vZGUuZGF0YSA9IGRhdGE7XG4gICAgICAgICAgICBub2RlLm5leHQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgbm9kZSA9IHtrZXk6a2V5LCBkYXRhOmRhdGEsIG5leHQ6bnVsbH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICAgIFxuICAgIGdldCBoZWFkKCk6TGlua0xpc3ROb2RlPFQ+XG4gICAge1xuICAgICAgICByZXR1cm4gdGhpcy5faGVhZDtcbiAgICB9XG5cbiAgICBnZXQgdGFpbCgpOkxpbmtMaXN0Tm9kZTxUPlxuICAgIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RhaWw7XG4gICAgfVxuXG4gICAgYXBwZW5kKGtleTpudW1iZXIsIGRhdGE6VCk6bnVtYmVyXG4gICAge1xuICAgICAgICBsZXQgbm9kZTpMaW5rTGlzdE5vZGU8VD4gPSB0aGlzLnNwYXduX25vZGUoa2V5LCBkYXRhKTtcbiAgICAgICAgLy/lsIZub2Rl5Yqg5YiwbGlua2xpc3TmnKvlsL5cbiAgICAgICAgaWYodGhpcy5fdGFpbClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdGFpbC5uZXh0ID0gbm9kZTtcbiAgICAgICAgICAgIHRoaXMuX3RhaWwgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2VcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faGVhZCA9IHRoaXMuX3RhaWwgPSBub2RlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBub2RlLmtleTtcbiAgICB9XG5cbiAgICByZW1vdmUoa2V5Om51bWJlcik6TGlua0xpc3ROb2RlPFQ+XG4gICAge1xuICAgICAgICBpZigha2V5KVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZighdGhpcy5faGVhZClcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHByZXY6TGlua0xpc3ROb2RlPFQ+O1xuICAgICAgICBsZXQgY3VycjpMaW5rTGlzdE5vZGU8VD4gPSB0aGlzLl9oZWFkO1xuICAgICAgICB3aGlsZShjdXJyICYmIGN1cnIua2V5ICE9IGtleSlcbiAgICAgICAge1xuICAgICAgICAgICAgcHJldiA9IGN1cnI7XG4gICAgICAgICAgICBjdXJyID0gY3Vyci5uZXh0O1xuICAgICAgICB9XG4gICAgICAgIC8v5rKh5om+5YiwXG4gICAgICAgIGlmKCFjdXJyKVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZighcHJldilcbiAgICAgICAge1xuICAgICAgICAgICAgLy9jdXJy5Li65aS06IqC54K5KOimgeWMuuWIhmN1cnLmmK/lkKblkIzml7bkuLrlsL7oioLngrkpXG4gICAgICAgICAgICB0aGlzLl9oZWFkID0gY3Vyci5uZXh0O1xuICAgICAgICAgICAgaWYoIWN1cnIubmV4dClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWlsID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vY3VycumdnuWktOiKgueCuSjopoHljLrliIZjdXJy5piv5ZCm5Li65bC+6IqC54K5KVxuICAgICAgICAgICAgcHJldi5uZXh0ID0gY3Vyci5uZXh0O1xuICAgICAgICAgICAgaWYoIWN1cnIubmV4dClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl90YWlsID0gcHJldjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnBvb2wucHVzaChjdXJyKTtcbiAgICAgICAgcmV0dXJuIGN1cnI7XG4gICAgfVxufSJdfQ==