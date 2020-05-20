/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_toggle_01 from "./UI_btn_toggle_01";

export default class UI_view_set extends fgui.GComponent {

	public m_btn_close:fgui.GButton;
	public m_toggle_music:UI_btn_toggle_01;
	public m_toggle_shake:UI_btn_toggle_01;
	public static URL:string = "ui://75kiu87kbg002b";

	public static createInstance():UI_view_set {
		return <UI_view_set>(fgui.UIPackage.createObject("LTGame", "view_set"));
	}

	protected onConstruct():void {
		this.m_btn_close = <fgui.GButton>(this.getChildAt(2));
		this.m_toggle_music = <UI_btn_toggle_01>(this.getChildAt(5));
		this.m_toggle_shake = <UI_btn_toggle_01>(this.getChildAt(6));
	}
}