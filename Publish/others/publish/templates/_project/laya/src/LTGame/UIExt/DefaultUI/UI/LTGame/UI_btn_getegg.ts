/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_getegg extends fgui.GButton {

	public m_lockState:fgui.Controller;

	public static URL:string = "ui://75kiu87kdywvb3";

	public static createInstance():UI_btn_getegg {
		return <UI_btn_getegg><any>(fgui.UIPackage.createObject("LTGame","btn_getegg"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_lockState = this.getControllerAt(0);
	}
}