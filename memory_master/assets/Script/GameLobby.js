var MyPlistCache = require("MyPlistCache");

//每个icon的大小
var M_ICON_SIZE = 100;
//icon容器
var M_ICON_LIST = [];
//开始牌张数
var M_POKER_NUM = 6;
//开始视图牌张数
var M_VIEW_POKER_NUM = 6;
//增加张数
var M_POKER_ADD = 2;
//视图中扑克增加的张数
var VIEW_POKER_ADD = 3;
//关卡
var M_LEVEL = 1;
//节点target容器
var TARLIST = [];
// 每局增加时间
var M_TIME = 3000;
//已点击的牌
var CLICKPOKERLIST = [];
cc.Class({
    extends: cc.Component,

    properties: {
        _load: null,
        _poker: null,
        _defeat: null,
        _next: null,
        _level: null,
        _clearance: null,
    },

    onLoad: function () {
        var self = this;
        this._load = this.node.getChildByName("load");
        this._level = this.node.getChildByName("level");
        this._poker = this.node.getChildByName("poker");
        this.Btn_star = this.node.getChildByName("Btn_star");
        this._defeat = this.node.getChildByName("defeat");
        this._next = this.node.getChildByName("next");
        this._clearance = this.node.getChildByName("clearance");
        this.Btn_renew = this._defeat.getChildByName("Btn_renew");
        this.Btn_next = this._next.getChildByName("Btn_next");
        this._load.runAction(
            cc.repeatForever(
                cc.rotateBy(0.5, 360)
            )
        );
        this.initLoadingResources();
        this.Btn_star.on("click", function (event) {
            self.createIcon();
            self.showLevelView();
            this.Btn_star.active = false;
        }, this);
    },

    //加载资源
    onLoadCompleted: function () {
        var self = this;
        this.pokerPlist = cc.userGame.plistCache.getPlistCache("poker");
    },

    start: function () {
    },

    //随机牌数组     
    setIconList: function () {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < M_POKER_NUM / 2; j++) {
                if (!jokerNum || j == 0) {
                    var jokerNum = []; //单组牌容器
                }
                var flag = true;
                var num = cc.getRandomInt(1, M_POKER_NUM / 2);
                for (var j in jokerNum) {
                    if (jokerNum[j] == num) {
                        flag = false;
                        break;
                    }
                }
                if (flag == true) {
                    jokerNum.push(num);
                    M_ICON_LIST.push(num);
                }
            }
        }
        return M_ICON_LIST;
    },

    //遍历icon列表，展示位置
    createIcon: function (callback) {
        var self = this;
        var list = this.setIconList();
        for (var i = 0; i < M_POKER_NUM; i++) {
            var icon = new cc.Node(M_ICON_LIST[i]);
            icon.setScale(0.4);
            if (M_POKER_NUM == 6 || M_POKER_NUM == 8) {
                var lineNum = 3;
            }
            if (M_POKER_NUM == 10 || M_POKER_NUM == 12) {
                var lineNum = 4;
            }
            else if (M_POKER_NUM == 14 || M_POKER_NUM == 16) {
                var lineNum = 5;
            }
            var line = i % lineNum;
            var row = parseInt(i / lineNum);
            cc.log(icon.getName());
            // icon.setName();
            icon.addComponent(cc.Sprite);
            icon.getComponent(cc.Sprite).spriteFrame = self.pokerPlist.getSpriteFrame(list[i] ? list[i] + "" : "0");
            icon.setPosition(cc.Vec2((line - 1) * M_ICON_SIZE, (-row + 1) * 120));
            this._poker.addChild(icon);
        }
        if (callback) {
            callback();
        }
        setTimeout(() => {
            self.pokerFlipView();
        }, M_TIME);
    },

    //牌翻转
    pokerFlipView: function () {
        var self = this;
        var pokerViewCount = this._poker.childrenCount;
        if (!pokerViewCount) return;
        for (var i = 0; i < pokerViewCount; i++) {
            var poker = this._poker.children[i];
            // poker.setName("poker" + i);
            poker.addComponent(cc.Button);
            var scaleX = poker.scaleX;
            var scaleY = poker.scaleY;
            var scaleAction = cc.sequence(
                cc.scaleTo(0.3, 0, 0.4),
                cc.callFunc(function (target) {
                    target.getComponent(cc.Sprite).spriteFrame = self.pokerPlist.getSpriteFrame("0");
                }),
                cc.scaleTo(0.3, 0.4, 0.4),
            );
            poker.runAction(scaleAction);




            // var button = this.node.getComponent(cc.Button); //获取cc.Button组件
            // poker.getComponent(cc.Button).clickEvents.push(clickEventHandler); //增加处理


            poker.on(cc.Node.EventType.TOUCH_START, function (event) {
                cc.log("TOUCH_START event=", event.type);
                cc.log(event.target);
                var pokerTag = self.isSameAction(event.target.getName());
                var scaleAction = cc.sequence(
                    cc.scaleTo(0.3, 0, 0.4),
                    cc.callFunc(function (target) {
                        target.getComponent(cc.Sprite).spriteFrame = self.pokerPlist.getSpriteFrame(pokerTag ? pokerTag : "0");
                        if (CLICKPOKERLIST.length == M_POKER_NUM) {
                            setTimeout(() => {
                                self.showNextGameView();
                            }, 700);
                        }
                    }),
                    cc.scaleTo(0.3, 0.4, 0.4),
                );
                event.target.runAction(scaleAction);
            });

            poker.on(cc.Node.EventType.TOUCH_MOVE, function (event) {
                cc.log("TOUCH_MOVE event=", event.type);
            });

            poker.on(cc.Node.EventType.TOUCH_END, function (event) {
                cc.log("TOUCH_END event=", event.type);
            });



            // poker.on("click", function (event) {
            //     cc.log(event.target);
            //     var pokerTag = self.isSameAction(event.target.tag);
            //     var scaleAction = cc.sequence(
            //         cc.scaleTo(0.3, 0, 0.4),
            //         cc.callFunc(function (target) {
            //             target.getComponent(cc.Sprite).spriteFrame = self.pokerPlist.getSpriteFrame(pokerTag ? pokerTag : "0");
            //             if (CLICKPOKERLIST.length == M_POKER_NUM) {
            //                 setTimeout(() => {
            //                     self.showNextGameView();
            //                 }, 700);
            //             }
            //         }),
            //         cc.scaleTo(0.3, 0.4, 0.4),
            //     );
            //     event.target.runAction(scaleAction);
            // }, this);
        }
    },


    //判断是否相同
    isSameAction: function (data) {
        var self = this;
        if (TARLIST[0] == null) {
            TARLIST[0] = data;
            CLICKPOKERLIST.push(data);
            return data;
        } else if (TARLIST.length == 1) {
            TARLIST[1] = data;
            if (TARLIST[0] == TARLIST[1]) {
                CLICKPOKERLIST.push(data);
                return data;
            } else {
                TARLIST.splice(1, 1);
                M_LEVEL = 1;

                this.showGameOverView();
                return "0";
            }
        } else if (TARLIST.length == 2) {
            TARLIST = [];
            TARLIST[0] = data;
            CLICKPOKERLIST.push(data);
            return data;
        }
    },

    //匹配错误显示游戏结束
    showGameOverView: function () {
        var self = this;
        this._defeat.active = true;
        var pokerViewCount = this._poker.childrenCount;
        this.clearPokerAciton();
        this.Btn_renew.on("click", function (event) {
            M_ICON_LIST = [];
            M_POKER_NUM = 6;
            M_VIEW_POKER_NUM = 6;
            TARLIST = [];
            CLICKPOKERLIST = [];
            this.Btn_star.active = true;
            this._defeat.active = false;
            self.showLevelView();
        }, this);
    },

    //完成单局游戏
    showNextGameView: function () {
        var self = this;
        this._next.active = true;
        this.Btn_next.off("click");
        this.Btn_next.on("click", function (event) {
            self.clearPokerAciton();
            CLICKPOKERLIST = [];
            M_ICON_LIST = [];
            if (M_LEVEL == 3 || M_LEVEL == 7 || M_LEVEL == 11 || M_LEVEL == 15 || M_LEVEL == 18) {
                M_POKER_NUM += 2;
                M_TIME += 1500;
            }
            if (M_POKER_NUM >= 20) {
                M_POKER_NUM = 20;
            }
            this._next.active = false;
            M_LEVEL++;
            if (M_LEVEL >= 21) {
                self.showClearenceView(true);
                return;
            } else {
                self.createIcon();
                self.showLevelView();
            }
        }, this);
    },

    //单局游戏结束清除牌
    clearPokerAciton: function () {
        var pokerViewCount = this._poker.childrenCount;
        for (var i = 0; i < pokerViewCount; i++) {
            var poker = this._poker.children[i];
            poker.addComponent(cc.Button);
            poker.destroy();
        }
    },

    //显示游戏通关图片
    showClearenceView: function (statu) {
        this._clearance.active = statu;
        this._clearance.setOpacity(0);
        this._clearance.setScale(5);
        this._clearance.runAction(
            cc.sequence(
                cc.delayTime(0.8),
                cc.fadeIn(0),
                cc.scaleTo(0.15, 1.0),
                cc.callFunc(function (targetNode) {
                    this.Btn_star.active = true;
                }, this)
            )
        );
    },

    //显示关卡数
    showLevelView: function () {
        var self = this;
        this._level.getComponent(cc.Label).string = "第" + M_LEVEL + "关";
    },

    // 资源加载
    initLoadingResources: function () {
        var self = this;
        cc.userGame = {};
        cc.userGame.plistCache = new MyPlistCache();
        cc.userGame.prefabsMap = {};
        var currentResCount = cc.loader.getResCount();
        cc.loader.loadResDir("Plist", cc.SpriteAtlas,
            function (completedCount, totalCount, item) {
                var percent = (completedCount - currentResCount) / (totalCount - currentResCount);
                percent = percent.toFixed(2);
                self.Actions();
            },
            function (err, assets) {
                // 存储到对象 
                for (var i = 0; i < assets.length; i++) {
                    var asset = assets[i];
                    cc.userGame.plistCache.addPlistCache(asset.name.replace(".plist", ""), asset);
                }
                cc.loader.loadResDir("Prefab", function (err, prefab) {
                    for (var i = 0; i < prefab.length; ++i) {
                        var name = prefab[i].name;
                        cc.userGame.prefabsMap[name] = prefab[i];
                    }
                });
                self.onLoadCompleted();
            }
        );
    },

    Actions: function () {
        this._load.active = false;
    }

});
