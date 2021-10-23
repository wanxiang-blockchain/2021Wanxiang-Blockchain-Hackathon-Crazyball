const { WalletAccount, keyStores, connect, Contract } = window.nearApi;
import State from './model/State';

const { ccclass, property } = cc._decorator;
@ccclass
export default class StoreView extends cc.Component {
  @property(cc.Node)
  goBack: cc.Node = null;
  @property(cc.Prefab)
  listBox: cc.Prefab = null;
  @property(cc.ScrollView)
  scrollView: cc.ScrollView = null;
  @property(cc.Node)
  nav1: cc.Node = null;
  @property(cc.Node)
  nav2: cc.Node = null;
  @property(cc.Node)
  emptyBox: cc.Node = null;

  listBoxArr = [];
  typeObj = {};
  typeDealObj = {};
  resultMap = [];
  resultDealMap = [];
  activeIndex = 1;

  onLoad() {
    this.goBack.on('touchstart', this.onGoBack, this);
    this.initScrollView();
  }

  private async initScrollView() {
    State.ins().storeNear.near = await connect(Object.assign(State.ins().storeNearConfig, { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }));
    State.ins().storeNear.walletAccount = new WalletAccount(State.ins().storeNear.near);
    State.ins().storeNear.contract = new Contract(State.ins().storeNear.walletAccount.account(), State.ins().storeNearConfig.contractName, {
      viewMethods: ['get_sales', 'get_sales_by_owner_id'],
      changeMethods: ['offer'],
      sender: State.ins().storeNear.walletAccount.account()
    });
    State.ins().storeNear.ownerKey = State.ins().storeNear.walletAccount.getAccountId();
    let from_index = 0;
    let limit = 80;
    let result = [];
    let awaitResult = async () => {
      let res = await State.ins().storeNear.contract.get_sales({
        from_index: from_index.toString(),
        limit: limit.toString()
      });
      result = result.concat(res);
      if (from_index !== 0 && res.length === 0) {
        // stop interval
        return result;
      } else {
        from_index += limit;
        return awaitResult();
      }
    };
    await awaitResult();

    this.typeObj = {};
    this.typeDealObj = {};
    this.resultMap = [];
    this.resultDealMap = [];
    result.forEach((item, index) => {
      let type = item.token_id.split(':')[0];
      if (item.owner_id === 'nftball.testnet') {
        if (!this.resultMap[type]) {
          this.resultMap[type] = [];
        }
        this.resultMap[type].push(item);
        if (this.typeObj[type]) {
          this.typeObj[type] += 1;
        } else {
          this.typeObj[type] = 1;
        }
      } else {
        if (!this.resultDealMap[type]) {
          this.resultDealMap[type] = [];
        }
        this.resultDealMap[type].push(item);
        if (this.typeDealObj[type]) {
          this.typeDealObj[type] += 1;
        } else {
          this.typeDealObj[type] = 1;
        }
      }
    });

    await this.renderDefault();

    await this.judgeEmpty();

    this.nav1.on('touchstart', () => this.onNav(1), this);
    this.nav2.on('touchstart', () => this.onNav(2), this);
  }

  private renderDefault() {
    this.scrollView.content.removeAllChildren();
    let typeArr = Object.keys(this.typeObj);
    State.ins().imageList.forEach((item, index) => {
      if (!typeArr.includes(item.type.toString())) return;
      item.maxCount = this.typeObj[item.type];
      item.price = (this.resultMap[item.type][0].conditions.near / 1000000000000000000000000).toString();
      let listBox = cc.instantiate(this.listBox);
      this.scrollView.content.addChild(listBox);
      listBox.getComponent('StoreItem').initBox(item);
      this.listBoxArr.push(listBox);
      listBox.on('touchstart', () => {
        State.ins().storePayObj = this.resultMap[item.type][0];
        State.ins().storePayIndex = index;
        this.switchListBox(listBox);
      });
    });
  }

  private renderDeal() {
    this.scrollView.content.removeAllChildren();
    let typeDealArr = Object.keys(this.typeDealObj);
    State.ins()
      .imageList.concat()
      .forEach((item, index) => {
        if (!typeDealArr.includes(item.type.toString())) return;
        item.price = (this.resultDealMap[item.type][0].conditions.near / 1000000000000000000000000).toString();
        let listBox = cc.instantiate(this.listBox);
        this.scrollView.content.addChild(listBox);
        listBox.getComponent('StoreItem').initBox(item);
        this.listBoxArr.push(listBox);
        listBox.on('touchstart', () => {
          State.ins().storePayObj = this.resultDealMap[item.type][0];
          State.ins().storePayIndex = index;
          this.switchListBox(listBox);
        });
      });
  }

  private switchListBox(box) {
    this.listBoxArr.forEach((item, idx) => {
      item.getComponent('StoreItem').onListBoxOver();
      if (item === box) {
        item.getComponent('StoreItem').onListBox();
      }
    });
  }

  private onGoBack() {
    cc.director.loadScene('main');
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

  private judgeEmpty() {
    if (this.activeIndex === 1) {
      this.renderDefault();
      this.emptyBox.getChildByName('title').getComponent(cc.Label).string = '当前暂无商城道具';
    } else {
      this.renderDeal();
      this.emptyBox.getChildByName('title').getComponent(cc.Label).string = '当前暂无C2C道具';
    }
    this.emptyBox.active = this.scrollView.content.children.length === 0;
  }
}
