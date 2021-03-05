/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_view_watchdy extends fgui.GComponent {

	public m_btn_follow:fgui.GButton;
	public m_text_code:fgui.GTextField;
	public m_btn_watch:fgui.GGraph;
	public m_icon:fgui.GLoader;
	public static URL:string = "ui://hbq27te38gel4g";

	public static createInstance():LTG_UI_view_watchdy {
		return <LTG_UI_view_watchdy>(fgui.UIPackage.createObject("LTCom", "view_watchdy"));
	}

	protected onConstruct():void {
		this.m_btn_follow = <fgui.GButton>(this.getChildAt(1));
		this.m_text_code = <fgui.GTextField>(this.getChildAt(2));
		this.m_btn_watch = <fgui.GGraph>(this.getChildAt(3));
		this.m_icon = <fgui.GLoader>(this.getChildAt(4));
	}
}