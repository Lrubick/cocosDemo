cc.Class({
    extends: cc.Component,

    properties: {
        main: cc.Node,
        pageView: cc.PageView,
        qrView: cc.Node,
        hdLength: 3,
        firstX: 0,
        secondX: 520,
        thirdX: 1039,
        hdArr: [cc.Node, cc.Node, cc.Node],
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.hdIndex = 0;
        var self = this;

        this.pageView.schedule(function () {
            // 这里的 this 指向 component
            self.turnOnImage();

        }, 5);

    },



    start() {

    },

    onClickBtn: function (sender, value) {
        switch (value) {
            case "goQrcode":
                // sender.targe
                let animState = this.node.getComponent(cc.Animation).play("hideShow")
                cc.log(animState);
                sender.target.getComponent(cc.Button).enabled = false;
                animState.on("finished", function () {
                    animState.off("finished", null, this);
                    this.node.active = false;
                    cc.vv.qrView.createQrCode();
                    sender.target.getComponent(cc.Button).enabled = true;
                    this.qrView.active = true;
                }, this);
                // this.node.active = false;
                // cc.vv.qrView.createQrCode();
                // this.qrView.active = true;
                break;
            case "goMain":
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

                let testState = mainNode.getComponent(cc.Animation).play("backShow");

                testState.on("finished", function () {
                    testState.off("finished", null, this);
                    mainNode.getChildByName("hands2").active = true;
                    mainNode.getComponent(cc.Animation).play("starMove");
                }, this);
                break;
            case "left":
                let index = this.pageView.getCurrentPageIndex();

                if (index > 0) {
                    this.pageView.scrollToPage(index - 1);
                } else {
                    // this.pageView.scrollToPage(2);
                }
                break;
            case "right":
                let index2 = this.pageView.getCurrentPageIndex();
                cc.log(index2);
                if (index2 < 2) {
                    this.pageView.scrollToPage(index2 + 1)
                } else {
                    // this.pageView.scrollToPage(0);

                }
                break;
        }
    },

    turnOnImage() {
        if (this.hdIndex === null) {
            return;
        }

        if (this.hdIndex >= this.hdLength) {
            this.hdIndex = 0;
        }
        // cc.log("hdIndex = " + this.hdIndex);
        let hdImage = this.hdArr[this.hdIndex]
        if (hdImage !== null) {
            hdImage.x = this.firstX;
            hdImage.runAction(cc.moveBy(1, cc.Vec2(this.firstX - this.secondX, 0)));
        }
        this.hdIndex = this.hdIndex + 1;
        if (this.hdIndex >= this.hdLength) {
            this.hdIndex = 0;
        }

        hdImage = this.hdArr[this.hdIndex];
        if (hdImage !== null) {
            hdImage.x = this.secondX;
            hdImage.runAction(cc.moveBy(1, cc.Vec2(this.firstX - this.secondX, 0)));
        }



        this.hdIndex = this.hdIndex + 1;
        if (this.hdIndex >= this.hdLength) {
            this.hdIndex = 0;
        }

        hdImage = this.hdArr[this.hdIndex];
        if (hdImage !== null) {
            hdImage.x = this.thirdX;
            hdImage.runAction(cc.moveBy(1, cc.Vec2(this.firstX - this.secondX, 0)));
        }

        hdImage.runAction(cc.sequence(cc.delayTime(3), cc.callFunc(function () {
            // this.hdArr[2].x = this.secondX;
            let firstNode = this.hdArr.splice(0, 1);        // 删除 fruits 中的第一个元素
            this.hdArr.push(firstNode[0]);        // 删除 fruits 中的第一个元素
            firstNode.x = this.thirdX;
            this.hdIndex = 0;
        }, this)));

    },


    // update(dt) {



    // },
});
