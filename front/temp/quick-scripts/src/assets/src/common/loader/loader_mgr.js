"use strict";
cc._RF.push(module, 'ef581f23+RGqbKbSbfR960u', 'loader_mgr');
// src/common/loader/loader_mgr.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loader_mgr = void 0;
var loader_mgr = /** @class */ (function () {
    function loader_mgr() {
    }
    ;
    loader_mgr.get_inst = function () {
        if (!loader_mgr.inst) {
            loader_mgr.inst = new loader_mgr();
        }
        return loader_mgr.inst;
    };
    /**从远程url下载资源 */
    loader_mgr.prototype.loadExternalAsset = function (url, cb, type) {
        var res = cc.loader.getRes(url);
        if (res) {
            cb.exec(res);
            return;
        }
        cc.loader.load(type ? { url: url, type: type } : url, function (err, res) {
            if (err) {
                cc.warn("loadExternalAsset error", url);
                return;
            }
            cb.exec(res);
        });
    };
    /**从远程url下载资源列表 */
    loader_mgr.prototype.loadExternalAssets = function (urls, cb, types) {
        var loaded_res = {};
        var unloaded_urls = [];
        urls.forEach(function (url) {
            var res = cc.loader.getRes(url);
            if (res) {
                loaded_res[url] = res;
            }
            else {
                unloaded_urls.push(url);
            }
        });
        if (unloaded_urls.length == 0) {
            cb.exec(loaded_res);
            return;
        }
        var loadTasks = [];
        unloaded_urls.forEach(function (url, i) {
            types ? loadTasks.push({ url: url, type: types[i] }) : loadTasks.push(url);
        });
        cc.loader.load(loadTasks, function (errs, res) {
            cc.log("loadExternalAssets from remote url");
            if (errs) {
                cc.warn("loadExternalAssets error", errs);
                return;
            }
            unloaded_urls.forEach(function (url) {
                loaded_res[url] = res.getContent(url);
            });
            cb.exec(loaded_res);
        });
    };
    /**从resources目录加载rawasset，rawaaset是指cc.Texture2D, cc.AudioClip, cc.ParticleAsset*/
    loader_mgr.prototype.loadRawAsset = function (url, cb) {
        var res = cc.loader.getRes(url);
        if (res) {
            cb.exec(res);
            return;
        }
        cc.loader.loadRes(url, function (err, res) {
            if (err) {
                cc.warn("loadRawAsset error", url);
                return;
            }
            cb.exec(res);
        });
    };
    /**从resources目录加载asset，asset是指cc.SpriteFrame, cc.AnimationClip, cc.Prefab*/
    loader_mgr.prototype.loadAsset = function (url, cb, asset_type) {
        var res = cc.loader.getRes(url, asset_type);
        if (res) {
            cb.exec(res);
            return;
        }
        cc.loader.loadRes(url, asset_type, function (err, res) {
            if (err) {
                cc.warn("loadAsset error", url);
                return;
            }
            cb.exec(res);
        });
    };
    /**从resources目录加载asset/rawasset列表，省略资源后缀*/
    loader_mgr.prototype.loadResArray = function (urls, cb) {
        var loaded_res = {};
        var unloaded_urls = [];
        urls.forEach(function (url) {
            var res = cc.loader.getRes(url);
            if (res) {
                loaded_res[url] = res;
            }
            else {
                unloaded_urls.push(url);
            }
        });
        if (unloaded_urls.length == 0) {
            cb.exec(loaded_res);
            return;
        }
        cc.loader.loadResArray(unloaded_urls, function (err, res_arr) {
            if (err) {
                cc.warn("loadResArray error", unloaded_urls);
                return;
            }
            unloaded_urls.forEach(function (url) {
                loaded_res[url] = cc.loader.getRes(url);
            });
            cb.exec(loaded_res);
        });
    };
    /**从resources目录加载prefab(省略资源后缀)，加载成功后生成prefab实例*/
    loader_mgr.prototype.loadPrefabObj = function (url, cb) {
        var res = cc.loader.getRes(url, cc.Prefab);
        if (res) {
            var node = cc.instantiate(res);
            cb.exec(node);
            return;
        }
        //err is typeof Error, err.message
        cc.loader.loadRes(url, cc.Prefab, function (err, res) {
            if (err) {
                cc.warn("loadPrefabObj error", url, err);
                return;
            }
            var node = cc.instantiate(res);
            cb.exec(node);
        });
    };
    /**从resources目录加载prefab列表(省略资源后缀)，加载成功后生成prefab实例*/
    loader_mgr.prototype.loadPrefabObjArray = function (urls, cb) {
        var loaded_obj = {};
        var unloaded_urls = [];
        urls.forEach(function (url) {
            var res = cc.loader.getRes(url, cc.Prefab);
            if (res) {
                loaded_obj[url] = cc.instantiate(res);
            }
            else {
                unloaded_urls.push(url);
            }
        });
        if (unloaded_urls.length == 0) {
            cb.exec(loaded_obj);
            return;
        }
        cc.loader.loadResArray(unloaded_urls, cc.Prefab, function (err, res_arr) {
            if (err) {
                cc.warn("loadPrefabObjArray error", unloaded_urls);
                return;
            }
            unloaded_urls.forEach(function (url) {
                loaded_obj[url] = cc.instantiate(cc.loader.getRes(url, cc.Prefab));
            });
            cb.exec(loaded_obj);
        });
    };
    loader_mgr.prototype.loadPrefabDir = function (dir_path, cb) {
        var map = {};
        cc.loader.loadResDir(dir_path, cc.Prefab, function (err, res_arr, urls) {
            if (err) {
                cc.warn("loadPrefabObjDir error", dir_path);
                return;
            }
            urls.forEach(function (url) {
                map[url] = cc.loader.getRes(url, cc.Prefab);
            });
            cb.exec(map);
        });
    };
    loader_mgr.prototype.loadPrefabObjDir = function (dir_path, cb) {
        var map = {};
        cc.loader.loadResDir(dir_path, cc.Prefab, function (err, res_arr, urls) {
            if (err) {
                cc.warn("loadPrefabObjDir error", dir_path);
                return;
            }
            urls.forEach(function (url) {
                map[url] = cc.instantiate(cc.loader.getRes(url, cc.Prefab));
            });
            cb.exec(map);
        });
    };
    loader_mgr.prototype.release = function (urlOrAssetOrNode) {
        if (urlOrAssetOrNode instanceof cc.Node) {
            //释放节点,从场景上移除
            urlOrAssetOrNode.destroy();
        }
        else {
            //释放缓存引用和资源内容
            cc.loader.release(urlOrAssetOrNode);
        }
    };
    return loader_mgr;
}());
exports.loader_mgr = loader_mgr;

cc._RF.pop();