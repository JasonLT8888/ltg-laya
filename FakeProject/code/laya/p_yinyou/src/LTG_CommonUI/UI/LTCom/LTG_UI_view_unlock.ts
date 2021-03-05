/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_btn_unlock_ad from "./LTG_UI_btn_unlock_ad";

export default class LTG_UI_view_unlock extends fgui.GComponent {

	public m_btn_no:fgui.GButton;
	public m_btn_unlock:LTG_UI_btn_unlock_ad;
	public m_img_display:fgui.GGraph;
	public m_loader_title:fgui.GLoader;
	public static URL:string = "ui://hbq27te3n2g172";

	public static createInstance():LTG_UI_view_unlock {
		return <LTG_UI_view_unlock>(fgui.UIPackage.createObject("LTCom", "view_unlock"));
	}

	protected onConstruct():void {
		this.m_btn_no = <fgui.GButton>(this.getChildAt(1));
		this.m_btn_unlock = <LTG_UI_btn_unlock_ad>(this.getChildAt(2));
		this.m_img_display = <fgui.GGraph>(this.getChildAt(3));
		this.m_loader_title = <fgui.GLoader>(this.getChildAt(4));
	}
}