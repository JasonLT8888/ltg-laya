/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_normal from "./UI_btn_normal";

export default class UI_Native320 extends fgui.GComponent {

	public m_img:fgui.GLoader;
	public m_tag:fgui.GLoader;
	public m_icon:fgui.GLoader;
	public m_title:fgui.GTextField;
	public m_desc:fgui.GTextField;
	public m_btn_close:UI_btn_normal;

	public static URL:string = "ui://75kiu87kk7jc6i";

	public static createInstance():UI_Native320 {
		return <UI_Native320><any>(fgui.UIPackage.createObject("LTGame","Native320"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_tag = <fgui.GLoader><any>(this.getChildAt(1));
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_title = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_desc = <fgui.GTextField><any>(this.getChildAt(4));
		this.m_btn_close = <UI_btn_normal><any>(this.getChildAt(5));
	}
}