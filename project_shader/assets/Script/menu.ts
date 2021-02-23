/*
 * @Author: your name
 * @Date: 2020-11-11 16:55:49
 * @LastEditTime: 2020-11-24 14:45:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project_shader\assets\Script\menu.ts
 */
const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {
    start() {
        // init logic
        // this.label.string = this.text;
    }

    btn_click_call(event, data) {
        switch (data) {
            case "0":
                cc.director.loadScene("shader_dissolve");
                break;
            case "1":
                cc.director.loadScene("shader_mosaic");
                break;
            case "2":
                cc.director.loadScene("shader_photo");
                break;
            case "3":
                cc.director.loadScene("shader_water");
                break;
            case "4":
                cc.director.loadScene("shader_wave_light");
                break;

            default:
                break;
        }
    }
}
