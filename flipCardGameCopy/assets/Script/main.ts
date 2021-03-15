const { ccclass, property } = cc._decorator;



import MyPlistCache from "./Common/MyPlistCache";
import Toast from "./Toast";


@ccclass
export default class main extends cc.Component {

    @property(cc.Label)
    level: cc.Label = null;

    @property(cc.Node)
    kv: cc.Node = null;

    @property(cc.Node)
    poker: cc.Node = null;

    @property(cc.Node)
    win: cc.Node = null;

    @property(cc.Node)
    lose: cc.Node = null;

    @property(cc.Node)
    liuZi: cc.Node = null;

    @property({ type: cc.Node, tooltip: "奖品发放完成页面" })
    finished: cc.Node = null;

    @property([cc.Node])
    senceBg: cc.Node[] = [];

    @property(Toast)
    public toast: Toast = null;


    //节点target容器
    protected clickNodeArr: cc.Node[] = [];


    //开始牌张数
    protected M_POKER_NUM: number = 2;

    //icon容器
    protected M_ICON_LIST: Array<Array<any>> = new Array<Array<any>>();


    //节点target容器
    protected TARLIST: any = [];

    //已点击的牌
    protected CLICKPOKERLIST: any = [];

    //关卡
    protected M_LEVEL: number = 1;


    // 每局增加时间
    protected M_TIME: number = 1500;


    //每个icon的大小
    protected M_ICON_SIZE = 165;

    protected pokerPlist: cc.SpriteAtlas = null;

    // 行数
    protected lineNum: number = 2;

    // 列数
    protected rowNum: number = 1;

    //失败次数
    protected opportunity: number = 3;
    @property(cc.Node)
    protected opportunityText: cc.Node = null;
    @property(cc.Node)
    protected opportunityLabel: cc.Node = null;

    protected isGetted: boolean = false;



    onLoad() {

    }

    start() {

        // const self = this;

        // this.M_LEVEL = 5;


        this.initLoadingResources(() => {
            // self.createIcon(null);
            // self.showLevelView();
        });



    }



    onBtnClick(event: cc.Event.EventTouch, value: string) {
        const self = this;
        switch (value) {
            case "begin":
                event.target.getComponent(cc.Button).interactable = false;
                // this.M_LEVEL = 5;
                this.kv.runAction(cc.sequence(cc.scaleTo(0.5, 0), cc.callFunc(() => {
                    self.kv.active = false;

                })))

                this.createIcon(null);
                this.showLevelView();



                setCreatedInfo((data) => {
                    if (data.code === 10200) {
                        self.isGetted = data.created_type;
                    }
                });



                break;

            case "again":
                history.go(0);
                break;

            case "getResult":



                /*
                 * 用户领奖行为
                 *
                 * @return awards_id 领奖的奖品id 1:咖啡杯 5:奖品已发完
                 * 10200
                 * 10400 弹出msg
                 */
                // 立即领取按钮时
                // function getAwards() {
                //     $.ajax({
                //         type: "POST",
                //         url: "{$Think.config.WEB_URL}{$Think.config.SATYINFO_AJAX_URL}/getAwards",
                //         data: {

                //         },
                //         dataType: "json",
                //         success: function (data) {
                //             console.log(data);
                //             return data;
                //         }
                //     });



                getAwards((data) => {
                    if (data.code === 10200) {
                        // 留资
                        self.liuZi.active = true;
                        self.win.active = false;
                        self.senceBg[0].parent.active = false;
                        self.level.node.active = false;

                    } else if (data.code === 10400) {
                        // this.toast.show(data.msg);
                        self.finished.active = true;
                    }
                });






                break;

            case "close":
                // 关闭
                history.go(0);
                break;

            case "sure":

                event.target.getComponent(cc.Button).interactable = false;

                let teleNum = this.liuZi.getChildByName("phone").getComponent(cc.EditBox).string;
                let sex = this.liuZi.getChildByName("sex").getComponent(cc.EditBox).string;
                let name = this.liuZi.getChildByName("name").getComponent(cc.EditBox).string;
                let address = this.liuZi.getChildByName("address").getComponent(cc.EditBox).string;
                let note = this.liuZi.getChildByName("note").getComponent(cc.EditBox).string;
                let res = /^[1][3-9]\d{9}$|^([1|2|3|4|5|6|7|8|9])\d{7}$|^[6]([8|6])\d{5}$/;
                if (!(res.test(teleNum))) {
                    this.toast.show("手机号码有误，请重填！")
                    return;
                }

                if (sex === "") {
                    this.toast.show("请填写性别！")
                    return;
                }

                if (name === "") {
                    this.toast.show("请填写姓名！")
                    return;
                }

                if (address === "") {
                    this.toast.show("请填写地址！")
                    return;
                }

                // 接口
                addStayinfo(name, sex, teleNum, address, note, (data) => {
                    if (data.code === 10200) {
                        self.toast.show("留资成功!");
                    } else {
                        self.toast.show("留资失败!");
                    }

                    // 留资成功
                    self.liuZi.active = false;
                });

                break
        }

    }

