/**
 * Created by Jesse on 17/3/3.
 */
function creatXHR(options) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url, true);
    xhr.send(null);
    return new Promise(function (reslove, reject) {
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4) {
                if (/^2\d{2}$/.test(xhr.status)) {
                    reslove(this.responseText);
                } else {
                    reject(new Error(this.statusText));
                }
            }
        }
    });
}
// creatXHR({
//     method: "get",
//     url: "./text"
// }).then(function (value) {
//     console.log(value);
// }, function (e) {
//     console.log(e);
// });
creatXHR({
    method: "get",
    url: "./text"
}).then(function (value) {
    console.log(value);
    return creatXHR({
        method: "get",
        url: "./textCopy"
    });
}, function (e) {
    console.log(e);
}).then(function (value) {
    console.log(value);
}, function (e) {
    console.log(e);
});