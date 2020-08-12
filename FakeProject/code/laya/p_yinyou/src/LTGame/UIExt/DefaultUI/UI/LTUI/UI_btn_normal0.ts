/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_normal0 extends fgui.GButton {

	public m_ad:fgui.Controller;

	public static URL:string = "ui://xwcraheakntfi0";

	public static createInstance():UI_btn_normal0 {
		return <UI_btn_normal0><any>(fgui.UIPackage.createObject("LTUI","btn_normal0"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ad = this.getControllerAt(0);
	}
}