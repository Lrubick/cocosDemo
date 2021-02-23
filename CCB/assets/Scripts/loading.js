cc.Class({
    extends: cc.Component,

    properties: {

        pross: cc.Label,
        clickTipsImage: cc.Node,
        clickTipsTouch: cc.Node,
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

        var self = this;


        // cc.assetManager.loadAny({url: 'http://example.com/a.png'}, (err, img) => cc.log(img));

        this.num = 0;

        // this.pross.schedule(function () {
        //     // 这里的 this 指向 component
        //     self.num++;
        //     if (self.num > 100) {
        //         self.num = 100;
        //     }
        //     self.pross.string = self.num + "%";
        // }, 0.2);






        cc.director.preloadScene("main", function (completedCount, totalCount, item) {
            let text = parseInt(completedCount / totalCount * 100);
            self.pross.string = text + "%";
        }, function () {

            // cc.director.loadScene("main");
            self.pross.node.active = false;
            self.clickTipsImage.active = true;
            self.clickTipsTouch.active = true;
            // cc.director.loadScene("main");

        });
    },

    onTipsClick: function () {
        cc.director.loadScene("main");

    },

    onDestroy: function () {
        this.pross.unscheduleAllCallbacks();
    },

    start() {

    },

    // update (dt) {},
});
