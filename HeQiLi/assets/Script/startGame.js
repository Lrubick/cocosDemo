

cc.Class({
    extends: cc.Component,

    properties: {
        node_kv: cc.Node,
        nodeExplain: cc.Node,
        node_back: cc.Node,
        audio_temp: {
            default: null,
            type: cc.AudioClip
        },
        showBg: cc.Node
    },
    onLoad() {
        cc.director.preloadScene("game");
        cc.audioEngine.play(this.audio_temp, false, 0);
    },
    showRule() {
        this.node_kv.active = false;
        this.showBg.active = false;
    },
    startGame() {
        cc.director.loadScene("game");
    },
    backToMain() {
        // cc.vv.main.


        this.node_kv.getComponent(cc.Animation).play("hideShow");

        this.node_kv.getComponent(cc.Animation).on("finished", function () { cc.director.loadScene("main"); }, this);


        // cc.log(cc.vv.main);
        // cc.vv.main.getComponent(cc.Animation).play("backShow");
        //back to main
    },
    //游戏说明按钮
    showExplain() {
        this.nodeExplain.active = true;
    },
    //关闭说明
    onBtnCloseExplain() {
        this.nodeExplain.active = false;
    },
    //下一步按钮回调
    onBtnClickNext() {
        this.node_rule.active = false;
    }
});
