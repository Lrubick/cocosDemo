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
        prossLabel: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        var self = this;
        this.init();
        cc.director.preloadScene("main", function (completedCount, totalCount, item) {
            let text = parseInt(completedCount / totalCount * 100);
            self.prossLabel.string = text + "%";
        }, function () {

            cc.director.loadScene("main");

        });
    },


    init: function () {
        cc.vv = {};
        var knapsackView = require("knapsackView");
        cc.vv.knapsackView = new knapsackView();
        var qrView = require("qrView");
        cc.vv.qrView = new qrView();

        var main = require("main");
        cc.vv.main = new main();
        cc.vv.http = require("Https");
        var gameOver = require("gameOver");
        cc.vv.gameOver = new gameOver();
    },

    start() {

    },

    // update (dt) {},
});
