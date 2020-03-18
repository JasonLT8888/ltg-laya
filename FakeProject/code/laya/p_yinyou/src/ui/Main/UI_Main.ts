/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_Main extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_btn_start:fgui.GButton;

	public static URL:string = "ui://kk7g5mmmjhmq1";

	public static createInstance():UI_Main {
		return <UI_Main><any>(fgui.UIPackage.createObject("Main","Main"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_title = <fgui.GTextField><any>(this.getChildAt(1));
		this.m_btn_start = <fgui.GButton><any>(this.getChildAt(2));
	}
}