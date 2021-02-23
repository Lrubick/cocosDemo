
// const game = require("game");
cc.Class({
    extends: cc.Component,
    properties: {
        playerNode: {
            default: null,
            type: cc.Node
        },
        playerAni: {
            default: null,
            type: cc.Animation
        },
        barrTxt: {
            default: null,
            type: cc.Label
        },
        moneysound: {
            default: null,
            type: cc.AudioClip
        },
        masknumend: {
            default: null,
            type: cc.Node
        },
        fivemorebtn: {
            default: null,
            type: cc.Node
        },
        fivelessbtn: {
            default: null,
            type: cc.Node
        },
        barrsound: {
            default: null,
            type: cc.AudioClip
        },
        touchMode: cc.Node,
    },
    onLoad: function () {
        cc.director.getCollisionManager().enabled = true;
        this.firstX = 0;
        this.firstY = 0;
        this.barrindex = 0;//障碍物
        this.touchMode.on(cc.Node.EventType.TOUCH_START, this.moveStart, this);
        this.touchMode.on(cc.Node.EventType.TOUCH_END, this.moveUp, this);
    },
    moveStart(event) {
        let location = event.getLocation();// 获取节点坐标
        this.firstX = Math.floor(location.x);
        this.firstY = Math.floor(location.y);
    },
    moveUp(event) {
        let touchPoint = event.getLocation();
        let endX = this.firstX - Math.floor(touchPoint.x);
        let endY = this.firstY - Math.floor(touchPoint.y);
        if (Math.abs(endX) > Math.abs(endY)) {
            if (endX > 0) {
                cc.tween(this.playerNode)
                    .to(0.03, { position: cc.v2(-165.386, -334.217) }, { easing: 'sineInOut' })
                    .start()
            } else {
                //向右函数
                cc.tween(this.playerNode)
                    .to(0.03, { position: cc.v2(165.386, -334.217) }, { easing: 'sineInOut' })
                    .start()
            }
        }
    },
    onCollisionEnter: function (other, self) {
        var barrstr = other.name;
        if (barrstr.indexOf("barr") != -1) {
            if (window.FLAG == true) {
                if (this.barrindex >= 4 && this.masknumend.active == false && window.FLAG != false) {
                    window.NUMM = 0
                    // this.playerAni.pause();
                    this.fivelessbtn.active = true
                    this.masknumend.active = true;
                    let game = this.node.parent.getComponent("game");
                    game.stopGame = false;
                    game.playerAni.stop();
                    game.lightbox.removeAllChildren();
                    game.lightboxright.removeAllChildren();
                    game.unscheduleAllCallbacks();
                    game.barrbox.removeAllChildren();

                    window.FLAG = false;
                    // this.barrTxt.string = "5个";
                    window.BARR_INDEX = 5;
                } else {
                    this.barrindex++;
                    window.BARR_INDEX = this.barrindex
                    if (window.BARR_INDEX <= 5) {
                        cc.audioEngine.play(this.barrsound);
                    }
                }
                this.barrTxt.string = this.barrindex + "个";
            }
        } else {
            if (window.NUMM <= 1000 && window.BARR_INDEX <= 4) {
                cc.audioEngine.play(this.moneysound);
            }
        }
    },

    start() {

    },

});



