/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_roll from "./LTG_UI_view_roll";
import LTG_UI_btn_refuse from "./LTG_UI_btn_refuse";

export default class LTG_UI_Roll extends fgui.GComponent {

	public m_plat:fgui.Controller;
	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_roll;
	public m_btn_close:LTG_UI_btn_refuse;
	public m_btn_no:fgui.GButton;

	public static URL:string = "ui://hbq27te38gel3k";

	public static createInstance():LTG_UI_Roll {
		return <LTG_UI_Roll><any>(fgui.UIPackage.createObject("LTCom","Roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_plat = this.getControllerAt(0);
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_roll><any>(this.getChildAt(1));
		this.m_btn_close = <LTG_UI_btn_refuse><any>(this.getChildAt(2));
		this.m_btn_no = <fgui.GButton><any>(this.getChildAt(3));
	}
}