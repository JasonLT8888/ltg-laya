/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_toggle_01 from "./LTG_UI_toggle_01";

export default class LTG_UI_view_set extends fgui.GComponent {

	public m_toggle_music:LTG_UI_toggle_01;
	public m_toggle_shake:LTG_UI_toggle_01;
	public m_btn_code:fgui.GButton;
	public m_btn_close:fgui.GButton;
	public static URL:string = "ui://hbq27te38gelo";

	public static createInstance():LTG_UI_view_set {
		return <LTG_UI_view_set>(fgui.UIPackage.createObject("LTCom", "view_set"));
	}

	protected onConstruct():void {
		this.m_toggle_music = <LTG_UI_toggle_01>(this.getChildAt(4));
		this.m_toggle_shake = <LTG_UI_toggle_01>(this.getChildAt(5));
		this.m_btn_code = <fgui.GButton>(this.getChildAt(10));
		this.m_btn_close = <fgui.GButton>(this.getChildAt(11));
	}
}