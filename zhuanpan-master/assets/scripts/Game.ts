/*
 * @Author: caizhijun
 * @Date: 2020-04-19 20:47:55
 */

enum GameState {
    Idle,
    Play
}

const { ccclass, property } = cc._decorator;

@ccclass
export default class Game extends cc.Component {

    @property([cc.Node])
    nodePrize: cc.Node[] = [];

    @property(cc.Node)
    nodeMove: cc.Node = null;

    @property(cc.Label)
    txtResult: cc.Label = null;

    @property(cc.EditBox)
    editbox: cc.EditBox = null;

    private _index: number = 0;
    private _count: number = 0;
    private _targetIndex: number[] = [];
    private _state: GameState = GameState.Idle;

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {

    }

    // update (dt) {}

    onClick(event: any, data: string) {
        switch (data) {
            case 'start': {
                if (this._state == GameState.Idle) {
                    this.startAni();
                }
                break;
            }
        }
    }

    startAni() {
        let str = this.editbox.string;
        let indexs = str.split('/');
        if (indexs.length <= 0) {
            return;
        }

        this._targetIndex = [];
        this._count = 0;
        this.txtResult.string = '';
        for (let i = 0; i < indexs.length; i++) {
            let index = parseInt(indexs[i]);
            if (typeof index == 'number' && index > 0 && index < 9) {
                this._targetIndex.push(index - 1);
            }
        }

        this.nodeMove.active = true;
        this._state = GameState.Play;
        let moveOnce = () => {
            let seq = cc.sequence(
                cc.callFunc(
                    () => {
                        this.nodeMove.parent = this.nodePrize[this._index];

                        if (this._index == this._targetIndex[this._count]) {
                            this.nodeMove.stopAllActions();
                            let blink = cc.sequence(
                                cc.fadeOut(0.08),
                                cc.fadeIn(0.08),
                            ).repeat(3);
                            this.nodeMove.runAction(cc.sequence(
                                blink,
                                cc.callFunc(() => {
                                    let str = this.txtResult.string;
                                    if (str != '') {
                                        str += '+';
                                    }
                                    str += (this._targetIndex[this._count] + 1);
                                    this.txtResult.string = str;
                                    this._count++;
                                    if (this._count < this._targetIndex.length) {
                                        moveOnce();
                                    } else {
                                        this._state = GameState.Idle;
                                    }
                                })
                            ));
                        }
                        this._index = (this._index + 1) % this.nodePrize.length;
                    }
                ),
                cc.delayTime(0.08)
            );
            this.nodeMove.runAction(seq.repeatForever());
        }
        moveOnce();
    }
}
