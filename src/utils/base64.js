/* global BigInt */

const BASE64_STR =
  "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_";

export const encode = (nStr) => {
  let num = BigInt(nStr);
  let strList = [];
  while (num !== 0n) {
    let remainder = num % 64n;
    strList.unshift(BASE64_STR.charAt(parseInt(remainder)));
    num = num / 64n;
  }
  return strList.join("");
};

export const decode = (str) => {
  let strList = str.split("").reverse();
  let exponent = 0,
    total = 0n;
  for (let i of strList) {
    let r = BigInt(BASE64_STR.indexOf(i));
    for (let j = 0; j < exponent; j++) r *= 64n;
    total += r;
    exponent++;
  }
  return total.toString();
};
