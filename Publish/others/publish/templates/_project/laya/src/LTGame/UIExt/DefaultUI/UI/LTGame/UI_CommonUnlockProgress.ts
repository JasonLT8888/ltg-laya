/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_toggle_02 from "./UI_btn_toggle_02";

export default class UI_CommonUnlockProgress extends fgui.GComponent {

	public m_check_state:fgui.Controller;
	public m_bg:fgui.GGraph;
	public m_toggle_watchad:UI_btn_toggle_02;
	public m_btn_get:fgui.GButton;
	public m_icon_bg:fgui.GImage;
	public m_text_progress:fgui.GTextField;
	public m_btn_ok:fgui.GButton;
	public m_btn_watchad:fgui.GButton;

	public static URL:string = "ui://75kiu87krk935n";

	public static createInstance():UI_CommonUnlockProgress {
		return <UI_CommonUnlockProgress><any>(fgui.UIPackage.createObject("LTGame","CommonUnlockProgress"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_check_state = this.getControllerAt(0);
		this.m_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_toggle_watchad = <UI_btn_toggle_02><any>(this.getChildAt(2));
		this.m_btn_get = <fgui.GButton><any>(this.getChildAt(3));
		this.m_icon_bg = <fgui.GImage><any>(this.getChildAt(4));
		this.m_text_progress = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_btn_ok = <fgui.GButton><any>(this.getChildAt(6));
		this.m_btn_watchad = <fgui.GButton><any>(this.getChildAt(7));
	}
}