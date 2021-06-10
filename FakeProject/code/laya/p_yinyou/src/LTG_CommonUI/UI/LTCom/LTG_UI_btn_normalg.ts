/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_btn_normalg extends fgui.GButton {

	public m_red:fgui.Controller;
	public m_bg:fgui.GLoader;

	public static URL:string = "ui://hbq27te38gel5s";

	public static createInstance():LTG_UI_btn_normalg {
		return <LTG_UI_btn_normalg><any>(fgui.UIPackage.createObject("LTCom","btn_normalg"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_red = this.getControllerAt(0);
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
	}
}