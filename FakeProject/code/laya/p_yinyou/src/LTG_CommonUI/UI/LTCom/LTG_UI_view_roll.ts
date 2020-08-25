/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_roll extends fgui.GComponent {

	public m_progress_supper:fgui.GProgressBar;
	public m_btn_watchad:fgui.GButton;
	public m_btn_free:fgui.GButton;
	public m_text_notice:fgui.GTextField;

	public static URL:string = "ui://hbq27te38gel42";

	public static createInstance():LTG_UI_view_roll {
		return <LTG_UI_view_roll><any>(fgui.UIPackage.createObject("LTCom","view_roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_progress_supper = <fgui.GProgressBar><any>(this.getChildAt(3));
		this.m_btn_watchad = <fgui.GButton><any>(this.getChildAt(5));
		this.m_btn_free = <fgui.GButton><any>(this.getChildAt(6));
		this.m_text_notice = <fgui.GTextField><any>(this.getChildAt(7));
	}
}