"use strict";
cc._RF.push(module, '9dcebZ21S1CcoCfjaM6tclf', 'RandomUtil');
// src/common/random/RandomUtil.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.RandomUtil = exports.RandomSeedType = void 0;
var SingletonClass_1 = require("../base/SingletonClass");
var RandomSeedType;
(function (RandomSeedType) {
    RandomSeedType[RandomSeedType["UNDEFINED"] = 0] = "UNDEFINED";
})(RandomSeedType = exports.RandomSeedType || (exports.RandomSeedType = {}));
var RandomUtil = /** @class */ (function (_super) {
    __extends(RandomUtil, _super);
    function RandomUtil() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._seeds = [];
        _this._seedIndex = [];
        _this._selectedIndexes = [];
        _this._randomSeed = '0123456789abcdef';
        return _this;
    }
    RandomUtil.ins = function () {
        return _super.ins.call(this);
    };
    RandomUtil.prototype.init = function (randomSeed) {
        if (randomSeed === void 0) { randomSeed = '0123456789abcdef'; }
        this._randomSeed = randomSeed;
        var keysAll = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        this._seeds = [];
        this._selectedIndexes = [];
        this._seedIndex = [];
        for (var _i = 0, keysAll_1 = keysAll; _i < keysAll_1.length; _i++) {
            var key = keysAll_1[_i];
            this.resetSeed(key);
        }
    };
    RandomUtil.prototype.resetSeed = function (randomSeedType) {
        this._seeds[randomSeedType] = [];
        this._selectedIndexes[randomSeedType] = [];
        this._seedIndex[randomSeedType] = 0;
        for (var i = 0; i < this._randomSeed.length; i++) {
            var fix = parseInt(this._randomSeed[i], 36) || 0;
            fix = (9301 * fix + 49297) % (10485763) || 0;
            this._seeds[randomSeedType].push(fix);
        }
    };
    RandomUtil.prototype.randomNum = function (min, max, randomSeedType) {
        if (randomSeedType === void 0) { randomSeedType = RandomSeedType.UNDEFINED; }
        if (min > max)
            max = min;
        var seedIndex = this._seedIndex[randomSeedType] % this._randomSeed.length;
        var ret = min + (this._seeds[randomSeedType][seedIndex]) % (max - min + 1);
        this._seeds[randomSeedType][seedIndex] = (9301 * this._seeds[randomSeedType][seedIndex] + 49297) % (10485763) || 0;
        this._seedIndex[randomSeedType]++;
        this._selectedIndexes[randomSeedType].push(ret);
        return ret;
    };
    RandomUtil.prototype.randomNumArray = function (min, max, count, randomSeedType) {
        if (randomSeedType === void 0) { randomSeedType = RandomSeedType.UNDEFINED; }
        if (min > max)
            max = min;
        var ret = [];
        if (max - min + 1 < count) {
            count = max - min + 1;
        }
        for (var i = 0; i < count;) {
            var randomNum = this.randomNum(min, max, randomSeedType);
            if (ret.indexOf(randomNum) < 0) {
                ret.push(randomNum);
                i++;
            }
        }
        return ret;
    };
    /**百分比概率 */
    RandomUtil.prototype.getPercentProbability = function (percent, randomSeedType) {
        if (randomSeedType === void 0) { randomSeedType = RandomSeedType.UNDEFINED; }
        var randomNum = this.randomNum(1, 100, randomSeedType);
        // egret.log("getPercentProbability", percent, randomNum)
        return (percent >= randomNum);
    };
    return RandomUtil;
}(SingletonClass_1.default));
exports.RandomUtil = RandomUtil;

cc._RF.pop();