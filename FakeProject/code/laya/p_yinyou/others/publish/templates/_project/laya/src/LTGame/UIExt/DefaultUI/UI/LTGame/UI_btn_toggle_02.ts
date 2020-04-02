/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_toggle_02 extends fgui.GButton {

	public m_selected:fgui.Controller;
	public m_text_str:fgui.GTextField;

	public static URL:string = "ui://75kiu87kgxi832";

	public static createInstance():UI_btn_toggle_02 {
		return <UI_btn_toggle_02><any>(fgui.UIPackage.createObject("LTGame","btn_toggle_02"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_selected = this.getControllerAt(0);
		this.m_text_str = <fgui.GTextField><any>(this.getChildAt(2));
	}
}