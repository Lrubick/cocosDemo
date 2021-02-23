cc.Class({
  extends: cc.Component,

  properties: {
  },

  // LIFE-CYCLE CALLBACKS:
  onLoad() {
    //连跳限制
    this._CanJump = true;
    // this._setSystemEvent();
    this._initData();
  },
  _setSystemEvent: function () {
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    //cc.systemEvent.on(cc.SystemEvent.EventType.DEVICEMOTION, this.onDeviceMotionEvent, this);
    cc.systemEvent.setAccelerometerEnabled(true);
  },
  onKeyDown: function (event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this._accX += 0.1;
        break;
      case cc.macro.KEY.d:
        this._accX -= 0.1;
    }
  },

  onKeyUp: function (event) {
    return this._accX = 0;
  },

  _initData: function () {
    var sysInfo;
    this._accRatio = 1500;
    this._accX = 0;
    this.node.getComponent(cc.PhysicsBoxCollider).name = "player";
    // Update
    this.body = this.getComponent(cc.RigidBody);
  },
  // onDeviceMotionEvent: function(event) {
  //   return this._accX = event.acc.x;
  // },
  _checkBorder: function (speed, dt) {
    var playerPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
    if (playerPos.x < 0) {
      speed.x = 10;
    } else if (playerPos.x > cc.winSize.width) {
      speed.x = -10;
    }
    return speed;
  },

  _changePosInBorder: function () {
    var nodePos, playerPos;
    playerPos = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
    nodePos = this.node.parent.convertToNodeSpaceAR(playerPos);
    if (playerPos.x < 0) {
      this.node.setPosition(nodePos.x + cc.winSize.width, nodePos.y);
    } else if (playerPos.x > cc.winSize.width) {
      this.node.setPosition(nodePos.x - cc.winSize.width, nodePos.y);
    }
  },
  // _controllDir: function() {
  //   var speed;
  //   speed = this.body.linearVelocity;
  //   speed.x = -this._accX * this._accRatio;
  //   return this.body.linearVelocity = speed;
  // },
  onBeginContact: function (contact, selfCollider, otherCollider) {
    if (otherCollider.name === "impulse_platform") {//&& this._CanJump == false) {
      //cc.director.emit("game_over");
      this._CanJump = true;
      // 碰撞点
      let manifold = contact.getWorldManifold();
      let differenceValue = manifold.points[0].y;

      // cc.log("高度:" + cc.winSize.height)
      // 1500
      //根据人物高度 计算他与窗口位置


      // cc.log("输出碰撞点！");
      // cc.log(differenceValue);


      // this.node.removeFromParent();
      // otherCollider.node.addChild(this.node);
      //this.node.parent = otherCollider.node;
      //this.node.setPosition(otherCollider.node.getPosition());
    }
  },
  update: function (dt) {
    //this._controllDir();
    this._changePosInBorder();
  }
});