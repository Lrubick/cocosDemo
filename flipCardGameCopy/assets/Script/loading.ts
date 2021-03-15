// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {



    @property(cc.ProgressBar)
    progress: cc.ProgressBar = null;

    @property
    bar: any = null;

    @property(cc.Node)
    maoBi: cc.Node = null;

    last: number = -298.895;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

        this.progress.progress = 0;
        // this.last = 0;
        // UserCent();
        var self = this;
        // this.isStart = true;

        this.bar = this.progress.node.getChildByName("bar");

        cc.director.preloadScene("Games", (completedCount: number, totalCount: number, item: Object) => {
            let p = completedCount / totalCount;
            self.progress.progress = p;
        }, () => {
            cc.director.loadScene("Games");
        });

    }

    update(dt) {
        // if (this.isStart === true) {
        // this.maoBi.x += (this.bar.width - this.last);
        // this.last = this.bar.width;

        // if (this.maoBi.x >= 148) {
        //     this.maoBi.x = 148;
        // }

        // }
    }
}
