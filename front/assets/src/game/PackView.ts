import State from './model/State';

const { ccclass, property } = cc._decorator;
@ccclass
export default class PackView extends cc.Component {
  @property(cc.Node)
  goBack: cc.Node = null;
  @property(cc.Prefab)
  listBox: cc.Prefab = null;
  @property(cc.ScrollView)
  scrollView: cc.ScrollView = null;
  @property(cc.Node)
  fucList: cc.Node = null;
  @property(cc.Prefab)
  fucBox: cc.Prefab = null;
  @property(cc.Node)
  emptyBox: cc.Node = null;
  @property(cc.Node)
  nav1: cc.Node = null;
  @property(cc.Node)
  nav2: cc.Node = null;
  @property(cc.Node)
  sellEmptyBox: cc.Node = null;
  @property(cc.ScrollView)
  sellScrollView: cc.ScrollView = null;
  @property(cc.Node)
  tips: cc.Node = null;
  @property(cc.Node)
  longTapBox: cc.Node = null;
  @property(cc.Node)
  giveModel: cc.Node = null;
  @property(cc.Node)
  sellModel: cc.Node = null;
  @property(cc.Node)
  mask: cc.Node = null;
  @property(cc.Prefab)
  sellListBox: cc.Prefab = null;

  activeIndex = 1;
  tapTime = 0;

  async onLoad() {
    this.goBack.on('touchstart', this.onGoBack, this);

    await State.ins().getList();

    await this.judgeEmpty();
    this.nav1.on('touchstart', () => this.onNav(1), this);
    this.nav2.on('touchstart', () => this.onNav(2), this);
    this.tips.getChildByName('tipsClose').on(
      'touchstart',
      () => {
        this.tips.active = false;
        localStorage.setItem('packTips', 'false');
      },
      this
    );
  }

  private async judgeEmpty() {
    this.scrollView.content.active = false;
    this.emptyBox.active = false;
    this.sellScrollView.content.active = false;
    this.sellEmptyBox.active = false;
    this.fucList.active = false;
    this.tips.active = false;

    if (this.activeIndex === 1) {
      await this.renderScrollView();
      if (this.scrollView.content.children.length > 0) {
        this.scrollView.content.active = true;
        await this.renderFucList();
        this.tips.active = localStorage.getItem('packTips') !== 'false';
        this.fucList.active = true;
      } else {
        this.emptyBox.active = true;
        this.emptyBox.getChildByName('goStore').on(
          'touchstart',
          () => {
            cc.director.loadScene('store');
          },
          this
        );
      }
    } else {
      await this.renderSellScrollView();
      if (this.sellScrollView.content.children.length > 0) {
        this.sellScrollView.content.active = true;
      } else {
        this.sellEmptyBox.active = true;
      }
    }
  }

  private onNav(activeIndex) {
    this.activeIndex = activeIndex;
    let label = this[`nav${activeIndex}`].getChildByName('navLabel');
    label.opacity = 255 * 0.8;
    let navBg = this[`nav${activeIndex}`].getChildByName('navActive');
    navBg.active = true;

    let nextActive = 3 - activeIndex;
    let nextLabel = this[`nav${nextActive}`].getChildByName('navLabel');
    nextLabel.opacity = 255 * 0.6;
    let nextNavBg = this[`nav${nextActive}`].getChildByName('navActive');
    nextNavBg.active = false;
    this.judgeEmpty();
  }

  moveIcon = null;
  moveIndex = -1;
  moveCancel = 0;
  moveTargetIndex = -1;

  private renderScrollView() {
    let content = this.scrollView.content;
    content.removeAllChildren();
    State.ins().imageList.forEach((item, index) => {
      if (item.payCount === 0) return;
      if (item.sort !== -1) return;
      let listBox = cc.instantiate(this.listBox);
      content.addChild(listBox);
      listBox.getComponent('PackItem').initBox(item);
      listBox.on(
        'touchstart',
        (event) => {
          this.longTapBox.active = false;
          this.scheduleOnce(() => {
            this.longTap(event, listBox, index);
          }, 1);
          if (item.type === 7) return;
          this.ontouchstart(event, listBox, index);
        },
        this,
        true
      );
      if (item.type === 7) return;
      listBox.on(
        'touchmove',
        (e) => {
          this.unscheduleAllCallbacks();
          this.onTouchmove(e);
        },
        this,
        true
      );
      listBox.on(
        'touchcancel',
        () => {
          this.unscheduleAllCallbacks();
          this.onTouchcancel(1);
        },
        this,
        true
      );
      let scene = cc.director.getScene();
      scene.getChildByName('Canvas').on(
        'touchend',
        () => {
          this.unscheduleAllCallbacks();
          this.removeMoveBox();
        },
        this,
        true
      );
    });
  }

