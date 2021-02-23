const Global = require("Global");
cc.Class({
    extends: cc.Component,

    properties: {
        ruleNode: cc.Node,
        shareView: cc.Node,

        cloud: cc.Animation,

    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        //规则
        // cc.vv.rule = this;


    },


    start() {

        if (window.selectOption === 0) {
            this.ruleNode.active = true;
        } else {
            this.ruleNode.active = false;
        }


    },


    onClickSwitch(sender, value) {
        switch (value) {
            case "back2Main":

                // cc.log(cc.find("cloud"));
                window.isBack2Main = 1;
                var animaState = this.cloud.play("cloud");
                animaState.on("finished", function () {
                    cc.director.loadScene("main");
                }, this);


                break;
            case "shareFriends":
                this.shareView.active = true;
                document.getElementById("audio_boxID").style.visibility = "hidden";//隐藏


                break;
            case "closeShare":
                this.shareView.active = false;
                document.getElementById("audio_boxID").style.visibility = "visible";//隐藏


                break;


        }
    },


    update(dt) {

    },
});
