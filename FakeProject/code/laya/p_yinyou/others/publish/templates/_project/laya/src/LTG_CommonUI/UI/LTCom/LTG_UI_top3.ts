/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_iconVdieo from "./LTG_UI_iconVdieo";

export default class LTG_UI_top3 extends fgui.GComponent {

	public m_bg:fgui.GLoader;
	public m_icon:LTG_UI_iconVdieo;
	public m_rank:fgui.GLoader;
	public m_digs:fgui.GTextField;
	public m_nickname:fgui.GTextField;
	public static URL:string = "ui://hbq27te3cx1n7n";

	public static createInstance():LTG_UI_top3 {
		return <LTG_UI_top3>(fgui.UIPackage.createObject("LTCom", "top3"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GLoader>(this.getChildAt(0));
		this.m_icon = <LTG_UI_iconVdieo>(this.getChildAt(2));
		this.m_rank = <fgui.GLoader>(this.getChildAt(4));
		this.m_digs = <fgui.GTextField>(this.getChildAt(5));
		this.m_nickname = <fgui.GTextField>(this.getChildAt(7));
	}
}