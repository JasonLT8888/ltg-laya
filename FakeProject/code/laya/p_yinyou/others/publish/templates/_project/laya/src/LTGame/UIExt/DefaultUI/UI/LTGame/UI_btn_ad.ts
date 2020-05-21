/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_ad extends fgui.GButton {

	public m_type:fgui.Controller;
	public m_line:fgui.GGraph;

	public static URL:string = "ui://75kiu87kocvx6q";

	public static createInstance():UI_btn_ad {
		return <UI_btn_ad><any>(fgui.UIPackage.createObject("LTGame","btn_ad"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_type = this.getControllerAt(0);
		this.m_line = <fgui.GGraph><any>(this.getChildAt(4));
	}
}