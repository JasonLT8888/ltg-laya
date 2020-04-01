/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_PerfomanceDemo extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_btn_boneAnim:fgui.GButton;
	public m_btn_back:fgui.GButton;

	public static URL:string = "ui://kk7g5mmmmzx7h";

	public static createInstance():UI_PerfomanceDemo {
		return <UI_PerfomanceDemo><any>(fgui.UIPackage.createObject("Main","PerfomanceDemo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_title = <fgui.GTextField><any>(this.getChildAt(1));
		this.m_btn_boneAnim = <fgui.GButton><any>(this.getChildAt(2));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(3));
	}
}