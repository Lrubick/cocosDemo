import Item from "./cut-item";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Main extends cc.Component {
  @property(cc.Graphics)
  draw: cc.Graphics = undefined;

  @property(cc.Node)
  gameLayer: cc.Node = undefined;

  onLoad() {
    this.registerEvent();
  }

  registerEvent() {
    this.node.on(
      cc.Node.EventType.TOUCH_MOVE,
      (e) => {
        this.draw.clear();
        const startPoint = e.getStartLocation();
        this.draw.moveTo(startPoint.x, startPoint.y);
        this.draw.lineTo(e.getLocationX(), e.getLocationY());
        this.draw.stroke();
      },
      this
    );

    this.node.on(
      cc.Node.EventType.TOUCH_END,
      (e) => {
        this.draw.clear();
        const p1 = e.getStartLocation();
        const p2 = e.getLocation();
        this.cut(p1, p2);
      },
      this
    );
  }

  cut(point1, point2) {
    const result1 = cc.director
      .getPhysicsManager()
      .rayCast(point1, point2, cc.RayCastType.Closest);
    const result2 = cc.director
      .getPhysicsManager()
      .rayCast(point2, point1, cc.RayCastType.Closest);
    if (result1.length === 0 || result2.length === 0) {
      cc.warn("无碰撞体");
      return;
    }
    if (result1[0].collider !== result2[0].collider) {
      cc.warn("不是单独碰撞体");
      return;
    }
    if (!(result1[0].collider instanceof cc.PhysicsPolygonCollider)) {
      cc.warn("非多边形物理碰撞盒无points属性");
      return;
    }
    // 将单独的碰撞体分割成两块，利用点是否在线上判断
    const collider = result1[0].collider;
    let localPoint1 = cc.Vec2.ZERO;
    let localPoint2 = cc.Vec2.ZERO;
    collider.body.getLocalPoint(result1[0].point, localPoint1);
    collider.body.getLocalPoint(result2[0].point, localPoint2);
    const points = collider.points;
    let index1 = undefined;
    let index2 = undefined;

    cc.log("length = " + points.length);
    // cc.log(p1);
    for (let i = 0; i < points.length; i++) {
      let p1 = points[i];
      let p2 = i === points.length - 1 ? points[0] : points[i + 1];
      if (this.pointInLine(localPoint1, p1, p2)) {
        index1 = i;
      }
      if (this.pointInLine(localPoint2, p1, p2)) {
        index2 = i;
      }
      if (index1 !== undefined && index2 !== undefined) {
        break;
      }
    }
    cc.log(`点1下标${index1}`);
    cc.log(`点2下标${index2}`);
    // 一次循环，装入两个点数组
    const array1 = [];
    const array2 = [];
    // 碰到 index1 或 index2 标志
    let time = 0;
    for (let i = 0; i < points.length; i++) {
      let temp = points[i].clone();
      if (time === 0) {
        array1.push(temp);
      } else {
        array2.push(temp);
      }
      if ((i === index1 || i === index2) && time === 0) {
        array1.push(i === index1 ? localPoint1.clone() : localPoint2.clone());
        array2.push(i === index1 ? localPoint1.clone() : localPoint2.clone());
        time = 1;
      } else if ((i === index1 || i === index2) && time === 1) {
        array2.push(i === index1 ? localPoint1.clone() : localPoint2.clone());
        array1.push(i === index1 ? localPoint1.clone() : localPoint2.clone());
        time = 0;
      }
    }
    cc.log(array1, array2);
    // 设置第一个碰撞体
    collider.points = array1;
    collider.apply();
    collider.node.getComponent(Item).draw();
    // 克隆一个本体作为第二个
    const cloneNode = cc.instantiate(collider.node);
    this.gameLayer.addChild(cloneNode);
    const comp = cloneNode.getComponent(cc.PhysicsPolygonCollider);
    comp.points = array2;
    comp.apply();
    cloneNode.getComponent(Item).draw();
  }

  /** 近似判断点在线上 */
  pointInLine(point, start, end) {
    const dis = 1;
    //计算点到直线的距离。
    return cc.Intersection.pointLineDistance(point, start, end, true) < dis;
  }
}
