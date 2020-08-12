/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_info from "./UI_info";
import UI_btn_getegg from "./UI_btn_getegg";

export default class UI_CommonGameEgg extends fgui.GComponent {

	public m_noEgg:fgui.Controller;
	public m_bg:fgui.GImage;
	public m_eggLsit:fgui.GList;
	public m_info:UI_info;
	public m_btn_close:fgui.GButton;
	public m_txt_eggName:fgui.GTextField;
	public m_txt_getState:fgui.GTextField;
	public m_btn_getSec:UI_btn_getegg;
	public m_btn_getPass:UI_btn_getegg;
	public m_txt_disable:fgui.GTextField;

	public static URL:string = "ui://xwcraheakntfka";

	public static createInstance():UI_CommonGameEgg {
		return <UI_CommonGameEgg><any>(fgui.UIPackage.createObject("LTUI","CommonGameEgg"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_noEgg = this.getControllerAt(0);
		this.m_bg = <fgui.GImage><any>(this.getChildAt(0));
		this.m_eggLsit = <fgui.GList><any>(this.getChildAt(8));
		this.m_info = <UI_info><any>(this.getChildAt(9));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(10));
		this.m_txt_eggName = <fgui.GTextField><any>(this.getChildAt(11));
		this.m_txt_getState = <fgui.GTextField><any>(this.getChildAt(12));
		this.m_btn_getSec = <UI_btn_getegg><any>(this.getChildAt(13));
		this.m_btn_getPass = <UI_btn_getegg><any>(this.getChildAt(14));
		this.m_txt_disable = <fgui.GTextField><any>(this.getChildAt(16));
	}
}