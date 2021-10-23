"use strict";
cc._RF.push(module, '67b6bxkrdtJJph7b4mJgN8P', 'SingletonClass');
// src/common/base/SingletonClass.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SingletonClass = /** @class */ (function () {
    function SingletonClass() {
    }
    SingletonClass.ins = function () {
        if (!this._ins) {
            this._ins = new this;
        }
        return this._ins;
    };
    return SingletonClass;
}());
exports.default = SingletonClass;

cc._RF.pop();