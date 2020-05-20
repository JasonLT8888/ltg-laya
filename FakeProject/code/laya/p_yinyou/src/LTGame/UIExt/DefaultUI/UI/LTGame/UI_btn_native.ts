/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_btn_native extends fgui.GButton {

	public m_color:fgui.Controller;
	public static URL:string = "ui://75kiu87kl2ax4n";

	public static createInstance():UI_btn_native {
		return <UI_btn_native>(fgui.UIPackage.createObject("LTGame", "btn_native"));
	}

	protected onConstruct():void {
		this.m_color = this.getControllerAt(1);
	}
}