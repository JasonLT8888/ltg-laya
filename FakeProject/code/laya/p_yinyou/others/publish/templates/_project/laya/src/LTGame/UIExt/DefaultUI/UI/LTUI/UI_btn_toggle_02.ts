/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_toggle_02 extends fgui.GButton {

	public m_selected:fgui.Controller;

	public static URL:string = "ui://xwcraheakntfcp";

	public static createInstance():UI_btn_toggle_02 {
		return <UI_btn_toggle_02><any>(fgui.UIPackage.createObject("LTUI","btn_toggle_02"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_selected = this.getControllerAt(0);
	}
}