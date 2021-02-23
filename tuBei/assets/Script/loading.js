// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
//修改ios 14 掉帧问题
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
cc.Class({
    extends: cc.Component,

    properties: {
        pross: cc.Label,
        progress: cc.ProgressBar,
        maoBi: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.init();
        this.progress.progress = 0;
        this.last = 0;
        // UserCent();
        var self = this;
        this.isStart = true;

        this.bar = this.progress.node.getChildByName("bar");

        cc.director.preloadScene("main", function (completedCount, totalCount, item) {
            let text = parseInt(completedCount / totalCount * 100);
            self.pross.string = "正在为你加载中" + text + "%";
            let p = completedCount / totalCount;
            self.progress.progress = p;
        }, function () {
            // self.isStart = false;
            cc.director.loadScene("main");

        });
    },

    onClick: function () {
        cc.director.loadScene("main");
    },


    init: function () {
        cc.vv = {};
        let toast = require("Toast");
        cc.vv.toast = new toast();
    },

    // start() {

    // },

    update(dt) {
        // this.bar
        if (this.isStart === true) {
            this.maoBi.x += (this.bar.width - this.last);
            this.last = this.bar.width;
        }

    },
});
