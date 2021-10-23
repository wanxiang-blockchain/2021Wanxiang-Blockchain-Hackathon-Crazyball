
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/GameView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'da5e90fyi5E2ok/vF/eouo6', 'GameView');
// src/game/GameView.ts

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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var BallItem_1 = require("./item/BallItem");
var GameConst_1 = require("./GameConst");
var GameModel_1 = require("./model/GameModel");
var BrickItem_1 = require("./item/BrickItem");
var RandomUtil_1 = require("../common/random/RandomUtil");
var EventDispatch_1 = require("../common/event/EventDispatch");
var AudioPlayer_1 = require("../common/audio/AudioPlayer");
var util_1 = require("../common/util");
var loader_mgr_1 = require("../common/loader/loader_mgr");
var Tween_1 = require("../common/tween/Tween");
var timer_mgr_1 = require("../common/timer/timer_mgr");
var Common_1 = require("./common/Common");
var State_1 = require("./model/State");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameView = /** @class */ (function (_super) {
    __extends(GameView, _super);
    function GameView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bg = null;
        _this.bgTitle = null;
        _this.node_top = null;
        _this.stopButton = null;
        _this.startButton = null;
        _this.node_physics = null;
        _this.lb_ball_count = null;
        _this.lb_ball_power = null;
        _this.node_freeze = null;
        _this.bottomBarBox = null;
        _this.fucPrefab = null;
        _this.basePrefab = null;
        _this.lb_score = null;
        _this.node_power_progress = null;
        _this.balls_ins = [];
        _this.bricks_ins = [];
        _this.node_star_img = null;
        _this.star_ins = null;
        _this.overLine = null;
        _this.overObj = null;
        _this.clearLine = null;
        _this.clearAll = null;
        _this.cannon_head = null;
        _this.multipleBallCount = 0;
        _this.brick_max_count = 7;
        _this._star_pool = [];
        _this.balls_pool = [];
        _this.bricks_pool = [];
        _this.balls_in_game = [];
        _this.bricks_in_game = [];
        _this._updateDt = 0;
        _this._brick_speed = 1;
        _this._moved_length = 0;
        _this._moved_level = 0;
        // 1 big
        // 2 speed
        // 3 freeze
        _this._power_type = 0;
        _this._isGameOver = false;
        _this.selfFucActiveSet = new Set();
        _this._brick_img_pool = [];
        return _this;
    }
    GameView.prototype.onEnable = function () {
        State_1.default.ins().mainNear.contract.play_game({
            account_id: State_1.default.ins().mainNear.ownerKey
        });
        State_1.default.ins().isPay = false;
    };
    GameView.prototype.onLoad = function () {
        var _this = this;
        this.stopButton.on('touchstart', function () { return _this.onGameStatusToogle(false); }, this);
        this.startButton.on('touchstart', function () { return _this.onGameStatusToogle(true); }, this);
        this.initFuc();
        var random = Math.round(1000000 + Math.random() * 8999999).toString();
        RandomUtil_1.RandomUtil.ins().init(random);
        this.bg.on('touchmove', this.onTouchMove, this);
        cc.director.getPhysicsManager().enabled = true;
        cc.director.getPhysicsManager().enabledAccumulator = true;
        for (var i = 0, len = this.balls_ins.length; i < len;) {
            this.balls_pool[i++] = [];
        }
        for (var i = 0, len = this.bricks_ins.length; i < len;) {
            this.bricks_pool[i++] = [];
        }
        this.gameStart();
    };
    GameView.prototype.initFuc = function () {
        var _this = this;
        if (this.bottomBarBox.children.length > 0) {
            this.bottomBarBox.removeAllChildren();
        }
        new Array(5).fill(1).forEach(function (item, index) {
            var target = null;
            if (index === 2) {
                target = cc.instantiate(_this.basePrefab);
                _this.cannon_head = target.getChildByName('baseBox');
            }
            else {
                target = cc.instantiate(_this.fucPrefab);
                var fucIndex_1 = index > 1 ? index - 1 : index;
                State_1.default.ins().imageList.map(function (item, index) {
                    if (item.sort === fucIndex_1 && item.payCount > 0) {
                        var targetSprite_1 = target.getComponent(cc.Sprite);
                        cc.resources.load(item.url, cc.SpriteFrame, function (err, spriteFrame) {
                            targetSprite_1.spriteFrame = spriteFrame;
                        });
                        var countBox = target.getChildByName('countBox');
                        countBox.active = true;
                        var title = countBox.getChildByName('title').getComponent(cc.Label);
                        title.string = item.title;
                        var countNode = target.getChildByName('count');
                        countNode.active = true;
                        var countLabel = countNode.getComponent(cc.Label);
                        countLabel.string = 'x' + item.payCount;
                        target.on('touchstart', function () { return _this.onFucTouchstart(target, item, index); }, _this);
                    }
                });
            }
            _this.bottomBarBox.addChild(target);
        });
    };
    GameView.prototype.onFucTouchstart = function (target, item, itemIndex) {
        return __awaiter(this, void 0, void 0, function () {
            var tokenId, bgTitleLabel, multiple, count, timeBox, timeBoxSprite, time, callback;
            var _this = this;
            return __generator(this, function (_a) {
                if (this._isGameOver || this.startButton.active)
                    return [2 /*return*/];
                if (State_1.default.ins().imageList[itemIndex].payCount <= 0)
                    return [2 /*return*/];
                if (this.selfFucActiveSet.has(item.type))
                    return [2 /*return*/];
                if (item.type === 2 || item.type === 3 || item.type === 4) {
                    if (this.selfFucActiveSet.has(2) || this.selfFucActiveSet.has(3) || this.selfFucActiveSet.has(4))
                        return [2 /*return*/];
                }
                this.selfFucActiveSet.add(item.type);
                if (item.payList.length > 0) {
                    tokenId = State_1.default.ins().imageList[itemIndex].payList.splice(0, 1)[0].token_id;
                    State_1.default.ins().mainNear.contract.nft_burn({
                        token_id: tokenId
                    });
                }
                this.bgTitle.active = true;
                bgTitleLabel = this.bgTitle.getComponent(cc.Label);
                multiple = 1;
                switch (item.type) {
                    case 6:
                        {
                            bgTitleLabel.string = '';
                            this._isGameOver = true;
                            cc.director.getPhysicsManager().enabled = false;
                            this.bricks_in_game.forEach(function (item) {
                                if (Math.abs(item.node.y - _this.bricks_in_game[0].node.y) < 45) {
                                    item.node.active = false;
                                    GameModel_1.default.ins().score += Number(item.lb_hp.string);
                                    if (item.star_num > 0) {
                                        GameModel_1.default.ins().ball_power += item.star_num;
                                        AudioPlayer_1.AudioPlayer.ins().play_sound('star');
                                    }
                                    if (item.ball_num > 0) {
                                        for (var index = 0; index < item.ball_num; index++) {
                                            EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_CREATE_BALL);
                                        }
                                        AudioPlayer_1.AudioPlayer.ins().play_sound('balls');
                                    }
                                }
                            });
                            this.clearLine.active = true;
                            this.clearLine.setPosition(750, this.bricks_in_game[0].node.y);
                            cc.tween(this.clearLine)
                                .to(0.3, { x: -750 })
                                .call(function () {
                                _this._isGameOver = false;
                                cc.director.getPhysicsManager().enabled = true;
                                _this.clearLine.active = false;
                            })
                                .start();
                        }
                        break;
                    case 1:
                        this.node_freeze.active = true;
                        bgTitleLabel.string = '冻结全屏';
                        break;
                    case 2:
                        this.cannon_head.scale = 1.4;
                        bgTitleLabel.string = '两倍加速';
                        multiple = 2;
                        break;
                    case 3:
                        this.cannon_head.scale = 1.7;
                        bgTitleLabel.string = '三倍加速';
                        multiple = 3;
                        break;
                    case 4:
                        this.cannon_head.scale = 2;
                        bgTitleLabel.string = '五倍加速';
                        multiple = 5;
                        break;
                    case 5:
                        {
                            bgTitleLabel.string = '';
                            this._isGameOver = true;
                            cc.director.getPhysicsManager().enabled = false;
                            this.bricks_in_game.forEach(function (item) {
                                item.node.active = false;
                                var hp = 0;
                                if (item.lb_hp.string.indexOf('M') !== -1) {
                                    hp = Number(item.lb_hp.string.split('M')[0]) * 1000000;
                                }
                                if (item.lb_hp.string.indexOf('K') !== -1) {
                                    hp = Number(item.lb_hp.string.split('K')[0]) * 1000;
                                }
                                GameModel_1.default.ins().score += hp;
                                if (item.star_num > 0) {
                                    GameModel_1.default.ins().ball_power += item.star_num;
                                    AudioPlayer_1.AudioPlayer.ins().play_sound('star');
                                }
                                if (item.ball_num > 0) {
                                    for (var index = 0; index < item.ball_num; index++) {
                                        EventDispatch_1.EventDispatch.ins().fire(EventDispatch_1.Event_Name.GAME_CREATE_BALL);
                                    }
                                    AudioPlayer_1.AudioPlayer.ins().play_sound('balls');
                                }
                            });
                            this.clearAll.active = true;
                            cc.tween(this.clearAll.getChildByName('bg3'))
                                .to(0.3, { angle: 180 })
                                .to(0.3, { angle: 360 })
                                .repeat(2)
                                .call(function () {
                                _this.clearAll.active = false;
                                _this.clearAll.getChildByName('bg3').angle = -0;
                                _this._isGameOver = false;
                                cc.director.getPhysicsManager().enabled = true;
                            })
                                .start();
                        }
                        break;
                }
                this.multipleBallCount = GameModel_1.default.ins().ball_power * (multiple - 1);
                GameModel_1.default.ins().ball_power += this.multipleBallCount;
                State_1.default.ins().imageList[itemIndex].payCount -= 1;
                count = target.getChildByName('count').getComponent(cc.Label);
                count.string = 'x' + State_1.default.ins().imageList[itemIndex].payCount.toString();
                AudioPlayer_1.AudioPlayer.ins().play_sound('levelup');
                timeBox = target.getChildByName('timeBox');
                timeBox.active = true;
                timeBoxSprite = timeBox.getComponent(cc.Sprite);
                cc.tween(timeBoxSprite)
                    .to(item.time, {
                    fillRange: 0
                })
                    .start();
                time = item.time;
                callback = function () {
                    time--;
                    _this.bgTitle.active = false;
                    if (time <= 0) {
                        _this.unschedule(callback);
                        timeBoxSprite.fillRange = 1;
                        timeBox.active = false;
                        if (item.type === 1) {
                            _this.node_freeze.active = false;
                        }
                        if (item.type === 2 || item.type === 3 || item.type === 4) {
                            _this.cannon_head.scale = 1;
                            GameModel_1.default.ins().ball_power -= _this.multipleBallCount;
                            _this.multipleBallCount = 0;
                        }
                        _this.selfFucActiveSet.delete(item.type);
                    }
                };
                this.schedule(callback, 1);
                return [2 /*return*/];
            });
        });
    };
    GameView.prototype.onGameStatusToogle = function (status) {
        if (!this.overObj.active) {
            AudioPlayer_1.AudioPlayer.ins().play_sound('btn');
            if (status) {
                this.stopButton.active = true;
                this.startButton.active = false;
                this._isGameOver = false;
                cc.director.getPhysicsManager().enabled = true;
                AudioPlayer_1.AudioPlayer.ins().play_music('bg');
            }
            else {
                this.stopButton.active = false;
                this.startButton.active = true;
                this._isGameOver = true;
                cc.director.getPhysicsManager().enabled = false;
                AudioPlayer_1.AudioPlayer.ins().stop_music();
            }
        }
    };
    GameView.prototype.onTouchMove = function (param) {
        var deltaX = param.getDeltaX();
        var deltaY = param.getDeltaY();
        var deltaR = Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 0.3;
        var sign = Math.sign(deltaX);
        var angle = -this.cannon_head.angle + deltaR * sign;
        angle = Math.abs(angle) >= 85 ? Math.sign(angle) * 85 : angle;
        this.cannon_head.angle = -angle;
    };
    GameView.prototype.gameStart = function () {
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_CREATE_BALL, this.createBall, this);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_RELIVE, this.gameRelive, this);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_ON_TOUCH_MOVE, this.onTouchMove, this);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_POWER_TYPE_CHANGED, this.updateGamePowerType, this);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_SCORE_CHANGED, this.updateScore, this, true);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_BALL_POWER_CHANGED, this.updateBallPower, this, true);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_PLAY_BRICK_REMOVE_EFFECT, this.playBrickDeleteEffect, this);
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_STAR_GET_EFFECT, this.updateStarNumGetEffect, this);
        AudioPlayer_1.AudioPlayer.ins().play_music('bg');
        this.resetGame();
    };
    GameView.prototype.resetGame = function () {
        this.node_physics.active = true;
        this.cannon_head.angle = 0;
        cc.director.getPhysicsManager().enabled = true;
        this._updateDt = 0;
        this._moved_length = 0;
        this._moved_level = 0;
        this._isGameOver = false;
        this.updateGamePowerType(0);
        GameModel_1.default.ins().reset();
        var ball_init_count = GameModel_1.default.ins().ball_init_count;
        for (var index = 0; index < ball_init_count; index++) {
            this.createBall();
        }
        var brick_radius = GameConst_1.default.ins().brick_radius;
        for (var i = 0; i < 2; i++) {
            var rightNumber = Math.round(this.brick_max_count / 2);
            var leftNumber = -1 * Math.floor(this.brick_max_count / 2);
            for (var j = leftNumber; j < rightNumber; j++) {
                var hp = (i + 1) * GameModel_1.default.ins().ball_power + (ball_init_count - 4);
                hp = hp < 0 ? 1 : hp;
                this.createBrick(j * brick_radius * 2 + GameConst_1.default.ins().brick_init_x, i * brick_radius * 2 + GameConst_1.default.ins().brick_init_y, hp);
            }
        }
        this.lb_ball_power.string = "" + GameModel_1.default.ins().ball_power;
    };
    GameView.prototype.update = function (dt) {
        var _this = this;
        timer_mgr_1.TimerMgr.getInst().update(dt);
        if (this._isGameOver)
            return;
        if (this.node_freeze.active) {
            this._brick_speed = 0;
        }
        if (this._power_type > 0) {
            this.node_power_progress.width -= 1.5;
            if (this.node_power_progress.active && this.node_power_progress.width <= 0) {
                this.updateGamePowerType(0);
            }
            switch (this._power_type) {
                case 3: {
                    this._brick_speed = 0;
                    break;
                }
            }
        }
        this._updateDt++;
        this._moved_length += this._brick_speed;
        if (this._updateDt % GameModel_1.default.ins().fireBallDt === 0 || this._power_type === 2) {
            this.balls_in_game.some(function (item) {
                if (item.ball_status === BallItem_1.EnumBallStatus.onReady && (item.ball_type === 0 || _this._power_type === 2)) {
                    item.power_scale = _this._power_type === 1 ? 2 : 1;
                    item.fireBall(-_this.cannon_head.angle);
                    return true;
                }
                return false;
            });
        }
        var brick_radius = GameConst_1.default.ins().brick_radius;
        var ball_power = GameModel_1.default.ins().ball_power - this.multipleBallCount;
        var new_level = Math.floor(this._moved_length / 4 / brick_radius);
        if (new_level > this._moved_level) {
            this._moved_level++;
            var balls_in_game_length = this.balls_in_game.length / (this._power_type === 2 ? 2 : 1);
            var maxHp = Math.ceil(balls_in_game_length * ball_power * 0.5 + this._moved_level * ball_power * 1.2);
            var brick_type_percent = GameConst_1.default.ins().brick_type_percent;
            var big_j = -999;
            var item_i = -999, item_j = -999;
            if (this._moved_level % 12 === 0) {
                big_j = RandomUtil_1.RandomUtil.ins().randomNum(-2, 3);
                this.createBrick(-brick_radius + big_j * brick_radius * 2 + GameConst_1.default.ins().brick_init_x, brick_radius + GameConst_1.default.ins().brick_init_y, RandomUtil_1.RandomUtil.ins().randomNum(maxHp * 3, maxHp * 6), RandomUtil_1.RandomUtil.ins().randomNum(14, 16), 10);
            }
            if (this._moved_level % 11 === 0) {
                item_i = RandomUtil_1.RandomUtil.ins().randomNum(0, 1);
                item_j = RandomUtil_1.RandomUtil.ins().randomNum(-3, 3);
            }
            for (var i = 0; i < 2; i++) {
                for (var j = -3; j < 4; j++) {
                    if (j === big_j || j === big_j - 1) {
                    }
                    else {
                        var hp = i === item_i && j === item_j
                            ? RandomUtil_1.RandomUtil.ins().randomNum(ball_power, Math.ceil(maxHp / 2))
                            : RandomUtil_1.RandomUtil.ins().randomNum(-Math.round(maxHp / ((this._moved_level % 5) + 1)), maxHp);
                        var brick_type = i === item_i && j === item_j
                            ? RandomUtil_1.RandomUtil.ins().randomNum(11, 13)
                            : brick_type_percent[RandomUtil_1.RandomUtil.ins().randomNum(0, brick_type_percent.length - 1)];
                        if (hp >= ball_power) {
                            this.createBrick(j * brick_radius * 2 + GameConst_1.default.ins().brick_init_x, i * brick_radius * 2 + GameConst_1.default.ins().brick_init_y, hp, brick_type, Math.ceil((hp * 10) / maxHp));
                        }
                    }
                }
            }
        }
        var brick_min_y = 9999;
        for (var index = 0, len = this.bricks_in_game.length; index < len; index++) {
            var element = this.bricks_in_game[index];
            if (element && element.node) {
                var brick = element.node;
                if (element.hp <= 0 || !brick.active) {
                    if (this._updateDt % 60 === 0) {
                        element.reset();
                        this.bricks_in_game.splice(index, 1);
                        this.bricks_pool[element.brick_type].push(brick);
                        index--;
                    }
                }
                else {
                    brick.y -= this._brick_speed;
                    if (brick.y - element.brick_radius_mul * brick_radius <= this.overLine.y) {
                        this.gameOver();
                        return;
                    }
                    if (brick.y < brick_min_y) {
                        brick_min_y = brick.y;
                    }
                }
            }
        }
        this._brick_speed =
            brick_min_y > GameConst_1.default.ins().ball_init_y + brick_radius * 7 ? 1 : brick_min_y > GameConst_1.default.ins().ball_init_y + brick_radius * 5 ? 0.9 : 0.6;
    };
    GameView.prototype.createBall = function (x, y, status, ball_type) {
        if (x === void 0) { x = GameConst_1.default.ins().ball_init_x; }
        if (y === void 0) { y = GameConst_1.default.ins().ball_init_y; }
        if (status === void 0) { status = BallItem_1.EnumBallStatus.onReady; }
        if (ball_type === void 0) { ball_type = 0; }
        var ball = this.balls_pool[ball_type].shift();
        if (!ball) {
            ball = cc.instantiate(this.balls_ins[ball_type]);
            this.node_physics.addChild(ball);
        }
        var item = ball.getComponent(BallItem_1.default);
        item.init(x, y, status);
        ball.active = true;
        this.balls_in_game.unshift(item);
        this.lb_ball_count.string = "" + this.balls_in_game.length / 2;
        if (ball_type === 0) {
            this.createBall(GameConst_1.default.ins().ball_init_x, GameConst_1.default.ins().ball_init_y, BallItem_1.EnumBallStatus.onReady, 1);
        }
    };
    GameView.prototype.createBrick = function (x, y, hp, brick_type, colors_num) {
        if (x === void 0) { x = GameConst_1.default.ins().brick_init_x; }
        if (y === void 0) { y = GameConst_1.default.ins().brick_init_y; }
        if (hp === void 0) { hp = 1; }
        if (brick_type === void 0) { brick_type = 0; }
        if (colors_num === void 0) { colors_num = 1; }
        if (brick_type === this.brick_max_count && this.balls_in_game.length > 200) {
            brick_type = 0;
        }
        var brick = this.bricks_pool[brick_type].shift();
        if (!brick) {
            brick = cc.instantiate(this.bricks_ins[brick_type]);
            this.node_physics.addChild(brick);
        }
        var item = brick.getComponent(BrickItem_1.default);
        brick.active = true;
        brick.x = x;
        brick.y = y;
        item.init(colors_num, hp);
        this.bricks_in_game.push(item);
    };
    GameView.prototype.updateScore = function (old, newValue) {
        this.lb_score.string = Common_1.formatPrice(GameModel_1.default.ins().score, 0, false, ' ');
    };
    GameView.prototype.updateBallPower = function (old, newValue) {
        this.lb_ball_power.string = "" + GameModel_1.default.ins().ball_power;
    };
    GameView.prototype.updateStarNumGetEffect = function (x, y, count) {
        var _this = this;
        var targetPos = this.node_top.convertToNodeSpaceAR(this.node_star_img.convertToWorldSpaceAR(cc.v2(0, 0)));
        var _loop_1 = function (index) {
            var star_item = this_1._star_pool.shift();
            if (!star_item) {
                star_item = cc.instantiate(this_1.star_ins);
                this_1.node_top.addChild(star_item);
            }
            star_item.x = x;
            star_item.y = y;
            star_item.angle = 0;
            star_item.active = true;
            Tween_1.Tween.get(star_item)
                .to({ angle: 720, x: targetPos.x, y: targetPos.y }, 800 + 100 * index, Tween_1.Ease.getBackInOut(1.2))
                .call(function () {
                star_item.active = false;
                _this._star_pool.push(star_item);
                Tween_1.Tween.get(_this.node_star_img)
                    .to({ scale: 1.2 }, 300)
                    .to({ scale: 1 }, 300, Tween_1.Ease.backInOut)
                    .call(function () {
                    GameModel_1.default.ins().ball_power += 1;
                    _this.lb_ball_power.string = "" + GameModel_1.default.ins().ball_power;
                });
            });
        };
        var this_1 = this;
        for (var index = 0; index < count; index++) {
            _loop_1(index);
        }
    };
    GameView.prototype.playBrickDeleteEffect = function (x, y, color) {
        var _this = this;
        var theme_cfg = GameConst_1.default.ins().theme_config[0];
        if (theme_cfg) {
            loader_mgr_1.loader_mgr.get_inst().loadAsset('texture/plist/customize', util_1.gen_handler(function (res) {
                var spriteFrame = res.getSpriteFrame(theme_cfg.theme);
                if (spriteFrame) {
                    var _loop_2 = function (index) {
                        var i = (index % 3) - 1.5;
                        var j = Math.floor(index / 3) - 1.5;
                        var targetPosX = x + i * (100 + 150 * Math.random());
                        var targetPosY = y + j * (100 + 150 * Math.random());
                        var img = _this._brick_img_pool.shift();
                        if (!img) {
                            img = new cc.Node();
                            img.addComponent(cc.Sprite);
                            _this.node_physics.addChild(img);
                        }
                        img.active = true;
                        img.angle = 0;
                        img.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                        img.color = color;
                        var size = Math.random() * 50 + 50;
                        img.width = img.height = size;
                        img.x = x;
                        img.y = y;
                        Tween_1.Tween.get(img)
                            .to({ x: targetPosX, y: targetPosY, width: size / 3, height: size / 3, angle: 1000 * Math.random() }, Math.random() * 500 + 500)
                            .call(function () {
                            img.active = false;
                            _this._brick_img_pool.push(img);
                        });
                    };
                    for (var index = 0; index < 9; index++) {
                        _loop_2(index);
                    }
                }
                else {
                }
            }), cc.SpriteAtlas);
        }
    };
    GameView.prototype.updateGamePowerType = function (power) {
        if (power === void 0) { power = 0; }
        if (power > 0) {
            if (this._power_type === 0) {
                this.node_power_progress.active = true;
                this.node_power_progress.width = 750;
                this._power_type = power;
                var bgTitleLabel = this.bgTitle.getComponent(cc.Label);
                switch (power) {
                    case 2: {
                        this.cannon_head.scale = 1.4;
                        break;
                    }
                    case 3: {
                        this.node_freeze.active = true;
                        break;
                    }
                }
                this.lb_ball_count.node.color = this.node_power_progress.color =
                    [cc.Color.WHITE, cc.Color.RED, cc.Color.YELLOW, cc.Color.GRAY][power] || cc.Color.WHITE;
                AudioPlayer_1.AudioPlayer.ins().play_sound('levelup');
            }
        }
        else {
            this.node_power_progress.active = false;
            this.node_power_progress.width = 750;
            this.lb_ball_count.node.color = cc.color(230, 150, 26);
            if (!this.selfFucActiveSet.has(1)) {
                this.node_freeze.active = false;
            }
            if (!this.selfFucActiveSet.has(2) && !this.selfFucActiveSet.has(3) && !this.selfFucActiveSet.has(4)) {
                this.cannon_head.scale = 1;
            }
            this._power_type = power;
        }
    };
    GameView.prototype.gameRelive = function () {
        var _this = this;
        this.bricks_in_game.forEach(function (value) {
            value.reset();
            _this.bricks_pool[value.brick_type].push(value.node);
        });
        this.bricks_in_game = [];
        this.overObj.active = false;
        this._isGameOver = false;
        cc.director.getPhysicsManager().enabled = true;
        AudioPlayer_1.AudioPlayer.ins().play_music('bg');
    };
    GameView.prototype.gameOver = function () {
        this._isGameOver = true;
        cc.director.getPhysicsManager().enabled = false;
        this.overObj.active = true;
        EventDispatch_1.EventDispatch.ins().add(EventDispatch_1.Event_Name.GAME_RELIVE, this.gameRelive, this);
        AudioPlayer_1.AudioPlayer.ins().stop_music();
    };
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "bg", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "bgTitle", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "node_top", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "stopButton", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "startButton", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "node_physics", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lb_ball_count", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lb_ball_power", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "node_freeze", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "bottomBarBox", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "fucPrefab", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "basePrefab", void 0);
    __decorate([
        property(cc.Label)
    ], GameView.prototype, "lb_score", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "node_power_progress", void 0);
    __decorate([
        property([cc.Prefab])
    ], GameView.prototype, "balls_ins", void 0);
    __decorate([
        property([cc.Prefab])
    ], GameView.prototype, "bricks_ins", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "node_star_img", void 0);
    __decorate([
        property(cc.Prefab)
    ], GameView.prototype, "star_ins", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "overLine", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "overObj", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "clearLine", void 0);
    __decorate([
        property(cc.Node)
    ], GameView.prototype, "clearAll", void 0);
    GameView = __decorate([
        ccclass
    ], GameView);
    return GameView;
}(cc.Component));
exports.default = GameView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9HYW1lVmlldy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSw0Q0FBMkQ7QUFDM0QseUNBQW9DO0FBQ3BDLCtDQUEwQztBQUMxQyw4Q0FBeUM7QUFDekMsMERBQXlEO0FBQ3pELCtEQUEwRTtBQUMxRSwyREFBMEQ7QUFDMUQsdUNBQTZDO0FBQzdDLDBEQUF5RDtBQUN6RCwrQ0FBb0Q7QUFDcEQsdURBQXFEO0FBQ3JELDBDQUE4QztBQUM5Qyx1Q0FBa0M7QUFFNUIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUM7SUFBc0MsNEJBQVk7SUFBbEQ7UUFBQSxxRUF1b0JDO1FBcm9CQyxRQUFFLEdBQVksSUFBSSxDQUFDO1FBRW5CLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFFeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUV6QixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUUzQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixtQkFBYSxHQUFhLElBQUksQ0FBQztRQUUvQixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUU1QixrQkFBWSxHQUFZLElBQUksQ0FBQztRQUU3QixlQUFTLEdBQWMsSUFBSSxDQUFDO1FBRTVCLGdCQUFVLEdBQWMsSUFBSSxDQUFDO1FBRzdCLGNBQVEsR0FBYSxJQUFJLENBQUM7UUFFMUIseUJBQW1CLEdBQVksSUFBSSxDQUFDO1FBR3BDLGVBQVMsR0FBZ0IsRUFBRSxDQUFDO1FBRTVCLGdCQUFVLEdBQWdCLEVBQUUsQ0FBQztRQUc3QixtQkFBYSxHQUFZLElBQUksQ0FBQztRQUc5QixjQUFRLEdBQWMsSUFB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QUU1QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDO2dEQUNTO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7OENBQ087SUFFMUI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzt5REFDa0I7SUFHcEM7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7K0NBQ007SUFFNUI7UUFEQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDLENBQUM7Z0RBQ087SUFHN0I7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzttREFDWTtJQUc5QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsTUFBTSxDQUFDOzhDQUNPO0lBRzNCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFHekI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs2Q0FDTTtJQUV4QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDOytDQUNRO0lBRTFCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7OENBQ087SUFsRE4sUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXVvQjVCO0lBQUQsZUFBQztDQXZvQkQsQUF1b0JDLENBdm9CcUMsRUFBRSxDQUFDLFNBQVMsR0F1b0JqRDtrQkF2b0JvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJhbGxJdGVtLCB7IEVudW1CYWxsU3RhdHVzIH0gZnJvbSAnLi9pdGVtL0JhbGxJdGVtJztcbmltcG9ydCBHYW1lQ29uc3QgZnJvbSAnLi9HYW1lQ29uc3QnO1xuaW1wb3J0IEdhbWVNb2RlbCBmcm9tICcuL21vZGVsL0dhbWVNb2RlbCc7XG5pbXBvcnQgQnJpY2tJdGVtIGZyb20gJy4vaXRlbS9Ccmlja0l0ZW0nO1xuaW1wb3J0IHsgUmFuZG9tVXRpbCB9IGZyb20gJy4uL2NvbW1vbi9yYW5kb20vUmFuZG9tVXRpbCc7XG5pbXBvcnQgeyBFdmVudERpc3BhdGNoLCBFdmVudF9OYW1lIH0gZnJvbSAnLi4vY29tbW9uL2V2ZW50L0V2ZW50RGlzcGF0Y2gnO1xuaW1wb3J0IHsgQXVkaW9QbGF5ZXIgfSBmcm9tICcuLi9jb21tb24vYXVkaW8vQXVkaW9QbGF5ZXInO1xuaW1wb3J0IHsgZ2VuX2hhbmRsZXIgfSBmcm9tICcuLi9jb21tb24vdXRpbCc7XG5pbXBvcnQgeyBsb2FkZXJfbWdyIH0gZnJvbSAnLi4vY29tbW9uL2xvYWRlci9sb2FkZXJfbWdyJztcbmltcG9ydCB7IFR3ZWVuLCBFYXNlIH0gZnJvbSAnLi4vY29tbW9uL3R3ZWVuL1R3ZWVuJztcbmltcG9ydCB7IFRpbWVyTWdyIH0gZnJvbSAnLi4vY29tbW9uL3RpbWVyL3RpbWVyX21ncic7XG5pbXBvcnQgeyBmb3JtYXRQcmljZSB9IGZyb20gJy4vY29tbW9uL0NvbW1vbic7XG5pbXBvcnQgU3RhdGUgZnJvbSAnLi9tb2RlbC9TdGF0ZSc7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZVZpZXcgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgYmc6IGNjLk5vZGUgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgYmdUaXRsZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBub2RlX3RvcDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBzdG9wQnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIHN0YXJ0QnV0dG9uOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG5vZGVfcGh5c2ljczogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5MYWJlbClcbiAgbGJfYmFsbF9jb3VudDogY2MuTGFiZWwgPSBudWxsO1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxiX2JhbGxfcG93ZXI6IGNjLkxhYmVsID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIG5vZGVfZnJlZXplOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGJvdHRvbUJhckJveDogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIGZ1Y1ByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgYmFzZVByZWZhYjogY2MuUHJlZmFiID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIGxiX3Njb3JlOiBjYy5MYWJlbCA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBub2RlX3Bvd2VyX3Byb2dyZXNzOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoW2NjLlByZWZhYl0pXG4gIGJhbGxzX2luczogY2MuUHJlZmFiW10gPSBbXTtcbiAgQHByb3BlcnR5KFtjYy5QcmVmYWJdKVxuICBicmlja3NfaW5zOiBjYy5QcmVmYWJbXSA9IFtdO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBub2RlX3N0YXJfaW1nOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBzdGFyX2luczogY2MuUHJlZmFiID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgb3ZlckxpbmU6IGNjLk5vZGUgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBvdmVyT2JqOiBjYy5Ob2RlID0gbnVsbDtcbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGNsZWFyTGluZTogY2MuTm9kZSA9IG51bGw7XG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBjbGVhckFsbDogY2MuTm9kZSA9IG51bGw7XG5cbiAgY2Fubm9uX2hlYWQ6IGNjLk5vZGUgPSBudWxsO1xuICBtdWx0aXBsZUJhbGxDb3VudCA9IDA7XG5cbiAgcHJpdmF0ZSBicmlja19tYXhfY291bnQgPSA3O1xuXG4gIHByaXZhdGUgX3N0YXJfcG9vbDogY2MuTm9kZVtdID0gW107XG5cbiAgcHJpdmF0ZSBiYWxsc19wb29sOiBjYy5Ob2RlW11bXSA9IFtdO1xuICBwcml2YXRlIGJyaWNrc19wb29sOiBjYy5Ob2RlW11bXSA9IFtdO1xuXG4gIHByaXZhdGUgYmFsbHNfaW5fZ2FtZTogQmFsbEl0ZW1bXSA9IFtdO1xuICBwcml2YXRlIGJyaWNrc19pbl9nYW1lOiBCcmlja0l0ZW1bXSA9IFtdO1xuXG4gIHByaXZhdGUgX3VwZGF0ZUR0OiBudW1iZXIgPSAwO1xuICBwcml2YXRlIF9icmlja19zcGVlZDogbnVtYmVyID0gMTtcbiAgcHJpdmF0ZSBfbW92ZWRfbGVuZ3RoID0gMDtcbiAgcHJpdmF0ZSBfbW92ZWRfbGV2ZWwgPSAwO1xuICAvLyAxIGJpZ1xuICAvLyAyIHNwZWVkXG4gIC8vIDMgZnJlZXplXG4gIHByaXZhdGUgX3Bvd2VyX3R5cGUgPSAwO1xuICBfaXNHYW1lT3ZlciA9IGZhbHNlO1xuXG4gIHNlbGZGdWNBY3RpdmVTZXQgPSBuZXcgU2V0KCk7XG5cbiAgb25FbmFibGUoKSB7XG4gICAgU3RhdGUuaW5zKCkubWFpbk5lYXIuY29udHJhY3QucGxheV9nYW1lKHtcbiAgICAgIGFjY291bnRfaWQ6IFN0YXRlLmlucygpLm1haW5OZWFyLm93bmVyS2V5XG4gICAgfSk7XG4gICAgU3RhdGUuaW5zKCkuaXNQYXkgPSBmYWxzZTtcbiAgfVxuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLnN0b3BCdXR0b24ub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLm9uR2FtZVN0YXR1c1Rvb2dsZShmYWxzZSksIHRoaXMpO1xuICAgIHRoaXMuc3RhcnRCdXR0b24ub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLm9uR2FtZVN0YXR1c1Rvb2dsZSh0cnVlKSwgdGhpcyk7XG5cbiAgICB0aGlzLmluaXRGdWMoKTtcblxuICAgIGxldCByYW5kb20gPSBNYXRoLnJvdW5kKDEwMDAwMDAgKyBNYXRoLnJhbmRvbSgpICogODk5OTk5OSkudG9TdHJpbmcoKTtcbiAgICBSYW5kb21VdGlsLmlucygpLmluaXQocmFuZG9tKTtcblxuICAgIHRoaXMuYmcub24oJ3RvdWNobW92ZScsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkQWNjdW11bGF0b3IgPSB0cnVlO1xuXG4gICAgZm9yIChsZXQgaSA9IDAsIGxlbiA9IHRoaXMuYmFsbHNfaW5zLmxlbmd0aDsgaSA8IGxlbjsgKSB7XG4gICAgICB0aGlzLmJhbGxzX3Bvb2xbaSsrXSA9IFtdO1xuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSAwLCBsZW4gPSB0aGlzLmJyaWNrc19pbnMubGVuZ3RoOyBpIDwgbGVuOyApIHtcbiAgICAgIHRoaXMuYnJpY2tzX3Bvb2xbaSsrXSA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMuZ2FtZVN0YXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIGluaXRGdWMoKSB7XG4gICAgaWYgKHRoaXMuYm90dG9tQmFyQm94LmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcbiAgICAgIHRoaXMuYm90dG9tQmFyQm94LnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfVxuICAgIG5ldyBBcnJheSg1KS5maWxsKDEpLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICBsZXQgdGFyZ2V0OiBjYy5Ob2RlID0gbnVsbDtcbiAgICAgIGlmIChpbmRleCA9PT0gMikge1xuICAgICAgICB0YXJnZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJhc2VQcmVmYWIpO1xuICAgICAgICB0aGlzLmNhbm5vbl9oZWFkID0gdGFyZ2V0LmdldENoaWxkQnlOYW1lKCdiYXNlQm94Jyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0YXJnZXQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmZ1Y1ByZWZhYik7XG4gICAgICAgIGxldCBmdWNJbmRleCA9IGluZGV4ID4gMSA/IGluZGV4IC0gMSA6IGluZGV4O1xuICAgICAgICBTdGF0ZS5pbnMoKS5pbWFnZUxpc3QubWFwKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgICAgIGlmIChpdGVtLnNvcnQgPT09IGZ1Y0luZGV4ICYmIGl0ZW0ucGF5Q291bnQgPiAwKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0U3ByaXRlID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgY2MucmVzb3VyY2VzLmxvYWQoaXRlbS51cmwsIGNjLlNwcml0ZUZyYW1lLCAoZXJyLCBzcHJpdGVGcmFtZTogY2MuU3ByaXRlRnJhbWUpID0+IHtcbiAgICAgICAgICAgICAgdGFyZ2V0U3ByaXRlLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxldCBjb3VudEJveCA9IHRhcmdldC5nZXRDaGlsZEJ5TmFtZSgnY291bnRCb3gnKTtcbiAgICAgICAgICAgIGNvdW50Qm94LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgdGl0bGUgPSBjb3VudEJveC5nZXRDaGlsZEJ5TmFtZSgndGl0bGUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgdGl0bGUuc3RyaW5nID0gaXRlbS50aXRsZTtcbiAgICAgICAgICAgIGxldCBjb3VudE5vZGUgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoJ2NvdW50Jyk7XG4gICAgICAgICAgICBjb3VudE5vZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBjb3VudExhYmVsID0gY291bnROb2RlLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBjb3VudExhYmVsLnN0cmluZyA9ICd4JyArIGl0ZW0ucGF5Q291bnQ7XG4gICAgICAgICAgICB0YXJnZXQub24oJ3RvdWNoc3RhcnQnLCAoKSA9PiB0aGlzLm9uRnVjVG91Y2hzdGFydCh0YXJnZXQsIGl0ZW0sIGluZGV4KSwgdGhpcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuYm90dG9tQmFyQm94LmFkZENoaWxkKHRhcmdldCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIG9uRnVjVG91Y2hzdGFydCh0YXJnZXQ6IGNjLk5vZGUsIGl0ZW0sIGl0ZW1JbmRleCkge1xuICAgIGlmICh0aGlzLl9pc0dhbWVPdmVyIHx8IHRoaXMuc3RhcnRCdXR0b24uYWN0aXZlKSByZXR1cm47XG4gICAgaWYgKFN0YXRlLmlucygpLmltYWdlTGlzdFtpdGVtSW5kZXhdLnBheUNvdW50IDw9IDApIHJldHVybjtcbiAgICBpZiAodGhpcy5zZWxmRnVjQWN0aXZlU2V0LmhhcyhpdGVtLnR5cGUpKSByZXR1cm47XG4gICAgaWYgKGl0ZW0udHlwZSA9PT0gMiB8fCBpdGVtLnR5cGUgPT09IDMgfHwgaXRlbS50eXBlID09PSA0KSB7XG4gICAgICBpZiAodGhpcy5zZWxmRnVjQWN0aXZlU2V0LmhhcygyKSB8fCB0aGlzLnNlbGZGdWNBY3RpdmVTZXQuaGFzKDMpIHx8IHRoaXMuc2VsZkZ1Y0FjdGl2ZVNldC5oYXMoNCkpIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWxmRnVjQWN0aXZlU2V0LmFkZChpdGVtLnR5cGUpO1xuXG4gICAgaWYgKGl0ZW0ucGF5TGlzdC5sZW5ndGggPiAwKSB7XG4gICAgICBsZXQgdG9rZW5JZCA9IFN0YXRlLmlucygpLmltYWdlTGlzdFtpdGVtSW5kZXhdLnBheUxpc3Quc3BsaWNlKDAsIDEpWzBdLnRva2VuX2lkO1xuICAgICAgU3RhdGUuaW5zKCkubWFpbk5lYXIuY29udHJhY3QubmZ0X2J1cm4oe1xuICAgICAgICB0b2tlbl9pZDogdG9rZW5JZFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5iZ1RpdGxlLmFjdGl2ZSA9IHRydWU7XG4gICAgbGV0IGJnVGl0bGVMYWJlbCA9IHRoaXMuYmdUaXRsZS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgIGxldCBtdWx0aXBsZSA9IDE7XG4gICAgc3dpdGNoIChpdGVtLnR5cGUpIHtcbiAgICAgIGNhc2UgNjpcbiAgICAgICAge1xuICAgICAgICAgIGJnVGl0bGVMYWJlbC5zdHJpbmcgPSAnJztcbiAgICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJyaWNrc19pbl9nYW1lLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGlmIChNYXRoLmFicyhpdGVtLm5vZGUueSAtIHRoaXMuYnJpY2tzX2luX2dhbWVbMF0ubm9kZS55KSA8IDQ1KSB7XG4gICAgICAgICAgICAgIGl0ZW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgR2FtZU1vZGVsLmlucygpLnNjb3JlICs9IE51bWJlcihpdGVtLmxiX2hwLnN0cmluZyk7XG4gICAgICAgICAgICAgIGlmIChpdGVtLnN0YXJfbnVtID4gMCkge1xuICAgICAgICAgICAgICAgIEdhbWVNb2RlbC5pbnMoKS5iYWxsX3Bvd2VyICs9IGl0ZW0uc3Rhcl9udW07XG4gICAgICAgICAgICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnc3RhcicpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChpdGVtLmJhbGxfbnVtID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtLmJhbGxfbnVtOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICBFdmVudERpc3BhdGNoLmlucygpLmZpcmUoRXZlbnRfTmFtZS5HQU1FX0NSRUFURV9CQUxMKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnYmFsbHMnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuY2xlYXJMaW5lLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgdGhpcy5jbGVhckxpbmUuc2V0UG9zaXRpb24oNzUwLCB0aGlzLmJyaWNrc19pbl9nYW1lWzBdLm5vZGUueSk7XG4gICAgICAgICAgY2MudHdlZW4odGhpcy5jbGVhckxpbmUpXG4gICAgICAgICAgICAudG8oMC4zLCB7IHg6IC03NTAgfSlcbiAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgdGhpcy5faXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyTGluZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuc3RhcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgdGhpcy5ub2RlX2ZyZWV6ZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBiZ1RpdGxlTGFiZWwuc3RyaW5nID0gJ+WGu+e7k+WFqOWxjyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAyOlxuICAgICAgICB0aGlzLmNhbm5vbl9oZWFkLnNjYWxlID0gMS40O1xuICAgICAgICBiZ1RpdGxlTGFiZWwuc3RyaW5nID0gJ+S4pOWAjeWKoOmAnyc7XG4gICAgICAgIG11bHRpcGxlID0gMjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIDM6XG4gICAgICAgIHRoaXMuY2Fubm9uX2hlYWQuc2NhbGUgPSAxLjc7XG4gICAgICAgIGJnVGl0bGVMYWJlbC5zdHJpbmcgPSAn5LiJ5YCN5Yqg6YCfJztcbiAgICAgICAgbXVsdGlwbGUgPSAzO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNDpcbiAgICAgICAgdGhpcy5jYW5ub25faGVhZC5zY2FsZSA9IDI7XG4gICAgICAgIGJnVGl0bGVMYWJlbC5zdHJpbmcgPSAn5LqU5YCN5Yqg6YCfJztcbiAgICAgICAgbXVsdGlwbGUgPSA1O1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgNTpcbiAgICAgICAge1xuICAgICAgICAgIGJnVGl0bGVMYWJlbC5zdHJpbmcgPSAnJztcbiAgICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gdHJ1ZTtcbiAgICAgICAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLmJyaWNrc19pbl9nYW1lLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIGl0ZW0ubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBocCA9IDA7XG4gICAgICAgICAgICBpZiAoaXRlbS5sYl9ocC5zdHJpbmcuaW5kZXhPZignTScpICE9PSAtMSkge1xuICAgICAgICAgICAgICBocCA9IE51bWJlcihpdGVtLmxiX2hwLnN0cmluZy5zcGxpdCgnTScpWzBdKSAqIDEwMDAwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5sYl9ocC5zdHJpbmcuaW5kZXhPZignSycpICE9PSAtMSkge1xuICAgICAgICAgICAgICBocCA9IE51bWJlcihpdGVtLmxiX2hwLnN0cmluZy5zcGxpdCgnSycpWzBdKSAqIDEwMDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBHYW1lTW9kZWwuaW5zKCkuc2NvcmUgKz0gaHA7XG4gICAgICAgICAgICBpZiAoaXRlbS5zdGFyX251bSA+IDApIHtcbiAgICAgICAgICAgICAgR2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXIgKz0gaXRlbS5zdGFyX251bTtcbiAgICAgICAgICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnc3RhcicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0uYmFsbF9udW0gPiAwKSB7XG4gICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtLmJhbGxfbnVtOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgRXZlbnREaXNwYXRjaC5pbnMoKS5maXJlKEV2ZW50X05hbWUuR0FNRV9DUkVBVEVfQkFMTCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnYmFsbHMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLmNsZWFyQWxsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgY2MudHdlZW4odGhpcy5jbGVhckFsbC5nZXRDaGlsZEJ5TmFtZSgnYmczJykpXG4gICAgICAgICAgICAudG8oMC4zLCB7IGFuZ2xlOiAxODAgfSlcbiAgICAgICAgICAgIC50bygwLjMsIHsgYW5nbGU6IDM2MCB9KVxuICAgICAgICAgICAgLnJlcGVhdCgyKVxuICAgICAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyQWxsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICB0aGlzLmNsZWFyQWxsLmdldENoaWxkQnlOYW1lKCdiZzMnKS5hbmdsZSA9IC0wO1xuICAgICAgICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnN0YXJ0KCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5tdWx0aXBsZUJhbGxDb3VudCA9IEdhbWVNb2RlbC5pbnMoKS5iYWxsX3Bvd2VyICogKG11bHRpcGxlIC0gMSk7XG4gICAgR2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXIgKz0gdGhpcy5tdWx0aXBsZUJhbGxDb3VudDtcblxuICAgIFN0YXRlLmlucygpLmltYWdlTGlzdFtpdGVtSW5kZXhdLnBheUNvdW50IC09IDE7XG4gICAgbGV0IGNvdW50ID0gdGFyZ2V0LmdldENoaWxkQnlOYW1lKCdjb3VudCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgY291bnQuc3RyaW5nID0gJ3gnICsgU3RhdGUuaW5zKCkuaW1hZ2VMaXN0W2l0ZW1JbmRleF0ucGF5Q291bnQudG9TdHJpbmcoKTtcbiAgICBBdWRpb1BsYXllci5pbnMoKS5wbGF5X3NvdW5kKCdsZXZlbHVwJyk7XG5cbiAgICBsZXQgdGltZUJveCA9IHRhcmdldC5nZXRDaGlsZEJ5TmFtZSgndGltZUJveCcpO1xuICAgIHRpbWVCb3guYWN0aXZlID0gdHJ1ZTtcbiAgICBsZXQgdGltZUJveFNwcml0ZSA9IHRpbWVCb3guZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgY2MudHdlZW4odGltZUJveFNwcml0ZSlcbiAgICAgIC50byhpdGVtLnRpbWUsIHtcbiAgICAgICAgZmlsbFJhbmdlOiAwXG4gICAgICB9KVxuICAgICAgLnN0YXJ0KCk7XG5cbiAgICBsZXQgdGltZSA9IGl0ZW0udGltZTtcbiAgICBsZXQgY2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aW1lLS07XG4gICAgICB0aGlzLmJnVGl0bGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICBpZiAodGltZSA8PSAwKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZShjYWxsYmFjayk7XG4gICAgICAgIHRpbWVCb3hTcHJpdGUuZmlsbFJhbmdlID0gMTtcbiAgICAgICAgdGltZUJveC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gMSkge1xuICAgICAgICAgIHRoaXMubm9kZV9mcmVlemUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGl0ZW0udHlwZSA9PT0gMiB8fCBpdGVtLnR5cGUgPT09IDMgfHwgaXRlbS50eXBlID09PSA0KSB7XG4gICAgICAgICAgdGhpcy5jYW5ub25faGVhZC5zY2FsZSA9IDE7XG4gICAgICAgICAgR2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXIgLT0gdGhpcy5tdWx0aXBsZUJhbGxDb3VudDtcbiAgICAgICAgICB0aGlzLm11bHRpcGxlQmFsbENvdW50ID0gMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGZGdWNBY3RpdmVTZXQuZGVsZXRlKGl0ZW0udHlwZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNjaGVkdWxlKGNhbGxiYWNrLCAxKTtcbiAgfVxuXG4gIHByaXZhdGUgb25HYW1lU3RhdHVzVG9vZ2xlKHN0YXR1cykge1xuICAgIGlmICghdGhpcy5vdmVyT2JqLmFjdGl2ZSkge1xuICAgICAgQXVkaW9QbGF5ZXIuaW5zKCkucGxheV9zb3VuZCgnYnRuJyk7XG4gICAgICBpZiAoc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuc3RvcEJ1dHRvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLnN0YXJ0QnV0dG9uLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLl9pc0dhbWVPdmVyID0gZmFsc2U7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IHRydWU7XG4gICAgICAgIEF1ZGlvUGxheWVyLmlucygpLnBsYXlfbXVzaWMoJ2JnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0b3BCdXR0b24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5faXNHYW1lT3ZlciA9IHRydWU7XG4gICAgICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgICAgICBBdWRpb1BsYXllci5pbnMoKS5zdG9wX211c2ljKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBvblRvdWNoTW92ZShwYXJhbTogY2MuRXZlbnQuRXZlbnRUb3VjaCkge1xuICAgIGNvbnN0IGRlbHRhWCA9IHBhcmFtLmdldERlbHRhWCgpO1xuICAgIGNvbnN0IGRlbHRhWSA9IHBhcmFtLmdldERlbHRhWSgpO1xuICAgIGNvbnN0IGRlbHRhUiA9IE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpICogMC4zO1xuICAgIGNvbnN0IHNpZ24gPSBNYXRoLnNpZ24oZGVsdGFYKTtcbiAgICBsZXQgYW5nbGUgPSAtdGhpcy5jYW5ub25faGVhZC5hbmdsZSArIGRlbHRhUiAqIHNpZ247XG4gICAgYW5nbGUgPSBNYXRoLmFicyhhbmdsZSkgPj0gODUgPyBNYXRoLnNpZ24oYW5nbGUpICogODUgOiBhbmdsZTtcbiAgICB0aGlzLmNhbm5vbl9oZWFkLmFuZ2xlID0gLWFuZ2xlO1xuICB9XG5cbiAgcHJpdmF0ZSBnYW1lU3RhcnQoKSB7XG4gICAgRXZlbnREaXNwYXRjaC5pbnMoKS5hZGQoRXZlbnRfTmFtZS5HQU1FX0NSRUFURV9CQUxMLCB0aGlzLmNyZWF0ZUJhbGwsIHRoaXMpO1xuICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuYWRkKEV2ZW50X05hbWUuR0FNRV9SRUxJVkUsIHRoaXMuZ2FtZVJlbGl2ZSwgdGhpcyk7XG4gICAgRXZlbnREaXNwYXRjaC5pbnMoKS5hZGQoRXZlbnRfTmFtZS5HQU1FX09OX1RPVUNIX01PVkUsIHRoaXMub25Ub3VjaE1vdmUsIHRoaXMpO1xuICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuYWRkKEV2ZW50X05hbWUuR0FNRV9QT1dFUl9UWVBFX0NIQU5HRUQsIHRoaXMudXBkYXRlR2FtZVBvd2VyVHlwZSwgdGhpcyk7XG4gICAgRXZlbnREaXNwYXRjaC5pbnMoKS5hZGQoRXZlbnRfTmFtZS5HQU1FX1NDT1JFX0NIQU5HRUQsIHRoaXMudXBkYXRlU2NvcmUsIHRoaXMsIHRydWUpO1xuICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuYWRkKEV2ZW50X05hbWUuR0FNRV9CQUxMX1BPV0VSX0NIQU5HRUQsIHRoaXMudXBkYXRlQmFsbFBvd2VyLCB0aGlzLCB0cnVlKTtcbiAgICBFdmVudERpc3BhdGNoLmlucygpLmFkZChFdmVudF9OYW1lLkdBTUVfUExBWV9CUklDS19SRU1PVkVfRUZGRUNULCB0aGlzLnBsYXlCcmlja0RlbGV0ZUVmZmVjdCwgdGhpcyk7XG4gICAgRXZlbnREaXNwYXRjaC5pbnMoKS5hZGQoRXZlbnRfTmFtZS5HQU1FX1NUQVJfR0VUX0VGRkVDVCwgdGhpcy51cGRhdGVTdGFyTnVtR2V0RWZmZWN0LCB0aGlzKTtcbiAgICBBdWRpb1BsYXllci5pbnMoKS5wbGF5X211c2ljKCdiZycpO1xuXG4gICAgdGhpcy5yZXNldEdhbWUoKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVzZXRHYW1lKCkge1xuICAgIHRoaXMubm9kZV9waHlzaWNzLmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5jYW5ub25faGVhZC5hbmdsZSA9IDA7XG4gICAgY2MuZGlyZWN0b3IuZ2V0UGh5c2ljc01hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLl91cGRhdGVEdCA9IDA7XG4gICAgdGhpcy5fbW92ZWRfbGVuZ3RoID0gMDtcbiAgICB0aGlzLl9tb3ZlZF9sZXZlbCA9IDA7XG4gICAgdGhpcy5faXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMudXBkYXRlR2FtZVBvd2VyVHlwZSgwKTtcbiAgICBHYW1lTW9kZWwuaW5zKCkucmVzZXQoKTtcbiAgICBjb25zdCBiYWxsX2luaXRfY291bnQgPSBHYW1lTW9kZWwuaW5zKCkuYmFsbF9pbml0X2NvdW50O1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBiYWxsX2luaXRfY291bnQ7IGluZGV4KyspIHtcbiAgICAgIHRoaXMuY3JlYXRlQmFsbCgpO1xuICAgIH1cbiAgICBjb25zdCBicmlja19yYWRpdXMgPSBHYW1lQ29uc3QuaW5zKCkuYnJpY2tfcmFkaXVzO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICBsZXQgcmlnaHROdW1iZXIgPSBNYXRoLnJvdW5kKHRoaXMuYnJpY2tfbWF4X2NvdW50IC8gMik7XG4gICAgICBsZXQgbGVmdE51bWJlciA9IC0xICogTWF0aC5mbG9vcih0aGlzLmJyaWNrX21heF9jb3VudCAvIDIpO1xuICAgICAgZm9yIChsZXQgaiA9IGxlZnROdW1iZXI7IGogPCByaWdodE51bWJlcjsgaisrKSB7XG4gICAgICAgIGxldCBocCA9IChpICsgMSkgKiBHYW1lTW9kZWwuaW5zKCkuYmFsbF9wb3dlciArIChiYWxsX2luaXRfY291bnQgLSA0KTtcbiAgICAgICAgaHAgPSBocCA8IDAgPyAxIDogaHA7XG4gICAgICAgIHRoaXMuY3JlYXRlQnJpY2soaiAqIGJyaWNrX3JhZGl1cyAqIDIgKyBHYW1lQ29uc3QuaW5zKCkuYnJpY2tfaW5pdF94LCBpICogYnJpY2tfcmFkaXVzICogMiArIEdhbWVDb25zdC5pbnMoKS5icmlja19pbml0X3ksIGhwKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmxiX2JhbGxfcG93ZXIuc3RyaW5nID0gYCR7R2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXJ9YDtcbiAgfVxuXG4gIHVwZGF0ZShkdCkge1xuICAgIFRpbWVyTWdyLmdldEluc3QoKS51cGRhdGUoZHQpO1xuXG4gICAgaWYgKHRoaXMuX2lzR2FtZU92ZXIpIHJldHVybjtcblxuICAgIGlmICh0aGlzLm5vZGVfZnJlZXplLmFjdGl2ZSkge1xuICAgICAgdGhpcy5fYnJpY2tfc3BlZWQgPSAwO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9wb3dlcl90eXBlID4gMCkge1xuICAgICAgdGhpcy5ub2RlX3Bvd2VyX3Byb2dyZXNzLndpZHRoIC09IDEuNTtcbiAgICAgIGlmICh0aGlzLm5vZGVfcG93ZXJfcHJvZ3Jlc3MuYWN0aXZlICYmIHRoaXMubm9kZV9wb3dlcl9wcm9ncmVzcy53aWR0aCA8PSAwKSB7XG4gICAgICAgIHRoaXMudXBkYXRlR2FtZVBvd2VyVHlwZSgwKTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAodGhpcy5fcG93ZXJfdHlwZSkge1xuICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICB0aGlzLl9icmlja19zcGVlZCA9IDA7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl91cGRhdGVEdCsrO1xuICAgIHRoaXMuX21vdmVkX2xlbmd0aCArPSB0aGlzLl9icmlja19zcGVlZDtcblxuICAgIGlmICh0aGlzLl91cGRhdGVEdCAlIEdhbWVNb2RlbC5pbnMoKS5maXJlQmFsbER0ID09PSAwIHx8IHRoaXMuX3Bvd2VyX3R5cGUgPT09IDIpIHtcbiAgICAgIHRoaXMuYmFsbHNfaW5fZ2FtZS5zb21lKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmJhbGxfc3RhdHVzID09PSBFbnVtQmFsbFN0YXR1cy5vblJlYWR5ICYmIChpdGVtLmJhbGxfdHlwZSA9PT0gMCB8fCB0aGlzLl9wb3dlcl90eXBlID09PSAyKSkge1xuICAgICAgICAgIGl0ZW0ucG93ZXJfc2NhbGUgPSB0aGlzLl9wb3dlcl90eXBlID09PSAxID8gMiA6IDE7XG4gICAgICAgICAgaXRlbS5maXJlQmFsbCgtdGhpcy5jYW5ub25faGVhZC5hbmdsZSk7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29uc3QgYnJpY2tfcmFkaXVzID0gR2FtZUNvbnN0LmlucygpLmJyaWNrX3JhZGl1cztcbiAgICBjb25zdCBiYWxsX3Bvd2VyID0gR2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXIgLSB0aGlzLm11bHRpcGxlQmFsbENvdW50O1xuICAgIGNvbnN0IG5ld19sZXZlbCA9IE1hdGguZmxvb3IodGhpcy5fbW92ZWRfbGVuZ3RoIC8gNCAvIGJyaWNrX3JhZGl1cyk7XG4gICAgaWYgKG5ld19sZXZlbCA+IHRoaXMuX21vdmVkX2xldmVsKSB7XG4gICAgICB0aGlzLl9tb3ZlZF9sZXZlbCsrO1xuICAgICAgbGV0IGJhbGxzX2luX2dhbWVfbGVuZ3RoID0gdGhpcy5iYWxsc19pbl9nYW1lLmxlbmd0aCAvICh0aGlzLl9wb3dlcl90eXBlID09PSAyID8gMiA6IDEpO1xuICAgICAgY29uc3QgbWF4SHAgPSBNYXRoLmNlaWwoYmFsbHNfaW5fZ2FtZV9sZW5ndGggKiBiYWxsX3Bvd2VyICogMC41ICsgdGhpcy5fbW92ZWRfbGV2ZWwgKiBiYWxsX3Bvd2VyICogMS4yKTtcbiAgICAgIGNvbnN0IGJyaWNrX3R5cGVfcGVyY2VudCA9IEdhbWVDb25zdC5pbnMoKS5icmlja190eXBlX3BlcmNlbnQ7XG4gICAgICBsZXQgYmlnX2ogPSAtOTk5O1xuICAgICAgbGV0IGl0ZW1faSA9IC05OTksXG4gICAgICAgIGl0ZW1faiA9IC05OTk7XG4gICAgICBpZiAodGhpcy5fbW92ZWRfbGV2ZWwgJSAxMiA9PT0gMCkge1xuICAgICAgICBiaWdfaiA9IFJhbmRvbVV0aWwuaW5zKCkucmFuZG9tTnVtKC0yLCAzKTtcbiAgICAgICAgdGhpcy5jcmVhdGVCcmljayhcbiAgICAgICAgICAtYnJpY2tfcmFkaXVzICsgYmlnX2ogKiBicmlja19yYWRpdXMgKiAyICsgR2FtZUNvbnN0LmlucygpLmJyaWNrX2luaXRfeCxcbiAgICAgICAgICBicmlja19yYWRpdXMgKyBHYW1lQ29uc3QuaW5zKCkuYnJpY2tfaW5pdF95LFxuICAgICAgICAgIFJhbmRvbVV0aWwuaW5zKCkucmFuZG9tTnVtKG1heEhwICogMywgbWF4SHAgKiA2KSxcbiAgICAgICAgICBSYW5kb21VdGlsLmlucygpLnJhbmRvbU51bSgxNCwgMTYpLFxuICAgICAgICAgIDEwXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5fbW92ZWRfbGV2ZWwgJSAxMSA9PT0gMCkge1xuICAgICAgICBpdGVtX2kgPSBSYW5kb21VdGlsLmlucygpLnJhbmRvbU51bSgwLCAxKTtcbiAgICAgICAgaXRlbV9qID0gUmFuZG9tVXRpbC5pbnMoKS5yYW5kb21OdW0oLTMsIDMpO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAyOyBpKyspIHtcbiAgICAgICAgZm9yIChsZXQgaiA9IC0zOyBqIDwgNDsgaisrKSB7XG4gICAgICAgICAgaWYgKGogPT09IGJpZ19qIHx8IGogPT09IGJpZ19qIC0gMSkge1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgaHAgPVxuICAgICAgICAgICAgICBpID09PSBpdGVtX2kgJiYgaiA9PT0gaXRlbV9qXG4gICAgICAgICAgICAgICAgPyBSYW5kb21VdGlsLmlucygpLnJhbmRvbU51bShiYWxsX3Bvd2VyLCBNYXRoLmNlaWwobWF4SHAgLyAyKSlcbiAgICAgICAgICAgICAgICA6IFJhbmRvbVV0aWwuaW5zKCkucmFuZG9tTnVtKC1NYXRoLnJvdW5kKG1heEhwIC8gKCh0aGlzLl9tb3ZlZF9sZXZlbCAlIDUpICsgMSkpLCBtYXhIcCk7XG4gICAgICAgICAgICBsZXQgYnJpY2tfdHlwZSA9XG4gICAgICAgICAgICAgIGkgPT09IGl0ZW1faSAmJiBqID09PSBpdGVtX2pcbiAgICAgICAgICAgICAgICA/IFJhbmRvbVV0aWwuaW5zKCkucmFuZG9tTnVtKDExLCAxMylcbiAgICAgICAgICAgICAgICA6IGJyaWNrX3R5cGVfcGVyY2VudFtSYW5kb21VdGlsLmlucygpLnJhbmRvbU51bSgwLCBicmlja190eXBlX3BlcmNlbnQubGVuZ3RoIC0gMSldO1xuICAgICAgICAgICAgaWYgKGhwID49IGJhbGxfcG93ZXIpIHtcbiAgICAgICAgICAgICAgdGhpcy5jcmVhdGVCcmljayhcbiAgICAgICAgICAgICAgICBqICogYnJpY2tfcmFkaXVzICogMiArIEdhbWVDb25zdC5pbnMoKS5icmlja19pbml0X3gsXG4gICAgICAgICAgICAgICAgaSAqIGJyaWNrX3JhZGl1cyAqIDIgKyBHYW1lQ29uc3QuaW5zKCkuYnJpY2tfaW5pdF95LFxuICAgICAgICAgICAgICAgIGhwLFxuICAgICAgICAgICAgICAgIGJyaWNrX3R5cGUsXG4gICAgICAgICAgICAgICAgTWF0aC5jZWlsKChocCAqIDEwKSAvIG1heEhwKVxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGxldCBicmlja19taW5feSA9IDk5OTk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwLCBsZW4gPSB0aGlzLmJyaWNrc19pbl9nYW1lLmxlbmd0aDsgaW5kZXggPCBsZW47IGluZGV4KyspIHtcbiAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmJyaWNrc19pbl9nYW1lW2luZGV4XTtcbiAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQubm9kZSkge1xuICAgICAgICBjb25zdCBicmljayA9IGVsZW1lbnQubm9kZTtcbiAgICAgICAgaWYgKGVsZW1lbnQuaHAgPD0gMCB8fCAhYnJpY2suYWN0aXZlKSB7XG4gICAgICAgICAgaWYgKHRoaXMuX3VwZGF0ZUR0ICUgNjAgPT09IDApIHtcbiAgICAgICAgICAgIGVsZW1lbnQucmVzZXQoKTtcbiAgICAgICAgICAgIHRoaXMuYnJpY2tzX2luX2dhbWUuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHRoaXMuYnJpY2tzX3Bvb2xbZWxlbWVudC5icmlja190eXBlXS5wdXNoKGJyaWNrKTtcbiAgICAgICAgICAgIGluZGV4LS07XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGJyaWNrLnkgLT0gdGhpcy5fYnJpY2tfc3BlZWQ7XG4gICAgICAgICAgaWYgKGJyaWNrLnkgLSBlbGVtZW50LmJyaWNrX3JhZGl1c19tdWwgKiBicmlja19yYWRpdXMgPD0gdGhpcy5vdmVyTGluZS55KSB7XG4gICAgICAgICAgICB0aGlzLmdhbWVPdmVyKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChicmljay55IDwgYnJpY2tfbWluX3kpIHtcbiAgICAgICAgICAgIGJyaWNrX21pbl95ID0gYnJpY2sueTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5fYnJpY2tfc3BlZWQgPVxuICAgICAgYnJpY2tfbWluX3kgPiBHYW1lQ29uc3QuaW5zKCkuYmFsbF9pbml0X3kgKyBicmlja19yYWRpdXMgKiA3ID8gMSA6IGJyaWNrX21pbl95ID4gR2FtZUNvbnN0LmlucygpLmJhbGxfaW5pdF95ICsgYnJpY2tfcmFkaXVzICogNSA/IDAuOSA6IDAuNjtcbiAgfVxuXG4gIHByaXZhdGUgY3JlYXRlQmFsbCh4ID0gR2FtZUNvbnN0LmlucygpLmJhbGxfaW5pdF94LCB5ID0gR2FtZUNvbnN0LmlucygpLmJhbGxfaW5pdF95LCBzdGF0dXMgPSBFbnVtQmFsbFN0YXR1cy5vblJlYWR5LCBiYWxsX3R5cGUgPSAwKSB7XG4gICAgbGV0IGJhbGwgPSB0aGlzLmJhbGxzX3Bvb2xbYmFsbF90eXBlXS5zaGlmdCgpO1xuICAgIGlmICghYmFsbCkge1xuICAgICAgYmFsbCA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYmFsbHNfaW5zW2JhbGxfdHlwZV0pO1xuICAgICAgdGhpcy5ub2RlX3BoeXNpY3MuYWRkQ2hpbGQoYmFsbCk7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW0gPSBiYWxsLmdldENvbXBvbmVudChCYWxsSXRlbSk7XG4gICAgaXRlbS5pbml0KHgsIHksIHN0YXR1cyk7XG4gICAgYmFsbC5hY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYmFsbHNfaW5fZ2FtZS51bnNoaWZ0KGl0ZW0pO1xuICAgIHRoaXMubGJfYmFsbF9jb3VudC5zdHJpbmcgPSBgJHt0aGlzLmJhbGxzX2luX2dhbWUubGVuZ3RoIC8gMn1gO1xuICAgIGlmIChiYWxsX3R5cGUgPT09IDApIHtcbiAgICAgIHRoaXMuY3JlYXRlQmFsbChHYW1lQ29uc3QuaW5zKCkuYmFsbF9pbml0X3gsIEdhbWVDb25zdC5pbnMoKS5iYWxsX2luaXRfeSwgRW51bUJhbGxTdGF0dXMub25SZWFkeSwgMSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVCcmljayh4ID0gR2FtZUNvbnN0LmlucygpLmJyaWNrX2luaXRfeCwgeSA9IEdhbWVDb25zdC5pbnMoKS5icmlja19pbml0X3ksIGhwID0gMSwgYnJpY2tfdHlwZSA9IDAsIGNvbG9yc19udW0gPSAxKSB7XG4gICAgaWYgKGJyaWNrX3R5cGUgPT09IHRoaXMuYnJpY2tfbWF4X2NvdW50ICYmIHRoaXMuYmFsbHNfaW5fZ2FtZS5sZW5ndGggPiAyMDApIHtcbiAgICAgIGJyaWNrX3R5cGUgPSAwO1xuICAgIH1cbiAgICBsZXQgYnJpY2sgPSB0aGlzLmJyaWNrc19wb29sW2JyaWNrX3R5cGVdLnNoaWZ0KCk7XG4gICAgaWYgKCFicmljaykge1xuICAgICAgYnJpY2sgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJyaWNrc19pbnNbYnJpY2tfdHlwZV0pO1xuICAgICAgdGhpcy5ub2RlX3BoeXNpY3MuYWRkQ2hpbGQoYnJpY2spO1xuICAgIH1cbiAgICBjb25zdCBpdGVtID0gYnJpY2suZ2V0Q29tcG9uZW50KEJyaWNrSXRlbSk7XG4gICAgYnJpY2suYWN0aXZlID0gdHJ1ZTtcbiAgICBicmljay54ID0geDtcbiAgICBicmljay55ID0geTtcbiAgICBpdGVtLmluaXQoY29sb3JzX251bSwgaHApO1xuICAgIHRoaXMuYnJpY2tzX2luX2dhbWUucHVzaChpdGVtKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU2NvcmUob2xkPzogbnVtYmVyLCBuZXdWYWx1ZT86IG51bWJlcikge1xuICAgIHRoaXMubGJfc2NvcmUuc3RyaW5nID0gZm9ybWF0UHJpY2UoR2FtZU1vZGVsLmlucygpLnNjb3JlLCAwLCBmYWxzZSwgJyAnKTtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlQmFsbFBvd2VyKG9sZD86IG51bWJlciwgbmV3VmFsdWU/OiBudW1iZXIpIHtcbiAgICB0aGlzLmxiX2JhbGxfcG93ZXIuc3RyaW5nID0gYCR7R2FtZU1vZGVsLmlucygpLmJhbGxfcG93ZXJ9YDtcbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlU3Rhck51bUdldEVmZmVjdCh4OiBudW1iZXIsIHk6IG51bWJlciwgY291bnQ6IG51bWJlcikge1xuICAgIGNvbnN0IHRhcmdldFBvcyA9IHRoaXMubm9kZV90b3AuY29udmVydFRvTm9kZVNwYWNlQVIodGhpcy5ub2RlX3N0YXJfaW1nLmNvbnZlcnRUb1dvcmxkU3BhY2VBUihjYy52MigwLCAwKSkpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjb3VudDsgaW5kZXgrKykge1xuICAgICAgbGV0IHN0YXJfaXRlbSA9IHRoaXMuX3N0YXJfcG9vbC5zaGlmdCgpO1xuICAgICAgaWYgKCFzdGFyX2l0ZW0pIHtcbiAgICAgICAgc3Rhcl9pdGVtID0gY2MuaW5zdGFudGlhdGUodGhpcy5zdGFyX2lucyk7XG4gICAgICAgIHRoaXMubm9kZV90b3AuYWRkQ2hpbGQoc3Rhcl9pdGVtKTtcbiAgICAgIH1cbiAgICAgIHN0YXJfaXRlbS54ID0geDtcbiAgICAgIHN0YXJfaXRlbS55ID0geTtcbiAgICAgIHN0YXJfaXRlbS5hbmdsZSA9IDA7XG4gICAgICBzdGFyX2l0ZW0uYWN0aXZlID0gdHJ1ZTtcbiAgICAgIFR3ZWVuLmdldChzdGFyX2l0ZW0pXG4gICAgICAgIC50byh7IGFuZ2xlOiA3MjAsIHg6IHRhcmdldFBvcy54LCB5OiB0YXJnZXRQb3MueSB9LCA4MDAgKyAxMDAgKiBpbmRleCwgRWFzZS5nZXRCYWNrSW5PdXQoMS4yKSlcbiAgICAgICAgLmNhbGwoKCkgPT4ge1xuICAgICAgICAgIHN0YXJfaXRlbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICB0aGlzLl9zdGFyX3Bvb2wucHVzaChzdGFyX2l0ZW0pO1xuICAgICAgICAgIFR3ZWVuLmdldCh0aGlzLm5vZGVfc3Rhcl9pbWcpXG4gICAgICAgICAgICAudG8oeyBzY2FsZTogMS4yIH0sIDMwMClcbiAgICAgICAgICAgIC50byh7IHNjYWxlOiAxIH0sIDMwMCwgRWFzZS5iYWNrSW5PdXQpXG4gICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgIEdhbWVNb2RlbC5pbnMoKS5iYWxsX3Bvd2VyICs9IDE7XG4gICAgICAgICAgICAgIHRoaXMubGJfYmFsbF9wb3dlci5zdHJpbmcgPSBgJHtHYW1lTW9kZWwuaW5zKCkuYmFsbF9wb3dlcn1gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2JyaWNrX2ltZ19wb29sOiBjYy5Ob2RlW10gPSBbXTtcbiAgcHJpdmF0ZSBwbGF5QnJpY2tEZWxldGVFZmZlY3QoeDogbnVtYmVyLCB5OiBudW1iZXIsIGNvbG9yOiBjYy5Db2xvcikge1xuICAgIGNvbnN0IHRoZW1lX2NmZyA9IEdhbWVDb25zdC5pbnMoKS50aGVtZV9jb25maWdbMF07XG4gICAgaWYgKHRoZW1lX2NmZykge1xuICAgICAgbG9hZGVyX21nci5nZXRfaW5zdCgpLmxvYWRBc3NldChcbiAgICAgICAgJ3RleHR1cmUvcGxpc3QvY3VzdG9taXplJyxcbiAgICAgICAgZ2VuX2hhbmRsZXIoKHJlczogY2MuU3ByaXRlQXRsYXMpID0+IHtcbiAgICAgICAgICBjb25zdCBzcHJpdGVGcmFtZSA9IHJlcy5nZXRTcHJpdGVGcmFtZSh0aGVtZV9jZmcudGhlbWUpO1xuICAgICAgICAgIGlmIChzcHJpdGVGcmFtZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IDk7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgY29uc3QgaSA9IChpbmRleCAlIDMpIC0gMS41O1xuICAgICAgICAgICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihpbmRleCAvIDMpIC0gMS41O1xuICAgICAgICAgICAgICBjb25zdCB0YXJnZXRQb3NYID0geCArIGkgKiAoMTAwICsgMTUwICogTWF0aC5yYW5kb20oKSk7XG4gICAgICAgICAgICAgIGNvbnN0IHRhcmdldFBvc1kgPSB5ICsgaiAqICgxMDAgKyAxNTAgKiBNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgICAgbGV0IGltZyA9IHRoaXMuX2JyaWNrX2ltZ19wb29sLnNoaWZ0KCk7XG4gICAgICAgICAgICAgIGlmICghaW1nKSB7XG4gICAgICAgICAgICAgICAgaW1nID0gbmV3IGNjLk5vZGUoKTtcbiAgICAgICAgICAgICAgICBpbWcuYWRkQ29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlX3BoeXNpY3MuYWRkQ2hpbGQoaW1nKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpbWcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgaW1nLmFuZ2xlID0gMDtcbiAgICAgICAgICAgICAgaW1nLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gc3ByaXRlRnJhbWU7XG4gICAgICAgICAgICAgIGltZy5jb2xvciA9IGNvbG9yO1xuICAgICAgICAgICAgICBjb25zdCBzaXplID0gTWF0aC5yYW5kb20oKSAqIDUwICsgNTA7XG4gICAgICAgICAgICAgIGltZy53aWR0aCA9IGltZy5oZWlnaHQgPSBzaXplO1xuICAgICAgICAgICAgICBpbWcueCA9IHg7XG4gICAgICAgICAgICAgIGltZy55ID0geTtcbiAgICAgICAgICAgICAgVHdlZW4uZ2V0KGltZylcbiAgICAgICAgICAgICAgICAudG8oeyB4OiB0YXJnZXRQb3NYLCB5OiB0YXJnZXRQb3NZLCB3aWR0aDogc2l6ZSAvIDMsIGhlaWdodDogc2l6ZSAvIDMsIGFuZ2xlOiAxMDAwICogTWF0aC5yYW5kb20oKSB9LCBNYXRoLnJhbmRvbSgpICogNTAwICsgNTAwKVxuICAgICAgICAgICAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGltZy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgIHRoaXMuX2JyaWNrX2ltZ19wb29sLnB1c2goaW1nKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgIGNjLlNwcml0ZUF0bGFzXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgdXBkYXRlR2FtZVBvd2VyVHlwZShwb3dlciA9IDApIHtcbiAgICBpZiAocG93ZXIgPiAwKSB7XG4gICAgICBpZiAodGhpcy5fcG93ZXJfdHlwZSA9PT0gMCkge1xuICAgICAgICB0aGlzLm5vZGVfcG93ZXJfcHJvZ3Jlc3MuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5ub2RlX3Bvd2VyX3Byb2dyZXNzLndpZHRoID0gNzUwO1xuICAgICAgICB0aGlzLl9wb3dlcl90eXBlID0gcG93ZXI7XG4gICAgICAgIGxldCBiZ1RpdGxlTGFiZWwgPSB0aGlzLmJnVGl0bGUuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgc3dpdGNoIChwb3dlcikge1xuICAgICAgICAgIGNhc2UgMjoge1xuICAgICAgICAgICAgdGhpcy5jYW5ub25faGVhZC5zY2FsZSA9IDEuNDtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgICBjYXNlIDM6IHtcbiAgICAgICAgICAgIHRoaXMubm9kZV9mcmVlemUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxiX2JhbGxfY291bnQubm9kZS5jb2xvciA9IHRoaXMubm9kZV9wb3dlcl9wcm9ncmVzcy5jb2xvciA9XG4gICAgICAgICAgW2NjLkNvbG9yLldISVRFLCBjYy5Db2xvci5SRUQsIGNjLkNvbG9yLllFTExPVywgY2MuQ29sb3IuR1JBWV1bcG93ZXJdIHx8IGNjLkNvbG9yLldISVRFO1xuICAgICAgICBBdWRpb1BsYXllci5pbnMoKS5wbGF5X3NvdW5kKCdsZXZlbHVwJyk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMubm9kZV9wb3dlcl9wcm9ncmVzcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgIHRoaXMubm9kZV9wb3dlcl9wcm9ncmVzcy53aWR0aCA9IDc1MDtcbiAgICAgIHRoaXMubGJfYmFsbF9jb3VudC5ub2RlLmNvbG9yID0gY2MuY29sb3IoMjMwLCAxNTAsIDI2KTtcbiAgICAgIGlmICghdGhpcy5zZWxmRnVjQWN0aXZlU2V0LmhhcygxKSkge1xuICAgICAgICB0aGlzLm5vZGVfZnJlZXplLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLnNlbGZGdWNBY3RpdmVTZXQuaGFzKDIpICYmICF0aGlzLnNlbGZGdWNBY3RpdmVTZXQuaGFzKDMpICYmICF0aGlzLnNlbGZGdWNBY3RpdmVTZXQuaGFzKDQpKSB7XG4gICAgICAgIHRoaXMuY2Fubm9uX2hlYWQuc2NhbGUgPSAxO1xuICAgICAgfVxuICAgICAgdGhpcy5fcG93ZXJfdHlwZSA9IHBvd2VyO1xuICAgIH1cbiAgfVxuXG4gIGdhbWVSZWxpdmUoKSB7XG4gICAgdGhpcy5icmlja3NfaW5fZ2FtZS5mb3JFYWNoKCh2YWx1ZSkgPT4ge1xuICAgICAgdmFsdWUucmVzZXQoKTtcbiAgICAgIHRoaXMuYnJpY2tzX3Bvb2xbdmFsdWUuYnJpY2tfdHlwZV0ucHVzaCh2YWx1ZS5ub2RlKTtcbiAgICB9KTtcbiAgICB0aGlzLmJyaWNrc19pbl9nYW1lID0gW107XG4gICAgdGhpcy5vdmVyT2JqLmFjdGl2ZSA9IGZhbHNlO1xuICAgIHRoaXMuX2lzR2FtZU92ZXIgPSBmYWxzZTtcbiAgICBjYy5kaXJlY3Rvci5nZXRQaHlzaWNzTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgIEF1ZGlvUGxheWVyLmlucygpLnBsYXlfbXVzaWMoJ2JnJyk7XG4gIH1cblxuICBwcml2YXRlIGdhbWVPdmVyKCkge1xuICAgIHRoaXMuX2lzR2FtZU92ZXIgPSB0cnVlO1xuICAgIGNjLmRpcmVjdG9yLmdldFBoeXNpY3NNYW5hZ2VyKCkuZW5hYmxlZCA9IGZhbHNlO1xuICAgIHRoaXMub3Zlck9iai5hY3RpdmUgPSB0cnVlO1xuICAgIEV2ZW50RGlzcGF0Y2guaW5zKCkuYWRkKEV2ZW50X05hbWUuR0FNRV9SRUxJVkUsIHRoaXMuZ2FtZVJlbGl2ZSwgdGhpcyk7XG4gICAgQXVkaW9QbGF5ZXIuaW5zKCkuc3RvcF9tdXNpYygpO1xuICB9XG59XG4iXX0=