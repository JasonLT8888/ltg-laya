/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_tog_progress extends fgui.GButton {

	public m_select:fgui.Controller;

	public static URL:string = "ui://75kiu87kkj7189";

	public static createInstance():UI_tog_progress {
		return <UI_tog_progress><any>(fgui.UIPackage.createObject("LTGame","tog_progress"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_select = this.getControllerAt(0);
	}
}