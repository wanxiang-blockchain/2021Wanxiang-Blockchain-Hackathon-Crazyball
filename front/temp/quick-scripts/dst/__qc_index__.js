
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/migration/use_reversed_rotateTo');
require('./assets/src/common/audio/AudioPlayer');
require('./assets/src/common/base/SingletonClass');
require('./assets/src/common/event/EventDispatch');
require('./assets/src/common/linklist');
require('./assets/src/common/loader/loader_mgr');
require('./assets/src/common/localStorage/LocalStorage');
require('./assets/src/common/pool/pool_mgr');
require('./assets/src/common/pool/ui_pool');
require('./assets/src/common/random/RandomUtil');
require('./assets/src/common/timer/timer_mgr');
require('./assets/src/common/tween/Tween');
require('./assets/src/common/ui/pop_mgr');
require('./assets/src/common/ui/pop_ui_base');
require('./assets/src/common/util');
require('./assets/src/game/GameConst');
require('./assets/src/game/GameView');
require('./assets/src/game/MainView');
require('./assets/src/game/Over');
require('./assets/src/game/PackItem');
require('./assets/src/game/PackView');
require('./assets/src/game/StoreItem');
require('./assets/src/game/StorePay');
require('./assets/src/game/StoreView');
require('./assets/src/game/common/Common');
require('./assets/src/game/common/CommonLabelScroll');
require('./assets/src/game/item/BallItem');
require('./assets/src/game/item/BrickItem');
require('./assets/src/game/model/GameModel');
require('./assets/src/game/model/State');

                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();