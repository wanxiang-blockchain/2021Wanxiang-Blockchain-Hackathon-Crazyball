import BallItem, { EnumBallStatus } from './item/BallItem';
import GameConst from './GameConst';
import GameModel from './model/GameModel';
import BrickItem from './item/BrickItem';
import { RandomUtil } from '../common/random/RandomUtil';
import { EventDispatch, Event_Name } from '../common/event/EventDispatch';
import { AudioPlayer } from '../common/audio/AudioPlayer';
import { gen_handler } from '../common/util';
import { loader_mgr } from '../common/loader/loader_mgr';
import { Tween, Ease } from '../common/tween/Tween';
import { TimerMgr } from '../common/timer/timer_mgr';
import { formatPrice } from './common/Common';
import State from './model/State';

const { ccclass, property } = cc._decorator;
@ccclass
export default class GameView extends cc.Component {
  @property(cc.Node)
  bg: cc.Node = null;
  @property(cc.Node)
  bgTitle: cc.Node = null;
  @property(cc.Node)
  node_top: cc.Node = null;
  @property(cc.Node)
  stopButton: cc.Node = null;
  @property(cc.Node)
  startButton: cc.Node = null;
  @property(cc.Node)
  node_physics: cc.Node = null;
  @property(cc.Label)
  lb_ball_count: cc.Label = null;
  @property(cc.Label)
  lb_ball_power: cc.Label = null;
  @property(cc.Node)
  node_freeze: cc.Node = null;
  @property(cc.Node)
  bottomBarBox: cc.Node = null;
  @property(cc.Prefab)
  fucPrefab: cc.Prefab = null;
  @property(cc.Prefab)
  basePrefab: cc.Prefab = null;

  @property(cc.Label)
  lb_score: cc.Label = null;
  @property(cc.Node)
  node_power_progress: cc.Node = null;

  @property([cc.Prefab])
  balls_ins: cc.Prefab[] = [];
  @property([cc.Prefab])
  bricks_ins: cc.Prefab[] = [];

  @property(cc.Node)
  node_star_img: cc.Node = null;

  @property(cc.Prefab)
  star_ins: cc.Prefab = null;

  @property(cc.Node)
  overLine: cc.Node = null;

  @property(cc.Node)
  overObj: cc.Node = null;
  @property(cc.Node)
  clearLine: cc.Node = null;
  @property(cc.Node)
  clearAll: cc.Node = null;

  cannon_head: cc.Node = null;
  multipleBallCount = 0;

  private brick_max_count = 7;

  private _star_pool: cc.Node[] = [];

  private balls_pool: cc.Node[][] = [];
  private bricks_pool: cc.Node[][] = [];

  private balls_in_game: BallItem[] = [];
  private bricks_in_game: BrickItem[] = [];

  private _updateDt: number = 0;
  private _brick_speed: number = 1;
  private _moved_length = 0;
  private _moved_level = 0;
  // 1 big
  // 2 speed
  // 3 freeze
  private _power_type = 0;
  _isGameOver = false;

  selfFucActiveSet = new Set();

  onEnable() {
    State.ins().mainNear.contract.play_game({
      account_id: State.ins().mainNear.ownerKey
    });
    State.ins().isPay = false;
  }

  onLoad() {
    this.stopButton.on('touchstart', () => this.onGameStatusToogle(false), this);
    this.startButton.on('touchstart', () => this.onGameStatusToogle(true), this);

    this.initFuc();

    let random = Math.round(1000000 + Math.random() * 8999999).toString();
    RandomUtil.ins().init(random);

    this.bg.on('touchmove', this.onTouchMove, this);
    cc.director.getPhysicsManager().enabled = true;
    cc.director.getPhysicsManager().enabledAccumulator = true;

    for (let i = 0, len = this.balls_ins.length; i < len; ) {
      this.balls_pool[i++] = [];
    }

    for (let i = 0, len = this.bricks_ins.length; i < len; ) {
      this.bricks_pool[i++] = [];
    }

    this.gameStart();
  }

