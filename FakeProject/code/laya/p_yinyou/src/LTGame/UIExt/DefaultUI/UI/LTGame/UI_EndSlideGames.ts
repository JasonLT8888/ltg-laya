/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_slideAds from "./UI_slideAds";

export default class UI_EndSlideGames extends fgui.GComponent {

	public m_ad:UI_slideAds;

	public static URL:string = "ui://75kiu87kp2ld6k";

	public static createInstance():UI_EndSlideGames {
		return <UI_EndSlideGames><any>(fgui.UIPackage.createObject("LTGame","EndSlideGames"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ad = <UI_slideAds><any>(this.getChildAt(0));
	}
}