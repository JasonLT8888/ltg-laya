/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_notice from "./LTG_UI_view_notice";

export default class LTG_UI_Notice extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_notice;
	public static URL:string = "ui://hbq27te38gel10";

	public static createInstance():LTG_UI_Notice {
		return <LTG_UI_Notice>(fgui.UIPackage.createObject("LTCom", "Notice"));
	}

	protected onConstruct():void {
		this.m_img_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_notice>(this.getChildAt(1));
	}
}