  private initFuc() {
    if (this.bottomBarBox.children.length > 0) {
      this.bottomBarBox.removeAllChildren();
    }
    new Array(5).fill(1).forEach((item, index) => {
      let target: cc.Node = null;
      if (index === 2) {
        target = cc.instantiate(this.basePrefab);
        this.cannon_head = target.getChildByName('baseBox');
      } else {
        target = cc.instantiate(this.fucPrefab);
        let fucIndex = index > 1 ? index - 1 : index;
        State.ins().imageList.map((item, index) => {
          if (item.sort === fucIndex && item.payCount > 0) {
            let targetSprite = target.getComponent(cc.Sprite);
            cc.resources.load(item.url, cc.SpriteFrame, (err, spriteFrame: cc.SpriteFrame) => {
              targetSprite.spriteFrame = spriteFrame;
            });
            let countBox = target.getChildByName('countBox');
            countBox.active = true;
            let title = countBox.getChildByName('title').getComponent(cc.Label);
            title.string = item.title;
            let countNode = target.getChildByName('count');
            countNode.active = true;
            let countLabel = countNode.getComponent(cc.Label);
            countLabel.string = 'x' + item.payCount;
            target.on('touchstart', () => this.onFucTouchstart(target, item, index), this);
          }
        });
      }
      this.bottomBarBox.addChild(target);
    });
  }

