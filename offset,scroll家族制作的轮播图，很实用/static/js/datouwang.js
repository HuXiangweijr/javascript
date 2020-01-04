// 时间，30毫秒动一次
var speed11 = 30;
// 获取最大的盒子
var tab_11 = document.getElementById("demo_e");
// 获取第一个ul
var tab1_21 = document.getElementById("demo2_2");
// 获取第二个ul
var tab2_31 = document.getElementById("demo2_3");
// 将第一个ul和第二个ul的子标签盒子互换位置
tab2_31.innerHTML = tab1_21.innerHTML;

function Marquee11() {
    // 判断第二个ul的总宽度 - 最大盒子的左水平偏移的值是否小于等于0
    if (tab2_31.offsetWidth - tab_11.scrollLeft <= 0) {
        // 如果小于等于0，那么最大的盒子的左水平偏移值减去第一个盒子的宽度
        tab_11.scrollLeft -= tab1_21.offsetWidth
    }else {
        // 如果不小于等于0，那么最大的盒子的左水平偏移继续自加
        tab_11.scrollLeft++;
        console.log(tab_11.scrollLeft++);
    }
}

var MyMar11 = setInterval(Marquee11, speed11);
tab_11.onmouseover = function(){
    clearInterval(MyMar11);
}
tab_11.onmouseout = function(){
    MyMar11 = setInterval(Marquee11, speed11);
}