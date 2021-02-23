cc.Class({
  extends: cc.Component,

  properties: {
    audio_dyue: {
      default: null,
      type: cc.AudioClip
    }
  },

  onLoad: function () {
    this.node.getComponent(cc.PhysicsBoxCollider).name = "yue";
  },
  // update: function (dt) { },

  onBeginContact: function (contact, selfCollider, otherCollider) {
    if (otherCollider.name === "player") {
      //播放音效
      cc.audioEngine.play(this.audio_dyue);

      this.node.active = false;
      if (window.buffs == 0) {
        //this.scheduleOnce(function() {
        if (window.lives == 0) {
          //cc.director.loadScene("gameOver");
          //window.tipYue = 
          window.tipYue = true;
        } else {
          cc.director.loadScene("game");
        }
        //}, 1.5);
      } else {
        window.buffs--;
      }
    }
  }
});