cc.Class({
    extends: cc.Component,

    properties: {
        gameView: cc.Node,
        mainView: cc.Node,
        qianView: cc.Node,
        liuZiView: cc.Node,
        resultView: cc.Node,
        resultQrCode: cc.Node,
        resultQrCodeText: cc.Node,
        againBtn: cc.Node,
        shakeTips: cc.Node,
        musicNode: cc.Node,
        audioComponent: cc.AudioSource,
        shakeAudio: cc.AudioSource
    },

    // use this for initialization
    onLoad: function () {
        this.startGameCheck = false;
        // 加速度监听
        cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
        // 重力参数
        this.speed = 2;    // 用来判定的加速度阈值，太大了则很难触发
        this.lastX = 0;
        this.lastY = 0;
        this.lastZ = 0;
        this.times = -1; // 记录摇动次数
        this.last_time = 0;
        this.borderSpeed = 100;  // 加速度变化临界值
        // this.times = -1; // 记录摇动次数



        this.titleNum = 1;
        this.contentNum = 1;
        this.musicStatus = true;



    },

    start: function () {
        //动态生成二维码
        createErweima();
        this.titleNum = Math.floor(Math.random() * 5 + 1);
        this.contentNum = Math.floor(Math.random() * 4 + 1);
        var self = this;
        cc.loader.loadRes("qian/" + this.titleNum + ".png", cc.SpriteFrame, function (err, spriteFrame) {
            cc.log(self.resultView);
            self.qianView.getChildByName("resultCenter").getComponent(cc.Sprite).spriteFrame = spriteFrame;
        });

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



    /**
     * @description: 开始截图
     */
    btn_image_knife: function () {

        // var self = this;
        this.resultQrCodeText.active = true;
        this.resultQrCode.active = true;
        this.againBtn.active = false;
        this.musicNode.active = false;

        // 执行一次 render，将所渲染的内容渲染到纹理上
        this._camera.render(undefined);
        //到这里，截图就已经完成了


        this.resultQrCode.active = false;
        this.resultQrCodeText.active = false;

        this.againBtn.active = true;
        this.musicNode.active = true;


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
        // img.onclick = function fun_call() {
        //     if (self.shareLayout.active == true) {
        //         // self.node_share.active = false;
        //         self.shareLayout.active = false;
        //     }
        // };


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
        btn_again.style.width = "190px";
        btn_again.style.height = "100px";
        btn_again.style.position = "absolute";
        btn_again.style.bottom = "280px";
        btn_again.style.left = "0px";
        btn_again.style.right = "0px";
        // btn_again.style.margin = "auto";

        div_btn.appendChild(btn_again);
        //再次游戏
        btn_again.onclick = function func_again() {
            history.go(0);
        };

        let divGame = document.getElementById("Cocos2dGameContainer");
        divGame.appendChild(div_btn);
        // createErweima();
        haibao();

        cc.vv.divGame = divGame;


        //截图完成后隐藏
        // this.node_save.active = false;
        //截图完成后显示结果页
        // this.node_result.active = true;
        // this.node_result_win.active = true;
        // this.node_result.getChildByName("result_" + this.question_index).active = true;
    },



    // called every frame
    update: function (dt) {

        if (dataimag !== null && dataimag !== undefined) {
            let imageObj = new Image();
            cc.log("res === " + dataimag)
            imageObj.src = dataimag;
            let textureObj = new cc.Texture2D();
            textureObj.initWithElement(imageObj);
            textureObj.handleLoadedTexture();
            this.resultQrCode.getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(textureObj);
            this.resultQrCode.scale = 0.5;

            dataimag = null;
        }
    },



    onbtnClick: function (event, value) {
        switch (value) {
            case "begin":
                // this.mainView.active = false;
                this.mainView.getComponent(cc.Animation).play("mainMove");
                this.shakeTips.getComponent(cc.Animation).play();
                this.gameView.getChildByName("gameLight1").getComponent(cc.Animation).play();
                this.gameView.getChildByName("gameLight2").getComponent(cc.Animation).play();
                this.shakeTips.getComponent(cc.Animation).play();
                this.startGameCheck = true;
                cc.systemEvent.setAccelerometerEnabled(true);
                var self = this;

                cc.loader.loadRes(this.titleNum + "/" + this.contentNum + ".png", cc.SpriteFrame, function (err, spriteFrame) {
                    // self.node.getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    cc.log(self.resultView);
                    self.resultView.getChildByName("topTitle").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    // self.resultView.getChildByName("topTitle").getComponent(cc.Animation).play();
                    // self.count++;
                });
                cc.loader.loadRes("centerTitle/" + this.titleNum + ".png", cc.SpriteFrame, function (err, spriteFrame) {
                    self.resultView.getChildByName("mainTitle").getComponent(cc.Sprite).spriteFrame = spriteFrame;
                    // self.resultView.getChildByName("mainTitle").getComponent(cc.Animation).play();
                    // self.count++;

                });



                break;
            case "beginOver":
                // this.mainView.active = true;
                let gamestate = this.mainView.getComponent(cc.Animation).play("mainMove");
                gamestate.speed = -1;
                cc.systemEvent.setAccelerometerEnabled(false);
                cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
                break;
            case "jieMi":

                this.resultView.scale = 1;
                this.initRender();


                break;
            case "share":
                this.liuZiView.getComponent(cc.Animation).play();
                let img2 = document.createElement("img");
                img2.src = "/Public/SchneiderSigning/qrCode.png";
                img2.id = "capture";
                img2.alt = "capture";
                // img.width = cc.view.getCanvasSize() + "";
                img2.width = "200px";
                img2.height = "200px";
                img2.style.position = "absolute";
                img2.style.width = "200px";
                img2.style.height = "200px";
                img2.style.left = "0px";
                img2.style.right = "0px";
                img2.style.margin = "auto";
                img2.style.opacity = 0;




                let img = document.createElement("img");
                img.src = "/Public/SchneiderSigning/qrCode.png";
                img.id = "capture";
                img.alt = "capture";
                img.width = cc.view.getCanvasSize() + "";
                img.width = "750px";
                img.height = "500px";
                img.style.position = "absolute";
                img.style.width = "750px";
                img.style.height = "500px";
                img.style.left = "0px";
                img.style.right = "0px";
                img.style.margin = "auto";
                img.style.opacity = 0;



                //创建按钮div
                let div_btn = document.createElement("div");
                div_btn.id = "div_btn";
                div_btn.style.position = "fixed";
                div_btn.style.top = "60%";
                div_btn.style.left = 0;
                div_btn.style.width = "100%";
                div_btn.style.height = "500px";

                div_btn.appendChild(img);
                div_btn.appendChild(img2);

                let divGame = document.getElementById("Cocos2dGameContainer");
                divGame.appendChild(div_btn);

                this.qianView.scale = 0;


                break;
            case "liuZi":
                //电话号码校验
                let teleNum = parseInt(this.liuZiView.getChildByName("phone").getComponent(cc.EditBox).string);
                let res = /^[1][3-9]\d{9}$|^([1|2|3|4|5|6|7|8|9])\d{7}$|^[6]([8|6])\d{5}$/;
                if (!(res.test(teleNum))) {
                    cc.vv.toast.show("手机号码有误，请重填！");
                    // cc.log("手机号码有误，请重填！");
                    return;
                }


                var btn_div = document.getElementById("div_btn");
                btn_div.remove();
                addStayinfo(teleNum);
                this.liuZiView.scale = 0;
                this.liuZiView.getChildByName("phone").getComponent(cc.EditBox).string = "";
                this.liuZiView.getChildByName("name").getComponent(cc.EditBox).string = "";
                // this.qianView.getComponent(cc.Animation).play();
                this.resultView.scale = 1;
                this.initRender();

                cc.vv.toast.show("留资成功！");

                break;
            case "clickShake":
                var self = this;
                let animState = this.gameView.getChildByName("game_qian").getComponent(cc.Animation).play();
                this.shakeAudio.play();
                animState.on("finished", function () {
                    self.qianView.getComponent(cc.Animation).play();

                }, this);

                // this.qianView.getComponent(cc.Animation).play();

                this.stopAnim();
                cc.systemEvent.setAccelerometerEnabled(false);
                cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
                break;
            case "music":
                if (this.musicStatus === true) {
                    this.musicStatus = false;
                    this.musicNode.getComponent(cc.Animation).pause();
                    this.audioComponent.pause();
                } else {
                    this.musicStatus = true;
                    this.musicNode.getComponent(cc.Animation).resume();
                    this.audioComponent.resume();
                }
                break;
            case "closeLiuZi":
                let btn_div2 = document.getElementById("div_btn");
                btn_div2.remove();
                this.liuZiView.scale = 0;
                this.qianView.getComponent(cc.Animation).play();

                break;
        }

    },

    stopAnim: function () {
        this.gameView.getChildByName("gameLight1").getComponent(cc.Animation).stop();
        this.gameView.getChildByName("gameLight2").getComponent(cc.Animation).stop();
        this.shakeTips.getComponent(cc.Animation).stop();
    },

    onDeviceMotionEvent: function (event) {
        let x = event.acc.x;
        let y = event.acc.y;
        let z = event.acc.z;

        // ios与安卓Z轴相反
        if (cc.sys.isBrowser && cc.sys.os === cc.sys.OS_ANDROID) {
            z = -z;
        }



        // cc.log(" acc x:", event.acc.x * 10, " acc y:", event.acc.y * 10, " acc z:", event.acc.z * 10);

        // if (Math.abs(x - this.lastX) > this.speed || Math.abs(y - this.lastY) > this.speed || Math.abs(z - this.lastZ) > this.speed) {
        //     this.stopAnim();
        var self = this;
        //     // this.qianView.active = true;
        //     let animState = this.gameView.getChildByName("game_qian").getComponent(cc.Animation).play();
        //     this.shakeAudio.play();

        //     animState.on("finished", function () {
        //         self.qianView.getComponent(cc.Animation).play();

        //     }, this);

        //     cc.systemEvent.setAccelerometerEnabled(false);
        //     cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
        // }
        // this.lastX = x;
        // this.lastY = y;
        // this.lastZ = z;




        var curTime = new Date().getTime();
        var diffTime = curTime - this.last_time;
        // cc.log("curTime = " + curTime);
        // cc.log("diffTime = " + diffTime);
        // 每隔100ms进行判断
        if (diffTime > 100) {
            // cc.log("time check");
            var speed = Math.abs(x + y + z - this.lastX - this.lastY - this.lastZ) / diffTime * 10000;
            // 判断手机确实发生了摇动而不是正常的移动
            // cc.log("speed = " + speed);
            if (speed > this.borderSpeed) {
                this.times++;
                this.qianView.active = true;
                // cc.log("1111111");
                let animState = this.gameView.getChildByName("game_qian").getComponent(cc.Animation).play();
                this.shakeAudio.play();

                // 用户的微信昵称和头像连接发送一次即可，不需要每次都发送
                if (this.times >= 3) {

                    animState.on("finished", function () {
                        // cc.log("22222222");
                        self.qianView.getComponent(cc.Animation).play();
                        cc.systemEvent.setAccelerometerEnabled(false);
                        cc.systemEvent.off(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
                    }, this);
                }
            }
            this.last_time = curTime;
            this.lastX = x;
            this.lastY = y;
            this.lastZ = z;

        }













    },
});
