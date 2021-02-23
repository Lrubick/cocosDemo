cc.Class({
  extends: cc.Component,

  properties: {
    player: {
      default: null,
      type: cc.Node
    }
  },
  onLoad: function () {
    // this.scheduleOnce(this._shoot.bind(this));
    // return this.node.getComponent(cc.PhysicsBoxCollider).name = "bullet";
  },
  // _shoot: function () { },

  onBeginContact: function (contact, selfCollider, otherCollider) {
    if (otherCollider.name === "monster") {
      selfCollider.node.removeFromParent();
      otherCollider.node.removeFromParent();
    }
  },
  update: function (dt) { }
});

