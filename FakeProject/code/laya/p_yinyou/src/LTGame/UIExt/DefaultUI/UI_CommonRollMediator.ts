// import { ECheckState } from "../../../SDK/common/ECheckState";
// import LTSDK from "../../../SDK/LTSDK";
// import Awaiters from "../../Async/Awaiters";
// import CommonSaveData from "../../Commom/CommonSaveData";
// import MathEx from "../../LTUtils/MathEx";
// import LTPlatform from "../../Platform/LTPlatform";
// import BaseUIMediator from "../FGui/BaseUIMediator";
// import LTUI from "../LTUI";
// import RollOpenData from "./Data/RollOpenData"; 
// import UI_CommonRoll from "./UI/LTGame/UI_CommonRoll";
// import UI_view_item_roll from "./UI/LTGame/UI_view_item_roll";

// export default class UI_CommonRollMediator extends BaseUIMediator<UI_CommonRoll> {

//     private static _instance: UI_CommonRollMediator;
//     isFake: boolean;
//     public static get instance(): UI_CommonRollMediator {
//         if (this._instance == null) {
//             this._instance = new UI_CommonRollMediator();
//             this._instance._classDefine = UI_CommonRoll;
//         }
//         return this._instance;
//     }

//     private _openData: RollOpenData;
//     private _randomIndex: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
//     private _unitDegree: number = 360 / 8;
//     private _rotateTime: number = 4 * 1000;
//     private _rotateCount: number = 5;
//     private _cacheDegree: number;
//     private _cacheIndex: number;

//     _OnShow() {
//         super._OnShow();
//         // your code
//         this.isFake = false;
//         this._openData = new RollOpenData();
//         if (this._openParam == null) {
//             console.error("请传入RollOpenData用于初始化大转盘界面");
//         } else {
//             for (let key in this._openParam) {
//                 this._openData[key] = this._openParam[key];
//             }
//         }
//         this.ui.m_rewardPannel.visible = false;
//         if (LTSDK.instance.checkState == ECheckState.NoGame) {
//             this.ui.m_rewardPannel.m_c1.selectedIndex = 1;
//         }
//         this.ui.m_btn_roll.m_btn_type.selectedIndex = CommonSaveData.instance.freeRollCount > 0 ? 3 : 0;
//         this.ui.m_btn_close.onClick(this, this._OnClickClose);
//         this.ui.m_btn_roll.onClick(this, this._OnClickRoll);
//         this.ui.m_rewardPannel.m_btn_get.onClick(this, this.onGetReward)
//         for (let i = 0; i < 8; ++i) {
//             let getUI = this.ui.m_view_roll.getChildAt(i + 1) as UI_view_item_roll;
//             if (this._openData.iconList[i]) {
//                 getUI.m_icon.url = this._openData.iconList[i];
//             } else {
//                 getUI.m_icon.url = 'ui://75kiu87kbg002p';
//                 this._openData.iconList[i] = 'ui://75kiu87kbg002p';
//             }
//             if (this._openData.titleList[i]) {
//                 getUI.m_text_title.text = this._openData.titleList[i];
//             } else {
//                 getUI.m_text_title.text = "测试数据" + i;
//                 this._openData.titleList[i] = "测试数据" + i;
//             }
//         }
//         LTPlatform.instance.ShowBannerAd();
//     }
//     onGetReward() {
//         // if (LTSDK.instance.checkState == ECheckState.NoGame) {
//         //     this._fakeGet();
//         // } else {
//         //     this.onRewardGot();
//         // }
//         if (this.isFake) {
//             this.onRewardGot();
//             this._OnClickRoll();
//             return;
//         }
//         if (LTSDK.instance.checkState == ECheckState.NoGame) {
//             this._fakeGet();
//         } else {
//             this.onRewardGot();
//         }
//     }
//     private onRewardGot() {
//         this.ui.m_view_roll.rotation = this._cacheDegree;
//         this.ui.m_rewardPannel.visible = false;
//         if (this._openData.onRolled) {
//             this._openData.onRolled.runWith([this._cacheIndex, this.ui.m_pointer]);
//         }
//         this.isFake = false;
//     }

//     async _fakeGet() {
//         this.isFake = true;
//         await Awaiters.Seconds(1);
//         this.onRewardGot();
//     }

//     private async _OnClickRoll() {
//         if (CommonSaveData.instance.freeRollCount > 0) {
//             CommonSaveData.instance.freeRollCount--;
//             CommonSaveData.SaveToDisk();
//             this._DoRoll();
//             return;
//         }
//         let result = await LTPlatform.instance.ShowRewardVideoAdAsync();
//         if (result) {
//             this._DoRoll();
//         } else {
//             LTUI.Toast("跳过视频无法获得奖励");
//         }
//     }

//     private _DoRoll() {
//         LTUI.LockScreen();
//         this._cacheIndex = MathEx.RandomFromWithWeight(this._randomIndex, this._openData.rollWeight);
//         let centerDegree = this._cacheIndex * this._unitDegree;
//         this._cacheDegree = centerDegree + MathEx.Random(-this._unitDegree, this._unitDegree) * 0.2;
//         let targetDegree = 360 * this._rotateCount + this._cacheDegree;
//         Laya.Tween.to(this.ui.m_view_roll, { rotation: targetDegree }, this._rotateTime, Laya.Ease.quadOut,
//             Laya.Handler.create(this, this._OnRollEnd));
//     }

//     private _OnRollEnd() {
//         this.ui.m_rewardPannel.visible = true;
//         this.ui.m_rewardPannel.m_img.url = this._openData.iconList[this._cacheIndex];
//         this.ui.m_rewardPannel.m_txt_reward.text = this._openData.titleList[this._cacheIndex];
//         this.ui.m_btn_roll.m_btn_type.selectedIndex = CommonSaveData.instance.freeRollCount > 0 ? 3 : 0;
//         LTUI.UnlockScreen();
//     }

//     private _OnClickClose() {
//         this.Hide();
//     }
//     _OnHide() {
//         LTPlatform.instance.HideBannerAd();
//     }
// }