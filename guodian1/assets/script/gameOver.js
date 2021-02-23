cc.Class({
  extends: cc.Component,

  properties: {
    score: cc.Label
  },
  onLoad: function () {
    this.webExchange(window.propScore + window.score);
    //this._setScore();
  },
  _setScore: function () {
    this.score.string = window.propScore + window.score;
  },
  onRePlay: function () {
    return cc.director.loadScene("game");
  },
  webExchange(score) {
    console.log("GameOver", score);
  },
  update: function (dt) { },

});

