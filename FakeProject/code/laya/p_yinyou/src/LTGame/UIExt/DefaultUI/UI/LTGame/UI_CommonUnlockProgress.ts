/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_double_get from "./UI_btn_double_get";

export default class UI_CommonUnlockProgress extends fgui.GComponent {

	public m_check_state:fgui.Controller;
	public m_bg:fgui.GGraph;
	public m_btn_get:UI_btn_double_get;
	public m_icon_bg:fgui.GImage;
	public m_text_progress:fgui.GTextField;
	public static URL:string = "ui://75kiu87krk935n";

	public static createInstance():UI_CommonUnlockProgress {
		return <UI_CommonUnlockProgress>(fgui.UIPackage.createObject("LTGame", "CommonUnlockProgress"));
	}

	protected onConstruct():void {
		this.m_check_state = this.getControllerAt(0);
		this.m_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_btn_get = <UI_btn_double_get>(this.getChildAt(2));
		this.m_icon_bg = <fgui.GImage>(this.getChildAt(3));
		this.m_text_progress = <fgui.GTextField>(this.getChildAt(4));
	}
}