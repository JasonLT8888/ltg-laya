/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_common_ad_btn extends fgui.GButton {

	public m_bg:fgui.GLoader;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://hbq27te3fig0a6";

	public static createInstance():LTG_UI_common_ad_btn {
		return <LTG_UI_common_ad_btn><any>(fgui.UIPackage.createObject("LTCom","common_ad_btn"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_t0 = this.getTransitionAt(0);
	}
}