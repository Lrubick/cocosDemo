GameHongBao: [function (e, t, a) {
  "use strict";
  cc._RF.push(t, "91a33PqgXhLFqLjBINGxyBC", "GameHongBao"),
    cc.Class({
      extends: cc.Component,
      properties: {
        rootNode: cc.Node,
        laoJiuNode: cc.Node,
        selfNodeUp: cc.Node,
        selfNodeDown: cc.Node,
        handLaoJiuUp: cc.Node,
        handLaoJiuDown: cc.Node,
        tipsLaoJiu: cc.Node,
        tispLaoJiuSprArr: {
          default: [],
          type: [cc.SpriteFrame]
        },
        tipsSelf: cc.Node,
        tipsSelfSprArr: {
          default: [],
          type: [cc.SpriteFrame]
        },
        xianParentNode: cc.Node,
        xianNode: cc.Node,
        xianQuYu: cc.Node,
        zhiYinNode: cc.Node,
        btnLa: cc.Node,
        secondLabel: cc.Label,
        cutDownNode: cc.Node,
        cutDownSecondLabel: cc.Label,
        xianDouDongLeft: cc.Node,
        xianDouDongRight: cc.Node,
        loseEffect: cc.Node,
        handNodeArr: {
          default: [],
          type: [cc.Node]
        }
      },
      onLoad: function () {
        ADZong.luPingStart(),
          ADZong.hideBanner(),
          globalData_DaTi.audioMng.playMusic(),
          this.loseEffect.opacity = 0,
          cc.director.getCollisionManager().enabled = !0,
          this.laoJiuNode.y = 2560,
          this.selfNodeUp.y = -1280,
          this.selfNodeDown.y = -1280,
          this.tipsLaoJiu.scale = 0,
          this.tipsSelf.scale = 0,
          this.xianParentNode.scaleY = 0,
          this.zhiYinNode.active = !1,
          this.btnLa.active = !1,
          this.beginIng = !1,
          this.vy = 0,
          this.vyJiChu = 0,
          this.second = 25,
          this.secondCutDown = 3,
          this.cutDownNode.active = !0,
          this.cutDownNode.scale = 0,
          this.frameID = 0,
          this.die = !1,
          this.xianDouDongLeft.opacity = 0,
          this.xianDouDongRight.opacity = 0,
          this.handFrame = 0,
          this.handChangeDuration = .5,
          this.hideHand(),
          this.handSchedule()
      },
      start: function () {
        this.actLaoJiu(),
          this.secondLabel.string = "" + this.second,
          this.xianDouDongLeft.runAction(cc.sequence(cc.moveBy(.02, cc.v2(5, 5)), cc.moveBy(.02, cc.v2(-5, -5))).repeatForever()),
          this.xianDouDongRight.runAction(cc.sequence(cc.moveBy(.02, cc.v2(-5, -5)), cc.moveBy(.02, cc.v2(5, 5))).repeatForever())
      },
      actLaoJiu: function () {
        var e = this;
        this.laoJiuNode.runAction(cc.sequence(cc.moveTo(1.5, cc.v2(0, 0)).easing(cc.easeSineOut(1.5)), cc.callFunc(function () {
          e.actSelf(),
            e.tipsLaoJiuShow(0)
        })))
      },
      actSelf: function () {
        var e = this;
        this.selfNodeUp.runAction(cc.sequence(cc.moveTo(1.2, cc.v2(0, 0)).easing(cc.easeSineOut(1.2)), cc.callFunc(function () {
          e.tipsSelfShow(0)
        }), cc.delayTime(1), cc.callFunc(function () {
          e.actShowXianParent()
        }))),
          this.selfNodeDown.runAction(cc.sequence(cc.moveTo(1.2, cc.v2(0, 0)).easing(cc.easeSineOut(1.2)), cc.callFunc(function () { })))
      },
      actShowXianParent: function () {
        var e = this;
        this.xianParentNode.runAction(cc.sequence(cc.scaleTo(.2, 1, 1), cc.callFunc(function () {
          e.actShowZhiYin()
        })))
      },
      actShowZhiYin: function () {
        if (0 == globalData_DaTi.data.guide.hongBao) this.zhiYinNode.active = !0;
        else {
          globalData_DaTi.audioMng.playSfx("readyGo");
          var e = this;
          e.schedule(function t() {
            e.secondCutDown > 0 ? (e.secondCutDown--, e.cutDownSecondLabel.string = "" + e.secondCutDown) : (e.beginNow(), e.cutDownNode.runAction(cc.scaleTo(.2, 0)), e.unschedule(t))
          },
            .5),
            e.cutDownNode.runAction(cc.scaleTo(.2, 1))
        }
      },
      tipsLaoJiuShow: function (e) {
        var t = this;
        this.tipsLaoJiu.scale = 0,
          this.tipsLaoJiu.getComponent(cc.Sprite).spriteFrame = this.tispLaoJiuSprArr[e],
          this.tipsLaoJiu.runAction(cc.sequence(cc.scaleTo(.2, 1), cc.delayTime(1), cc.scaleTo(.2, 0), cc.callFunc(function () {
            t.tipsLaoJiu.stopAllActions()
          }))),
          this.beginIng && (this.tipsLaoJiu.rotation = Tools.random(-20, 20), this.tipsLaoJiu.runAction(cc.sequence(cc.moveBy(.02, cc.v2(5, 5)), cc.moveBy(.02, cc.v2(-5, -5))).repeatForever()))
      },
      tipsSelfShow: function (e) {
        var t = this;
        this.tipsSelf.scale = 0,
          this.tipsSelf.getComponent(cc.Sprite).spriteFrame = this.tipsSelfSprArr[e],
          this.tipsSelf.runAction(cc.sequence(cc.scaleTo(.2, 1), cc.delayTime(1), cc.scaleTo(.2, 0), cc.callFunc(function () {
            t.tipsSelf.stopAllActions()
          }))),
          this.beginIng && (this.tipsSelf.rotation = Tools.random(-20, 20), this.tipsSelf.runAction(cc.sequence(cc.moveBy(.02, cc.v2(5, 5)), cc.moveBy(.02, cc.v2(-5, -5))).repeatForever())),
          this.frameID++,
          3 == this.frameID && (this.frameID = 0)
      },
      guidedCallFunc: function () {
        var e = this;
        globalData_DaTi.audioMng.playSfx("readyGo");
        var t = function t() {
          e.secondCutDown > 0 ? (e.secondCutDown--, e.cutDownSecondLabel.string = "" + e.secondCutDown) : (e.beginNow(), e.cutDownNode.runAction(cc.scaleTo(.2, 0)), e.unschedule(t))
        };
        this.zhiYinNode.runAction(cc.sequence(cc.fadeOut(.2), cc.callFunc(function () {
          e.cutDownNode.runAction(cc.scaleTo(.2, 1)),
            e.schedule(t, .5)
        })))
      },
      btnCallBack: function (e, t) {
        "\u786e\u5b9a" == t ? this.guidedCallFunc() : "\u62c9" == t ? this.vy -= 1.2 + this.vyJiChu : "\u6682\u505c" == t ? cc.director.loadScene("GameHongBao") : "\u8fd4\u56de\u4e3b\u83dc\u5355" == t && (GlobalZong.jieSuanGameType = "", cc.director.loadScene("MainMenu"), globalData_DaTi.audioMng.playSfx("\u6309\u94ae"))
      },
      beginNow: function () {
        this.btnLa.active = !0,
          this.beginIng = !0,
          this.schedule(function () {
            this.die || (this.second <= 0 ? (this.btnLa.active = !1, this.beginIng = !1, this.win(), this.xianDouDongLeft.active = !1, this.xianDouDongRight.active = !1) : (this.second--, this.secondLabel.string = "" + this.second, this.vyJiChu = .001 * Tools.random(15, 40), this.second % 3 == 1 && (Tools.random(1, 100) > 50 ? this.xianDouDongLeft.scaleY = 1 : this.xianDouDongLeft.scaleY = -1, Tools.random(1, 100) > 50 ? this.xianDouDongRight.scaleY = 1 : this.xianDouDongRight.scaleY = -1, this.xianDouDongLeft.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(1), cc.fadeOut(.1))), this.xianDouDongRight.runAction(cc.sequence(cc.fadeIn(.1), cc.delayTime(1), cc.fadeOut(.1)))), (25 - this.second) % 5 == 3 ? (this.tipsLaoJiuShow(this.frameID), console.log("this.second" + this.second)) : (25 - this.second) % 5 == 4 && (this.tipsSelfShow(this.frameID), console.log("this.second" + this.second))))
          },
            1)
      },
      update: function (e) {
        this.die || this.beginIng && (this.rootNode.y += this.vy, this.vy += .03 + this.vyJiChu, this.xianNode.y = .5 * this.rootNode.y, 0 == globalData_DaTi.data.guide.hongBao && (this.vy > .02 ? this.showHand(0) : this.vy <= 0 && this.hideHand()), Math.abs(this.xianNode.y) > this.xianQuYu.height / 2 && (console.log("Math.abs(this.xianNode.y)  " + Math.abs(this.xianNode.y) + "this.xianNode.parent.height/2  " + this.xianNode.parent.height / 2), this.die = !0, this.beginIng = !1, this.second > 0 && this.lose()))
      },
      win: function () {
        0 == globalData_DaTi.data.guide.hongBao && (globalData_DaTi.data.guide.hongBao = !0, globalData_DaTi.saveData()),
          this.hideHand();
        var e = this;
        this.handLaoJiuDown.runAction(cc.sequence(cc.spawn(cc.fadeOut(1), cc.moveBy(1, cc.v2(0, 500))), cc.callFunc(function () {
          e.rootNode.runAction(cc.sequence(cc.moveTo(1, cc.v2(0, -1500)), cc.callFunc(function () {
            console.log("\u6e38\u620f\u80dc\u5229"),
              GlobalZong.jieSuanGameType = "\u7ea2\u5305\u6210\u529f",
              cc.director.loadScene("JieSuan")
          })))
        }))),
          this.handLaoJiuUp.runAction(cc.sequence(cc.spawn(cc.fadeOut(1), cc.moveBy(1, cc.v2(0, 500))), cc.callFunc(function () { })))
      },
      lose: function () {
        this.hideHand(),
          globalData_DaTi.audioMng.playSfx("\u5bf9\u8054Die"),
          this.loseEffect.active = !0,
          this.selfNodeDown.runAction(cc.sequence(cc.scaleTo(.05, .95), cc.scaleTo(.05, 1), cc.scaleTo(.05, .95), cc.scaleTo(.05, 1), cc.delayTime(.2)).repeat(10)),
          this.selfNodeUp.runAction(cc.sequence(cc.scaleTo(.05, .95), cc.scaleTo(.05, 1), cc.scaleTo(.05, .95), cc.scaleTo(.05, 1), cc.delayTime(.2)).repeat(10)),
          this.loseEffect.runAction(cc.sequence(cc.fadeIn(.05), cc.fadeOut(.05)).repeat(4)),
          this.laoJiuNode.runAction(cc.sequence(cc.delayTime(1), cc.moveTo(1, cc.v2(0, 1400)).easing(cc.easeSineIn(1)), cc.callFunc(function () {
            GlobalZong.jieSuanGameType = "\u7ea2\u5305\u5931\u8d25",
              cc.director.loadScene("JieSuan")
          })))
      },
      handSchedule: function () {
        this.handFrame = 0,
          this.handFrame1 = 0,
          this.handFrame2 = 0;
        this.schedule(function () {
          this.handFrame++,
            this.handNodeArr[0].getChildByName("shouzhi_1").active = !1,
            this.handNodeArr[0].getChildByName("shouzhi_2").active = !1,
            this.handFrame % 2 == 0 ? this.handNodeArr[0].getChildByName("shouzhi_2").active = !0 : this.handNodeArr[0].getChildByName("shouzhi_1").active = !0
        },
          .1);
        this.schedule(function () {
          this.handFrame2++,
            this.handNodeArr[1].getChildByName("shouzhi_1").active = !1,
            this.handNodeArr[1].getChildByName("shouzhi_2").active = !1,
            this.handFrame2 % 2 == 0 ? this.handNodeArr[1].getChildByName("shouzhi_2").active = !0 : this.handNodeArr[1].getChildByName("shouzhi_1").active = !0
        },
          .15);
        this.schedule(function () {
          this.handFrame3++,
            this.handNodeArr[2].getChildByName("shouzhi_1").active = !1,
            this.handNodeArr[2].getChildByName("shouzhi_2").active = !1,
            this.handFrame3 % 2 == 0 ? this.handNodeArr[2].getChildByName("shouzhi_2").active = !0 : this.handNodeArr[2].getChildByName("shouzhi_1").active = !0
        },
          .07)
      },
      hideHand: function () {
        for (var e = 0; e < 3; e++) this.handNodeArr[e].active = !1
      },
      showHand: function (e) {
        this.hideHand();
        if (null != this.handNodeArr[e]) {
          this.handNodeArr[e].active = false;
        }
        null != this.handNodeArr[e] && (this.handNodeArr[e].active = !0)
      }
    }),
    cc._RF.pop()
},
{}
],