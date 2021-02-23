const Global = require("Global");

cc.Class({
    extends: cc.Component,

    properties: {
        prefabNode: {
            default: [],
            type: cc.Prefab,
        },
        time: cc.Label,
        playerScore: cc.Label,
        fall: cc.Node,
        timeNum: 45,
        shareView: cc.Node,
        playerScoreNum: {
            get: function () {
                return this._playerScoreNum;
            },
            set: function (value) {
                this._playerScoreNum = value;
                this.playerScore.string = this._playerScoreNum;
            },
            tooltip: "用户分数",
        },
        getRewardNum: {
            default: [],
            type: cc.Label,
        },
        rewardNum: {
            default: [],
            type: cc.Integer,
        },
        isGetAllItme: {
            default: false,
            visible: false,
        },
        gameEndView: cc.Node,
        liuZiView: cc.Node,
        playCount: cc.Label,

    },

    // use this for initialization
    onLoad: function () {

        cc.vv.gameLogic = this;
        cc.director.getCollisionManager().enabled = true;
        // cc.director.getCollisionManager().enabledDebugDraw = true;

    },

    start: function () {

        this.playerScoreNum = 0;
        this.playCount.string = cc.vv.main.playCount;
        var self = this;
        this.beginSchedule(self);
        this.initGetRewardNum(0);

    },


    beginSchedule: function (self) {
        this.callBack = function () {
            if (self.timeNum <= 0) {
                //游戏结束
                this.unschedule(self.callBack);
                self.fall.removeAllChildren();
                self.checkGameEnd();

            }
            this.string = self.timeNum;
            self.timeNum--;

            var randomNum = Math.floor((Math.random() * 5));

            var props = cc.instantiate(self.prefabNode[randomNum]);


            var posX = Math.random();
            if (posX < 0.5) {
                posX *= -1;
            }
            posX = Math.floor(posX * 300);


            var posY = Math.random();
            if (posY < 0.5) {
                posY *= -1;
            }
            posY = Math.floor(posY * 125);
            props.parent = self.fall;
            cc.log(posX);
            cc.log(posY);
            props.setPosition(posX, posY);

        };
        this.time.schedule(this.callBack, 0.6);

    },


    initGetRewardNum: function (value) {
        for (let i = 0; i < this.getRewardNum.length; i++) {
            if (value !== null && value !== undefined) {
                this.rewardNum[i] = value;
            }
            this.getRewardNum[i].string = this.rewardNum[i];
        }
    },


    checkGameEnd: function () {
        var itemCount = 0;
        var self = this;
        for (let i = 0; i < this.rewardNum.length; i++) {

            if (this.rewardNum[i] > 0) {
                itemCount++;
            }

        }

        if (itemCount === 5) {
            this.isGetAllItme = true;



        } else {
            this.isGetAllItme = false;

        }
        let sendData = "mark=" + this.playerScoreNum + "&status=" + (this.isGetAllItme === true ? 1 : 2);
        cc.vv.http.sendRequest(Global.HTTP_SEND_IS_OVER, sendData, function (data) {
            if (data !== null && data !== "") {
                data.code = parseInt(data.code);

                // 10200
                cc.log("data.code = " + data.code);
                if (data.code === 10200) {
                    window.isAddInfo = parseInt(data.is_addinfo);
                }
                self.httpCallBack(self);
            } else {
                console.log("接口请求失败，请您重试！");
            }

        }, this.foError);

        cc.log(this.playerScoreNum);



    },

    httpCallBack: function (self) {
        if (this.isGetAllItme === true) {

            this.gameEndView.getChildByName("win").active = true;
            this.gameEndView.getChildByName("lose").active = false;

            this.gameEndCallBack = function () {
                self.gameEndView.getChildByName("win").active = false;
                self.gameEndView.active = false;
                self.liuZiView.active = true;
                this.unschedule(self.gameEndCallBack);
            };
            cc.log("数量：" + window.isAddInfo);
            if (window.isAddInfo === 2) {
                this.gameEndView.getChildByName("again_btn").active = true;
                this.playerScore.schedule(this.gameEndCallBack, 3.3);
            }

        } else {
            this.gameEndView.getChildByName("win").active = false;
            this.gameEndView.getChildByName("lose").active = true;
        }

        this.gameEndView.getChildByName("scoreText").getComponent(cc.Label).string = this.playerScoreNum;
        this.gameEndView.active = true;
    },




    //重新开始
    reset: function (event, value) {
        var self = this;
        //网络请求速度慢的情况
        // this.resetBtn = event.target;
        // event.target.getComponent(cc.Button).interactable = false;
        // event.target.getComponent(cc.Button).scheduleOnce(function () {
        //     cc.log("开启");
        //     self.resetBtn.interactable = true;
        // }, 1.3);
        cc.vv.http.sendRequest(Global.HTTP_QUERY_LOTTERY_COUNT, null, function (data) {
            if (data !== null && data !== "") {
                data.code = parseInt(data.code);
                cc.vv.main.playCount = data.game_num

                self.playCount.string = cc.vv.main.playCount;

                //没有次数
                if (data.code === 10201) {
                    cc.vv.toast.show(data.msg);
                } else {

                    self.timeNum = 45;
                    self.playerScoreNum = 0;
                    self.initGetRewardNum(0);
                    self.isGetAllItme = false;
                    self.gameEndView.active = false;
                    self.fall.removeAllChildren();
                    self.beginSchedule(self);
                    // cc.vv.main.mainBg.active = false;
                }
            } else {
                console.log("接口请求失败，请您重试！");
            }

        }, this.foError);

    },


    shareOperation: function (sender, value) {
        if (value === "showShare") {

            // 分享获取用户游戏状态接口
            // 1通关  2未通关  3未玩游戏
            var self = this;
            cc.vv.http.sendRequest(Global.HTTP_QUERY_GAME_STATUS, null, function (data) {
                if (data !== null && data !== "") {
                    data.code = parseInt(data.code);
                    cc.log(data);
                    if (data.code === 10200) {
                        window.getgamestatus = data.game_status;
                        share_con(data.game_status, data.goodid);
                        self.shareView.active = true;
                        //隐藏音乐图标
                        document.getElementById("audio_boxID").style.visibility = "hidden";//隐藏


                    }
                } else {
                    console.log("接口请求失败，请您重试！");
                }

            }, this.foError);

            // this.shareView.active = true;
        } else if (value === "closeShare") {
            this.shareView.active = false;
            document.getElementById("audio_boxID").style.visibility = "visible";//隐藏
        } else if (value === "commit") {

            //电话号码校验

            let teleNum = parseInt(this.liuZiView.getChildByName("teleEdit").getComponent(cc.EditBox).string);
            let nameStr = this.liuZiView.getChildByName("nameEdit").getComponent(cc.EditBox).string;
            let comboboxCtrl = this.liuZiView.getChildByName("comboboxCtrl");
            let comboboxProvinces = comboboxCtrl.getChildByName("comboboxProvinces").getChildByName("label").getComponent(cc.Label).string;
            let comboboxCitis = comboboxCtrl.getChildByName("comboboxCitis").getChildByName("label").getComponent(cc.Label).string;
            let res = /^[1][3-9]\d{9}$|^([1|2|3|4|5|6|7|8|9])\d{7}$|^[6]([8|6])\d{5}$/;
            if (!(res.test(teleNum))) {
                cc.vv.toast.show("手机号码有误，请重填！");
                return;
            }

            if (nameStr === "") {
                cc.vv.toast.show("姓名不能为空！");

                return;
            }

            if (comboboxProvinces === "") {
                cc.vv.toast.show("请选择省份！");

                return;
            }

            if (comboboxCitis === "") {
                cc.vv.toast.show("请选择城市！");

                // alert("手机号码有误，请重填");
                return;
            }

            // phone 电话  name 姓名   province 省份  city 城市
            var sendData = "phone=" + teleNum + "&name=" + nameStr + "&province=" + comboboxProvinces + "&city=" + comboboxCitis;
            cc.vv.http.sendRequest(Global.HTTP_QUERY_LOTTERY, sendData, function (data) {
                if (null !== data && "" !== data) {
                    cc.vv.toast.show(data.msg);
                } else {
                    console.log("接口请求失败，请您重试！");
                }

            }, this.foError);

            this.liuZiView.active = false;
            this.gameEndView.active = true;

            if (this.isGetAllItme === true) {
                this.gameEndView.getChildByName("win").active = true;
                this.gameEndView.getChildByName("lose").active = false;
            } else {
                this.gameEndView.getChildByName("win").active = false;
                this.gameEndView.getChildByName("lose").active = true;
            }


        } else if (value === "goWeChat") {
            window.location.href = "http://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0MjE5NTQ2NQ==#wechat_redirect";
            // window.location.href = "http://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0MjE5NTQ2NQ==#wechat_redirect";

            // https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=Mzk0MjE5NTQ2NQ==&scene=124&uin=&key=&devicetype=Windows+10+x64&version=63010043&lang=zh_CN&a8scene=7&fontgear=2
        }
        else {
            window.selectOption = 1;
            pages = 1;
            ranking(pages, $('#ranking_search').val());

            showRank(0);
            $(".ranking_auto").on('click', '.ranking_return', function (event) {
                cc.director.loadScene("main");
            })

        }
    },

    // called every frame
    update: function (dt) {

    },
});
