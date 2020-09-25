/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_roll from "./LTG_UI_view_roll";

export default class LTG_UI_Roll extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_roll;
	public m_btn_close:fgui.GButton;

	public static URL:string = "ui://hbq27te38gel3k";

	public static createInstance():LTG_UI_Roll {
		return <LTG_UI_Roll><any>(fgui.UIPackage.createObject("LTCom","Roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_roll><any>(this.getChildAt(1));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(2));
	}
}