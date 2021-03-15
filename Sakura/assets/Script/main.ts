const { ccclass, property } = cc._decorator;


const MINI_CAMERA_Z = 100;

@ccclass
export default class main extends cc.Component {

    @property([cc.Node])
    touchNode: cc.Node[] = [];

    @property(cc.Node)
    planet: cc.Node = null;

    fingerCheck: boolean = false;

    startPos1: cc.Vec2 = null;
    startPos2: cc.Vec2 = null;
    pointsDis: Number = 0;

    touchID: Number = 0;

    @property({ type: cc.Node, visible: false, tooltip: "当前触摸节点" })
    currentTouchNode: cc.Node = null;

    @property({ type: [cc.Vec2], tooltip: "每个触摸点起始位置", visible: false })
    touchPos: cc.Vec2[] = [];



    @property({ type: cc.Node, visible: false })
    event: cc.Node = null;

    @property(cc.Node)
    mainSelect: cc.Node = null;

    @property(cc.PageView)
    selectImg: cc.PageView = null;

    @property([cc.Node])
    mainBg: cc.Node[] = [];

    @property(cc.Node)
    gameNode: cc.Node = null;


    @property(cc.Node)
    nameNode: cc.Node = null;

    @property({ type: cc.Camera, visible: false })
    _camera: cc.Camera = null;
    @property({ type: cc.RenderTexture, visible: false })
    _texture: cc.RenderTexture = null;

    @property({ type: cc.Node })
    resultNode: cc.Node = null;

    @property({ type: cc.Node })
    toast: cc.Node = null;


    @property({ type: cc.Node })
    shareNode: cc.Node = null;

    @property({ type: cc.Animation })
    musicAnim: cc.Animation = null;

    @property({ type: cc.AudioSource })
    audioSource: cc.AudioSource = null;

    musicCheck: boolean = true;

    _toName: string = "";



