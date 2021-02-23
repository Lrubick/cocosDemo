const MAX_VALUE = 5;
const TIPS_STR = 'repeat count: ' + MAX_VALUE + ' / value';

cc.Class({
    extends: cc.Component,

    properties: {
        tips: cc.Label
    },

    // use this for initialization
    onLoad() {
        this.setTips(0);
        let count = 0;
        let action1 = cc.delayTime(1);
        let action2 = cc.callFunc(() => {
            count++;
            this.setTips(count);
        }, this);
        this.node.runAction(cc.repeat(cc.sequence(action1, action2), 5));
        var a = new PoolNode;

        this.enemyPool = new cc.NodePool();
        let initCount = 5;
        var a = null;
        // for (let i = 0; i < initCount; ++i) {
        let enemy = cc.instantiate(this.enemyPrefab); // 创建节点
        this.enemyPool.put(enemy); // 通过 put 接口放入对象池
        a = this.enemyPool.get();
        // a.clone();
        // for () {
        //     a 完成了什么事
        //     this.enemyPool.put(a);
        // }

        // for (let i = 0; i < 100; ++i) {
        //     let enemy = cc.instantiate(this.enemyPrefab); // 创建节点
        //     // this.enemyPool.put(enemy); // 通过 put 接口放入对象池
        //     enemy.destroy();
        // } 

    },

    setTips(count) {
        this.tips.string = TIPS_STR.replace(/value/, count);
    }

});
