cc.Class({
  extends: cc.Component,
  properties: {

  },
  onLoad() {
    cc.director.getCollisionManager().enabled = true;
  },

  start() {

  },
  onCollisionEnter: function (other, self) {
    window.SPEED -= 0.02;
    window.M += 0.08
    self.node.destroy();
  },

  // update (dt) {},
});
