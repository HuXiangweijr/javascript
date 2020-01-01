window.onload = function(){
    // 对象组件，获取对象
    function List(id){
        this.id = document.getElementById(id);
        this.lis = this.id.children[0].children;
    }

    // 初始化
    List.prototype.init = function(){
        var that = this;
        for(var i = 0; i < this.lis.length; i++){
            this.lis[i] = i;
            this.lis[i].onmouseover = function(){
                that.show(this.children[0]);
            }
            that.lis[i].onmouseout = function(){
                that.hide(this.children[0]);
            }
        }
    }

    // 显示模块
    List.prototype.show = function(obj){
        obj.style.display = "block";
    }

    // 隐藏模块
    List.prototype.hide = function(obj){
        obj.style.display = "none";
    }
    // 实例化对象
    var list = new List("list");
    // 初始化
    list.init()
}