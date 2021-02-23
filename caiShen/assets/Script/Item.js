cc.Class({
    extends: cc.Component,

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:
    // onLoad () {},

    initComboBox(cb, label) {
        this.cb = cb;
        this.label = label;
    },

    itemBtn(event) {
        // 子项点击后改变下拉按钮上的文本
        this.label.string = event.target.children[0].getComponent(cc.Label).string;
        cc.log(this.node.name);
        this.cb.citisArray = this.cb.itemArray[parseInt(this.node.name)].cities;
        // 选择后改变小三角和下拉框显示
        this.cb.comboboxClicked(null, this.cb.value);
    },

    // update (dt) {},
});
