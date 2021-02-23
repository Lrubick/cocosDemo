/*
 * @Author: your name
 * @Date: 2020-11-11 17:04:22
 * @LastEditTime: 2020-11-11 17:13:24
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings pro
 * @FilePath: \project_shader\assets\Script\shader_photo.ts
 */
// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    @property(cc.Label)
    label: cc.Label = null;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    foo_slider(data) {
        // console.log(data);
        //获取渲染组件的材质
        let material: cc.Material = this.sprite.getMaterial(0);
        // 给材质的uniform变量更新值
        material.setProperty("oldLevel", data.progress);

        this.label.string = data.progress.toFixed(2);
        //重新将材质设置回去
        this.sprite.setMaterial(0, material);
    }
    btn_return() {
        cc.director.loadScene("menu");
    }
    // update (dt) {}
}
