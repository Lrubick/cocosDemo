const { ccclass, property } = cc._decorator;
cc.getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
@ccclass
export default class main extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    private clickCount: number = 0;
    private beforeCard: number = 0;
    //开始牌张数
    private M_POKER_NUM: number = 6;

    //icon容器
    private M_ICON_LIST: number[] = [];

    //节点target容器
    private TARLIST: any = [];

    //已点击的牌
    private CLICKPOKERLIST: any = [];

    //关卡
    private M_LEVEL: number = 1;

    start() {
        // init logic
        this.label.string = this.text;
    }



    private onBtnClick(event: cc.Event.EventTouch, value: string): void {
        if (0 === this.clickCount) {
            this.clickCount++;
        } else if (1 === this.clickCount) {
            if (this.beforeCard === event.target.name) {
                // 成功
                // 判断游戏是否结束
            } else {
                // 失败
                // 卡牌翻转 次数-1
            }
            this.clickCount = 0;

        }
    }


    //随机牌数组     
    setIconList() {
        for (var i = 0; i < 2; i++) {
            for (var j = 0; j < this.M_POKER_NUM / 2; j++) {
                if (!jokerNum || j == 0) {
                    var jokerNum = []; //单组牌容器
                }
                var flag = true;
                var num = cc.getRandomInt(1, this.M_POKER_NUM / 2);
                for (let j in jokerNum) {
                    if (jokerNum[j] == num) {
                        flag = false;
                        break;
                    }
                }
                if (flag == true) {
                    jokerNum.push(num);
                    this.M_ICON_LIST.push(num);
                }
            }
        }
        return this.M_ICON_LIST;
    }


    //判断是否相同
    private isSameAction(data) {
        var self = this;
        if (this.TARLIST[0] == null) {
            this.TARLIST[0] = data;
            this.CLICKPOKERLIST.push(data);
            return data;
        } else if (this.TARLIST.length == 1) {
            this.TARLIST[1] = data;
            if (this.TARLIST[0] == this.TARLIST[1]) {
                this.CLICKPOKERLIST.push(data);
                return data;
            } else {
                this.TARLIST.splice(1, 1);
                this.M_LEVEL = 1;

                this.showGameOverView();
                return "0";
            }
        } else if (this.TARLIST.length == 2) {
            this.TARLIST = [];
            this.TARLIST[0] = data;
            this.CLICKPOKERLIST.push(data);
            return data;
        }
    }


    //匹配错误显示游戏结束
    private showGameOverView() {
        var self = this;
        // 游戏失败
        this._defeat.active = true;
        var pokerViewCount = this._poker.childrenCount;
        this.clearPokerAciton();
        this.Btn_renew.on("click", function (event) {
            this.M_ICON_LIST = [];
            this.M_POKER_NUM = 6;
            this.M_VIEW_POKER_NUM = 6;
            this.TARLIST = [];
            this.CLICKPOKERLIST = [];
            this.Btn_star.active = true;
            this._defeat.active = false;
            self.showLevelView();
        }, this);
    }

    //遍历icon列表，展示位置
    private createIcon(callback) {
        var self = this;
        var list = this.setIconList();
        for (var i = 0; i < this.M_POKER_NUM; i++) {
            var icon = new cc.Node(this.M_ICON_LIST[i].toString());
            icon.setScale(0.4);
            if (this.M_POKER_NUM == 6 || this.M_POKER_NUM == 8) {
                var lineNum = 3;
            }
            if (this.M_POKER_NUM == 10 || this.M_POKER_NUM == 12) {
                var lineNum = 4;
            }
            else if (this.M_POKER_NUM == 14 || this.M_POKER_NUM == 16) {
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
    }

    //牌翻转
    private pokerFlipView() {
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

            poker.on(cc.Node.EventType.TOUCH_START, function (event) {
                // 点击
                var pokerTag = self.isSameAction(event.target.getName());
                var scaleAction = cc.sequence(
                    cc.scaleTo(0.3, 0, 0.4),
                    cc.callFunc(function (target) {
                        target.getComponent(cc.Sprite).spriteFrame = self.pokerPlist.getSpriteFrame(pokerTag ? pokerTag : "0");
                        if (this.CLICKPOKERLIST.length == this.M_POKER_NUM) {
                            setTimeout(() => {
                                self.showNextGameView();
                            }, 700);
                        }
                    }),
                    cc.scaleTo(0.3, 0.4, 0.4),
                );
                event.target.runAction(scaleAction);
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
    }


    //完成单局游戏
    private showNextGameView() {
        var self = this;
        this._next.active = true;
        this.Btn_next.off("click");
        this.Btn_next.on("click", function (event) {
            self.clearPokerAciton();
            this.CLICKPOKERLIST = [];
            this.M_ICON_LIST = [];
            if (this.M_LEVEL == 3 || this.M_LEVEL == 7 || this.M_LEVEL == 11 || this.M_LEVEL == 15 || this.M_LEVEL == 18) {
                this.M_POKER_NUM += 2;
                this.M_TIME += 1500;
            }
            if (this.M_POKER_NUM >= 20) {
                this.M_POKER_NUM = 20;
            }
            this._next.active = false;
            this.M_LEVEL++;
            if (this.M_LEVEL >= 21) {
                self.showClearenceView(true);
                return;
            } else {
                self.createIcon(null);
                self.showLevelView();
            }
        }, this);
    }

    //单局游戏结束清除牌
    private clearPokerAciton() {
        var pokerViewCount = this._poker.childrenCount;
        for (var i = 0; i < pokerViewCount; i++) {
            var poker = this._poker.children[i];
            poker.addComponent(cc.Button);
            poker.destroy();
        }
    }



}
