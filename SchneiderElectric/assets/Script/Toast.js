cc.Class({
    extends: cc.Component,
    properties: {
        // target:cc.Node,
        _isShow: false,
        lblContent: cc.Label,

    },
    onLoad: function () {
        if (cc.vv == null) {
            return null;
        }

        this.lblContent = this.node.getChildByName("info").getComponent(cc.Label);

        cc.vv.toast = this;
        this.node.active = this._isShow;
    },

    update: function (dt) {

    },

    show: function (content) {
        //this.node.clearAnimation();
        //this.unschedule(this.showAutoHide);

        this._isShow = true;
        if (this.node) {
            this.node.active = this._isShow;
        }
        if (this.lblContent) {
            if (content == null) {
                content = "";
            }
            this.lblContent.string = content;
            // this.node.width = this.lblContent.node.width + 180;
        }

        var self = this;

        var interval = 1;
        // 重复次数
        var repeat = 1;
        // 开始延时
        var delay = 3;
        var count = 1;
        var self = this;
        this.callback = function () {
            //			 	if(cc.vv.game.dshow != undefined){
            //			 		cc.vv.game.dshow = false;
            //			 	}
            if (count == 2) {
                //			 		if(cc.vv.game.dshow != undefined){
                //					cc.vv.game.dshow = true;
                //					}
                this.hide();
                this.unscheduleAllCallbacks();
            }
            count++;
        }
        this.schedule(this.callback, 0.7);
        //			 this.schedule(function() {
        // 这里的 this 指向 component
        //			     self.hide();

        //			 }, interval, repeat, delay);

        //this.scheduleOnce(this.showAutoHide,2);

    },

    showAutoHide: function () {
        this.hide();
    },

    hide: function () {
        this._isShow = false;
        if (this.node) {
            this.node.active = this._isShow;
        }
    }
});