/** 左右边界及总宽 */
let POS = cc.Enum({
    LEFT: -360,
    RIGHT: 360,
    WIDTH: 720,
});

cc.Class({
    extends: cc.Component,

    properties: {
        draw: cc.Graphics,
    },

    start() {
        this.node.on(cc.Node.EventType.TOUCH_START, (e) => {
            let pos = this.node.convertToNodeSpaceAR(e.getLocation());
            pos.x -= this.draw.node.x;
            pos.y -= this.draw.node.y;
            this.drawLine(pos);
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, (e) => {
            let pos = this.node.convertToNodeSpaceAR(e.getLocation());
            pos.x -= this.draw.node.x;
            pos.y -= this.draw.node.y;
            this.drawLine(pos);
        }, this);

        this.node.on(cc.Node.EventType.TOUCH_END, (e) => {
            this.clearLine();
        }, this);
    },

    /** 传入转化后点 */
    drawLine(pos) {
        this.draw.clear();
        let lineLength = 2000;
        // 斜率 k = y / x
        let k = pos.y / pos.x;
        // 预计到达的边界点
        let point = cc.v2(0, 0);
        // 画笔到起始点
        this.draw.moveTo(0, 0);
        //与y轴截距
        let b = 0;
        let x, y;
        cc.log("斜率k = " + k);
        // 算一下 b 的增长值
        let d_b = (k > 0 ? POS.RIGHT : POS.LEFT) * k;
        cc.log("b的增长值 ：" + d_b);
        // 起始标志
        let isRebound = false;
        while (true) {
            // 如果到墙，求与墙的交点
            x = k > 0 ? POS.RIGHT : POS.LEFT;
            // x = 360;
            // 一元函数 y = k·x + b
            y = k * x + b;
            // 到达墙壁所需长度
            let l = cc.v2(x, y).sub(point).mag();
            // 判断能否到墙
            if (l < lineLength) {
                isRebound = true;
                // 扣去已经过长度
                lineLength -= l;
                this.draw.lineTo(x, y);
                // 更改下一轮循环起始点
                point.x = x;
                point.y = y;
                b = y + d_b;
                k *= -1;
            } else {
                // 如果不能到墙，分为两种情况，需要一个标志
                if (isRebound) {
                    let l_k = lineLength / l;
                    let r_x = POS.WIDTH * l_k;
                    x = k > 0 ? POS.LEFT + r_x : POS.RIGHT - r_x;
                    y = k * x + b;
                } else {
                    let l_k = lineLength / l;
                    let r_x = POS.WIDTH / 2 * l_k;
                    x = k > 0 ? r_x : -r_x;
                    y = k * x;
                    // 中心处理
                    if (x > -0.05 && x < 0.05);
                    y = lineLength;
                }
                this.draw.lineTo(x, y);
                break;
            }
        }
        this.draw.stroke();
    },

    clearLine() {
        this.draw.clear();
    },

});
