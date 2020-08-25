/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_zhuazi extends fgui.GComponent {

	public m_state_pick:fgui.Controller;

	public static URL:string = "ui://hbq27te38gel27";

	public static createInstance():LTG_UI_view_zhuazi {
		return <LTG_UI_view_zhuazi><any>(fgui.UIPackage.createObject("LTCom","view_zhuazi"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_state_pick = this.getControllerAt(0);
	}
}