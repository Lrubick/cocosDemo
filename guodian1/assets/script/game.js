window.lives = 0;   //命
window.fade = false;
window.buffs = 0;   //保护
window.addScore = 0;
window.lastCollider = null;
window.previousCollider = null;
window.score = -10;
window.propScore = 0;
window.bJumping = false;
window.fadeCollider = null;
window.tipYue = false;
window.tipSunH = false;

cc.Class({
  extends: cc.Component,

  properties: {
    platformRootNode: cc.Node,
    platform_prefab: [cc.Prefab],
    player: cc.Node,
    lastPlatform: cc.Node,
    scoreLabel: cc.Label,
    scorePropLabel: cc.Label,
    propPrefab: {
      default: [],
      type: [cc.Prefab]
    },
    bulletPrefab: cc.Prefab,
    touchNode: cc.Node,
    node_guide: cc.Node,
    lab_revice: cc.Label,
    tip_yue: cc.Node,
    tip_sunhuai: cc.Node
  },
  _getRandomNum: function () {
    var randomNum;
    randomNum = Math.random() * 1;
    randomNum = Math.floor(randomNum);
    return randomNum;
  },
  _getRandomInt: function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },
  onLoad: function () {
    this._createCount = 0;
    this._propScore = 0;
    this._platformList = [this.lastPlatform];
    this._bulletList = [];
    this._propList = [];
    this._usePhysics();
    this._createListener();

    this.funcTimes = 0;
    this.offsetx = 0;
    //复位
    //window.lives = 0;   //命
    window.fade = false;
    window.buffs = 0;   //保护
    window.addScore = 0;
    window.lastCollider = null;
    window.previousCollider = null;
    window.previousCollider = this._platformList[0].getComponent(cc.PhysicsCollider);

    if (window.lives == 0) {
      window.score = -10;
      window.propScore = 0;
    } else {
      window.lives--;
      window.score -= 10;
      this._score = window.score;
      this._propScore = window.propScore;
      this.node_guide.active = false;
      this.lab_revice.node.active = true;
      this.lab_revice.node.opacity = 255;
      this.lab_revice.node.runAction(cc.sequence(cc.delayTime(1), cc.fadeOut(1)));
    }
    console.log("reload");
    cc.director.preloadScene("gameOver");
  },
  _usePhysics: function () {
    return cc.director.getPhysicsManager().enabled = true;
  },
  _createProp: function () {
    var prop, posY, randNum;
    randNum = this._getRandomInt(1, 10);
    var playerPos = this.player.convertToWorldSpaceAR(cc.Vec2.ZERO);
    var chance = Math.floor(playerPos.y / 1200) + 4;
    // console.log("chance", chance)
    if (randNum > chance) {
      return;
    }
    randNum = this._getRandomInt(0, 7);
    posY = this._platformList[this._platformList.length - 1].y + 150;
    prop = cc.instantiate(this.propPrefab[randNum]);

    this.platformRootNode.addChild(prop);
    var posX = this._getRandomInt(0, 400);
    prop.setPosition(posX, posY);
    return this._propList.push(prop);
  },
  _createPlatform: function (posY) {
    var platform;
    platform = cc.instantiate(this.platform_prefab[this._getRandomNum()]);
    this.platformRootNode.addChild(platform);
    return this._setNewPlatformPosition(posY, platform);
  },
  _setNewPlatformPosition: function (posY, platform) {
    posY = posY + this._getRandomInt(250, 250);
    platform.setPosition(this._getRandomInt(0, 50), posY);
    return platform;
  },
  _removeOldPlatform: function () {
    var existPlatform, existPlatformList, i, len, playerPos, ref;
    existPlatformList = [];
    playerPos = this.player.convertToWorldSpaceAR(cc.Vec2.ZERO);
    ref = this._platformList;
    for (i = 0, len = ref.length; i < len; i++) {
      existPlatform = ref[i];
      if (playerPos.y - existPlatform.getPosition().y > cc.winSize.width * 4) {
        existPlatform.removeFromParent();
      } else {
        existPlatformList.push(existPlatform);
      }
    }
    this._platformList = existPlatformList;
  },
  _createNewPlatform: function () {
    var newPlatform, platformPos, playerPos;
    playerPos = this.player.convertToWorldSpaceAR(cc.Vec2.ZERO);
    platformPos = this.lastPlatform.getPosition();
    if ((platformPos.y - playerPos.y) < cc.winSize.height * 0.8) {
      newPlatform = this._createPlatform(platformPos.y);
      this._platformList.push(newPlatform);
      this.lastPlatform = newPlatform;
      this._createProp();
    }
  },
  _checkTip() {
    if (window.tipYue == true) {
      this.tip_yue.active = true;
    }
    if (window.tipSunH == true) {
      this.tip_sunhuai.active = true;
    }
  },
  //弹窗按钮回调
  onBtnClickTip() {
    cc.director.loadScene("gameOver");
  },
  update: function (dt) {
    this._createNewPlatform();
    this._changeRigidBodyActive(dt);
    this._checkGameOver();
    this._addScore();
    this._cleanItems(dt);
    this._checkTip();
    if (window.buffs > 0) {
      this.player.getChildByName("player_cover").getComponent(cc.Sprite).node.active = true;
    } else {
      this.player.getChildByName("player_cover").getComponent(cc.Sprite).node.active = false;
    }
  },
  lateUpdate(dt) {
    if (this._platformList[0].getComponent("impulse").bAddScore == false && window.bJumping == false) {
      //角色跟随
      // for (let i = 0; i < this._platformList.length; i++) {
      //     const element = this._platformList[i];
      //     if(element.getComponent("impulse").bAddScore){
      var playerPos = this.player.convertToWorldSpaceAR(cc.Vec2.ZERO);
      var targetPlatFormPos = window.previousCollider.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
      if (this.funcTimes == 0) {
        this.offsetx = playerPos.x - targetPlatFormPos.x;
        if (this.offsetx > 67) {
          this.offsetx -= 10;
        } else if (this.offsetx < -83) {
          this.offsetx += 10;
        }
        // console.log("this.offsetx", this.offsetx)
        this.player.runAction(cc.fadeIn(0.1));
        this.funcTimes++
      }
      //this.player.parent = window.previousCollider.node;
      this.player.setPosition(cc.v2(this.offsetx + window.previousCollider.node.x, window.previousCollider.node.y + 105))

      //     break;
      //   }
      // }
    }
  },

  _cleanItems: function (dt) {
    if (this._cleanTime == null) {
      this._cleanTime = 0;
    }
    this._cleanTime += dt;
    if (this._cleanTime < 1) {
      return;
    }
    this._cleanTime = 0;
    this._cleanBullets();
    this._removeOldPlatform();
    return this._cleanProp();
  },
  _getPlayerDir: function () {
    var dir, playerPos;
    if (this._lastPlayerY == null) {
      this._lastPlayerY = 0;
    }
    playerPos = this.player.convertToWorldSpaceAR(cc.Vec2.ZERO);
    dir = "up";
    if (playerPos.y > this._lastPlayerY) {
      dir = "up";
    } else {
      dir = "down";
    }
    this._lastPlayerY = playerPos.y;
    return dir;
  },
  _isTimeOk: function (dt) {
    if (this._changeRigidBodyTime == null) {
      this._changeRigidBodyTime = 0;
    }
    this._changeRigidBodyTime += dt;
    if (this._changeRigidBodyTime < 0.05) {
      return false;
    }
    this._changeRigidBodyTime = 0;
    return true;
  },
  _changeRigidBodyActive: function (dt) {
    var i, index, len, platform, playerDir, ref, rigidBody;
    if (!this._isTimeOk()) {
      return;
    }
    playerDir = this._getPlayerDir();
    ref = this._platformList;
    for (index = i = 0, len = ref.length; i < len; index = ++i) {
      platform = ref[index];
      rigidBody = platform.getComponent(cc.RigidBody);
      rigidBody.active = playerDir === "down";
    }
  },
  _checkGameOver: function () {
    var firstPlarform, playerPos;
    playerPos = this.player.convertToWorldSpaceAR(cc.Vec2.ZERO);
    firstPlarform = window.previousCollider.node;//this._platformList[0];
    //var platPos = window.previousCollider.node.convertToWorldSpaceAR(cc.Vec2.ZERO);
    if (playerPos.y + 100 < firstPlarform.y || playerPos.y < 700) {
      if (window.lives == 0) {
        cc.director.loadScene("gameOver");
      } else {
        cc.director.loadScene("game");
      }
    }
  },
  _addScore: function () {
    var playerPos;
    if (this._lastHigh == null) {
      this._lastHigh = 0;
    }
    // var propScore = 0;
    // cc.director.emit("get_prop_score", {
    //   cb: (function(_this) {
    //     return function(score) {
    //       return propScore = score;
    //     };
    //   })(this)
    // });
    if (this._propScore != window.propScore) {
      //this._score += propScore;
      var temp = window.propScore - this._propScore;
      var result = window.score + window.propScore;
      this.scoreLabel.string = result;
      this.scorePropLabel.node.active = true;
      this.scorePropLabel.string = (temp > 0 ? "+" : "") + temp;
      var that = this;
      //that.scoreLabel.string =  result;
      this.node.runAction(cc.sequence(cc.delayTime(1), cc.callFunc(() => {
        that.scorePropLabel.node.active = false;
      })))
      this._propScore = window.propScore;
    }
    playerPos = this.player.convertToWorldSpaceAR(cc.Vec2.ZERO);

    if (this._score != window.score) {
      this.scoreLabel.string = window.score + this._propScore;
      this._score = window.score;
    }
    // if (playerPos.y > this._lastHigh) 
    // {
    //   // window.score = Math.floor((playerPos.y-810) / 25);
    //   // this.scoreLabel.string =   (window.score+this._propScore);
    //   // this._lastHigh = playerPos.y;
    // }
  },
  _createBullet: function () {
    var body, bullet, speedY;
    bullet = cc.instantiate(this.bulletPrefab);
    this.platformRootNode.addChild(bullet);
    bullet.setPosition(this.player.x, this.player.y + this.player.height * 1.5);
    body = bullet.getComponent(cc.RigidBody);
    body.linearVelocity = cc.v2();
    speedY = this.player.getComponent(cc.RigidBody).linearVelocity.y / 3;
    body.applyLinearImpulse(cc.v2(10, Math.max(speedY, 200)), body.getWorldCenter(), true);
    return this._bulletList.push(bullet);
  },
  _createListener: function () {
    this.touchNode.on(cc.Node.EventType.TOUCH_START, (function (_this) {
      return function () {
        //   //return _this._createBullet();
        //   _this.scheduleOnce(function() {
        //         _this._CanJump = true;
        // }, 2);
        var canJump = _this.player.getComponent("player")._CanJump;
        // console.log("_this.player._CanJump====", canJump)
        if (canJump) {
          //canJump = false;
          _this.funcTimes = 0;
          window.bJumping = true;
          _this.player.getComponent(cc.RigidBody).applyLinearImpulse(cc.v2(0, 1600), _this.player.getComponent(cc.RigidBody).getWorldCenter(), true);
          _this.player.getComponent(cc.Animation).play();
          _this.player.getComponent("player")._CanJump = false;
        }
      };
    })(this));
    return this.touchNode.on(cc.Node.EventType.TOUCH_END, (function (_this) {
      return function () {
        // return _this._createBullet();
      };
    })(this));
  },

  _cleanBullets: function () {
    var bullet, existBullet, i, isNearPlayer, len, ref;
    existBullet = [];
    ref = this._bulletList;
    for (i = 0, len = ref.length; i < len; i++) {
      bullet = ref[i];
      if (!bullet) {
        console.log("bullet is null");
        continue;
      }
      isNearPlayer = (bullet.y - this.player.y) < this.player.height;
      if (this.player.y - bullet.y > cc.winSize.height || isNearPlayer) {
        bullet.removeFromParent();
      } else {
        existBullet.push(bullet);
      }
    }
    this._bulletList = existBullet;
  },
  _cleanProp: function () {
    var existProp, i, len, prop, ref;
    existProp = [];
    ref = this._propList;
    for (i = 0, len = ref.length; i < len; i++) {
      prop = ref[i];
      if (this.player.y - prop.y > cc.winSize.height * 3) {
        prop.removeFromParent();
      } else {
        existProp.push(prop);
      }
    }
    this._propList = existProp;
  },
  onClickGuide() {
    this.node_guide.active = false;
  },
});