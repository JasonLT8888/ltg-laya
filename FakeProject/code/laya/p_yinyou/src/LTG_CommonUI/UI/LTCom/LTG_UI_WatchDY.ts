/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_watchdy from "./LTG_UI_view_watchdy";

export default class LTG_UI_WatchDY extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_watchdy;
	public m_btn_close:fgui.GButton;
	public m_anim_enter:fgui.Transition;
	public static URL:string = "ui://hbq27te38gel46";

	public static createInstance():LTG_UI_WatchDY {
		return <LTG_UI_WatchDY>(fgui.UIPackage.createObject("LTCom", "WatchDY"));
	}

	protected onConstruct():void {
		this.m_img_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_watchdy>(this.getChildAt(1));
		this.m_btn_close = <fgui.GButton>(this.getChildAt(2));
		this.m_anim_enter = this.getTransitionAt(0);
	}
}