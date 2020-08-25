/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_limit_skin from "./LTG_UI_view_limit_skin";
import LTG_UI_view_watchad_progress from "./LTG_UI_view_watchad_progress";

export default class LTG_UI_LimitSkin extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_limit_skin;
	public m_view_ad_progress:LTG_UI_view_watchad_progress;
	public m_btn_get:fgui.GButton;

	public static URL:string = "ui://hbq27te38gel35";

	public static createInstance():LTG_UI_LimitSkin {
		return <LTG_UI_LimitSkin><any>(fgui.UIPackage.createObject("LTCom","LimitSkin"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_limit_skin><any>(this.getChildAt(1));
		this.m_view_ad_progress = <LTG_UI_view_watchad_progress><any>(this.getChildAt(2));
		this.m_btn_get = <fgui.GButton><any>(this.getChildAt(4));
	}
}