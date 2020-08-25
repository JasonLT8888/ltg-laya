/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_watchdy extends fgui.GComponent {

	public m_btn_copy:fgui.GButton;
	public m_btn_close:fgui.GButton;
	public m_text_code:fgui.GTextField;
	public m_btn_watch:fgui.GGraph;

	public static URL:string = "ui://hbq27te38gel4g";

	public static createInstance():LTG_UI_view_watchdy {
		return <LTG_UI_view_watchdy><any>(fgui.UIPackage.createObject("LTCom","view_watchdy"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_copy = <fgui.GButton><any>(this.getChildAt(1));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(2));
		this.m_text_code = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_btn_watch = <fgui.GGraph><any>(this.getChildAt(4));
	}
}