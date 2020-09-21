import { BaseOimoTest } from "./BaseOimoTest";

export class BasicTest extends BaseOimoTest {

    name = "基础测试";

    async _OnCreate() {
        this._CreateStaticPanel(new Laya.Vector3(0, 0, 0), 20, 20);

        for (let i = -2; i <= 2; ++i) {
            for (let j = -2; j <= 2; ++j) {
                for (let k = -2; k <= 2; ++k) {
                    this._CreateBox(new Laya.Vector3(k * 1.01, 5 + i * 1.2, j * 1.01), null, new Laya.Vector3(1, 1, 1));
                }
            }
        }

    }

}