    start() {
        // init logic



        cc.tween(this.nameNode.getChildByName("question"))
            .delay(1)
            .to(0.7, { opacity: 255 })
            .start()

        // cc.tween(this.nameNode.getChildByName("small"))
        //     .delay(1.8)
        //     .to(0.7, { opacity: 255 })
        //     .start()

        cc.tween(this.nameNode.getChildByName("nameText"))
            .delay(2.6)
            .to(0.7, { opacity: 255 })
            .start()

        cc.tween(this.nameNode.getChildByName("love"))
            .delay(3.4)
            .to(0.7, { opacity: 255 })
            .call(() => {

                this.nameNode.getChildByName("commit").getComponent(cc.Button).interactable = true;

                cc.tween(this.nameNode.getChildByName("commit"))
                    .to(1, { opacity: 255 })
                    .start()
                // .repeatForever(
                //     cc.tween(this.nameNode.getChildByName("commit"))
                //         .to(0.7, { opacity: 0 })
                //         .to(0.7, { opacity: 255 })
                //         .start()
                // )

            }
            )
            .start()

        this.gameNode.on(cc.Node.EventType.TOUCH_START, this.touchStartFuncs, this);
        this.gameNode.on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveFuncs, this);
        this.gameNode.on(cc.Node.EventType.TOUCH_END, this.touchEndFuncs, this); ``
        this.gameNode.on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancelFuncs, this);

        for (let i = 0; i < this.touchNode.length; i++) {

            if (i === 9) {
                continue;
            }

            this.touchNode[i].on(cc.Node.EventType.TOUCH_START, this.touchStartFunc, this);

            this.touchNode[i].on(cc.Node.EventType.TOUCH_MOVE, this.touchMoveFunc, this);

            this.touchNode[i].on(cc.Node.EventType.TOUCH_END, this.touchEndFunc, this);

            this.touchNode[i].on(cc.Node.EventType.TOUCH_CANCEL, this.touchCancelFunc, this);

            this.touchPos[i] = this.touchNode[i].getPosition();
        }
        this.selectImg._unregisterEvent()

        // this.selectImg.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => this.selectImg._unregisterEvent())

    }


    private touchStartFunc(evt: cc.Event.EventTouch) {
        this.event = evt.target;
        if ("game" === evt.target.getName() || "Canvas" === evt.target.getName()) {
            this.event = null;
        }
    }



    private touchStartFuncs(evt: cc.Event.EventTouch) {
        let touches = evt.getTouches();
        cc.log("touchsStart");
        if (touches.length == 2) {
            this.startPos1 = this.planet.convertToNodeSpaceAR(touches[0].getLocation());
            this.startPos2 = this.planet.convertToNodeSpaceAR(touches[1].getLocation());
            this.pointsDis = this.startPos1.sub(this.startPos2).mag();
        }
    }


    private touchMoveFunc(evt: cc.Event.EventTouch) {
        let touches = evt.getTouches();
        if (1 === touches.length) {
            let star_pos = evt.getPreviousLocation();

            let screen_pos = evt.getLocation();
            let tempX = star_pos.x - screen_pos.x;
            let tempY = star_pos.y - screen_pos.y;

            let pos = cc.v2(tempX, tempY);

            evt.target.x = evt.target.x - pos.x;
            evt.target.y = evt.target.y - pos.y;
            // evt.target.scale = 3;

        }
    }


    private touchMoveFuncs(evt: cc.Event.EventTouch) {
        let touches = evt.getTouches();

        if (touches.length == 2) {

            if (!this.pointsDis)        // 该行代码针对安卓手机(因为在安卓手机上，onTouchStart获取的手指数始终为1，从而导致this.pointsDis不存在)
                this.pointsDis = 0;

            if (null !== this.event) {
                cc.log("touchesMove");

                // let touch1 = touches[0], touch2 = touches[1];
                // let delta1 = touch1.getDelta(), delta2 = touch2.getDelta();
                // let touchPoint1 = this.event.parent.convertToNodeSpaceAR(touch1.getLocation());
                // let touchPoint2 = this.event.parent.convertToNodeSpaceAR(touch2.getLocation());
                // //缩放
                // let distance = touchPoint1.sub(touchPoint2);
                // let delta = delta1.sub(delta2);
                // let scale = 1;
                // if (Math.abs(distance.x) > Math.abs(distance.y)) {
                //     scale = (distance.x + delta.x) / distance.x * this.event.scale;
                // }
                // else {
                //     scale = (distance.y + delta.y) / distance.y * this.event.scale;
                // }
                // if (scale >= 1.5) {
                //     scale = 1.5;
                // }
                // this.event.scale = scale < 0.1 ? 0.1 : scale;

                // 两根手指是缩放
                let touchPoint1 = this.planet.convertToNodeSpaceAR(touches[0].getLocation());
                let touchPoint2 = this.planet.convertToNodeSpaceAR(touches[1].getLocation());
                let newPointsDis = touchPoint1.sub(touchPoint2).mag();

                if (!this.pointsDis)        // 该行代码针对安卓手机(因为在安卓手机上，onTouchStart获取的手指数始终为1，从而导致this.pointsDis不存在)
                    this.pointsDis = 0;

                if (newPointsDis > this.pointsDis) {
                    // 表明两根手指在往外划
                    this.pointsDis = newPointsDis;
                    this.event.scale += 0.05;
                    if (this.event.scale >= 2) {
                        this.event.scale = 2;
                    }
                }
                else if (newPointsDis < this.pointsDis) {
                    // 表明两根手指在往内划
                    if (this.event.scale <= 0.1) {
                        this.event.scale = 0.1;
                        return;
                    }

                    this.pointsDis = newPointsDis;
                    this.event.scale -= 0.05;
                }
            }

        }
    }


    private touchEndFuncs(evt: cc.Event.EventTouch) {
        cc.log("touchesEnd");

        if (null !== this.event) {
            let boundingBox = this.event.getBoundingBox();

            if (this.event.x - boundingBox.width / 2 < (this.planet.x - this.planet.getBoundingBox().width / 2)) {
                cc.log("ScaleX1");
                this.event.scale = 0.35;
                return;
            }

            if (this.event.x + boundingBox.width / 2 > (this.planet.x + this.planet.getBoundingBox().width / 2)) {
                cc.log("ScaleX2");
                this.event.scale = 0.35;
                return;
            }

            if (this.event.y - boundingBox.height / 2 < (this.planet.y - this.planet.getBoundingBox().height / 2 - this.planet.y)) {
                cc.log("ScaleY");
                this.event.scale = 0.35;
                return;
            }

            if (this.event.y + boundingBox.height / 2 > (this.planet.y + this.planet.getBoundingBox().height / 2 - this.planet.y)) {
                cc.log("ScaleY");
                this.event.scale = 0.35;
                return;
            }
        }

    }

    private touchCancelFuncs(evt: cc.Event.EventTouch) {
        cc.log("touchesCancel");
    }

    // private restrictPic(picNode: cc.Node) {
    //     // 限制移动，防止出现黑边
    //     let picWidth = picNode.getBoundingBox().width;
    //     let picHeight = picNode.getBoundingBox().height;
    //     if (picNode.x > 0 && picNode.x - 0 > picWidth / 2 - this.planet.width / 2)
    //         picNode.x = picWidth / 2 - this.planet.width / 2;
    //     if (picNode.x < 0 && picNode.x - 0 < this.planet.width / 2 - picWidth / 2)
    //         picNode.x = this.planet.width / 2 - picWidth / 2;
    //     if (picNode.y > 0 && picNode.y - 0 > picHeight / 2 - this.planet.height / 2)
    //         picNode.y = picHeight / 2 - this.planet.height / 2;
    //     if (picNode.y < 0 && picNode.y - 0 < this.planet.height / 2 - picHeight / 2)
    //         picNode.y = this.planet.height / 2 - picHeight / 2;
    // }

    private touchEndFunc(evt: cc.Event.EventTouch) {
        cc.log("touchEnd");

        let touches = evt.getTouches();
        if (1 === touches.length) {

            let screen_pos = evt.target.getPosition();


            let index = Number(evt.target.getName()) - 1;

            if (screen_pos.x < (this.planet.x - this.planet.getBoundingBox().width / 2) || screen_pos.x > (this.planet.x + this.planet.getBoundingBox().width / 2)) {
                cc.log("EndX");
                evt.target.setPosition(this.touchPos[index]);
                evt.target.scale = 0.35;
                return;

            }


            // this.pos.getBoundingBoxToWorld().contains(this._dragObj.convertToWorldSpaceAR(cc.v2(0,0)));

            // let test = this.planet.getBoundingBox().contains(evt.target.getPosition());// true
            // let test = this.planet.getBoundingBox().contains(evt.target.getPosition());// true
            // cc.log(test)

            // if (test === false) {
            //     evt.target.setPosition(this.touchPos[index]);
            //     evt.target.scale = 0.35;
            //     return;
            // }



            if (screen_pos.y < (this.planet.y - this.planet.getContentSize().height / 2 - this.planet.y)) {
                cc.log("EndY1");
                evt.target.setPosition(this.touchPos[index]);
                evt.target.scale = 0.35;

                return;

            }

            if (screen_pos.y > (this.planet.y + this.planet.getContentSize().height / 2 - this.planet.y - 35)) {
                cc.log("EndY2");

                evt.target.setPosition(this.touchPos[index]);
                evt.target.scale = 0.35;
                return;

            }


        }
        //2 === touches.length &&
        // if (null !== this.event) {
        //     let boundingBox = this.event.getBoundingBox();



        //     if (this.event.x - boundingBox.width < (this.planet.x - this.planet.getBoundingBox().width / 2) || this.event.x + boundingBox.width > (this.planet.x + this.planet.getBoundingBox().width / 2)) {
        //         cc.log("ScaleX");
        //         this.event.scale = 0.35;
        //         return;

        //     }

        //     if (this.event.y - boundingBox.height < (this.planet.y - this.planet.getBoundingBox().height / 2) || this.event.y + boundingBox.height > (this.planet.y + this.planet.getBoundingBox().height / 2)) {
        //         cc.log("ScaleY");
        //         this.event.scale = 0.35;
        //         return;
        //     }

        // }


    }

    private touchCancelFunc(evt: cc.Event.EventTouch) {
        cc.log("Cancel");
        let touches = evt.getTouches();
        if (1 === touches.length) {

            let screen_pos = evt.target.getPosition();


            let index = Number(evt.target.getName()) - 1;

            if (screen_pos.x < (this.planet.x - this.planet.getBoundingBox().width / 2) || screen_pos.x > (this.planet.x + this.planet.getBoundingBox().width / 2)) {
                cc.log("EndX");
                evt.target.setPosition(this.touchPos[index]);
                evt.target.scale = 0.35;
                return;

            }

            if (screen_pos.y < (this.planet.y - this.planet.getBoundingBox().height / 2) || screen_pos.y > (this.planet.y + this.planet.getBoundingBox().height / 2)) {
                cc.log("EndY");
                evt.target.setPosition(this.touchPos[index]);
                evt.target.scale = 0.35;
                return;
            }
        }
        //2 === touches.length &&
        // if (null !== this.event) {
        //     let boundingBox = this.event.getBoundingBox();



        //     if (this.event.x - boundingBox.width < (this.planet.x - this.planet.getBoundingBox().width / 2) || this.event.x + boundingBox.width > (this.planet.x + this.planet.getBoundingBox().width / 2)) {
        //         cc.log("ScaleX");
        //         this.event.scale = 0.35;
        //         return;

        //     }

        //     if (this.event.y - boundingBox.height < (this.planet.y - this.planet.getBoundingBox().height / 2) || this.event.y + boundingBox.height > (this.planet.y + this.planet.getBoundingBox().height / 2)) {
        //         cc.log("ScaleY");
        //         this.event.scale = 0.35;
        //         return;
        //     }

        // }


    }


    initRender(callback: Function, fromCheck: Number) {
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
        // let origin = new cc.Vec2(0, 0);
        camera.zoomRatio = zoom; // 设置缩放

        // if (fromCheck === 1) {
        //     let cameraPos = cc.v3(0, 0, MINI_CAMERA_Z);
        //     let cameraOrthoSize = 1;
        //     camera.alignWithScreen = false;

        //     node.position = cameraPos;
        //     camera.orthoSize = cameraOrthoSize;
        // }

        // 截图的中心点就是摄像机节点的位置


        // 设置目标渲染纹理
        let texture = new cc.RenderTexture();
        let gl = cc.game["_renderContext"];

        texture.initWithSize(size.width, size.height, gl.STENCIL_INDEX8); // 截图矩形的尺寸
        // this.node.setPosition(origin);                  // 截图矩形的中心点
        camera.targetTexture = texture;

        // 缓存，备用
        this._camera = camera;
        this._texture = texture;

        //用于显示的sprite组件，如果要测试这个，需要添加sprite组件
        //this._sprite = this.getComponent(cc.Sprite);
        //}
        this.btn_image_knife(callback, fromCheck);
    }




    /**
     * @description: 开始截图
     * @param: fromCheck 0 为 第一次进入 1 为结果页
     */
    btn_image_knife(callback: Function, fromCheck: Number) {
        cc.log("fromCheck = " + fromCheck);
        const self = this;

        this.musicAnim.node.active = false;



        if (fromCheck === 0) {

            this.gameNode.getChildByName("bottombg").active = false;
            this.gameNode.getChildByName("finish").active = false;
            this.gameNode.getChildByName("qrcode").active = false;
            this.gameNode.getChildByName("text").active = false;
            this.gameNode.getChildByName("finishText").active = false;




            for (let i = 0; i < this.touchPos.length; i++) {
                if (i === 9) {
                    continue;
                }
                let temp = this.touchNode[i].getPosition();
                if (this.touchPos[i].x === temp.x && this.touchPos[i].y === temp.y) {
                    this.touchNode[i].active = false;
                }
            }
            this.touchNode[9].active = false;


        } else {


            this.resultNode.getChildByName("restart").active = false;
            this.resultNode.getChildByName("share").active = false;
            this.resultNode.getChildByName("GObtn").active = false;
            this.resultNode.getChildByName("chanAn").active = false;
            this.resultNode.getChildByName("bottomText").active = true;

        }








        // this.musicAnima.node.active = false;

        // 执行一次 render，将所渲染的内容渲染到纹理上
        this._camera.render(undefined);
        //到这里，截图就已经完成了

        // if (window.checkUser.user_status === 2) {

        //     this.posters.getChildByName("send").active = true;
        //     this.posters.getChildByName("againEdit").active = true;


        // }
        // this.posters.getChildByName("baoCun").active = true;


        // 接下去，可以从 RenderTexture 中获取数据，进行深加工
        let texture = this._texture;

        this.musicAnim.node.active = true;



        if (fromCheck === 0) {
            this.resultNode.getChildByName("commitBg").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(this._texture);
            this.resultNode.getChildByName("commitBg").angle = 180;
            this.resultNode.getChildByName("commitBg").scaleX = -1;

            if (callback !== null) {
                callback();
            }
            return;
        } else {
            // this.resultNode.getChildByName("bottomText").active = false;

            this.resultNode.getChildByName("restart").active = true;
            this.resultNode.getChildByName("share").active = true;
            this.resultNode.getChildByName("GObtn").active = true;
            this.resultNode.getChildByName("chanAn").active = true;


        }





        let data = texture.readPixels();

        let width = texture.width;
        let height = texture.height;

        // 接下来就可以对这些数据进行操作了
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
        img.style.opacity = "0";
        img.style.transform = "translate(-50%,-50%)";


        // img.ontouchstart = function (e) {
        //     e.preventDefault()
        // }


        //创建按钮div
        let div_btn = document.createElement("div");
        div_btn.id = "div_btn";
        div_btn.style.position = "fixed";
        div_btn.style.top = "50%";
        div_btn.style.left = "0";
        div_btn.style.width = "100%";
        div_btn.style.height = "584px";

        div_btn.appendChild(img);


        let btn_aa = document.createElement("div");

        //加按钮
        let btn_again = document.createElement("div");
        btn_again.id = "btn_again";
        btn_again.style.width = "100px";
        btn_again.style.height = "65px";
        btn_again.style.position = "absolute";
        btn_again.style.bottom = "285px";
        btn_again.style.left = "22px";
        // btn_again.style.right = "0px";
        // btn_again.style.margin = "auto";

        div_btn.appendChild(btn_again);
        //再次游戏
        btn_again.onclick = function func_test() {
            history.go(0);
        };


        //俩按钮
        btn_aa.id = "btn_aa";
        btn_aa.style.width = "100px";
        btn_aa.style.height = "65px";
        btn_aa.style.position = "absolute";
        btn_aa.style.bottom = "285px";
        btn_aa.style.right = "22px";


        // btn_aa.style.right = "0px";
        // btn_again.style.margin = "auto";

        btn_aa.onclick = function func_again() {
            div_btn.style.display = "none";
            self.shareNode.active = true;
        };


        div_btn.appendChild(btn_aa);



        let btn_music = document.createElement("div");
        //俩按钮
        btn_music.id = "btn_music";
        btn_music.style.width = "55px";
        btn_music.style.height = "65px";
        btn_music.style.position = "absolute";
        btn_music.style.top = "-330px";
        btn_music.style.right = "0px";





        // btn_aa.style.right = "0px";
        // btn_again.style.margin = "auto";

        btn_music.onclick = function func_music() {
            // div_btn.style.display = "none";
            // self.shareNode.active = true;

            if (self.musicCheck === true) {

                self.audioSource.pause();
                self.musicAnim.pause();
                self.musicCheck = false;
            } else {
                self.audioSource.resume();
                self.musicAnim.resume();
                self.musicCheck = true;
            }

        };


        div_btn.appendChild(btn_music);





        //创建按钮div
        let getResult = document.createElement("div");
        getResult.id = "goMini";
        getResult.style.position = "absolute";

        getResult.style.width = "80px";
        getResult.style.height = "65px";
        getResult.style.bottom = "285px";
        getResult.style.right = "0px";
        getResult.style.left = "0px";
        getResult.style.margin = "auto";


        div_btn.appendChild(getResult);




        // 再次游戏
        getResult.onclick = function func_goMini() {
            window.location.href = "https://mp.weixin.qq.com/s/8xWmACdqDfLl9lytnT5KbA";
        };


        let divGame = document.getElementById("Cocos2dGameContainer");
        divGame.appendChild(div_btn);
        perserve();


        if (callback !== null) {
            callback();
        }





        // createErweima();
        // haibao();

    }



    buttonClick(evt: cc.Event.EventTouch, value: string) {
        const self = this;
        switch (value) {
            case "go":

                this.mainSelect.getChildByName("selectTips").active = false;
                jiedian(3);

                cc.tween(this.mainSelect)
                    .to(1, { opacity: 0 })
                    .call(() => {
                        this.mainSelect.active = false;

                        cc.tween(this.gameNode.getChildByName("packet"))
                            .delay(0.5)
                            .to(1, { opacity: 255 })
                            .delay(1)
                            .to(1, { opacity: 0 })
                            .start()

                        cc.tween(this.gameNode.getChildByName("bear"))
                            .delay(1)
                            .to(1, { opacity: 255 })
                            .delay(1)
                            .to(1, { opacity: 0 })
                            .call(() => {

                                cc.tween(this.gameNode.getChildByName("tips"))
                                    .to(1, { opacity: 255 })
                                    .start()
                            })
                            .start()

                    })
                    .start()




                let nowPageIndex = this.selectImg.getCurrentPageIndex();
                this.mainBg[nowPageIndex].active = true;

                // let btn_save = document.createElement("div");
                //俩按钮
                // btn_save.id = "btn_save";
                // btn_save.style.width = "80px";
                // btn_save.style.height = "100px";
                // btn_save.style.position = "absolute";
                // btn_save.style.bottom = "100px";
                // btn_save.style.right = "22px";


                let img = document.createElement("img");
                img.src = "/Public/EnjoyCherryBlossoms/qrcode.jpg"; //截图数据
                img.id = "btn_save";
                img.alt = "btn_save";
                img.width = 430;
                img.height = 430;
                img.style.height = "100px";
                img.style.width = "90px";
                img.style.position = "absolute";
                img.style.right = "0px";
                // img.style.bottom = "100px";
                if (cc.winSize.height === 1624) {
                    img.style.bottom = "12%";

                } else {

                    img.style.bottom = "6%";
                }

                img.style.opacity = "0";
                // img.style.transform = "translate(-50%,-50%)";


                // img.ontouchstart = function (e) {
                //     e.preventDefault()
                // }



                // btn_save.onclick = function func_again() {
                // };



                let divGame = document.getElementById("Cocos2dGameContainer");
                divGame.appendChild(img);






                break;
            case "left":

                this.mainSelect.getChildByName("right").active = true;
                let pageIndex = this.selectImg.getCurrentPageIndex();
                if (pageIndex !== 0) {
                    this.selectImg.scrollToPage(pageIndex - 1, 0.5);
                }

                if (pageIndex === 1) {
                    this.mainSelect.getChildByName("left").active = false;
                }


                break;
            case "right":

                this.mainSelect.getChildByName("left").active = true;

                let pageIndex2 = this.selectImg.getCurrentPageIndex();
                if (pageIndex2 !== 3) {
                    this.selectImg.scrollToPage(pageIndex2 + 1, 0.5);
                }

                cc.log(pageIndex2);
                if (pageIndex2 === 2) {
                    this.mainSelect.getChildByName("right").active = false;
                }
                break;
            case "finish":
                jiedian(4);


                this.initRender(() => { }, 0);


                let btn_saves = document.getElementById("btn_save")
                if (btn_saves !== null && btn_saves !== undefined) {
                    btn_saves.remove();
                }


                cc.tween(self.gameNode)
                    .to(1, { opacity: 0 })
                    .call(() => {
                        self.gameNode.active = false;

                        self.initRender(() => { }, 1);
                    })
                    .start()
                break;

            case "commit":
                jiedian(2);


                if (dataimag !== null && dataimag !== undefined) {
                    let imageObj = new Image();
                    cc.log("res === " + dataimag)
                    imageObj.src = dataimag;
                    let textureObj = new cc.Texture2D();
                    textureObj.initWithElement(imageObj);
                    textureObj.handleLoadedTexture();
                    this.resultNode.getChildByName("bottomText").getChildByName("codeQ").getComponent(cc.Sprite).spriteFrame = new cc.SpriteFrame(textureObj);
                    // this.resultQrCode.scale = 0.5;
                    dataimag = null;
                }

                let testString = this.nameNode.getChildByName("otherName").getComponent(cc.EditBox).string;

                if (testString === "") {
                    cc.log("请填写姓名");
                    this.toast.active = true;
                    this.toast.getChildByName("info").getComponent(cc.Label).string = "请填写姓名";

                    cc.tween(this.toast)
                        .to(1, { opacity: 255 })
                        .start()


                    this.nameNode.getChildByName("otherName").getComponent(cc.EditBox).scheduleOnce(() => {

                        cc.tween(this.toast)
                            .to(0.3, { opacity: 0 })
                            .call(() => {
                                this.toast.active = false;
                            })
                            .start()

                    }, 1.5);

                    return;
                }



                this._toName = testString;

                this.resultNode.getChildByName("nameText").getComponent(cc.Label).string = this._toName;
                cc.tween(self.nameNode)
                    .to(1, { opacity: 0 })
                    .call(() => {
                        self.nameNode.active = false;
                        // 渲染摄像机
                        // self.initRender(() => { }, 1);
                    })
                    .start()

                this.selectImg.scheduleOnce(() => {
                    cc.tween(this.mainSelect.getChildByName("selectTips"))
                        .to(0.7, { opacity: 0 })
                        .call(() => {
                            this.mainSelect.getChildByName("selectTips").active = false;
                        })
                        .start()

                }, 4);


                break;
            case "closeShare":
                let divBtn = document.getElementById("div_btn")
                if (divBtn !== null && divBtn !== undefined) {
                    divBtn.style.display = "block";
                }

                this.shareNode.active = false;
                break;
            case "share":
                let divBtns = document.getElementById("div_btn")
                if (divBtns !== null && divBtns !== undefined) {
                    divBtns.style.display = "none";
                }

                self.shareNode.active = true;
                break;
            case "smallGo":
                this.gameNode.getChildByName("tips").active = false;
                this.gameNode.getChildByName("finish").getComponent(cc.Animation).play();
                break;
            case "music":
                if (this.musicCheck === true) {

                    this.audioSource.pause();
                    this.musicAnim.pause();
                    this.musicCheck = false;
                } else {
                    this.audioSource.resume();
                    this.musicAnim.resume();
                    this.musicCheck = true;
                }


                // this.gameNode.getChildByName("tips").active = false;
                break;
        }
    }








}

