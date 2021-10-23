import { formatPrice } from './common/Common';
import State from './model/State';

const { ccclass, property } = cc._decorator;
@ccclass
export default class StoreItem extends cc.Component {
  @property(cc.Node)
  listBox: cc.Node = null;
  @property(cc.Sprite)
  listBoxBg: cc.Sprite = null;
  @property(cc.Sprite)
  icon: cc.Sprite = null;
  @property(cc.Label)
  title: cc.Label = null;
  @property(cc.Node)
  submitButton: cc.Node = null;
  @property(cc.Sprite)
  submitButtonBg: cc.Sprite = null;
  @property(cc.Label)
  submitTitle: cc.Label = null;

  @property(cc.Prefab)
  storePay: cc.Prefab = null;

  boxObj = {};

  onLoad() {
    this.submitButton.on('touchstart', this.onSubmitButton, this);
  }

  setImage(target, url: string) {
    cc.resources.load(url, cc.SpriteFrame, (err, spriteFrame: cc.SpriteFrame) => {
      target.spriteFrame = spriteFrame;
    });
  }

  initBox(obj) {
    this.boxObj = obj;
    this.setImage(this.icon, obj.url);
    this.title.string = obj.title;
    this.submitTitle.string = formatPrice(obj.price, 2, true) + ' Near';
  }

  onListBox() {
    this.setImage(this.listBoxBg, 'images/b2');
    this.setImage(this.submitButtonBg, 'images/c2');
    this.submitTitle.node.color = cc.Color.WHITE;
  }

  onListBoxOver() {
    this.setImage(this.listBoxBg, 'images/b1');
    this.setImage(this.submitButtonBg, 'images/c1');
    this.submitTitle.node.color = cc.color(255, 217, 79);
  }

  private onSubmitButton() {
    State.ins().storePayBox = cc.instantiate(this.storePay);
    let scene = cc.director.getScene();
    scene.getChildByName('Canvas').addChild(State.ins().storePayBox);
    State.ins().storePayBox.getComponent('StorePay').initBox(this.boxObj);
  }
}
