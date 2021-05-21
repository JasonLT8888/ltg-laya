/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_set from "./LTG_UI_view_set";

export default class LTG_UI_Set extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_set;
	public static URL:string = "ui://hbq27te38gel1";

	public static createInstance():LTG_UI_Set {
		return <LTG_UI_Set>(fgui.UIPackage.createObject("LTCom", "Set"));
	}

	protected onConstruct():void {
		this.m_img_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_set>(this.getChildAt(1));
	}
}