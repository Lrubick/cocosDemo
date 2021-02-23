cc.Class({
  extends: cc.Component,

  properties: {
    audio_debuff: {
      default: null,
      type: cc.AudioClip
    }
  },

  onLoad: function () {
    // this.node.getComponent(cc.PhysicsBoxCollider).name = "qiedian";
    //更新分数
  },
  update: function (dt) { },
  onBeginContact: function (contact, selfCollider, otherCollider) {
    if (otherCollider.name === "player") {
      //播放音效
      cc.audioEngine.play(this.audio_debuff);

      this.node.active = false;
      cc.log("有人窃电");
      if (window.buffs == 0) {
        window.propScore -= 20;
      } else {
        //window.buffs--;
      }
    }
  }
});