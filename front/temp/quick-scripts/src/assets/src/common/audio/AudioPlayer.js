"use strict";
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