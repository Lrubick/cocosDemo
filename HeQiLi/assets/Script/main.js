const Global = require("Global");
window.onClickHands = false;
window.onClickHands2 = false;
cc.Class({
    extends: cc.Component,

    properties: {

        maskNode: cc.Node,
        starNode: {
            type: cc.Node,
            default: []
        },
        starNodePosition: {
            type: cc.Vec2,
            default: []
        },
        tipsGameNode: cc.Node,
        tipsGame2Node: cc.Node,
        hands1: cc.Node,
        hands2: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        if (cc.vv == null && cc.vv == undefined) {
            cc.vv = {}
        }
        if (window.onClickHands === false) {
            this.hands1.active = true;
        }
        if (window.onClickHands2 === false && window.onClickHands === true) {
            this.hands2.active = true;
        }
        cc.vv.main = this;
        cc.director.preloadScene("knapsack");
        cc.director.preloadScene("kv");
        this.node.active = true;
        this.playCount = 0;
    },

    // start() {

    // },

    foError: function () {
        console.log("Error");
    },

    onClickloadScene: function (sender, value) {
        switch (value) {
            case "secretBase":
                this.node.getComponent(cc.Animation).play("wuShi");
                this.buttonEnabled = sender.target.getComponent(cc.Button);
                sender.target.getComponent(cc.Button).enabled = false;
                window.onClickHands = true;
                this.hands1.active = false;

                // this.hands2.active = true;
                break;
            case "knapsack":
                cc.director.loadScene("knapsack");
                break;
            case "maskClose":
                this.maskNode.active = false;
                break;
            case "welfareSociety":
                // cc.director.loadScene("kv");
                this.hands2.active = false;
                sender.target.getComponent(cc.Button).enabled = false;


                cc.vv.http.sendRequest(Global.HTTP_QUERY_LOTTERY_COUNT, null, function (data) {
                    if (data !== null && data !== "") {
                        data.statisti_today_awards_num = parseInt(data.statisti_today_awards_num);
                        cc.vv.main.playCount = data.statisti_today_awards_num
                        cc.log("playCount = " + cc.vv.main.playCount);
                        sender.target.getComponent(cc.Button).enabled = true;
                        window.onClickHands2 = true;
                        if (data.code === 10400) {
                            console.log(data.msg);
                        } else {
                            cc.vv.main.gotoGame(data.code);
                        }
                    } else {
                        console.log("接口请求失败，请您重试！");
                    }

                }, this.foError);

                break;
            case "mysteriousUiNode":
                this.maskNode.getComponent(cc.Animation).play("backShow")
                this.maskNode.active = true;

                // cc.director.loadScene("knapsack");
                break;

            case "tipsGame":
                this.tipsGameNode.active = false;
                break;

            case "tipsGame2":
                document.getElementById("audio_boxID").style.visibility = "visible";//隐藏

                this.tipsGame2Node.active = false;
                break;

            default:
                let animState = this.maskNode.getComponent(cc.Animation).play("backShow")
                animState.speed = 3;
                this.maskNode.active = true;
                break;
        }
    },

    gotoGame: function (code) {
        //如果次数用完则不可以再次进入游戏
        //弹窗提示
        console.log(this.playCount);
        if (this.playCount > 0 && (code === 10200 || code === 10201 || code === 10203)) {
            this.node.getComponent(cc.Animation).play("fuLi");
        } else {

            if (code === 10202) {
                let animState = this.tipsGame2Node.getComponent(cc.Animation).play("backShow")
                animState.speed = 3;
                document.getElementById("audio_boxID").style.visibility = "hidden";//隐藏

                this.tipsGame2Node.active = true;
            } else if (code === 10401) {
                let animState = this.tipsGameNode.getComponent(cc.Animation).play("backShow")
                animState.speed = 3;
                this.tipsGameNode.active = true;
            }

        }
    },


    initStarAnimation: function () {
        this.node.getComponent(cc.Animation).play("starMove");
    },

    //五士星球动画
    wuShi: function () {
        let anim = this.node.getComponent(cc.Animation);
        anim.play("hideShow");
    },


    //五士星球动画
    wuShiFinish: function () {
        this.node.active = false;
        if (this.buttonEnabled !== undefined && this.buttonEnabled !== null) {
            this.buttonEnabled.enabled = true;
        }
    },


    fuLi: function () {
        let animState = this.node.getComponent(cc.Animation).play("hideShow");
        animState.on("finished", function () {
            cc.director.loadScene("kv");
        }, this);
        // this.maskNode.active = true;
    },

    update(dt) { },
});
