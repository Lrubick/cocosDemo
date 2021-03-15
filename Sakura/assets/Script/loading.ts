const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property([cc.Node])
    talk: cc.Node[] = [];


    start() {
        // init logic

        cc.tween(this.talk[0])
            .to(1, { opacity: 255 })
            .start()

        cc.tween(this.talk[1])
            .delay(0.4)
            .to(1, { opacity: 255 })
            .start()






        cc.director.preloadScene("main", (completedCount: number, totalCount: number, item: Object) => {
            // self.label.string = Math.floor(completedCount / totalCount * 100) + "%";
            // self.progressBar.progress = completedCount / totalCount;
        }, () => {
            // cc.log("Next scene preloaded");
            this.talk[2].getComponent(cc.Button).interactable = true;
            cc.tween(this.talk[2])
                .to(1, { opacity: 255 })
                .repeatForever(
                    cc.tween(this.talk[2])
                        .to(0.7, { opacity: 0 })
                        .to(0.7, { opacity: 255 })
                        .start()
                )
                .start()
        });


    }

    onclick() {
        jiedian(1);

        cc.director.loadScene("main");
        // cc.tween(this.node)
        //     .to(1, { opacity: 0 })
        //     .call(() => {
        //         this.node.active = false;
        //     })
        //     .start()
    }
}
