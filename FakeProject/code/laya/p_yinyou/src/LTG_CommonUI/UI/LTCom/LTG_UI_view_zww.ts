/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_zhuazi from "./LTG_UI_view_zhuazi";

export default class LTG_UI_view_zww extends fgui.GComponent {

	public m_btn_push:fgui.GButton;
	public m_progress_push:fgui.GProgressBar;
	public m_view_pick:LTG_UI_view_zhuazi;
	public m_text_time:fgui.GTextField;

	public static URL:string = "ui://hbq27te38gel29";

	public static createInstance():LTG_UI_view_zww {
		return <LTG_UI_view_zww><any>(fgui.UIPackage.createObject("LTCom","view_zww"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_push = <fgui.GButton><any>(this.getChildAt(0));
		this.m_progress_push = <fgui.GProgressBar><any>(this.getChildAt(2));
		this.m_view_pick = <LTG_UI_view_zhuazi><any>(this.getChildAt(5));
		this.m_text_time = <fgui.GTextField><any>(this.getChildAt(8));
	}
}