
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/util.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3V0aWwudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLDBEQUF3RDtBQUN4RCxzQ0FBc0M7QUFFdEMsSUFBSSxZQUFZLEdBQWMsRUFBRSxDQUFDO0FBQ2pDLElBQUksaUJBQWlCLEdBQUcsRUFBRSxDQUFDO0FBRTNCLGdCQUFnQjtBQUNoQjtJQUtJO0lBQWdCLENBQUM7SUFFakIsc0JBQUksR0FBSixVQUFLLEVBQVksRUFBRSxJQUFXO1FBQVgscUJBQUEsRUFBQSxXQUFXO1FBQUUsY0FBTzthQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87WUFBUCw2QkFBTzs7UUFDbkMsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRUQsc0JBQUksR0FBSjtRQUFLLGdCQUFTO2FBQVQsVUFBUyxFQUFULHFCQUFTLEVBQVQsSUFBUztZQUFULDJCQUFTOztRQUNWLElBQUksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztJQUN2RCxDQUFDO0lBQ0wsY0FBQztBQUFELENBaEJBLEFBZ0JDLElBQUE7QUFoQlksMEJBQU87QUFrQnBCLFNBQWdCLFdBQVcsQ0FBQyxFQUFZLEVBQUUsSUFBZ0I7SUFBaEIscUJBQUEsRUFBQSxXQUFnQjtJQUFFLGNBQWM7U0FBZCxVQUFjLEVBQWQscUJBQWMsRUFBZCxJQUFjO1FBQWQsNkJBQWM7O0lBQ3RFLElBQUksY0FBYyxHQUFZLFlBQVksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUks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SSxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUM1QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQzdCO1NBQ0o7S0FDSjtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2xCLENBQUM7QUFWRCx3QkFVQztBQUVELFNBQWdCLGtCQUFrQixDQUFDLElBQWE7SUFDNUMsSUFBTSxNQUFNLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQyxFQUFFLENBQUMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6RixJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzNCLENBQUM7QUFIRCxnREFHQztBQUVELFNBQWdCLG1CQUFtQixDQUFDLElBQWE7SUFDN0MsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBQzFCLENBQUM7QUFGRCxrREFFQyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRlcl9tZ3IgfSBmcm9tIFwiLi4vY29tbW9uL2xvYWRlci9sb2FkZXJfbWdyXCJcbi8vIGltcG9ydCAqIGFzIGNvbnN0cyBmcm9tIFwiLi4vY29uc3RzXCJcblxubGV0IGhhbmRsZXJfcG9vbDogaGFuZGxlcltdID0gW107XG5sZXQgaGFuZGxlcl9wb29sX3NpemUgPSAxMDtcblxuLy/nlKjkuo7nu5Hlrprlm57osIPlh73mlbB0aGlz5oyH6ZKIXG5leHBvcnQgY2xhc3MgaGFuZGxlciB7XG4gICAgcHJpdmF0ZSBjYjogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBob3N0OiBhbnk7XG4gICAgcHJpdmF0ZSBhcmdzOiBhbnlbXTtcblxuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG5cbiAgICBpbml0KGNiOiBGdW5jdGlvbiwgaG9zdCA9IG51bGwsIC4uLmFyZ3MpIHtcbiAgICAgICAgdGhpcy5jYiA9IGNiO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgICAgICB0aGlzLmFyZ3MgPSBhcmdzO1xuICAgIH1cblxuICAgIGV4ZWMoLi4uZXh0cmFzKSB7XG4gICAgICAgIHRoaXMuY2IuYXBwbHkodGhpcy5ob3N0LCB0aGlzLmFyZ3MuY29uY2F0KGV4dHJhcykpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdlbl9oYW5kbGVyKGNiOiBGdW5jdGlvbiwgaG9zdDogYW55ID0gbnVsbCwgLi4uYXJnczogYW55W10pOiBoYW5kbGVyIHtcbiAgICBsZXQgc2luZ2xlX2hhbmRsZXI6IGhhbmRsZXIgPSBoYW5kbGVyX3Bvb2wubGVuZ3RoIDwgMCA/IGhhbmRsZXJfcG9vbC5wb3AoKSA6IG5ldyBoYW5kbGVyKClcbiAgICAvL+i/memHjOimgeWxleW8gGFyZ3MsIOWQpuWImeS8muWwhmFyZ3PlvZPmlbDnu4TkvKDnu5l3cmFwcGVyLCDlr7zoh7TlhbZhcmdz5Y+C5pWw5Y+Y5oiQMue7tOaVsOe7hFtbXV1cbiAgICBzaW5nbGVfaGFuZGxlci5pbml0KGNiLCBob3N0LCAuLi5hcmdzKTtcbiAgICByZXR1cm4gc2luZ2xlX2hhbmRsZXI7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkX2ltZyhzcHJpdGU6IGNjLlNwcml0ZSwgaW1nX3BhdGg6IHN0cmluZykge1xuICAgIGxvYWRlcl9tZ3IuZ2V0X2luc3QoKS5sb2FkQXNzZXQoaW1nX3BhdGgsIGdlbl9oYW5kbGVyKChyZXMpID0+IHtcbiAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gcmVzO1xuICAgIH0pLCBjYy5TcHJpdGVGcmFtZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkX3BsaXN0X2ltZyhzcHJpdGU6IGNjLlNwcml0ZSB8IGNjLlBhcnRpY2xlU3lzdGVtLCBwbGlzdF9wYXRoOiBzdHJpbmcsIGtleTogc3RyaW5nKSB7XG4gICAgbG9hZGVyX21nci5nZXRfaW5zdCgpLmxvYWRBc3NldChwbGlzdF9wYXRoLCBnZW5faGFuZGxlcigocmVzOiBjYy5TcHJpdGVBdGxhcykgPT4ge1xuICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IHJlcy5nZXRTcHJpdGVGcmFtZShrZXkpO1xuICAgICAgICAvLyBjYy5sb2cocmVzKTtcbiAgICAgICAgaWYgKHNwcml0ZUZyYW1lKSB7XG4gICAgICAgICAgICBzcHJpdGUuc3ByaXRlRnJhbWUgPSBzcHJpdGVGcmFtZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLndhcm4oYHBhdGggZXJyb3IgKCR7cGxpc3RfcGF0aH0gJHtrZXl9KWApO1xuICAgICAgICB9XG4gICAgfSksIGNjLlNwcml0ZUF0bGFzKTtcbn1cblxuY29uc3QgX2V4dGVybmFsX2ltZ19jYWNoZTogeyBbdXJsOiBzdHJpbmddOiBjYy5TcHJpdGVGcmFtZSB9ID0ge307XG5leHBvcnQgZnVuY3Rpb24gbG9hZF9leHRlcm5hbF9pbWcoc3ByaXRlOiBjYy5TcHJpdGUsIGltZ191cmw6IHN0cmluZywgdHlwZT86IHN0cmluZykge1xuICAgIGlmIChfZXh0ZXJuYWxfaW1nX2NhY2hlW2ltZ191cmxdKSB7XG4gICAgICAgIHNwcml0ZS5zcHJpdGVGcmFtZSA9IF9leHRlcm5hbF9pbWdfY2FjaGVbaW1nX3VybF07XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICBsb2FkZXJfbWdyLmdldF9pbnN0KCkubG9hZEV4dGVybmFsQXNzZXQoaW1nX3VybCwgZ2VuX2hhbmRsZXIoKHJlcykgPT4ge1xuICAgICAgICBfZXh0ZXJuYWxfaW1nX2NhY2hlW2ltZ191cmxdID0gbmV3IGNjLlNwcml0ZUZyYW1lKHJlcyk7XG5cbiAgICAgICAgaWYgKHNwcml0ZS5ub2RlKSB7XG4gICAgICAgICAgICBzcHJpdGUubm9kZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgc3ByaXRlLnNwcml0ZUZyYW1lID0gX2V4dGVybmFsX2ltZ19jYWNoZVtpbWdfdXJsXTtcbiAgICAgICAgfVxuICAgIH0pLCB0eXBlKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHN0cmZtdChmbXQ6IHN0cmluZywgLi4uYXJnczogYW55W10pIHtcbiAgICByZXR1cm4gZm10LnJlcGxhY2UoL1xceyhcXGQrKVxcfS9nLCAobWF0Y2g6IHN0cmluZywgYXJnSW5kZXg6IG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleF0gfHwgbWF0Y2g7XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBleHRlbmQodGFyZ2V0LCAuLi5zb3VyY2VzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3VyY2VzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBzb3VyY2VzW2ldO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgICAgICBpZiAoc291cmNlLmhhc093blByb3BlcnR5KGtleSkpIHtcbiAgICAgICAgICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCcmVhdGhBY3Rpb24obm9kZTogY2MuTm9kZSkge1xuICAgIGNvbnN0IGFjdGlvbiA9IGNjLnJlcGVhdEZvcmV2ZXIoY2Muc2VxdWVuY2UoY2Muc2NhbGVUbygwLjYsIDEuMSksIGNjLnNjYWxlVG8oMC42LCAwLjkpKSk7XG4gICAgbm9kZS5ydW5BY3Rpb24oYWN0aW9uKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlc3Ryb3lCcmVhdGhBY3Rpb24obm9kZTogY2MuTm9kZSkge1xuICAgIG5vZGUuc3RvcEFsbEFjdGlvbnMoKTtcbn0iXX0=