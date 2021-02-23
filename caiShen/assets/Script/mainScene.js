const Global = require("Global");

window.selectOption = 0;//跳转到规则页面还是排行榜
window.isBack2Main = 0;//是否从别处返回主页
window.isAddInfo = 2;//是否留过资 1是 2否
cc.Class({
    extends: cc.Component,

    properties: {
        sharePage: cc.Node,
        mainBg: cc.Node,
        tips: cc.Node,
        cloud: cc.Animation,
    },

    // LIFE-CYCLE CALLBACKS:
    // TODO:请求接口判断进入流程
    onLoad() {
        cc.vv.main = this;
        var self = this;

        if (window.isBack2Main === 1) {
            this.cloud.play("cloudBack");
            window.isBack2Main = 0;
        }

        if (parseInt(ym_status) === 1) {

            cc.vv.http.sendRequest(Global.HTTP_GET_SHARE_INFO, "share_goodid=" + share_goodid, function (data) {
                if (data !== null && data !== "") {
                    data.code = parseInt(data.code);
                    // cc.vv.main.playCount = data.game_num
                    // cc.log("playCount = " + cc.vv.main.playCount);
                    //没有次数

                    if (data.code === 10200) {
                        let info = data.info;
                        let myrank = data.myrank;
                        self.sharePage.active = true;
                        self.sharePage.getChildByName("name").getComponent(cc.Label).string = info.nickname;
                        self.sharePage.getChildByName("No").getComponent(cc.Label).string = myrank;
                        self.sharePage.getChildByName("score").getComponent(cc.Label).string = info.total_num;
                        let headImage = data.info.images;
                        cc.loader.load({ url: headImage, type: 'png' }, function (err, texture) {
                            var sp = new cc.SpriteFrame(texture);
                            self.sharePage.getChildByName("circleMask").getChildByName("head").getComponent(cc.Sprite).spriteFrame = sp;
                        });
                        ym_status = 2;

                    }
                } else {
                    console.log("接口请求失败，请您重试！");
                }

            }, this.foError);

        }
        // getShareInfo

    },



    onClickSwitch(sender, value) {
        var self = this;
        switch (value) {
            case "begin":
                cc.vv.http.sendRequest(Global.HTTP_QUERY_LOTTERY_COUNT, null, function (data) {
                    if (data !== null && data !== "") {
                        data.code = parseInt(data.code);
                        cc.vv.main.playCount = data.game_num
                        cc.log("playCount = " + cc.vv.main.playCount);
                        //没有次数
                        if (data.code === 10201) {
                            cc.vv.toast.show("暂无游戏次数！");
                            // cc.vv.toa
                        } else {
                            cc.vv.main.mainBg.active = false;
                        }
                    } else {
                        console.log("接口请求失败，请您重试！");
                    }

                }, this.foError);
                break;
            case "rule":
                cc.log("规则");
                window.selectOption = 0;
                var animState = this.cloud.play();
                animState.speed = 1;
                animState.on("finished", function () {
                    cc.director.loadScene("rule");
                }, this);


                break;
            case "list":
                window.selectOption = 1;
                pages = 1;
                ranking(pages, $('#ranking_search').val());



                showRank(0);

                // let sendData = "pages=1";
                // var animState = this.cloud.play();
                // animState.on("finished", function () {
                //     cc.director.loadScene("rule");
                // }, this);

                // search 搜索项
                // cc.vv.http.sendRequest(Global.HTTP_QUERY_LIST, sendData, function (data) {
                //     if (data !== null && data !== "") {
                //         //总页数
                //         cc.vv.rule.totals = data.totals;
                //         // cc.vv.rule.rank = data.rank;
                //         cc.vv.rule.value_set = data.rank;

                //         cc.director.loadScene("rule");

                //         cc.log("totals = " + data.totals);
                //     } else {
                //         console.log("接口请求失败，请您重试！");
                //     }

                // }, this.foError);


                cc.log("排行榜");

                break;
            case "back2Main":
                cc.director.loadScene("main");

                break;
            case "goGame":
                cc.director.loadScene("game");

                break;

            case "ready2Play":
                this.sharePage.active = false;
                break;
            case "dianZan":

                var goodid = "goodid=" + share_goodid;
                cc.vv.http.sendRequest(Global.HTTP_GIVE_THE_THUMBS_UP, goodid, function (data) {
                    if (data !== null && data !== "") {
                        //总页数
                        data.code = parseInt(data.code);

                        cc.vv.toast.show(data.msg);
                        if (data.code === 10205 || data.code === 10200) {
                            self.sharePage.getChildByName("score").getComponent(cc.Label).string = data.total_num;
                        }

                    } else {
                        console.log("接口请求失败，请您重试！");
                    }

                }, this.foError);
                break;
        }
    },

    start() {
        this.playCount = 0;
    },

    // update (dt) {},
});
