
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/loader/loader_mgr.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL2xvYWRlci9sb2FkZXJfbWdyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBO0lBRUk7SUFBd0IsQ0FBQztJQUFBLENBQUM7SUFFbkIsbUJBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxFQUFFO1lBQ2xCLFVBQVUsQ0FBQyxJQUFJLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQztTQUN0QztRQUNELE9BQU8sVUFBVSxDQUFDLElBQUksQ0FBQztJQUMzQixDQUFDO0lBRUQsZ0JBQWdCO0lBQ2hCLHNDQUFpQixHQUFqQixVQUFrQixHQUFXLEVBQUUsRUFBVyxFQUFFLElBQWE7UUFDckQsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxHQUFHLEVBQUU7WUFDTCxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ2IsT0FBTztTQUNWO1FBQ0QsRUFBRSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEdBQUcsS0FBQSxFQUFFLElBQUksTUFBQSxFQUFFLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQUcsRUFBRSxHQUFHO1lBQ2hELElBQUksR0FBRyxFQUFFO2dCQUNMLEVBQUUsQ0FBQyxJQUFJLENBQUMseUJBQXlCLEVBQUUsR0FBRyxDQUFDLENBQUM7Z0JBQ3hDLE9BQU87YUFDVjtZQUNELEVBQUUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakIsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsa0JBQWtCO0lBQ2xCLHVDQUFrQixHQUFsQixVQUFtQixJQUFjLEVBQUUsRUFBVyxFQUFFLEtBQWdCO1FBQzVELElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLGFBQWEsR0FBYSxF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aU5DLElBQUE7QUFqTlksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBoYW5kbGVyLCBnZW5faGFuZGxlciB9IGZyb20gXCIuLi91dGlsXCJcblxuZXhwb3J0IGNsYXNzIGxvYWRlcl9tZ3Ige1xuICAgIHByaXZhdGUgc3RhdGljIGluc3Q6IGxvYWRlcl9tZ3I7XG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHsgfTtcblxuICAgIHN0YXRpYyBnZXRfaW5zdCgpOiBsb2FkZXJfbWdyIHtcbiAgICAgICAgaWYgKCFsb2FkZXJfbWdyLmluc3QpIHtcbiAgICAgICAgICAgIGxvYWRlcl9tZ3IuaW5zdCA9IG5ldyBsb2FkZXJfbWdyKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGxvYWRlcl9tZ3IuaW5zdDtcbiAgICB9XG5cbiAgICAvKirku47ov5znqIt1cmzkuIvovb3otYTmupAgKi9cbiAgICBsb2FkRXh0ZXJuYWxBc3NldCh1cmw6IHN0cmluZywgY2I6IGhhbmRsZXIsIHR5cGU/OiBzdHJpbmcpIHtcbiAgICAgICAgY29uc3QgcmVzID0gY2MubG9hZGVyLmdldFJlcyh1cmwpO1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBjYi5leGVjKHJlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWQodHlwZSA/IHsgdXJsLCB0eXBlIH0gOiB1cmwsIChlcnIsIHJlcykgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJsb2FkRXh0ZXJuYWxBc3NldCBlcnJvclwiLCB1cmwpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNiLmV4ZWMocmVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoq5LuO6L+c56iLdXJs5LiL6L296LWE5rqQ5YiX6KGoICovXG4gICAgbG9hZEV4dGVybmFsQXNzZXRzKHVybHM6IHN0cmluZ1tdLCBjYjogaGFuZGxlciwgdHlwZXM/OiBzdHJpbmdbXSkge1xuICAgICAgICBsZXQgbG9hZGVkX3JlcyA9IHt9O1xuICAgICAgICBsZXQgdW5sb2FkZWRfdXJsczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgdXJscy5mb3JFYWNoKHVybCA9PiB7XG4gICAgICAgICAgICBsZXQgcmVzID0gY2MubG9hZGVyLmdldFJlcyh1cmwpO1xuICAgICAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgICAgIGxvYWRlZF9yZXNbdXJsXSA9IHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVubG9hZGVkX3VybHMucHVzaCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVubG9hZGVkX3VybHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNiLmV4ZWMobG9hZGVkX3Jlcyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBsb2FkVGFza3MgPSBbXTtcbiAgICAgICAgdW5sb2FkZWRfdXJscy5mb3JFYWNoKCh1cmwsIGkpID0+IHtcbiAgICAgICAgICAgIHR5cGVzID8gbG9hZFRhc2tzLnB1c2goeyB1cmwsIHR5cGU6IHR5cGVzW2ldIH0pIDogbG9hZFRhc2tzLnB1c2godXJsKTtcbiAgICAgICAgfSlcbiAgICAgICAgY2MubG9hZGVyLmxvYWQobG9hZFRhc2tzLCAoZXJycywgcmVzKSA9PiB7XG4gICAgICAgICAgICBjYy5sb2coXCJsb2FkRXh0ZXJuYWxBc3NldHMgZnJvbSByZW1vdGUgdXJsXCIpO1xuICAgICAgICAgICAgaWYgKGVycnMpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZEV4dGVybmFsQXNzZXRzIGVycm9yXCIsIGVycnMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVubG9hZGVkX3VybHMuZm9yRWFjaCh1cmwgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlZF9yZXNbdXJsXSA9IHJlcy5nZXRDb250ZW50KHVybCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNiLmV4ZWMobG9hZGVkX3Jlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKuS7jnJlc291cmNlc+ebruW9leWKoOi9vXJhd2Fzc2V077yMcmF3YWFzZXTmmK/mjIdjYy5UZXh0dXJlMkQsIGNjLkF1ZGlvQ2xpcCwgY2MuUGFydGljbGVBc3NldCovXG4gICAgbG9hZFJhd0Fzc2V0KHVybDogc3RyaW5nLCBjYjogaGFuZGxlcikge1xuICAgICAgICBsZXQgcmVzOiBhbnkgPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCk7XG4gICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgIGNiLmV4ZWMocmVzKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYy5sb2FkZXIubG9hZFJlcyh1cmwsIChlcnI6IGFueSwgcmVzOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZFJhd0Fzc2V0IGVycm9yXCIsIHVybCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2IuZXhlYyhyZXMpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvKirku45yZXNvdXJjZXPnm67lvZXliqDovb1hc3NldO+8jGFzc2V05piv5oyHY2MuU3ByaXRlRnJhbWUsIGNjLkFuaW1hdGlvbkNsaXAsIGNjLlByZWZhYiovXG4gICAgbG9hZEFzc2V0KHVybDogc3RyaW5nLCBjYjogaGFuZGxlciwgYXNzZXRfdHlwZTogdHlwZW9mIGNjLkFzc2V0KTogdm9pZCB7XG4gICAgICAgIGxldCByZXM6IGFueSA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBhc3NldF90eXBlKTtcbiAgICAgICAgaWYgKHJlcykge1xuICAgICAgICAgICAgY2IuZXhlYyhyZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzKHVybCwgYXNzZXRfdHlwZSwgKGVycjogYW55LCByZXM6IGFueSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJsb2FkQXNzZXQgZXJyb3JcIiwgdXJsKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYi5leGVjKHJlcyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8qKuS7jnJlc291cmNlc+ebruW9leWKoOi9vWFzc2V0L3Jhd2Fzc2V05YiX6KGo77yM55yB55Wl6LWE5rqQ5ZCO57yAKi9cbiAgICBsb2FkUmVzQXJyYXkodXJsczogc3RyaW5nW10sIGNiOiBoYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIGxldCBsb2FkZWRfcmVzOiBhbnkgPSB7fTtcbiAgICAgICAgbGV0IHVubG9hZGVkX3VybHM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIHVybHMuZm9yRWFjaCgodXJsOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGxldCByZXM6IGFueSA9IGNjLmxvYWRlci5nZXRSZXModXJsKTtcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICBsb2FkZWRfcmVzW3VybF0gPSByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB1bmxvYWRlZF91cmxzLnB1c2godXJsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1bmxvYWRlZF91cmxzLmxlbmd0aCA9PSAwKSB7XG4gICAgICAgICAgICBjYi5leGVjKGxvYWRlZF9yZXMpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzQXJyYXkodW5sb2FkZWRfdXJscywgKGVycjogYW55LCByZXNfYXJyOiBhbnlbXSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJsb2FkUmVzQXJyYXkgZXJyb3JcIiwgdW5sb2FkZWRfdXJscyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdW5sb2FkZWRfdXJscy5mb3JFYWNoKCh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgICAgIGxvYWRlZF9yZXNbdXJsXSA9IGNjLmxvYWRlci5nZXRSZXModXJsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2IuZXhlYyhsb2FkZWRfcmVzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoq5LuOcmVzb3VyY2Vz55uu5b2V5Yqg6L29cHJlZmFiKOecgeeVpei1hOa6kOWQjue8gCnvvIzliqDovb3miJDlip/lkI7nlJ/miJBwcmVmYWLlrp7kvosqL1xuICAgIGxvYWRQcmVmYWJPYmoodXJsOiBzdHJpbmcsIGNiOiBoYW5kbGVyKSB7XG4gICAgICAgIGxldCByZXM6IGFueSA9IGNjLmxvYWRlci5nZXRSZXModXJsLCBjYy5QcmVmYWIpO1xuICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICBsZXQgbm9kZTogY2MuTm9kZSA9IGNjLmluc3RhbnRpYXRlKHJlcyk7XG4gICAgICAgICAgICBjYi5leGVjKG5vZGUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vZXJyIGlzIHR5cGVvZiBFcnJvciwgZXJyLm1lc3NhZ2VcbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXModXJsLCBjYy5QcmVmYWIsIChlcnI6IGFueSwgcmVzOiBhbnkpOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZFByZWZhYk9iaiBlcnJvclwiLCB1cmwsIGVycik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IG5vZGU6IGNjLk5vZGUgPSBjYy5pbnN0YW50aWF0ZShyZXMpO1xuICAgICAgICAgICAgY2IuZXhlYyhub2RlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLyoq5LuOcmVzb3VyY2Vz55uu5b2V5Yqg6L29cHJlZmFi5YiX6KGoKOecgeeVpei1hOa6kOWQjue8gCnvvIzliqDovb3miJDlip/lkI7nlJ/miJBwcmVmYWLlrp7kvosqL1xuICAgIGxvYWRQcmVmYWJPYmpBcnJheSh1cmxzOiBzdHJpbmdbXSwgY2I6IGhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IGxvYWRlZF9vYmo6IGFueSA9IHt9O1xuICAgICAgICBsZXQgdW5sb2FkZWRfdXJsczogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgdXJscy5mb3JFYWNoKCh1cmw6IHN0cmluZyk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgbGV0IHJlczogYW55ID0gY2MubG9hZGVyLmdldFJlcyh1cmwsIGNjLlByZWZhYik7XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgbG9hZGVkX29ialt1cmxdID0gY2MuaW5zdGFudGlhdGUocmVzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHVubG9hZGVkX3VybHMucHVzaCh1cmwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVubG9hZGVkX3VybHMubGVuZ3RoID09IDApIHtcbiAgICAgICAgICAgIGNiLmV4ZWMobG9hZGVkX29iaik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY2MubG9hZGVyLmxvYWRSZXNBcnJheSh1bmxvYWRlZF91cmxzLCBjYy5QcmVmYWIsIChlcnI6IGFueSwgcmVzX2FycjogYW55W10pOiB2b2lkID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBjYy53YXJuKFwibG9hZFByZWZhYk9iakFycmF5IGVycm9yXCIsIHVubG9hZGVkX3VybHMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVubG9hZGVkX3VybHMuZm9yRWFjaCgodXJsOiBzdHJpbmcpOiB2b2lkID0+IHtcbiAgICAgICAgICAgICAgICBsb2FkZWRfb2JqW3VybF0gPSBjYy5pbnN0YW50aWF0ZShjYy5sb2FkZXIuZ2V0UmVzKHVybCwgY2MuUHJlZmFiKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNiLmV4ZWMobG9hZGVkX29iaik7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGxvYWRQcmVmYWJEaXIoZGlyX3BhdGg6IHN0cmluZywgY2I6IGhhbmRsZXIpOiB2b2lkIHtcbiAgICAgICAgbGV0IG1hcDogYW55ID0ge307XG4gICAgICAgIGNjLmxvYWRlci5sb2FkUmVzRGlyKGRpcl9wYXRoLCBjYy5QcmVmYWIsIChlcnI6IGFueSwgcmVzX2FycjogYW55W10sIHVybHM6IHN0cmluZ1tdKTogdm9pZCA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgY2Mud2FybihcImxvYWRQcmVmYWJPYmpEaXIgZXJyb3JcIiwgZGlyX3BhdGgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHVybHMuZm9yRWFjaCgodXJsKSA9PiB7XG4gICAgICAgICAgICAgICAgbWFwW3VybF0gPSBjYy5sb2FkZXIuZ2V0UmVzKHVybCwgY2MuUHJlZmFiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2IuZXhlYyhtYXApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBsb2FkUHJlZmFiT2JqRGlyKGRpcl9wYXRoOiBzdHJpbmcsIGNiOiBoYW5kbGVyKTogdm9pZCB7XG4gICAgICAgIGxldCBtYXA6IGFueSA9IHt9O1xuICAgICAgICBjYy5sb2FkZXIubG9hZFJlc0RpcihkaXJfcGF0aCwgY2MuUHJlZmFiLCAoZXJyOiBhbnksIHJlc19hcnI6IGFueVtdLCB1cmxzOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIGNjLndhcm4oXCJsb2FkUHJlZmFiT2JqRGlyIGVycm9yXCIsIGRpcl9wYXRoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB1cmxzLmZvckVhY2goKHVybCkgPT4ge1xuICAgICAgICAgICAgICAgIG1hcFt1cmxdID0gY2MuaW5zdGFudGlhdGUoY2MubG9hZGVyLmdldFJlcyh1cmwsIGNjLlByZWZhYikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYi5leGVjKG1hcCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJlbGVhc2UodXJsT3JBc3NldE9yTm9kZTogYW55KTogdm9pZCB7XG4gICAgICAgIGlmICh1cmxPckFzc2V0T3JOb2RlIGluc3RhbmNlb2YgY2MuTm9kZSkge1xuICAgICAgICAgICAgLy/ph4rmlL7oioLngrks5LuO5Zy65pmv5LiK56e76ZmkXG4gICAgICAgICAgICB1cmxPckFzc2V0T3JOb2RlLmRlc3Ryb3koKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8v6YeK5pS+57yT5a2Y5byV55So5ZKM6LWE5rqQ5YaF5a65XG4gICAgICAgICAgICBjYy5sb2FkZXIucmVsZWFzZSh1cmxPckFzc2V0T3JOb2RlKTtcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=