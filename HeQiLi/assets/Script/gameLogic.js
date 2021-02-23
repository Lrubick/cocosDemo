cc.Class({
  extends: cc.Component,

  properties: {
  },

  onLoad: function () {
    this._score = 0;
    this._propScore = 0;
    this._initEvent();
  },
  _initEvent: function () {
    cc.director.on("set_score", (function (_this) {
      return function (event) {
        return _this._score = event.score;//+ _this._propScore;
      };
    })(this));
    cc.director.on("prop_score", (function (_this) {
      return function (event) {
        return _this._propScore += event.score;
      };
    })(this));
    cc.director.on("get_prop_score", (function (_this) {
      return function (event) {
        return event.cb(_this._propScore);
      };
    })(this));
    cc.director.on("get_score", (function (_this) {
      return function (event) {
        return event.cb(_this._score);
      };
    })(this));
    cc.director.on("clear_score", (function (_this) {
      return function (event) {
        return _this._score = event.score;
      };
    })(this));
    cc.director.on("clear_prop_score", (function (_this) {
      return function (event) {
        return _this._propScore = event.score;
      };
    })(this));
    return cc.director.on("game_over", function () {
      return cc.director.loadScene("gameOver");
    });
  }
});
