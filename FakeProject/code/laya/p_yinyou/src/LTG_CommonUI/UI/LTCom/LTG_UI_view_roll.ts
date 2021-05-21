/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_roll_panel from "./LTG_UI_view_roll_panel";

export default class LTG_UI_view_roll extends fgui.GComponent {

	public m_view_roll:LTG_UI_view_roll_panel;
	public m_progress_supper:fgui.GProgressBar;
	public m_btn_watchad:fgui.GButton;
	public m_btn_freeget:fgui.GButton;
	public m_text_notice:fgui.GTextField;
	public static URL:string = "ui://hbq27te38gel42";

	public static createInstance():LTG_UI_view_roll {
		return <LTG_UI_view_roll>(fgui.UIPackage.createObject("LTCom", "view_roll"));
	}

	protected onConstruct():void {
		this.m_view_roll = <LTG_UI_view_roll_panel>(this.getChildAt(0));
		this.m_progress_supper = <fgui.GProgressBar>(this.getChildAt(3));
		this.m_btn_watchad = <fgui.GButton>(this.getChildAt(5));
		this.m_btn_freeget = <fgui.GButton>(this.getChildAt(6));
		this.m_text_notice = <fgui.GTextField>(this.getChildAt(7));
	}
}