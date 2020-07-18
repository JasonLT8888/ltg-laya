/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_normal0 extends fgui.GButton {

	public m_ad:fgui.Controller;

	public static URL:string = "ui://75kiu87kkj717q";

	public static createInstance():UI_btn_normal0 {
		return <UI_btn_normal0><any>(fgui.UIPackage.createObject("LTGame","btn_normal0"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ad = this.getControllerAt(0);
	}
}