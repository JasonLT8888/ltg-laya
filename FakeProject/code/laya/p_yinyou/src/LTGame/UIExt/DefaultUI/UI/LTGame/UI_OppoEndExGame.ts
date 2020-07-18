/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_ad from "./UI_btn_ad";

export default class UI_OppoEndExGame extends fgui.GComponent {

	public m_win:fgui.GImage;
	public m___nativeinpage:fgui.GGraph;
	public m_btn_next:UI_btn_ad;
	public m_btn_reward:UI_btn_ad;
	public m_btn_adpay:UI_btn_ad;
	public m_icon_reward:fgui.GLoader;
	public m_text_add:fgui.GTextField;
	public m_anim_enter:fgui.Transition;

	public static URL:string = "ui://75kiu87kocvx6u";

	public static createInstance():UI_OppoEndExGame {
		return <UI_OppoEndExGame><any>(fgui.UIPackage.createObject("LTGame","OppoEndExGame"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_win = <fgui.GImage><any>(this.getChildAt(1));
		this.m___nativeinpage = <fgui.GGraph><any>(this.getChildAt(2));
		this.m_btn_next = <UI_btn_ad><any>(this.getChildAt(3));
		this.m_btn_reward = <UI_btn_ad><any>(this.getChildAt(4));
		this.m_btn_adpay = <UI_btn_ad><any>(this.getChildAt(5));
		this.m_icon_reward = <fgui.GLoader><any>(this.getChildAt(6));
		this.m_text_add = <fgui.GTextField><any>(this.getChildAt(7));
		this.m_anim_enter = this.getTransitionAt(0);
	}
}