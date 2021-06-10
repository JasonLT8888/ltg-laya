/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_game_icon1 from "./UI_view_game_icon1";

export default class UI_view_item_game128 extends fgui.GComponent {

	public m_icon:UI_view_game_icon1;
	public m_text_name:fgui.GTextField;
	public static URL:string = "ui://75kiu87kt3oybl";

	public static createInstance():UI_view_item_game128 {
		return <UI_view_item_game128>(fgui.UIPackage.createObject("LTGame", "view_item_game128"));
	}

	protected onConstruct():void {
		this.m_icon = <UI_view_game_icon1>(this.getChildAt(0));
		this.m_text_name = <fgui.GTextField>(this.getChildAt(1));
	}
}