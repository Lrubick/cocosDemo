// 开启 Canvas 背景支持 alpha 通道
// cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
window.selectMark = 3;



cc.Class({
    extends: cc.Component,

    properties: {

        main: cc.Node,
        // video: cc.VideoPlayer,
        // mainVideo: cc.VideoPlayer,
        poster: cc.Node,
        resultView: cc.Node,
        pressNode: cc.Node,
        fanYeAnim: cc.Node,
        pop: cc.Animation,
        musicNode: cc.Animation,
        music: cc.AudioSource,
        qrCodePng: cc.Sprite,


        day: {
            default: null,
            type: cc.Label
        },
        time: {
            default: null,
            type: cc.Label
        },

        resultPostersNames: {
            default: [],
            type: cc.SpriteFrame,
            // displayName: "",
            tooltip: "海报结果页面场景名称贴图",
        },

        resultPostersLogo: {
            default: [],
            type: cc.SpriteFrame,
            // displayName: "",
            tooltip: "海报结果页面场景贴图",
        },

        // heKaLast: cc.Node,

        // interactiveButton: {
        //     default: [],
        //     type: cc.Button,
        //     // displayName: "",
        //     tooltip: "视频交互按钮",
        // }

        // defaults, set visually when attaching this script to the Canvas
        // text: 'Hello, World!'
    },


    //注意参数的顺序和类型是固定的
    // videoCallBack: function (sender, event, customEventData) {

    //     if (event === cc.VideoPlayer.EventType.COMPLETED) {
    //         // 若视频播完,do something...
    //         this.pressNode.active = false;
    //         this.poster.active = true;
    //         this.poster.getComponent(cc.Animation).play();

    //         this.mainVideo.node.destroy();

    //     }
    //     else if (event === cc.VideoPlayer.EventType.CLICKED) {
    //         // 若点击了视频, do something...
    //         // 勾选了StayOnBottom后这个不能用

    //     }
    //     else if (event === cc.VideoPlayer.EventType.PAUSED) {
    //         // 若视频暂停, do something...
    //         var self = this;
    //         let popImage = null;

    //         // cc.log(sender.currentTime);

    //         if (sender.currentTime >= 1.3 && sender.currentTime <= 3) {
    //             this.interactiveButton[0].node.active = true;
    //             popImage = 1;
    //         } else if (sender.currentTime >= 8.2 && sender.currentTime < 12) {
    //             this.interactiveButton[1].node.active = true;
    //             popImage = 2;

    //         } else if (sender.currentTime >= 14 && sender.currentTime < 18) {
    //             this.interactiveButton[2].node.active = true;
    //             popImage = 3;
    //         } else if (sender.currentTime >= 24 && sender.currentTime < 27.5) {
    //             this.interactiveButton[3].node.active = true;
    //             popImage = 4;
    //         } else if (sender.currentTime >= 31 && sender.currentTime < 33.3) {
    //             this.interactiveButton[4].node.active = true;
    //             popImage = 5;
    //         } else if (sender.currentTime >= 37.4 && sender.currentTime < 40.4) {
    //             this.interactiveButton[5].node.active = true;
    //             popImage = 6;
    //         } else if (sender.currentTime >= 46.4 && sender.currentTime < 50.9) {
    //             this.interactiveButton[6].node.active = true;
    //             popImage = 7;
    //         } else if (sender.currentTime >= 55.4 && sender.currentTime < 58.7) {
    //             this.interactiveButton[7].node.active = true;
    //             popImage = 8;
    //         } else if (sender.currentTime >= 59.9 && sender.currentTime < 62.4) {
    //             this.interactiveButton[8].node.active = true;
    //             popImage = 9;
    //         } else if (sender.currentTime >= 70.7 && sender.currentTime < 73.5) {
    //             this.interactiveButton[9].node.active = true;
    //             popImage = 10;
    //         }
    //         if (popImage !== null) {

    //             cc.loader.loadRes("tanChuang/" + popImage + ".png", cc.SpriteFrame, function (err, spriteFrame) {
    //                 self.pop.node.getChildByName("popInfo").getComponent(cc.Sprite).spriteFrame = spriteFrame;

    //             });

    //         }

    //     } else if (event === cc.VideoPlayer.EventType.META_LOADED) {
    //         // let a = this.mainVideo.getDuration();

    //     } else if (event === cc.VideoPlayer.EventType.READY_TO_PLAY) {
    //         cc.log("READY_TO_PLAY");
    //     }
    // },


    // use this for initialization
    onLoad: function () {
        var self = this;

        this.isMusic = false;
        this.musicPlayCheck = false;
        // this.video.play();

        // completed 
        // this.video.node.on("completed", function () {
        //     // this.mainVideo.play();
        //     // self.video.node.destroy();

        //     this.pressNode.getComponent(cc.Button).scheduleOnce(function () {
        //         self.pressNode.active = true;
        //         // self.mainVideo.stop();
        //     }, 1);



        // }, this);

        // this.pressNode.on(cc.Node.EventType.TOUCH_START, function () {
        //     this.closeAllInteractiveButton();
        //     // this.mainVideo.play();

        // }, this);

        // this.pressNode.on(cc.Node.EventType.TOUCH_END, function () {
        //     // this.mainVideo.pause();
        // }, this);

        // this.pressNode.on(cc.Node.EventType.TOUCH_CANCEL, function () {
        //     // this.mainVideo.pause();
        // }, this);


        this.callback = function () {
            self.restTime();
        }
        this.time.schedule(this.callback, 1);


        this.restTime();
        var self = this;

        $('.audio_icon').click(function () {
            if (self.isMusic === false) {
                self.musicNode.resume();
                self.isMusic = true;
                self.music.resume();
            } else {
                self.musicNode.pause();
                self.isMusic = false;
                self.music.pause();
            }


        })


    },

    start() {
        createErweima();
        this.sceneName = ["【国家速滑馆】", "【国家高山滑雪中心】", "【国家体育馆】", "【国家体育场】", "【国家跳台滑雪中心】", "【国家雪车雪橇中心】", "【国家游泳中心】", "【首都体育馆】", "【首钢滑雪大跳台】", "【五棵松体育馆】"]
    },



    closeAllInteractiveButton: function () {
        for (let i = 0; i < this.interactiveButton.length; i++) {
            this.interactiveButton[i].node.active = false;
        }

    },


    // called every frame
    update: function (dt) {
        if (window.mainVideo === 1) {
            // this.heKaLast.active = false;
            this.poster.active = true;
            this.poster.getComponent(cc.Animation).play();
            window.mainVideo = 0;
        }

        if (dataimag !== null && dataimag !== undefined) {
            let imageObj = new Image();
            cc.log("res === " + dataimag)
            imageObj.src = dataimag;
            let textureObj = new cc.Texture2D();
            textureObj.initWithElement(imageObj);
            textureObj.handleLoadedTexture();
            this.qrCodePng.spriteFrame = new cc.SpriteFrame(textureObj);
            this.qrCodePng.scale = 0.33;

            dataimag = null;
        }

    },
    restTime: function () {
        var setTime = new Date("2022/02/04 20:00:00");
        var nowtime = new Date();
        var restSec = setTime.getTime() - nowtime.getTime();

        var day = Math.floor(restSec / 1000 / 60 / 60 / 24);
        var hour = Math.floor(restSec / 1000 / 60 / 60 % 24);
        var minu = Math.floor(restSec / 1000 / 60 % 60);
        var sec = Math.floor(restSec / 1000 % 60);

        // 22时56分30秒
        this.day.string = day;
        this.time.string = + hour + " 时 " + minu + " 分 " + sec + " 秒 ";


    },
    onDisable: function () {
        cc.log("关闭主页计时");
        this.time.unschedule(this.callback);
    },

    //按钮点击
    onClickBtn: function (event, value) {
        var self = this;
        switch (value) {
            case "mainOpen":
                // this.fanYe.active = true;
                //播放视频
                // // 点击播放    点击开始视频
                // $("#my_video").show();
                // // 播放视频
                // window.videoPlayer1.play();
                // // 显示跳过按钮
                // $('.video_skip').show();
                // // 隐藏开始视频按钮
                // $('.video_ok').hide();


                // this.pop.getComponent(cc.Sprite).scheduleOnce(function () {
                //     self.fanYe.parent.getComponent(cc.Animation).play();
                //     self.heKaLast.active = true;
                //     // self.video.node.active = true;
                // }, 1);


                // this.fanYe.active = true;
                // this.heKaLast.active = true;
                // this.pop.getComponent(cc.Sprite).scheduleOnce(function () {

                //逻辑问题
                // 进入 播放状态
                // 进入 暂停状态


                if (self.music.isPlaying === false) {
                    if (self.musicPlayCheck === false) {

                        self.musicNode.play();
                        self.isMusic = true;
                        self.music.play();
                        self.musicPlayCheck = true;

                    } else {
                        self.musicNode.resume();
                        self.isMusic = true;
                        self.music.resume();

                    }



                }


                let anim = self.fanYeAnim.getComponent(cc.Animation).play()

                anim.on("finished", function () {


                    $(".audio_box").css("display", "block");
                    $(".audio_icon").css("animation-play-state", "running")
                    $(".audio_icon").css("-webkit-animation-play-state", "running")
                    $(".audio_icon").attr('data-mp3', '0');

                    $("#my_video").show();
                    window.videoPlayer1.play();
                    $(".video_skip").show();
                    $(".video_ok").hide();
                    jiedian(1);
                }, this)
                // }, 1);



                break;
            case "createPosters":
                let playerName = this.poster.getChildByName("name").getComponent(cc.EditBox).string;
                this.playerName = playerName.replace(/\s+/g, "");
                if (this.playerName === "") {
                    cc.log("名字不能为空！");
                    return;
                }
                this.resultView.getChildByName("name").getComponent(cc.Label).string = this.playerName + "在";
                this.resultView.getChildByName("scene").getComponent(cc.Label).string = this.sceneName[window.selectMark - 1];
                this.resultView.getChildByName("image").getComponent(cc.Sprite).spriteFrame = this.resultPostersNames[window.selectMark - 1];
                this.resultView.getChildByName("senceLogo").getComponent(cc.Sprite).spriteFrame = this.resultPostersLogo[window.selectMark - 1];

                this.resultView.getComponent(cc.Animation).play();
                this.resultView.getComponent(cc.Animation).scheduleOnce(function () {
                    self.initRender();
                }, 0.7);
                jiedian(3);

                break;
            case "select":
                break;
            case "closePop":
                this.pop.play("popBack");

                break;
            case "music":
                if (true === this.isMusic) {
                    this.musicNode.pause();
                    this.isMusic = false;
                    this.music.pause();

                } else {

                    if (this.musicPlayCheck === true) {

                        this.musicNode.resume();
                        this.isMusic = true;
                        this.music.resume();

                    } else {
                        this.musicNode.play();
                        this.isMusic = true;
                        this.music.play();
                        this.musicPlayCheck = true;

                    }
                }
                break;
            case "goHistory":
                window.history.go(0);

                break;
        }

    },


    interactiveButtonClick: function (event, value) {
        // cc.log("按钮：" + value);
        this.pop.play("pop");
    },



    initRender: function () {
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



    /**
     * @description: 开始截图
     */
    btn_image_knife: function () {

        var self = this;

        this.resultView.getChildByName("select").active = false;
        this.resultView.getChildByName("again").active = false;
        this.resultView.getChildByName("text").active = false;
        this.resultView.getChildByName("qrCode").active = true;

        // 执行一次 render，将所渲染的内容渲染到纹理上
        this._camera.render(undefined);
        //到这里，截图就已经完成了


        this.resultView.getChildByName("select").active = true;
        this.resultView.getChildByName("again").active = true;
        this.resultView.getChildByName("text").active = true;

        this.resultView.getChildByName("qrCode").active = false;


        // this.musicNode.active = true;


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
        let dataUrl = canvas.toDataURL("image/jpeg");
        let img = document.createElement("img");
        img.src = dataUrl; //截图数据
        img.id = "capture";
        img.alt = "capture";
        img.width = width;
        img.height = height;
        img.style.position = "fixed";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.opacity = 0;
        img.style.transform = "translate(-50%,-50%)";


        //创建按钮div
        let div_btn = document.createElement("div");
        div_btn.id = "div_btn";
        div_btn.style.position = "fixed";
        div_btn.style.top = "50%";
        div_btn.style.left = 0;
        div_btn.style.width = "100%";
        div_btn.style.height = "812px";

        div_btn.appendChild(img);

        //加按钮
        let btn_again = document.createElement("div");
        btn_again.id = "btn_again";
        btn_again.style.width = "300px";
        btn_again.style.height = "150px";
        btn_again.style.position = "absolute";
        btn_again.style.bottom = "198px";
        btn_again.style.right = "0px";

        div_btn.appendChild(btn_again);
        //再次游戏
        btn_again.onclick = function func_again() {
            history.go(0);
        };


        //重新选择海报
        let btn_select = document.createElement("div");
        btn_select.id = "btn_select";
        btn_select.style.width = "300px";
        btn_select.style.height = "150px";
        btn_select.style.position = "absolute";
        btn_select.style.bottom = "198px";
        // btn_select.style.left = "0px";
        btn_select.style.left = "0px";
        // btn_select.style.margin = "auto";

        div_btn.appendChild(btn_select);
        btn_select.onclick = function func_again() {

            self.resultView.scale = 0;
            self.poster.active = true;
            div_btn.remove();
            self.poster.opacity = 0;
            self.poster.getComponent(cc.Animation).play();

        };




        let divGame = document.getElementById("Cocos2dGameContainer");
        divGame.appendChild(div_btn);
        // createErweima();

        preserve("capture");

    },





});
