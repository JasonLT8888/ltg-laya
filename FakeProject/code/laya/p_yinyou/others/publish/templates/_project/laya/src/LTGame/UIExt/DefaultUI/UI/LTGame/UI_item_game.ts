/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_GameIconF from "./UI_GameIconF";

export default class UI_item_game extends fgui.GComponent {

	public m_icon:UI_GameIconF;
	public m_title:fgui.GTextField;
	public m_red:fgui.GImage;
	public static URL:string = "ui://75kiu87kr3yg7b";

	public static createInstance():UI_item_game {
		return <UI_item_game>(fgui.UIPackage.createObject("LTGame", "item_game"));
	}

	protected onConstruct():void {
		this.m_icon = <UI_GameIconF>(this.getChildAt(1));
		this.m_title = <fgui.GTextField>(this.getChildAt(2));
		this.m_red = <fgui.GImage>(this.getChildAt(3));
	}
}