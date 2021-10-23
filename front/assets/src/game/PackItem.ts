const { ccclass, property } = cc._decorator;
@ccclass
export default class PackItem extends cc.Component {
  @property(cc.Node)
  listBox: cc.Node = null;
  @property(cc.Sprite)
  listBoxBg: cc.Sprite = null;
  @property(cc.Sprite)
  icon: cc.Sprite = null;
  @property(cc.Label)
  title: cc.Label = null;

  boxObj = {};

  onLoad() {
    this.listBox.on('touchstart', this.onListBox, this, true);
    this.listBox.on('touchend', this.onListBoxOver, this, true);
  }

  setImage(target, url: string) {
    cc.resources.load(url, cc.SpriteFrame, (err, spriteFrame: cc.SpriteFrame) => {
      target.spriteFrame = spriteFrame;
    });
  }

  initBox(obj) {
    this.boxObj = obj;
    this.setImage(this.icon, obj.url);
    this.title.string = 'x' + obj.payCount;
  }

  private onListBox() {
    this.setImage(this.listBoxBg, 'images/d2');
  }

  private onListBoxOver() {
    this.setImage(this.listBoxBg, 'images/d1');
  }
}
