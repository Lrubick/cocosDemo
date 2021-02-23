// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        numberEffect: cc.Prefab,
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.getComponent(cc.Collider).name = 'player';
    },

    /**
* 当碰撞产生的时候调用
* @param  {Collider} other 产生碰撞的另一个碰撞组件
* @param  {Collider} self  产生碰撞的自身的碰撞组件
* 金元宝：30
* 银元宝：20
* 钱币：15
* 豆油：200
* 大米：200
*/
    onCollisionEnter: function (other, self) {
        // 加分 销毁
        cc.log(other.name);

        var light = this.node.parent.getChildByName("light");
        switch (other.name) {
            case 'jinYB':
                cc.vv.gameLogic.playerScoreNum += 30;
                this.createNumber("+30");
                cc.vv.gameLogic.rewardNum[0] += 1;
                break;
            case 'rice':
                light.stopAllActions();

                var action = cc.sequence(cc.blink(1, 2), cc.callFunc(function () {
                    light.opacity = 0;
                }));;
                light.runAction(action);
                cc.vv.gameLogic.playerScoreNum += 200;
                this.createNumber("+200");

                cc.vv.gameLogic.rewardNum[4] += 1;

                break;
            case 'score':
                cc.vv.gameLogic.playerScoreNum += 15;
                this.createNumber("+15");

                cc.vv.gameLogic.rewardNum[2] += 1;

                break;
            case 'soybeanOil':
                light.stopAllActions();
                var action = cc.sequence(cc.blink(1, 2), cc.callFunc(function () {
                    light.opacity = 0;
                }));
                light.runAction(action);
                cc.vv.gameLogic.playerScoreNum += 200;
                this.createNumber("+200");

                cc.vv.gameLogic.rewardNum[3] += 1;

                break;
            case 'yinYB':
                cc.vv.gameLogic.playerScoreNum += 20;
                this.createNumber("+20");

                cc.vv.gameLogic.rewardNum[1] += 1;

                break;
        }

        cc.vv.gameLogic.initGetRewardNum();


    },



    createNumber(value) {
        var numberEffectNode = cc.instantiate(this.numberEffect);
        numberEffectNode.parent = this.node;
        numberEffectNode.setPosition(cc.Vec2(0, 0));
        var numberLabel = numberEffectNode.getComponent(cc.Label);
        numberLabel.string = value;
        let animState = numberEffectNode.getComponent(cc.Animation).play();
        animState.on("finished", function () {

            numberEffectNode.destroy();

        }, this);
    },

    // update (dt) {},
});
