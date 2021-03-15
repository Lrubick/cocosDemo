const { ccclass, property } = cc._decorator;

@ccclass
export default class Toast extends cc.Component {


    @property(cc.Label)
    lblContent: cc.Label = null;

    _isShow: boolean = false;

    onLoad() {

        this.lblContent = this.node.getChildByName("info").getComponent(cc.Label);

        this.node.active = this._isShow;
    }

    show(content: string) {

        this._isShow = true;
        if (this.node) {
            this.node.active = this._isShow;
        }
        if (this.lblContent) {
            if (content == null) {
                content = "";
            }
            this.lblContent.string = content;
            // this.node.width = this.lblContent.node.width + 180;
        }

        var count = 1;
        const self = this;
        this.schedule(() => {
            if (count == 2) {
                self.hide();
                self.unscheduleAllCallbacks();
            }
            count++;
        }, 0.7);

    }


    showAutoHide() {
        this.hide();
    }

    hide() {
        this._isShow = false;
        if (this.node) {
            this.node.active = this._isShow;
        }
    }

    update(dt) {

    }
}

