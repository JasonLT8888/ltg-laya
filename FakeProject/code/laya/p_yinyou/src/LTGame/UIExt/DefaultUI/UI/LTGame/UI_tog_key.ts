/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_tog_key extends fgui.GButton {

	public m_select:fgui.Controller;

	public static URL:string = "ui://75kiu87kpknzbh";

	public static createInstance():UI_tog_key {
		return <UI_tog_key><any>(fgui.UIPackage.createObject("LTGame","tog_key"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_select = this.getControllerAt(0);
	}
}