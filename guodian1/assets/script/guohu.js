cc.Class({
  extends: cc.Component,

  properties: {
    audio_buff: {
      default: null,
      type: cc.AudioClip
    }
  },

  onLoad: function () {
    // this.node.getComponent(cc.PhysicsBoxCollider).name = "guohu";
  },
  update: function (dt) { },
  onBeginContact: function (contact, selfCollider, otherCollider) {
    if (otherCollider.name === "player") {
      //播放音效
      cc.audioEngine.play(this.audio_buff);

      this.node.active = false;
      // cc.director.emit("prop_score", {
      //   score: this._getRandomInt(10,30)
      // });
      var tempScore = this._getRandomInt(10, 30);
      window.propScore += tempScore;
    }
  },
  _getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
});