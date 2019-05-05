// window.onload = function () {
    // Tab栏封装
    // 第一个参数 父级
    // 第二个参数 要改变的标题的class
    // 第三个参数 要改变的内容的class
    function Tab(obj, title, content) {
        // 获取父级id
        var target = document.getElementById(obj);
        // Tab栏切换标题
        var one = target.children[0].children;
        // Tab栏切换内容
        var two = target.children[1].children;
        // 第一遍循环，将Tab栏标题拿出
        for (var i = 0; i < one.length; i++) {
            // 获取Tab栏标题的索引号
            one[i].index = i;
            // 当鼠标点击时，执行
            one[i].onclick = function () {
                // 第二遍循环
                for (var j = 0; j < one.length; j++) {
                    // 将所有的class名清空
                    one[j].className = "";
                    two[j].className = "";
                }
                // 为当前点击的class添加类名
                this.className = title;
                // 将Tab栏的标题和内容，通过索引号绑定，并给内容添加class
                two[this.index].className = content;
            }
        }
    }
// }
