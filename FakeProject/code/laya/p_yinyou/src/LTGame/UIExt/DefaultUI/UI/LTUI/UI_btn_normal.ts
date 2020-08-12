/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_normal extends fgui.GButton {

	public m_t0:fgui.Transition;

	public static URL:string = "ui://xwcraheakntff3";

	public static createInstance():UI_btn_normal {
		return <UI_btn_normal><any>(fgui.UIPackage.createObject("LTUI","btn_normal"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_t0 = this.getTransitionAt(0);
	}
}