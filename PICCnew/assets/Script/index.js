window.GAME_NUM = 2;//游戏次数
cc.Class({
    extends: cc.Component,
    properties: {
        gameNode: {
            default: null,
            type: cc.Node
        },
        kvNode: {
            default: null,
            type: cc.Node
        },
        gameNum: {
            default: null,
            type: cc.Label
        },
        rules: {
            default: null,
            type: cc.Node
        },
        sharerules: {
            default: null,
            type: cc.Node
        },
        defaultsound: {
            default: null,
            type: cc.AudioSource
        },
        masknumless: {
            default: null,
            type: cc.Node
        },
    },

    onLoad: function () {
    },
    start() {
        this.gameNum.string = "游戏次数：" + window.GAME_NUM + "次"//游戏次数
    },
    gorouterfunc() {
        var that = this
        that.defaultsound.play();

        if (window.GAME_NUM <= 0) {
            this.masknumless.active = true;
            return false
        } else {
            this.kvNode.active = false;
            this.gameNode.active = true;
        }
    },
    closeM() {
        this.masknumless.active = false;
    },
    getrules(e, item) {
        this.rules.active = true;
        if (item) {
            this.rules.active = false;
        }
        if (item == "openshare") {
            // this.sharerules.active = true
        }
        if (item == "share") {
            this.sharerules.active = false
        }
    },
    //我的奖品
    getMyprize(e, item) {
    },

    // called every frame
    update: function (dt) {

    },
});
