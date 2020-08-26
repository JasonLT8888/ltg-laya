/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_toggle_02 from "./LTG_UI_toggle_02";

export default class LTG_UI_view_watchad_progress extends fgui.GComponent {

	public m_toggle_01:LTG_UI_toggle_02;
	public m_toggle_02:LTG_UI_toggle_02;
	public m_toggle_03:LTG_UI_toggle_02;

	public static URL:string = "ui://hbq27te38gel3d";

	public static createInstance():LTG_UI_view_watchad_progress {
		return <LTG_UI_view_watchad_progress><any>(fgui.UIPackage.createObject("LTCom","view_watchad_progress"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_toggle_01 = <LTG_UI_toggle_02><any>(this.getChildAt(1));
		this.m_toggle_02 = <LTG_UI_toggle_02><any>(this.getChildAt(3));
		this.m_toggle_03 = <LTG_UI_toggle_02><any>(this.getChildAt(4));
	}
}