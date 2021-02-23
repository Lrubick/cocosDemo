const Global = require("Global");
cc.Class({
  extends: cc.Component,

  properties: {
    score: cc.Label,
    prizesArray: {
      type: cc.Node,
      default: []
    },
    shareView: cc.Node,
    getResultBtn: cc.Node,

  },
  onLoad: function () {
    cc.vv.gameOver = this;
    this.wxLink = ["pages/customView/customView?pageId=ff808081767142530176b7a673df0da9", "pages/customView/customView?pageId=ff808081767143690176b7a6bd371170", "pages/customView/customView?pageId=ff808081767141ce0176b7a714750cb8", "pages/customView/customView?pageId=ff80808176ce0bf40176d10469082523"];
    this.awards_id = null;
    this.webExchange(window.propScore + window.score);
    this._setScore();
    this.sendGameRecord();
  },

  _setScore: function () {
    this.score.string = window.score;
  },
  onRePlay: function () {
    return cc.director.loadScene("game");
  },

  onbackMain: function () {

    let divGame = document.getElementById("Cocos2dGameContainer");
    var son = document.getElementById("getResult");
    if (son !== undefined && son !== null) {
      divGame.removeChild(son);
    }
    cc.director.loadScene("main", function () {
      let animState = cc.vv.main.node.getComponent(cc.Animation).play("backShow")
      animState.on("finished", function () {
        animState.off("finished", null, this);
        cc.vv.main.node.getComponent(cc.Animation).play("starMove");
      }, this);
    });
  },

  onGetPrizes: function () {
  },

  sendGameRecord: function () {
    let money = "game_fire=" + window.score;
    cc.vv.http.sendRequest(Global.HTTP_QUERY_RECORD, money, function (data) {
      // statisti_today_awards_num

      if (data !== null && data !== "") {

        data.game_id = parseInt(data.game_id);
        window.game_id = data.game_id;

      } else {
        console.log("接口请求失败，请您重试！");
      }

    }, this.foError);
  },


  onLottery: function (sender, value) {
    sender.target.enabled = false;
    let gameid = "game_id=" + window.game_id;

    // if (window.score > 50) {
    cc.vv.http.sendRequest(Global.HTTP_QUERY_LOTTERY, gameid, function (data) {

      if (data !== null && data !== "") {
        if (parseInt(data.code) === 10200) {
          data.awards_id = parseInt(data.awards_id);
          //展示中奖品
          if (data.awards_id !== 0) {
            cc.vv.gameOver.prizesArray[data.awards_id - 1].active = true;
            if (data.awards_id === 5) {
              cc.vv.gameOver.getResultBtn.active = false;
            } else {
              cc.vv.gameOver.awards_id = data.awards_id - 1;
              cc.vv.gameOver.createHtmlBtn(cc.vv.gameOver.wxLink[data.awards_id - 1]);
            }
          } else {
            cc.vv.gameOver.getResultBtn.active = false;

          }
        } else {
          console.log("数据错误，请您重试！");

        }

      } else {
        console.log("接口请求失败，请您重试！");
      }

    }, this.foError);

    // } else {
    //   this.getResultBtn.active = false;
    //   this.prizesArray[4].active = true;
    // }


    let animState = sender.target.parent.getComponent(cc.Animation).play("hideShow");
    animState.on("finished", function () {
      sender.target.parent.active = false;
    }, this);
  },

  onShare: function () {


    document.getElementById("audio_boxID").style.visibility = "hidden";//隐藏

    this.shareView.active = true;

    let divGame = document.getElementById("Cocos2dGameContainer");
    var son = document.getElementById("getResult");
    if (son !== undefined && son !== null) {
      divGame.removeChild(son);
    }


  },

  onCloseShare: function (sender, val) {
    sender.target.active = false;
    document.getElementById("audio_boxID").style.visibility = "visible";//显示

    if (cc.vv.gameOver.awards_id !== null) {
      cc.vv.gameOver.createHtmlBtn(cc.vv.gameOver.awards_id);
    }

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
    getResult.style.transform = "translate(-50%,10%)";


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
            transform = "translate(-50%,10%)";
         }
  </style>
  <div class="btn"></div>
  </template>
  </wx-open-launch-weapp> `
  },



  webExchange(score) {

    //抽奖、进入下一页面
  },

  foError: function () {
    cc.log("Error!");
  },

  update: function (dt) { },

});

