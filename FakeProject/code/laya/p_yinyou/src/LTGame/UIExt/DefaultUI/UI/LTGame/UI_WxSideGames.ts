/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_item_gameSmall from "./UI_item_gameSmall";

export default class UI_WxSideGames extends fgui.GComponent {

	public m_ad0:UI_item_gameSmall;
	public m_ad1:UI_item_gameSmall;
	public m_ad2:UI_item_gameSmall;
	public m_ad3:UI_item_gameSmall;

	public static URL:string = "ui://75kiu87kr3yg7h";

	public static createInstance():UI_WxSideGames {
		return <UI_WxSideGames><any>(fgui.UIPackage.createObject("LTGame","WxSideGames"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ad0 = <UI_item_gameSmall><any>(this.getChildAt(0));
		this.m_ad1 = <UI_item_gameSmall><any>(this.getChildAt(1));
		this.m_ad2 = <UI_item_gameSmall><any>(this.getChildAt(2));
		this.m_ad3 = <UI_item_gameSmall><any>(this.getChildAt(3));
	}
}