/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_GameIconF from "./UI_GameIconF";

export default class UI_item_gameMax extends fgui.GComponent {

	public m_icon:UI_GameIconF;
	public m_title:fgui.GTextField;
	public m_player:fgui.GTextField;
	public m_red:fgui.GImage;
	public static URL:string = "ui://75kiu87krfowhk";

	public static createInstance():UI_item_gameMax {
		return <UI_item_gameMax>(fgui.UIPackage.createObject("LTGame", "item_gameMax"));
	}

	protected onConstruct():void {
		this.m_icon = <UI_GameIconF>(this.getChildAt(1));
		this.m_title = <fgui.GTextField>(this.getChildAt(2));
		this.m_player = <fgui.GTextField>(this.getChildAt(3));
		this.m_red = <fgui.GImage>(this.getChildAt(4));
	}
}