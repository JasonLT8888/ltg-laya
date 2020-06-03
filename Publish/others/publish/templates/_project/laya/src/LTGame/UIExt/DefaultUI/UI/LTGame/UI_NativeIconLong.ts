/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_iconLongComp from "./UI_iconLongComp";
import UI_btn_normal from "./UI_btn_normal";

export default class UI_NativeIconLong extends fgui.GComponent {

	public m_bg1:fgui.GGraph;
	public m_ad:UI_iconLongComp;
	public m_btn_close:UI_btn_normal;

	public static URL:string = "ui://75kiu87kocvx6t";

	public static createInstance():UI_NativeIconLong {
		return <UI_NativeIconLong><any>(fgui.UIPackage.createObject("LTGame","NativeIconLong"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg1 = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_ad = <UI_iconLongComp><any>(this.getChildAt(1));
		this.m_btn_close = <UI_btn_normal><any>(this.getChildAt(2));
	}
}