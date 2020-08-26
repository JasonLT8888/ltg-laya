/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_item_sign_01 from "./LTG_UI_view_item_sign_01";
import LTG_UI_view_item_sign_02 from "./LTG_UI_view_item_sign_02";
import LTG_UI_view_item_sign_03 from "./LTG_UI_view_item_sign_03";
import LTG_UI_view_item_sign_05 from "./LTG_UI_view_item_sign_05";
import LTG_UI_view_item_sign_06 from "./LTG_UI_view_item_sign_06";
import LTG_UI_view_item_sign_07 from "./LTG_UI_view_item_sign_07";
import LTG_UI_btn_tog from "./LTG_UI_btn_tog";

export default class LTG_UI_view_sign extends fgui.GComponent {

	public m_state:fgui.Controller;
	public m_day_1:LTG_UI_view_item_sign_01;
	public m_day_2:LTG_UI_view_item_sign_02;
	public m_day_3:LTG_UI_view_item_sign_03;
	public m_day_4:LTG_UI_view_item_sign_02;
	public m_day_5:LTG_UI_view_item_sign_05;
	public m_day_6:LTG_UI_view_item_sign_06;
	public m_day_7:LTG_UI_view_item_sign_07;
	public m_text_signed:fgui.GTextField;
	public m_btn_watchad:fgui.GButton;
	public m_tog:LTG_UI_btn_tog;

	public static URL:string = "ui://hbq27te38gel4w";

	public static createInstance():LTG_UI_view_sign {
		return <LTG_UI_view_sign><any>(fgui.UIPackage.createObject("LTCom","view_sign"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_state = this.getControllerAt(0);
		this.m_day_1 = <LTG_UI_view_item_sign_01><any>(this.getChildAt(2));
		this.m_day_2 = <LTG_UI_view_item_sign_02><any>(this.getChildAt(3));
		this.m_day_3 = <LTG_UI_view_item_sign_03><any>(this.getChildAt(4));
		this.m_day_4 = <LTG_UI_view_item_sign_02><any>(this.getChildAt(5));
		this.m_day_5 = <LTG_UI_view_item_sign_05><any>(this.getChildAt(6));
		this.m_day_6 = <LTG_UI_view_item_sign_06><any>(this.getChildAt(7));
		this.m_day_7 = <LTG_UI_view_item_sign_07><any>(this.getChildAt(8));
		this.m_text_signed = <fgui.GTextField><any>(this.getChildAt(9));
		this.m_btn_watchad = <fgui.GButton><any>(this.getChildAt(10));
		this.m_tog = <LTG_UI_btn_tog><any>(this.getChildAt(11));
	}
}