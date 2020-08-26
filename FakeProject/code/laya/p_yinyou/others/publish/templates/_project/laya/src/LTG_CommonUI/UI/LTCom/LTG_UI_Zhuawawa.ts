/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_zww from "./LTG_UI_view_zww";

export default class LTG_UI_Zhuawawa extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_zww;

	public static URL:string = "ui://hbq27te38gel1u";

	public static createInstance():LTG_UI_Zhuawawa {
		return <LTG_UI_Zhuawawa><any>(fgui.UIPackage.createObject("LTCom","Zhuawawa"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_zww><any>(this.getChildAt(1));
	}
}