"use strict";
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