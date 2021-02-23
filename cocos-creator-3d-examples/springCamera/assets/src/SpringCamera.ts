// https://mp.weixin.qq.com/s/NCn8Ygk_I_nRnhmbHQeZwQ
const CONST_FIX_DT = 1 / 60;
// import as cc
import { Camera, Component, Quat, v3, Vec3, _decorator } from 'cc';
import { Role } from './Role';
const { ccclass, property } = _decorator;

@ccclass('SpringCamera')
export class SpringCamera extends Component {

    @property(Camera)
    camera: Camera = null!;

    @property(Role)
    followRole: Role = null!;

    @property
    hDist: number = 15;

    @property
    fDist: number = 5;

    private _temp_v3: Vec3 = v3();
    private _temp2_v3: Vec3 = v3();
    private _temp_quat: Quat = new Quat();


    private _speed: Vec3 = v3();
    // 弹簧常量
    _springConst = 80;
    // 阻尼常量
    _dampConst = 50;


    start() {
        this.initCamera();
    }


    // 
    // 相对距离的向量 = 理想位置 - 当前位置
    // 加速度 = - 相对距离*弹力系数 - 当前速度*阻力系数
    // 当前速度 = 当前速度 + 加速度*间隔时间
    // 当前位置 = 当前位置 + 当前速度
    // 理想位置 = 计算理想位置()
    private getIdealPos() {
        // 向量标量乘法
        Vec3.multiplyScalar(this._temp2_v3, this.followRole.forward, this.hDist)
        // 向量减法。将当前向量减去指定向量
        Vec3.subtract(this._temp_v3, this.followRole.node.worldPosition, this._temp2_v3);
        Vec3.multiplyScalar(this._temp2_v3, this.followRole.up, this.fDist)
        Vec3.add(this._temp_v3, this._temp_v3, this._temp2_v3);
        return this._temp_v3;
    }
    // 旋转角
    private updateRotation() {
        // 向量减法。将当前向量减去指定向量
        Vec3.subtract(this._temp2_v3, this.node.worldPosition, this.followRole.node.worldPosition);//相机的前方向是反的
        // 根据视口的前方向和上方向计算四元数
        // normalize()将当前向量归一化
        Quat.fromViewUp(this._temp_quat, this._temp2_v3.normalize(), this.followRole.up)
        console.log(this._temp_quat);

        this.node.setWorldRotation(this._temp_quat);
    }

    private initCamera() {
        this.node.setWorldPosition(this.getIdealPos());
        this.updateRotation();
    }
    // 修正摄像机位置
    private fixUpdate(dt: number) {
        const idealPos = this.getIdealPos();
        // 当前向量 -> 目标向量
        // now -> ideal
        const now2idealVec = idealPos.subtract(this.node.worldPosition);
        // 加速度
        const acceleration = now2idealVec.multiplyScalar(this._springConst).subtract(this._speed.clone().multiplyScalar(this._dampConst));
        this._speed.add(acceleration.multiplyScalar(dt));
        this.node.setWorldPosition(this.node.worldPosition.add(this._speed));
        this.updateRotation();
    }

    private _dt = 0;
    update(dt: number) {
        this._dt += dt;
        while (this._dt > CONST_FIX_DT) {
            this.fixUpdate(CONST_FIX_DT);
            this._dt -= CONST_FIX_DT;
        }
    }
}
/*
位置！距离！旋转！弹簧！


欢迎关注微信公众号 [白玉无冰]

导航：https://mp.weixin.qq.com/s/Ht0kIbaeBEds_wUeUlu8JQ


█████████████████████████████████████
█████████████████████████████████████
████ ▄▄▄▄▄ █▀█ █▄██▀▄ ▄▄██ ▄▄▄▄▄ ████
████ █   █ █▀▀▀█ ▀▄▀▀▀█▄▀█ █   █ ████
████ █▄▄▄█ █▀ █▀▀▀ ▀▄▄ ▄ █ █▄▄▄█ ████
████▄▄▄▄▄▄▄█▄▀ ▀▄█ ▀▄█▄▀ █▄▄▄▄▄▄▄████
████▄▄  ▄▀▄▄ ▄▀▄▀▀▄▄▄ █ █ ▀ ▀▄█▄▀████
████▀ ▄  █▄█▀█▄█▀█  ▀▄ █ ▀ ▄▄██▀█████
████ ▄▀▄▄▀▄ █▄▄█▄ ▀▄▀ ▀ ▀ ▀▀▀▄ █▀████
████▀ ██ ▀▄ ▄██ ▄█▀▄ ██▀ ▀ █▄█▄▀█████
████   ▄██▄▀ █▀▄▀▄▀▄▄▄▄ ▀█▀ ▀▀ █▀████
████ █▄ █ ▄ █▀ █▀▄█▄▄▄▄▀▄▄█▄▄▄▄▀█████
████▄█▄█▄█▄█▀ ▄█▄   ▀▄██ ▄▄▄ ▀   ████
████ ▄▄▄▄▄ █▄██ ▄█▀  ▄   █▄█  ▄▀█████
████ █   █ █ ▄█▄ ▀  ▀▀██ ▄▄▄▄ ▄▀ ████
████ █▄▄▄█ █ ▄▄▀ ▄█▄█▄█▄ ▀▄   ▄ █████
████▄▄▄▄▄▄▄█▄██▄▄██▄▄▄█████▄▄█▄██████
█████████████████████████████████████
█████████████████████████████████████
*/