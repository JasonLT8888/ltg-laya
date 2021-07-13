// import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
// import LTG_UI_FindGame from "../UI/LTCom/LTG_UI_FindGame";
// import { LTG_Com_FindGameData } from "../Data/LTG_Com_FindGameData";
// import StringEx from "../../LTGame/LTUtils/StringEx";
// import LTUI from "../../LTGame/UIExt/LTUI";

// export default class LTG_UI_FindGameMediator extends BaseUIMediator<LTG_UI_FindGame> {

//     private static _instance: LTG_UI_FindGameMediator;
//     public static get instance(): LTG_UI_FindGameMediator {
//         if (this._instance == null) {
//             this._instance = new LTG_UI_FindGameMediator();
//             this._instance._classDefine = LTG_UI_FindGame;
//         }
//         return this._instance;
//     }

//     _OnShow() {
//         super._OnShow();
//         // your code
//         let openData = this._openParam as LTG_Com_FindGameData;
//         if (openData == null) {
//             throw new Error("请调用LTG_Com_FindGameData进行界面打开操作");
//         }

//         if (!StringEx.IsNullOrEmpty(openData.icon_url)) {
//             this.ui.m_view.m_loader_icon.url = openData.icon_url;
//         }

//         this.ui.m_view.m_btn_ok.onClick(this, this._OnClickClose);
//         this.ui.m_view.m_btn_close.onClick(this, this._OnClickClose);
//     }

//     private _OnClickClose() {
//         LTUI.TrigerBtnClick();
//         this.Hide();
//     }

// }