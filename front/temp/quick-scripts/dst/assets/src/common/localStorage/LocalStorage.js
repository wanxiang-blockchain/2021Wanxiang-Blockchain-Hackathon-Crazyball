
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/localStorage/LocalStorage.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '268f8O0nHBNeLgcPVchYcOV', 'LocalStorage');
// src/common/localStorage/LocalStorage.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
exports.CONST_STORAGE_KEY = exports.LocalStorage = void 0;
var SingletonClass_1 = require("../base/SingletonClass");
var LocalStorage = /** @class */ (function (_super) {
    __extends(LocalStorage, _super);
    function LocalStorage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._game_key = 'nonstop_balls_tt_';
        return _this;
    }
    LocalStorage.ins = function () {
        return _super.ins.call(this);
    };
    LocalStorage.prototype.setLocal = function (key, value) {
        try {
            if (typeof value == 'object')
                value = JSON.stringify(value);
            cc.sys.localStorage.setItem(this.str_encrypt(this._game_key + key), this.str_encrypt(value, this._game_key + key));
        }
        catch (e) {
        }
    };
    LocalStorage.prototype.getLocal = function (key, defaultValue) {
        try {
            var result = cc.sys.localStorage.getItem(this.str_encrypt(this._game_key + key));
            if (result == null) {
                return defaultValue;
            }
            result = this.str_decrypt(result, this._game_key + key);
            switch (typeof defaultValue) {
                case 'object': {
                    var ret = defaultValue;
                    try {
                        var parse = JSON.parse(result);
                        if (typeof parse === 'object') {
                            ret = parse;
                        }
                    }
                    catch (_a) {
                    }
                    return ret;
                }
                case "boolean": {
                    return (result === "true");
                }
                case "number": {
                    return Number(result) || defaultValue;
                }
            }
            return result;
        }
        catch (e) {
            return defaultValue;
        }
    };
    /**
     * 加密函数
     * @param str 待加密字符串
     * @returns {string}
     */
    LocalStorage.prototype.str_encrypt = function (str, pwd) {
        if (pwd === void 0) { pwd = this._game_key; }
        var pwd_length = 0;
        for (var index = 0, len = pwd.length; index < len; index++) {
            pwd_length += pwd.charCodeAt(index);
        }
        str = str.toString();
        str += pwd;
        var c = String.fromCharCode(str.charCodeAt(0) + str.length * pwd_length);
        for (var i = 1; i < str.length; i++) {
            c += String.fromCharCode(str.charCodeAt(i) + str.charCodeAt(i - 1));
        }
        return encodeURIComponent(c);
    };
    /**
     * 解密函数
     * @param str 待解密字符串
     * @returns {string}
     */
    LocalStorage.prototype.str_decrypt = function (str, pwd) {
        if (pwd === void 0) { pwd = this._game_key; }
        var pwd_length = 0;
        for (var index = 0, len = pwd.length; index < len; index++) {
            pwd_length += pwd.charCodeAt(index);
        }
        str = str.toString();
        str = decodeURIComponent(str);
        var c = String.fromCharCode(str.charCodeAt(0) - str.length * pwd_length);
        for (var i = 1; i < str.length; i++) {
            c += String.fromCharCode(str.charCodeAt(i) - c.charCodeAt(i - 1));
        }
        return c.slice(0, c.length - pwd.length);
    };
    return LocalStorage;
}(SingletonClass_1.default));
exports.LocalStorage = LocalStorage;
exports.CONST_STORAGE_KEY = {
    KEY_MUSIC_VOLUME: "KEY_MUSIC_VOLUME",
    KEY_SOUND_VOLUME: "KEY_SOUND_VOLUME",
    KEY_SOUND_IS_MUTE: "KEY_SOUND_IS_MUTE",
    KEY_MUSIC_IS_MUTE: "KEY_MUSIC_IS_MUTE",
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlEQUFvRDtBQUdwRDtJQUFrQyxnQ0FBYztJQUFoRDtRQUFBLHFFQTBGQztRQXBGVyxlQUFTLEdBQUcsbUJBQW1CLENBQUE7O0lBb0YzQyxDQUFDO0lBeEZpQixnQkFBRyxHQUFqQjtRQUNJLE9BQU8sT0FBTSxHQUFHLFdBQWtCLENBQUE7SUFDdEMsQ0FBQztJQUlNLCtCQUFRLEdBQWYsVUFBZ0IsR0FBVyxFQUFFLEtBQUs7UUFDOUIsSUFBSTtZQUNBLElBQUksT0FBTyxLQUFLLElBQUksUUFBUTtnQkFDeEIsS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUE7WUFDakMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFNBQVMsR0FBRyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7U0FDckg7UUFBQyxPQUFPLENBQUMsRUFBRTtTQUVYO0lBQ0wsQ0FBQztJQUVNLCtCQUFRLEdBQWYsVUFBZ0IsR0FBVyxFQUFFLFlBQWE7UUFDdEMsSUFBSTtZQUNBLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxTQUFTLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNqRixJQUFJLE1BQU0sSUFBSSxJQUFJLEVBQUU7Z0JBQ2hCLE9BQU8sWUFBWSxDQUFBO2FBQ3RCO1lBQ0QsTUFBTSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLElBQUksQ0FB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RTtZQUNqQyxDQUFDLElBQUksTUFBTSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDckU7UUFDRCxPQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdDLENBQUM7SUFDTCxtQkFBQztBQUFELENBMUZBLEFBMEZDLENBMUZpQyx3QkFBYyxHQTBGL0M7QUExRlksb0NBQVk7QUE0RlosUUFBQSxpQkFBaUIsR0FBRztJQUM3QixnQkFBZ0IsRUFBRSxrQkFBa0I7SUFDcEMsZ0JBQWdCLEVBQUUsa0JBQWtCO0lBQ3BDLGlCQUFpQixFQUFFLG1CQUFtQjtJQUN0QyxpQkFBaUIsRUFBRSxtQkFBbUI7Q0FDekMsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaW5nbGV0b25DbGFzcyBmcm9tIFwiLi4vYmFzZS9TaW5nbGV0b25DbGFzc1wiO1xuXG5cbmV4cG9ydCBjbGFzcyBMb2NhbFN0b3JhZ2UgZXh0ZW5kcyBTaW5nbGV0b25DbGFzcyB7XG5cbiAgICBwdWJsaWMgc3RhdGljIGlucygpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmlucygpIGFzIExvY2FsU3RvcmFnZVxuICAgIH1cblxuICAgIHByaXZhdGUgX2dhbWVfa2V5ID0gJ25vbnN0b3BfYmFsbHNfdHRfJ1xuXG4gICAgcHVibGljIHNldExvY2FsKGtleTogc3RyaW5nLCB2YWx1ZSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSA9PSAnb2JqZWN0JylcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IEpTT04uc3RyaW5naWZ5KHZhbHVlKVxuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMuc3RyX2VuY3J5cHQodGhpcy5fZ2FtZV9rZXkgKyBrZXkpLCB0aGlzLnN0cl9lbmNyeXB0KHZhbHVlLCB0aGlzLl9nYW1lX2tleSArIGtleSkpXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcblxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIGdldExvY2FsKGtleTogc3RyaW5nLCBkZWZhdWx0VmFsdWU/KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMuc3RyX2VuY3J5cHQodGhpcy5fZ2FtZV9rZXkgKyBrZXkpKTtcbiAgICAgICAgICAgIGlmIChyZXN1bHQgPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWVcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc3VsdCA9IHRoaXMuc3RyX2RlY3J5cHQocmVzdWx0LCB0aGlzLl9nYW1lX2tleSArIGtleSk7XG5cbiAgICAgICAgICAgIHN3aXRjaCAodHlwZW9mIGRlZmF1bHRWYWx1ZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ29iamVjdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJldCA9IGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBwYXJzZSA9IEpTT04ucGFyc2UocmVzdWx0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyc2UgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0ID0gcGFyc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gY2F0Y2h7XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlIFwiYm9vbGVhblwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAocmVzdWx0ID09PSBcInRydWVcIilcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSBcIm51bWJlclwiOiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBOdW1iZXIocmVzdWx0KSB8fCBkZWZhdWx0VmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdFxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlXG4gICAgICAgIH1cbiAgICB9XG5cblx0LyoqXG5cdCAqIOWKoOWvhuWHveaVsFxuXHQgKiBAcGFyYW0gc3RyIOW+heWKoOWvhuWtl+espuS4slxuXHQgKiBAcmV0dXJucyB7c3RyaW5nfVxuXHQgKi9cbiAgICBwcml2YXRlIHN0cl9lbmNyeXB0KHN0cjogc3RyaW5nLCBwd2Q6IHN0cmluZyA9IHRoaXMuX2dhbWVfa2V5KSB7XG4gICAgICAgIGxldCBwd2RfbGVuZ3RoID0gMDtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSBwd2QubGVuZ3RoOyBpbmRleCA8IGxlbjsgaW5kZXgrKykge1xuICAgICAgICAgICAgcHdkX2xlbmd0aCArPSBwd2QuY2hhckNvZGVBdChpbmRleCk7XG4gICAgICAgIH1cblxuICAgICAgICBzdHIgPSBzdHIudG9TdHJpbmcoKVxuICAgICAgICBzdHIgKz0gcHdkO1xuICAgICAgICBsZXQgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RyLmNoYXJDb2RlQXQoMCkgKyBzdHIubGVuZ3RoICogcHdkX2xlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RyLmNoYXJDb2RlQXQoaSkgKyBzdHIuY2hhckNvZGVBdChpIC0gMSkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQoYyk7XG4gICAgfVxuXG5cdC8qKlxuXHQgKiDop6Plr4blh73mlbBcblx0ICogQHBhcmFtIHN0ciDlvoXop6Plr4blrZfnrKbkuLJcblx0ICogQHJldHVybnMge3N0cmluZ31cblx0ICovXG4gICAgcHJpdmF0ZSBzdHJfZGVjcnlwdChzdHI6IHN0cmluZywgcHdkOiBzdHJpbmcgPSB0aGlzLl9nYW1lX2tleSkge1xuICAgICAgICBsZXQgcHdkX2xlbmd0aCA9IDA7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMCwgbGVuID0gcHdkLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgICAgICAgIHB3ZF9sZW5ndGggKz0gcHdkLmNoYXJDb2RlQXQoaW5kZXgpO1xuICAgICAgICB9XG4gICAgICAgIHN0ciA9IHN0ci50b1N0cmluZygpXG4gICAgICAgIHN0ciA9IGRlY29kZVVSSUNvbXBvbmVudChzdHIpO1xuICAgICAgICBsZXQgYyA9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RyLmNoYXJDb2RlQXQoMCkgLSBzdHIubGVuZ3RoICogcHdkX2xlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoc3RyLmNoYXJDb2RlQXQoaSkgLSBjLmNoYXJDb2RlQXQoaSAtIDEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYy5zbGljZSgwLCBjLmxlbmd0aCAtIHB3ZC5sZW5ndGgpO1xuICAgIH1cbn1cblxuZXhwb3J0IGNvbnN0IENPTlNUX1NUT1JBR0VfS0VZID0ge1xuICAgIEtFWV9NVVNJQ19WT0xVTUU6IGBLRVlfTVVTSUNfVk9MVU1FYCxcbiAgICBLRVlfU09VTkRfVk9MVU1FOiBgS0VZX1NPVU5EX1ZPTFVNRWAsXG4gICAgS0VZX1NPVU5EX0lTX01VVEU6IGBLRVlfU09VTkRfSVNfTVVURWAsXG4gICAgS0VZX01VU0lDX0lTX01VVEU6IGBLRVlfTVVTSUNfSVNfTVVURWAsXG59XG4iXX0=