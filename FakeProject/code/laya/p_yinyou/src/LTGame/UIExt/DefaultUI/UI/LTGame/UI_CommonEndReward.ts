/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_toggle_02 from "./UI_btn_toggle_02";
import UI_view_sharegames_big from "./UI_view_sharegames_big";

export default class UI_CommonEndReward extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_btn_toggle_watchad:UI_btn_toggle_02;
	public m_view_othergames:UI_view_sharegames_big;
	public m_text_str:fgui.GTextField;
	public m_btn_get:fgui.GButton;
	public m_btn_back:fgui.GButton;
	public m_icon_reward:fgui.GLoader;
	public m_text_add:fgui.GTextField;
	public m_anim_enter:fgui.Transition;
	public static URL:string = "ui://75kiu87kbg0019";

	public static createInstance():UI_CommonEndReward {
		return <UI_CommonEndReward>(fgui.UIPackage.createObject("LTGame", "CommonEndReward"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_btn_toggle_watchad = <UI_btn_toggle_02>(this.getChildAt(2));
		this.m_view_othergames = <UI_view_sharegames_big>(this.getChildAt(3));
		this.m_text_str = <fgui.GTextField>(this.getChildAt(4));
		this.m_btn_get = <fgui.GButton>(this.getChildAt(5));
		this.m_btn_back = <fgui.GButton>(this.getChildAt(6));
		this.m_icon_reward = <fgui.GLoader>(this.getChildAt(7));
		this.m_text_add = <fgui.GTextField>(this.getChildAt(8));
		this.m_anim_enter = this.getTransitionAt(0);
	}
}