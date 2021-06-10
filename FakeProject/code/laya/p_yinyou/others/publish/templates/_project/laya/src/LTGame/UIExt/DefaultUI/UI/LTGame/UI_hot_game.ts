/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_game_icon from "./UI_view_game_icon";

export default class UI_hot_game extends fgui.GButton {

	public m_ic:UI_view_game_icon;
	public m_anim_idle:fgui.Transition;
	public static URL:string = "ui://75kiu87k74v84g";

	public static createInstance():UI_hot_game {
		return <UI_hot_game>(fgui.UIPackage.createObject("LTGame", "hot_game"));
	}

	protected onConstruct():void {
		this.m_ic = <UI_view_game_icon>(this.getChildAt(1));
		this.m_anim_idle = this.getTransitionAt(0);
	}
}