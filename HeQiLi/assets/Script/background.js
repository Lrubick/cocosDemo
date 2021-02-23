cc.Class({
  extends: cc.Component,

  properties: {
    player: {
      default: null,
      type: cc.Node
    },
    bgLayerTable: {
      default: [],
      type: cc.Node
    }
  },

  // LIFE-CYCLE CALLBACKS:

  onLoad() {
    this.speed = 5;
  },

  _fillUpLayer: function () {
    var maxY, playerPos;
    playerPos = this.player.convertToWorldSpaceAR(cc.Vec2.ZERO);
    maxY = this.bgLayerTable[this.bgLayerTable.length - 1].getBoundingBox().yMax;

    if (maxY - playerPos.y < cc.winSize.height) {
      cc.log(maxY + cc.winSize.height / 2);
      this.bgLayerTable[0].setPosition(cc.v2(0, maxY + cc.winSize.height / 2));
    }
  },

  _fillDownLayer: function () {
    var minY, playerPos, pos;
    playerPos = this.player.convertToWorldSpaceAR(cc.Vec2.ZERO);
    minY = this.bgLayerTable[0].getBoundingBox().yMin;
    if (playerPos.y - minY < cc.winSize.height) {
      cc.log(minY - cc.winSize.height / 2);
      pos = cc.v2(0, minY - cc.winSize.height / 2);
      this.bgLayerTable[this.bgLayerTable.length - 1].setPosition(pos);
    }
  },

  _updateBackgroundLayer: function (dt) {
    this._orderLayerTable();
    this._fillUpLayer();
    return this._fillDownLayer();
  },

  _orderLayerTable: function () {
    return this.bgLayerTable.sort(function (a, b) {
      return a.y - b.y;
    });
  },

  update: function (dt) {

    if (window.score >= 80) {
      this.bgLayerTable[8].active = true;
      this.bgLayerTable[9].active = true;
    }
    return this._updateBackgroundLayer(dt);
  }
});

