/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_btn_refuse from "./LTG_UI_btn_refuse";

export default class LTG_UI_EggDetail extends fgui.GComponent {

	public m_btn_ok:LTG_UI_btn_refuse;
	public m_txt_info:fgui.GTextField;
	public m_display:fgui.GLoader;

	public static URL:string = "ui://hbq27te3x4fgf6";

	public static createInstance():LTG_UI_EggDetail {
		return <LTG_UI_EggDetail><any>(fgui.UIPackage.createObject("LTCom","EggDetail"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_ok = <LTG_UI_btn_refuse><any>(this.getChildAt(4));
		this.m_txt_info = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_display = <fgui.GLoader><any>(this.getChildAt(6));
	}
}