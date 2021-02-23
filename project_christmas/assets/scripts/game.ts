import {
    _decorator, Component, Node, CCObject, Quat, Vec3, macro, RigidBodyComponent, ColliderComponent,
    SpriteComponent, CameraComponent, RenderTexture, SpriteFrame, Prefab, instantiate, director, LabelComponent, ProgressBarComponent,
    view, Size, v2, game, renderer, GFXBufferTextureCopy, AnimationClip, AnimationComponent, AnimationState, tween, AudioClip, ButtonComponent
} from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Game')
export class Game extends Component {
    
    @property({ type: Node })       
    node_role: Node = null;                     //角色节点
    
    @property({ type: Node })
    node_santa: Node = null;                    //圣诞老人节点
    
    @property({ type: Node })
    node_dott: Node = null;                     //运动中心点
    
    @property({ type: LabelComponent })
    lab_score: LabelComponent = null;           //分数
    
    @property({ type: Node })
    node_chimney: Node[] = [];                  //烟囱
    
    @property({ type: Node })
    node_collider: Node = null;                 //为投进碰撞体
    
    @property({ type: Prefab })     
    prefab_gift: Prefab = null;                 //礼物prefab
    
    @property({ type: ProgressBarComponent })
    progress_time: ProgressBarComponent = null; //倒计时进度条
    
    @property({ type: LabelComponent })
    lab_time: LabelComponent = null;            //倒计时时间
    
    @property({ type: Node })
    node_result: Node = null;                   //游戏结果页
    
    @property({ type: Node })
    node_share: Node = null;                    //分享遮罩
    
    @property({ type: Node })
    node_kv: Node = null;                       //kv页
    
    @property({ type: Node })
    node_tip: Node = null;                      //规则提示页
    
    @property({ type: Node })
    game_canvas: Node = null;                   //canvas
    
    @property({type:AudioClip})
    music_bg: AudioClip = null;                 //音乐
    
    @property({type:AudioClip})
    sound_goal: AudioClip = null;               //投中
    
    @property({type:AudioClip})
    sound_miss: AudioClip = null;               //没投中
    
    @property({ type: Node })
    node_camera: Node = null;                   //相机
    
    @property({type:AnimationComponent})
    aniBtnMusic: AnimationComponent = null;     //音乐动画
    
    @property({type:AnimationComponent})
    ani_start: AnimationComponent = null;       //转场动画

    
    way_arr: any = [];          //路径坐标集合
    
    way_index: number = 0;      //路径点记录
    
    gift_index: number = 0;     //礼物类型
    
    num_score: number = 0;      //分数
    
    num_miss: number = 0;       //未投中次数
    
    bool_miss: boolean = true;  //检测为投中开关


    start() {
        this.music_bg.play();
        this.music_bg.setLoop(true);

        var that = this;
        //烟囱碰撞检测
        for (let i = 0; i < this.node_chimney.length; i++) {
            this.node_chimney[i].getComponent(ColliderComponent).on('onTriggerEnter', function (trigger) {
                // console.log(trigger.otherCollider.node.name);
                trigger.otherCollider.node.active = false;
                //播放音效
                if(that.node_result.active == false){
                    that.sound_goal.playOneShot(1);
                }

                that.num_score += 1;
                that.lab_score.string = "" + that.num_score;
                //为投中次数清0
                that.num_miss = 0;
            })
        }
        //未投进碰撞检测
        this.node_collider.getComponent(ColliderComponent).on('onTriggerEnter', function (trigger) {
            // console.log('miss');
            trigger.otherCollider.node.active = false;
            //判断是否为投中之后的碰撞
            that.num_miss++;
            //播放音效
            if(that.node_result.active == false){
                that.sound_miss.playOneShot(1);
            }
            //连续三次未投中
            if (that.num_miss == 3) {
                console.log("游戏结束！")
                that.node_result.getChildByName("lab_gift").getComponent(LabelComponent).string = that.num_score + "";
                that.node_result.active = true;
            }
        })
    }
    //投礼物按钮回调
    btn_call_throw(event) {
        if (event.type == "touch-end") {
            //隐藏提示动画
            this.game_canvas.getChildByName("ani_tip").active = false;
            //创建初始礼物
            this.gift_index = Math.floor(Math.random() * 3);
            let gift = this.create_gift(this.gift_index);

            gift.setPosition(this.node_role.getPosition());
            //开启物理特性
            gift.getComponent(RigidBodyComponent).useGravity = true;
        }
    }
    update(deltaTime: number) {

    }

    /**
     * @description: 创建礼物
     * @param {*} type 礼物类型
     */
    create_gift(type) {
        let gift = instantiate(this.prefab_gift);
        gift.parent = this.node;
        gift.children[type].active = true;
        return gift;
    }

    //按钮回调
    btn_click(event, data) {
        switch (data) {
            case 'close_share':
                this.node_share.active = false;
                break;
            case 'stocking1':
            case 'stocking2':
            case 'stocking3':
                var show_index = Math.floor(Math.random() * 5);
                this.show_reward(show_index);
                break;
            case 'go':      //知道了按钮
                this.ani_start.resume();
                this.node_kv.getChildByName("btn_go").active = false;
                let ani_kv = this.node_kv.getComponent(AnimationComponent);
                //播放完动画执行
                ani_kv.on(AnimationComponent.EventType.FINISHED, function () {
                    // this.node_tip.active = true;
                    this.node_kv.active = false;
                    //开始移动
                    tween(this.node_role)
                    .to(60, { position: this.node_dott.getPosition() })
                    .start()
                    
                    //开启倒计时
                    var time = 60;
                    this.schedule(function () {
                        this.lab_time.string = time + "s";
                        this.progress_time.progress = time / 60;
                        time--;
                        if (time <= 0) {
                            this.node_result.getChildByName("lab_gift").getComponent(LabelComponent).string = this.num_score + "";
                            this.node_result.active = true;
                        }
                    }, 1, 60);

                }, this)
                ani_kv.play();
                break;
            case 'start':       //GO按钮
                this.ani_start.play();
                this.node_kv.getChildByName("btn_start").getComponent(ButtonComponent).interactable = false;
                break;
            case 'close_loading':
                this.game_canvas.getChildByName('laoding_bg').active = false;
            default:
                break;
        }
    }
    //音乐按钮回调
    onBtnClickMusic(){
        if(this.music_bg.state == AudioClip.PlayingState.PLAYING){
            this.aniBtnMusic.stop();
            this.music_bg.pause();
        }else{
            this.aniBtnMusic.play();
            this.music_bg.play();
            this.music_bg.setLoop(true);
        }
    }
    /**
     * @description: 显示源生h5保存页
     * @param {*} index 随机显示结果页
     */
    show_reward(index) {

    }
}
