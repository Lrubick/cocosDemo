var joystick = require("joystick");

cc.Class({
    extends: cc.Component,

    properties: {
        stick: {
            type: joystick,
            default: null,
        },

        speed: 100,
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {

    },

    update(dt) {
        if (this.stick.dir.x === 0 && this.stick.dir.y === 0) {
            return;
        }

        // 获取了摇杆的方向
        var s = this.speed * dt; // 标量;
        var sx = s * this.stick.dir.x; // .x === cos(a)
        var sy = s * this.stick.dir.y; // .y === sin(a)
        this.node.x += sx;
        this.node.y += sy;
        // end 

        var r = Math.atan2(this.stick.dir.y, this.stick.dir.x); // [-PI, PI] ---》弧度
        var degree = r * 180 / Math.PI;
        this.node.rotation = (360 - degree) + 90;
    },
});
