cc.Class({
    extends: cc.Component,

    properties: {
        player: {
            default: null,
            type: cc.Node
        }
    },
    onLoad() {
        // this.lastPosy = 0;
    },

    lateUpdate: function (dt) {
        //摄像机跟随移动
        var pos, targetPos;
        targetPos = this.player.convertToWorldSpaceAR(cc.Vec2.ZERO);

        pos = this.node.parent.convertToNodeSpaceAR(targetPos);


        //节点坐标系
        var temp = (this.node.position.y + Math.floor(this.node.position.y / 2000) + 1.3);
        this.node.setPosition(this.node.position.x, temp);



        if (this.node.position.y - pos.y < -750) {
            // cc.director.loadScene("gameOver");
            cc.log("测试用例")
        }


        if (this.node.position.y - pos.y > 800) {
            cc.director.loadScene("gameOver");
        }
    }
});

var twoSum = function (nums, target) {
    if (nums.length < 2) {
        return false;
    }
    nums.sort();
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {

        }
    }

};
