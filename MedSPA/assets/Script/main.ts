const { ccclass, property } = cc._decorator;

@ccclass
export default class main extends cc.Component {

    @property(cc.Node)
    title: cc.Node = null;

    @property([cc.Node])
    questionNode: cc.Node[] = [];

    @property(cc.Node)
    product: cc.Node = null;


    @property(cc.Node)
    kv: cc.Node = null;


    @property(cc.Node)
    posters: cc.Node = null;


    @property([cc.Node])
    copywriting: cc.Node[] = [];


    @property([cc.Node])
    copyTitle: cc.Node[] = [];

    @property(cc.Node)
    shareNode: cc.Node = null;

    @property(cc.Node)
    toast: cc.Node = null;

    @property(cc.AudioSource)
    clickAudio: cc.AudioSource = null;

    @property(cc.Camera)
    _camera: cc.Camera = null;

    @property(cc.RenderTexture)
    _texture: cc.RenderTexture = null;

    firstX: number = null;
    firsty: number = null;

    pageIndex: number = 1;
    // onLoad () {}

    start() {
        cc.tween(this.title)
            .to(0.3, { scale: 1.2 })
            .to(0.2, { scale: 1 })
            .start()
    }


    touchCheck(eventNode: cc.Node) {
        eventNode.on(cc.Node.EventType.TOUCH_START, function (event: any) {
            let location = event.getLocation();// 获取节点坐标
            this.firstX = location.x;
            this.firstY = location.y;
        }, this);

        eventNode.on(cc.Node.EventType.TOUCH_END, function (event: any) {
            let touchPoint = event.getLocation();
            let endX = this.firstX - touchPoint.x;
            let endY = this.firstY - touchPoint.y;

            if (Math.abs(endX) > Math.abs(endY)) {
                //手势向左右
                //判断向左还是向右 
                if (endX > 0) {
                    //向左函数
                    cc.log('left');
                } else {
                    //向右函数
                    cc.log('right');
                }
            } else {
                //手势向上下
                //判断手势向上还是向下
                if (endY > 0) {
                    //向下函数
                    cc.log('down');


                } else {
                    //向上函数
                    cc.log('up');
                    cc.tween(eventNode.parent)
                        .to(3, { y: 10000 })
                        .start()

                    this.pageIndex += 1;



                    if (this.pageIndex > 1 && this.pageIndex < 6) {
                        cc.tween(this.questionNode[this.pageIndex - 1].getChildByName("question").getChildByName("layout"))
                            // .delay(0.7)
                            .to(1, { x: -1 })
                            .start()
                    }

                    if (this.pageIndex === 2) {
                        cc.tween(this.questionNode[this.pageIndex - 1].getChildByName("answer").getChildByName("penWu"))
                            .repeatForever(
                                cc.tween(this.questionNode[this.pageIndex - 1].getChildByName("answer").getChildByName("penWu"))
                                    .to(1, { opacity: 0 })
                                    .delay(1)
                                    .to(1, { opacity: 255 })
                                    .start()
                            )
                            .start()
                    }


                    if (this.pageIndex === 3) {
                        cc.tween(this.questionNode[this.pageIndex - 1].getChildByName("question").getChildByName("tanQi"))
                            .to(1.3, { scale: 1 })
                            .start()

                        cc.tween(this.questionNode[this.pageIndex - 1].getChildByName("question").getChildByName("talk"))
                            .to(1, { scale: 1 })
                            .start()
                    }

                    if (this.pageIndex === 4) {
                        this.questionNode[this.pageIndex - 1].getChildByName("answer").getChildByName("threeballoon").getComponent(cc.Animation).play();
                        this.questionNode[this.pageIndex - 1].getChildByName("answer").getChildByName("water planet ballon").getComponent(cc.Animation).play();
                        this.questionNode[this.pageIndex - 1].getChildByName("answer").getChildByName("1balloon").getComponent(cc.Animation).play();
                        this.questionNode[this.pageIndex - 1].getChildByName("answer").getChildByName("2balloon").getComponent(cc.Animation).play();
                    }


                    if (this.pageIndex === 5) {
                        cc.tween(this.questionNode[this.pageIndex - 1].getChildByName("answer").getChildByName("penWu"))
                            .repeatForever(
                                cc.tween(this.questionNode[this.pageIndex - 1].getChildByName("answer").getChildByName("penWu"))
                                    .to(1, { opacity: 0 })
                                    .delay(1)
                                    .to(1, { opacity: 255 })
                                    .start()
                            )
                            .start()

                    }

                    if (this.pageIndex === 6) {

                        cc.tween(this.product.getChildByName("star"))
                            .to(0.7, { opacity: 255 })
                            .call(() => {
                                this.product.getChildByName("introduction").getComponent(cc.Animation).play();
                            })
                            .start()
                    }

                }
            }
        }, this);
    }


