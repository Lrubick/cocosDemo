cc.Class({
  extends: cc.Component,
  properties: {
    scroll_view: cc.ScrollView,          //滚动视图
    node_scroll: cc.Node,                //滚动节点
    ani_main: cc.Animation,
    soundzs: cc.AudioSource
  },

  // use this for initialization
  onLoad: function () {
    var self = this;
    //滚动监听
    this.node_scroll.on("scrolling", self.fun_scrolling, self);
    this.time = 0;
    this.bAni1 = true;
    this.bAniQueue = true;
    this.bAniFerry = true;
    this.bAniHands = true;
    this.bAniWorker = true;
    this.bAniCar = true;
    this.bAniEnd = true;




    this.bAnisound = true;
    // this.scroll_view = this.node.getComponent("cc.ScrollView");
  },
  start() {
    this.animState = this.ani_main.play();
    this.animState.speed = 0;
  },
  //滚动回调
  fun_scrolling() {
    //当前应播放到动画时间


    var currentTime = this.scroll_view.getScrollOffset().y / this.scroll_view.getMaxScrollOffset().y * 30;
    var layout = this.node;
    cc.log(currentTime);
    if (currentTime >= 2 && currentTime <= 3 && this.bAni1) {
      let peopleWalkAnimation = layout.getChildByName("first").getChildByName("people").getComponent(cc.Animation);
      peopleWalkAnimation.play("peopleWalk");
      this.bAni1 = false;
    }

    if (currentTime >= 3.8 && currentTime <= 5.5 && this.bAniQueue) {
      let queueAnimation = layout.getChildByName("second").getChildByName("queue").getComponent(cc.Animation);
      queueAnimation.play("queue");
      this.bAniQueue = false;
    }

    if (currentTime >= 10.5 && currentTime <= 12.5 && this.bAniFerry) {
      let ferryAnimation = layout.getChildByName("fifth").getChildByName("ferry").getComponent(cc.Animation);
      ferryAnimation.play("ferry");
      this.bAniFerry = false;
    }

    if (currentTime >= 13.8 && currentTime <= 15.8 && this.bAniHands) {
      let handsAnimation = layout.getChildByName("six").getChildByName("shakeHand").getComponent(cc.Animation);
      handsAnimation.play("shakeHand");
      this.bAniHands = false;
    }

    if (currentTime >= 16.3 && currentTime <= 17 && this.bAniWorker) {
      let workerAnimation = layout.getChildByName("seven").getComponent(cc.Animation);
      workerAnimation.play("worker");
      this.bAniWorker = false;
    }


    if (currentTime >= 19.5 && currentTime <= 20 && this.bAniCar) {
      let carAnimation = layout.getChildByName("nine").getChildByName("car").getComponent(cc.Animation);
      carAnimation.play("car");
      this.bAniCar = false;
    }


    if (currentTime >= 28 && currentTime <= 30 && this.bAniEnd) {
      let carAnimation = layout.getChildByName("twelve").getChildByName("end").getComponent(cc.Animation);
      carAnimation.play("end");
      this.bAniEnd = false;
    }



    // if (currentTime < 5.3) {
    //   // this.bAnisound = true;
    // }

    // if (currentTime < 23) {
    //   this.bAni1 = true;
    // }

    //设置动画播放到当前时间

    cc.log(this.ani_main);
    this.ani_main.setCurrentTime(currentTime);
  },
  // golz(e, item) {
  //   if (item == "lz") {
  //     console.log("留资页");
  //   }
  // },
  // called every frame
  update: function (dt) {

  },
});
