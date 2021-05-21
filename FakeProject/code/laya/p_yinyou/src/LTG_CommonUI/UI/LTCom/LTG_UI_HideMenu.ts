/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_hidemenu from "./LTG_UI_view_hidemenu";

export default class LTG_UI_HideMenu extends fgui.GComponent {

	public m_btn_show:fgui.GButton;
	public m_view_menu:LTG_UI_view_hidemenu;
	public m_anim_show_menu:fgui.Transition;
	public m_anim_hide_menu:fgui.Transition;
	public static URL:string = "ui://hbq27te38gel60";

	public static createInstance():LTG_UI_HideMenu {
		return <LTG_UI_HideMenu>(fgui.UIPackage.createObject("LTCom", "HideMenu"));
	}

	protected onConstruct():void {
		this.m_btn_show = <fgui.GButton>(this.getChildAt(0));
		this.m_view_menu = <LTG_UI_view_hidemenu>(this.getChildAt(1));
		this.m_anim_show_menu = this.getTransitionAt(0);
		this.m_anim_hide_menu = this.getTransitionAt(1);
	}
}