    questionSelect(event: any, value: string): void {

        this.clickAudio.play();

        switch (value) {
            case "start":
                this.kv.getChildByName("bigStar").getComponent(cc.Animation).stop();
                this.kv.getChildByName("star").getComponent(cc.Animation).stop();
                this.kv.getChildByName("bigStar").active = false;
                this.kv.getChildByName("star").active = false;

                cc.tween(this.kv)
                    .to(3, { y: 10000 })
                    .start()

                cc.tween(this.questionNode[0].getChildByName("question").getChildByName("layout"))
                    .delay(0.7)
                    .to(1, { x: -1 })
                    .start()

                break;
            case "1":
            case "2":
            case "3":
                cc.tween(this.questionNode[0].getChildByName("question"))
                    .to(4, { y: 10000 })
                    .start()

                cc.tween(this.questionNode[0].getChildByName("answer").getChildByName("answer1"))
                    .to(1, { opacity: 255 })
                    .start()

                cc.tween(this.questionNode[0].getChildByName("answer").getChildByName("answer2"))
                    .delay(1)
                    .to(1, { opacity: 255 })
                    .start()

                this.touchCheck(this.questionNode[0].getChildByName("answer"));

                break;
            case "4":
            case "5":
            case "6":
                cc.tween(this.questionNode[1].getChildByName("question"))
                    .to(4, { y: 10000 })
                    .start()

                cc.tween(this.questionNode[1].getChildByName("answer").getChildByName("answer1"))
                    .to(1, { opacity: 255 })
                    .start()

                cc.tween(this.questionNode[1].getChildByName("answer").getChildByName("answer2"))
                    .delay(1)
                    .to(1, { opacity: 255 })
                    .start()

                this.touchCheck(this.questionNode[1].getChildByName("answer"));

                break;

            case "7":
            case "8":
            case "9":
                cc.tween(this.questionNode[2].getChildByName("question"))
                    .to(4, { y: 10000 })
                    .start()

                cc.tween(this.questionNode[2].getChildByName("answer").getChildByName("answer1"))
                    .to(1, { opacity: 255 })
                    .start()

                cc.tween(this.questionNode[2].getChildByName("answer").getChildByName("answer2"))
                    .delay(1)
                    .to(1, { opacity: 255 })
                    .start()

                this.touchCheck(this.questionNode[2].getChildByName("answer"));

                break;

            case "10":
            case "11":
            case "12":
                cc.tween(this.questionNode[3].getChildByName("question"))
                    .to(4, { y: 10000 })
                    .start()

                cc.tween(this.questionNode[3].getChildByName("answer").getChildByName("answer1"))
                    .to(1, { opacity: 255 })
                    .start()

                cc.tween(this.questionNode[3].getChildByName("answer").getChildByName("answer2"))
                    .delay(1)
                    .to(1, { opacity: 255 })
                    .start()

                this.touchCheck(this.questionNode[3].getChildByName("answer"));

                break;

            case "13":
            case "14":
            case "15":
                cc.tween(this.questionNode[4].getChildByName("question"))
                    .to(4, { y: 10000 })
                    .start()


                cc.tween(this.questionNode[4].getChildByName("answer").getChildByName("answer1"))
                    .to(1, { opacity: 255 })
                    .start()

                cc.tween(this.questionNode[4].getChildByName("answer").getChildByName("answer2"))
                    .delay(1)
                    .to(1, { opacity: 255 })
                    .start()

                this.touchCheck(this.questionNode[4].getChildByName("answer"));

                break;
            case "look":
                cc.tween(this.product)
                    .to(4, { y: 10000 })
                    .call(() => {
                        this.initRender();
                    })
                    .start()



                cc.tween(this.posters.getChildByName("cat"))
                    .repeatForever(
                        cc.tween(this.posters.getChildByName("cat"))
                            .to(0.6, { y: 430 })
                            .to(0.6, { y: 420 })
                            .start()
                    ).start();

                cc.tween(this.posters.getChildByName("star"))
                    .to(0.8, { opacity: 255 })
                    .start()

                let rand = Math.floor(Math.random() * 4);

                cc.tween(this.copyTitle[rand])
                    .to(0.8, { opacity: 255 })
                    .start()

                cc.tween(this.copywriting[rand])
                    .delay(0.8)
                    .to(0.8, { opacity: 255 })
                    .start()

                break;
            case "again":
                history.go(0);
                break;
            case "share":

                break;
            case "closeShare":
                let div_btn = document.getElementById("div_btn")
                div_btn.style.display = "block";
                let music2 = document.getElementById("audio_boxID")
                music2.style.display = "block";

                this.shareNode.active = false;

                break;
            case "tao":
                this.copyToClipBoard();
                break;
        }
    }


