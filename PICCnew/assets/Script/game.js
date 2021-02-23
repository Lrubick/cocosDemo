const isIOS14Device = cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser && cc.sys.isMobile && /iPhone OS 14/.test(window.navigator.userAgent);
if (isIOS14Device) {
    cc.MeshBuffer.prototype.checkAndSwitchBuffer = function (vertexCount) {
        if (this.vertexOffset + vertexCount > 65535) {
            this.uploadData();
            this._batcher._flush();
        }
    };
    cc.MeshBuffer.prototype.forwardIndiceStartToOffset = function () {
        this.uploadData();
        this.switchBuffer();
    };
}


window.SPEED = 3;//障碍物生成的速度
window.M = 0.1;//米数
window.FLAG = true;
window.NUMM;
window.BARR_INDEX = 0;
cc.Class({
    extends: cc.Component,

    properties: {
        light1: {
            default: null,
            type: cc.Prefab
        },
        playerAni: {
            default: null,
            type: cc.Animation
        },
        gameNode: {
            default: null,
            type: cc.Node
        },
        kvNode: {
            default: null,
            type: cc.Node
        },
        meterTxt: {
            default: null,
            type: cc.Label
        },
        light2: {
            default: null,
            type: cc.Prefab
        },
        barr1: {
            default: null,
            type: cc.Prefab
        },
        barr2: {
            default: null,
            type: cc.Prefab
        },
        barr3: {
            default: null,
            type: cc.Prefab
        },
        barr4: {
            default: null,
            type: cc.Prefab
        },
        barr5: {
            default: null,
            type: cc.Prefab
        },
        lightbox: {
            default: null,
            type: cc.Node
        },
        lightboxright: {
            default: null,
            type: cc.Node
        },
        maskscuess: {
            default: null,
            type: cc.Node
        },
        barrbox: {
            default: null,
            type: cc.Node
        },
    },

    onLoad() {
        this.light = null;
        this.light2nll = null;
        this.speedbothPointX = 0;
        this.speedbothPointY = 0;
        this.barrPointX = 0;
        this.barrPointY = 0;
        this.bal = null;
        this.meterindex = 0;
        this.gameOverflag = true;
        this.stopGame = true;
    },
    bothbulid() {
    },
    start() {
        cc.director.getCollisionManager().enabled = true;
        this.startfunc("k");
    },
    startfunc(e) {
        var that = this
        if (e) {
            that.playerAni.play();
            that.get_left_bulid();
            that.get_right_bulid();
            that.getmeter();
        }
        if (window.FLAG) {
            this.scheduleOnce(function () {
                this.init();
            }, window.SPEED - 2);
        }
    },
    get_left_bulid() {
        // var that = this;
        var light = cc.instantiate(this.light1);
        this.lightbox.addChild(light);
        this.speedbothPointX = -686.743;
        this.speedbothPointY = -975.226;
        // 设置物体正弦运动
        cc.tween(light)
            .to(2.5, { position: cc.v2(this.speedbothPointX, this.speedbothPointY), scale: 2.3 }, { easing: 'sineIn' })
            .call(() => {
                light.removeFromParent(true);
            }).start();
        if (window.FLAG) {
            this.scheduleOnce(function () {
                this.get_left_bulid();
            }, 1.5);
        }
    },
    get_right_bulid() {
        var light2nll = cc.instantiate(this.light2);
        this.lightboxright.addChild(light2nll);
        this.speedbothPointX = 527.968;
        this.speedbothPointY = -886.843;
        cc.tween(light2nll)
            .to(2.5, { position: cc.v2(this.speedbothPointX, this.speedbothPointY), scale: 3 }, { easing: 'sineIn' })
            .call(() => {
                light2nll.removeFromParent(true);
            }).start();
        if (window.FLAG) {
            this.scheduleOnce(function () {
                this.get_right_bulid();
            }, 1.5);
        }
    },

    init: function () {
        var i = Math.floor(Math.random() * 11);
        if (i >= 0 && i < 3) {
            this.creatNode(this.barr1);
        } else if (i > 2 && i < 5) {
            this.creatNode(this.barr2);
        } else if (i > 4 && i < 7) {
            this.creatNode(this.barr3);
        } else if (i > 6 && i < 9) {
            this.creatNode(this.barr4);
        } else {
            this.creatNode(this.barr5);
        }

    },
    //创建节点
    creatNode(node) {
        var index = Math.floor(Math.random() * 10);
        var nodeperfab = cc.instantiate(node);
        nodeperfab.parent = this.barrbox;
        if (index > 0 && index < 5) {
            nodeperfab.setPosition(100.605, -44.973);
            this.barrPointX = 239.375;
            this.barrPointY = -1081.14;
        } else {
            nodeperfab.setPosition(-47.238, -49.157);
            this.barrPointX = -259.049;
            this.barrPointY = -1030.556;
        }

        this.tween1 = cc.tween(nodeperfab).to(window.SPEED, { position: cc.v2(this.barrPointX, this.barrPointY), scale: 1.8 }, { easing: 'sineIn' })
            .call(() => {
                window.bal = nodeperfab
                nodeperfab.destroy();
            }).start();
        if (this.stopGame) {
            this.startfunc();
        }
    },
    //米
    getmeter() {
        window.NUMM = parseInt(this.meterindex += window.M);
        if (window.FLAG != false) {
            if (window.NUMM >= 1000) {
                // this.node.stopAllActions();
                // this.lightboxright.stop();
                // this.lightbox.stop();
                this.lightbox.removeAllChildren();
                this.lightboxright.removeAllChildren();
                this.tween1.stop()
                this.stopGame = false;
                this.playerAni.stop();
                this.barrbox.removeAllChildren();
                this.unscheduleAllCallbacks();

                this.maskscuess.active = true;
                window.FLAG = false;
                this.meterTxt.string = ` 终点：1000m`
            } else {
                this.meterTxt.string = ` 终点：${window.NUMM + 1}m`
            }
        } else {
            this.gameOverflag = false
        }
        this.scheduleOnce(function () {
            if (this.gameOverflag == true) {
                this.getmeter();
            }
        }, 0.01);
    },
    //跳转
    gokv(e, CustomEventData) {
        window.FLAG = true;
        window.SPEED = 3;//障碍物生成的速度
        window.M = 0.1//米数
        window.BARR_INDEX = 0;
        this.gameNode.active = false;
        switch (CustomEventData) {
            case "cj":
                window.NUMM = 0;
                break;
            case "gokv":
                //重置游戏状态 
                this.gameNode.active = true;
                let playerScript = this.playerAni.node.getComponent("player")
                playerScript.fivelessbtn.active = false;
                playerScript.masknumend.active = false;
                playerScript.barrindex = 0;
                playerScript.barrTxt.string = playerScript.barrindex + "个";

                this.light = null;
                this.light2nll = null;
                this.speedbothPointX = 0;
                this.speedbothPointY = 0;
                this.barrPointX = 0;
                this.barrPointY = 0;
                this.bal = null;
                this.meterindex = 0;
                this.gameOverflag = true;
                this.stopGame = true;

                this.startfunc("k");



                break;
        }
    },
    update: function (dt) {
        // this.getmeter();
    },

});


