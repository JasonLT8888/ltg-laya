/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_sign from "./LTG_UI_view_sign";

export default class LTG_UI_Sign extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_sign;
	public m_btn_back:fgui.GButton;
	public m_anim_enter:fgui.Transition;
	public m_anim_exit:fgui.Transition;

	public static URL:string = "ui://hbq27te38gel4v";

	public static createInstance():LTG_UI_Sign {
		return <LTG_UI_Sign><any>(fgui.UIPackage.createObject("LTCom","Sign"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_sign><any>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(2));
		this.m_anim_enter = this.getTransitionAt(0);
		this.m_anim_exit = this.getTransitionAt(1);
	}
}