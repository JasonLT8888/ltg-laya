/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btnGames from "./UI_btnGames";

export default class UI_side_ads1 extends fgui.GComponent {

	public m_list:fgui.GList;
	public m_btn_more:UI_btnGames;
	public static URL:string = "ui://75kiu87kn6nfi1";

	public static createInstance():UI_side_ads1 {
		return <UI_side_ads1>(fgui.UIPackage.createObject("LTGame", "side_ads1"));
	}

	protected onConstruct():void {
		this.m_list = <fgui.GList>(this.getChildAt(1));
		this.m_btn_more = <UI_btnGames>(this.getChildAt(2));
	}
}