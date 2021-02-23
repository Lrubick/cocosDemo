cc.Class({
  extends: cc.Component,

  properties: {
    impulse: cc.v2(0, 0),
  },
  onLoad: function () {
    this.node.getComponent(cc.PhysicsPolygonCollider).name = "impulse_platform";
    this.bAddScore = true;  //是否踩过
    //if (Math.random() > 0.8) {
    this._createAction();
    //}
  },
  _createAction: function () {
    var ac1, ac2;
    ac1 = cc.moveBy(this._getRandomInt(2.5, 5), 520, 0);
    ac2 = cc.moveBy(this._getRandomInt(2.5, 5), -520, 0);
    this.node.runAction(cc.repeatForever(cc.sequence(ac1, ac2)));
  },

  onBeginContact: function (contact, _selfCollider, otherCollider) {
    window.bJumping = false;
    var body, manifold;
    // 获取世界坐标系下的碰撞信息。
    manifold = contact.getWorldManifold();
    // if (manifold.normal.y !== 1) {
    //return;
    // }
    body = otherCollider.body;
    body.linearVelocity = cc.v2();

    // 记录上次碰撞对象
    window.previousCollider = _selfCollider;
    //加分
    if (this.bAddScore == true) {
      window.score += 10;
      this.bAddScore = false;

      if (window.buffs > 0) {
        window.buffs--;
      }
    }
    //window.currentItem = _selfCollider;
    //设置对象消失
    if (window.fade) {
      cc.log("进入消失方法！")
      window.fade = false;
      window.fadeCollider = window.previousCollider;
      this.node.runAction(cc.sequence(cc.fadeOut(0.5), cc.fadeIn(0.5), cc.fadeOut(0.5), cc.fadeIn(0.5), cc.fadeOut(0.5), cc.callFunc(() => {
        if (window.fadeCollider == window.previousCollider) {
          window.tipSunH = true;
        }
      })))
    }
    //是否有加成
    if (window.addScore > 0) {
      if (window.lastCollider != _selfCollider) {
        // cc.director.emit("prop_score", {
        //   score: 10
        // });
        window.propScore += 20;
        window.lastCollider = _selfCollider
        window.addScore--;
      }
    }
  },

  _getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
});
