/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_hot_game from "./UI_hot_game";

export default class UI_CommonMainHotGame extends fgui.GComponent {

	public m_hot_game:UI_hot_game;

	public static URL:string = "ui://75kiu87k74v84f";

	public static createInstance():UI_CommonMainHotGame {
		return <UI_CommonMainHotGame><any>(fgui.UIPackage.createObject("LTGame","CommonMainHotGame"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_hot_game = <UI_hot_game><any>(this.getChildAt(0));
	}
}