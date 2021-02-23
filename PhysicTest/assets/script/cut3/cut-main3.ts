import Item from "./cut-item3";

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
      .rayCast(point1, point2, cc.RayCastType.All);
    const result2 = cc.director
      .getPhysicsManager()
      .rayCast(point2, point1, cc.RayCastType.All);
    // 将结果二的方向反过来
    result2.forEach((r) => {
      r.fraction = 1 - r.fraction;
    });
    // 将结果合并
    const results = result1.concat(result2);
    // cc.log(results);
    // 然后我们将结果进行分类
    let pairs = [];
    for (let i = 0; i < results.length; i++) {
      let find = false;
      let result = results[i];
      for (let j = 0; j < pairs.length; j++) {
        let pair = pairs[j];
        // 以第一个点为参考，如果碰撞盒子是同一个，证明是一个物体
        if (pair[0] && result.collider === pair[0].collider) {
          find = true;
          // 移除同碰撞体内部的多余的点，成对位置相等（很近）
          let r = pair.find((r) => {
            // 官方取的判断临界是根号 5，很小的距离来判断点的相等
            return r.point.sub(result.point).magSqr() <= 5;
          });
          // 如果有非常近的点，跳过 push，然后把里面的删去
          if (r) {
            pair.splice(pair.indexOf(r), 1);
          } else {
            pair.push(result);
          }
          break;
        }
      }
      if (!find) {
        pairs.push([result]);
      }
    }
    // cc.log(pairs);
    // 接下来就是把每个碰撞体的点分别处理
    for (let i = 0; i < pairs.length; i++) {
      let pair = pairs[i];
      if (pair.length < 2) {
        continue;
      }
      // 根据远近，按顺序排队，这样每两个一组
      pair = pair.sort((a, b) => {
        if (a.fraction > b.fraction) {
          return 1;
        } else if (a.fraction < b.fraction) {
          return -1;
        }
        return 0;
      });
      // cc.log(pair)
      // 将一个碰撞体上的所有点分成几个部分，比如两个交点就是两部分，四个交点就需要分成三部分
      let splitResults = [];
      // 每两个点一循环
      for (let j = 0; j < pair.length - 1; j += 2) {
        let r1 = pair[j];
        let r2 = pair[j + 1];
        if (r1 && r2) {
          // 封装一个方法，将分割后的结果放入 splitResults 中
          this.split(r1.collider, r1.point, r2.point, splitResults);
        }
      }
      if (splitResults.length <= 0) {
        continue;
      }
      // 根据结果创建碰撞体
      let collider = pair[0].collider;
      let maxPointsResult;
      for (let j = 0; j < splitResults.length; j++) {
        let splitResult = splitResults[j];
        for (let k = 0; k < splitResult.length; k++) {
          if (typeof splitResult[k] === "number") {
            splitResult[k] = collider.points[splitResult[k]];
          }
        }
        if (!maxPointsResult || splitResult.length > maxPointsResult.length) {
          maxPointsResult = splitResult;
        }
      }
      // 分割结果不构成图形
      if (maxPointsResult.length < 3) {
        continue;
      }
      // 设置本体
      collider.points = maxPointsResult;
      collider.apply();
      collider.node.getComponent(Item).draw();
      // 克隆 N 个
      for (let j = 0; j < splitResults.length; j++) {
        let splitResult = splitResults[j];
        if (splitResult.length < 3) continue;
        if (splitResult == maxPointsResult) continue;
        // 克隆本体作为第 N 个
        const cloneNode = cc.instantiate(collider.node);
        this.gameLayer.addChild(cloneNode);
        const comp = cloneNode.getComponent(cc.PhysicsPolygonCollider);
        comp.points = splitResult;
        comp.apply();
        cloneNode.getComponent(Item).draw();
      }
    }
  }

  split(collider, point1, point2, splitResults) {
    let body = collider.body;
    let points = collider.points;
    // 转化为本地坐标
    let localPoint1 = cc.Vec2.ZERO;
    let localPoint2 = cc.Vec2.ZERO;
    body.getLocalPoint(point1, localPoint1);
    body.getLocalPoint(point2, localPoint2);
    let newSplitResult1 = [localPoint1, localPoint2];
    let newSplitResult2 = [localPoint2, localPoint1];
    // 同教程第一部分，寻找下标
    let index1 = undefined;
    let index2 = undefined;
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
    // cc.log(`点1下标${index1}`);
    // cc.log(`点2下标${index2}`);
    let splitResult = undefined;
    let indiceIndex1 = index1;
    let indiceIndex2 = index2;
    // 检测重叠部分
    if (splitResults.length > 0) {
      for (let i = 0; i < splitResults.length; i++) {
        let indices = splitResults[i];
        indiceIndex1 = indices.indexOf(index1);
        indiceIndex2 = indices.indexOf(index2);
        if (indiceIndex1 !== -1 && indiceIndex2 !== -1) {
          splitResult = splitResults.splice(i, 1)[0];
          break;
        }
      }
    }
    // 如果没有重叠
    if (!splitResult) {
      splitResult = points.map((p, i) => {
        return i;
      });
    }
    // 分割开两部分
    for (let i = indiceIndex1 + 1; i !== indiceIndex2 + 1; i++) {
      if (i >= splitResult.length) {
        i = 0;
      }
      let p = splitResult[i];
      // 如果是下标，读数组
      p = typeof p === "number" ? points[p] : p;
      if (p.sub(localPoint1).magSqr() < 5 || p.sub(localPoint2).magSqr() < 5) {
        continue;
      }
      newSplitResult2.push(splitResult[i]);
    }
    for (let i = indiceIndex2 + 1; i !== indiceIndex1 + 1; i++) {
      if (i >= splitResult.length) {
        i = 0;
      }
      let p = splitResult[i];
      p = typeof p === "number" ? points[p] : p;
      if (p.sub(localPoint1).magSqr() < 5 || p.sub(localPoint2).magSqr() < 5) {
        continue;
      }
      newSplitResult1.push(splitResult[i]);
    }
    // 两个方向遍历完毕，装入结果
    splitResults.push(newSplitResult1);
    splitResults.push(newSplitResult2);
  }

  /** 近似判断点在线上 */
  pointInLine(point, start, end) {
    const dis = 1;
    return cc.Intersection.pointLineDistance(point, start, end, true) < dis;
  }
}
