/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_Pass extends fgui.GComponent {

	public m_btn_continue:fgui.GButton;

	public static URL:string = "ui://kk7g5mmmt3pe7";

	public static createInstance():UI_Pass {
		return <UI_Pass><any>(fgui.UIPackage.createObject("Main","Pass"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_continue = <fgui.GButton><any>(this.getChildAt(2));
	}
}