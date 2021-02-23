var hello = require("hellworld");
cc.Class({
    extends: cc.Component,

    properties: {
        touches: {
            type: cc.v2,
            default: []
        },
        angleArr: [],
        graphics: cc.Graphics,
        background: cc.Sprite,
    },

    // use this for initialization
    onLoad: function () {
        hello = new hello();
        cc.log(hello.test);

        // cc.vv.hell = new hello();
        var self = this;
        //禁止多点触摸
        cc.macro.ENABLE_MULTI_TOUCH = false;
        //加载动画
        cc.loader.loadRes("animation/hc", sp.SkeletonData, function (err, res) {
            if (err) {
                console.log("动画加载错误");
                cc.error(err);
            }
            self.res = res;
        });
    },

    start() {

        var canvas = cc.find("Canvas");
        canvas.on(cc.Node.EventType.TOUCH_START, this.onTouchStart, this);
        canvas.on(cc.Node.EventType.TOUCH_MOVE, this.onTouchMove, this);
        canvas.on(cc.Node.EventType.TOUCH_END, this.onTouchEnd, this);

        this.graphics = this.getComponent(cc.Graphics);
        this.graphics.moveTo(0, 0);
        this.graphics.lineTo(0.1, 0);
        this.graphics.lineTo(-0.11, 0);
        this.graphics.stroke();
    },


    onTouchStart(event) {
        this.touches.length = 0;
        this.touches.push(event.touch.getLocation());
        let canvas = cc.find("Canvas")
        let spriteNode = canvas.getChildByName("Sprite");
        this.angleArr.length = 0;
        //对上次创建节点做处理
        if (spriteNode != null) {
            // cc.Tween.stopAllByTag(1);
            this.background.unscheduleAllCallbacks();
            spriteNode.destroy();
        }

    },

    onTouchMove(event) {
        let touches = this.touches;
        touches.push(event.touch.getLocation());
        const MIN_POINT_DISTANCE = 2;
        this.graphics.clear();
        let worldPos = this.node.convertToWorldSpaceAR(cc.v2());
        this.graphics.moveTo(touches[0].x - worldPos.x, touches[0].y - worldPos.y);
        let lastIndex = 0;
        for (let i = 1, l = touches.length; i < l; i++) {
            if (touches[i].sub(touches[lastIndex]).mag() < MIN_POINT_DISTANCE) {
                continue;
            }
            lastIndex = i;
            this.graphics.lineTo(
                touches[i].x - worldPos.x,
                touches[i].y - worldPos.y
            );
        }

        this.graphics.stroke();
    },

    onTouchEnd(event) {
        var self = this;
        var canvas = cc.find("Canvas");
        var nodes = new cc.Node("Sprite");
        nodes.scale = 0.2;
        nodes.anchorY = 0;
        canvas.addChild(nodes);
        // var spine = nodes.addComponent(cc.Sprite)
        var spine = nodes.addComponent(sp.Skeleton)
        spine.skeletonData = this.res;
        spine.premultipliedAlpha = false;
        spine.setAnimation(0, 'animation', true);

        this.nodes = nodes;
        this.sprite = spine;

        let worldPos = this.node.convertToWorldSpaceAR(cc.v2());

        // cc.loader.loadRes('/HelloWorld.png', cc.SpriteFrame, (err, asset) => {
        // self.sprite.spriteFrame = asset;
        // self.sprite.node.anchorY = 0;
        nodes.setPosition(self.touches[0].x - worldPos.x, self.touches[0].y + 5 - worldPos.y);
        // });

        var tweenArr = cc.tween(self.nodes).to(0, { position: cc.v2(self.touches[0].x - worldPos.x, self.touches[0].y + 5 - worldPos.y) })
        // var perAngelVale = 0;
        for (let i = 1, l = this.touches.length; i < l; i++) {
            let transformX = self.touches[i].x - worldPos.x;
            let transformY = self.touches[i].y + 5 - worldPos.y;
            let angelValue = self.angleByNode(cc.v2(self.touches[i - 1].x - worldPos.x, self.touches[i - 1].y + 5 - worldPos.y), cc.v2(transformX, transformY));

            // let current = Math.floor(self.nodes.angle + 10) % 360;
            // if (current < 0) {
            //     current += 360;
            // }
            // if (angelValue <= 0) {
            //     angelValue += 360;
            // }

            // let angelValue2 = angelValue - 360;

            // if (Math.abs(angelValue2 - perAngelVale) < Math.abs(angelValue - perAngelVale)) {
            //     angelValue = angelValue2;
            // }
            // perAngelVale = angelValue;

            let action1 = cc.tween(self.nodes).to(0.06, { position: cc.v2(transformX, transformY) });
            let action2 = cc.tween(self.nodes).to(0.001, { angle: angelValue });
            // let action2 = cc.tween(self.nodes).to(0.03, { angle: angelValue });
            tweenArr.parallel(action1, action2);
        }

        let allTime = this.touches.length * 0.06
        cc.tween(self.nodes).tag(1).then(tweenArr).call(() => {
            self.nodes.active = false;
        }).start();
        this.background.schedule(function () {
            cc.log("schedule!");
            self.nodes.active = true;
            cc.tween(self.nodes).tag(1).then(tweenArr).call(() => {
                self.nodes.active = false;
            }).start();
        }, allTime + 3);


    },


    // 返回两个节点之间的角度
    angleByNode(source, target) {
        let result = Math.atan2(target.y - source.y, target.x - source.x);
        result = cc.misc.radiansToDegrees(result);
        return result;



        // let result = Math.floor(cc.misc.radiansToDegrees(Math.atan2(target.y - source.y, target.x - source.x))) % 360;
        // if (result < 0) {
        //     result += 360;
        // }
        // let nodeAngle = 
        // return result;


    },


    // getAngle: function (start, end) {
    //     //计算出朝向
    //     var dx = end.x - start.x;
    //     var dy = end.y - start.y;
    //     var dir = cc.v2(dx, dy);

    //     //根据朝向计算出夹角弧度
    //     var angle = dir.signAngle(cc.v2(1, 0));

    //     //将弧度转换为欧拉角
    //     var degree = angle / Math.PI * 180;

    //     // while (degree < 0) degree += 360;
    //     return -degree
    // },


    // called every frame
    update: function (dt) {
    },
});

