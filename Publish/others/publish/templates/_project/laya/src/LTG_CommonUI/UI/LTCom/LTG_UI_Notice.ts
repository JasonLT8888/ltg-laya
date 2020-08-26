/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_notice from "./LTG_UI_view_notice";

export default class LTG_UI_Notice extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_notice;

	public static URL:string = "ui://hbq27te38gel10";

	public static createInstance():LTG_UI_Notice {
		return <LTG_UI_Notice><any>(fgui.UIPackage.createObject("LTCom","Notice"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_notice><any>(this.getChildAt(1));
	}
}