

cc.Class({
    extends: cc.Component,
    properties: {
        scroll_view: cc.ScrollView,          //滚动视图
        node_scroll: cc.Node,                //滚动节点
        ani_main: cc.Animation,
        earths: sp.Skeleton,
        soundzs: cc.AudioSource
    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        //滚动监听
        this.node_scroll.on("scrolling", self.fun_scrolling, self);
        this.time = 0;
        this.bAni1 = true;
        this.bAnisound = true;
    },
    start() {
        this.animState = this.ani_main.play();
        this.animState.speed = 0;
    },
    //正在滚动回调
    fun_scrolling() {
        //当前应播放到动画时间
        var currentTime = this.scroll_view.getScrollOffset().y / this.scroll_view.getMaxScrollOffset().y * 30;
        console.log(currentTime);
        if (currentTime >= 23 && currentTime <= 24 && this.bAni1) {
            this.earths.setAnimation(0, 'animation', false);
            this.bAni1 = false;

        }
        if (currentTime >= 5.3 && currentTime <= 6 && this.bAnisound) {
            this.soundzs.play();
            this.bAnisound = false;

        }
        if (currentTime < 5.3) {
            this.bAnisound = true;
        }

        if (currentTime < 23) {
            this.bAni1 = true;
        }

        //设置动画播放到当前时间
        this.ani_main.setCurrentTime(currentTime);
    },
    golz(e, item) {
        if (item == "lz") {
            console.log("留资页");
        }
    },
    // called every frame
    update: function (dt) {

    },
});
