// 页面加载完毕，开始执行
window.onload = function(){
    // 获取最大的盒子
    var scroll = document.getElementById("scroll");、
    // 获取最大盒子的子元素
    var ul = scroll.children[0];
    // 往左边走的轮播数值
    var num = 0;
    // 设置定时器
    var timer = null;
    timer = setInterval(autoPlay,20);
    // 定义轮播组件
    function autoPlay(){
        num--;
        num <= -scroll.offsetWidth * 2 ? num = 0 : num;
        ul.style.left = num + "px";
    }
    // 鼠标滑过清除自动轮播定时器
    scroll.onmouseover = function(){
        clearInterval(timer);
    }
    // 鼠标离开，开始定时器，轮播
    scroll.onmouseout = function(){
        timer = setInterval(autoPlay,20);
    }
}
