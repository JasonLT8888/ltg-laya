/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_title from "./UI_view_title";
import UI_view_end_games from "./UI_view_end_games";
import UI_btn_double_get from "./UI_btn_double_get";
import UI_view_reward_count from "./UI_view_reward_count";
import UI_btn_toggle_02 from "./UI_btn_toggle_02";

export default class UI_CommonEndReward extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_view_title:UI_view_title;
	public m_view_moregames:UI_view_end_games;
	public m_btn_open_roll:UI_btn_double_get;
	public m_btn_double_get:UI_btn_double_get;
	public m_btn_normal_get:UI_view_reward_count;
	public m_btn_toggle_watchad:UI_btn_toggle_02;

	public static URL:string = "ui://75kiu87kbg0019";

	public static createInstance():UI_CommonEndReward {
		return <UI_CommonEndReward><any>(fgui.UIPackage.createObject("LTGame","CommonEndReward"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_c1 = this.getControllerAt(0);
		this.m_view_title = <UI_view_title><any>(this.getChildAt(1));
		this.m_view_moregames = <UI_view_end_games><any>(this.getChildAt(2));
		this.m_btn_open_roll = <UI_btn_double_get><any>(this.getChildAt(3));
		this.m_btn_double_get = <UI_btn_double_get><any>(this.getChildAt(4));
		this.m_btn_normal_get = <UI_view_reward_count><any>(this.getChildAt(5));
		this.m_btn_toggle_watchad = <UI_btn_toggle_02><any>(this.getChildAt(6));
	}
}