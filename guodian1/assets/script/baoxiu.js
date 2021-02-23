cc.Class({
  extends: cc.Component,

  properties: {
    audio_buff: {
      default: null,
      type: cc.AudioClip
    }
  },

  onLoad: function () {
  },
  update: function (dt) {
  },
  //碰撞回调函数
  onBeginContact: function (contact, selfCollider, otherCollider) {
    if (otherCollider.name === "player") {
      //播放音效
      cc.audioEngine.play(this.audio_buff);

      this.node.active = false;
      if (window.buffs == 0) {
        window.buffs += 5;
      }
    }
  }
});