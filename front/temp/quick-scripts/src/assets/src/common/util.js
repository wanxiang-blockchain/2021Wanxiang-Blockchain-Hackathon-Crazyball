"use strict";
cc._RF.push(module, '5e6fdXDEbdM/owIk62/j/0P', 'util');
// src/common/util.ts

"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.destroyBreathAction = exports.createBreathAction = exports.extend = exports.strfmt = exports.load_external_img = exports.load_plist_img = exports.load_img = exports.gen_handler = exports.handler = void 0;
var loader_mgr_1 = require("../common/loader/loader_mgr");
// import * as consts from "../consts"
var handler_pool = [];
var handler_pool_size = 10;
//用于绑定回调函数this指针
var handler = /** @class */ (function () {
    function handler() {
    }
    handler.prototype.init = function (cb, host) {
        if (host === void 0) { host = null; }
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            args[_i - 2] = arguments[_i];
        }
        this.cb = cb;
        this.host = host;
        this.args = args;
    };
    handler.prototype.exec = function () {
        var extras = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            extras[_i] = arguments[_i];
        }
        this.cb.apply(this.host, this.args.concat(extras));
    };
    return handler;
}());
exports.handler = handler;
function gen_handler(cb, host) {
    if (host === void 0) { host = null; }
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    var single_handler = handler_pool.length < 0 ? handler_pool.pop() : new handler();
    //这里要展开args, 否则会将args当数组传给wrapper, 导致其args参数变成2维数组[[]]
    single_handler.init.apply(single_handler, __spreadArrays([cb, host], args));
    return single_handler;
}
exports.gen_handler = gen_handler;
function load_img(sprite, img_path) {
    loader_mgr_1.loader_mgr.get_inst().loadAsset(img_path, gen_handler(function (res) {
        sprite.spriteFrame = res;
    }), cc.SpriteFrame);
}
exports.load_img = load_img;
function load_plist_img(sprite, plist_path, key) {
    loader_mgr_1.loader_mgr.get_inst().loadAsset(plist_path, gen_handler(function (res) {
        var spriteFrame = res.getSpriteFrame(key);
        // cc.log(res);
        if (spriteFrame) {
            sprite.spriteFrame = spriteFrame;
        }
        else {
            cc.warn("path error (" + plist_path + " " + key + ")");
        }
    }), cc.SpriteAtlas);
}
exports.load_plist_img = load_plist_img;
var _external_img_cache = {};
function load_external_img(sprite, img_url, type) {
    if (_external_img_cache[img_url]) {
        sprite.spriteFrame = _external_img_cache[img_url];
        return;
    }
    sprite.node.active = false;
    loader_mgr_1.loader_mgr.get_inst().loadExternalAsset(img_url, gen_handler(function (res) {
        _external_img_cache[img_url] = new cc.SpriteFrame(res);
        if (sprite.node) {
            sprite.node.active = true;
            sprite.spriteFrame = _external_img_cache[img_url];
        }
    }), type);
}
exports.load_external_img = load_external_img;
function strfmt(fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return fmt.replace(/\{(\d+)\}/g, function (match, argIndex) {
        return args[argIndex] || match;
    });
}
exports.strfmt = strfmt;
function extend(target) {
    var sources = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        sources[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < sources.length; i += 1) {
        var source = sources[i];
        for (var key in source) {
            if (source.hasOwnProperty(key)) {
                target[key] = source[key];
            }
        }
    }
    return target;
}
exports.extend = extend;
function createBreathAction(node) {
    var action = cc.repeatForever(cc.sequence(cc.scaleTo(0.6, 1.1), cc.scaleTo(0.6, 0.9)));
    node.runAction(action);
}
exports.createBreathAction = createBreathAction;
function destroyBreathAction(node) {
    node.stopAllActions();
}
exports.destroyBreathAction = destroyBreathAction;

cc._RF.pop();