var Helpers = require('Helpers');

cc.Class({
    extends: cc.Component,

    properties: {
        spriteList: {
            default: [],
            type: [cc.SpriteFrame]
        }
    },

    // use this for initialization
    onLoad: function () {
        //randomIdx 随机数
        var randomIdx = Helpers.getRandomInt(0, this.spriteList.length);
        var sprite = this.getComponent(cc.Sprite);
        sprite.spriteFrame = this.spriteList[randomIdx];
    }

});
