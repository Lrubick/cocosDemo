import { _decorator, Component, Node, AnimationComponent, systemEvent, SystemEvent, macro, Vec3, math, game, Quat, CCFloat, Prefab, director, instantiate, Scene, EventMouse, geometry,CameraComponent, PhysicsSystem, LabelComponent, SkinningModelComponent } from 'cc';
const { ccclass, property } = _decorator;

const objectVec3 = new Vec3();

@ccclass('MoutaiController')
export class MoutaiController extends Component {
    @property({type: CCFloat})
    public moveSpeed: number = 1;

    @property({type: Node})
    public tip_layer :Node = null;          //提示层
    @property({type:[Node]})
    public tipTouch:Node[] = [];            //提示触摸点
    @property({type:[Node]})
    public nodeTip:Node[] = [];             //提示页

    @property({type:Node})
    public nodeMouTai :Node = null;         //酒瓶
    @property({type:Node})
    public nodeBox :Node = null;            //酒箱
    @property({type:Node})
    public nodeJiangxiang :Node = null;     //酱香
    @property({type:Node})
    public nodeMouTaiLight :Node = null;    //酒瓶灯光
    @property({type:Node})
    public nodeBoxLight :Node = null;       //酒箱灯光
    @property({type:Node})

    @property({type:Node})
    public lab_moutai :Node = null;         //酒瓶
    @property({type:Node})
    public lab_box :Node = null;            //酒箱

    @property({type:cc.CameraComponent})
    public mainCamera :CameraComponent = null;
    
    //是否显示触摸节点
    //private bShowTouch = false;
    //目标点显示角度
    //private targetAngle = [-90,-180,90,0,90];
    private _rotHorizontalSpeed:number = 0.004;
    private _rotVerticalSpeed:number = 0.004;
    //射线
    private _ray: geometry.ray = new geometry.ray();
    //当前是显示的物品
    private nowIndex: number = 0;   //0:酒瓶 1：酒箱


    onLoad() {
        //触摸监听
        systemEvent.on(SystemEvent.EventType.TOUCH_START, this.onTouchStart, this);
        systemEvent.on(SystemEvent.EventType.TOUCH_MOVE,this.onTouchMove,this);
    }
    start () {
    }
    onTouchStart(event){
        this.mainCamera.screenPointToRay(event._point.x, event._point.y, this._ray);

        //基于物理碰撞器的射线检测
        if (PhysicsSystem.instance.raycastClosest(this._ray)) {
            const r = PhysicsSystem.instance.raycastClosestResult;

            this.showTipLayer(r.collider.node.uuid);
        }
    }
    onTouchMove(event){
        //横向/X轴向 滑动
        if(event.getDelta().x >= 5 ||event.getDelta().x <= -5 ){//&& this.bShowTouch == false){// && this.targetIndex <= 3){
            const horizontalRot = this.node.getRotation();
            Quat.rotateAround(horizontalRot, horizontalRot, Vec3.UNIT_Y, event.getDelta().x * this._rotHorizontalSpeed);
            this.node.setRotation(horizontalRot);
            horizontalRot.getEulerAngles(objectVec3);
            //console.log("角度=====",objectVec3);
            //console.log("角度=====",objectVec3);
            // if(Math.floor(objectVec3.y) <= this.targetAngle[this.targetIndex]+2 && Math.floor(objectVec3.y) >= this.targetAngle[this.targetIndex]-2 && this.targetTouch1.active == false){
            //     // this.bShowTouch = true;
            //     // this.targetTouch1.active = true;
            // }
        }
        //纵向/Y轴向 滑动
        if(event.getDelta().y >= 5 ||event.getDelta().y <= -5 ){//} && this.bShowTouch == false ){//&& this.targetIndex > 3) {
            const verticalRot = this.node.getRotation();
            Quat.rotateAround(verticalRot, verticalRot, Vec3.UNIT_X, -event.getDelta().y * this._rotVerticalSpeed);
            this.node.setRotation(verticalRot);
            verticalRot.getEulerAngles(objectVec3);
            //console.log("角度=====",objectVec3);
            // if(Math.floor(objectVec3.x) <= this.targetAngle[this.targetIndex]+2 && Math.floor(objectVec3.x) >= this.targetAngle[this.targetIndex]-2 && this.targetTouch1.active == false){
            //     // this.bShowTouch = true;
            //     // this.targetTouch1.active = true;
            // }
        }
    }
    //显示弹出页
    showTipLayer(uuidTip){
        for (let index = 0; index < this.tipTouch.length; index++) {
            const element = this.tipTouch[index];
            if(uuidTip == element.uuid){
                this.nodeTip[index].active = true;
                this.tip_layer.active = true;
                break;
            }
        }
    }
    //关闭页面按钮回调
    onBtnClickClose(event){
        this.tip_layer.active = false;
        for (let index = 0; index < this.nodeTip.length; index++) {
            const element = this.nodeTip[index];
            this.nodeTip[index].active = false;
        }
    }
    //切换酒瓶or酒箱按钮回调
    onBtnClickSwitch(event,data){
        //隐藏所有
        this.nodeBox.active = false;
        this.nodeMouTai.active = false;
        this.nodeJiangxiang.active = false;
        this.nodeMouTaiLight.active = false;
        this.nodeMouTaiLight.active = false;
        this.lab_moutai.active = false;
        this.lab_box.active = false;

        if(data == "left"){
            this.nowIndex = (this.nowIndex+3-1)%3
        }else{
            this.nowIndex = (this.nowIndex+1)%3
        }
        switch (this.nowIndex) {
            case 0:                         //当前茅台
                this.nodeMouTai.active = true;
                this.lab_moutai.active = true;
                this.nodeMouTaiLight.active = true;
                break;
            case 1:                         //当前酒箱
                this.nodeBox.active = true;
                this.lab_box.active = true;
                this.nodeBoxLight.active = true;
            break;
            case 2:                         //当前酱香
                this.nodeJiangxiang.active = true;
            break;
        
            default:
                break;
        }
    }
    //update
    update (deltaTime: number) {
    }

    onDestroy() {
        // 取消触摸监听
        systemEvent.off(SystemEvent.EventType.TOUCH_MOVE,this.onTouchMove,this);
    }
}
