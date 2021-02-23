cc.Class({
    extends: cc.Component,

    properties: {
        // defaults, set visually when attaching this script to the Canvas
        theme: cc.Node,
        themeKeHu: cc.Node,
        userInsertView: cc.Node,
        mainView: cc.Node,
        loginView: cc.Node,
        posters: cc.Node,
        pageView: cc.PageView,
        resultArray: {
            default: [],
            type: cc.Node,
        },
        musicAnima: cc.Animation,
        musciAudio: cc.AudioSource,
        shareMask: cc.Node
    },
    // 金色 273.342
    // 红色 -192.368

    // use this for initialization
    onLoad: function () {
        var self = this;
        this.isMusic = true;
        // window.checkUser = new Object();
        // window.checkUser.user_status = 2;
        // window.checkUser.model_id = 1;
        // window.checkUser.fromname = 1;
        // window.checkUser.toname = 2;


        if (2 === window.checkUser.user_status) {
            cc.tween(this.theme)
                .to(0.2, { scale: 1.2 })
                .to(0.2, { scale: 1 })
                .start()

        } else {
            this.themeKeHu.active = true;
            this.theme.active = false;
            cc.tween(this.themeKeHu)
                .to(0.2, { scale: 1.2 })
                .to(0.2, { scale: 1 })
                .start()
        }

        cc.tween(this.mainView.getChildByName("effect1"))
            .blink(7, 3)
            .repeatForever()
            .start()

        cc.tween(this.mainView.getChildByName("effect2"))
            .blink(10, 3)
            .repeatForever()
            .start()

        cc.tween(this.mainView.getChildByName("effect3"))
            .blink(12, 3)
            .repeatForever()
            .start()


        cc.tween(this.mainView.getChildByName("touTiao"))
            .delay(0.6)
            .to(0.2, { scale: 0.7 })
            .to(0.2, { scale: 1.2 })
            .to(0.2, { scale: 1 })
            .start()


        cc.tween(this.mainView.getChildByName("tiltok"))
            .delay(0.8)
            .to(0.2, { scale: 0.7 })
            .to(0.2, { scale: 1.2 })
            .to(0.2, { scale: 1 })
            .start()


        cc.tween(this.mainView.getChildByName("xiGua"))
            .delay(0.4)
            .to(0.2, { scale: 0.7 })
            .to(0.2, { scale: 1.2 })
            .to(0.2, { scale: 1 })
            .start()

        this.pageView.horizontal = false;


        // }, this);

    },

    start: function () {




        this.pageView.node.on(cc.Node.EventType.TOUCH_MOVE, (event) => this.pageView._unregisterEvent())



    },

    onClickFunc: function (event, value) {
        var self = this;
        switch (value) {
            case "begin":

                if (2 === window.checkUser.user_status) {
                    this.scaleShowAnim(this.loginView, true);
                } else {
                    // 接口
                    // 数据
                    this.resultArray[window.checkUser.model_id].active = true;

                    this.posters.getChildByName("background").getChildByName("myName").getComponent(cc.Label).string = window.checkUser.fromname;
                    this.posters.getChildByName("background").getChildByName("sendName").getComponent(cc.Label).string = window.checkUser.toname;
                    // let a = this.posters.getChildByName("background").getChildByName(window.checkUser.model_id + 1)
                    // .active = true;


                    this.posters.getChildByName("send").active = false;
                    this.posters.getChildByName("againEdit").active = false;


                    this.scaleShowAnim(this.posters, true, () => {
                        self.initRender()
                    });
                }

                break;
            case "sendALetter":
                let pageIndexes = this.pageView.getCurrentPageIndex();
                let nodeName = "page_" + (pageIndexes + 1);
                let _page = this.pageView.node.getChildByName("view").getChildByName("content").getChildByName(nodeName);
                this.myName = _page.getChildByName("myName").getComponent(cc.EditBox).string;
                cc.log(this.myName);
                this.userName = _page.getChildByName("sendName").getComponent(cc.EditBox).string;
                cc.log(this.userName);

                this.myName.replace(/\s+/g, "");
                this.userName.replace(/\s+/g, "");

                if (this.myName === '') {
                    cc.vv.toast.show("请填写发件人的姓名");
                    cc.log("请填写发件人的姓名");
                    return;
                }
                if (this.userName === '') {
                    cc.log("请填写收件人姓名");
                    cc.vv.toast.show("请填写收件人姓名");

                    return;
                }

                let myname1 = this.posters.getChildByName("background").getChildByName("myName").getComponent(cc.Label)
                myname1.string = this.myName;
                let snedName1 = this.posters.getChildByName("background").getChildByName("sendName").getComponent(cc.Label)
                snedName1.string = this.userName;

                this.userInsertView.active = false;
                this.userInsertView.getChildByName("background").scale = 0;

                this.resultArray[pageIndexes].active = true;
                // 接口
                // model_id, fromname, toname
                uploadJiaShu(pageIndexes, this.myName, this.userName);

                this.scaleShowAnim(this.posters, true, function () {

                    // cc.tween(self.posters.getChildByName("red"))
                    //     .to(0.5, { x: -192.368 })
                    //     .start()



                    cc.tween(self.posters.getChildByName("send"))
                        .to(0.3, { x: -189.685 }, { easing: "elasticInOut" })
                        // .to(0.2, { x: -149.685 }, { easing: "elasticInOut" })
                        .start()

                    cc.tween(self.posters.getChildByName("againEdit"))
                        .to(0.3, { x: 183.013 }, { easing: "elasticInOut" })
                        // .to(0.2, { x: 143.013 }, { easing: "elasticInOut" })
                        .call(() => { self.initRender() })
                        .start()




                    // cc.tween(self.posters.getChildByName("gold"))
                    //     .to(0.5, { x: 273.342 })
                    //     .call(() => { self.initRender() })
                    //     .start()



                });

                break;
            case "login":
                this.account = this.loginView.getChildByName("account").getComponent(cc.EditBox).string;
                this.password = this.loginView.getChildByName("password").getComponent(cc.EditBox).string;

                // 账号密码验证
                if (this.account === '') {
                    cc.log("请填写发件人的姓名");
                    cc.vv.toast.show("请输入账号！");

                    return;
                }
                if (this.password === '') {
                    cc.log("请填写收件人姓名");
                    cc.vv.toast.show("请输入密码！");

                    return;
                }

                if (parseInt(this.password) !== 2021) {
                    cc.vv.toast.show("密码输入错误！");
                    return;
                }
                if (parseInt(this.account) !== 2021) {
                    cc.vv.toast.show("账号输入错误！");
                    return;
                }



                this.loginView.active = false;
                this.loginView.getChildByName("background").scale = 0;

                this.scaleShowAnim(this.userInsertView, true);

                break;
            case "left":


                this.userInsertView.getChildByName("right").getComponent(cc.Button).interactable = true;
                // this.pageView._registerEvent();

                let pageIndex = this.pageView.getCurrentPageIndex();


                let _page1 = this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_" + (pageIndex + 1));
                let myNames = _page1.getChildByName("myName").getComponent(cc.EditBox).string;
                let sendNames = _page1.getChildByName("sendName").getComponent(cc.EditBox).string;

                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_1").getChildByName("myName").getComponent(cc.EditBox).string = myNames;
                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_1").getChildByName("sendName").getComponent(cc.EditBox).string = sendNames;
                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_2").getChildByName("myName").getComponent(cc.EditBox).string = myNames;
                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_2").getChildByName("sendName").getComponent(cc.EditBox).string = sendNames;
                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_3").getChildByName("myName").getComponent(cc.EditBox).string = myNames;
                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_3").getChildByName("sendName").getComponent(cc.EditBox).string = sendNames;






                if (pageIndex !== 0) {
                    this.pageView.scrollToPage(pageIndex - 1);
                }
                if (pageIndex === 1) {
                    this.userInsertView.getChildByName("left").getComponent(cc.Button).interactable = false;
                }


                break;
            case "right":
                // this.pageView._registerEvent();


                let pageIndex2 = this.pageView.getCurrentPageIndex();
                this.userInsertView.getChildByName("left").getComponent(cc.Button).interactable = true;

                let _pages = this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_" + (pageIndex2 + 1));
                let myNames2 = _pages.getChildByName("myName").getComponent(cc.EditBox).string;
                let sendNames2 = _pages.getChildByName("sendName").getComponent(cc.EditBox).string;

                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_1").getChildByName("myName").getComponent(cc.EditBox).string = myNames2;
                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_1").getChildByName("sendName").getComponent(cc.EditBox).string = sendNames2;
                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_2").getChildByName("myName").getComponent(cc.EditBox).string = myNames2;
                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_2").getChildByName("sendName").getComponent(cc.EditBox).string = sendNames2;
                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_3").getChildByName("myName").getComponent(cc.EditBox).string = myNames2;
                this.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_3").getChildByName("sendName").getComponent(cc.EditBox).string = sendNames2;


                if (pageIndex2 !== 2) {
                    this.pageView.scrollToPage(pageIndex2 + 1);
                }
                if (pageIndex2 === 1) {
                    this.userInsertView.getChildByName("right").getComponent(cc.Button).interactable = false;
                }
                break;
            case "audio":

                break;
            case "shareMask":
                let btn_aa = document.getElementById("div_btn");
                // let btn_again = document.getElementById("btn_again");
                // let img = document.getElementById("capture");

                btn_aa.style.display = "block";
                // btn_again.style.display = "block";
                // img.style.display = "block";
                this.shareMask.active = false;
                // this.musicAnima.node.active = true;
                break;
        }

    },

    scaleShowAnim: function (target, isPop, callback) {
        if (true === isPop) {
            target.active = true;
            let center = target.getChildByName("background");
            cc.tween(center)
                .to(0.2, { scale: 1.2 })
                .to(0.2, { scale: 1 })
                .call(() => {
                    if (null !== callback && undefined !== callback) {
                        callback();
                    }

                })
                .start()
        } else {
            cc.tween(target)
                .to(0.2, { scale: 1.2 })
                .to(0.2, { scale: 1 })
                .call(() => {
                    if (null !== callback && undefined !== callback) {
                        callback();
                    }

                })

                .start()
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


    /**
     * @description: 开始截图
     */
    btn_image_knife: function () {

        var self = this;
        this.posters.getChildByName("send").active = false;
        this.posters.getChildByName("againEdit").active = false;
        this.posters.getChildByName("baoCun").active = false;
        // this.musicAnima.node.active = false;

        // 执行一次 render，将所渲染的内容渲染到纹理上
        this._camera.render(undefined);
        //到这里，截图就已经完成了

        if (window.checkUser.user_status === 2) {

            this.posters.getChildByName("send").active = true;
            this.posters.getChildByName("againEdit").active = true;


        }
        // this.musicAnima.node.active = true;
        this.posters.getChildByName("baoCun").active = true;


        // 接下去，可以从 RenderTexture 中获取数据，进行深加工
        let texture = this._texture;
        let data = texture.readPixels();

        let width = texture.width; ``
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
        img.style.opacity = 0;
        img.style.transform = "translate(-50%,-50%)";


        //创建按钮div
        let div_btn = document.createElement("div");
        div_btn.id = "div_btn";
        div_btn.style.position = "fixed";
        div_btn.style.top = "50%";
        div_btn.style.left = 0;
        div_btn.style.width = "100%";
        div_btn.style.height = "584px";

        div_btn.appendChild(img);

        if (window.checkUser.user_status === 2) {

            let btn_aa = document.createElement("div");

            //加按钮
            let btn_again = document.createElement("div");
            btn_again.id = "btn_again";
            btn_again.style.width = "190px";
            btn_again.style.height = "60px";
            btn_again.style.position = "absolute";
            btn_again.style.bottom = "360px";
            btn_again.style.left = "0px";
            // btn_again.style.right = "0px";
            // btn_again.style.margin = "auto";

            div_btn.appendChild(btn_again);
            //再次游戏
            btn_again.onclick = function func_test() {
                div_btn.style.display = "none";
                self.shareMask.active = true;
            };




            //俩按钮
            btn_aa.id = "btn_aa";
            btn_aa.style.width = "190px";
            btn_aa.style.height = "60px";
            btn_aa.style.position = "absolute";
            btn_aa.style.bottom = "360px";
            btn_aa.style.right = "0px";
            // btn_aa.style.right = "0px";
            // btn_again.style.margin = "auto";

            //再次游戏
            btn_aa.onclick = function func_again() {

                let divGame = document.getElementById("div_btn");
                divGame.remove();


                // self.userInsertView.getChildByName("background").getChildByName("myName").getComponent(cc.EditBox).string = "";
                // self.userInsertView.getChildByName("background").getChildByName("sendName").getComponent(cc.EditBox).string = "";


                // let pageIndexes = self.pageView.getCurrentPageIndex();
                for (let i = 0; i < 3; i++) {
                    // let nodeName = "page_" + (pageIndexes + 1);

                    let _page = self.pageView.node.getChildByName("view").getChildByName("content").getChildByName("page_" + (i + 1));
                    _page.getChildByName("myName").getComponent(cc.EditBox).string = "";
                    _page.getChildByName("sendName").getComponent(cc.EditBox).string = "";
                }



                self.posters.active = false;
                self.posters.getChildByName("background").scale = 0;

                self.scaleShowAnim(self.userInsertView, true, function () {

                    cc.tween(self.userInsertView.getChildByName("red"))
                        .to(0.5, { x: -192.368 })
                        .start()

                    cc.tween(self.userInsertView.getChildByName("gold"))
                        .to(0.5, { x: 273.342 })
                        .start()
                });



            };


            div_btn.appendChild(btn_aa);

        }

        //再次游戏
        // btn_again.onclick = function func_again() {
        //     history.go(0);
        // };


        let divGame = document.getElementById("Cocos2dGameContainer");
        divGame.appendChild(div_btn);
        // createErweima();
        haibao();

        // cc.vv.divGame = divGame;

    },

    // called every frame
    update: function (dt) {
    },
});
