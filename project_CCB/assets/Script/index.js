cc.Class({
    extends: cc.Component,

    properties: {
        music_bg: {                                         //背景音乐
            default: null,
            type: cc.AudioClip,
        },
        sound_click: {                                      //点击音效
            default: null,
            type: cc.AudioClip,
        },
        scroll_view: cc.ScrollView,          //滚动视图
        node_scroll: cc.Node,                //滚动节点
        ani_main: cc.Animation,
        toggle_arr: {                                       //选项集合
            default: [],
            type: [cc.ToggleContainer]
        },
        node_first: cc.Node,                //首页节点
        node_body: cc.Node,                //主题节点
        //第一题
        spr_brackets_left: cc.Sprite,              //左括号
        spr_brackets_right: cc.Sprite,              //右括号

        spine_q_1: {                                        //第二题
            default: [],
            type: [sp.Skeleton]
        },
        spine_q_2: {                                        //第三题
            default: [],
            type: [sp.Skeleton]
        },
        spine_q_3: {                                        //第四题
            default: [],
            type: [cc.Animation]
        },
        spine_q_5: {                                        //第六题
            default: [],
            type: [sp.Skeleton]
        },
        //结尾页:
        //未答题提示
        node_check_arr: {
            default: [],
            type: cc.Node
        },
        editbox_name: cc.EditBox,     //名字输入框
        node_no_name: cc.Node,        //没有名字
        node_long_name: cc.Node,      //名字过长
        node_no_sex: cc.Node,         //没有性别
        spine_end: {                  //性别动画
            default: [],
            type: [sp.Skeleton]
        },
        //小诗页
        node_poem: cc.Node,           //小诗页节点
        lab_name: cc.Label,           //标题名字
        lab_date: cc.Label,           //日期
        lab_poem: {                   //小诗
            default: [],
            type: [cc.Label]
        },
    },

    // use this for initialization
    onLoad: function () {
        var self = this;
        //滚动监听
        this.node_scroll.on("scrolling", self.fun_scrolling, self);
        this.node_scroll.on("scroll-ended", self.fun_scrollended, self);

        //首页节点大小
        this.node_first.height = cc.winSize.height;
        this.node_body.setPosition(this.node_body.x, this.node_body.y - (this.node_first.height - 1203));
        //滚动content大小
        this.node_scroll.getChildByName("view").getChildByName("content").height = 11785 + (this.node_first.height - 1203);

        //选择答案记录 默认为-1 0-3对应A-D
        this.choose_result = [-1, -1, -1, -1, -1, -1];
        //性别选择记录
        this.choose_sex = -1;
        //第四题当前动画状态
        this.state_choose_4 = null;
    },
    start() {
        this.animState = this.ani_main.play();
        this.animState.speed = 0;
        //播放背景音乐
        cc.audioEngine.playMusic(this.music_bg, true);
    },
    //正在滚动回调
    fun_scrolling() {
        //当前应播放到动画时间
        var currentTime = this.scroll_view.getScrollOffset().y / this.scroll_view.getMaxScrollOffset().y * 15;
        //设置动画播放到当前时间
        this.ani_main.setCurrentTime(currentTime);
        //滚动期间禁止选择
        for (let j = 0; j < this.toggle_arr.length; j++) {
            for (let i = 0; i < this.toggle_arr[j].toggleItems.length; i++) {
                const element = this.toggle_arr[j].toggleItems[i];
                element.interactable = false;
            }
        }
    },
    //停止滚动回调
    fun_scrollended() {
        // this.spine_page_1.timeScale = 0;
        //滚动结束 可以选择
        for (let j = 0; j < this.toggle_arr.length; j++) {
            for (let i = 0; i < this.toggle_arr[j].toggleItems.length; i++) {
                const element = this.toggle_arr[j].toggleItems[i];
                element.interactable = true;
            }
        }
    },
    //播放点击音效
    play_click_sound() {
        cc.audioEngine.playEffect(this.sound_click, false);
    },
    //点击选项回调
    onClickToggle(event, data) {
        console.log("data", data);
        //播放点击音效
        this.play_click_sound();
        //判断点击第几题    0：第一题 1：第二题  ...
        var keyData = Math.floor(Number(data) / 10);
        //隐藏未答提示
        this.node_check_arr[keyData].active = false;
        //0-3 对应 A-D
        var keyChoose = Number(data) % 10;
        //记录选择
        this.choose_result[keyData] = keyChoose;
        switch (keyData) {
            case 0:
                this.fun_choose_call_0(keyChoose);
                break;
            case 1:
                this.fun_choose_call_1(keyChoose);
                break;
            case 2:
                this.fun_choose_call_2(keyChoose);
                break;
            case 3:
                this.fun_choose_call_3(keyChoose);
                break;
            case 4:
                this.fun_choose_call_4(keyChoose);
                break;
            case 5:
                this.fun_choose_call_5(keyChoose);
                break;

            default:
                break;
        }
    },
    //第一题选项回调
    fun_choose_call_0(keyChoose) {
        var nodeChoose = this.toggle_arr[0].toggleItems[keyChoose].node;
        //播放大括号动画
        if (this.spr_brackets_left.node.active) {       //非第一次选择
            cc.tween(this.spr_brackets_left.node)
                .to(0.3, { position: cc.v2(nodeChoose.position.x - 20, nodeChoose.position.y) })
                .start();
            cc.tween(this.spr_brackets_right.node)
                .to(0.3, { position: cc.v2(nodeChoose.position.x + nodeChoose.width + 20, nodeChoose.position.y) })
                .start();
        } else {                                        //第一次选择
            this.spr_brackets_left.node.setPosition(cc.v2(nodeChoose.position.x - 20, nodeChoose.position.y));
            this.spr_brackets_right.node.setPosition(cc.v2(nodeChoose.position.x + nodeChoose.width + 20, nodeChoose.position.y));
            this.spr_brackets_left.node.active = true;
            this.spr_brackets_right.node.active = true;
            cc.tween(this.spr_brackets_left.node)
                .to(0.3, { opacity: 255 })
                .start();
            cc.tween(this.spr_brackets_right.node)
                .to(0.3, { opacity: 255 })
                .start();
        }
        // //显示选项对应动画
        // for (let i = 0; i < this.spine_q_0.length; i++) {
        //     this.spine_q_0[i].node.active = false;
        // }
        // this.spine_q_0[keyChoose].node.active = true;
    },
    //第二题选项回调
    fun_choose_call_1(keyChoose) {
        //显示选项对应动画
        for (let i = 0; i < this.spine_q_1.length; i++) {
            this.spine_q_1[i].timeScale = 0;
        }
        this.spine_q_1[keyChoose].timeScale = 1;
    },
    //第三题选项回调
    fun_choose_call_2(keyChoose) {
        //显示选项对应动画
        switch (keyChoose) {
            case 0:
                this.spine_q_2[keyChoose].setAnimation(0, "animation", false);
                break;
            case 1:
                //this.spine_q_2[keyChoose].setAnimation(0,"animation7",false);
                break;
            case 2:
                this.spine_q_2[keyChoose].setAnimation(0, "animation5", false);
                break;
            case 3:
                this.spine_q_2[keyChoose].setAnimation(0, "animation6", false);
                break;
            default:
                break;
        }
    },
    //第四题选项回调
    fun_choose_call_3(keyChoose) {
        if (this.state_choose_4) {
            this.state_choose_4.stop();
        }
        this.state_choose_4 = this.spine_q_3[keyChoose].play();
    },
    //第五题选项回调
    fun_choose_call_4(keyChoose) {

    },
    //第六题选项回调
    fun_choose_call_5(keyChoose) {
        for (let i = 0; i < this.spine_q_5.length; i++) {
            this.spine_q_5[i].clearTracks();
            this.spine_q_5[i].setToSetupPose();
        }
        //显示选项对应动画
        switch (keyChoose) {
            case 0:
                this.last_spine = this.spine_q_5[keyChoose].setAnimation(0, "animation2", false);
                break;
            case 1:
                this.last_spine = this.spine_q_5[keyChoose].setAnimation(0, "animation3", false);
                break;
            case 2:
                this.last_spine = this.spine_q_5[keyChoose].setAnimation(0, "animation", false);
                break;
            case 3:
                this.last_spine = this.spine_q_5[keyChoose].setAnimation(0, "animation4", false);
                break;
            default:
                break;
        }
    },
    //性别选择回调
    fun_btn_sex(event, data) {
        //播放点击音效
        this.play_click_sound();
        //记录性别选择
        this.choose_sex = Number(data);
        //动画复位
        for (let i = 0; i < this.spine_end.length; i++) {
            this.spine_end[i].clearTracks();
            this.spine_end[i].setToSetupPose();
        }
        //播放选择的性别动画
        this.spine_end[Number(data) - 1].setAnimation(0, "animation" + (Number(data) + 1), false);
    },
    //生成小诗按钮回调
    fun_btn_create() {
        //是否有未选择题目
        var bool_uncheck = false;
        var first_uncheck = -1;
        for (let i = 0; i < this.choose_result.length; i++) {
            const element = this.choose_result[i];
            if (element == -1) {
                this.node_check_arr[i].active = true;
                bool_uncheck = true;
                if (first_uncheck == -1) {
                    first_uncheck = i;
                }
            }
        }
        //名字检查
        var str_name = this.editbox_name.textLabel;
        this.node_no_name.active = false;
        this.node_long_name.active = false;
        if (str_name.string == "") {          //名字为空
            this.node_no_name.active = true;
            bool_uncheck = true;
        } else if (str_name.string.length > 6) { //名字超过6个字
            this.node_long_name.active = true;
            bool_uncheck = true;
        }
        //性别检查
        this.node_no_sex.active = false;
        if (this.choose_sex < 0) {
            bool_uncheck = true;
            this.node_no_sex.active = true;
        }
        //有未选择项目
        if (bool_uncheck) {
            if (first_uncheck != -1) {
                var offsety = first_uncheck < 2 ? 333 : 666;
                var percent = Math.abs(this.node_body.getChildByName("question_" + first_uncheck).y - offsety) / this.scroll_view.getMaxScrollOffset().y;
                this.scroll_view.scrollToOffset(cc.v2(0, Math.abs(this.node_body.getChildByName("question_" + first_uncheck).y - offsety)), 0.3);
                this.ani_main.setCurrentTime(percent * 15);
            }
        } else {
            //生成小诗
            this.create_poem(str_name.string, this.choose_sex);
        }
    },
    create_poem(name, sex) {
        //诗集
        var str_poem = [[[["XXXXXX是一个百依百顺的孩子 / ", "但ta只顺从自己，至死不渝 / "], ["ta一身温和地走进这个世界 / ", "骨子里流淌着独立和清醒 / "], ["生活企图将ta掩埋 / ", "却忘了ta是一颗种子 / ", "终将撕裂黑暗，回归盛大灿烂"]], [["XXXXXX一身温和地走进这个世界 / ", "骨子里流淌着独立和清醒 / "], ["ta知道如何与世界和平相处 / ", "但ta不愿与荒诞、无趣为伍 / "], ["生活企图将ta掩埋 / ", "却忘了ta是一颗种子 / ", "终将撕裂黑暗，回归盛大灿烂"]], [["生活企图将XXXXXX掩埋 / ", "却忘了ta是一颗种子 / ", "蕴藏撕裂黑暗的力量 / "], ["相比被动接受人生的安排 / ", "ta更喜欢做自己命运的主宰 / "], ["ta懂得如何与世界和平相处 / ", "但ta不愿与荒诞、无趣为伍"]]], [[["XXXXXX，好有趣的一个人 / ", "仅仅是和ta一同仰望天空 / ", "司空见惯的风景也会变得与众不同 / "], ["那些令人叹服的创意 / ", "只不过，是散落在ta脑海中的日常 / "], ["真怀疑ta是一个外星人啊 / ", "可惜，我没有证据"]], [["世界上最复杂的路 / ", "是XXXXXX的脑回路 / "], ["那些令人折服的创意 / ", "只不过，是散落在ta脑海中的日常 / "], ["真怀疑ta是一个外星人啊 / ", "可惜，我没有证据"]], [["那些令人叹服的创意 / ", "只不过，是散落在ta脑海中的日常 / "], ["无人知道ta的脑洞有多深 / ", "朝着它们大喊一声，绝不会有回音 / "], ["超越普通人的创造力 / ", "常常令人忘记 / ", "XXXXXX也是一个地球人"]]], [[["XXXXXX的心 / ", "阳光充盈，温暖细腻 / ", "里面一定是住着一个春天吧 / "], ["即便了解了世界的真面目 / ", "也不妨碍ta对世界储存十吨热爱 / "], ["生活，才不会 / ", "对ta这样的小可爱动手呢！"]], [["XXXXXX最可爱了 / ", "我说时来不及思索 / ", "但思索之后，还是这么说 / "], ["ta笑起来，像是久违的好天气 / ", "向你跑来时，风都会变暖 / "], ["即便了解了世界的真面目 / ", "也不妨碍ta对世界储存十吨热爱"]], [["我寻了好久的春天 / ", "XXXXXX一笑就出现了 / "], ["ta是一种稀缺的美好 / ", "知足而上进，温柔且坚定 / "], ["XXXXXX没有什么不合理之处 / ", "如果实在有的话 / ", "那就是ta，太过可爱！"]]], [[["有些人能感受雨 / ", "而其他人则只是被淋湿 / ", "XXXXXX，注定是前者 / "], ["ta能更强烈地感知这个世界 / ", "感受灵魂细微的颤动 / "], ["这种从骨子里散发的灵气 / ", "是属于ta，独有的气息"]], [["有人见星辰 / ", "有人见尘埃 / ", "XXXXXX，注定是前者 / "], ["ta能更强烈地感知这个世界 / ", "感受灵魂细微的颤动 / "], ["这种从骨子里散发的灵气 / ", "是属于ta，独有的气息"]], [["XXXXXX的心啊，隐秘而丰盛 / ", "常常让试图解读它的人，无功而返 / "], ["ta能更强烈地感知这个世界 / ", "感受灵魂细微的颤动 / "], ["有些人能感受雨 / ", "而有些人只会被淋湿 / ", "ta，注定是前者"]]], [[["XXXXXX这个人啊 / ", "生活若是敢绊倒ta / ", "ta就敢趁生活不注意，反手给它一枪 / "], ["挨过现实的铁锤 / ", "但内心，依旧柔软 / "], ["ta与世界交手那么多次 / ", "如今，仍是兴致盎然"]], [["XXXXXX / ", "挨过现实的铁锤 / ", "但内心依旧柔软 / "], ["与生活交手那么多次 / ", "ta仍是兴致盎然 / "], ["即便了解了世界的真面目 / ", "也不妨碍ta对世界储存十吨热爱"]], [["XXXXXX这个人啊 / ", "像苏打小饼干一样，干干脆脆 / "], ["生活敢绊倒ta / ", "ta就敢趁生活不注意 / ", "反手给它一枪 / "], ["与世界交手那么多次 / ", "如今，依旧兴致盎然"]]], [[["没有人可以束缚XXXXXX / ", "这个逆着人潮，自成宇宙的少年 / "], ["自由，早已融入ta的血液 / ", "ta的灵魂里，有着风的模样 / "], ["ta从不会追风，而是要成为风 / ", "独行穿过旷野 / ", "去领取自己的未知"]], [["XXXXXX / ", "活出了很多人向往却无法成为的模样 / ", "而ta自己却从未发觉 / "], ["ta从不会追风，而是要成为风 / ", "这不是特立独行而是命中注定 / "], ["ta以自由为方向 / ", "独行穿过旷野，去领取自己的未知"]], [["自由，早已融入ta的血液 / ", "ta逆向人潮和喧嚣，自成宇宙 / "], ["ta从不会追风，而是要成为风 / ", "独行穿过旷野，领取自己的未知 / "], ["XXXXXX / ", "活出了很多人向往却无法成为的模样 / ", "而ta自己却从未发觉"]]], [[["XXXXXX是行走在人间的月亮 / ", "带着一种皎洁温和的光辉 / "], ["ta与生俱来的怡人温度 / ", "让万物经过，都变得柔软 / "], ["假如生活偏离ta前进的轨迹 / ", "ta不声不响，温柔修正 / ", "让世界重新变成ta喜欢的模样"]], [["XXXXXX / ", "一身温和地踏进这个世界 / "], ["世俗的噪音 / ", "无法入侵ta的精神角落 / ", "一颗心，始终安静丰盛 / "], ["ta是无穷宝藏，却从不声张 / ", "遵循心中的轨迹，面朝太阳生长"]], [["复杂世界中，遇见XXXXXX真好 / ", "万物经过ta，都变得简单清澈 / "], ["ta是行走在人间的月亮 / ", "灵魂皎洁而明亮 / "], ["世俗的噪音 / ", "无法入侵ta的精神角落 / ", "ta的一颗心，始终安静丰盛"]]], [[["XXXXXX / ", "是超越世俗的存在 / ", "是神对美的准确定义 / "], ["ta是银河系稀有族群 / ", "灵魂成分复杂 / "], ["时刻闪闪发光的ta / ", "是世界送给人间的礼物"]], [["XXXXXX的灵魂 / ", "以美为养料 / ", "比今天的ta更耀眼的，只有明天的ta / "], ["ta时常放任思想在宇宙漂流 / ", "将奇妙想法带回地球 / "], ["时刻闪闪发光的ta / ", "是世界送给人间的礼物"]], [["XXXXXX是银河系稀有族群 / ", "是超越世俗的存在 / "], ["ta的灵魂，以美为养料 / ", "在人群中，显得格外耀眼 / "], ["当世界无可挽回地走向庸俗 / ", "ta依旧浪漫自由 / ", "绝不做，世俗的附庸"]]], [[["XXXXXX的心，简单纯粹 / ", "是珍贵的人生限定 / "], ["ta从不按照生活预设的方向进化 / ", "是眼底有光，不可战胜的少年 / "], ["成为不动声色的大人 / ", "是人间常态 / ", "但，ta是一个例外"]], [["ta从不按照生活预设的方向进化 / ", "是眼底有光，不可战胜的少年 / "], ["ta握紧人生的剧本 / ", "在世间野蛮生长 / "], ["成为不动声色的大人 / ", "是人间常态 / ", "但，XXXXXX是一个例外"]], [["XXXXXX是一个百依百顺的孩子 / ", "但ta只顺从自己，至死不渝 / "], ["从不按照生活预设的方向进化 / ", "ta的灵魂里，有着风的模样 / "], ["成为不动声色的大人 / ", "是人间常态 / ", "但，ta是一个例外"]]], [[["XXXXXX上了生活这艘贼船 / ", "就化身最快乐的海盗 / "], ["ta是自在如风的少年 / ", "也是好奇心旺盛的小朋友 / "], ["ta在热爱的世界里奔跑 / ", "跌倒也不过是中场休息 / ", "拍落尘土，就去下一个地方燥"]], [["世界奇奇怪怪 / ", "XXXXXX可可爱爱 / "], ["仅仅是从ta身旁经过 / ", "都会沾染一身的快乐 / "], ["面对ta，生活也很无奈 / ", "交手那么多次 / ", "还是无法把ta变成不动声色的大人"]], [["生活，才不会 / ", "对XXXXXX这样的小可爱动手呢 / "], ["ta在热爱的世界里奔跑 / ", "跌倒也不过是中场休息 / ", "拍落尘土，就去下一个地方燥 / "], ["仅仅是从ta身旁经过 / ", "也会沾染一身的快乐"]]]];
        //随机选择小诗
        var choose_poem = str_poem[parseInt(Math.random() * str_poem.length)][parseInt(Math.random() * 3)];
        var arr_poem = [];
        for (let i = 0; i < choose_poem.length; i++) {
            for (let j = 0; j < choose_poem[i].length; j++) {
                const element = choose_poem[i][j];
                //替换xxxxxx和ta
                element = element.replace("XXXXXX", name);
                element = element.replace("ta", sex == 1 ? "他" : "她");

                arr_poem.push(element);

            }
        }
        //姓名
        this.lab_name.string = name;
        this.lab_name.node.getParent().width = this.lab_name.string.length * this.lab_name.fontSize + 20;
        var node_de = this.lab_name.node.getParent().getParent().getChildByName("result_lab_de");
        node_de.setPosition(node_de.x + this.lab_name.node.getParent().width, node_de.y);


        //日期
        var date = new Date();
        this.lab_date.string = date.getFullYear() + "." + (date.getMonth() + 1) + "." + date.getDate();
        //小诗
        for (var i = 0; i < this.lab_poem.length; i++) {
            if (arr_poem[i]) {
                this.lab_poem[i].string = arr_poem[i];
            }
        }
        //this.node_poem.active = true;
        var self = this;
        this.node_poem.getChildByName("node_bg").getComponent(cc.Animation).on("finished", function () {
            self.initRender();
        })
        this.node_poem.getChildByName("node_bg").getComponent(cc.Animation).play();
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
        //this.node.setPosition(origin);                // 截图矩形的中心点
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
        img.style.position = "absolute";
        img.style.top = 0;
        img.style.left = 0;
        img.style.opacity = 0;

        let divGame = document.getElementById("Cocos2dGameContainer");
        divGame.appendChild(img);
    }
});
