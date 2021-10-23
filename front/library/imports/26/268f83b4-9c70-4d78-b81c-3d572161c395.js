"use strict";
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