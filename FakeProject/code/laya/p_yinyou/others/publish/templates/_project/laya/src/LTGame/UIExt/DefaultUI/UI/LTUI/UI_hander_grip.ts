/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_hander_grip extends fgui.GButton {

	public m_win:fgui.Controller;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://xwcraheakntff9";

	public static createInstance():UI_hander_grip {
		return <UI_hander_grip><any>(fgui.UIPackage.createObject("LTUI","hander_grip"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_win = this.getControllerAt(0);
		this.m_t0 = this.getTransitionAt(0);
	}
}