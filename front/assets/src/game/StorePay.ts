import { formatPrice } from './common/Common';
import State from './model/State';

const { ccclass, property } = cc._decorator;
@ccclass
export default class StorePay extends cc.Component {
  @property(cc.Node)
  maskBox: cc.Node = null;
  @property(cc.Node)
  mask: cc.Node = null;
  @property(cc.Node)
  closeButton: cc.Node = null;
  @property(cc.Sprite)
  icon: cc.Sprite = null;
  @property(cc.Label)
  title: cc.Label = null;
  @property(cc.Label)
  price: cc.Label = null;
  @property(cc.Node)
  delButton: cc.Node = null;
  @property(cc.Label)
  count: cc.Label = null;
  @property(cc.Node)
  addButton: cc.Node = null;
  @property(cc.Label)
  totalPrice: cc.Label = null;
  @property(cc.Node)
  buyButton: cc.Node = null;

  _count = 1;
  _totalPrice = 0;
  boxObj = null;

  onLoad() {
    this.closeButton.on('touchstart', this.onClose, this);
    this.buyButton.on('touchstart', this.onBuy, this);
    this.mask.on(
      'touchstart',
      (event) => {
        event.stopPropagation();
      },
      this
    );
  }

  setImage(target, url: string) {
    cc.resources.load(url, cc.SpriteFrame, (err, spriteFrame: cc.SpriteFrame) => {
      target.spriteFrame = spriteFrame;
    });
  }

  initBox(obj) {
    this.boxObj = obj;
    this.maskBox.active = true;
    this.setImage(this.icon, obj.url);
    this.title.string = obj.title;
    this.price.string = formatPrice(obj.price, 2, true) + ' Near';
    this.watchCount();
  }

  private watchCount() {
    this.count.string = this._count.toString();
    this._totalPrice = this._count * Number(this.boxObj.price);
    this.totalPrice.string = formatPrice(this._totalPrice, 2, true) + ' Near';
  }

  private onClose() {
    this.maskBox.active = false;
    var scene = cc.director.getScene();
    scene.getChildByName('Canvas').removeChild(State.ins().storePayBox);
  }

  private async onBuy() {
    State.ins().storeNear.contract.offer(
      {
        nft_contract_id: State.ins().storePayObj.nft_contract_id,
        token_id: State.ins().storePayObj.token_id
      },
      300000000000000,
      window.nearApi.utils.format.parseNearAmount(this._totalPrice.toString())
    );
  }
}
