cc.Class({
    extends: cc.Component,

    properties: {
        revolveTime: 0.8            // 旋转所需时间
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.attrArray = [
            JSON.stringify({
                zIndex: 3,
                scale: 1,
                opacity: 255,
                pos: this.node.children[0].position
            }),
            JSON.stringify({
                zIndex: 2,
                scale: 0.8,
                opacity: 180,
                pos: this.node.children[1].position
            }),
            JSON.stringify({
                zIndex: 1,
                scale: 0.5,
                opacity: 100,
                pos: this.node.children[2].position
            }),
            JSON.stringify({
                zIndex: 0,
                scale: 0.2,
                opacity: 30,
                pos: this.node.children[3].position
            }),
            JSON.stringify({
                zIndex: 1,
                scale: 0.5,
                opacity: 100,
                pos: this.node.children[4].position
            }),
            JSON.stringify({
                zIndex: 2,
                scale: 0.8,
                opacity: 180,
                pos: this.node.children[5].position
            }),
        ];

        // 将cardsNode子节点的各个属性初始化
        this.cardsArray = this.node.children;
        for (let i = 0; i < this.cardsArray.length; i++) {
            this.cardsArray[i].num = i;
            let initAttr = JSON.parse(this.attrArray[i]);
            this.cardsArray[i].zIndex = initAttr['zIndex'];
            this.cardsArray[i].scale = initAttr['scale'];
            this.cardsArray[i].opacity = initAttr['opacity'];
            // this.cardsArray[i].pos = initAttr['pos'];
        }

        // 触摸监听
        this.node.on('touchmove', this.onTouchMove, this);
    },

    onTouchMove(event) {
        // 首先判断动作是否执行完
        for (let i = 0; i < this.cardsArray.length; i++) {
            if (this.cardsArray[i].getActionByTag(1))
                return;
        }

        let deltaX = event.getDelta().x;
        if (deltaX > this.node.parent.width / 40) {
            // 说明是往右滑动
            this.revolve2Right();
        }
        else if (deltaX < -this.node.parent.width / 40) {
            // 说明是向左滑动
            this.revolve2Left();
        }
    },

    revolve2Right() {
        // 往右旋转
        for (let i = 0; i < this.cardsArray.length; i++) {
            // 所有节点编号+1
            if (this.cardsArray[i].num < this.cardsArray.length - 1)
                this.cardsArray[i].num += 1;
            else
                this.cardsArray[i].num = 0;

            // 获取目标属性
            let nextAttr = JSON.parse(this.attrArray[this.cardsArray[i].num]);

            // 改变z值
            this.cardsArray[i].zIndex = nextAttr['zIndex'];

            // 改变大小、透明度、位置
            let scaleAction = cc.scaleTo(this.revolveTime, nextAttr['scale']);
            let fadeAction = cc.fadeTo(this.revolveTime, nextAttr['opacity']);
            let moveAction = cc.moveTo(this.revolveTime, nextAttr['pos']);
            let spawnAction = cc.spawn(scaleAction, fadeAction, moveAction);
            spawnAction.setTag(1);      // 设置动作标签
            this.cardsArray[i].runAction(spawnAction);
        }
    },

    revolve2Left() {
        // 往左旋转
        for (let i = 0; i < this.cardsArray.length; i++) {
            // 所有节点编号-1
            if (this.cardsArray[i].num > 0)
                this.cardsArray[i].num -= 1;
            else
                this.cardsArray[i].num = this.cardsArray.length - 1;

            // 获取目标属性
            let nextAttr = JSON.parse(this.attrArray[this.cardsArray[i].num]);

            // 改变z值
            this.cardsArray[i].zIndex = nextAttr['zIndex'];

            // 改变大小、透明度、位置
            let scaleAction = cc.scaleTo(this.revolveTime, nextAttr['scale']);
            let fadeAction = cc.fadeTo(this.revolveTime, nextAttr['opacity']);
            let moveAction = cc.moveTo(this.revolveTime, nextAttr['pos']);
            let spawnAction = cc.spawn(scaleAction, fadeAction, moveAction);
            spawnAction.setTag(1);      // 设置动作标签
            this.cardsArray[i].runAction(spawnAction);
        }
    },


    // update (dt) {},
});
