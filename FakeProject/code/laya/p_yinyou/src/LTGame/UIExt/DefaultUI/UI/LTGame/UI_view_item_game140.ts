/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_game_icon from "./UI_view_game_icon";

export default class UI_view_item_game140 extends fgui.GComponent {

	public m_icon:UI_view_game_icon;
	public m_text_name:fgui.GTextField;
	public static URL:string = "ui://75kiu87kp2ld6p";

	public static createInstance():UI_view_item_game140 {
		return <UI_view_item_game140>(fgui.UIPackage.createObject("LTGame", "view_item_game140"));
	}

	protected onConstruct():void {
		this.m_icon = <UI_view_game_icon>(this.getChildAt(0));
		this.m_text_name = <fgui.GTextField>(this.getChildAt(1));
	}
}