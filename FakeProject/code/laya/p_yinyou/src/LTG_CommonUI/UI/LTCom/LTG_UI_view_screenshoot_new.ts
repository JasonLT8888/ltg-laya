/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_normal_btn from "./LTG_UI_normal_btn";

export default class LTG_UI_view_screenshoot_new extends fgui.GComponent {

	public m_img_display:fgui.GGraph;
	public m_view_play:fgui.GComponent;
	public m_btn_share:LTG_UI_normal_btn;
	public m_btn_close:LTG_UI_normal_btn;

	public static URL:string = "ui://hbq27te3gjy1c3";

	public static createInstance():LTG_UI_view_screenshoot_new {
		return <LTG_UI_view_screenshoot_new><any>(fgui.UIPackage.createObject("LTCom","view_screenshoot_new"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_display = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view_play = <fgui.GComponent><any>(this.getChildAt(2));
		this.m_btn_share = <LTG_UI_normal_btn><any>(this.getChildAt(3));
		this.m_btn_close = <LTG_UI_normal_btn><any>(this.getChildAt(4));
	}
}