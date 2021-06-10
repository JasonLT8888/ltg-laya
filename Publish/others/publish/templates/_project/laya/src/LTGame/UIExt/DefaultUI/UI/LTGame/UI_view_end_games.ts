/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_sharegames_big from "./UI_view_sharegames_big";

export default class UI_view_end_games extends fgui.GComponent {

	public m_sharegames:UI_view_sharegames_big;
	public static URL:string = "ui://75kiu87kbg001k";

	public static createInstance():UI_view_end_games {
		return <UI_view_end_games>(fgui.UIPackage.createObject("LTGame", "view_end_games"));
	}

	protected onConstruct():void {
		this.m_sharegames = <UI_view_sharegames_big>(this.getChildAt(0));
	}
}