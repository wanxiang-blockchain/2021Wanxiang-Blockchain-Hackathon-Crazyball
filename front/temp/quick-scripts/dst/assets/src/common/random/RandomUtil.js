
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/common/random/RandomUtil.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvY29tbW9uL3JhbmRvbS9SYW5kb21VdGlsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5REFBb0Q7QUFFcEQsSUFBWSxjQUVYO0FBRkQsV0FBWSxjQUFjO0lBQ3RCLDZEQUFhLENBQUE7QUFDakIsQ0FBQyxFQUZXLGNBQWMsR0FBZCxzQkFBYyxLQUFkLHNCQUFjLFFBRXpCO0FBRUQ7SUFBZ0MsOEJBQWM7SUFBOUM7UUFBQSxxRUFxRUM7UUFoRVcsWUFBTSxHQUFlLEVBQUUsQ0FBQTtRQUN2QixnQkFBVSxHQUFhLEVBQUUsQ0FBQztRQUMxQixzQkFBZ0IsR0FBZSxFQUFFLENBQUE7UUFDakMsaUJBQVcsR0FBRyxrQkFBa0IsQ0FBQTs7SUE2RDVDLENBQUM7SUFwRWlCLGNBQUcsR0FBakI7UUFDSSxPQUFPLE9BQU0sR0FBRyxXQUFnQixDQUFBO0lBQ3BDLENBQUM7SUFPTSx5QkFBSSxHQUFYLFVBQVksVUFBdUM7UUFBdkMsMkJBQUEsRUFBQSwrQkFBdUM7UUFDL0MsSUFBSSxDQUFDLFdBQVcsR0FBRyxVQUFVLENBQUM7UUFFOUIsSUFBTSxPQUFPLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUE7UUFDbEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLGdCQUFnQixHQUFHLEVBQUUsQ0FBQztRQUMzQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixLQUFrQixVQUFPLEVBQVAsbUJBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU8sRUFBRTtZQUF0QixJQUFNLEdBQUcsZ0JBQUE7WUFDVixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3RCO0lBQ0wsQ0FBQztJQUVNLDhCQUFTLEdBQWhCLFVBQWlCLGNBQThCO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEdBQUcsRUFBRSxDQUFBO1FBQ2hDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxjQUFjLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLENBQUM7UUFFcEMsS0FBSyxJQUFJLENBQUMsR0FBVyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3RELElBQUksR0FBRyxHQUFXLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6RCxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzdDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1NBQ3hDO0lBQ0wsQ0FBQztJQUVNLDhCQUFTLEdBQWhCLFVBQWlCLEdBQVcsRUFBRSxHQUFXLEVBQUUsY0FBeUQ7UUFBekQsK0JBQUEsRUFBQSxpQkFBaUMsY0FBYyxDQUFDLFNBQVM7UUFDaEcsSUFBSSxHQUFHLEdBQUcsR0FBRztZQUNULEdBQUcsR0FBRyxHQUFHLENBQUE7UUFDYixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWMsQ0FBQyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFBO1FBQzNFLElBQU0sR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUE7UUFDNUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQUMsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ2xILElBQUksQ0FBQyxVQUFVLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsY0FBYyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQy9DLE9BQU8sR0FBRyxDQUFBO0lBQ2QsQ0FBQztJQUVNLG1DQUFjLEdBQXJCLFVBQXNCLEdBQVcsRUFBRSxHQUFXLEVBQUUsS0FBYSxFQUFFLGNBQXlEO1FBQXpELCtCQUFBLEVBQUEsaUJBQWlDLGNBQWMsQ0FBQyxTQUFTO1FBQ3BILElBQUksR0FBRyxHQUFHLEdBQUc7WUFDVCxHQUFHLEdBQUcsR0FBRyxDQUFBO1FBQ2IsSUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFBO1FBQ2QsSUFBSSxHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsR0FBRyxLQUFLLEVBQUU7WUFDdkIsS0FBSyxHQUFHLEdBQUcsR0FBRyxHQUFHLEdBQUcsQ0FBQyxDQUFBO1NBQ3hCO1FBQ0QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssR0FBRztZQUN4QixJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsY0FBYyxDQUFDLENBQUE7WUFDMUQsSUFBSSxHQUFHLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDNUIsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtnQkFDbkIsQ0FBQyxFQUFFLENBQUM7YUFDUDtTQUNKO1FBQ0QsT0FBTyxHQUFHLENBQUE7SUFDZCxDQUFDO0lBRUQsV0FBVztJQUNKLDBDQUFxQixHQUE1QixVQUE2QixPQUFlLEVBQUUsY0FBeUQ7UUFBekQsK0JBQUEsRUFBQSxpQkFBaUMsY0FBYyxDQUFDLFNBQVM7UUFDbkcsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxFQUFFLGNBQWMsQ0FBQyxDQUFBO1FBQ3hELHlEQUF5RDtRQUN6RCxPQUFPLENBQUMsT0FBTyxJQUFJLFNBQVMsQ0FBQyxDQUFBO0lBQ2pDLENBQUM7SUFFTCxpQkFBQztBQUFELENBckVBLEFBcUVDLENBckUrQix3QkFBYyxHQXFFN0M7QUFyRVksZ0NBQVUiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgU2luZ2xldG9uQ2xhc3MgZnJvbSBcIi4uL2Jhc2UvU2luZ2xldG9uQ2xhc3NcIjtcblxuZXhwb3J0IGVudW0gUmFuZG9tU2VlZFR5cGUge1xuICAgIFVOREVGSU5FRCA9IDAsXG59XG5cbmV4cG9ydCBjbGFzcyBSYW5kb21VdGlsIGV4dGVuZHMgU2luZ2xldG9uQ2xhc3Mge1xuICAgIHB1YmxpYyBzdGF0aWMgaW5zKCkge1xuICAgICAgICByZXR1cm4gc3VwZXIuaW5zKCkgYXMgUmFuZG9tVXRpbFxuICAgIH1cblxuICAgIHByaXZhdGUgX3NlZWRzOiBudW1iZXJbXVtdID0gW11cbiAgICBwcml2YXRlIF9zZWVkSW5kZXg6IG51bWJlcltdID0gW107XG4gICAgcHJpdmF0ZSBfc2VsZWN0ZWRJbmRleGVzOiBudW1iZXJbXVtdID0gW11cbiAgICBwcml2YXRlIF9yYW5kb21TZWVkID0gJzAxMjM0NTY3ODlhYmNkZWYnXG5cbiAgICBwdWJsaWMgaW5pdChyYW5kb21TZWVkOiBzdHJpbmcgPSAnMDEyMzQ1Njc4OWFiY2RlZicpIHtcbiAgICAgICAgdGhpcy5fcmFuZG9tU2VlZCA9IHJhbmRvbVNlZWQ7XG5cbiAgICAgICAgY29uc3Qga2V5c0FsbCA9IFswLCAxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5LCAxMF1cbiAgICAgICAgdGhpcy5fc2VlZHMgPSBbXTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleGVzID0gW107XG4gICAgICAgIHRoaXMuX3NlZWRJbmRleCA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzQWxsKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2V0U2VlZChrZXkpXG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBwdWJsaWMgcmVzZXRTZWVkKHJhbmRvbVNlZWRUeXBlOiBSYW5kb21TZWVkVHlwZSkge1xuICAgICAgICB0aGlzLl9zZWVkc1tyYW5kb21TZWVkVHlwZV0gPSBbXVxuICAgICAgICB0aGlzLl9zZWxlY3RlZEluZGV4ZXNbcmFuZG9tU2VlZFR5cGVdID0gW107XG4gICAgICAgIHRoaXMuX3NlZWRJbmRleFtyYW5kb21TZWVkVHlwZV0gPSAwO1xuXG4gICAgICAgIGZvciAobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9yYW5kb21TZWVkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgZml4OiBudW1iZXIgPSBwYXJzZUludCh0aGlzLl9yYW5kb21TZWVkW2ldLCAzNikgfHwgMDtcbiAgICAgICAgICAgIGZpeCA9ICg5MzAxICogZml4ICsgNDkyOTcpICUgKDEwNDg1NzYzKSB8fCAwO1xuICAgICAgICAgICAgdGhpcy5fc2VlZHNbcmFuZG9tU2VlZFR5cGVdLnB1c2goZml4KVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgcHVibGljIHJhbmRvbU51bShtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIHJhbmRvbVNlZWRUeXBlOiBSYW5kb21TZWVkVHlwZSA9IFJhbmRvbVNlZWRUeXBlLlVOREVGSU5FRCk6IG51bWJlciB7XG4gICAgICAgIGlmIChtaW4gPiBtYXgpXG4gICAgICAgICAgICBtYXggPSBtaW5cbiAgICAgICAgY29uc3Qgc2VlZEluZGV4ID0gdGhpcy5fc2VlZEluZGV4W3JhbmRvbVNlZWRUeXBlXSAlIHRoaXMuX3JhbmRvbVNlZWQubGVuZ3RoXG4gICAgICAgIGNvbnN0IHJldCA9IG1pbiArICh0aGlzLl9zZWVkc1tyYW5kb21TZWVkVHlwZV1bc2VlZEluZGV4XSkgJSAobWF4IC0gbWluICsgMSlcbiAgICAgICAgdGhpcy5fc2VlZHNbcmFuZG9tU2VlZFR5cGVdW3NlZWRJbmRleF0gPSAoOTMwMSAqIHRoaXMuX3NlZWRzW3JhbmRvbVNlZWRUeXBlXVtzZWVkSW5kZXhdICsgNDkyOTcpICUgKDEwNDg1NzYzKSB8fCAwXG4gICAgICAgIHRoaXMuX3NlZWRJbmRleFtyYW5kb21TZWVkVHlwZV0rKztcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleGVzW3JhbmRvbVNlZWRUeXBlXS5wdXNoKHJldClcbiAgICAgICAgcmV0dXJuIHJldFxuICAgIH1cblxuICAgIHB1YmxpYyByYW5kb21OdW1BcnJheShtaW46IG51bWJlciwgbWF4OiBudW1iZXIsIGNvdW50OiBudW1iZXIsIHJhbmRvbVNlZWRUeXBlOiBSYW5kb21TZWVkVHlwZSA9IFJhbmRvbVNlZWRUeXBlLlVOREVGSU5FRCk6IG51bWJlcltdIHtcbiAgICAgICAgaWYgKG1pbiA+IG1heClcbiAgICAgICAgICAgIG1heCA9IG1pblxuICAgICAgICBjb25zdCByZXQgPSBbXVxuICAgICAgICBpZiAobWF4IC0gbWluICsgMSA8IGNvdW50KSB7XG4gICAgICAgICAgICBjb3VudCA9IG1heCAtIG1pbiArIDFcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50Oykge1xuICAgICAgICAgICAgY29uc3QgcmFuZG9tTnVtID0gdGhpcy5yYW5kb21OdW0obWluLCBtYXgsIHJhbmRvbVNlZWRUeXBlKVxuICAgICAgICAgICAgaWYgKHJldC5pbmRleE9mKHJhbmRvbU51bSkgPCAwKSB7XG4gICAgICAgICAgICAgICAgcmV0LnB1c2gocmFuZG9tTnVtKVxuICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmV0XG4gICAgfVxuXG4gICAgLyoq55m+5YiG5q+U5qaC546HICovXG4gICAgcHVibGljIGdldFBlcmNlbnRQcm9iYWJpbGl0eShwZXJjZW50OiBudW1iZXIsIHJhbmRvbVNlZWRUeXBlOiBSYW5kb21TZWVkVHlwZSA9IFJhbmRvbVNlZWRUeXBlLlVOREVGSU5FRCk6IGJvb2xlYW4ge1xuICAgICAgICBjb25zdCByYW5kb21OdW0gPSB0aGlzLnJhbmRvbU51bSgxLCAxMDAsIHJhbmRvbVNlZWRUeXBlKVxuICAgICAgICAvLyBlZ3JldC5sb2coXCJnZXRQZXJjZW50UHJvYmFiaWxpdHlcIiwgcGVyY2VudCwgcmFuZG9tTnVtKVxuICAgICAgICByZXR1cm4gKHBlcmNlbnQgPj0gcmFuZG9tTnVtKVxuICAgIH1cblxufSJdfQ==