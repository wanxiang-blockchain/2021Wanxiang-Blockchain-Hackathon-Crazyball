import { formatPrice } from './common/Common';
import State from './model/State';

const { WalletAccount, keyStores, connect, Contract } = window.nearApi;

const { ccclass, property } = cc._decorator;
@ccclass
export default class MainView extends cc.Component {
  @property(cc.Label)
  maxScore: cc.Label = null;
  @property(cc.Node)
  ball: cc.Node = null;
  @property(cc.Label)
  awardTotal: cc.Label = null;
  @property(cc.Label)
  userName: cc.Label = null;
  @property(cc.Label)
  myMoney: cc.Label = null;
  @property(cc.Node)
  startButton: cc.Node = null;
  @property(cc.Label)
  startTitle: cc.Label = null;
  @property(cc.Node)
  startPrice: cc.Node = null;
  @property(cc.Node)
  reloginButton: cc.Node = null;
  @property(cc.Node)
  packBox: cc.Node = null;
  @property(cc.Node)
  pack: cc.Node = null;
  @property(cc.Node)
  storeBox: cc.Node = null;
  @property(cc.Node)
  store: cc.Node = null;
  @property([cc.Node])
  loadingBox: cc.Node = null;
  @property([cc.Node])
  loading: cc.Node = null;

  async onLoad() {
    this.startButton.on('touchstart', this.onStartButton, this);
    this.reloginButton.on('touchstart', this.onRelogin, this);
    this.pack.on('touchstart', this.onPack, this);
    this.store.on('touchstart', this.onStore, this);

    let anim = this.ball.getComponent(cc.Animation);
    let animState = anim.play();
    animState.wrapMode = cc.WrapMode.Loop;
    animState.repeatCount = Infinity;

    this.maxScore.schedule(() => {
      this.initNear();
    }, 5);
    await this.initNear();
    this.initMarket();
    await State.ins().getList();
  }

  update() {
    this.maxScore.string = formatPrice(State.ins().mainNear.maxScore, 0, false, ',');
    this.awardTotal.string = formatPrice(State.ins().mainNear.poolBalance, 4) + ' Near';
    this.myMoney.string = formatPrice(State.ins().mainNear.balance) + ' Near';
    if (State.ins().isLogin) {
      this.startPrice.active = true;
      this.startTitle.string = '开始游戏';
      this.reloginButton.active = true;
      this.packBox.active = true;
      this.storeBox.active = true;
    }
    if (State.ins().isPay) {
      this.startTitle.string = '开始游戏';
      this.startPrice.active = false;
    }
  }

  private onPack() {
    cc.director.loadScene('pack');
  }

  private onStore() {
    cc.director.loadScene('store');
  }

  private toogleLoading(show = false) {
    if (show) {
      this.loadingBox.active = true;
      let anim = this.loading.getComponent(cc.Animation);
      let animState = anim.play();
      animState.wrapMode = cc.WrapMode.Loop;
      animState.repeatCount = Infinity;
    } else {
      this.loadingBox.active = false;
    }
  }

  private async onStartButton() {
    if (State.ins().isLogin) {
      if (State.ins().isPay) {
        cc.director.loadScene('game');
      } else {
        this.pay();
      }
    } else {
      this.goToGetAuth();
    }
  }

  private async initNear() {
    State.ins().mainNear.near = await connect(Object.assign(State.ins().mianNearConfig, { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }));
    State.ins().mainNear.walletAccount = new WalletAccount(State.ins().mainNear.near);
    State.ins().isLogin = State.ins().mainNear.walletAccount.isSignedIn();
    State.ins().mainNear.ownerKey = State.ins().mainNear.walletAccount.getAccountId();
    this.userName.string = State.ins().mainNear.ownerKey;
    if (State.ins().isLogin) {
      State.ins().mainNear.contract = new Contract(State.ins().mainNear.walletAccount.account(), State.ins().mianNearConfig.contractName, {
        viewMethods: ['list_score', 'check_sign', 'nft_tokens_for_owner'],
        changeMethods: ['upload_score', 'sign_up', 'play_game', 'nft_burn', 'nft_transfer', 'nft_approve'],
        sender: State.ins().mainNear.walletAccount.account()
      });
      let results = await State.ins().mainNear.contract.list_score();
      State.ins().mainNear.poolBalance = results.total_reward / 1000000000000000000000000;
      if (results.rank && results.rank.length > 0) {
        State.ins().mainNear.maxScore = results.rank[0].score || 0;
      }
      const account = await State.ins().mainNear.near.account(State.ins().mainNear.walletAccount.getAccountId());
      State.ins().mainNear.balance = (await account.getAccountBalance()).available / 1000000000000000000000000;

      State.ins().isPay = await State.ins().mainNear.contract.check_sign({
        account_id: State.ins().mainNear.ownerKey
      });

      if (State.ins().isPay) {
        let go = localStorage.getItem('initScene');
        if (go) {
          localStorage.removeItem('initScene');
          cc.director.loadScene(go);
        }
      } else {
        localStorage.removeItem('initScene');
      }
    } else {
      localStorage.removeItem('imageList');
    }
  }

  private goToGetAuth() {

    State.ins().mainNear.walletAccount.requestSignIn(State.ins().mianNearConfig.contractName, 'demo');
  }

  private async pay() {
    this.toogleLoading(true);
    await State.ins().mainNear.contract.sign_up(
      {
        account_id: State.ins().mainNear.ownerKey
      },
      300000000000000,
      window.nearApi.utils.format.parseNearAmount('1')
    );
  }

  private onRelogin() {
    localStorage.removeItem('imageList');
    State.ins().mainNear.walletAccount.signOut();
    this.goToGetAuth();
  }

  private async initMarket() {
    State.ins().storeNear.near = await connect(Object.assign(State.ins().storeNearConfig, { deps: { keyStore: new keyStores.BrowserLocalStorageKeyStore() } }));
    State.ins().storeNear.walletAccount = new WalletAccount(State.ins().storeNear.near);
    State.ins().storeNear.contract = new Contract(State.ins().storeNear.walletAccount.account(), State.ins().storeNearConfig.contractName, {
      viewMethods: ['get_sales', 'get_sales_by_owner_id'],
      changeMethods: ['offer'],
      sender: State.ins().storeNear.walletAccount.account()
    });
    State.ins().storeNear.ownerKey = State.ins().storeNear.walletAccount.getAccountId();
  }
}
