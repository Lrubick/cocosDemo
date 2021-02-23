cc.Class({
    extends: cc.Component,

    properties: {
        main: cc.Node,
        secreBase: cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },


    createQrCode: function () {
        var self = this;

        // 接下来就可以对这些数据进行操作了
        let canvas = document.createElement("canvas");
        // document.body.appendChild(btn); // 没有添加到body上，不用担心内存泄漏

        cc.log(cc.winSize);
        let ctx = canvas.getContext("2d");
        // let width = 750;
        // let height = 812;
        canvas.width = 750;
        canvas.height = 812;

        let img = document.createElement("img");
        img.src = "./qrCode.png"; //截图数据
        img.id = "capture";
        img.alt = "capture";
        img.width = 300;
        img.height = 300;
        img.style.position = "absolute";
        img.style.top = "-2%"
        // if (cc.winSize.height > 1334) {
        //     img.style.bottom = "9%";

        // } else if (cc.winSize.height < 1332) {
        //     img.style.bottom = "1%";

        // } else {
        //     img.style.bottom = "4%";
        // }
        img.style.left = "-6%";
        img.style.opacity = 1;
        img.style.transform = "scale(0.5)";

        //创建按钮div
        let div_btn = document.createElement("div");
        div_btn.id = "div_btn";
        div_btn.style.position = "fixed";
        div_btn.style.top = "50%";
        div_btn.style.left = 0;
        div_btn.style.width = "100%";
        div_btn.style.height = "584px";

        let divGame = document.getElementById("Cocos2dGameContainer");
        divGame.appendChild(div_btn);


        //创建按钮div
        let div_btn2 = document.createElement("div");
        div_btn2.id = "div_btn2";
        div_btn2.style.position = "relative";
        div_btn2.style.width = "100%";
        div_btn2.style.height = "100%";

        div_btn.appendChild(div_btn2);


        div_btn2.appendChild(img);
    },

    start() {

    },

    onClick: function (sender, value) {
        let divGame = document.getElementById("div_btn");
        divGame.remove();
        if (value == "back") {
            this.secreBase.opacity = 255
            this.secreBase.scale = 3
            this.secreBase.active = true;
            let anim = this.secreBase.getComponent(cc.Animation).play("backShow");

            // anim.speed = -1;
            this.main.active = false;
        } else {


            for (let i = 0; i < cc.vv.main.starNodePosition.length; i++) {
                cc.vv.main.starNode[i].setPosition(cc.vv.main.starNodePosition[i].x, cc.vv.main.starNodePosition[i].y)
                cc.vv.main.starNode[i].setScale(1)
            }
            let mainNode = this.main;
            //重置星球
            mainNode.active = true;
            mainNode.getChildByName("starBtn").opacity = 255;
            mainNode.getChildByName("tips").opacity = 255;
            mainNode.getChildByName("hands2").opacity = 255;
            mainNode.getChildByName("hands").opacity = 255;

            let secreBaseNode = this.secreBase;

            let anim = mainNode.getComponent(cc.Animation).play("backShow");
            anim.on("finished", function () {
                anim.off("finished", null, this);
                mainNode.getChildByName("hands2").active = true;

                secreBaseNode.active = true;
                secreBaseNode.opacity = 255;
                secreBaseNode.scale = 1;
                mainNode.getComponent(cc.Animation).play("starMove");
            }, this);

        }
    }

    // update (dt) {},
});
