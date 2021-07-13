/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_btn_next_2 extends fgui.GButton {

	public m_bg:fgui.GLoader;
	public m_t4:fgui.Transition;

	public static URL:string = "ui://hbq27te3x4fgdw";

	public static createInstance():LTG_UI_btn_next_2 {
		return <LTG_UI_btn_next_2><any>(fgui.UIPackage.createObject("LTCom","btn_next_2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_t4 = this.getTransitionAt(0);
	}
}