    //显示关卡数
    showLevelView() {
        this.level.string = this.M_LEVEL.toString();
        this.opportunityLabel.getComponent(cc.Label).string = this.opportunity.toString();
    }

    /* 
        随机逻辑：
        例如四张牌只随机生成两张 之后将数组打乱
    */

    //随机牌数组     
    setIconList() {

        let randArr = [1, 2, 3, 4, 5, 6];

        randArr.sort(() => {
            return 0.5 - Math.random();
        });
        this.lineNum = 2;

        switch (this.M_LEVEL) {
            case 1:
                this.M_POKER_NUM = 2;
                this.rowNum = 1;
                break;
            case 2:
                this.M_POKER_NUM = 4;
                this.rowNum = 2;
                break;
            case 3:
                this.M_POKER_NUM = 6;
                this.rowNum = 3;
                break;
            case 4:
                this.M_POKER_NUM = 8;
                this.rowNum = 4;
                break;
            case 5:
                this.M_POKER_NUM = 12;
                this.rowNum = 4;
                this.lineNum = 3;
                break;
        }

        let arr = [];


        for (let i = 0; i < this.M_POKER_NUM / this.lineNum; i++) {
            arr.push(randArr[i]);
            arr.push(randArr[i]);
            this.M_ICON_LIST[i % (this.M_POKER_NUM / this.lineNum)] = [];
        }

        if (this.M_LEVEL === 5) {

            for (let j = 0; j < (this.M_POKER_NUM - 8) / 2; j++) {
                arr.push(randArr[j]);
                arr.push(randArr[j]);
                this.M_ICON_LIST[j % (this.M_POKER_NUM / this.lineNum)] = [];
            }
        }



        arr.sort(() => {
            return 0.5 - Math.random();
        });


        //num个数  arr数组
        const iconsArr = []; // 声明数组
        arr.forEach((item, index) => {
            const page = Math.floor(index / this.rowNum); // 计算该元素为第几个素组内
            if (!iconsArr[page]) { // 判断是否存在
                iconsArr[page] = [];
            }
            iconsArr[page].push(item);
        });

        this.M_ICON_LIST = iconsArr;

    }



    //判断是否相同
    isSameAction(event, data) {
        const self = this;
        let isTrue = true;

        if (this.TARLIST[0] == null) {
            this.TARLIST[0] = data;
            this.clickNodeArr[0] = event;
            this.CLICKPOKERLIST.push(data);
        } else if (this.TARLIST.length == 1) {
            this.TARLIST[1] = data;
            this.clickNodeArr[1] = event;
            if (this.TARLIST[0] == this.TARLIST[1]) {
                this.CLICKPOKERLIST.push(data);
            } else {
                isTrue = false;

                self.level.scheduleOnce(() => {
                    // 这里的 this 指向 component
                    self.islock(false);

                }, 0.1);
            }
        } else if (this.TARLIST.length == 2) {
            this.TARLIST = [];
            this.clickNodeArr = [];
            this.clickNodeArr[0] = event;
            this.TARLIST[0] = data;
            this.CLICKPOKERLIST.push(data);
        }
        let scaleAction = cc.sequence(
            cc.scaleTo(0.2, 0, 1),
            cc.callFunc((target) => {
                target.getComponent(cc.Sprite).spriteFrame = self.pokerPlist.getSpriteFrame(data);
            }),
            cc.scaleTo(0.2, 1, 1),
            cc.callFunc(() => {
                if (isTrue === false) {
                    self.resetView()
                    self.showGameOverView()


                } else {
                    self.level.scheduleOnce(() => {
                        // 这里的 this 指向 component
                        self.islock(true);

                    }, 0.1);
                }
            })
        );
        event.runAction(scaleAction);






    }


