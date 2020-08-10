/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_common_sign from "./UI_view_common_sign";

export default class UI_CommonSign extends fgui.GComponent {

	public m_view:UI_view_common_sign;
	public m___nativeinpage:fgui.GGraph;

	public static URL:string = "ui://xwcraheakntfha";

	public static createInstance():UI_CommonSign {
		return <UI_CommonSign><any>(fgui.UIPackage.createObject("LTUI","CommonSign"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_view = <UI_view_common_sign><any>(this.getChildAt(1));
		this.m___nativeinpage = <fgui.GGraph><any>(this.getChildAt(2));
	}
}