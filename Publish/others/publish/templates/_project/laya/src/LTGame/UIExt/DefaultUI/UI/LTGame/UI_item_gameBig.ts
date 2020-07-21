/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_GameIconF from "./UI_GameIconF";

export default class UI_item_gameBig extends fgui.GComponent {

	public m_icon:UI_GameIconF;
	public m_title:fgui.GTextField;
	public m_player:fgui.GTextField;
	public m_red:fgui.GImage;

	public static URL:string = "ui://75kiu87kr3yg7d";

	public static createInstance():UI_item_gameBig {
		return <UI_item_gameBig><any>(fgui.UIPackage.createObject("LTGame","item_gameBig"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <UI_GameIconF><any>(this.getChildAt(1));
		this.m_title = <fgui.GTextField><any>(this.getChildAt(2));
		this.m_player = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_red = <fgui.GImage><any>(this.getChildAt(4));
	}
}