/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_normal from "./UI_btn_normal";

export default class UI_rewardPannel extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_btn_get:UI_btn_normal;
	public m_btn_close:fgui.GButton;
	public m_img:fgui.GLoader;
	public m_txt_reward:fgui.GTextField;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://75kiu87kvkou6z";

	public static createInstance():UI_rewardPannel {
		return <UI_rewardPannel><any>(fgui.UIPackage.createObject("LTGame","rewardPannel"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_c1 = this.getControllerAt(0);
		this.m_btn_get = <UI_btn_normal><any>(this.getChildAt(2));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(3));
		this.m_img = <fgui.GLoader><any>(this.getChildAt(4));
		this.m_txt_reward = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_t0 = this.getTransitionAt(0);
	}
}