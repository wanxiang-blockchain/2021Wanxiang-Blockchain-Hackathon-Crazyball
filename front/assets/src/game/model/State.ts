import SingletonClass from '../../common/base/SingletonClass';
export default class State extends SingletonClass {
  static ins() {
    return super.ins() as State;
  }
  public imageList = [
    {
      type: 6,
      url: 'images/a1',
      title: '清一行',
      price: '10',
      payCount: 0,
      payList: [],
      // 冷却时间
      time: 0.3,
      maxCount: 0,
      sort: -1
    },
    {
      type: 1,
      url: 'images/a2',
      title: '冻全屏',
      price: '10',
      payCount: 0,
      payList: [],
      time: 10,
      maxCount: 0,
      sort: -1
    },
    {
      type: 2,
      url: 'images/a3',
      title: '两倍速',
      price: '10',
      payCount: 0,
      payList: [],
      time: 10,
      maxCount: 0,
      sort: -1
    },
    {
      type: 3,
      url: 'images/a4',
      title: '三倍速',
      price: '10',
      payCount: 0,
      payList: [],
      time: 10,
      maxCount: 0,
      sort: -1
    },
    {
      type: 4,
      url: 'images/a5',
      title: '五倍速',
      price: '10',
      payCount: 0,
      payList: [],
      time: 10,
      maxCount: 0,
      sort: -1
    },
    {
      type: 5,
      url: 'images/a6',
      title: '清全屏',
      price: '10',
      payCount: 0,
      payList: [],
      time: 1,
      maxCount: 0,
      sort: -1
    },
    {
      type: 7,
      url: 'images/a7',
      title: '复活',
      price: '10',
      payCount: 0,
      payList: [],
      time: 0,
      maxCount: 0,
      sort: -1
    }
  ];

  public resetImageList() {
    this.imageList = [
      {
        type: 6,
        url: 'images/a1',
        title: '清一行',
        price: '10',
        payCount: 0,
        payList: [],
        // 冷却时间
        time: 0.3,
        maxCount: 0,
        sort: -1
      },
      {
        type: 1,
        url: 'images/a2',
        title: '冻全屏',
        price: '10',
        payCount: 0,
        payList: [],
        time: 10,
        maxCount: 0,
        sort: -1
      },
      {
        type: 2,
        url: 'images/a3',
        title: '两倍速',
        price: '10',
        payCount: 0,
        payList: [],
        time: 10,
        maxCount: 0,
        sort: -1
      },
      {
        type: 3,
        url: 'images/a4',
        title: '三倍速',
        price: '10',
        payCount: 0,
        payList: [],
        time: 10,
        maxCount: 0,
        sort: -1
      },
      {
        type: 4,
        url: 'images/a5',
        title: '五倍速',
        price: '10',
        payCount: 0,
        payList: [],
        time: 10,
        maxCount: 0,
        sort: -1
      },
      {
        type: 5,
        url: 'images/a6',
        title: '清全屏',
        price: '10',
        payCount: 0,
        payList: [],
        time: 1,
        maxCount: 0,
        sort: -1
      },
      {
        type: 7,
        url: 'images/a7',
        title: '复活',
        price: '10',
        payCount: 0,
        payList: [],
        time: 0,
        maxCount: 0,
        sort: -1
      }
    ];
  }

  public async getList() {
    let result = await State.ins().mainNear.contract.nft_tokens_for_owner({
      account_id: State.ins().mainNear.ownerKey,
      from_index: '0',
      limit: 100000
    });
    State.ins().resetImageList();
    if (State.ins().isLogin && localStorage.getItem('imageList')) {
      let localStorageImageList = JSON.parse(localStorage.getItem('imageList'));
      localStorageImageList.forEach((item, index) => {
        State.ins().imageList[index].sort = item.sort;
      });
    }
    let typeProcessIndex = (res) => {
      let index = res;
      switch(res) {
        case 7:
          index = 6;
          break;
        case 6:
          index = 0;
          break;
      }
      return index;
    }
    result.forEach((item, index) => {
      let arr = item.token_id.split(':');
      let targetIndex = typeProcessIndex(Number(arr[0]));
      State.ins().imageList[targetIndex].payCount++;
      State.ins().imageList[targetIndex].payList.push(item);
    });
    localStorage.setItem('imageList', JSON.stringify(State.ins().imageList));
  }

  public isLogin = false;
  public isPay = false;
  public mianNearConfig = {
    networkId: 'testnet',
    contractName: 'dev-1632965307540-55511993444317',
    // contractName: 'dev-1632724418776-68219858133201',
    nodeUrl: 'https://rpc.testnet.near.org',
    // nodeUrl: 'https://public-rpc.blockpi.io/http/near-testnet',
    walletUrl: 'https://wallet.testnet.near.org',
    helperUrl: 'https://helper.testnet.near.org'
    // explorerUrl: "https://explorer.testnet.near.org",
  };
  public mainNear: any = {
    near: {},
    walletAccount: {},
    contract: {},
    ownerKey: '',
    poolBalance: 0,
    maxScore: 0,
    balance: 0
  };
  public storeNearConfig = {
    ...this.mianNearConfig,
    contractName: 'market.' + this.mianNearConfig.contractName,
  };
  public storeNear: any = {
    near: {},
    walletAccount: {},
    contract: {},
    ownerKey: '',
    poolBalance: 0,
    maxScore: 0,
    balance: 0
  };
  public storePayBox;
  public storePayIndex;
  public storePayObj;
  public initScene;
  public init() {}
}
