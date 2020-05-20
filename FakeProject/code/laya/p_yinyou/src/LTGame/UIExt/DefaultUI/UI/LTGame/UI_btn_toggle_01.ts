/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_btn_toggle_01 extends fgui.GButton {

	public m_c1:fgui.Controller;
	public static URL:string = "ui://75kiu87kbg002a";

	public static createInstance():UI_btn_toggle_01 {
		return <UI_btn_toggle_01>(fgui.UIPackage.createObject("LTGame", "btn_toggle_01"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
	}
}