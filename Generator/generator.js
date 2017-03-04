/**
 * Created by Jesse on 17/3/3.
 */
function* creatXHR(options) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);
    xhr.send(null);
    yield (function (resolve,reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (/^2\d{2}$/.test(xhr.status)) {
                    console.log(this.responseText);
                } else {
                    reject(new Error(this.statusText));
                }
            }
        };
    });
}
var ajax = creatXHR({
    method: "get",
    url: "./text"
});
ajax.next().value.then(function (v) {
    console.log(v)
},function (e) {
    console.log(e)
});
// function* gen() {
//     yield function () {
//         console.log(999)
//     };
//     yield function () {
//         console.log(122);
//     };
// }
// var g = gen();
// g.next().value();