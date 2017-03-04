/**
 * Created by Jesse on 17/3/3.
 */
/**
 * ...运算符：类数组转化成数组
 */
console.log([...document.getElementsByTagName("div")]);
var ary = [...document.getElementsByTagName("div")];
ary.push(999)