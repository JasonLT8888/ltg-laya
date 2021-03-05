/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_btn_tog extends fgui.GButton {

	public m_selected:fgui.Controller;
	public static URL:string = "ui://hbq27te38gel5p";

	public static createInstance():LTG_UI_btn_tog {
		return <LTG_UI_btn_tog>(fgui.UIPackage.createObject("LTCom", "btn_tog"));
	}

	protected onConstruct():void {
		this.m_selected = this.getControllerAt(0);
	}
}