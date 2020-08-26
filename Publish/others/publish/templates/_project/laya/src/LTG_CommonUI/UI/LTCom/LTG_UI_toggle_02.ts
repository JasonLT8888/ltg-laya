/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_toggle_02 extends fgui.GComponent {

	public m_state_toggle:fgui.Controller;

	public static URL:string = "ui://hbq27te38gel3c";

	public static createInstance():LTG_UI_toggle_02 {
		return <LTG_UI_toggle_02><any>(fgui.UIPackage.createObject("LTCom","toggle_02"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_state_toggle = this.getControllerAt(0);
	}
}