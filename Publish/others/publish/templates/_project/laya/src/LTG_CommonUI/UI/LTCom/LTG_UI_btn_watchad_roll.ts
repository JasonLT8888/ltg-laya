/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_btn_watchad_roll extends fgui.GButton {

	public m_bg:fgui.GLoader;
	public m_adicon:fgui.GImage;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://hbq27te38gel3w";

	public static createInstance():LTG_UI_btn_watchad_roll {
		return <LTG_UI_btn_watchad_roll><any>(fgui.UIPackage.createObject("LTCom","btn_watchad_roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_adicon = <fgui.GImage><any>(this.getChildAt(2));
		this.m_t0 = this.getTransitionAt(0);
	}
}