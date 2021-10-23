
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/audio/AudioPlayer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6ded9VqaA5MjZErune4OGJZ', 'AudioPlayer');
// src/common/audio/AudioPlayer.ts

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
exports.AUDIO_CONFIG = exports.AudioPlayer = void 0;
var loader_mgr_1 = require("../loader/loader_mgr");
var utils = require("../util");
var SingletonClass_1 = require("../base/SingletonClass");
var LocalStorage_1 = require("../localStorage/LocalStorage");
var MUSIC_PATH = "sound/{0}";
var SOUND_PATH = "sound/{0}";
var AudioPlayer = /** @class */ (function (_super) {
    __extends(AudioPlayer, _super);
    function AudioPlayer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.clip_cache = new Map();
        _this.loading_map = new Map();
        _this.music_id = -1;
        _this.music_volume = 0.5;
        _this.music_mute = false;
        _this.sound_ids = [];
        _this.sound_volume = 1;
        _this.sound_mute = false;
        return _this;
    }
    AudioPlayer.ins = function () {
        return _super.ins.call(this);
    };
    // init() {
    //     this.set_music_mute(LocalStorage.ins().getLocal(CONST_STORAGE_KEY.KEY_MUSIC_IS_MUTE, false));
    //     this.set_music_volume(LocalStorage.ins().getLocal(CONST_STORAGE_KEY.KEY_MUSIC_VOLUME, 0.5));
    //     this.set_sound_mute(LocalStorage.ins().getLocal(CONST_STORAGE_KEY.KEY_SOUND_IS_MUTE, false));
    //     this.set_sound_volume(LocalStorage.ins().getLocal(CONST_STORAGE_KEY.KEY_SOUND_VOLUME, 1));
    // }
    AudioPlayer.prototype.flush = function () {
        // wxapi.wxStorage.set(Consts.Game.SoundMute, this.sound_mute ? "1" : "0");
    };
    //同时只能播放一个
    AudioPlayer.prototype.play_music = function (name) {
        if (this.music_id >= 0) {
            this.stop_music();
        }
        var path = utils.strfmt(MUSIC_PATH, name);
        this.curr_music = name;
        if (this.music_mute) {
            // cc.log("music is mute");
            return;
        }
        var clip = this.clip_cache.get(path);
        if (clip) {
            this.play_clip(clip, this.music_volume, true, AudioType.Music);
        }
        else {
            var task = { type: AudioType.Music, name: name, path: path, volume: this.music_volume, loop: true };
            this.load_task(task);
        }
    };
    AudioPlayer.prototype.stop_music = function () {
        if (this.music_id < 0) {
            // cc.log("no music is playing");
            return;
        }
        cc.audioEngine.stop(this.music_id);
        this.music_id = -1;
    };
    AudioPlayer.prototype.get_music_mute = function () {
        return this.music_mute;
    };
    AudioPlayer.prototype.set_music_mute = function (is_mute) {
        this.music_mute = is_mute;
        LocalStorage_1.LocalStorage.ins().setLocal(LocalStorage_1.CONST_STORAGE_KEY.KEY_MUSIC_IS_MUTE, is_mute);
        if (this.music_id < 0) {
            if (!is_mute && this.curr_music) {
                this.play_music(this.curr_music);
            }
            return;
        }
        if (is_mute) {
            cc.audioEngine.pause(this.music_id);
        }
        else {
            cc.audioEngine.resume(this.music_id);
        }
    };
    //0~1
    AudioPlayer.prototype.set_music_volume = function (volume) {
        this.music_volume = volume;
        if (this.music_id >= 0) {
            cc.audioEngine.setVolume(this.music_id, volume);
        }
        LocalStorage_1.LocalStorage.ins().setLocal(LocalStorage_1.CONST_STORAGE_KEY.KEY_MUSIC_VOLUME, volume);
    };
    AudioPlayer.prototype.load_task = function (task) {
        var path = task.path;
        if (this.loading_map.get(path)) {
            return;
        }
        this.loading_map.set(path, true);
        loader_mgr_1.loader_mgr.get_inst().loadRawAsset(path, utils.gen_handler(this.on_clip_loaded, this, task));
    };
    AudioPlayer.prototype.on_clip_loaded = function (task, clip) {
        this.clip_cache.set(task.path, clip);
        if (task.type == AudioType.Music && task.name != this.curr_music) {
            return;
        }
        this.play_clip(clip, task.volume, task.loop, task.type, task.cb);
    };
    AudioPlayer.prototype.play_clip = function (clip, volume, loop, type, cb) {
        var _this = this;
        var aid = cc.audioEngine.play(clip, loop, volume);
        if (type == AudioType.Music) {
            this.music_id = aid;
        }
        else if (type == AudioType.Sound) {
            this.sound_ids.push(aid);
            cc.audioEngine.setFinishCallback(aid, function () {
                _this.on_sound_finished(aid);
                cb && cb.exec();
            });
        }
    };
    AudioPlayer.prototype.on_sound_finished = function (aid) {
        var idx = this.sound_ids.findIndex(function (id) {
            return id == aid;
        });
        if (idx != -1) {
            this.sound_ids.splice(idx, 1);
        }
    };
    //可同时播放多个
    AudioPlayer.prototype.play_sound = function (name, cb) {
        if (this.sound_mute) {
            // cc.log("sound is mute");
            return;
        }
        var path = utils.strfmt(SOUND_PATH, name);
        var clip = this.clip_cache.get(path);
        if (clip) {
            this.play_clip(clip, this.sound_volume, false, AudioType.Sound, cb);
        }
        else {
            var task = { type: AudioType.Sound, name: name, path: path, volume: this.sound_volume, loop: false, cb: cb };
            this.load_task(task);
        }
    };
    AudioPlayer.prototype.get_sound_mute = function () {
        return this.sound_mute;
    };
    AudioPlayer.prototype.set_sound_mute = function (is_mute) {
        this.sound_mute = is_mute;
        this.sound_ids.forEach(function (sid) {
            if (is_mute) {
                cc.audioEngine.pause(sid);
            }
            else {
                cc.audioEngine.resume(sid);
            }
        });
        LocalStorage_1.LocalStorage.ins().setLocal(LocalStorage_1.CONST_STORAGE_KEY.KEY_SOUND_IS_MUTE, is_mute);
    };
    //0~1
    AudioPlayer.prototype.set_sound_volume = function (volume) {
        this.sound_volume = volume;
        this.sound_ids.forEach(function (sid) {
            cc.audioEngine.setVolume(sid, volume);
        });
        LocalStorage_1.LocalStorage.ins().setLocal(LocalStorage_1.CONST_STORAGE_KEY.KEY_SOUND_VOLUME, volume);
    };
    AudioPlayer.prototype.stop_sound = function () {
        this.sound_ids.forEach(function (sid) {
            cc.audioEngine.stop(sid);
        });
        this.sound_ids.length = 0;
    };
    AudioPlayer.prototype.clear_cache = function () {
        this.clip_cache.forEach(function (clip, key) {
            loader_mgr_1.loader_mgr.get_inst().release(clip);
        });
        this.clip_cache.clear();
        this.loading_map.clear();
        cc.audioEngine.uncacheAll();
    };
    return AudioPlayer;
}(SingletonClass_1.default));
exports.AudioPlayer = AudioPlayer;
var AudioType;
(function (AudioType) {
    AudioType[AudioType["Music"] = 1] = "Music";
    AudioType[AudioType["Sound"] = 2] = "Sound";
})(AudioType || (AudioType = {}));
exports.AUDIO_CONFIG = {
    Audio_Btn: "button",
    Audio_levelup: "levelup",
    Audio_star: "star",
    Audio_balls: "balls",
    Audio_Bgm: "bg",
    Audio_gameover: "gameover",
    Audio_win: "win",
    Audio_congra: "congra",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2F1ZGlvL0F1ZGlvUGxheWVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxtREFBaUQ7QUFDakQsK0JBQWdDO0FBQ2hDLHlEQUFvRDtBQUNwRCw2REFBK0U7QUFFL0UsSUFBTSxVQUFVLEdBQUcsV0FBVyxDQUFDO0FBQy9CLElBQU0sVUFBVSxHQUFHLFdBQVcsQ0FBQztBQUUvQjtJQUFpQywrQkFBYztJQUEvQztRQUFBLHFFQTRMQztRQTNMVyxnQkFBVSxHQUE4QixJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2xELGlCQUFXLEdBQXlCLElBQUksR0FBRyxFQUFFLENBQUM7UUFHOUMsY0FBUSxHQUFXLENBQUMsQ0FBQyxDQUFDO1FBQ3RCLGtCQUFZLEdBQVcsR0FBRyxDQUFDO1FBQzNCLGdCQUFVLEdBQVksS0FBSyxDQUFDO1FBRTVCLGVBQVMsR0FBYSxFQUFFLENBQUM7UUFDekIsa0JBQVksR0FBVyxDQUFDLENBQUM7UUFDekIsZ0JBQVUsR0FBWSxLQUFLLENBQUM7O0lBaUx4QyxDQUFDO0lBOUtVLGVBQUcsR0FBVjtRQUNJLE9BQU8sT0FBTSxHQUFHLFdBQWlCLENBQUM7SUFDdEMsQ0FBQztJQUVELFdBQVc7SUFDWCxvR0FBb0c7SUFDcEcsbUdBQW1HO0lBQ25HLG9HQUFvRztJQUNwRyxpR0FBaUc7SUFDakcsSUFBSTtJQUVKLDJCQUFLLEdBQUw7UUFDSSwyRUFBMkU7SUFDL0UsQ0FBQztJQUVELFVBQVU7SUFDVixnQ0FBVSxHQUFWLFVBQVcsSUFBWTtRQUNuQixJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksQ0FBQyxFQUFFO1lBQ3BCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztTQUNyQjtRQUVELElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFB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UUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3hDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQ3pCLEVBQUUsQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDaEMsQ0FBQztJQUNMLGtCQUFDO0FBQUQsQ0E1TEEsQUE0TEMsQ0E1TGdDLHdCQUFjLEdBNEw5QztBQTVMWSxrQ0FBVztBQThMeEIsSUFBSyxTQUdKO0FBSEQsV0FBSyxTQUFTO0lBQ1YsMkNBQVMsQ0FBQTtJQUNULDJDQUFTLENBQUE7QUFDYixDQUFDLEVBSEksU0FBUyxLQUFULFNBQVMsUUFHYjtBQVdZLFFBQUEsWUFBWSxHQUFHO0lBQ3hCLFNBQVMsRUFBRSxRQUFRO0lBQ25CLGFBQWEsRUFBRSxTQUFTO0lBQ3hCLFVBQVUsRUFBRSxNQUFNO0lBQ2xCLFdBQVcsRUFBRSxPQUFPO0lBQ3BCLFNBQVMsRUFBRSxJQUFJO0lBQ2YsY0FBYyxFQUFFLFVBQVU7SUFDMUIsU0FBUyxFQUFFLEtBQUs7SUFDaEIsWUFBWSxFQUFFLFFBQVE7Q0FFekIsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGxvYWRlcl9tZ3IgfSBmcm9tIFwiLi4vbG9hZGVyL2xvYWRlcl9tZ3JcIlxuaW1wb3J0ICogYXMgdXRpbHMgZnJvbSBcIi4uL3V0aWxcIlxuaW1wb3J0IFNpbmdsZXRvbkNsYXNzIGZyb20gXCIuLi9iYXNlL1NpbmdsZXRvbkNsYXNzXCI7XG5pbXBvcnQgeyBMb2NhbFN0b3JhZ2UsIENPTlNUX1NUT1JBR0VfS0VZIH0gZnJvbSBcIi4uL2xvY2FsU3RvcmFnZS9Mb2NhbFN0b3JhZ2VcIjtcblxuY29uc3QgTVVTSUNfUEFUSCA9IFwic291bmQvezB9XCI7XG5jb25zdCBTT1VORF9QQVRIID0gXCJzb3VuZC97MH1cIjtcblxuZXhwb3J0IGNsYXNzIEF1ZGlvUGxheWVyIGV4dGVuZHMgU2luZ2xldG9uQ2xhc3Mge1xuICAgIHByaXZhdGUgY2xpcF9jYWNoZTogTWFwPHN0cmluZywgY2MuQXVkaW9DbGlwPiA9IG5ldyBNYXAoKTtcbiAgICBwcml2YXRlIGxvYWRpbmdfbWFwOiBNYXA8c3RyaW5nLCBib29sZWFuPiA9IG5ldyBNYXAoKTtcblxuICAgIHByaXZhdGUgY3Vycl9tdXNpYzogc3RyaW5nO1xuICAgIHByaXZhdGUgbXVzaWNfaWQ6IG51bWJlciA9IC0xO1xuICAgIHByaXZhdGUgbXVzaWNfdm9sdW1lOiBudW1iZXIgPSAwLjU7XG4gICAgcHJpdmF0ZSBtdXNpY19tdXRlOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIHNvdW5kX2lkczogbnVtYmVyW10gPSBbXTtcbiAgICBwcml2YXRlIHNvdW5kX3ZvbHVtZTogbnVtYmVyID0gMTtcbiAgICBwcml2YXRlIHNvdW5kX211dGU6IGJvb2xlYW4gPSBmYWxzZTtcblxuXG4gICAgc3RhdGljIGlucygpIHtcbiAgICAgICAgcmV0dXJuIHN1cGVyLmlucygpIGFzIEF1ZGlvUGxheWVyO1xuICAgIH1cblxuICAgIC8vIGluaXQoKSB7XG4gICAgLy8gICAgIHRoaXMuc2V0X211c2ljX211dGUoTG9jYWxTdG9yYWdlLmlucygpLmdldExvY2FsKENPTlNUX1NUT1JBR0VfS0VZLktFWV9NVVNJQ19JU19NVVRFLCBmYWxzZSkpO1xuICAgIC8vICAgICB0aGlzLnNldF9tdXNpY192b2x1bWUoTG9jYWxTdG9yYWdlLmlucygpLmdldExvY2FsKENPTlNUX1NUT1JBR0VfS0VZLktFWV9NVVNJQ19WT0xVTUUsIDAuNSkpO1xuICAgIC8vICAgICB0aGlzLnNldF9zb3VuZF9tdXRlKExvY2FsU3RvcmFnZS5pbnMoKS5nZXRMb2NhbChDT05TVF9TVE9SQUdFX0tFWS5LRVlfU09VTkRfSVNfTVVURSwgZmFsc2UpKTtcbiAgICAvLyAgICAgdGhpcy5zZXRfc291bmRfdm9sdW1lKExvY2FsU3RvcmFnZS5pbnMoKS5nZXRMb2NhbChDT05TVF9TVE9SQUdFX0tFWS5LRVlfU09VTkRfVk9MVU1FLCAxKSk7XG4gICAgLy8gfVxuXG4gICAgZmx1c2goKSB7XG4gICAgICAgIC8vIHd4YXBpLnd4U3RvcmFnZS5zZXQoQ29uc3RzLkdhbWUuU291bmRNdXRlLCB0aGlzLnNvdW5kX211dGUgPyBcIjFcIiA6IFwiMFwiKTtcbiAgICB9XG5cbiAgICAvL+WQjOaXtuWPquiDveaSreaUvuS4gOS4qlxuICAgIHBsYXlfbXVzaWMobmFtZTogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLm11c2ljX2lkID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc3RvcF9tdXNpYygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IHBhdGggPSB1dGlscy5zdHJmbXQoTVVTSUNfUEFUSCwgbmFtZSk7XG4gICAgICAgIHRoaXMuY3Vycl9tdXNpYyA9IG5hbWU7XG5cbiAgICAgICAgaWYgKHRoaXMubXVzaWNfbXV0ZSkge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwibXVzaWMgaXMgbXV0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2xpcCA9IHRoaXMuY2xpcF9jYWNoZS5nZXQocGF0aCk7XG4gICAgICAgIGlmIChjbGlwKSB7XG4gICAgICAgICAgICB0aGlzLnBsYXlfY2xpcChjbGlwLCB0aGlzLm11c2ljX3ZvbHVtZSwgdHJ1ZSwgQXVkaW9UeXBlLk11c2ljKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0YXNrOiBBdWRpb1BsYXlUYXNrID0geyB0eXBlOiBBdWRpb1R5cGUuTXVzaWMsIG5hbWU6IG5hbWUsIHBhdGg6IHBhdGgsIHZvbHVtZTogdGhpcy5tdXNpY192b2x1bWUsIGxvb3A6IHRydWUgfTtcbiAgICAgICAgICAgIHRoaXMubG9hZF90YXNrKHRhc2spO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RvcF9tdXNpYygpIHtcbiAgICAgICAgaWYgKHRoaXMubXVzaWNfaWQgPCAwKSB7XG4gICAgICAgICAgICAvLyBjYy5sb2coXCJubyBtdXNpYyBpcyBwbGF5aW5nXCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5tdXNpY19pZCk7XG4gICAgICAgIHRoaXMubXVzaWNfaWQgPSAtMTtcbiAgICB9XG5cbiAgICBnZXRfbXVzaWNfbXV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubXVzaWNfbXV0ZTtcbiAgICB9XG5cbiAgICBzZXRfbXVzaWNfbXV0ZShpc19tdXRlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMubXVzaWNfbXV0ZSA9IGlzX211dGU7XG4gICAgICAgIExvY2FsU3RvcmFnZS5pbnMoKS5zZXRMb2NhbChDT05TVF9TVE9SQUdFX0tFWS5LRVlfTVVTSUNfSVNfTVVURSwgaXNfbXV0ZSk7XG5cbiAgICAgICAgaWYgKHRoaXMubXVzaWNfaWQgPCAwKSB7XG4gICAgICAgICAgICBpZiAoIWlzX211dGUgJiYgdGhpcy5jdXJyX211c2ljKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5X211c2ljKHRoaXMuY3Vycl9tdXNpYyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzX211dGUpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMubXVzaWNfaWQpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMubXVzaWNfaWQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8wfjFcbiAgICBzZXRfbXVzaWNfdm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMubXVzaWNfdm9sdW1lID0gdm9sdW1lO1xuICAgICAgICBpZiAodGhpcy5tdXNpY19pZCA+PSAwKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRWb2x1bWUodGhpcy5tdXNpY19pZCwgdm9sdW1lKTtcbiAgICAgICAgfVxuICAgICAgICBMb2NhbFN0b3JhZ2UuaW5zKCkuc2V0TG9jYWwoQ09OU1RfU1RPUkFHRV9LRVkuS0VZX01VU0lDX1ZPTFVNRSwgdm9sdW1lKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGxvYWRfdGFzayh0YXNrOiBBdWRpb1BsYXlUYXNrKSB7XG4gICAgICAgIGxldCBwYXRoID0gdGFzay5wYXRoO1xuICAgICAgICBpZiAodGhpcy5sb2FkaW5nX21hcC5nZXQocGF0aCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxvYWRpbmdfbWFwLnNldChwYXRoLCB0cnVlKTtcbiAgICAgICAgbG9hZGVyX21nci5nZXRfaW5zdCgpLmxvYWRSYXdBc3NldChwYXRoLCB1dGlscy5nZW5faGFuZGxlcih0aGlzLm9uX2NsaXBfbG9hZGVkLCB0aGlzLCB0YXNrKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvbl9jbGlwX2xvYWRlZCh0YXNrOiBBdWRpb1BsYXlUYXNrLCBjbGlwOiBjYy5BdWRpb0NsaXApIHtcbiAgICAgICAgdGhpcy5jbGlwX2NhY2hlLnNldCh0YXNrLnBhdGgsIGNsaXApO1xuICAgICAgICBpZiAodGFzay50eXBlID09IEF1ZGlvVHlwZS5NdXNpYyAmJiB0YXNrLm5hbWUgIT0gdGhpcy5jdXJyX211c2ljKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5wbGF5X2NsaXAoY2xpcCwgdGFzay52b2x1bWUsIHRhc2subG9vcCwgdGFzay50eXBlLCB0YXNrLmNiKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBsYXlfY2xpcChjbGlwLCB2b2x1bWU6IG51bWJlciwgbG9vcDogYm9vbGVhbiwgdHlwZTogQXVkaW9UeXBlLCBjYj86IHV0aWxzLmhhbmRsZXIpIHtcbiAgICAgICAgbGV0IGFpZCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkoY2xpcCwgbG9vcCwgdm9sdW1lKTtcbiAgICAgICAgaWYgKHR5cGUgPT0gQXVkaW9UeXBlLk11c2ljKSB7XG4gICAgICAgICAgICB0aGlzLm11c2ljX2lkID0gYWlkO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHR5cGUgPT0gQXVkaW9UeXBlLlNvdW5kKSB7XG4gICAgICAgICAgICB0aGlzLnNvdW5kX2lkcy5wdXNoKGFpZCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5zZXRGaW5pc2hDYWxsYmFjayhhaWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uX3NvdW5kX2ZpbmlzaGVkKGFpZCk7XG4gICAgICAgICAgICAgICAgY2IgJiYgY2IuZXhlYygpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwcml2YXRlIG9uX3NvdW5kX2ZpbmlzaGVkKGFpZDogbnVtYmVyKSB7XG4gICAgICAgIGxldCBpZHggPSB0aGlzLnNvdW5kX2lkcy5maW5kSW5kZXgoKGlkKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gaWQgPT0gYWlkO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGlkeCAhPSAtMSkge1xuICAgICAgICAgICAgdGhpcy5zb3VuZF9pZHMuc3BsaWNlKGlkeCwgMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvL+WPr+WQjOaXtuaSreaUvuWkmuS4qlxuICAgIHBsYXlfc291bmQobmFtZTogc3RyaW5nLCBjYj86IHV0aWxzLmhhbmRsZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuc291bmRfbXV0ZSkge1xuICAgICAgICAgICAgLy8gY2MubG9nKFwic291bmQgaXMgbXV0ZVwiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgcGF0aCA9IHV0aWxzLnN0cmZtdChTT1VORF9QQVRILCBuYW1lKTtcbiAgICAgICAgbGV0IGNsaXAgPSB0aGlzLmNsaXBfY2FjaGUuZ2V0KHBhdGgpO1xuICAgICAgICBpZiAoY2xpcCkge1xuICAgICAgICAgICAgdGhpcy5wbGF5X2NsaXAoY2xpcCwgdGhpcy5zb3VuZF92b2x1bWUsIGZhbHNlLCBBdWRpb1R5cGUuU291bmQsIGNiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxldCB0YXNrOiBBdWRpb1BsYXlUYXNrID0geyB0eXBlOiBBdWRpb1R5cGUuU291bmQsIG5hbWU6IG5hbWUsIHBhdGg6IHBhdGgsIHZvbHVtZTogdGhpcy5zb3VuZF92b2x1bWUsIGxvb3A6IGZhbHNlLCBjYiB9O1xuICAgICAgICAgICAgdGhpcy5sb2FkX3Rhc2sodGFzayk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBnZXRfc291bmRfbXV0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc291bmRfbXV0ZTtcbiAgICB9XG5cbiAgICBzZXRfc291bmRfbXV0ZShpc19tdXRlOiBib29sZWFuKSB7XG4gICAgICAgIHRoaXMuc291bmRfbXV0ZSA9IGlzX211dGU7XG4gICAgICAgIHRoaXMuc291bmRfaWRzLmZvckVhY2goKHNpZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGlzX211dGUpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZShzaWQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUoc2lkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIExvY2FsU3RvcmFnZS5pbnMoKS5zZXRMb2NhbChDT05TVF9TVE9SQUdFX0tFWS5LRVlfU09VTkRfSVNfTVVURSwgaXNfbXV0ZSk7XG4gICAgfVxuXG4gICAgLy8wfjFcbiAgICBzZXRfc291bmRfdm9sdW1lKHZvbHVtZTogbnVtYmVyKSB7XG4gICAgICAgIHRoaXMuc291bmRfdm9sdW1lID0gdm9sdW1lO1xuICAgICAgICB0aGlzLnNvdW5kX2lkcy5mb3JFYWNoKChzaWQpID0+IHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnNldFZvbHVtZShzaWQsIHZvbHVtZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBMb2NhbFN0b3JhZ2UuaW5zKCkuc2V0TG9jYWwoQ09OU1RfU1RPUkFHRV9LRVkuS0VZX1NPVU5EX1ZPTFVNRSwgdm9sdW1lKTtcbiAgICB9XG5cbiAgICBzdG9wX3NvdW5kKCkge1xuICAgICAgICB0aGlzLnNvdW5kX2lkcy5mb3JFYWNoKChzaWQpID0+IHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3Aoc2lkKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc291bmRfaWRzLmxlbmd0aCA9IDA7XG4gICAgfVxuXG4gICAgY2xlYXJfY2FjaGUoKSB7XG4gICAgICAgIHRoaXMuY2xpcF9jYWNoZS5mb3JFYWNoKChjbGlwLCBrZXkpID0+IHtcbiAgICAgICAgICAgIGxvYWRlcl9tZ3IuZ2V0X2luc3QoKS5yZWxlYXNlKGNsaXApO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGlwX2NhY2hlLmNsZWFyKCk7XG4gICAgICAgIHRoaXMubG9hZGluZ19tYXAuY2xlYXIoKTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUudW5jYWNoZUFsbCgpO1xuICAgIH1cbn1cblxuZW51bSBBdWRpb1R5cGUge1xuICAgIE11c2ljID0gMSxcbiAgICBTb3VuZCA9IDIsXG59XG5cbmludGVyZmFjZSBBdWRpb1BsYXlUYXNrIHtcbiAgICB0eXBlOiBBdWRpb1R5cGU7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHBhdGg6IHN0cmluZztcbiAgICB2b2x1bWU6IG51bWJlcjtcbiAgICBsb29wOiBib29sZWFuO1xuICAgIGNiPzogdXRpbHMuaGFuZGxlcjtcbn1cblxuZXhwb3J0IGNvbnN0IEFVRElPX0NPTkZJRyA9IHtcbiAgICBBdWRpb19CdG46IFwiYnV0dG9uXCIsXG4gICAgQXVkaW9fbGV2ZWx1cDogXCJsZXZlbHVwXCIsXG4gICAgQXVkaW9fc3RhcjogXCJzdGFyXCIsXG4gICAgQXVkaW9fYmFsbHM6IFwiYmFsbHNcIixcbiAgICBBdWRpb19CZ206IFwiYmdcIixcbiAgICBBdWRpb19nYW1lb3ZlcjogXCJnYW1lb3ZlclwiLFxuICAgIEF1ZGlvX3dpbjogXCJ3aW5cIixcbiAgICBBdWRpb19jb25ncmE6IFwiY29uZ3JhXCIsXG5cbn0iXX0=