  private async onFucTouchstart(target: cc.Node, item, itemIndex) {
    if (this._isGameOver || this.startButton.active) return;
    if (State.ins().imageList[itemIndex].payCount <= 0) return;
    if (this.selfFucActiveSet.has(item.type)) return;
    if (item.type === 2 || item.type === 3 || item.type === 4) {
      if (this.selfFucActiveSet.has(2) || this.selfFucActiveSet.has(3) || this.selfFucActiveSet.has(4)) return;
    }
    this.selfFucActiveSet.add(item.type);

    if (item.payList.length > 0) {
      let tokenId = State.ins().imageList[itemIndex].payList.splice(0, 1)[0].token_id;
      State.ins().mainNear.contract.nft_burn({
        token_id: tokenId
      });
    }

    this.bgTitle.active = true;
    let bgTitleLabel = this.bgTitle.getComponent(cc.Label);
    let multiple = 1;
    switch (item.type) {
      case 6:
        {
          bgTitleLabel.string = '';
          this._isGameOver = true;
          cc.director.getPhysicsManager().enabled = false;
          this.bricks_in_game.forEach((item) => {
            if (Math.abs(item.node.y - this.bricks_in_game[0].node.y) < 45) {
              item.node.active = false;
              GameModel.ins().score += Number(item.lb_hp.string);
              if (item.star_num > 0) {
                GameModel.ins().ball_power += item.star_num;
                AudioPlayer.ins().play_sound('star');
              }
              if (item.ball_num > 0) {
                for (let index = 0; index < item.ball_num; index++) {
                  EventDispatch.ins().fire(Event_Name.GAME_CREATE_BALL);
                }
                AudioPlayer.ins().play_sound('balls');
              }
            }
          });
          this.clearLine.active = true;
          this.clearLine.setPosition(750, this.bricks_in_game[0].node.y);
          cc.tween(this.clearLine)
            .to(0.3, { x: -750 })
            .call(() => {
              this._isGameOver = false;
              cc.director.getPhysicsManager().enabled = true;
              this.clearLine.active = false;
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
          this.bricks_in_game.forEach((item) => {
            item.node.active = false;
            let hp = 0;
            if (item.lb_hp.string.indexOf('M') !== -1) {
              hp = Number(item.lb_hp.string.split('M')[0]) * 1000000;
            }
            if (item.lb_hp.string.indexOf('K') !== -1) {
              hp = Number(item.lb_hp.string.split('K')[0]) * 1000;
            }
            GameModel.ins().score += hp;
            if (item.star_num > 0) {
              GameModel.ins().ball_power += item.star_num;
              AudioPlayer.ins().play_sound('star');
            }
            if (item.ball_num > 0) {
              for (let index = 0; index < item.ball_num; index++) {
                EventDispatch.ins().fire(Event_Name.GAME_CREATE_BALL);
              }
              AudioPlayer.ins().play_sound('balls');
            }
          });
          this.clearAll.active = true;
          cc.tween(this.clearAll.getChildByName('bg3'))
            .to(0.3, { angle: 180 })
            .to(0.3, { angle: 360 })
            .repeat(2)
            .call(() => {
              this.clearAll.active = false;
              this.clearAll.getChildByName('bg3').angle = -0;
              this._isGameOver = false;
              cc.director.getPhysicsManager().enabled = true;
            })
            .start();
        }
        break;
    }

    this.multipleBallCount = GameModel.ins().ball_power * (multiple - 1);
    GameModel.ins().ball_power += this.multipleBallCount;

    State.ins().imageList[itemIndex].payCount -= 1;
    let count = target.getChildByName('count').getComponent(cc.Label);
    count.string = 'x' + State.ins().imageList[itemIndex].payCount.toString();
    AudioPlayer.ins().play_sound('levelup');

    let timeBox = target.getChildByName('timeBox');
    timeBox.active = true;
    let timeBoxSprite = timeBox.getComponent(cc.Sprite);
    cc.tween(timeBoxSprite)
      .to(item.time, {
        fillRange: 0
      })
      .start();

    let time = item.time;
    let callback = () => {
      time--;
      this.bgTitle.active = false;
      if (time <= 0) {
        this.unschedule(callback);
        timeBoxSprite.fillRange = 1;
        timeBox.active = false;
        if (item.type === 1) {
          this.node_freeze.active = false;
        }
        if (item.type === 2 || item.type === 3 || item.type === 4) {
          this.cannon_head.scale = 1;
          GameModel.ins().ball_power -= this.multipleBallCount;
          this.multipleBallCount = 0;
        }
        this.selfFucActiveSet.delete(item.type);
      }
    };
    this.schedule(callback, 1);
  }

  private onGameStatusToogle(status) {
    if (!this.overObj.active) {
      AudioPlayer.ins().play_sound('btn');
      if (status) {
        this.stopButton.active = true;
        this.startButton.active = false;
        this._isGameOver = false;
        cc.director.getPhysicsManager().enabled = true;
        AudioPlayer.ins().play_music('bg');
      } else {
        this.stopButton.active = false;
        this.startButton.active = true;
        this._isGameOver = true;
        cc.director.getPhysicsManager().enabled = false;
        AudioPlayer.ins().stop_music();
      }
    }
  }

  private onTouchMove(param: cc.Event.EventTouch) {
    const deltaX = param.getDeltaX();
    const deltaY = param.getDeltaY();
    const deltaR = Math.sqrt(deltaX * deltaX + deltaY * deltaY) * 0.3;
    const sign = Math.sign(deltaX);
    let angle = -this.cannon_head.angle + deltaR * sign;
    angle = Math.abs(angle) >= 85 ? Math.sign(angle) * 85 : angle;
    this.cannon_head.angle = -angle;
  }

  private gameStart() {
    EventDispatch.ins().add(Event_Name.GAME_CREATE_BALL, this.createBall, this);
    EventDispatch.ins().add(Event_Name.GAME_RELIVE, this.gameRelive, this);
    EventDispatch.ins().add(Event_Name.GAME_ON_TOUCH_MOVE, this.onTouchMove, this);
    EventDispatch.ins().add(Event_Name.GAME_POWER_TYPE_CHANGED, this.updateGamePowerType, this);
    EventDispatch.ins().add(Event_Name.GAME_SCORE_CHANGED, this.updateScore, this, true);
    EventDispatch.ins().add(Event_Name.GAME_BALL_POWER_CHANGED, this.updateBallPower, this, true);
    EventDispatch.ins().add(Event_Name.GAME_PLAY_BRICK_REMOVE_EFFECT, this.playBrickDeleteEffect, this);
    EventDispatch.ins().add(Event_Name.GAME_STAR_GET_EFFECT, this.updateStarNumGetEffect, this);
    AudioPlayer.ins().play_music('bg');

    this.resetGame();
  }

  private resetGame() {
    this.node_physics.active = true;
    this.cannon_head.angle = 0;
    cc.director.getPhysicsManager().enabled = true;
    this._updateDt = 0;
    this._moved_length = 0;
    this._moved_level = 0;
    this._isGameOver = false;
    this.updateGamePowerType(0);
    GameModel.ins().reset();
    const ball_init_count = GameModel.ins().ball_init_count;
    for (let index = 0; index < ball_init_count; index++) {
      this.createBall();
    }
    const brick_radius = GameConst.ins().brick_radius;
    for (let i = 0; i < 2; i++) {
      let rightNumber = Math.round(this.brick_max_count / 2);
      let leftNumber = -1 * Math.floor(this.brick_max_count / 2);
      for (let j = leftNumber; j < rightNumber; j++) {
        let hp = (i + 1) * GameModel.ins().ball_power + (ball_init_count - 4);
        hp = hp < 0 ? 1 : hp;
        this.createBrick(j * brick_radius * 2 + GameConst.ins().brick_init_x, i * brick_radius * 2 + GameConst.ins().brick_init_y, hp);
      }
    }

    this.lb_ball_power.string = `${GameModel.ins().ball_power}`;
  }

  update(dt) {
    TimerMgr.getInst().update(dt);

    if (this._isGameOver) return;

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

    if (this._updateDt % GameModel.ins().fireBallDt === 0 || this._power_type === 2) {
      this.balls_in_game.some((item) => {
        if (item.ball_status === EnumBallStatus.onReady && (item.ball_type === 0 || this._power_type === 2)) {
          item.power_scale = this._power_type === 1 ? 2 : 1;
          item.fireBall(-this.cannon_head.angle);
          return true;
        }
        return false;
      });
    }

    const brick_radius = GameConst.ins().brick_radius;
    const ball_power = GameModel.ins().ball_power - this.multipleBallCount;
    const new_level = Math.floor(this._moved_length / 4 / brick_radius);
    if (new_level > this._moved_level) {
      this._moved_level++;
      let balls_in_game_length = this.balls_in_game.length / (this._power_type === 2 ? 2 : 1);
      const maxHp = Math.ceil(balls_in_game_length * ball_power * 0.5 + this._moved_level * ball_power * 1.2);
      const brick_type_percent = GameConst.ins().brick_type_percent;
      let big_j = -999;
      let item_i = -999,
        item_j = -999;
      if (this._moved_level % 12 === 0) {
        big_j = RandomUtil.ins().randomNum(-2, 3);
        this.createBrick(
          -brick_radius + big_j * brick_radius * 2 + GameConst.ins().brick_init_x,
          brick_radius + GameConst.ins().brick_init_y,
          RandomUtil.ins().randomNum(maxHp * 3, maxHp * 6),
          RandomUtil.ins().randomNum(14, 16),
          10
        );
      }
      if (this._moved_level % 11 === 0) {
        item_i = RandomUtil.ins().randomNum(0, 1);
        item_j = RandomUtil.ins().randomNum(-3, 3);
      }
      for (let i = 0; i < 2; i++) {
        for (let j = -3; j < 4; j++) {
          if (j === big_j || j === big_j - 1) {
          } else {
            let hp =
              i === item_i && j === item_j
                ? RandomUtil.ins().randomNum(ball_power, Math.ceil(maxHp / 2))
                : RandomUtil.ins().randomNum(-Math.round(maxHp / ((this._moved_level % 5) + 1)), maxHp);
            let brick_type =
              i === item_i && j === item_j
                ? RandomUtil.ins().randomNum(11, 13)
                : brick_type_percent[RandomUtil.ins().randomNum(0, brick_type_percent.length - 1)];
            if (hp >= ball_power) {
              this.createBrick(
                j * brick_radius * 2 + GameConst.ins().brick_init_x,
                i * brick_radius * 2 + GameConst.ins().brick_init_y,
                hp,
                brick_type,
                Math.ceil((hp * 10) / maxHp)
              );
            }
          }
        }
      }
    }

    let brick_min_y = 9999;
    for (let index = 0, len = this.bricks_in_game.length; index < len; index++) {
      const element = this.bricks_in_game[index];
      if (element && element.node) {
        const brick = element.node;
        if (element.hp <= 0 || !brick.active) {
          if (this._updateDt % 60 === 0) {
            element.reset();
            this.bricks_in_game.splice(index, 1);
            this.bricks_pool[element.brick_type].push(brick);
            index--;
          }
        } else {
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
      brick_min_y > GameConst.ins().ball_init_y + brick_radius * 7 ? 1 : brick_min_y > GameConst.ins().ball_init_y + brick_radius * 5 ? 0.9 : 0.6;
  }

  private createBall(x = GameConst.ins().ball_init_x, y = GameConst.ins().ball_init_y, status = EnumBallStatus.onReady, ball_type = 0) {
    let ball = this.balls_pool[ball_type].shift();
    if (!ball) {
      ball = cc.instantiate(this.balls_ins[ball_type]);
      this.node_physics.addChild(ball);
    }
    const item = ball.getComponent(BallItem);
    item.init(x, y, status);
    ball.active = true;
    this.balls_in_game.unshift(item);
    this.lb_ball_count.string = `${this.balls_in_game.length / 2}`;
    if (ball_type === 0) {
      this.createBall(GameConst.ins().ball_init_x, GameConst.ins().ball_init_y, EnumBallStatus.onReady, 1);
    }
  }

  private createBrick(x = GameConst.ins().brick_init_x, y = GameConst.ins().brick_init_y, hp = 1, brick_type = 0, colors_num = 1) {
    if (brick_type === this.brick_max_count && this.balls_in_game.length > 200) {
      brick_type = 0;
    }
    let brick = this.bricks_pool[brick_type].shift();
    if (!brick) {
      brick = cc.instantiate(this.bricks_ins[brick_type]);
      this.node_physics.addChild(brick);
    }
    const item = brick.getComponent(BrickItem);
    brick.active = true;
    brick.x = x;
    brick.y = y;
    item.init(colors_num, hp);
    this.bricks_in_game.push(item);
  }

  private updateScore(old?: number, newValue?: number) {
    this.lb_score.string = formatPrice(GameModel.ins().score, 0, false, ' ');
  }

  private updateBallPower(old?: number, newValue?: number) {
    this.lb_ball_power.string = `${GameModel.ins().ball_power}`;
  }

  private updateStarNumGetEffect(x: number, y: number, count: number) {
    const targetPos = this.node_top.convertToNodeSpaceAR(this.node_star_img.convertToWorldSpaceAR(cc.v2(0, 0)));
    for (let index = 0; index < count; index++) {
      let star_item = this._star_pool.shift();
      if (!star_item) {
        star_item = cc.instantiate(this.star_ins);
        this.node_top.addChild(star_item);
      }
      star_item.x = x;
      star_item.y = y;
      star_item.angle = 0;
      star_item.active = true;
      Tween.get(star_item)
        .to({ angle: 720, x: targetPos.x, y: targetPos.y }, 800 + 100 * index, Ease.getBackInOut(1.2))
        .call(() => {
          star_item.active = false;
          this._star_pool.push(star_item);
          Tween.get(this.node_star_img)
            .to({ scale: 1.2 }, 300)
            .to({ scale: 1 }, 300, Ease.backInOut)
            .call(() => {
              GameModel.ins().ball_power += 1;
              this.lb_ball_power.string = `${GameModel.ins().ball_power}`;
            });
        });
    }
  }

  private _brick_img_pool: cc.Node[] = [];
  private playBrickDeleteEffect(x: number, y: number, color: cc.Color) {
    const theme_cfg = GameConst.ins().theme_config[0];
    if (theme_cfg) {
      loader_mgr.get_inst().loadAsset(
        'texture/plist/customize',
        gen_handler((res: cc.SpriteAtlas) => {
          const spriteFrame = res.getSpriteFrame(theme_cfg.theme);
          if (spriteFrame) {
            for (let index = 0; index < 9; index++) {
              const i = (index % 3) - 1.5;
              const j = Math.floor(index / 3) - 1.5;
              const targetPosX = x + i * (100 + 150 * Math.random());
              const targetPosY = y + j * (100 + 150 * Math.random());
              let img = this._brick_img_pool.shift();
              if (!img) {
                img = new cc.Node();
                img.addComponent(cc.Sprite);
                this.node_physics.addChild(img);
              }
              img.active = true;
              img.angle = 0;
              img.getComponent(cc.Sprite).spriteFrame = spriteFrame;
              img.color = color;
              const size = Math.random() * 50 + 50;
              img.width = img.height = size;
              img.x = x;
              img.y = y;
              Tween.get(img)
                .to({ x: targetPosX, y: targetPosY, width: size / 3, height: size / 3, angle: 1000 * Math.random() }, Math.random() * 500 + 500)
                .call(() => {
                  img.active = false;
                  this._brick_img_pool.push(img);
                });
            }
          } else {
          }
        }),
        cc.SpriteAtlas
      );
    }
  }

  private updateGamePowerType(power = 0) {
    if (power > 0) {
      if (this._power_type === 0) {
        this.node_power_progress.active = true;
        this.node_power_progress.width = 750;
        this._power_type = power;
        let bgTitleLabel = this.bgTitle.getComponent(cc.Label);
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
        AudioPlayer.ins().play_sound('levelup');
      }
    } else {
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
  }

  gameRelive() {
    this.bricks_in_game.forEach((value) => {
      value.reset();
      this.bricks_pool[value.brick_type].push(value.node);
    });
    this.bricks_in_game = [];
    this.overObj.active = false;
    this._isGameOver = false;
    cc.director.getPhysicsManager().enabled = true;
    AudioPlayer.ins().play_music('bg');
  }

  private gameOver() {
    this._isGameOver = true;
    cc.director.getPhysicsManager().enabled = false;
    this.overObj.active = true;
    EventDispatch.ins().add(Event_Name.GAME_RELIVE, this.gameRelive, this);
    AudioPlayer.ins().stop_music();
  }
}
