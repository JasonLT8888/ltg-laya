/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_rollClose extends fgui.GButton {

	public m_btn_close:fgui.GImage;

	public static URL:string = "ui://xwcraheakntfj3";

	public static createInstance():UI_btn_rollClose {
		return <UI_btn_rollClose><any>(fgui.UIPackage.createObject("LTUI","btn_rollClose"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_close = <fgui.GImage><any>(this.getChildAt(0));
	}
}