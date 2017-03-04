/**
 * Created by Jesse on 17/3/3.
 */
var oUl = document.getElementById("oUl"),
    oLi = oUl.getElementsByTagName("li");
/**
 * 自定义属性
 */
for(var i = 0,l = oLi.length;i<l;i++){
    oLi[i].index = i;
    oLi[i].onclick = function () {
        alert(this.index);
    }
}