    //匹配错误显示游戏结束
    showGameOverView() {
        // var self = this;
        cc.log("game end");

        this.opportunity -= 1;

        if (0 === this.opportunity) {
            this.lose.active = true;
            this.lose.getChildByName("node").active = true;
            this.opportunityLabel.getComponent(cc.Label).string = "0";
        } else {
            //次数-1
            this.showLevelView()
        }

    }

    resetView() {
        const self = this;
        // let arrNode = this.poker.children;
        this.CLICKPOKERLIST.splice(this.CLICKPOKERLIST.length - 1, 1);

        this.TARLIST = [];

        this.M_ICON_LIST = new Array<Array<any>>();
        for (let i = 0; i < this.clickNodeArr.length; i++) {

            this.clickNodeArr[i].runAction(
                cc.sequence(
                    cc.delayTime(0.3),
                    cc.scaleTo(0.4, 0, 1),
                    cc.callFunc(
                        () => {
                            self.clickNodeArr[i].getComponent(cc.Sprite).spriteFrame = self.pokerPlist.getSpriteFrame("0");
                        }
                    ),
                    cc.scaleTo(0.4, 1, 1)
                )
            );


        }

        this.level.scheduleOnce(() => {
            // 这里的 this 指向 component
            self.islock(true);

        }, 1);
    }

    islock(check: boolean): void {
        let arrNode = this.poker.children;
        for (let i = 0; i < arrNode.length; i++) {
            arrNode[i].getComponent(cc.Button).interactable = check;
        }
    }

    //遍历icon列表，展示位置
    createIcon(callback: Function) {
        const self = this;
        this.setIconList();

        for (let i = 0; i < this.M_ICON_LIST.length; i++) {
            for (let j = 0; j < this.M_ICON_LIST[i].length; j++) {

                var icon = new cc.Node(this.M_ICON_LIST[i][j].toString());
                icon.setScale(1);
                icon.width = 165;
                icon.height = 165;
                icon.addComponent(cc.Sprite);
                icon.getComponent(cc.Sprite).spriteFrame = self.pokerPlist.getSpriteFrame(this.M_ICON_LIST[i][j] ? this.M_ICON_LIST[i][j] + "" : "0");

                // 外层 i 3 内层 j 2

                let x;

                let y;

                if (1 === this.M_LEVEL) {
                    x = (0 * i) * 85;
                    y = i * this.M_ICON_SIZE;
                } else if (3 === this.M_LEVEL) {
                    x = (this.rowNum * (i - 1)) * 55 + 85;
                    y = j * this.M_ICON_SIZE - 100;
                } else if (4 === this.M_LEVEL) {
                    x = (this.rowNum * (i - 1)) * 45 + 90;
                    y = j * this.M_ICON_SIZE - 200;
                } else if (5 === this.M_LEVEL) {
                    x = (this.rowNum * (i - 1)) * 45;
                    y = j * this.M_ICON_SIZE - 200;
                } else {
                    x = (this.rowNum * (i - 1)) * 85 + 93;
                    y = j * this.M_ICON_SIZE;

                }



                icon.setPosition(x, y);
                this.poker.addChild(icon);

                icon.addComponent(cc.Button);


                var scaleAction = cc.sequence(
                    cc.delayTime(1.5),
                    cc.scaleTo(0.4, 0, 1),
                    cc.callFunc((target) => {
                        target.getComponent(cc.Sprite).spriteFrame = self.pokerPlist.getSpriteFrame("0");
                    }),
                    cc.scaleTo(0.4, 1, 1),
                    cc.callFunc((target) => {
                        target.on('click', self.pokeClick, self);
                    }),
                );

                icon.runAction(scaleAction);


            }
        }
        if (callback) {
            callback();
        }


        // self.level.scheduleOnce(function () {
        self.pokerFlipView();
        // }, 1.5);

    }

