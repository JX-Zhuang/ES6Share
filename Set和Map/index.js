/**
 * Created by Jesse on 17/3/3.
 */
/**
 * 没有重复
 * @type {Set}
 */
var set = new Set([1,2,2,2,3,4]);
set.add(5);
set.add(1);
console.log(set);
/**
 * key->value
 * @type {Map}
 */
var map = new Map([
    ["name","Memebox"],
    ["title","全球第一韩妆电商"]
]);
/**
 * get set
 */
console.log(map.get("name"));
console.log(map.set("age",4));