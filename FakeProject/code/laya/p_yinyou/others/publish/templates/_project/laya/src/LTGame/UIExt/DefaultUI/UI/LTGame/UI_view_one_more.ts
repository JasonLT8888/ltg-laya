/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_double_get from "./UI_btn_double_get";

export default class UI_view_one_more extends fgui.GComponent {

	public m_btn_close:fgui.GButton;
	public m_icon:fgui.GLoader;
	public m_btn_normal_get:fgui.GButton;
	public m_text_value:fgui.GTextField;
	public m_btn_double_get:UI_btn_double_get;

	public static URL:string = "ui://75kiu87kgxi82w";

	public static createInstance():UI_view_one_more {
		return <UI_view_one_more><any>(fgui.UIPackage.createObject("LTGame","view_one_more"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(1));
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(3));
		this.m_btn_normal_get = <fgui.GButton><any>(this.getChildAt(4));
		this.m_text_value = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_btn_double_get = <UI_btn_double_get><any>(this.getChildAt(6));
	}
}