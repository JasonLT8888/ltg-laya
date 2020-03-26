/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_game_icon from "./UI_view_game_icon";

export default class UI_view_item_game extends fgui.GComponent {

	public m_icon:UI_view_game_icon;
	public m_text_name:fgui.GTextField;

	public static URL:string = "ui://75kiu87kbg001g";

	public static createInstance():UI_view_item_game {
		return <UI_view_item_game><any>(fgui.UIPackage.createObject("LTGame","view_item_game"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <UI_view_game_icon><any>(this.getChildAt(0));
		this.m_text_name = <fgui.GTextField><any>(this.getChildAt(1));
	}
}