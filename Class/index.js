/**
 * Created by Jesse on 17/3/3.
 */
/**
 * ES6继承
 */
class Person{
    constructor(name){
        this.name = name;
    }
    getName(){
        console.log(this.name);
    }
}
var p = new Person("memebox");
p.getName();
class Person1 extends Person{
    // constructor(name,age){
    //     super(name); //调用父类的constructor 如果不用super，子类不能用constructor
    //     this.age = age;
    // }
    static myStaticProp = 42;
    getAge(){
        this.age = 10;
        // console.log(this.age);
    }
}
Person1.age=100;
var p1 = new Person1();
console.log(p1.age)
// p1.getAge();
console.log(Person1.age);
// p1.getName();
// p3.getThis();