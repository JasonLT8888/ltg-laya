/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_normal from "./UI_btn_normal";

export default class UI_OpenAds extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_centerList:fgui.GList;
	public m_btn_close:UI_btn_normal;

	public static URL:string = "ui://75kiu87k9vu5ag";

	public static createInstance():UI_OpenAds {
		return <UI_OpenAds><any>(fgui.UIPackage.createObject("LTGame","OpenAds"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_centerList = <fgui.GList><any>(this.getChildAt(2));
		this.m_btn_close = <UI_btn_normal><any>(this.getChildAt(3));
	}
}