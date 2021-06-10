/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_normal from "./UI_btn_normal";

export default class UI_GameCenterBig extends fgui.GComponent {

	public m_centerList:fgui.GList;
	public m_btn_close:UI_btn_normal;
	public m_anim_enter:fgui.Transition;
	public static URL:string = "ui://75kiu87krfowhj";

	public static createInstance():UI_GameCenterBig {
		return <UI_GameCenterBig>(fgui.UIPackage.createObject("LTGame", "GameCenterBig"));
	}

	protected onConstruct():void {
		this.m_centerList = <fgui.GList>(this.getChildAt(2));
		this.m_btn_close = <UI_btn_normal>(this.getChildAt(3));
		this.m_anim_enter = this.getTransitionAt(0);
	}
}