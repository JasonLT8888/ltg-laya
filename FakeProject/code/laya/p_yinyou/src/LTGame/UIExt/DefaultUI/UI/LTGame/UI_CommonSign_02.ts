/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_item_sign_02 from "./UI_view_item_sign_02";
import UI_btn_toggle_02 from "./UI_btn_toggle_02";

export default class UI_CommonSign_02 extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_img_content_bg:fgui.GImage;
	public m_img_title:fgui.GImage;
	public m_btn_watchad:fgui.GButton;
	public m_view_day7:UI_view_item_sign_02;
	public m_list_day:fgui.GList;
	public m_toggle_watchad:UI_btn_toggle_02;
	public m_btn_close:fgui.GButton;
	public static URL:string = "ui://75kiu87kre3i3a";

	public static createInstance():UI_CommonSign_02 {
		return <UI_CommonSign_02>(fgui.UIPackage.createObject("LTGame", "CommonSign_02"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_img_content_bg = <fgui.GImage>(this.getChildAt(1));
		this.m_img_title = <fgui.GImage>(this.getChildAt(2));
		this.m_btn_watchad = <fgui.GButton>(this.getChildAt(3));
		this.m_view_day7 = <UI_view_item_sign_02>(this.getChildAt(4));
		this.m_list_day = <fgui.GList>(this.getChildAt(5));
		this.m_toggle_watchad = <UI_btn_toggle_02>(this.getChildAt(6));
		this.m_btn_close = <fgui.GButton>(this.getChildAt(7));
	}
}