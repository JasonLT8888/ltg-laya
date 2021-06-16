/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_btn_morediamond extends fgui.GButton {

	public m_ad:fgui.Controller;
	public m_color:fgui.Controller;
	public m_img_coin:fgui.GLoader;
	public m_text_value:fgui.GTextField;
	public m_rate:fgui.GTextField;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://hbq27te3fig0ar";

	public static createInstance():LTG_UI_btn_morediamond {
		return <LTG_UI_btn_morediamond><any>(fgui.UIPackage.createObject("LTCom","btn_morediamond"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ad = this.getControllerAt(0);
		this.m_color = this.getControllerAt(1);
		this.m_img_coin = <fgui.GLoader><any>(this.getChildAt(5));
		this.m_text_value = <fgui.GTextField><any>(this.getChildAt(6));
		this.m_rate = <fgui.GTextField><any>(this.getChildAt(8));
		this.m_t0 = this.getTransitionAt(0);
	}
}