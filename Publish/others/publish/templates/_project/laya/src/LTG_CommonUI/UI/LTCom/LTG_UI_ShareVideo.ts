/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_sharevideo from "./LTG_UI_view_sharevideo";

export default class LTG_UI_ShareVideo extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_sharevideo;

	public static URL:string = "ui://hbq27te38gel4h";

	public static createInstance():LTG_UI_ShareVideo {
		return <LTG_UI_ShareVideo><any>(fgui.UIPackage.createObject("LTCom","ShareVideo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_sharevideo><any>(this.getChildAt(1));
	}
}