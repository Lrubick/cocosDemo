cc.Class({
  extends: cc.Component,

  properties: {

  },
  onLoad() {
    //打开碰撞系统
    cc.director.getCollisionManager().enabled = true;
  },

  start() {

  },
  // 碰撞回调
  onCollisionEnter: function (other, self) {
    // this.barrsound.play();
    self.node.destroy();
  },

  // update (dt) {},
});
