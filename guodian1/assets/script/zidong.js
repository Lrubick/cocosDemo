cc.Class({
  extends: cc.Component,

  properties: {
    audio_buff: {
      default: null,
      type: cc.AudioClip
    }
  },

  onLoad: function () {
    // this.node.getComponent(cc.PhysicsBoxCollider).name = "zidong";
  },

  update: function (dt) { },
  onBeginContact: function (contact, selfCollider, otherCollider) {
    if (otherCollider.name === "player") {
      //播放音效
      cc.audioEngine.play(this.audio_buff);

      this.node.active = false;
      if (window.lives == 0) {
        window.lives++;
      }
    }
  }
});