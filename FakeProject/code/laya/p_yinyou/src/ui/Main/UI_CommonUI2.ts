/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_CommonUI2 extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_btn_back:fgui.GButton;
	public m_list_btns:fgui.GList;

	public static URL:string = "ui://kk7g5mmmtsm1o";

	public static createInstance():UI_CommonUI2 {
		return <UI_CommonUI2><any>(fgui.UIPackage.createObject("Main","CommonUI2"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_title = <fgui.GTextField><any>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(2));
		this.m_list_btns = <fgui.GList><any>(this.getChildAt(3));
	}
}