/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_toggle_nogame extends fgui.GButton {

	public m_select:fgui.Controller;
	public m_type:fgui.Controller;

	public static URL:string = "ui://xwcraheakntfjz";

	public static createInstance():UI_toggle_nogame {
		return <UI_toggle_nogame><any>(fgui.UIPackage.createObject("LTUI","toggle_nogame"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_select = this.getControllerAt(0);
		this.m_type = this.getControllerAt(1);
	}
}