const chroma = require('chroma');

let gfx = cc.gfx;

cc.Class({
    extends: cc.Component,
    // 允许当前组件在编辑器模式下运行。
    // 默认情况下，所有组件都只会在运行时执行，也就是说它们的生命周期回调在编辑器模式下并不会触发。
    editor: {
        executeInEditMode: true
    },

    properties: {
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        //发光度
        this.lighten = 0;
        //光照方向
        this.lightenDirection = 1;
        this.c1 = cc.color();
        this.c2 = cc.color();
        // 顶点格式
        // 定义顶点数据格式，只需要指明所需的属性，避免造成存储空间的浪费

        var vfmtPosColor = new gfx.VertexFormat([
            // 用户需要创建一个三维的盒子，所以需要三个值来保存位置信息
            // num:3为参数个数
            { name: gfx.ATTR_POSITION, type: gfx.ATTR_TYPE_FLOAT32, num: 3 },
            // normalize 标准模式
            { name: gfx.ATTR_COLOR, type: gfx.ATTR_TYPE_UINT8, num: 4, normalize: true },
        ]);
        // 网格
        let mesh = new cc.Mesh();
        // init 函数会根据传入的顶点格式 vertexFormat 和顶点数量 vertexCount 创建内部顶点数据。如果顶点数据会被经常修改，那么 dynamic 应该设置为 true。
        mesh.init(vfmtPosColor, 8, true);
        this.mesh = mesh;
        // 修改 position 顶点数据 x,y,z
        mesh.setVertices(gfx.ATTR_POSITION, [
            cc.v3(-100, 100, 100), cc.v3(-100, -100, 100), cc.v3(100, 100, 100), cc.v3(100, -100, 100),
            cc.v3(-100, 100, -100), cc.v3(-100, -100, -100), cc.v3(100, 100, -100), cc.v3(100, -100, -100)
        ]);

        mesh._minPos = cc.v3(-100, -100, -100);
        mesh._maxPos = cc.v3(100, 100, 100);

        this.updateColor(cc.Color.RED, cc.Color.BLUE);
        // 修改指定索引数组的数据为 indices，index 指明修改的是哪一组索引数据，默认值为 0。

        //渲染三角形后拼接成面
        mesh.setIndices([
            0, 1, 2, 1, 3, 2, // front
            0, 6, 4, 0, 2, 6, // top
            2, 7, 6, 2, 3, 7, // right
            0, 5, 4, 0, 1, 5, // left
            1, 7, 5, 1, 3, 7, // bottm,
            4, 5, 6, 5, 7, 6, // back
        ]);

        let renderer = this.node.getComponent(cc.MeshRenderer);
        if (!renderer) {
            renderer = this.node.addComponent(cc.MeshRenderer);
        }
        renderer.mesh = mesh;
    },

    updateColor(c1, c2) {
        this.mesh.setVertices(gfx.ATTR_COLOR, [
            c1, c1, c1, c1,
            c2, c2, c2, c2,
        ]);
    },

    update(dt) {
        // if (CC_EDITOR) return;

        // let c1 = chroma.hsl(330, 1, this.lighten);
        // let c2 = chroma.hsl(100, 1, (1 - this.lighten));

        // this.lighten += dt * 0.1 * this.lightenDirection;
        // if ((this.lighten > 1 && this.lightenDirection > 0) ||
        //     (this.lighten < 0 && this.lightenDirection < 0)) {
        //     this.lightenDirection *= -1;
        // }

        // this.c1.fromHEX(c1.toString());
        // this.c2.fromHEX(c2.toString());
        // this.updateColor(this.c1, this.c2);
    },
});
