/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_grow_01 from "./LTG_UI_view_grow_01";
import LTG_UI_view_enter_code from "./LTG_UI_view_enter_code";

export default class LTG_UI_EggWall extends fgui.GComponent {

	public m_img_bg:fgui.GImage;
	public m_img_grow:LTG_UI_view_grow_01;
	public m_btn_back:fgui.GButton;
	public m_loader_display:fgui.GLoader;
	public m_list_view:fgui.GList;
	public m_view_entercode:LTG_UI_view_enter_code;

	public static URL:string = "ui://hbq27te38gel2c";

	public static createInstance():LTG_UI_EggWall {
		return <LTG_UI_EggWall><any>(fgui.UIPackage.createObject("LTCom","EggWall"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GImage><any>(this.getChildAt(0));
		this.m_img_grow = <LTG_UI_view_grow_01><any>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(2));
		this.m_loader_display = <fgui.GLoader><any>(this.getChildAt(4));
		this.m_list_view = <fgui.GList><any>(this.getChildAt(5));
		this.m_view_entercode = <LTG_UI_view_enter_code><any>(this.getChildAt(6));
	}
}