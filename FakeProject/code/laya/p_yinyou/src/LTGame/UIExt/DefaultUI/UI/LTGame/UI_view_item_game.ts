/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_game_icon1 from "./UI_view_game_icon1";

export default class UI_view_item_game extends fgui.GComponent {

	public m_icon:UI_view_game_icon1;
	public m_text_name:fgui.GTextField;
	public static URL:string = "ui://75kiu87kp2ld6o";

	public static createInstance():UI_view_item_game {
		return <UI_view_item_game>(fgui.UIPackage.createObject("LTGame", "view_item_game"));
	}

	protected onConstruct():void {
		this.m_icon = <UI_view_game_icon1>(this.getChildAt(1));
		this.m_text_name = <fgui.GTextField>(this.getChildAt(2));
	}
}