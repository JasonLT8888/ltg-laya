/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_item_sign from "./UI_view_item_sign";

export default class UI_view_common_sign extends fgui.GComponent {

	public m_btn_close:fgui.GButton;
	public m_view_day7:UI_view_item_sign;
	public m_btn_normal_get:fgui.GButton;
	public m_btn_double_get:fgui.GButton;
	public m_list_day:fgui.GList;

	public static URL:string = "ui://75kiu87kit2iy";

	public static createInstance():UI_view_common_sign {
		return <UI_view_common_sign><any>(fgui.UIPackage.createObject("LTGame","view_common_sign"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(2));
		this.m_view_day7 = <UI_view_item_sign><any>(this.getChildAt(3));
		this.m_btn_normal_get = <fgui.GButton><any>(this.getChildAt(4));
		this.m_btn_double_get = <fgui.GButton><any>(this.getChildAt(5));
		this.m_list_day = <fgui.GList><any>(this.getChildAt(6));
	}
}