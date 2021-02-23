/*
 * @Author: your name
 * @Date: 2020-11-11 16:59:40
 * @LastEditTime: 2020-11-24 14:46:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project_shader\assets\Script\shader_mosaic.ts
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label_x: cc.Label = null;

    @property(cc.Label)
    label_y: cc.Label = null;

    @property(cc.Label)
    label_xy: cc.Label = null;

    @property(cc.Sprite)
    sprite: cc.Sprite = null;

    start() {
        // init logic
    }

    foo_slider(event, data) {
        // console.log(data);
        //获取渲染组件的材质
        let material: cc.Material = this.sprite.getMaterial(0);
        // 给材质的uniform变量更新值
        let count = Math.floor(event.progress * 1000);
        switch (data) {
            case "x":
                material.setProperty("xBlockCount", count);
                this.label_x.string = count + "";
                break;
            case "y":
                material.setProperty("yBlockCount", count);
                this.label_y.string = count + "";
                break;
            case "xy":
                material.setProperty("xBlockCount", count);
                material.setProperty("yBlockCount", count);
                this.label_xy.string = count + "";
                break;
            default:
                break;
        }

        //重新将材质设置回去
        this.sprite.setMaterial(0, material);
    }
    btn_return() {
        cc.director.loadScene("menu");
    }
}
