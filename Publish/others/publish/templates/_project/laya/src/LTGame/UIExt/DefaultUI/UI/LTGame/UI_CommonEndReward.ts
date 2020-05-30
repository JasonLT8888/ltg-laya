/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_toggle_02 from "./UI_btn_toggle_02";
import UI_btn_double_get from "./UI_btn_double_get";

export default class UI_CommonEndReward extends fgui.GComponent {

	public m_btn_toggle_watchad:UI_btn_toggle_02;
	public m_text_str:fgui.GTextField;
	public m_btn_get:UI_btn_double_get;
	public m_icon_reward:fgui.GLoader;
	public m_text_add:fgui.GTextField;
	public m___bottomgames:fgui.GGraph;
	public m_anim_enter:fgui.Transition;

	public static URL:string = "ui://75kiu87kbg0019";

	public static createInstance():UI_CommonEndReward {
		return <UI_CommonEndReward><any>(fgui.UIPackage.createObject("LTGame","CommonEndReward"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_toggle_watchad = <UI_btn_toggle_02><any>(this.getChildAt(2));
		this.m_text_str = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_btn_get = <UI_btn_double_get><any>(this.getChildAt(4));
		this.m_icon_reward = <fgui.GLoader><any>(this.getChildAt(5));
		this.m_text_add = <fgui.GTextField><any>(this.getChildAt(6));
		this.m___bottomgames = <fgui.GGraph><any>(this.getChildAt(7));
		this.m_anim_enter = this.getTransitionAt(0);
	}
}