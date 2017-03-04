/**
 * Created by Jesse on 17/3/3.
 */
var obj = new Proxy({},{
    get:function () {
        console.log(arguments);
        return "memebox";
    },
    set:function () {
        console.log(arguments);
        return "box";
    }
});
console.log(obj.a);