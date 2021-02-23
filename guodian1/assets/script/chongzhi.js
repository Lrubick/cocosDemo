cc.Class({
  extends: cc.Component,

  properties: {
    audio_buff: {
      default: null,
      type: cc.AudioClip
    }
  },

  onLoad: function () {
    // this.node.getComponent(cc.PhysicsBoxCollider).name = "chongzhi";
  },
  update: function (dt) { },
  onBeginContact: function (contact, selfCollider, otherCollider) {
    if (otherCollider.name === "player") {
      //播放音效
      cc.audioEngine.play(this.audio_buff);

      this.node.active = false;
      window.propScore += 30;
    }
  }
});