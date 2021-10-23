"use strict";
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