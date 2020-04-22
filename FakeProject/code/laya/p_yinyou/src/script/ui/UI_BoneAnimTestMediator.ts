import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import UI_BoneAnimTest from "../../ui/Main/UI_BoneAnimTest";
import GlobalUnit from "../common/GlobalUnit";
import LTRes from "../../LTGame/Res/LTRes";
import ResDefine from "../common/ResDefine";

export default class UI_BoneAnimTestMediator extends BaseUIMediator<UI_BoneAnimTest> {

    private static _instance: UI_BoneAnimTestMediator;
    public static get instance(): UI_BoneAnimTestMediator {
        if (this._instance == null) {
            this._instance = new UI_BoneAnimTestMediator();
            this._instance._classDefine = UI_BoneAnimTest;
        }
        return this._instance;
    }

    _OnShow() {
        super._OnShow();
        // your code
        this.ui.m_btn_back.onClick(this, this._OnClickBack);
        this.ui.m_btn_add.onClick(this, this._OnClickAdd);
        this.ui.m_text_total.text = "场景正在初始化";
        this._CreateScene();
    }

    private _sampleObj: Laya.Sprite3D;
    private _xBorder = [-10, 10];
    private _zBorder = [-10, 30];
    private _cacheAnims: Laya.Sprite3D[];
    private _fakeObj: Laya.Sprite3D;

    private async _CreateScene() {
        this._fakeObj = new Laya.Sprite3D("fake_obj");
        GlobalUnit.s3d.addChild(this._fakeObj);
        await LTRes.LoadAsync(ResDefine.FixPath("default_light"));
        await LTRes.LoadAsync(ResDefine.FixPath("main_camera"));
        await LTRes.LoadAsync(ResDefine.FixPath("floor"));
        await LTRes.LoadAsync(ResDefine.FixPath("player_01"));
        await LTRes.LoadAsync(ResDefine.FixPath("pengzhuang"));
        this._fakeObj.addChild(LTRes.Get(ResDefine.FixPath("default_light"), true));
        this._fakeObj.addChild(LTRes.Get(ResDefine.FixPath("main_camera"), true));
        this._fakeObj.addChild(LTRes.Get(ResDefine.FixPath("floor"), true));
        this._sampleObj = this._fakeObj.addChild(LTRes.Get(ResDefine.FixPath("player_01"), true)) as Laya.Sprite3D;
        this._cacheAnims = [];

        this.ui.m_text_total.text = "当前总数量:" + (this._cacheAnims.length + 1);
    }

    private _OnClickAdd() {
        let addStr = this.ui.m_text_input.text;
        let addValue = parseInt(addStr);
        if (addValue > 0) {
            for (let i = 0; i < addValue; ++i) {
                let genPos = this._GetGenPos();
                let instObj = this._sampleObj.clone() as Laya.Sprite3D;
                this._cacheAnims.push(instObj);
                this._fakeObj.addChild(instObj);
                instObj.transform.position = genPos;
            }
        } else if (addValue < 0) {
            addValue = -addValue;
            for (let i = 0; i < addValue && this._cacheAnims.length > 0; ++i) {
                let popObj = this._cacheAnims.pop();
                popObj.destroy();
            }
        }

        this.ui.m_text_total.text = "当前总数量:" + (this._cacheAnims.length + 1);
    }

    private _GetGenPos(): Laya.Vector3 {
        let xCount = this._xBorder[1] - this._xBorder[0];
        let zIndex = Math.floor(this._cacheAnims.length / xCount);
        let xIndex = this._cacheAnims.length % xCount;
        return new Laya.Vector3(xIndex + this._xBorder[0], 0, this._zBorder[0] + zIndex);
    }

    private _OnClickBack() {
        this.Hide();
    }

    _OnHide() {
        this._fakeObj.destroy();
    }

}