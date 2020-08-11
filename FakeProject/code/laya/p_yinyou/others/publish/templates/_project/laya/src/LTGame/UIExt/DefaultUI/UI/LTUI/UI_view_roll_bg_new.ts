/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_item_roll from "./UI_item_roll";

export default class UI_view_roll_bg_new extends fgui.GComponent {

	public m_bg:fgui.GImage;
	public m_item_1:UI_item_roll;
	public m_item_2:UI_item_roll;
	public m_item_3:UI_item_roll;
	public m_item_4:UI_item_roll;
	public m_item_5:UI_item_roll;
	public m_item_6:UI_item_roll;
	public m_item_7:UI_item_roll;
	public m_item_8:UI_item_roll;

	public static URL:string = "ui://xwcraheakntfiy";

	public static createInstance():UI_view_roll_bg_new {
		return <UI_view_roll_bg_new><any>(fgui.UIPackage.createObject("LTUI","view_roll_bg_new"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GImage><any>(this.getChildAt(0));
		this.m_item_1 = <UI_item_roll><any>(this.getChildAt(1));
		this.m_item_2 = <UI_item_roll><any>(this.getChildAt(2));
		this.m_item_3 = <UI_item_roll><any>(this.getChildAt(3));
		this.m_item_4 = <UI_item_roll><any>(this.getChildAt(4));
		this.m_item_5 = <UI_item_roll><any>(this.getChildAt(5));
		this.m_item_6 = <UI_item_roll><any>(this.getChildAt(6));
		this.m_item_7 = <UI_item_roll><any>(this.getChildAt(7));
		this.m_item_8 = <UI_item_roll><any>(this.getChildAt(8));
	}
}