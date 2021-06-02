/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_unlock_progress from "./LTG_UI_view_unlock_progress";
import LTG_UI_btn_unlock_ad_01 from "./LTG_UI_btn_unlock_ad_01";

export default class LTG_UI_EggUnlock extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_img_display:fgui.GGraph;
	public m_view_unlock_progress:LTG_UI_view_unlock_progress;
	public m_btn_giveup:fgui.GButton;
	public m_btn_unlock_ad:LTG_UI_btn_unlock_ad_01;

	public static URL:string = "ui://hbq27te3mwzx95";

	public static createInstance():LTG_UI_EggUnlock {
		return <LTG_UI_EggUnlock><any>(fgui.UIPackage.createObject("LTCom","EggUnlock"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_img_display = <fgui.GGraph><any>(this.getChildAt(2));
		this.m_view_unlock_progress = <LTG_UI_view_unlock_progress><any>(this.getChildAt(3));
		this.m_btn_giveup = <fgui.GButton><any>(this.getChildAt(4));
		this.m_btn_unlock_ad = <LTG_UI_btn_unlock_ad_01><any>(this.getChildAt(5));
	}
}