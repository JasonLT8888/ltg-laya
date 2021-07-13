// import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
// import LTG_UI_HideMenu from "../UI/LTCom/LTG_UI_HideMenu";
// import { LTG_Com_NoticeData } from "../Data/LTG_Com_NoticeData";
// import { LTG_Com_AddShortcutData } from "../Data/LTG_Com_AddShortcutData";
// import { LTG_Com_FindGameData } from "../Data/LTG_Com_FindGameData";
// import { GameConst } from "../../script/config/GameConst";
// import LTUI from "../../LTGame/UIExt/LTUI";

// export default class LTG_UI_HideMenuMediator extends BaseUIMediator<LTG_UI_HideMenu> {

//     private static _instance: LTG_UI_HideMenuMediator;
//     public static get instance(): LTG_UI_HideMenuMediator {
//         if (this._instance == null) {
//             this._instance = new LTG_UI_HideMenuMediator();
//             this._instance._classDefine = LTG_UI_HideMenu;
//         }
//         return this._instance;
//     }

//     _OnShow() {
//         super._OnShow();
//         // your code
//         this.ui.m_view_menu.visible = false;
//         this.ui.m_btn_show.onClick(this, this._OnClickShow);
//         this.ui.m_view_menu.m_btn_hide.onClick(this, this._OnClickHide);
//         this.ui.m_view_menu.m_btn_notice.onClick(this, this._OnClickNotice);
//         this.ui.m_view_menu.m_btn_addshortcut.onClick(this, this._OnClickAddShortcut);
//         this.ui.m_view_menu.m_btn_findgame.onClick(this, this._OnClickFindGame);
//     }

//     private _OnClickShow() {
//         LTUI.TrigerBtnClick();
//         this.ui.m_anim_show_menu.play();
//     }

//     private _OnClickHide() {
//         LTUI.TrigerBtnClick();
//         this.ui.m_anim_hide_menu.play();
//     }

//     private _OnClickNotice() {
//         LTUI.TrigerBtnClick();
//         let data = new LTG_Com_NoticeData();
//         data.content = GameConst.data.notice_str;
//         data.Send();
//     }

//     private _OnClickAddShortcut() {
//         LTUI.TrigerBtnClick();
//         let data = new LTG_Com_AddShortcutData();
//         data.Send();
//     }

//     private _OnClickFindGame() {
//         LTUI.TrigerBtnClick();
//         let data = new LTG_Com_FindGameData();
//         data.Send();
//     }

// }