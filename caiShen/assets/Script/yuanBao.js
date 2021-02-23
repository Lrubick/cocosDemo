cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {

    },


    start() {

        var randomTime = Math.floor(Math.random() * 2 + 1);

        switch (this.name) {
            case 'jinYB<yuanBao>':
                this.getComponent(cc.Collider).name = 'jinYB';
                break;
            case 'rice<yuanBao>':
                this.getComponent(cc.Collider).name = 'rice';
                randomTime = Math.floor(Math.random() + 1)
                break;
            case 'score<yuanBao>':
                this.getComponent(cc.Collider).name = 'score';
                break;
            case 'soybeanOil<yuanBao>':
                this.getComponent(cc.Collider).name = 'soybeanOil';
                randomTime = Math.floor(Math.random() + 1)

                break;
            case 'yinYB<yuanBao>':
                this.getComponent(cc.Collider).name = 'yinYB';
                break;
        }


        cc.tween(this.node).to(randomTime, { position: cc.v2(this.node.x, -1325) }).call(() => {
            this.node.destroy();
        }).start()
    },



    /**
    * 当碰撞产生的时候调用
    * @param  {Collider} other 产生碰撞的另一个碰撞组件
    * @param  {Collider} self  产生碰撞的自身的碰撞组件
    */
    onCollisionEnter: function (other, self) {
        cc.log(other.name);
        if (other.name === 'player') {
            // 加分 销毁
            cc.log('进入碰撞判断');
            self.node.destroy();
        }


    },

    // start() {

    // },
    onDestory() {
    },

    // update (dt) {},
});
