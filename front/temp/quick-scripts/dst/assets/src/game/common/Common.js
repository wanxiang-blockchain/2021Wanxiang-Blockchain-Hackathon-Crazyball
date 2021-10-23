
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/src/game/common/Common.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd14442XQN1NY5NBCRMHZBBm', 'Common');
// src/game/common/Common.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.accDiv = exports.accMul = exports.toFixed = exports.formatPrice = void 0;
var formatPrice = function (num, scale, replenish, splitCode) {
    if (scale === void 0) { scale = 4; }
    if (replenish === void 0) { replenish = false; }
    if (splitCode === void 0) { splitCode = ','; }
    var str = exports.toFixed(num, scale, replenish).toString();
    var res = str || '0';
    var dot = '';
    var find = str.indexOf('.');
    if (find !== -1) {
        res = str.substring(0, find);
        dot = str.substring(str.length, find);
    }
    var intSum = res.replace(/\B(?=(?:\d{3})+$)/g, splitCode);
    var ret = intSum + dot;
    return ret;
};
exports.formatPrice = formatPrice;
var toFixed = function (number, scale, replenish, roundOff) {
    if (scale === void 0) { scale = 4; }
    if (replenish === void 0) { replenish = false; }
    if (roundOff === void 0) { roundOff = true; }
    var res = '';
    if (number) {
        var str = "" + number;
        if (str.indexOf('e') > -1 || str.indexOf('E') > -1) {
            var str_1 = number.toFixed(scale + 1);
            res = str_1.substring(0, str_1.length - 1);
        }
        else if (str.indexOf('.') > -1) {
            if (scale === 0) {
                res = str.substring(0, str.indexOf('.'));
            }
            else {
                if (roundOff) {
                    var resArr = res.toString().split('.');
                    if (resArr[1]) {
                        res = str.substring(0, str.indexOf('.') + scale + 1 + 1);
                        res = accDiv(Math.round(exports.accMul(Number(res), Math.pow(10, scale))), Math.pow(10, scale)).toString();
                    }
                    else {
                        res = str.substring(0, str.indexOf('.') + scale + 1);
                    }
                }
                else {
                    res = str.substring(0, str.indexOf('.') + scale + 1);
                }
            }
        }
        else {
            res = str;
        }
    }
    if (replenish) {
        res = res || '0';
        var resArr = res.toString().split('.');
        if (resArr[1]) {
            var diff = scale - resArr[1].length;
            if (diff > 0) {
                var a = [];
                a.length = diff;
                a.fill(0);
                var pushStr = a.join('');
                res = res + pushStr;
            }
        }
        else {
            if (Number(scale)) {
                var a = [];
                a.length = scale;
                a.fill(0);
                var pushStr = a.join('');
                res = res + "." + pushStr;
            }
        }
    }
    return res;
};
exports.toFixed = toFixed;
var accMul = function (arg1, arg2) {
    if (arg1 === void 0) { arg1 = 0; }
    if (arg2 === void 0) { arg2 = 0; }
    var m = 0;
    var s1 = arg1.toString();
    var s2 = arg2.toString();
    try {
        m += s1.split('.')[1].length;
    }
    catch (e) { }
    try {
        m += s2.split('.')[1].length;
    }
    catch (e) { }
    return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
};
exports.accMul = accMul;
function accDiv(arg1, arg2) {
    var t1 = 0;
    var t2 = 0;
    var r1;
    var r2;
    try {
        t1 = arg1.toString().split('.')[1].length;
    }
    catch (e) { }
    try {
        t2 = arg2.toString().split('.')[1].length;
    }
    catch (e) { }
    r1 = Number(arg1.toString().replace('.', ''));
    r2 = Number(arg2.toString().replace('.', ''));
    return (r1 / r2) * Math.pow(10, t2 - t1);
}
exports.accDiv = accDiv;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9zcmMvZ2FtZS9jb21tb24vQ29tbW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFPLElBQU0sV0FBVyxHQUFHLFVBQUMsR0FBRyxFQUFFLEtBQVMsRUFBRSxTQUFpQixFQUFFLFNBQWU7SUFBN0Msc0JBQUEsRUFBQSxTQUFTO0lBQUUsMEJBQUEsRUFBQSxpQkFBaUI7SUFBRSwwQkFBQSxFQUFBLGVBQWU7SUFDNUUsSUFBSSxHQUFHLEdBQUcsZUFBTyxDQUFDLEdBQUcsRUFBRSxLQUFLLEVBQUUsU0FBUyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDcEQsSUFBSSxHQUFHLEdBQUcsR0FBRyxJQUFJLEdBQUcsQ0FBQztJQUNyQixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7SUFDYixJQUFNLElBQUksR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLElBQUksSUFBSSxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ2YsR0FBRyxHQUFHLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdCLEdBQUcsR0FBRyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsSUFBSSxDQUFDLENBQUM7S0FDdkM7SUFDRCxJQUFNLE1BQU0sR0FBRyxHQUFHLENBQUMsT0FBTyxDQUFDLG9CQUFvQixFQUFFLFNBQVMsQ0FBQyxDQUFDO0lBQzVELElBQU0sR0FBRyxHQUFHLE1BQU0sR0FBRyxHQUFHLENBQUM7SUFDekIsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFaVyxRQUFBLFdBQVcsZUFZdEI7QUFFSyxJQUFNLE9BQU8sR0FBRyxVQUFDLE1BQU0sRUFBRSxLQUFTLEVBQUUsU0FBaUIsRUFBRSxRQUFlO0lBQTdDLHNCQUFBLEVBQUEsU0FBUztJQUFFLDBCQUFBLEVBQUEsaUJBQWlCO0lBQUUseUJBQUEsRUFBQSxlQUFl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QUN2RixDQUFDLENBQUM7QUFaWSxRQUFBLE1BQU0sVUFZbEI7QUFFRCxTQUFnQixNQUFNLENBQUMsSUFBSSxFQUFFLElBQUk7SUFDaEMsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDO0lBQ1gsSUFBSSxFQUFFLENBQUM7SUFDUCxJQUFJLEVBQUUsQ0FBQztJQUVQLElBQUk7UUFDRixFQUFFLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUM7S0FDM0M7SUFBQyxPQUFPLENBQUMsRUFBRSxHQUFFO0lBQ2QsSUFBSTtRQUNGLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQztLQUMzQztJQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUU7SUFDZCxFQUFFLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFDOUMsRUFBRSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsT0FBTyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzlDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLEVBQUUsRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0FBQzNDLENBQUM7QUFmQSx3QkFlQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBmb3JtYXRQcmljZSA9IChudW0sIHNjYWxlID0gNCwgcmVwbGVuaXNoID0gZmFsc2UsIHNwbGl0Q29kZSA9ICcsJykgPT4ge1xuICBsZXQgc3RyID0gdG9GaXhlZChudW0sIHNjYWxlLCByZXBsZW5pc2gpLnRvU3RyaW5nKCk7XG4gIGxldCByZXMgPSBzdHIgfHwgJzAnO1xuICBsZXQgZG90ID0gJyc7XG4gIGNvbnN0IGZpbmQgPSBzdHIuaW5kZXhPZignLicpO1xuICBpZiAoZmluZCAhPT0gLTEpIHtcbiAgICByZXMgPSBzdHIuc3Vic3RyaW5nKDAsIGZpbmQpO1xuICAgIGRvdCA9IHN0ci5zdWJzdHJpbmcoc3RyLmxlbmd0aCwgZmluZCk7XG4gIH1cbiAgY29uc3QgaW50U3VtID0gcmVzLnJlcGxhY2UoL1xcQig/PSg/OlxcZHszfSkrJCkvZywgc3BsaXRDb2RlKTtcbiAgY29uc3QgcmV0ID0gaW50U3VtICsgZG90O1xuICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGNvbnN0IHRvRml4ZWQgPSAobnVtYmVyLCBzY2FsZSA9IDQsIHJlcGxlbmlzaCA9IGZhbHNlLCByb3VuZE9mZiA9IHRydWUpID0+IHtcbiAgbGV0IHJlcyA9ICcnO1xuICBpZiAobnVtYmVyKSB7XG4gICAgbGV0IHN0ciA9IGAke251bWJlcn1gO1xuICAgIGlmIChzdHIuaW5kZXhPZignZScpID4gLTEgfHwgc3RyLmluZGV4T2YoJ0UnKSA+IC0xKSB7XG4gICAgICBsZXQgc3RyID0gbnVtYmVyLnRvRml4ZWQoc2NhbGUgKyAxKTtcbiAgICAgIHJlcyA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmxlbmd0aCAtIDEpO1xuICAgIH0gZWxzZSBpZiAoc3RyLmluZGV4T2YoJy4nKSA+IC0xKSB7XG4gICAgICBpZiAoc2NhbGUgPT09IDApIHtcbiAgICAgICAgcmVzID0gc3RyLnN1YnN0cmluZygwLCBzdHIuaW5kZXhPZignLicpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChyb3VuZE9mZikge1xuICAgICAgICAgIGxldCByZXNBcnIgPSByZXMudG9TdHJpbmcoKS5zcGxpdCgnLicpO1xuICAgICAgICAgIGlmIChyZXNBcnJbMV0pIHtcbiAgICAgICAgICAgIHJlcyA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmluZGV4T2YoJy4nKSArIHNjYWxlICsgMSArIDEpO1xuICAgICAgICAgICAgcmVzID0gYWNjRGl2KE1hdGgucm91bmQoYWNjTXVsKE51bWJlcihyZXMpLCBNYXRoLnBvdygxMCwgc2NhbGUpKSksIE1hdGgucG93KDEwLCBzY2FsZSkpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlcyA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmluZGV4T2YoJy4nKSArIHNjYWxlICsgMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJlcyA9IHN0ci5zdWJzdHJpbmcoMCwgc3RyLmluZGV4T2YoJy4nKSArIHNjYWxlICsgMSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVzID0gc3RyO1xuICAgIH1cbiAgfVxuICBpZiAocmVwbGVuaXNoKSB7XG4gICAgcmVzID0gcmVzIHx8ICcwJztcbiAgICBsZXQgcmVzQXJyID0gcmVzLnRvU3RyaW5nKCkuc3BsaXQoJy4nKTtcbiAgICBpZiAocmVzQXJyWzFdKSB7XG4gICAgICBsZXQgZGlmZiA9IHNjYWxlIC0gcmVzQXJyWzFdLmxlbmd0aDtcbiAgICAgIGlmIChkaWZmID4gMCkge1xuICAgICAgICBsZXQgYSA9IFtdO1xuICAgICAgICBhLmxlbmd0aCA9IGRpZmY7XG4gICAgICAgIGEuZmlsbCgwKTtcbiAgICAgICAgbGV0IHB1c2hTdHIgPSBhLmpvaW4oJycpO1xuICAgICAgICByZXMgPSByZXMgKyBwdXNoU3RyO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAoTnVtYmVyKHNjYWxlKSkge1xuICAgICAgICBsZXQgYSA9IFtdO1xuICAgICAgICBhLmxlbmd0aCA9IHNjYWxlO1xuICAgICAgICBhLmZpbGwoMCk7XG4gICAgICAgIGxldCBwdXNoU3RyID0gYS5qb2luKCcnKTtcbiAgICAgICAgcmVzID0gYCR7cmVzfS4ke3B1c2hTdHJ9YDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzO1xufTtcblxuIGV4cG9ydCBjb25zdCBhY2NNdWwgPSAoYXJnMSA9IDAsIGFyZzIgPSAwKSA9PiB7XG4gIGxldCBtID0gMDtcbiAgY29uc3QgczEgPSBhcmcxLnRvU3RyaW5nKCk7XG4gIGNvbnN0IHMyID0gYXJnMi50b1N0cmluZygpO1xuXG4gIHRyeSB7XG4gICAgbSArPSBzMS5zcGxpdCgnLicpWzFdLmxlbmd0aDtcbiAgfSBjYXRjaCAoZSkge31cbiAgdHJ5IHtcbiAgICBtICs9IHMyLnNwbGl0KCcuJylbMV0ubGVuZ3RoO1xuICB9IGNhdGNoIChlKSB7fVxuICByZXR1cm4gKE51bWJlcihzMS5yZXBsYWNlKCcuJywgJycpKSAqIE51bWJlcihzMi5yZXBsYWNlKCcuJywgJycpKSkgLyBNYXRoLnBvdygxMCwgbSk7XG59O1xuXG4gZXhwb3J0IGZ1bmN0aW9uIGFjY0RpdihhcmcxLCBhcmcyKSB7XG4gIGxldCB0MSA9IDA7XG4gIGxldCB0MiA9IDA7XG4gIGxldCByMTtcbiAgbGV0IHIyO1xuXG4gIHRyeSB7XG4gICAgdDEgPSBhcmcxLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHRyeSB7XG4gICAgdDIgPSBhcmcyLnRvU3RyaW5nKCkuc3BsaXQoJy4nKVsxXS5sZW5ndGg7XG4gIH0gY2F0Y2ggKGUpIHt9XG4gIHIxID0gTnVtYmVyKGFyZzEudG9TdHJpbmcoKS5yZXBsYWNlKCcuJywgJycpKTtcbiAgcjIgPSBOdW1iZXIoYXJnMi50b1N0cmluZygpLnJlcGxhY2UoJy4nLCAnJykpO1xuICByZXR1cm4gKHIxIC8gcjIpICogTWF0aC5wb3coMTAsIHQyIC0gdDEpO1xufSJdfQ==