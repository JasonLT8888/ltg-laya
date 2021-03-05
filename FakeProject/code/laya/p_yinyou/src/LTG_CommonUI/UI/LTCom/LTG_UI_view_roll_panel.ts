/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_item_view_roll from "./LTG_UI_item_view_roll";

export default class LTG_UI_view_roll_panel extends fgui.GComponent {

	public m_item_01:LTG_UI_item_view_roll;
	public m_item_02:LTG_UI_item_view_roll;
	public m_item_03:LTG_UI_item_view_roll;
	public m_item_04:LTG_UI_item_view_roll;
	public m_item_05:LTG_UI_item_view_roll;
	public m_item_06:LTG_UI_item_view_roll;
	public static URL:string = "ui://hbq27te38gel41";

	public static createInstance():LTG_UI_view_roll_panel {
		return <LTG_UI_view_roll_panel>(fgui.UIPackage.createObject("LTCom", "view_roll_panel"));
	}

	protected onConstruct():void {
		this.m_item_01 = <LTG_UI_item_view_roll>(this.getChildAt(1));
		this.m_item_02 = <LTG_UI_item_view_roll>(this.getChildAt(2));
		this.m_item_03 = <LTG_UI_item_view_roll>(this.getChildAt(3));
		this.m_item_04 = <LTG_UI_item_view_roll>(this.getChildAt(4));
		this.m_item_05 = <LTG_UI_item_view_roll>(this.getChildAt(5));
		this.m_item_06 = <LTG_UI_item_view_roll>(this.getChildAt(6));
	}
}