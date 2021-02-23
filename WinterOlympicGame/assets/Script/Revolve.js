cc.Class({
    extends: cc.Component,

    properties: {
        revolveTime: 0.8,            // 旋转所需时间
        selectPostersNames: {
            default: [],
            type: cc.SpriteFrame,
            // displayName: "",
            tooltip: "选择海报页面场景名称贴图",
        },
        title: cc.Sprite


    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        this.attrArray = [
            JSON.stringify({
                zIndex: 4,
                scale: 0.5,
                opacity: 100,
                pos: this.node.children[0].position
            }),
            JSON.stringify({
                zIndex: 3,
                scale: 0.8,
                opacity: 100,
                pos: this.node.children[1].position
            }),
            JSON.stringify({
                zIndex: 0,
                scale: 1,
                opacity: 255,
                pos: this.node.children[2].position
            }),
            JSON.stringify({
                zIndex: 1,
                scale: 0.8,
                opacity: 100,
                pos: this.node.children[3].position
            }),
            JSON.stringify({
                zIndex: 2,
                scale: 0.5,
                opacity: 100,
                pos: this.node.children[4].position
            }),
            JSON.stringify({
                zIndex: 5,
                scale: 0.2,
                opacity: 100,
                pos: this.node.children[5].position
            }),
            JSON.stringify({
                zIndex: 6,
                scale: 0.2,
                opacity: 100,
                pos: this.node.children[5].position
            }),
            JSON.stringify({
                zIndex: 7,
                scale: 0.2,
                opacity: 100,
                pos: this.node.children[5].position
            }),
            JSON.stringify({
                zIndex: 8,
                scale: 0.2,
                opacity: 100,
                pos: this.node.children[5].position
            }),
            JSON.stringify({
                zIndex: 9,
                scale: 0.2,
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

            let spawnAction;
            if (i === 9) {
                spawnAction = cc.spawn(scaleAction, fadeAction);
                this.cardsArray[i].setPosition(nextAttr['pos']);

            } else {
                spawnAction = cc.spawn(scaleAction, fadeAction, moveAction);
            }

            if (nextAttr['pos'].x > -2 && nextAttr['pos'].x < 2) {
                window.selectMark = this.cardsArray[i].name;
                this.title.spriteFrame = this.selectPostersNames[window.selectMark - 1];
            }

            // let spawnAction = cc.spawn(scaleAction, fadeAction, moveAction);
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
            let spawnAction;
            if (i === 4) {
                spawnAction = cc.spawn(scaleAction, fadeAction);
                this.cardsArray[i].setPosition(nextAttr['pos']);

            } else {
                spawnAction = cc.spawn(scaleAction, fadeAction, moveAction);
            }
            // cc.log(nextAttr['pos']);
            if (nextAttr['pos'].x > -2 && nextAttr['pos'].x < 2) {
                // cc.log("节点名称：" + this.cardsArray[i].name);
                window.selectMark = this.cardsArray[i].name;
                this.title.spriteFrame = this.selectPostersNames[window.selectMark - 1];

            }
            spawnAction.setTag(1);      // 设置动作标签
            this.cardsArray[i].runAction(spawnAction);
            // this.cardsArray[i].setPosition(nextAttr['pos']);
        }
    },


    // update (dt) {},
});
