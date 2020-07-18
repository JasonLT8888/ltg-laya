/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_twoIcon extends fgui.GButton {

	public m_ad:fgui.Controller;
	public m_anim:fgui.Transition;

	public static URL:string = "ui://75kiu87kkj7186";

	public static createInstance():UI_btn_twoIcon {
		return <UI_btn_twoIcon><any>(fgui.UIPackage.createObject("LTGame","btn_twoIcon"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ad = this.getControllerAt(0);
		this.m_anim = this.getTransitionAt(0);
	}
}