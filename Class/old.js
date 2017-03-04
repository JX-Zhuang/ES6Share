/**
 * Created by Jesse on 17/3/3.
 */
/**
 * javascript继承
 * @param name
 * @constructor
 */
function Person(name) {
    this.name = name;
}
Person.prototype.getName = function () {
    console.log(this.name);
};
var p = new Person("memebox");
p.getName();
/**
 * 原型继承
 * @param name
 * @constructor
 */
function Person1() {
}
Person1.prototype = new Person();
Person1.prototype.name = "原型继承";
var p1 = new Person1();
p1.getName();
/**
 * call继承:只能继承私有属性和方法，不能继承父类原型上的属性和方法
 * @constructor
 */
function Person2(name) {
    Person.call(this, name);
}
var p2 = new Person2("call继承");
console.log(p2);
/**
 * 冒充对象
 * @constructor
 */
function Person3(name) {
    var temp = new Person(name);
    for (var key in temp) {
        this[key] = temp[key];
    }
    temp = null;
}
var p3 = new Person3("冒充对象继承");
p3.getName();
/**
 * 混合模式继承
 */
function Person4(name) {
    Person.call(this,name);
}
Person4.prototype = new Person;
Person4.prototype.constructor = Person4;
var p4 = new Person4("混合模式继承");
p4.getName();
/**
 * 寄生组合式继承
 * @constructor
 */
function Person5(name) {
    Person.call(this,name);
}
Person5.prototype = Object.create(Person.prototype);
Person5.prototype.constructor = Person5;
var p5 = new Person5("寄生组合式继承");
p5.getName();
/**
 * __proto__继承
 * @constructor
 */
// function Person6() {
//
// }
// Person6.__proto__ = Person.__proto__;
// var p6 = new Person6("__proto__继承");
// console.log(p6);