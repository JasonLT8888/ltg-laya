/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_UIDemo extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_btn_back:fgui.GButton;
	public m_btn_toast:fgui.GButton;

	public static URL:string = "ui://kk7g5mmmgxfzd";

	public static createInstance():UI_UIDemo {
		return <UI_UIDemo><any>(fgui.UIPackage.createObject("Main","UIDemo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_title = <fgui.GTextField><any>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(2));
		this.m_btn_toast = <fgui.GButton><any>(this.getChildAt(3));
	}
}