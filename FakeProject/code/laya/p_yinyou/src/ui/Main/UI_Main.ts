/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Main extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_btn_ad:fgui.GButton;
	public m_btn_ui:fgui.GButton;
	public m_btn_record:fgui.GButton;
	public m_btn_others:fgui.GButton;
	public m_btn_common:fgui.GButton;
	public m_btn_performance:fgui.GButton;
	public m_btn_feature:fgui.GButton;
	public static URL:string = "ui://kk7g5mmmjhmq1";

	public static createInstance():UI_Main {
		return <UI_Main>(fgui.UIPackage.createObject("Main", "Main"));
	}

	protected onConstruct():void {
		this.m_title = <fgui.GTextField>(this.getChildAt(1));
		this.m_btn_ad = <fgui.GButton>(this.getChildAt(2));
		this.m_btn_ui = <fgui.GButton>(this.getChildAt(3));
		this.m_btn_record = <fgui.GButton>(this.getChildAt(4));
		this.m_btn_others = <fgui.GButton>(this.getChildAt(5));
		this.m_btn_common = <fgui.GButton>(this.getChildAt(6));
		this.m_btn_performance = <fgui.GButton>(this.getChildAt(7));
		this.m_btn_feature = <fgui.GButton>(this.getChildAt(8));
	}
}