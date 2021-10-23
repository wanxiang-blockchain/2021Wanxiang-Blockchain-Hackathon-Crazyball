import { formatPrice } from './common/Common';
import GameModel from './model/GameModel';
import { AudioPlayer } from '../common/audio/AudioPlayer';
import { EventDispatch, Event_Name } from '../common/event/EventDispatch';
import State from './model/State';

const { ccclass, property } = cc._decorator;
@ccclass
export default class Over extends cc.Component {
  @property(cc.Node)
  overBox: cc.Node = null;
  @property(cc.Node)
  mask: cc.Node = null;
  @property(cc.Node)
  loading: cc.Node = null;
  @property(cc.Node)
  fail: cc.Node = null;
  @property(cc.Node)
  win: cc.Node = null;
  @property(cc.Label)
  count: cc.Label = null;
  @property(cc.Node)
  countBox: cc.Node = null;
  @property(cc.Label)
  diff: cc.Label = null;
  @property(cc.Label)
  reliveCount: cc.Label = null;
  @property(cc.Node)
  reliveBox: cc.Node = null;
  @property(cc.Node)
  reloadBox: cc.Node = null;
  @property(cc.Node)
  goBack: cc.Node = null;
  @property(cc.Node)
  getMoneyBox: cc.Node = null;
  @property(cc.Label)
  getMoneyTitle: cc.Label = null;

  onLoad() {
    this.mask.on('touchstart', () => {}, this, true);
  }

  async onEnable() {
    this.win.active = false;
    this.fail.active = false;
    this.countBox.active = false;
    this.goBack.on('touchstart', this.onGoBack, this);

    let count = GameModel.ins().score;
    this.count.string = formatPrice(count, 0, false, ' ');
    this.loading.active = true;
    cc.tween(this.loading)
      .repeatForever(cc.tween().by(0.3, { angle: 90 }))
      .start();
    this.loading.active = false;
    this.countBox.active = true;
    if (Number(count) > Number(State.ins().mainNear.maxScore)) {
      State.ins().mainNear.contract.upload_score({ account_id: State.ins().mainNear.ownerKey, score: count });
      this.win.active = true;
      this.fail.active = false;
      this.getMoneyTitle.string = `保持一天擂主后奖励自动发放`;
      this.getMoneyBox.on('touchstart', this.onGoBack);
      AudioPlayer.ins().play_sound('congra');
    } else {
      this.win.active = false;
      this.fail.active = true;
      this.reliveBox.once('touchstart', this.onReliveBox, this);
      this.reloadBox.on('touchstart', this.onReloadBox, this);
      this.diff.string = formatPrice(State.ins().mainNear.maxScore - count, 0, false, ' ');
      let reliveObj = State.ins().imageList.find((item) => {
        return item.type === 7;
      });
      this.reliveCount.string = 'x' + reliveObj.payCount.toString();
      AudioPlayer.ins().play_sound('win');
    }
  }

  private onGoBack() {
    cc.director.loadScene('main');
  }
  private async onReliveBox() {
    let findIndex = State.ins().imageList.findIndex((item, index) => {
      return item.type === 7;
    });
    if (findIndex > -1) {
      let tokenId = State.ins().imageList[findIndex].payList.splice(0, 1)[0].token_id;
      State.ins().imageList[findIndex].payCount -= 1;
      await State.ins().mainNear.contract.nft_burn({
        token_id: tokenId
      });
      EventDispatch.ins().fire(Event_Name.GAME_RELIVE);
    } else {
    }
  }
  private async onReloadBox() {
    localStorage.setItem('initScene', 'game');
    State.ins().mainNear.contract.sign_up(
      {
        account_id: State.ins().mainNear.ownerKey
      },
      300000000000000,
      window.nearApi.utils.format.parseNearAmount('1')
    );
  }
}
