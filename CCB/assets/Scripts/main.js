window.playmusic = function () {
  console.log("播放背景音乐");
  var x = document.getElementById("myAudio");
  x.play();
}


cc.Class({
  extends: cc.Component,
  properties: {
    scroll_view: cc.ScrollView,          //滚动视图
    node_scroll: cc.Node,                //滚动节点
    ani_main: cc.Animation,
    pageView: cc.PageView,
    selectNode: cc.Node,
    creatShareNode: cc.Node,
    frameList: {
      type: cc.SpriteFrame,
      default: []
    },
    // audio: cc.AudioSource,
    again: cc.Node,
    sharebtn: cc.Node,
    touchNode: cc.Node,
    tipText: cc.Node,
    shareLayout: cc.Node,
    leftTips: cc.Node,
    // clickTips: cc.Node,

  },

  // use this for initialization
  onLoad: function () {
    var self = this;
    cc.vv = {};
    cc.vv.main = self;


    //播放音乐
    var music = document.getElementById('main_audio');
    document.addEventListener("WeixinJSBridgeReady", function () {
      window.playmusic();
    }, false);



    // this.currentMusic = cc.audioEngine.play(this.audio, false, 1);



    //滚动监听
    // this.node_scroll.on("scrolling", self.fun_scrolling, self);

    this.node_scroll.on("finished", function () {
      cc.log("测试")
    });

    this.time = 0;
    this.imageIndex = null;

    this.bAni1 = true;
    this.pageViewIndex = 0;
    this.bAniQueue = true;
    this.bAniFerry = true;
    this.bAniHands = true;
    this.bAniWorker = true;
    this.bAniCar = true;
    this.bAniHelp = true;
    this.bAniEnd = true;
    this.bAniWoman = true;
    this.bAnisound = true;
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
    // cc.log(currentTime);
    if (currentTime >= 2 && currentTime <= 3 && this.bAni1) {
      let peopleWalkAnimation = layout.getChildByName("first").getChildByName("people").getComponent(cc.Animation);
      peopleWalkAnimation.play("peopleWalk");
      this.bAni1 = false;
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


    if (currentTime >= 18.2 && currentTime <= 20 && this.bAniEnd) {
      let carAnimation = layout.getChildByName("nine").getChildByName("backgroundQianJing").getChildByName("woman").getComponent(cc.Animation);
      carAnimation.play("woman");
      this.bAniWoman = false;
    }



    if (currentTime >= 19.5 && currentTime <= 20 && this.bAniCar) {
      let carAnimation = layout.getChildByName("nine").getChildByName("car1").getComponent(cc.Animation);
      let carAnimation2 = layout.getChildByName("nine").getChildByName("car2").getComponent(cc.Animation);
      carAnimation.play("car");
      carAnimation2.play("car2");
      this.bAniCar = false;
    }


    if (currentTime >= 28 && currentTime <= 30 && this.bAniEnd) {
      let carAnimation = layout.getChildByName("twelve").getChildByName("New Node").getComponent(cc.Animation);
      carAnimation.play("fc");
      this.bAniEnd = false;
    }






    // if (currentTime < 5.3) {
    //   // this.bAnisound = true;
    // }

    // if (currentTime < 23) {
    //   this.bAni1 = true;
    // }

    //设置动画播放到当前时间

    this.ani_main.setCurrentTime(currentTime);
  },


  onclickFunc: function (sendor, customValue) {

    let mainNode = this.ani_main.node;
    switch (customValue) {
      case "1":
        if (this.bAniQueue) {
          // sendor.target.active = false
          // cc.log(this.node_scroll);
          let queueAnimation = mainNode.getChildByName("second").getChildByName("queue").getComponent(cc.Animation);
          // mainNode.getChildByName("second").getChildByName("queueTalk").active = true;
          queueAnimation.play("queue");
          // this.bAniQueue = false;
        }
        break;
      case "2":
        let workerAnimation = mainNode.getChildByName("seven").getComponent(cc.Animation);
        workerAnimation.play("worker");
        mainNode.getChildByName("seven").getChildByName("talk").active = true;
        // this.bAniWorker = false;
        break;
      case "3":
        let helpAnimation = mainNode.getChildByName("nine").getChildByName("help").getComponent(cc.Animation);
        helpAnimation.play("help");
        // this.bAniHelp = false;
        break;
      case "createshare":

        var index = this.pageView.getCurrentPageIndex();
        this.imageIndex = index;


        // this.creatShareNode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(cc.url.raw(s));
        // var s = "resources/bigShare/00" + index + ".jpg";


        // cc.resources.load(s, cc.SpriteFrame, function (err, spriteFrame) {
        //   cc.log(err);
        //   cc.log(spriteFrame);
        // });

        this.creatShareNode.getComponent(cc.Sprite).spriteFrame = this.frameList[index];
        // cc.resources.load("bigShare/00" + index + ".png", cc.SpriteFrame, null, function (err, spriteFrame) {
        //   // var node = new cc.Node("New Sprite");
        //   // var sprite = node.addComponent(cc.Sprite);
        //   // sprite.spriteFrame = spriteFrame;
        //   // node.parent = self.node
        //   cc.log(spriteFrame);
        //   self.creatShareNode.getComponent(cc.Sprite).spriteFrame = spriteFrame;

        // });





        // this.creatShareNode.getComponent(cc.Sprite).spriteFrame = ;
        this.touchNode.active = true;

        this.touchFlag = false;
        this.touchStartTime = null;
        //添加按钮触摸监听 长按弹托管弹窗列表
        this.touchNode.on(cc.Node.EventType.TOUCH_START, this.touchStart, this);
        this.touchNode.on(cc.Node.EventType.TOUCH_END, this.touchEnd, this);


        this.creatShareNode.parent.active = true;

        break;
      case "shareLayout":
        sendor.target.active = false;
        break;
      // case "clickTips":

      //   this.leftTips.active = true;
      //   break;
      default:
        this.selectNode.active = true;
        break;
    }

    sendor.target.active = false

  },


  //触摸开始
  touchStart() {
    //触摸开始 
    this.touchFlag = true;
    //记录下触摸开始时间
    this.touchStartTime = new Date();
    cc.log("触摸");
  },

  //长按检测函数
  touchHold() {
    if (this.touchFlag && this.touchStartTime != null) {
      //判断按钮的按压时长
      let touchHoldTime = new Date();
      let milliseconds = touchHoldTime.getTime() - this.touchStartTime.getTime();
      if (milliseconds > 300) {
        cc.log("长按");
        this.touchFlag = false;
        //触发托管事务逻辑 
        //todo...

        this.sharebtn.active = false;
        this.again.active = false;
        this.tipText.active = false;


        this.initRender();
      }
    }
  },

  //触摸结束
  touchEnd() {
    this.touchFlag = false;
    this.touchStartTime = null;
    //出发单击事务逻辑
    //todo...
  },


  pageViewCtr: function (sender, str) {

    cc.log(sender.target.name);

    if (sender.target.name == "left") {
      this.pageViewIndex--;

    } else {
      this.pageViewIndex++;
    }

    // pageViewIndex

    if (this.pageViewIndex > 5) {
      this.pageViewIndex = 5;

      // this.pageView.scrollToPage(5);

    }
    if (this.pageViewIndex < 0) {
      this.pageViewIndex = 0;
      // this.pageView.scrollToPage(0);

    }
    this.pageView.scrollToPage(this.pageViewIndex);

    // this.target.scrollToPage(0);

  },


  onclickEndButton: function (sender, value) {
    if (sender.target.name == "again") {
      cc.log("你好");
      cc.director.loadScene("loading");
    } else {
      this.shareLayout.active = true;
    }
  },




  initRender: function () {
    // if(cc.sys.isBrowser)
    // {
    let node = new cc.Node();
    node.parent = cc.director.getScene().getChildByName("Canvas");
    let camera = node.addComponent(cc.Camera);
    //设置相机参数

    camera.enabled = false; // 避免自动渲染
    // 截图的缩放比例
    let zoom = 1;
    let width = cc.winSize.width;
    let height =
      (cc.winSize.width * cc.view.getFrameSize().height) /
      cc.view.getFrameSize().width;
    let size = cc.size(width, height);
    // 截图的中心点就是摄像机节点的位置
    let origin = cc.v2(0, 0);

    camera.zoomRatio = zoom; // 设置缩放

    // 设置目标渲染纹理
    let texture = new cc.RenderTexture();
    let gl = cc.game["_renderContext"];

    texture.initWithSize(size.width, size.height, gl.STENCIL_INDEX8); // 截图矩形的尺寸
    //this.node.setPosition(origin);                  // 截图矩形的中心点
    camera.targetTexture = texture;

    // 缓存，备用
    this._camera = camera;
    this._texture = texture;

    //用于显示的sprite组件，如果要测试这个，需要添加sprite组件
    //this._sprite = this.getComponent(cc.Sprite);
    //}
    this.btn_image_knife();
  },


  cut_image: function (id, id2) {
    var w = $("#" + id + "").width();
    var h = $("#" + id + "").height();
    var copyDom = $("#canvash2");
    var width = copyDom.offsetWidth;
    var height = copyDom.offsetHeight;
    var w = width;
    var h = height;
    var scale = 2;
    html2canvas(document.getElementById(id), {
      dpi: window.devicePixelRatio * 1,
      width: w,
      height: h,
      scale: scale,
      useCORS: true,
      llowTaint: true,
    }).then(function (canvas) {
      var url = canvas.toDataURL("image/png", 2);
      /*图片地址*/
      $("#" + id2 + "").attr("src", url);
    });
  },

  // attribute 

  getBase64Url: function (img) {
    let canvas = document.createElement('canvas'),
      ctx = canvas.getContext('2d');
    canvas.height = img.height;
    canvas.width = img.width;
    ctx.drawImage(img, 0, 0)
    let dataUrl = canvas.toDataURL('image/png');
    return dataUrl
  },



  /**
   * @description: 开始截图
   */
  btn_image_knife: function () {

    // console.log("save");
    var self = this;
    // 执行一次 render，将所渲染的内容渲染到纹理上
    this._camera.render(undefined);
    //到这里，截图就已经完成了

    this.sharebtn.active = true;
    this.again.active = true;
    this.tipText.active = true;

    // 接下去，可以从 RenderTexture 中获取数据，进行深加工
    let texture = this._texture;
    let data = texture.readPixels();

    let width = texture.width; ``
    let height = texture.height;

    // 接下来就可以对这些数据进行操作了
    // let canvas:HTMLCanvasElement;
    let canvas = document.createElement("canvas");
    // document.body.appendChild(btn); // 没有添加到body上，不用担心内存泄漏

    let ctx = canvas.getContext("2d");
    canvas.width = width;
    canvas.height = height;

    // 1维数组转2维
    // 同时做个上下翻转
    let rowBytes = width * 4;
    for (let row = 0; row < height; row++) {
      let srow = height - 1 - row;
      let imageData = ctx.createImageData(width, 1);
      let start = srow * width * 4;
      for (let i = 0; i < rowBytes; i++) {
        imageData.data[i] = data[start + i];
      }

      ctx.putImageData(imageData, 0, row);
    }



    //   let img = new Image()
    //   img.src = 'https://mhimg.clewm.net/cli/images/background/bg20.png'
    //   // img.crossOrigin = 'Anonymous'          //处理图片跨域
    //   img.onload = () => {
    //     let base64img = that.getBase64Url(img)
    //     console.log(base64img)
    //   }
    // }


    // let dataUrl = canvas.toDataURL("image/jpeg");

    // let dataUrl = canvas.toDataURL("image/jpeg");

    // let img1 = new Image()
    // img1.src = 'aaaa.jpg'
    // img.crossOrigin = 'Anonymous'          //处理图片跨域
    // img1.onload = () => {base64img 
    // con
    // let base64img = this.getBase64Url(img1)
    // console.log(base64img)
    // }


    let img = document.createElement("img");
    // img
    //img.src = this.asset.nativeUrl; //图片路径




    // 五张图
    if (this.imageIndex != null) {
      img.src = "./00" + (this.imageIndex + 1) + ".jpg";
    } else {
      img.src = "./001.jpg";
    }


    // img.src = "./aaaa.jpg"; //截图数据
    // img.src = base64img; //截图数据
    img.id = "capture";
    img.alt = "capture";
    img.width = width;
    img.height = height;
    img.style.position = "fixed";
    img.style.top = "50%";
    img.style.left = "50%";
    img.style.opacity = 0;
    img.style.transform = "translate(-50%,-50%)";
    img.onclick = function fun_call() {
      if (self.shareLayout.active == true) {
        // self.node_share.active = false;
        self.shareLayout.active = false;
      }
    };

    //创建按钮div
    let div_btn = document.createElement("div");
    div_btn.id = "div_btn";
    div_btn.style.position = "fixed";
    div_btn.style.top = "50%";
    div_btn.style.left = 0;
    div_btn.style.width = "100%";
    div_btn.style.height = "584px";

    div_btn.appendChild(img);

    //加按钮
    let btn_again = document.createElement("div");
    btn_again.id = "btn_again";
    btn_again.style.width = "100px";
    btn_again.style.height = "150px";
    btn_again.style.position = "absolute";
    btn_again.style.bottom = "230px";
    btn_again.style.left = "30px";
    div_btn.appendChild(btn_again);
    //再次游戏
    btn_again.onclick = function func_again() {
      history.go(0);
    };
    //分享游戏
    let btn_share = document.createElement("div");
    btn_share.id = "btn_more";
    btn_share.style.width = "100px";
    btn_share.style.height = "150px";
    btn_share.style.position = "absolute";
    btn_share.style.bottom = "490px";
    btn_share.style.left = "30px";
    div_btn.appendChild(btn_share);


    let divGame = document.getElementById("Cocos2dGameContainer");
    divGame.appendChild(div_btn);

    cc.vv.divGame = divGame;


    self.sharebtn.active = true;
    self.again.active = true;
    self.tipText.active = true;

    btn_share.onclick = function func_more() {
      // self.btn_call_more();
      self.shareLayout.active = true;

    };

    //截图完成后隐藏
    // this.node_save.active = false;
    //截图完成后显示结果页
    // this.node_result.active = true;
    // this.node_result_win.active = true;
    // this.node_result.getChildByName("result_" + this.question_index).active = true;
  },


  onDestroy: function () {
    // cc.audioEngine.stop(this.currentMusic);
  },

  // golz(e, item) {
  //   if (item == "lz") {
  //     console.log("留资页");
  //   }
  // },
  // called every frame
  update: function (dt) {
    if (this.touchFlag) {
      this.touchHold();
    }
  },
});
