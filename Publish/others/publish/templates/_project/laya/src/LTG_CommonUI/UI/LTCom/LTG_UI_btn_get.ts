/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_btn_get extends fgui.GButton {

	public m_bg:fgui.GLoader;
	public m_ad:fgui.GImage;
	public m_t4:fgui.Transition;

	public static URL:string = "ui://hbq27te3x4fge1";

	public static createInstance():LTG_UI_btn_get {
		return <LTG_UI_btn_get><any>(fgui.UIPackage.createObject("LTCom","btn_get"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_ad = <fgui.GImage><any>(this.getChildAt(1));
		this.m_t4 = this.getTransitionAt(0);
	}
}