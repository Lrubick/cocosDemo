const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    @property(cc.Node)
    planet: cc.Node = null;

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null;

    start() {
        // init logic
        // this.label.string = this.text;
        cc.tween(this.planet)
            .by(2, { angle: 360 })
            .repeatForever()
            .start()

        const self = this;
        cc.director.preloadScene("main", (completedCount: number, totalCount: number, item: Object) => {
            self.label.string = Math.floor(completedCount / totalCount * 100) + "%";
            self.progressBar.progress = completedCount / totalCount;
        }, () => {
            cc.log("Next scene preloaded");
            cc.director.loadScene("main");
        });

    }
}
