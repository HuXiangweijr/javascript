window.onload = function(){
    var scroll = document.getElementById("scroll");
    var ul = scroll.children[0];
    var num = 0;
    var timer = null;
    timer = setInterval(autoPlay,20);
    function autoPlay(){
        num--;
        num <= -1200 ? num = 0 : num;
        ul.style.left = num + "px";
    }
    scroll.onmouseover = function(){
        clearInterval(timer);
    }
    scroll.onmouseout = function(){
        timer = setInterval(autoPlay,20);
    }
}
