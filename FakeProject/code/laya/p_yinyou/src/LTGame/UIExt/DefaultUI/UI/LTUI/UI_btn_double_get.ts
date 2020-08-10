/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_double_get extends fgui.GButton {

	public m_btn_type:fgui.Controller;
	public m_bg_type:fgui.Controller;

	public static URL:string = "ui://xwcraheakntfd4";

	public static createInstance():UI_btn_double_get {
		return <UI_btn_double_get><any>(fgui.UIPackage.createObject("LTUI","btn_double_get"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_type = this.getControllerAt(0);
		this.m_bg_type = this.getControllerAt(1);
	}
}