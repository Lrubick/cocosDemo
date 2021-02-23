
cc.Class({
    extends: cc.Component,

    properties: {
        node_kv: cc.Node,                //主页节点
        node_rule: cc.Node,                //规则节点
        node_end: cc.Node,                //结束节点
        node_game: cc.Node,                //游戏界面节点
        node_name: cc.Node,                //输入昵称节点
        node_result: cc.Node,                //结果页节点
        lab_result_name: cc.Label,               //结果页名字节拍
        spr_code: cc.Sprite,              //分享页二维码
        lab_name: cc.Label,               //昵称
        lab_time: cc.Label,               //倒计时
        progress_time: cc.ProgressBar,         //倒计时进度条
        btn_letf: cc.Button,              //左按钮
        btn_right: cc.Button,              //右按钮
        btn_begin: cc.Button,              //开始录制按钮
        btn_end: cc.Button,              //结束录制按钮
        btn_replay: cc.Button,              //试听节拍按钮
        ani_light_left: cc.Animation,           //左车灯
        ani_light_right: cc.Animation,           //右车灯

        music_bg: {                                 //左音效
            default: null,
            type: cc.AudioClip,
        },
        effect_left: {                              //左音效
            default: [],
            type: [cc.AudioClip],
        },
        effect_right: {                             //右音效
            default: [],
            type: [cc.AudioClip],
        },
    },

    // use this for initialization
    onLoad: function () {
        //获取链接openid
        this.str_openid = this.getUrlParam("openid");
        //openid存在，显示试听界面
        if (this.str_openid) {
            this.node_result.active = true;
            this.node_result.getChildByName("node_2").active = true;
            this.node_result.getChildByName("node_3").active = false;
        }
        //数据初始化
        this.init_data();
        //ID动画
        this.ani_ID = this.node_end.getChildByName("end_bg").getChildByName("spr_id_0").getComponent(cc.Animation);
        this.ani_bg = this.node_end.getChildByName("end_bg").getChildByName("end_ani").getComponent(cc.Animation);
        var self = this;
        LightMobileCall.mobileCall(124, null, function (res) { self.mid = res.mid_v2 || res.mid; })
        //酷狗端
        if (LightMobileCall.isInClient()) {
            //下载二维码
            cc.loader.load({ url: "https://api.qrserver.com/v1/create-qr-code/?size=176x176&data=http://dyn.easy-all.cn/Saicmusic/Saicmusic/index?openid=" + this.mid, type: 'png' }, (err, tex) => {
                this.spr_code.spriteFrame = new cc.SpriteFrame(tex);
            })
            //提前加载用户信息
            let param = {
                mid: this.mid
            }
            window.HttpHelper.httpPost("http://dyn.easy-all.cn/Saicmusic/SaicmusicStayinfoAjax/getKugouUserMusic", param, (res) => {
                console.log("下载", res);
                if (res != -1) {
                    //显示昵称
                    this.lab_result_name.string = res.userData[0].username + "  的来电节拍";
                    //显示标签
                    this.node_result.getChildByName("result_bg").getChildByName("node_flag_0").getChildByName("result_flag_" + res.userData[0].flag0).active = true;
                    this.node_result.getChildByName("result_bg").getChildByName("node_flag_1").getChildByName("result_flag_" + res.userData[0].flag1).active = true;
                    //预存节奏
                    this.effect_arr = Object.values(JSON.parse(res.userData[0].usermusic))[0];
                    // this.btn_replay_effect();
                }
            })
        } else if (this.getIsWxClient()) {     //微信端
            //下载二维码
            cc.loader.load({ url: "https://api.qrserver.com/v1/create-qr-code/?size=176x176&data=http://dyn.easy-all.cn/Saicmusic/Saicmusic/index?openid=" + g_myopenid, type: 'png' }, (err, tex) => {
                this.spr_code.spriteFrame = new cc.SpriteFrame(tex);
            })
            //提前加载用户信息
            let param = {
                openid: this.str_openid
            }
            window.HttpHelper.httpPost("http://dyn.easy-all.cn/Saicmusic/SaicmusicStayinfoAjax/getUserMusic", param, (res) => {
                console.log("下载", res);
                if (res != -1) {
                    //显示昵称
                    this.lab_result_name.string = res.userData[0].username + "  的来电节拍";
                    //显示标签
                    this.node_result.getChildByName("result_bg").getChildByName("node_flag_0").getChildByName("result_flag_" + res.userData[0].flag1).active = true;
                    this.node_result.getChildByName("result_bg").getChildByName("node_flag_1").getChildByName("result_flag_" + res.userData[0].flag2).active = true;
                    //预存节奏
                    this.effect_arr = Object.values(JSON.parse(res.userData[0].usermusic))[0];
                    // this.btn_replay_effect();
                }
            })
        } else {      //拉起酷狗app
            openKugouApp("303", 9, 0, {
                url: window.location.href,
                title: "驾驭节奏 自己掌控"
            })
        }
    },
    //获取链接中的openid
    getUrlParam: function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
        var r = window.location.search.substr(1).match(reg);  //匹配目标参数
        if (r != null) return unescape(r[2]); return null; //返回参数值
    },
    //判断是否是微信环境
    getIsWxClient() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        }
        return false;
    },
    start() {
        //播放背景音乐
        cc.audioEngine.playMusic(this.music_bg, true);
        cc.audioEngine.setMusicVolume(0.5);
    },
    //初始化数据
    init_data() {
        this.effect_arr = [];
        this.current_target = 0;
        this.num_touch_left = 0;
        this.num_touch_right = 0;
    },
    //开始制作回调
    btn_next() {
        this.node_kv.active = false;
    },
    //关闭规则层
    btn_close_rule() {
        this.node_rule.active = false;
    },
    //左右按钮回调
    onBtnClick(event, data) {
        //切换logo颜色
        for (let i = 0; i < 3; i++) {
            this.node_game.getChildByName("background").getChildByName("spr_id_" + i).active = false;
        }
        this.node_game.getChildByName("background").getChildByName("spr_id_" + Math.floor(Math.random() * 3)).active = true;
        // var num_rand = Math.floor(Math.random()*2);
        if (data == "left") {
            //播左动画
            // this.ani_left[num_rand].play();
            this.ani_light_left.play();
            //点击右次数归0
            this.num_touch_right = 0;
            //连续点击左次数
            this.num_touch_left++;
            if (this.num_touch_left == 6) {
                this.num_touch_left = 1;
            }
            //计数为1-5   
            this.current_target = this.num_touch_left % 6 + Math.floor(this.num_touch_left / 6);
            cc.audioEngine.playEffect(this.effect_left[this.current_target - 1], false);
        } else {
            //播右动画
            // this.ani_right[num_rand].play();
            this.ani_light_right.play();
            //点击左次数归0
            this.num_touch_left = 0;
            //连续点击右次数
            this.num_touch_right++;
            if (this.num_touch_right == 6) {
                this.num_touch_right = 1;
            }
            //计数为6-10   
            this.current_target = (this.num_touch_right + 5) % 11;
            cc.audioEngine.playEffect(this.effect_right[this.current_target - 6], false);
        }
    },
    //记录数据
    btn_record_point(event, data) {
        //按钮状态
        this.btn_begin.interactable = false;
        this.btn_end.interactable = true;
        //初始化数据
        this.init_data();
        //显示倒计时
        this.progress_time.node.active = true;
        //停止背景音乐
        cc.audioEngine.stopMusic(this.music_bg, true);
        //开启定时器
        this.schedule(() => {
            //记录数据
            this.effect_arr.push(this.current_target);
            //充值数据
            this.current_target = 0;
            //记录完成
            if (this.effect_arr.length == 1500) {
                this.btn_record_end();
                //按钮状态
                this.btn_begin.interactable = true;
                this.btn_end.interactable = false;
            }
            //倒计时
            this.lab_time.string = Math.ceil((1500 - this.effect_arr.length) / 100);
            this.progress_time.progress = (1500 - this.effect_arr.length) / 1500;
        }, 0.01, 1500)
    },
    //结束记录
    btn_record_end() {
        //清除定时器
        this.unscheduleAllCallbacks();
        //停止所有音效
        cc.audioEngine.stopAllEffects();
        // //停止背景音乐
        // cc.audioEngine.stopMusic();
        //播放背景音乐
        // cc.audioEngine.playMusic(this.music_bg,true);

        this.current_target = 0;
        this.progress_time.node.active = false;
        this.node_end.active = true;
        //按钮状态
        this.btn_begin.interactable = true;
        this.btn_end.interactable = false;
    },
    //回放
    btn_replay_effect() {
        console.log(this.effect_arr.length);
        //清除定时器
        this.unscheduleAllCallbacks();
        //清空计数
        this.current_target = 0;

        this.ani_ID.play();
        this.ani_bg.play();
        //按钮状态
        this.btn_replay.interactable = false;
        //播放背景音乐
        // cc.audioEngine.playMusic(this.music_bg,true);
        //开始回放
        this.schedule(() => {
            let temp = this.effect_arr[this.current_target];
            if (temp <= 5 && temp > 0) {
                cc.audioEngine.playEffect(this.effect_left[temp - 1], false);
            } else if (temp > 5) {
                cc.audioEngine.playEffect(this.effect_right[temp - 6], false);
            }
            this.current_target++;
            if (this.current_target == this.effect_arr.length) {
                //按钮状态
                this.btn_replay.interactable = true;
                this.ani_ID.stop();
                this.ani_bg.stop();
                // //停止背景音乐
                // cc.audioEngine.stopMusic();
                //播放背景音乐
                //cc.audioEngine.playMusic(this.music_bg,true);
            }
        }, 0.01, this.effect_arr.length)
    },
    //重新录制
    btn_retry() {
        this.num_touch_left = 0;
        this.num_touch_right = 0;
        this.node_end.active = false;
        this.unscheduleAllCallbacks();
        this.btn_replay.interactable = true;
        this.ani_ID.stop();
        this.ani_bg.stop();
        this.btn_record_point();
    },
    //上传
    btn_upload() {
        this.node_name.active = true;
    },
    //昵称界面提交
    btn_name_confirm() {
        if (this.lab_name.string.length == 0 || this.lab_name.string.length > 6) {
            return;
        }
        this.unscheduleAllCallbacks();
        var effect_arr = this.effect_arr;
        var str_name = this.lab_name.string;
        //显示结果页标签
        var index_bg = Math.floor(Math.random() * 5);
        var index_flag_1 = Math.floor(Math.random() * 8);
        var index_flag_2 = (index_flag_1 + Math.ceil(Math.random() * 7)) % 8;
        this.node_result.getChildByName("result_bg").getChildByName("result_bg_" + index_bg).active = true;
        this.node_result.getChildByName("result_bg").getChildByName("node_flag_0").getChildByName("result_flag_" + index_flag_1).active = true;
        this.node_result.getChildByName("result_bg").getChildByName("node_flag_1").getChildByName("result_flag_" + index_flag_2).active = true;
        //酷狗端内提交
        if (LightMobileCall.isInClient()) {
            let param = {
                mid: this.mid,
                data: {
                    effect_arr,
                    str_name,
                    flag0: index_flag_1,
                    flag1: index_flag_2
                }
            }
            window.HttpHelper.httpPost("http://dyn.easy-all.cn/Saicmusic/SaicmusicStayinfoAjax/setKugouUserMusic", param, (res) => {
                console.log("上传酷狗", res);
            })
        } else {      //微信内提交
            let param = {
                openid: g_myopenid,
                data: {
                    effect_arr,
                    str_name,
                    flag0: index_flag_1,
                    flag1: index_flag_2
                }
            }
            window.HttpHelper.httpPost("http://dyn.easy-all.cn/Saicmusic/SaicmusicStayinfoAjax/setUserMusic", param, (res) => {
                console.log("上传微信", res);
            })
        }
        //改成异步
        this.lab_result_name.string = str_name + "  的来电节拍";
        this.node_result.active = true;
        this.node_result.getChildByName("node_3").active = true;
        this.node_result.getChildByName("node_1").active = false;
        //开始截图
        this.initRender();
    },
    //昵称界面关闭
    btn_name_close() {
        this.node_name.active = false;
    },
    //-------------------结果界面------------------
    //还没玩够按钮回调
    btn_call_again() {
        //隐藏节点
        this.node_result.active = false;
        this.node_end.active = false;
        this.node_name.active = false;
        //this.btn_retry();
    },
    //更酷玩法按钮
    btn_call_more() {
        //跳到外部链接
        window.location.href = "https://id-uat.vw.com.cn/techcampaign";
    },
    //试听节拍
    btn_call_replay() {
        this.btn_replay_effect();
    },
    //我的节拍
    btn_call_mine() {
        for (let i = 0; i < 8; i++) {
            this.node_result.getChildByName("result_bg").getChildByName("node_flag_0").getChildByName("result_flag_" + i).active = false;
            this.node_result.getChildByName("result_bg").getChildByName("node_flag_1").getChildByName("result_flag_" + i).active = false;
        }
        //隐藏节点
        this.node_result.getChildByName("node_2").active = false;
        this.node_result.getChildByName("node_3").active = true;
        this.unscheduleAllCallbacks();
        this.node_result.active = false;
        this.node_end.active = false;
        this.node_name.active = false;
        cc.audioEngine.playMusic(this.music_bg);
        //清除试听界面状态
        this.ani_ID.stop();
        this.ani_bg.stop();
        //按钮状态
        this.btn_replay.interactable = true;
    },
    //关闭分享回调
    btn_call_close_share() {
        this.node_result.getChildByName("node_share").active = false;
    },
    // called every frame
    update: function (dt) {
    },
    //长按保存部分
    initRender() {
        // if(cc.sys.isBrowser)
        // {  
        let node = new cc.Node();
        node.parent = cc.director.getScene().getChildByName('Canvas');
        let camera = node.addComponent(cc.Camera);
        //设置相机参数

        camera.enabled = false; // 避免自动渲染
        // 截图的缩放比例       
        let zoom = 1;
        let width = cc.winSize.width;
        let height = cc.winSize.width * cc.view.getFrameSize().height / cc.view.getFrameSize().width;
        let size = cc.size(width, height);
        // 截图的中心点就是摄像机节点的位置   
        let origin = cc.v2(0, 0);

        camera.zoomRatio = zoom; // 设置缩放

        // 设置目标渲染纹理
        let texture = new cc.RenderTexture();
        texture.initWithSize(size.width, size.height);  // 截图矩形的尺寸
        //this.node.setPosition(origin);                  // 截图矩形的中心点
        camera.targetTexture = texture;

        // 缓存，备用
        this._camera = camera;
        this._texture = texture;

        //用于显示的sprite组件，如果要测试这个，需要添加sprite组件
        //this._sprite = this.getComponent(cc.Sprite);
        //}
        this.btn_image_knife();
    },

    btn_image_knife() {
        console.log('save');
        var self = this;
        // 执行一次 render，将所渲染的内容渲染到纹理上
        this._camera.render(undefined);
        //到这里，截图就已经完成了

        // 接下去，可以从 RenderTexture 中获取数据，进行深加工
        let texture = this._texture;
        let data = texture.readPixels();

        let width = texture.width;
        let height = texture.height;

        // 接下来就可以对这些数据进行操作了       
        // let canvas:HTMLCanvasElement;
        let canvas = document.createElement('canvas');
        // document.body.appendChild(btn); // 没有添加到body上，不用担心内存泄漏

        let ctx = canvas.getContext('2d');
        canvas.width = width;
        canvas.height = height;

        // 1维数组转2维
        // 同时做个上下翻转
        let rowBytes = width * 4;
        for (let row = 0; row < height; row++) {
            let srow = height - 1 - row;
            let imageData = ctx.createImageData(width, 1);
            let start = srow * width * 4;
            for (let i = 0; i < rowBytes; i++) {
                imageData.data[i] = data[start + i];
            }

            ctx.putImageData(imageData, 0, row);
        }

        let dataUrl = canvas.toDataURL("image/jpeg");

        let img = document.createElement("img");
        //img.src = this.asset.nativeUrl; //图片路径
        img.src = dataUrl; //截图数据
        img.id = "capture";
        img.alt = "capture";
        img.width = width;
        img.height = height;
        img.style.position = "fixed";
        img.style.top = "50%";
        img.style.left = "50%";
        img.style.opacity = 0;
        img.style.transform = "translate(-50%,-50%)";
        img.onclick = function fun_call() {
            self.node_result.getChildByName("node_share").active = false;
        }

        //创建按钮div
        let div_btn = document.createElement("div");
        div_btn.id = "div_btn";
        div_btn.style.position = "fixed";
        div_btn.style.top = "50%";
        div_btn.style.left = 0;
        div_btn.style.width = "100%";
        div_btn.style.height = "584px";

        div_btn.appendChild(img);


        //加三个按钮
        let btn_again = document.createElement("div");
        btn_again.id = "btn_again";
        btn_again.style.width = "278px";
        btn_again.style.height = "78px";
        btn_again.style.position = "absolute";
        btn_again.style.bottom = "151px";
        btn_again.style.left = "78px";
        div_btn.appendChild(btn_again);
        //还没玩够
        btn_again.onclick = function func_again() {
            //删除当前截图div
            div_btn.remove();
            self.node_result.getChildByName("node_3").active = true;
            self.node_result.getChildByName("node_1").active = false;
            // self.btn_call_again();
            self.node_result.active = false;
            self.node_end.active = false;
            self.node_name.active = false;
            for (let i = 0; i < 5; i++) {
                self.node_result.getChildByName("result_bg").getChildByName("result_bg_" + i).active = false;
            }
            for (let i = 0; i < 8; i++) {
                self.node_result.getChildByName("result_bg").getChildByName("node_flag_0").getChildByName("result_flag_" + i).active = false;
                self.node_result.getChildByName("result_bg").getChildByName("node_flag_1").getChildByName("result_flag_" + i).active = false;
            }
        }
        //更酷玩法
        let btn_more = document.createElement("div");
        btn_more.id = "btn_more";
        btn_more.style.width = "278px";
        btn_more.style.height = "78px";
        btn_more.style.position = "absolute";
        btn_more.style.bottom = "151px";
        btn_more.style.left = "400px";
        div_btn.appendChild(btn_more);
        btn_more.onclick = function func_more() {
            self.btn_call_more();
        }
        //分享按钮
        let btn_share = document.createElement("div");
        btn_share.id = "btn_share";
        btn_share.style.width = "80px";
        btn_share.style.height = "80px";
        btn_share.style.position = "absolute";
        btn_share.style.top = "-442px";
        btn_share.style.right = "106px";
        div_btn.appendChild(btn_share);
        btn_share.onclick = function func_share() {
            if (LightMobileCall.isInClient()) {
                share.shareAll();
            } else {
                e.node_result.getChildByName("node_share").active = !0;
            }
        }

        let divGame = document.getElementById("Cocos2dGameContainer");
        divGame.appendChild(div_btn);

        //截图完成后隐藏二维码
        this.node_result.getChildByName("node_3").active = false;
        this.node_result.getChildByName("node_1").active = true;
    }
});
