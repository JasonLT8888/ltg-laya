/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_normal from "./UI_btn_normal";

export default class UI_SelfBanner extends fgui.GComponent {

	public m_banner:UI_btn_normal;

	public static URL:string = "ui://75kiu87kr3yg74";

	public static createInstance():UI_SelfBanner {
		return <UI_SelfBanner><any>(fgui.UIPackage.createObject("LTGame","SelfBanner"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_banner = <UI_btn_normal><any>(this.getChildAt(0));
	}
}