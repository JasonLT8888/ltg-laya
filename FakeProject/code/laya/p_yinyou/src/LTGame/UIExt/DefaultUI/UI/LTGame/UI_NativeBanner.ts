/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_NativeBannerComp from "./UI_NativeBannerComp";

export default class UI_NativeBanner extends fgui.GComponent {

	public m_ad:UI_NativeBannerComp;

	public static URL:string = "ui://75kiu87ka24yil";

	public static createInstance():UI_NativeBanner {
		return <UI_NativeBanner><any>(fgui.UIPackage.createObject("LTGame","NativeBanner"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ad = <UI_NativeBannerComp><any>(this.getChildAt(0));
	}
}