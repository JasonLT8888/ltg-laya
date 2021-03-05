/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_btn_show_tips from "./LTG_UI_btn_show_tips";

export default class LTG_UI_item_view_eggwall extends fgui.GComponent {

	public m_loader_mask:fgui.GLoader;
	public m_loader_icon:fgui.GLoader;
	public m_btn_get_tip:fgui.GButton;
	public m_img_comming:fgui.GImage;
	public m_btn_watchad:LTG_UI_btn_show_tips;
	public m_text_unlocked:fgui.GTextField;
	public m_text_name:fgui.GTextField;
	public m_text_code:fgui.GTextField;
	public static URL:string = "ui://hbq27te38gel2u";

	public static createInstance():LTG_UI_item_view_eggwall {
		return <LTG_UI_item_view_eggwall>(fgui.UIPackage.createObject("LTCom", "item_view_eggwall"));
	}

	protected onConstruct():void {
		this.m_loader_mask = <fgui.GLoader>(this.getChildAt(1));
		this.m_loader_icon = <fgui.GLoader>(this.getChildAt(2));
		this.m_btn_get_tip = <fgui.GButton>(this.getChildAt(3));
		this.m_img_comming = <fgui.GImage>(this.getChildAt(4));
		this.m_btn_watchad = <LTG_UI_btn_show_tips>(this.getChildAt(5));
		this.m_text_unlocked = <fgui.GTextField>(this.getChildAt(6));
		this.m_text_name = <fgui.GTextField>(this.getChildAt(7));
		this.m_text_code = <fgui.GTextField>(this.getChildAt(8));
	}
}