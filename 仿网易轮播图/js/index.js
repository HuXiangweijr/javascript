// 页面加载完毕后，开始执行
window.onload = function () {
    function $(id) { return document.getElementById(id); }
    // 获取最大的盒子
    var js_slider = $("js_slider");
    // 获取滚动图片的父亲
    var slider_main_block = $("slider_main_block");
    // 获取所有的图片
    var imgs = slider_main_block.children;
    // 获取所有按钮的父亲
    var slider_ctrl = $("slider_ctrl");

    // 生成span按钮
    for (var i = 0; i < imgs.length; i++) {
        // 命名变量span用来接收
        var span = document.createElement("span");
        // 给生成的span添加类名
        span.className = "slider-ctrl-con";
        // 给生成的span添加序列号
        span.innerHTML = imgs.length - i;
        // 将生成的span插入到两个按钮中间
        slider_ctrl.insertBefore(span, slider_ctrl.children[1]);
    }

    // 获取所有的span
    var spans = slider_ctrl.children;
    // 给第1个span添加类名
    spans[1].setAttribute("class", "slider-ctrl-con current");
    // 获取最大盒子的宽度
    var scrollWidth = js_slider.clientWidth;

    // 开始循环图片，第一个留下，其余的都走到310的位置上
    for (var i = 1; i < imgs.length; i++) {
        imgs[i].style.left = scrollWidth + "px";
    }

    // 命名变量iNow用来控制播放张数
    var iNow = 0;
    // 遍历span
    for (var k in spans) {
        spans[k].onclick = function () {
            // 判断span是左边的还是右边的
            if (this.className == "slider-ctrl-prev") {
                right();
            } else if (this.className == "slider-ctrl-next") {
                left();
            } else {
                // 获取下面span的当前索引号
                var that = this.innerHTML - 1;
                // 判断span的方向，是后面的还是前面的，如果大于就是后面的，那么图片从后面出来
                if (that > iNow) {
                    // 图片缓缓从当前视觉框走向左边
                    animate(imgs[iNow], { left: -scrollWidth });
                    // 当前图片跟着span一起出来
                    imgs[that].style.left = scrollWidth + "px";
                    // 当前图片跟着span一起缓缓走到视觉框中
                    animate(imgs[that], { left: 0});
                // 判断span的方向，是后面的还是前面的，如果小于就是前面的，那么图片从前面出来
                } else if (that < iNow) {
                    // 图片缓缓从当前视觉框走向右边
                    animate(imgs[iNow], { left: scrollWidth });
                    // 当前图片跟着span一起出来
                    imgs[that].style.left = -scrollWidth + "px";
                    // 当前图片跟着span一起缓缓走到视觉框中
                    animate(imgs[that], { left: 0});
                }
                // 当点击下方的span按钮时，不论图片走到哪一张，在点击后，都要回到当前那一张
                iNow = that;
                // 图片缓缓进入视觉框
                animate(imgs[iNow], { left: 0 });
                spanRight();
            }
        }
    }

    function right(){
        // 点击左边按钮时，图片会缓缓走到右侧位置。
        animate(imgs[iNow], { left: scrollWidth });
        /* 
            iNow会循环递减，图片的总数量是6张，判断iNow的循环递减数量是否小于0个，
            如果小于0，就从图片的总数量-1开始走，也就是第5张，如果不小于0，就继续走当前的图片
        */
        --iNow < 0 ? iNow = imgs.length - 1 : iNow;
        imgs[iNow].style.left = -scrollWidth + "px";
        animate(imgs[iNow], { left: 0 });
        var that = this.innerHTML - 1;
        spanRight();
    }

    // 设置定时器，自动轮播
    var timer = null;
    timer = setInterval(left, 3000);
    function left() {
        // 点击左边按钮时，图片会缓缓走到左侧位置。
        animate(imgs[iNow], { left: -scrollWidth });
        /* 
            iNow会循环递增，图片的总数量是6张，判断iNow的循环递增数量是否大于图片的总数量-1个（为什么要-1呢
            因为这样才能无缝衔接）如果不大于图片总数量-1那么就继续递增图片的数量，如果大于了图片的总数量-1，那么
            就从第一张图片开始
        */
        ++iNow > imgs.length - 1 ? iNow = 0 : iNow;
        // 图片移动的距离
        imgs[iNow].style.left = scrollWidth + "px";
        // 图片移动之后，下一张图片缓缓进入你的视觉
        animate(imgs[iNow], { left: 0 });
        spanRight()
    }

    // span组件
    function spanRight() {
        for (var i = 1; i < spans.length - 1; i++) {
            spans[i].className = "slider-ctrl-con";
        }
        spans[iNow + 1].className = "slider-ctrl-con current";
    }

    // 鼠标经过，清楚定时器
    js_slider.onmouseover = function(){
        clearInterval(timer);
    }

    // 鼠标离开，开始定时器
    js_slider.onmouseout = function(){
        clearInterval(timer);
        timer = setInterval(left,3000);
    }
}
