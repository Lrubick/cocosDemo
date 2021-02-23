import { _decorator, Component, Node, AnimationComponent,systemEvent, SystemEvent, macro, Vec3, math, game, Quat, CCFloat, Prefab, director, instantiate, Scene, EventMouse, geometry,CameraComponent, PhysicsSystem, SystemEventType, AnimationManager, tween ,Color, Vec4, AudioSourceComponent, AudioClip, ButtonComponent} from 'cc';
const { ccclass, property } = _decorator;

const objectVec3 = new Vec3();

@ccclass('mainScene')
export class MoutaiController extends Component {

    @property({type:Node})
    public nodeLoading :Node = null;                        //loading层

    @property({type: Node})
    public nodeEnter :Node = null;                          //进入场景节点

    @property({type: ButtonComponent})
    public btnOpenDoor :ButtonComponent = null;             //开门按钮

    @property({type: AnimationComponent})
    public aniBtnMusic :AnimationComponent = null;          //音乐按钮动画

    @property({type:AnimationComponent})
    public ani_first_layer:AnimationComponent = null;       //黑洞动画
   
    @property({type:AnimationComponent})
    public ani_enter_layer:AnimationComponent = null;       //场景拉近动画

    @property({type:AnimationComponent})
    public ani_open_door:AnimationComponent = null;         //开门动画
    @property({type: Node})
    public tip_layer :Node = null;                          //提示层

    @property({type: Node})
    public nodeShare :Node = null;                          //分享

    @property({type: Node})
    public nodeSharePic :Node = null;                       //分享

    @property({type:Node})
    public nodeVague :Node = null;                          //模糊背景

    @property({type:Node})
    public nodeLab :Node = null;                            //提示文字

    @property({type:Node})
    public nodeJXTouch :Node = null;                        //酱香滑动提示

    @property({type:Node})
    public nodeMoreTouch :Node = null;                      //更多滑动提示

    @property({type:AudioClip })
    public music_bg:AudioClip  = null;                      //背景音乐

    @property({type:AudioClip })
    public sound_door_press:AudioClip  = null;

    @property({type:AudioClip })
    public sound_door_open:AudioClip  = null;

    @property({type:AudioClip })
    public sound_first:AudioClip  = null;

    onLoad() {
    }
    start () {
    }
    //隐藏loading
    onClickLoading(){
        this.nodeLoading.active = false;
        this.ani_first_layer.play("first");
        this.sound_first.playOneShot(1);
        //cc.audioEngine.playMusic(this.music_bg,true);
    }
    //音乐按钮回调
    onBtnClickMusic(){
        if(this.music_bg.state == AudioClip.PlayingState.PLAYING){
            this.aniBtnMusic.stop();
            this.music_bg.pause();
        }else{
            this.aniBtnMusic.play("btn_music");
            this.music_bg.play();
        }
    }
    //开门按钮回调
    onBtnClickOpenDoor(){
        this.btnOpenDoor.interactable = false;
        this.sound_door_press.playOneShot(1);
        this.sound_door_open.playOneShot(1);
        this.ani_open_door.play("door");
        this.ani_open_door.on(AnimationComponent.EventType.FINISHED,this.playEnterAni,this);
    }
    //播放场景拉近动画
    playEnterAni(){
        this.ani_enter_layer.play("enter_layer");
        this.ani_enter_layer.on(AnimationComponent.EventType.FINISHED,this.playEnterAniComplete,this);
    }
    //场景拉近动画结束回调
    playEnterAniComplete(){
        this.nodeEnter.active = false;
        this.music_bg.play();
        this.music_bg.setLoop(true);
        this.nodeVague.getComponent(AnimationComponent).play();
    }
    //了解更多按钮回调
    onBtnClickMore(){
        this.tip_layer.active =  true;
    }
    //关闭页面按钮回调
    onBtnClickClose(event){
        this.tip_layer.active = false;
    }
    //分享按钮回调
    onBtnClickShare(){
        this.nodeShare.active = true;
        this.nodeSharePic.setPosition(new Vec3( this.nodeSharePic.getPosition().x,cc.winSize.height/2,0));
    }
    //关闭分享界面
    onBtnCloseShare(){
        this.nodeShare.active = false;
    }
    //关闭文字提示界面按钮
    onBtnCloseLab(){
        this.nodeLab.active = false;
    }
    //关闭酱香滑动提示
    onBtnCloseJXTouch(){
        this.nodeJXTouch.active = false;
    }
    //关闭更多滑动提示
    onBtnCloseMoreTouch(){
        this.nodeMoreTouch.active = false;
    }
    //update
    update (deltaTime: number) {
    }
    onBtnClickPhone(event,data){
        switch (data) {
            case "0":
                location.href= 'tel:085122386145'
                break;
            case "1":
                location.href= 'tel:18185228521'
                break;
            case "2":
                location.href= 'tel:18185228522'
                break;
            case "3":
                location.href= 'tel:4008189999'
                break;
        
            default:
                break;
        }
    }
    onDestroy() {
        // 取消触摸监听
        //systemEvent.off(SystemEvent.EventType.TOUCH_MOVE,this.onTouchMove,this);
    }
}
