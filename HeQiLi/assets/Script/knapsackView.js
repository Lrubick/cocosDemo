const Global = require("Global");
cc.Class({
    extends: cc.Component,

    properties: {
        knapsackView: cc.Node,
        view: cc.Node,
        resultView: {
            default: [],
            type: cc.Node
        },
        prizes: 0,
        getResultBtn: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:


    onLoad() {
        //http请求数据

        var self = this;
        cc.vv.knapsackView = this;

        this.wxLink = ["pages/customView/customView?pageId=ff808081767142530176b7a673df0da9", "pages/customView/customView?pageId=ff808081767143690176b7a6bd371170", "pages/customView/customView?pageId=ff808081767141ce0176b7a714750cb8", "pages/customView/customView?pageId=ff80808176ce0bf40176d10469082523"];


        //Global.HTTP_LOGORRE
        cc.vv.http.sendRequest(Global.HTTP_QUERY_LIST, null, function (data) {
            // statisti_today_awards_num

            if (data !== null && data !== "") {
                cc.log("awards_id = " + data.awards_id);
                data.awards_id = parseInt(data.awards_id);
                self.prizes = data.awards_id;

                if (self.prizes) {
                    self.resultView[self.prizes - 1].active = true;
                    self.createHtmlBtn(self.wxLink[self.prizes - 1]);
                    self.view.active = true;
                    self.getResultBtn.active = true;

                    if (self.prizes === 5) {
                        self.view.active = false;
                        self.getResultBtn.active = false;
                    }

                } else {
                    self.view.active = false;
                    self.getResultBtn.active = false;
                    self.resultView[4].active = true;
                    // getResultBtnHtml.display = "none";
                }

            } else {
                self.view.active = false;
                self.getResultBtn.active = false;

                console.log("接口请求失败，请您重试！");
            }

        }, this.foError);

    },

    // start() {

    // },

    foError: function () {
        console.log("接口请求失败，请您重试！");
    },

    // update(dt) { },

    onClickBackToMain: function (sender, val) {
        // kvallnode

        let animation = this.knapsackView.getComponent(cc.Animation);
        // animation.setCurrentTime(1.3);
        sender.target.getComponent(cc.Button).enabled = false;


        let anim = animation.play("down");


        let divGame = document.getElementById("Cocos2dGameContainer");
        var son = document.getElementById("getResult");
        if (son !== undefined && son !== null) {
            divGame.removeChild(son);
        }
        anim.on("finished", function () {
            sender.target.getComponent(cc.Button).enabled = true;

            cc.director.loadScene("main");
        }, this);


    },


    createHtmlBtn: function (wxlink) {

        //创建按钮div
        let getResult = document.createElement("div");
        getResult.id = "getResult";
        getResult.style.position = "fixed";
        getResult.style.top = "50%";
        getResult.style.left = "50%";
        getResult.style.color = "red";
        getResult.style.width = "250px";
        getResult.style.height = "80px";
        getResult.style.transform = "translate(-50%,-100%)";


        let divGame = document.getElementById("Cocos2dGameContainer");
        divGame.appendChild(getResult);




        getResult.innerHTML = `  <wx-open-launch-weapp id="launch-btn" username="gh_a9100d894b2d" path="` + wxlink + `" style="width: 250px;height: 80px;z-index: 1000;display:block;">
        <template>
        <style>
        .btn{
                 width: 250px;
                 height: 80px;
                 z-index: 1000;
                 position = "fixed";
                 top = "50%";
                 left = "50%";
                transform = "translate(-50%,-100%)";
             }
</style>
<div class="btn"></div>
</template>
    </wx-open-launch-weapp> `
    },

    onClickGetResult: function () {
        //获取奖品
        //跳转微信小程序
        // window.gotoWeChatApp();

    },
});
