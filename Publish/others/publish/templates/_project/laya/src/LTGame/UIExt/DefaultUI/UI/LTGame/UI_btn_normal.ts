/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_normal extends fgui.GButton {

	public m_bg:fgui.GLoader;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://75kiu87kl2ax4l";

	public static createInstance():UI_btn_normal {
		return <UI_btn_normal><any>(fgui.UIPackage.createObject("LTGame","btn_normal"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_t0 = this.getTransitionAt(0);
	}
}