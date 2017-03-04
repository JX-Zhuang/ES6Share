/**
 * Created by Jesse on 17/3/3.
 */
var oUl = document.getElementById("oUl"),
    oLi = oUl.getElementsByTagName("li");
/**
 * 局部变量
 */
for(let i = 0,l = oLi.length;i<l;i++){
    oLi[i].onclick = function () {
        alert(i);
    }
}
