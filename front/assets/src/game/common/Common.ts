export const formatPrice = (num, scale = 4, replenish = false, splitCode = ',') => {
  let str = toFixed(num, scale, replenish).toString();
  let res = str || '0';
  let dot = '';
  const find = str.indexOf('.');
  if (find !== -1) {
    res = str.substring(0, find);
    dot = str.substring(str.length, find);
  }
  const intSum = res.replace(/\B(?=(?:\d{3})+$)/g, splitCode);
  const ret = intSum + dot;
  return ret;
};

export const toFixed = (number, scale = 4, replenish = false, roundOff = true) => {
  let res = '';
  if (number) {
    let str = `${number}`;
    if (str.indexOf('e') > -1 || str.indexOf('E') > -1) {
      let str = number.toFixed(scale + 1);
      res = str.substring(0, str.length - 1);
    } else if (str.indexOf('.') > -1) {
      if (scale === 0) {
        res = str.substring(0, str.indexOf('.'));
      } else {
        if (roundOff) {
          let resArr = res.toString().split('.');
          if (resArr[1]) {
            res = str.substring(0, str.indexOf('.') + scale + 1 + 1);
            res = accDiv(Math.round(accMul(Number(res), Math.pow(10, scale))), Math.pow(10, scale)).toString();
          } else {
            res = str.substring(0, str.indexOf('.') + scale + 1);
          }
        } else {
          res = str.substring(0, str.indexOf('.') + scale + 1);
        }
      }
    } else {
      res = str;
    }
  }
  if (replenish) {
    res = res || '0';
    let resArr = res.toString().split('.');
    if (resArr[1]) {
      let diff = scale - resArr[1].length;
      if (diff > 0) {
        let a = [];
        a.length = diff;
        a.fill(0);
        let pushStr = a.join('');
        res = res + pushStr;
      }
    } else {
      if (Number(scale)) {
        let a = [];
        a.length = scale;
        a.fill(0);
        let pushStr = a.join('');
        res = `${res}.${pushStr}`;
      }
    }
  }

  return res;
};

 export const accMul = (arg1 = 0, arg2 = 0) => {
  let m = 0;
  const s1 = arg1.toString();
  const s2 = arg2.toString();

  try {
    m += s1.split('.')[1].length;
  } catch (e) {}
  try {
    m += s2.split('.')[1].length;
  } catch (e) {}
  return (Number(s1.replace('.', '')) * Number(s2.replace('.', ''))) / Math.pow(10, m);
};

 export function accDiv(arg1, arg2) {
  let t1 = 0;
  let t2 = 0;
  let r1;
  let r2;

  try {
    t1 = arg1.toString().split('.')[1].length;
  } catch (e) {}
  try {
    t2 = arg2.toString().split('.')[1].length;
  } catch (e) {}
  r1 = Number(arg1.toString().replace('.', ''));
  r2 = Number(arg2.toString().replace('.', ''));
  return (r1 / r2) * Math.pow(10, t2 - t1);
}