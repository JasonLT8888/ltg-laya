/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_toggle_nogame from "./UI_toggle_nogame";
import UI_btn_normal0 from "./UI_btn_normal0";

export default class UI_TrySkin extends fgui.GComponent {

	public m_check_type:fgui.Controller;
	public m_oppo:fgui.Controller;
	public m_bg:fgui.GImage;
	public m_haro:fgui.GComponent;
	public m_icon:fgui.GLoader;
	public m_btn_pay:UI_toggle_nogame;
	public m_btn_watch:fgui.GButton;
	public m_btn_close:fgui.GButton;
	public m_btn_no:fgui.GButton;
	public m_btn_try:UI_btn_normal0;
	public m___bottomgames:fgui.GGraph;
	public m_t0:fgui.Transition;
	public m_anim_enter:fgui.Transition;

	public static URL:string = "ui://75kiu87kkj719w";

	public static createInstance():UI_TrySkin {
		return <UI_TrySkin><any>(fgui.UIPackage.createObject("LTGame","TrySkin"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_check_type = this.getControllerAt(0);
		this.m_oppo = this.getControllerAt(1);
		this.m_bg = <fgui.GImage><any>(this.getChildAt(0));
		this.m_haro = <fgui.GComponent><any>(this.getChildAt(1));
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(4));
		this.m_btn_pay = <UI_toggle_nogame><any>(this.getChildAt(5));
		this.m_btn_watch = <fgui.GButton><any>(this.getChildAt(6));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(7));
		this.m_btn_no = <fgui.GButton><any>(this.getChildAt(8));
		this.m_btn_try = <UI_btn_normal0><any>(this.getChildAt(9));
		this.m___bottomgames = <fgui.GGraph><any>(this.getChildAt(10));
		this.m_t0 = this.getTransitionAt(0);
		this.m_anim_enter = this.getTransitionAt(1);
	}
}