import { _decorator, Component, Node, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Test9')
export class Test9 extends Component {
    

    start () {
       
    }

    update (deltaTime: number) {
       this.node.eulerAngles=new Vec3(this.node.eulerAngles.x,this.node.eulerAngles.y-1,this.node.eulerAngles.z);
    }
}
