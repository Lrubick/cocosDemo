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
        prossText: cc.Label,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        var self = this;
        this.init();
        // cc.director.preloadScene("game");
        // cc.director.preloadScene("rule");
        cc.director.preloadScene("main", function (completedCount, totalCount, item) {
            let text = parseInt(completedCount / totalCount * 100);
            self.prossText.string = text + "%";
        }, function () {
            self.getComponent(cc.Animation).play();
        });
    },

    init: function () {
        cc.vv = {};
        let toast = require("Toast");
        cc.vv.toast = new toast();
        //     var gameLogic = require("gameLogic");
        //     cc.vv.gameLogic = new gameLogic();
        //     var rule = require("rule");
        //     cc.vv.rule = new rule();
        //     cc.vv.http = require("Https");
        //     let toast = require("Toast");
        //     cc.vv.toast = new toast();
    },

    btnClick: function (event, value) {
        cc.director.loadScene("main");

        //     var gameLogic = require("gameLogic");
        //     cc.vv.gameLogic = new gameLogic();
        //     var rule = require("rule");
        //     cc.vv.rule = new rule();
        //     cc.vv.http = require("Https");
        //     let toast = require("Toast");
        //     cc.vv.toast = new toast();
    },


    // update (dt) {},
});
