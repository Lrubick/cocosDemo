cc.Class({
    extends: cc.Component,

    properties: {
        isOpen: {
            default: true,
            displayName: '开启物理系统'
        },
        isDraw: {
            default: true,
            displayName: '开启物理绘制'
        }
    },

    onLoad() {
        if (this.isOpen) {
            cc.director.getPhysicsManager().enabled = true;
        }
        if (this.isDraw) {
            cc.director.getPhysicsManager().debugDrawFlags =
                cc.PhysicsManager.DrawBits.e_aabbBit |
                cc.PhysicsManager.DrawBits.e_pairBit |
                cc.PhysicsManager.DrawBits.e_centerOfMassBit |
                cc.PhysicsManager.DrawBits.e_jointBit |
                cc.PhysicsManager.DrawBits.e_shapeBit;
        }
    },

});
