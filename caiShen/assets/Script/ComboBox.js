
cc.Class({
    extends: cc.Component,

    properties: {
        triangle: cc.Node,          // 下拉按钮右边的小三角形
        comboLabel: cc.Label,       // 下拉按钮上显示的文本
        dropDown: cc.Node,          // 下拉框
        vLayoutNode: cc.Node,       // 垂直布局
        contentNode: cc.Node,       // 滚动视图内容
        itemPrefab: cc.Prefab,       // 下拉框选项



        triangle2: cc.Node,          // 下拉按钮右边的小三角形
        comboLabel2: cc.Label,       // 下拉按钮上显示的文本
        dropDown2: cc.Node,          // 下拉框
        vLayoutNode2: cc.Node,       // 垂直布局
        contentNode2: cc.Node,       // 滚动视图内容
        // itemPrefab2: cc.Prefab       // 下拉框选项
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        // 是否已经下拉
        this.isDropDown1 = false;
        this.isDropDown2 = false;
        this.value = null;
        this.comboboxCitis = this.node.getChildByName("comboboxCitis");

        this.comboboxCitis.getComponent(cc.Button).enabled = false;

        // 下拉框选项内容
        // this.itemArray = ['Cocos Creator', 'Cocos-2dx', 'Cocos2d-js', 'Cocos2d-Lua', 'Cocos Creator 3D', 'Cocos Service', 'Cocos社区'];
        var citis = require("citis");
        this.itemArray = citis.getCitis().provinces;
        this.citisArray = null;
        cc.log(this.itemArray);
        this.initItems(0);
    },

    comboboxClicked(sender, value) {
        var markNum = 0;
        this.value = value;

        if (value === "first") {
            this.comboboxCitis.getComponent(cc.Button).enabled = true;
            // 改变isDropDown值
            markNum = 0;
            if (!this.isDropDown) {
                let rotateAction = cc.rotateTo(0.5, 360).easing(cc.easeCubicActionOut());
                this.triangle.runAction(rotateAction);
            }
            else {
                let rotateAction = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
                this.triangle.runAction(rotateAction);
            }

            if (!this.isDropDown) {
                this.dropDown.active = true;
            }
            else {
                this.dropDown.active = false;
            }

            if (!this.isDropDown) {
                this.isDropDown = true;
            }
            else {
                this.isDropDown = false;
            }

            if (this.isDropDown) {
                let rotateAction = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
                this.triangle2.runAction(rotateAction);
            }

            if (this.isDropDown) {
                this.dropDown2.active = false;
            }

            if (this.isDropDown) {
                this.isDropDown2 = false;
            }


        } else {

            markNum = 1;
            if (!this.isDropDown2) {
                let rotateAction = cc.rotateTo(0.5, 360).easing(cc.easeCubicActionOut());
                this.triangle2.runAction(rotateAction);
            }
            else {
                let rotateAction = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
                this.triangle2.runAction(rotateAction);
            }

            if (!this.isDropDown2) {
                this.dropDown2.active = true;
            }
            else {
                this.dropDown2.active = false;
            }

            if (!this.isDropDown2) {
                this.isDropDown2 = true;
            }
            else {
                this.isDropDown2 = false;
            }

            if (this.isDropDown2) {
                let rotateAction = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
                this.triangle.runAction(rotateAction);
            }

            if (this.isDropDown2) {
                this.dropDown.active = false;
            }

            if (this.isDropDown2) {
                this.isDropDown = false;
            }

        }


        this.initItems(markNum);

        // 旋转小三角形
        // this.rotateTriangle(markNum);
        // 下拉框显示与隐藏
        // this.showHideDropDownBox(markNum);

    },

    rotateTriangle(markNum) {


        // if (markNum === 0) {

        if (!this.isDropDown1 && this.isDropDown2) {
            let rotateAction = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
            this.triangle.runAction(rotateAction);
        }
        else if (!this.isDropDown1 && this.isDropDown2) {
            let rotateAction = cc.rotateTo(0.5, 360).easing(cc.easeCubicActionOut());
            this.triangle.runAction(rotateAction);
        }
        // else if () {

        // } else {

        // }

        // 旋转小三角形(正值为逆时针，负值为顺时针)
        if (!this.isDropDown2 && this.isDropDown1) {
            let rotateAction2 = cc.rotateTo(0.5, 360).easing(cc.easeCubicActionOut());
            this.triangle2.runAction(rotateAction2);
        }
        else {
            let rotateAction = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
            this.triangle2.runAction(rotateAction2);
        }

        // } else {


        //     if (!this.isDropDown1) {
        //         let rotateAction = cc.rotateTo(0.5, 360).easing(cc.easeCubicActionOut());
        //         this.triangle.runAction(rotateAction);
        //     }
        //     else {
        //         let rotateAction2 = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
        //         this.triangle.runAction(rotateAction2);
        //     }

        //     // 旋转小三角形(正值为逆时针，负值为顺时针)
        //     if (!this.isDropDown2) {
        //         let rotateAction = cc.rotateTo(0.5, 360).easing(cc.easeCubicActionOut());
        //         this.triangle2.runAction(rotateAction);
        //     }
        //     else {
        //         let rotateAction2 = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
        //         this.triangle2.runAction(rotateAction2);
        //     }

        // let rotateAction = cc.rotateTo(0.5, 360).easing(cc.easeCubicActionOut());
        // this.triangle.runAction(rotateAction);



        // let rotateAction2 = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
        // this.triangle2.runAction(rotateAction2);

        // }

        // 旋转小三角形(正值为逆时针，负值为顺时针)
        // if (!this.isDropDown1) {
        //     let rotateAction = cc.rotateTo(0.5, 360).easing(cc.easeCubicActionOut());
        //     this.triangle.runAction(rotateAction);
        // }
        // else {
        //     let rotateAction = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
        //     this.triangle.runAction(rotateAction);
        // }

        // // 旋转小三角形(正值为逆时针，负值为顺时针)
        // if (!this.isDropDown2) {
        //     let rotateAction = cc.rotateTo(0.5, 360).easing(cc.easeCubicActionOut());
        //     this.triangle2.runAction(rotateAction);
        // }
        // else {
        //     let rotateAction = cc.rotateTo(0.5, -90).easing(cc.easeCubicActionOut());
        //     this.triangle2.runAction(rotateAction);
        // }

    },

    showHideDropDownBox(markNum) {

        if (markNum === 0) {
            this.dropDown2.active = false;
            this.dropDown.active = true;

        } else {
            this.dropDown2.active = true;
            this.dropDown.active = false;
        }

        // // 下拉框显示与隐藏
        // if (!this.isDropDown1)
        //     this.dropDown.active = true;
        // else
        //     this.dropDown.active = false;

        // // 下拉框显示与隐藏
        // if (!this.isDropDown2)
        //     this.dropDown2.active = true;
        // else
        //     this.dropDown2.active = false;
    },

    initItems(markNum) {

        // 根据数组初始化下拉框中的各个选项内容
        let totalHeight = 0;

        var arr = null;
        if (markNum === 0) {
            arr = this.itemArray;
            cc.log(this.citisArray);
            cc.log(this.itemArray);
            if (this.citisArray !== null && this.citisArray !== undefined) {

                this.comboLabel2.string = this.citisArray[0].name;
            }
        } else {
            arr = this.citisArray;

        }

        if (arr === null) {
            // cc.vv.toast.show("请先选择省份！");
            return;
        }

        if (markNum !== 0) {
            this.vLayoutNode2.removeAllChildren();
        }

        for (let i = 0; i < arr.length; i++) {
            let item = cc.instantiate(this.itemPrefab);
            item.children[0].getComponent(cc.Label).string = arr[i].name;
            item.name = "" + i;
            if (markNum === 0) {
                item.getComponent('Item').initComboBox(this, this.comboLabel);
                this.vLayoutNode.addChild(item);
            } else {
                item.getComponent('Item').initComboBox(this, this.comboLabel2);

                this.vLayoutNode2.addChild(item);

            }
            totalHeight += item.height;
        }


        if (markNum === 0) {
            // 设置content高度
            if (totalHeight > this.contentNode.height)
                this.contentNode.height = totalHeight;
        } else {
            // 设置content高度
            if (totalHeight > this.contentNode2.height)
                this.contentNode2.height = totalHeight;
        }




    }
    // update (dt) {},
});
