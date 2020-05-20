/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_sharegames_big from "./UI_view_sharegames_big";

export default class UI_CommonEndLose extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_view_othergames:UI_view_sharegames_big;
	public m_text_str:fgui.GTextField;
	public m_btn_no:fgui.GButton;
	public m_btn_watchad:fgui.GButton;
	public m_anim_enter:fgui.Transition;
	public static URL:string = "ui://75kiu87krk935i";

	public static createInstance():UI_CommonEndLose {
		return <UI_CommonEndLose>(fgui.UIPackage.createObject("LTGame", "CommonEndLose"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_view_othergames = <UI_view_sharegames_big>(this.getChildAt(2));
		this.m_text_str = <fgui.GTextField>(this.getChildAt(3));
		this.m_btn_no = <fgui.GButton>(this.getChildAt(4));
		this.m_btn_watchad = <fgui.GButton>(this.getChildAt(5));
		this.m_anim_enter = this.getTransitionAt(0);
	}
}