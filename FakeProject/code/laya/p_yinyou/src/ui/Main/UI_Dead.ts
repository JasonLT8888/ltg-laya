/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_Dead extends fgui.GComponent {

	public m_btn_continue:fgui.GButton;

	public static URL:string = "ui://kk7g5mmmt3pe6";

	public static createInstance():UI_Dead {
		return <UI_Dead><any>(fgui.UIPackage.createObject("Main","Dead"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_continue = <fgui.GButton><any>(this.getChildAt(2));
	}
}