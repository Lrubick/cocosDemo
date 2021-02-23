const {ccclass, property} = cc._decorator;

@ccclass
export default class Item extends cc.Component {

    onLoad () {
        this.draw();
    }

    draw () {
        const points = this.getComponent(cc.PhysicsPolygonCollider).points;
        const mask = this.getComponent(cc.Mask);
        // @ts-ignore
        const ctx = mask._graphics;
        ctx.clear();
        const len = points.length;
        ctx.moveTo(points[len - 1].x, points[len - 1].y);
        for (let i = 0; i < points.length; i++) {
            ctx.lineTo(points[i].x, points[i].y);
        }
        ctx.fill();
    }

}
