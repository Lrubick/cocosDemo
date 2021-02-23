
cc.Class({
    extends: cc.Component,

    properties: {
        stick: {
            type: cc.Node,
            default: null,
        },

        max_R: 120,
    },

    start() {
        this.stick.setPosition(cc.v2(0, 0));
        this.dir = cc.v2(0, 0);

        this.stick.on(cc.Node.EventType.TOUCH_START, function (e) { // 触摸按下

        }.bind(this), this);

        // e: cc.Touch ---> getLocation ---> 触摸坐标
        this.stick.on(cc.Node.EventType.TOUCH_MOVE, function (e) { // 触摸移动
            var screen_pos = e.getLocation();
            var pos = this.node.convertToNodeSpaceAR(screen_pos);

            var len = pos.mag();
            if (len <= 0) {
                return;
            }


            this.dir.x = pos.x / len; // cos(a)
            this.dir.y = pos.y / len; // sin(a)
            if (len > this.max_R) { // max_R/len = x_new / x = y_new / y;
                pos.x = pos.x * this.max_R / len;
                pos.y = pos.y * this.max_R / len;
            }
            this.stick.setPosition(pos);

        }.bind(this), this);

        this.stick.on(cc.Node.EventType.TOUCH_END, function (e) { // 触摸弹起(节点内)
            this.dir = cc.v2(0, 0);
            this.stick.setPosition(cc.v2(0, 0));
        }.bind(this), this);

        this.stick.on(cc.Node.EventType.TOUCH_CANCEL, function (e) { // 触摸弹起(节点外)
            this.dir = cc.v2(0, 0);
            this.stick.setPosition(cc.v2(0, 0));
        }.bind(this), this);

    },

    update(dt) { },
});
