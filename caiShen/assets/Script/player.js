// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        max_l: {
            default: -295,
            tyep: Number,
            tooltip: "向左移动x轴最大距离"
        },
        max_r: {
            default: 240,
            tyep: Number,
            tooltip: "向右移动x轴最大距离"
        },
        player: cc.Node,

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        cc.macro.ENABLE_MULTI_TOUCH = false;
        var self = this
        this.dir = cc.v2(0, 0);

        this.node.on(cc.Node.EventType.TOUCH_MOVE, function (event) {

            let star_pos = event.getPreviousLocation();

            let screen_pos = event.getLocation();
            let tempX = star_pos.x - screen_pos.x;
            let pos = cc.v2(tempX, screen_pos.y);

            self.player.x = self.player.x - pos.x;
            if (self.player.x > self.max_r) {
                self.player.x = self.max_r;
            } else if (self.player.x < self.max_l) {
                self.player.x = self.max_l;
            }


        });


    },

    // update (dt) {},
});
