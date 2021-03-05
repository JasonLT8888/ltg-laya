/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_zhuazi from "./LTG_UI_view_zhuazi";

export default class LTG_UI_view_zww extends fgui.GComponent {

	public m_btn_push:fgui.GButton;
	public m_progress_push:fgui.GProgressBar;
	public m_view_pick:LTG_UI_view_zhuazi;
	public m_text_time:fgui.GTextField;
	public m_img_hand:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://hbq27te38gel29";

	public static createInstance():LTG_UI_view_zww {
		return <LTG_UI_view_zww>(fgui.UIPackage.createObject("LTCom", "view_zww"));
	}

	protected onConstruct():void {
		this.m_btn_push = <fgui.GButton>(this.getChildAt(0));
		this.m_progress_push = <fgui.GProgressBar>(this.getChildAt(1));
		this.m_view_pick = <LTG_UI_view_zhuazi>(this.getChildAt(4));
		this.m_text_time = <fgui.GTextField>(this.getChildAt(7));
		this.m_img_hand = <fgui.GImage>(this.getChildAt(8));
		this.m_t0 = this.getTransitionAt(0);
	}
}