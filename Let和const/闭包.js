/**
 * Created by Jesse on 17/3/3.
 */
var oUl = document.getElementById("oUl"),
    oLi = oUl.getElementsByTagName("li");
/**
 * 闭包
 */
for (var i = 0, l = oLi.length; i < l; i++) {
    (function (j) {
        oLi[j].onclick = function () {
            alert(j);
        }
    })(i);
}