    private copyToClipBoard() {
        if (cc.sys.isNative) {
            //原生自己实现
        } else if (cc.sys.isBrowser) {
            var textArea = document.getElementById("clipBoard");
            if (textArea === null) {
                textArea = document.createElement("textarea");
                textArea.id = "clipBoard";
                textArea.textContent = "￥55EQcyrszJm￥";
                document.body.appendChild(textArea);
            }
            textArea.select();
            try {
                const msg = document.execCommand('copy') ? 'successful' : 'unsuccessful';
                cc.log("已经复制到剪贴板");
                this.toast.getChildByName("info").getComponent(cc.Label).string = "淘口令已复制，打开淘宝即可拥有";
                this.toast.active = true
                document.body.removeChild(textArea);
            } catch (err) {
                this.toast.getChildByName("info").getComponent(cc.Label).string = "复制到剪贴板失败";
                this.toast.active = true
                cc.log("复制到剪贴板失败");
            }
            this.toast.getChildByName("info").getComponent(cc.Label).scheduleOnce(() => {
                this.toast.active = false;
            }, 2);


        }
    }


    private initRender() {
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
    }



    /**
     * @description: 开始截图
     */
    private btn_image_knife() {
        let self = this;

        this.posters.getChildByName("tao").active = false;
        this.posters.getChildByName("again").active = false;
        this.posters.getChildByName("share").active = false;
        this.posters.getChildByName("qr").active = true;

        // 执行一次 render，将所渲染的内容渲染到纹理上
        this._camera.render(undefined);
        //到这里，截图就已经完成了

        this.posters.getChildByName("qr").active = false;
        this.posters.getChildByName("tao").active = true;
        this.posters.getChildByName("again").active = true;
        this.posters.getChildByName("share").active = true;


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
        img.style.opacity = "0";
        img.style.transform = "translate(-50%,-50%)";


        //创建按钮div
        let div_btn = document.createElement("div");
        div_btn.id = "div_btn";
        div_btn.style.position = "fixed";
        div_btn.style.top = "50%";
        div_btn.style.left = "0px";
        div_btn.style.width = "100%";
        div_btn.style.height = "584px";

        div_btn.appendChild(img);

        //加按钮
        let btn_again = document.createElement("div");
        btn_again.id = "btn_again";
        btn_again.style.width = "150px";
        btn_again.style.height = "60px";
        btn_again.style.position = "absolute";
        btn_again.style.bottom = "300px";
        btn_again.style.left = "23px";
        btn_again.style.right = "0px";
        // btn_again.style.margin = "auto";

        div_btn.appendChild(btn_again);
        //再次游戏
        btn_again.onclick = function func_again() {
            history.go(0);
        };

        //加按钮
        let btn_share = document.createElement("div");
        btn_share.id = "btn_share";
        btn_share.style.width = "150px";
        btn_share.style.height = "60px";
        btn_share.style.position = "absolute";
        btn_share.style.bottom = "300px";
        // btn_share.style.left = "0px";
        btn_share.style.right = "30px";
        // btn_again.style.margin = "auto";

        div_btn.appendChild(btn_share);
        //再次游戏
        btn_share.onclick = function func_again() {
            self.shareNode.active = true;
            let music = document.getElementById("audio_boxID")
            div_btn.style.display = "none";
            music.style.display = "none";
        };



        //加按钮
        let btn_tao = document.createElement("div");
        btn_tao.id = "btn_tao";
        btn_tao.style.width = "160px";
        btn_tao.style.height = "50px";
        btn_tao.style.position = "absolute";
        btn_tao.style.bottom = "370px";
        btn_tao.style.left = "0px";
        btn_tao.style.right = "0px";
        btn_tao.style.margin = "auto";

        div_btn.appendChild(btn_tao);
        //再次游戏
        btn_tao.onclick = function func_again() {
            self.copyToClipBoard();
        };




        let divGame = document.getElementById("Cocos2dGameContainer");
        divGame.appendChild(div_btn);

        haibao();



        // createErweima();

        //截图完成后隐藏
        // this.node_save.active = false;
        //截图完成后显示结果页
        // this.node_result.active = true;
        // this.node_result_win.active = true;
        // this.node_result.getChildByName("result_" + this.question_index).active = true;
    }

    // update (dt) {}
}
