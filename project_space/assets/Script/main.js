// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
const isIOS14Device = cc.sys.os === cc.sys.OS_IOS && cc.sys.isBrowser && cc.sys.isMobile && /iPhone OS 14/.test(window.navigator.userAgent);
if (`isIOS14Device`) {
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
cc.Class({
    extends: cc.Component,

    properties: {
        kvbox: {
            default: null,
            type: cc.Node,
        },
        longbox: {
            default: null,
            type: cc.Node,
        },
        defsound: {
            default: null,
            type: cc.AudioSource,
        }
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},
    gorouter() {
        this.kvbox.active = false;
        this.longbox.active = true;
        this.defsound.play();
    },
    gobtnfunc(e, item) {
        switch (item) {
            case "lv":
                console.log("排行榜");
                break;
            case "rule":
                console.log("规则页");
                break;
        }
    },
    start() {

    },

    // update (dt) {},
});
