// 定义了一个类,  自动生成的，extends 组件类;
cc.Class({
    extends: cc.Component,

    // 属性列表
    properties: {
        is_debug: false,
    },

    // 开始运行之前调用  组件实例.start
    start() {
        // this ---> 组件实例
        // this.node ---> 当前组件实例所在节点;
        console.log("start");
    },

    // 每次刷新你的时候  组件实例.update;
    // |_____dt____|  dt 迭代出我们这次update 场景的变化;
    update(dt) {
        // this ---> 组件实例
        // this.node ---> 当前组件实例所在节点;
        // console.log("update");
    },
});
