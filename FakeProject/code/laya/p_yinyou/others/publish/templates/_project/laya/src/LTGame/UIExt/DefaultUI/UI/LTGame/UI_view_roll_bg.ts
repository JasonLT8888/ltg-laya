/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_item_roll from "./UI_view_item_roll";

export default class UI_view_roll_bg extends fgui.GComponent {

	public m_item_1:UI_view_item_roll;
	public m_item_2:UI_view_item_roll;
	public m_item_3:UI_view_item_roll;
	public m_item_4:UI_view_item_roll;
	public m_item_5:UI_view_item_roll;
	public m_item_6:UI_view_item_roll;
	public m_item_7:UI_view_item_roll;
	public m_item_8:UI_view_item_roll;
	public static URL:string = "ui://75kiu87kbg002r";

	public static createInstance():UI_view_roll_bg {
		return <UI_view_roll_bg>(fgui.UIPackage.createObject("LTGame", "view_roll_bg"));
	}

	protected onConstruct():void {
		this.m_item_1 = <UI_view_item_roll>(this.getChildAt(1));
		this.m_item_2 = <UI_view_item_roll>(this.getChildAt(2));
		this.m_item_3 = <UI_view_item_roll>(this.getChildAt(3));
		this.m_item_4 = <UI_view_item_roll>(this.getChildAt(4));
		this.m_item_5 = <UI_view_item_roll>(this.getChildAt(5));
		this.m_item_6 = <UI_view_item_roll>(this.getChildAt(6));
		this.m_item_7 = <UI_view_item_roll>(this.getChildAt(7));
		this.m_item_8 = <UI_view_item_roll>(this.getChildAt(8));
	}
}