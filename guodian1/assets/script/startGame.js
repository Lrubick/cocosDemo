

cc.Class({
    extends: cc.Component,

    properties: {
        node_kv: cc.Node,
        nodeExplain: cc.Node,
        node_rule: cc.Node,
        audio_temp: {
            default: null,
            type: cc.AudioClip
        }
    },
    onLoad() {
        cc.director.preloadScene("game");
        cc.audioEngine.play(this.audio_temp, false, 0);
    },
    showRule() {
        this.node_kv.active = false;
    },
    startGame() {
        cc.director.loadScene("game");
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
