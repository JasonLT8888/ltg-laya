/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_Statement extends fgui.GComponent {

	public m_btn_confirm:fgui.GButton;
	public m_btn_cancel:fgui.GButton;

	public static URL:string = "ui://hbq27te3y1nvbz";

	public static createInstance():LTG_UI_Statement {
		return <LTG_UI_Statement><any>(fgui.UIPackage.createObject("LTCom","Statement"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_confirm = <fgui.GButton><any>(this.getChildAt(4));
		this.m_btn_cancel = <fgui.GButton><any>(this.getChildAt(5));
	}
}