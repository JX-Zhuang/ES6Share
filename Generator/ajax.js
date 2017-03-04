/**
 * Created by Jesse on 17/3/3.
 */
function creatXHR(options) {
    var xhr = new XMLHttpRequest();
    xhr.open(options.method, options.url);
    xhr.send(null);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (/^2\d{2}$/.test(xhr.status)) {
                options.success(this.responseText);
            } else {
                options.error( new Error(this.statusText));
            }
        }
    };
}