    //牌翻转
    pokerFlipView() {


        // var self = this;
        var pokerViewCount = this.poker.childrenCount;
        if (!pokerViewCount) return;
        // for (var i = 0; i < pokerViewCount; i++) {
        //     var pokerNode = this.poker.children[i];
        //     pokerNode.addComponent(cc.Button);
        //     var scaleAction = cc.sequence(
        //         cc.scaleTo(0.4, 0, 1),
        //         cc.callFunc(function (target) {
        //             target.getComponent(cc.Sprite).spriteFrame = self.pokerPlist.getSpriteFrame("0");
        //         }),
        //         cc.scaleTo(0.4, 1, 1),
        //     );
        //     pokerNode.runAction(scaleAction);

        //     let clickEventHandler = new cc.Component.EventHandler();
        //     clickEventHandler.target = pokerNode; //这个 node 节点是你的事件处理代码组件所属的节点
        //     clickEventHandler.component = "main";//这个是代码文件名
        //     clickEventHandler.handler = "pokeClick";
        //     // clickEventHandler.customEventData = "foobar";

        //     pokerNode.getComponent(cc.Button).clickEvents.push(clickEventHandler);

        // }
    }


    pokeClick(event) {

        cc.log("点击");

        const self = this;
        this.islock(false);

        this.isSameAction(event.node, event.node.getName());



        if (self.CLICKPOKERLIST.length === self.M_POKER_NUM) {
            self.level.scheduleOnce(() => {
                // 这里的 this 指向 component
                self.showNextGameView();
            }, 0.8);
        }






    }

    /**
     * 
     *  游戏共五关
     *  1关 2个牌子
     *  2关 4个牌子
     *  3关 6个牌子
     *  4关 8个牌子
     *  5关 12个牌子
     */
    //完成单局游戏
    showNextGameView() {
        cc.log("完成单局游戏")
        const self = this;

        this.clearPokerAciton();
        this.CLICKPOKERLIST = [];
        this.M_ICON_LIST = new Array<Array<any>>();
        this.M_LEVEL++;
        this.TARLIST = [];
        if (this.M_LEVEL === 6) {

            self.level.scheduleOnce(() => {
                // 这里的 this 指向 component
                self.opportunityText.active = false;
                self.opportunityLabel.active = false;


                if (self.isGetted === false) {
                    self.win.getChildByName("getResult").active = true;
                } else {
                    self.win.getChildByName("getResult").active = false;
                }

                self.win.active = true;

            }, 0.4);
            return;
        }


        this.opportunityText.active = false
        this.opportunityLabel.active = false

        let scaleAction = cc.sequence(
            cc.scaleTo(0.5, 0, 1),
            cc.callFunc((target) => {
                self.senceBg[self.M_LEVEL - 2].active = false;
                self.senceBg[self.M_LEVEL - 1].active = true;
                self.senceBg[self.M_LEVEL - 1].runAction(
                    cc.sequence(cc.scaleTo(0.5, 1, 1),
                        cc.callFunc(() => {
                            self.opportunityText.active = true;
                            self.opportunityLabel.active = true;
                            self.createIcon(null);
                            self.showLevelView();
                        })
                    ));
            })
        );

        this.senceBg[this.M_LEVEL - 2].runAction(scaleAction)




    }



    // 资源加载
    initLoadingResources(callback: Function) {
        var self = this;
        cc.userGame = {};
        cc.userGame.plistCache = new MyPlistCache();
        cc.userGame.prefabsMap = {};
        var currentResCount = cc.loader.getResCount();
        cc.loader.loadResDir("Plist", cc.SpriteAtlas,
            (completedCount, totalCount, item) => {
                var percent = (completedCount - currentResCount) / (totalCount - currentResCount);
                percent = percent.toFixed(2);
                // self.Actions();
            },
            (err, assets) => {
                // 存储到对象 
                for (var i = 0; i < assets.length; i++) {
                    var asset = assets[i];
                    cc.userGame.plistCache.addPlistCache(asset.name.replace(".plist", ""), asset);
                }
                cc.loader.loadResDir("Prefab", (err, prefab) => {
                    for (var i = 0; i < prefab.length; ++i) {
                        var name = prefab[i].name;
                        cc.userGame.prefabsMap[name] = prefab[i];
                    }
                });
                self.onLoadCompleted(callback);
            }
        );
    }


    //单局游戏结束清除牌
    clearPokerAciton() {
        this.poker.removeAllChildren()
    }

    //加载资源
    onLoadCompleted(callback: Function) {
        var self = this;
        this.pokerPlist = cc.userGame.plistCache.getPlistCache("poker");
        callback();
    }



}
