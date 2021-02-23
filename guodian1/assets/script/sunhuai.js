cc.Class({
  extends: cc.Component,

  properties: {
    audio_debuff: {
      default: null,
      type: cc.AudioClip
    }
  },

  onLoad: function () {
    // this.node.getComponent(cc.PhysicsBoxCollider).name = "sunhuai";
  },
  update: function (dt) { },
  onBeginContact: function (contact, selfCollider, otherCollider) {
    if (otherCollider.name === "player") {
      // this.node.runAction(cc.sequence(cc.fadeOut(0.5),cc.fadeIn(0.5),cc.fadeOut(0.5),cc.fadeIn(0.5),cc.fadeOut(0.5),cc.callFunc(()=>{
      //    this.node.active = false;
      // })))
      //播放音效
      cc.audioEngine.play(this.audio_debuff);

      this.node.active = false;
      if (window.buffs == 0) {
        window.fade = true;
      } else {
        window.buffs--;
      }
      //this.scheduleOnce(this.playFadeAni,2);
    }
  },
});