  private longTap(event, target, index) {
    let eventX = event.target.x;
    let eventY = event.target.y;
    let eventWidth = event.target.width;
    let eventHeight = event.target.height;
    let longTapBoxBounding = this.longTapBox.getBoundingBox();
    let width = longTapBoxBounding.width;
    let height = longTapBoxBounding.height;
    let xProcess = eventX + width / 2 - eventWidth / 2;
    let yProcess = eventY + 1051 / 2 - height / 2 - eventHeight / 2;
    let tips = this.longTapBox.getChildByName('tips');
    tips.setPosition(-90, 96.104);
    if (xProcess > 300) {
      xProcess = xProcess - width + eventWidth;
      tips.setPosition(90, 96.104);
    }
    this.longTapBox.setPosition(xProcess, yProcess);
    this.longTapBox.active = true;
    this.longTapBox.getChildByName('give').on(
      'touchstart',
      () => {
        this.longTapBox.active = false;
        this.showGiveModel(target, index);
      },
      this
    );
    this.longTapBox.getChildByName('sell').once(
      'touchstart',
      () => {
        this.longTapBox.active = false;
        this.showSellModel(target, index);
      },
      this
    );
  }

  private showGiveModel(target, index) {
    this.giveModel.getChildByName('icon').getComponent(cc.Sprite).spriteFrame = target.getChildByName('icon').getComponent(cc.Sprite).spriteFrame;
    this.giveModel.getChildByName('iconTitleBox').getChildByName('iconTitle').getComponent(cc.Label).string = State.ins().imageList[index].title;
    this.giveModel.active = true;
    this.mask.active = true;
    let input = this.giveModel.getChildByName('inputContext').getChildByName('inputBox').getComponent(cc.EditBox);
    let inputValue = '';
    let inputUpdate = (text, editbox, customEventData) => {
      inputValue = text.string;
      if (inputValue) {
        this.giveModel.getChildByName('submit').getChildByName('title').opacity = 255;
      } else {
        this.giveModel.getChildByName('submit').getChildByName('title').opacity = 88;
      }
    };
    input.node.on('text-changed', inputUpdate, this);
    this.giveModel.getChildByName('close').on(
      'touchstart',
      () => {
        this.giveModel.active = false;
        this.mask.active = false;
      },
      this
    );
    this.giveModel.getChildByName('submit').on(
      'touchstart',
      () => {
        if (!inputValue) return;
        State.ins().mainNear.contract.nft_transfer(
          {
            receiver_id: inputValue,
            token_id: State.ins().imageList[index].payList.splice(0, 1)[0].token_id
          },
          300000000000000,
          window.nearApi.utils.format.parseNearAmount('0.000000000000000000000001')
        );
      },
      this
    );
  }

  private showSellModel(target, index) {
    this.sellModel.getChildByName('icon').getComponent(cc.Sprite).spriteFrame = target.getChildByName('icon').getComponent(cc.Sprite).spriteFrame;
    this.sellModel.getChildByName('iconTitleBox').getChildByName('iconTitle').getComponent(cc.Label).string = State.ins().imageList[index].title;
    this.sellModel.active = true;
    this.mask.active = true;
    this.sellModel.getChildByName('close').on(
      'touchstart',
      () => {
        this.sellModel.active = false;
        this.mask.active = false;
      },
      this
    );
    this.sellModel.getChildByName('submit').on(
      'touchstart',
      () => {
        let next = State.ins().imageList[index].payList.splice(0, 1)[0];
        State.ins().mainNear.contract.nft_approve(
          {
            account_id: State.ins().storeNearConfig.contractName,
            token_id: next.token_id,
            msg: JSON.stringify({
              sale_conditions: {
                near: window.nearApi.utils.format.parseNearAmount('1'),
                token_type: next.token_id.split(':')[0],
                is_auction: 'false'
              }
            })
          },
          300000000000000,
          window.nearApi.utils.format.parseNearAmount('0.00051')
        );
      },
      this
    );
  }

