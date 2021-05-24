/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_toggle_01 extends fgui.GComponent {

	public m_toggle_state:fgui.Controller;
	public static URL:string = "ui://hbq27te38gelc";

	public static createInstance():LTG_UI_toggle_01 {
		return <LTG_UI_toggle_01>(fgui.UIPackage.createObject("LTCom", "toggle_01"));
	}

	protected onConstruct():void {
		this.m_toggle_state = this.getControllerAt(0);
	}
}