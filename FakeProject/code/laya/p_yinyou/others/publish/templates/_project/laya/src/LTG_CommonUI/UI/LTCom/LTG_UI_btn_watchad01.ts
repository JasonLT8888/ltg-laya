/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_btn_watchad01 extends fgui.GButton {

	public m_ad:fgui.Controller;
	public m_bg:fgui.GLoader;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://hbq27te38gel5i";

	public static createInstance():LTG_UI_btn_watchad01 {
		return <LTG_UI_btn_watchad01>(fgui.UIPackage.createObject("LTCom", "btn_watchad01"));
	}

	protected onConstruct():void {
		this.m_ad = this.getControllerAt(0);
		this.m_bg = <fgui.GLoader>(this.getChildAt(0));
		this.m_t0 = this.getTransitionAt(0);
	}
}