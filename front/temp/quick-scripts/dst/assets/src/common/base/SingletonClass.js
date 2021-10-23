
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/base/SingletonClass.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2Jhc2UvU2luZ2xldG9uQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtJQUNJO0lBQTBCLENBQUM7SUFFYixrQkFBRyxHQUFqQjtRQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ1osSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLElBQUksQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBQ0wscUJBQUM7QUFBRCxDQVRBLEFBU0MsSUFBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpbmdsZXRvbkNsYXNzIHtcbiAgICBwcm90ZWN0ZWQgY29uc3RydWN0b3IoKSB7IH1cbiAgICBwcml2YXRlIHN0YXRpYyBfaW5zOiBTaW5nbGV0b25DbGFzcztcbiAgICBwdWJsaWMgc3RhdGljIGlucygpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9pbnMpIHtcbiAgICAgICAgICAgIHRoaXMuX2lucyA9IG5ldyB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnM7XG4gICAgfVxufSJdfQ==