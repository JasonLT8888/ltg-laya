/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_roll_bg from "./UI_view_roll_bg";
import UI_btn_double_get from "./UI_btn_double_get";
import UI_rewardPannel from "./UI_rewardPannel";

export default class UI_CommonRoll extends fgui.GComponent {

	public m_view_roll:UI_view_roll_bg;
	public m_pointer:fgui.GImage;
	public m_btn_close:fgui.GButton;
	public m_btn_roll:UI_btn_double_get;
	public m_rewardPannel:UI_rewardPannel;
	public m___nativeinpage:fgui.GGraph;

	public static URL:string = "ui://75kiu87kbg002d";

	public static createInstance():UI_CommonRoll {
		return <UI_CommonRoll><any>(fgui.UIPackage.createObject("LTGame","CommonRoll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_view_roll = <UI_view_roll_bg><any>(this.getChildAt(1));
		this.m_pointer = <fgui.GImage><any>(this.getChildAt(2));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(4));
		this.m_btn_roll = <UI_btn_double_get><any>(this.getChildAt(5));
		this.m_rewardPannel = <UI_rewardPannel><any>(this.getChildAt(6));
		this.m___nativeinpage = <fgui.GGraph><any>(this.getChildAt(7));
	}
}