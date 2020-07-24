import { ECheckState } from "../../../SDK/common/ECheckState";
import LTSDK from "../../../SDK/LTSDK";
import MathEx from "../../LTUtils/MathEx";
import { EPlatformType } from "../../Platform/EPlatformType";
import LTPlatform from "../../Platform/LTPlatform";
import BaseUIMediator from "../FGui/BaseUIMediator";
import LTUI from "../LTUI";
import TrySkinOpenData from "./Data/TrySkinOpenData";
import UI_TrySkin from "./UI/LTGame/UI_TrySkin";



export default class UI_TrySkinMediator extends BaseUIMediator<UI_TrySkin>{
    private static _instance;
    needPay: boolean = false;
    private _openData: TrySkinOpenData;
    public static get instance(): UI_TrySkinMediator {
        if (this._instance == null) {
            this._instance = new UI_TrySkinMediator();
            this._instance._classDefine = UI_TrySkin;
        }

        return this._instance;
    }
    _OnShow() {
        super._OnShow();
        this._openData = new TrySkinOpenData();
        if (this._openParam == null) {
            console.error("请传入TrySkinOpenData用于初始化皮肤试用界面");
        } else {
            for (let key in this._openParam) {
                this._openData[key] = this._openParam[key];
            }
        }
        this.Init();
        //LTPlatform.instance.ShowBannerAd();
    }
    Init() {
        switch (LTSDK.instance.checkState) {
            case ECheckState.InCheck:
            case ECheckState.Normal:
            default:
                this.ui.m_check_type.selectedIndex = 1;
                this.ui.m_btn_no.title = '不了，谢谢';
                this.ui.m_btn_watch.title = "点击试用";
                if (LTPlatform.instance.platform == EPlatformType.Oppo) {
                    this.ui.m_check_type.selectedIndex = 1;
                    this.ui.m_btn_pay.m_select.selectedIndex = 0;
                    this.ui.m_btn_no.title = '不了，谢谢';
                    this.ui.m_btn_watch.title = "点击试用";
                    this.ui.m_oppo.selectedIndex = 1;
                }
                break;
            case ECheckState.NoGame:
                this.ui.m_check_type.selectedIndex = 2;
                this.ui.m_btn_no.title = '试用，谢谢';
                break;
        }
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_btn_watch.onClick(this, this.onVideoClick);
        this.ui.m_btn_try.onClick(this, this.onVideoClick);
        this.ui.m_btn_pay.onClick(this, this._onToggleClick);
        this.ui.m_btn_no.onClick(this, this._onClickNo);
        if (this._openData && this._openData.iconPaths) {
            this._ui.m_icon.url = this._openData.iconPaths[0];
        }


    }
    _onClickNo() {
        this.Hide();
        // if (LTSDK.instance.checkState == ECheckState.InCheck || LTPlatform.instance.platform == EPlatformType.Oppo) {
        // } else {
        //     if (this.ui.m_btn_pay.m_select.selectedIndex == 1) {
        //         this.onVideoClick();
        //     } else {
        //         this.Hide();
        //     }
        // }
    }
    _onToggleClick() {
        if (LTSDK.instance.checkState == ECheckState.InCheck) {
            // this.ui.m_btn_pay
            return;
        } else if (LTSDK.instance.checkState == ECheckState.Normal) {
            this.ui.m_btn_pay.m_select.selectedIndex = (this.ui.m_btn_pay.m_select.selectedIndex + 1) % 2;
            return;
        }
        let rand = MathEx.RandomInt(0, 100);
        this.needPay = rand < LTSDK.instance.payRate;
        if (this.needPay) {
            this.onVideoClick();
        } else {
            this.ui.m_btn_pay.m_select.selectedIndex = (this.ui.m_btn_pay.m_select.selectedIndex + 1) % 2;
            this.ui.m_btn_no.title = this.ui.m_btn_pay.m_select.selectedIndex == 1 ? '试用，谢谢' : '不用，谢谢';
        }

    }
    async onVideoClick() {
        let res = await LTPlatform.instance.ShowRewardVideoAdAsync();
        if (res) {
            if (this._openData && this._openData.onClose) {
                this._openData.onClose.runWith(0);
                this.Hide();
            }
        } else {
            LTUI.Toast('完整观看视频可获得奖励');
        }
    }
    _OnHide() {

    }
}