/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_item_sign_big from "./UI_view_item_sign_big";
import UI_btn_toggle_02 from "./UI_btn_toggle_02";

export default class UI_view_common_sign extends fgui.GComponent {

	public m_check_state:fgui.Controller;
	public m_view_day7:UI_view_item_sign_big;
	public m_list_day:fgui.GList;
	public m_toggle_watchad:UI_btn_toggle_02;
	public m_btn_get:fgui.GButton;
	public m_btn_close:fgui.GButton;
	public m_btn_watchad:fgui.GButton;
	public static URL:string = "ui://75kiu87kit2iy";

	public static createInstance():UI_view_common_sign {
		return <UI_view_common_sign>(fgui.UIPackage.createObject("LTGame", "view_common_sign"));
	}

	protected onConstruct():void {
		this.m_check_state = this.getControllerAt(0);
		this.m_view_day7 = <UI_view_item_sign_big>(this.getChildAt(3));
		this.m_list_day = <fgui.GList>(this.getChildAt(4));
		this.m_toggle_watchad = <UI_btn_toggle_02>(this.getChildAt(5));
		this.m_btn_get = <fgui.GButton>(this.getChildAt(6));
		this.m_btn_close = <fgui.GButton>(this.getChildAt(7));
		this.m_btn_watchad = <fgui.GButton>(this.getChildAt(8));
	}
}