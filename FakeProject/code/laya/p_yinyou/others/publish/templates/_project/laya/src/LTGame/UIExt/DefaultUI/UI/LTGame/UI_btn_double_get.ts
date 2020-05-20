/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_btn_double_get extends fgui.GButton {

	public m_btn_type:fgui.Controller;
	public m_bg_type:fgui.Controller;
	public static URL:string = "ui://75kiu87kit2iq";

	public static createInstance():UI_btn_double_get {
		return <UI_btn_double_get>(fgui.UIPackage.createObject("LTGame", "btn_double_get"));
	}

	protected onConstruct():void {
		this.m_btn_type = this.getControllerAt(0);
		this.m_bg_type = this.getControllerAt(1);
	}
}