/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_watch extends fgui.GButton {

	public m_ad:fgui.Controller;

	public static URL:string = "ui://xwcraheakntfit";

	public static createInstance():UI_btn_watch {
		return <UI_btn_watch><any>(fgui.UIPackage.createObject("LTUI","btn_watch"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ad = this.getControllerAt(0);
	}
}