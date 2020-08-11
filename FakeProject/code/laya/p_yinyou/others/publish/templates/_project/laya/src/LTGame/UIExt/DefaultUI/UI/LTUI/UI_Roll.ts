/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_roll_bg_new from "./UI_view_roll_bg_new";
import UI_btn_rollClose from "./UI_btn_rollClose";
import UI_btn_roll from "./UI_btn_roll";
import UI_player from "./UI_player";
import UI_progress_roll from "./UI_progress_roll";
import UI_btn_rollReward from "./UI_btn_rollReward";

export default class UI_Roll extends fgui.GComponent {

	public m_bg:fgui.GImage;
	public m_view_roll:UI_view_roll_bg_new;
	public m_pointer:fgui.GImage;
	public m_btn_close:UI_btn_rollClose;
	public m_btn_roll:UI_btn_roll;
	public m_player:UI_player;
	public m_progress_roll:UI_progress_roll;
	public m_btn_reward:UI_btn_rollReward;
	public m_progress:fgui.GGroup;
	public m_lbl_count:fgui.GTextField;
	public m_text:fgui.GGroup;
	public m_tween_rotate:fgui.Transition;

	public static URL:string = "ui://xwcraheakntfiw";

	public static createInstance():UI_Roll {
		return <UI_Roll><any>(fgui.UIPackage.createObject("LTUI","Roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GImage><any>(this.getChildAt(0));
		this.m_view_roll = <UI_view_roll_bg_new><any>(this.getChildAt(1));
		this.m_pointer = <fgui.GImage><any>(this.getChildAt(2));
		this.m_btn_close = <UI_btn_rollClose><any>(this.getChildAt(3));
		this.m_btn_roll = <UI_btn_roll><any>(this.getChildAt(4));
		this.m_player = <UI_player><any>(this.getChildAt(5));
		this.m_progress_roll = <UI_progress_roll><any>(this.getChildAt(6));
		this.m_btn_reward = <UI_btn_rollReward><any>(this.getChildAt(7));
		this.m_progress = <fgui.GGroup><any>(this.getChildAt(8));
		this.m_lbl_count = <fgui.GTextField><any>(this.getChildAt(10));
		this.m_text = <fgui.GGroup><any>(this.getChildAt(11));
		this.m_tween_rotate = this.getTransitionAt(0);
	}
}