  private async renderSellScrollView() {
    let content = this.scrollView.content;
    content.removeAllChildren();
    let from_index = 0;
    let limit = 80;
    let result = [];
    let awaitResult = async () => {
      let res = await State.ins().storeNear.contract.get_sales_by_owner_id({
        account_id: State.ins().storeNear.ownerKey,
        from_index: from_index.toString(),
        limit: limit
      });
      result = result.concat(res);
      if (from_index !== 0 && res.length === 0) {
        return result;
      } else {
        from_index += limit;
        return awaitResult();
      }
    };
    await awaitResult();
    let typeObj = {};
    result.forEach((item, index) => {
      let type = item.token_id.split(':')[0];
      if (typeObj[type]) {
        typeObj[type] += 1;
      } else {
        typeObj[type] = 1;
      }
    });
    let typeArr = Object.keys(typeObj);
    State.ins()
      .imageList.concat()
      .forEach((item, index) => {
        if (!typeArr.includes(item.type.toString())) return;
        let listBox = cc.instantiate(this.sellListBox);
        content.addChild(listBox);
      });
  }

  private async ontouchstart(event, target, index) {
    this.moveIcon = cc.instantiate(target.getChildByName('icon'));
    let scene = cc.director.getScene();
    scene.addChild(this.moveIcon);
    this.onTouchmove(event);
    this.moveIndex = index;
  }

  private onTouchmove(event) {
    let pos = event.getLocation();
    let delta = event.getDelta();
    this.moveIcon.setPosition(pos.x + delta.x, pos.y + delta.y);
    this.moveTargetIndex = -1;
    let moveIconBox = this.moveIcon.getBoundingBox();
    this.fucList.children.forEach((fucBox, index) => {
      if (cc.Intersection.rectRect(moveIconBox, fucBox.getBoundingBox())) {
        this.moveTargetIndex = index;
      }
    });
  }

  private async onTouchcancel(step = 1) {
    this.moveCancel += step;

    if (this.moveTargetIndex !== -1) {
      this.moveCancel = 0;
      this.removeMoveBox();
      State.ins().imageList.forEach((item, index) => {
        if (item.sort === this.moveTargetIndex) {
          item.sort = -1;
        }
      });
      State.ins().imageList[this.moveIndex].sort = this.moveTargetIndex;
      localStorage.setItem('imageList', JSON.stringify(State.ins().imageList));
      this.renderFucList();
      this.renderScrollView();
    } else {
      if (this.moveCancel === 2) {
        State.ins().imageList[this.moveIndex].sort = this.moveTargetIndex;
        localStorage.setItem('imageList', JSON.stringify(State.ins().imageList));
        this.removeMoveBox();
      }
    }
  }

  private removeMoveBox() {
    let scene = cc.director.getScene();
    scene.removeChild(this.moveIcon);
    this.moveCancel = 0;
  }

  private async renderFucList() {
    if (this.fucList) {
      this.fucList.removeAllChildren();
    }
    let fucListLength = 4;
    new Array(fucListLength).fill(1).map((item, index) => {
      let fuc = cc.instantiate(this.fucBox);
      let defaultContent = fuc.getChildByName('default');
      let fucIndex = defaultContent.getChildByName('index');
      let fucLabel = fucIndex.getComponent(cc.Label);
      fucLabel.string = (index + 1).toString();
      this.fucList.addChild(fuc);
    });
    State.ins().imageList.forEach((item, index) => {
      if (item.sort >= 0 && item.payCount > 0) {
        let targetBox = this.fucList.children[item.sort];
        let defaultContent = targetBox.getChildByName('default');
        let set = targetBox.getChildByName('set');
        let icon = set.getChildByName('icon');
        let iconSprite = icon.getComponent(cc.Sprite);
        let count = set.getChildByName('countBox').getChildByName('count');
        let countLabel = count.getComponent(cc.Label);
        countLabel.string = 'x ' + State.ins().imageList[index].payCount;
        defaultContent.active = false;
        set.active = true;
        cc.resources.load(item.url, cc.SpriteFrame, (err, spriteFrame: cc.SpriteFrame) => {
          iconSprite.spriteFrame = spriteFrame;
        });

        let listBox = cc.instantiate(this.listBox);
        listBox.getComponent('PackItem').initBox(item);
        targetBox.on(
          'touchstart',
          (event) => {
            this.longTapBox.active = false;
            this.ontouchstart(event, listBox, index);
          },
          this,
          true
        );
        targetBox.on('touchmove', this.onTouchmove, this, true);
        targetBox.on(
          'touchcancel',
          () => {
            this.onTouchcancel(2);
            if (this.moveTargetIndex === -1) {
              State.ins().imageList[index].sort = -1;
              this.renderFucList();
              this.renderScrollView();
            }
          },
          this,
          true
        );
        targetBox.on('touchend', this.removeMoveBox, this, true);
      }
    });
  }

  private onGoBack() {
    cc.director.loadScene('main');
  }
}
