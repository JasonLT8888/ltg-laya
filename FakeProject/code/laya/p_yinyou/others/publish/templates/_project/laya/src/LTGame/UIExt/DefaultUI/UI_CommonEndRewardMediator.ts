// import BaseUIMediator from "../FGui/BaseUIMediator"; 
// import EndRewardOpenData from "./Data/EndRewardOpenData";
// import LTPlatform from "../../Platform/LTPlatform";
// import LTUI from "../LTUI";
// import LTSDK from "../../../SDK/LTSDK";
// import { ECheckState } from "../../../SDK/common/ECheckState";
// import CommonSaveData from "../../Commom/CommonSaveData";

// export default class UI_CommonEndRewardMediator extends BaseUIMediator<UI_CommonEndReward> {

//     private static _instance: UI_CommonEndRewardMediator;
//     public static get instance(): UI_CommonEndRewardMediator {
//         if (this._instance == null) {
//             this._instance = new UI_CommonEndRewardMediator();
//             this._instance._classDefine = UI_CommonEndReward;
//         }
//         return this._instance;
//     }

//     private _openData: EndRewardOpenData;

//     checkFlag: boolean = true;
//     private _isChecked: boolean;

//     private get _needWatchAd(): boolean {
//         switch (LTSDK.instance.checkState) {
//             case ECheckState.NoGame:
//                 if (CommonSaveData.instance.endRewardMissMode == 0) {
//                     return this._isChecked;
//                 } else {
//                     return !this._isChecked;
//                 }
//             default:
//                 return this._isChecked;
//         }
//     }

//     _OnShow() {
//         super._OnShow();
//         // your code
//         this.checkFlag = CommonSaveData.instance.checkFlag;
//         this._openData = new EndRewardOpenData();
//         if (this._openParam == null) {
//             console.error("请传入EndRewardOpenData用于初始化结算分享界面");
//         } else {
//             for (let key in this._openParam) {
//                 this._openData[key] = this._openParam[key];
//             }
//         }


//         this._openData.enableShowGames = LTPlatform.instance.isSupportJumpOther && this._openData.enableShowGames;
//         this.ui.m_btn_get.m_btn_type.selectedIndex = 3;
//         if (LTSDK.instance.checkState == ECheckState.NoGame) {
//             this.changeCheck();
//         } else {
//             this.ui.m_btn_toggle_check.m_selected.selectedIndex = 0;
//         }

//         if (this._openData.showText != null) {
//             this.ui.m_text_str.text = this._openData.showText;
//         }
//         if (this._openData.iconPath != null) {
//             this.ui.m_icon_reward.url = this._openData.iconPath;
//         }
//         this.ui.m_text_add.text = "+" + this._openData.rewardCount;

//         this.ui.m_btn_get.onClick(this, this._OnClickNormalGet);

//         this.ui.m_btn_toggle_check.onClick(this, this._OnClickToggle);

//         LTPlatform.instance.ShowBannerAd();
//     }

//     private _OnClickToggle() {
//         this.ui.m_btn_toggle_check.m_selected.selectedIndex = (this.ui.m_btn_toggle_check.m_selected.selectedIndex + 1) % 2;
//     }
//     changeCheck() {
//         if (LTSDK.instance.checkState == ECheckState.NoGame) {
//             this.ui.m_btn_toggle_check.title = CommonSaveData.instance.checkFlag ? '观看五倍奖励视频' : '不看五倍奖励视频';
//             this.ui.m_btn_toggle_check.m_selected.selectedIndex = CommonSaveData.instance.checkFlag ? 1 : 0;
//         }
//     }



//     private _OnClickBack() {
//         if (this._openData.onClose) {
//             this._openData.onClose.runWith([2, this.ui.m_icon_reward]);
//         }
//         this.Hide();
//     }
//     private async _OnClickNormalGet() {
//         if (LTSDK.instance.checkState != ECheckState.NoGame) {
//             if (this.ui.m_btn_toggle_check.m_selected.selectedIndex == 1) {
//                 await this._OnClickDoubleGet();
//             } else {
//                 this.noPayClose();
//             }
//         } else {
//             if (this.ui.m_btn_toggle_check.m_selected.selectedIndex == 1) {
//                 if (this.checkFlag) {
//                     await this._OnClickDoubleGet();
//                 } else {
//                     this.noPayClose();
//                 }
//             } else {
//                 if (this.checkFlag) {
//                     this.noPayClose();
//                 } else {
//                     await this._OnClickDoubleGet();
//                 }
//             }
//         }
//     }


//     private noPayClose() {
//         if (this._openData.onClose) {
//             this._openData.onClose.runWith([0, this.ui.m_icon_reward]);
//         }
//         this.checkFlag = !this.checkFlag;
//         this.Hide();
//     }

//     private async _OnClickDoubleGet() {
//         let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
//         if (result) {
//             if (this._openData.onClose) {
//                 this._openData.onClose.runWith([1, this.ui.m_icon_reward]);
//             }
//             this.Hide();
//         } else {
//             LTUI.Toast("跳过广告无法获得奖励");
//         }
//     }

//     _OnHide() {
//         LTPlatform.instance.HideBannerAd();
//         if (LTSDK.instance.checkState == ECheckState.NoGame) {
//             CommonSaveData.instance.checkFlag = this.checkFlag;
//             CommonSaveData.SaveToDisk();
//         }
//     }
// }