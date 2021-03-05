/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_iconVdieo from "./LTG_UI_iconVdieo";

export default class LTG_UI_videoItem extends fgui.GComponent {

	public m_icon:LTG_UI_iconVdieo;
	public m_nickname:fgui.GTextField;
	public m_digs:fgui.GTextField;
	public static URL:string = "ui://hbq27te3cx1n7y";

	public static createInstance():LTG_UI_videoItem {
		return <LTG_UI_videoItem>(fgui.UIPackage.createObject("LTCom", "videoItem"));
	}

	protected onConstruct():void {
		this.m_icon = <LTG_UI_iconVdieo>(this.getChildAt(2));
		this.m_nickname = <fgui.GTextField>(this.getChildAt(5));
		this.m_digs = <fgui.GTextField>(this.getChildAt(6));
	}
}