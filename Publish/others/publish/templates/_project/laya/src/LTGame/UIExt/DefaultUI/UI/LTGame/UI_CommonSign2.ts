/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_normal0 from "./UI_btn_normal0";

export default class UI_CommonSign2 extends fgui.GComponent {

	public m_isSigned:fgui.Controller;
	public m_btn_videoRwd:fgui.GButton;
	public m_btn_nornalRwd:UI_btn_normal0;
	public m_btn_close:UI_btn_normal0;
	public m_dayList:fgui.GList;

	public static URL:string = "ui://75kiu87kkj717j";

	public static createInstance():UI_CommonSign2 {
		return <UI_CommonSign2><any>(fgui.UIPackage.createObject("LTGame","CommonSign2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_isSigned = this.getControllerAt(0);
		this.m_btn_videoRwd = <fgui.GButton><any>(this.getChildAt(3));
		this.m_btn_nornalRwd = <UI_btn_normal0><any>(this.getChildAt(4));
		this.m_btn_close = <UI_btn_normal0><any>(this.getChildAt(5));
		this.m_dayList = <fgui.GList><any>(this.getChildAt(6));
	}
}