/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_normal_btn from "./LTG_UI_normal_btn";

export default class LTG_UI_RanList extends fgui.GComponent {

	public m_score_input:fgui.GTextInput;
	public m_btn_report:LTG_UI_normal_btn;
	public m_btn_getweekly:LTG_UI_normal_btn;
	public m_btn_getdaily:LTG_UI_normal_btn;
	public m_list:fgui.GList;
	public static URL:string = "ui://hbq27te3e6qp8a";

	public static createInstance():LTG_UI_RanList {
		return <LTG_UI_RanList>(fgui.UIPackage.createObject("LTCom", "RanList"));
	}

	protected onConstruct():void {
		this.m_score_input = <fgui.GTextInput>(this.getChildAt(0));
		this.m_btn_report = <LTG_UI_normal_btn>(this.getChildAt(1));
		this.m_btn_getweekly = <LTG_UI_normal_btn>(this.getChildAt(2));
		this.m_btn_getdaily = <LTG_UI_normal_btn>(this.getChildAt(3));
		this.m_list = <fgui.GList>(this.getChildAt(4));
	}
}