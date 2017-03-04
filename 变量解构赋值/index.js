/**
 * Created by Jesse on 17/3/3.
 */
/**
 * 数组
 */
let [a,b,c] = [1,2,3];
console.log(a,b,c);
[a,b] = [b,a];
console.log(a,b);
/**
 * 对象
 */
var obj ={
    foo:"foo",bar:"bar"
};

let {foo,bar} = obj;
console.log(foo,bar);
//变量名和属性名不一致
let {aaa:name,bbbb:age} = {aaa:"Memebox",bbbb:4};
console.log(name,age);
/**
 * 字符串
 */
let [d,f,g]="dfg";
console.log(d,f,g);
/**
 * 函数
 * @param x
 * @param y
 */
function add({x=12,y=120}) {
    console.log(x+y);
}
add({x:100});
