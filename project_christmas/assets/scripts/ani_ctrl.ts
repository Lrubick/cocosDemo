/*
 * @Author: your name
 * @Date: 2020-12-23 18:23:56
 * @LastEditTime: 2020-12-24 17:09:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \project_christmas_1_11\assets\scripts\ani_ctrl.ts
 */
import { _decorator, Component, Node, AnimationComponent, ButtonComponent } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('AniCtrl')
export class AniCtrl extends Component {
    @property({ type: Node })
    btn_go: Node = null;
    //监听kv动画暂停
    ani_pause(){
        this.node.getComponent(AnimationComponent).pause();
        this.btn_go.active = true;
    }
    start () {
        
    }

}
