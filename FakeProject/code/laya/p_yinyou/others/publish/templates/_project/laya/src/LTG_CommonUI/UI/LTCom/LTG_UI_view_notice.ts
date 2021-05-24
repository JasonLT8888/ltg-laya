/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_view_notice extends fgui.GComponent {

	public m_text_notice:fgui.GTextField;
	public m_btn_close:fgui.GButton;
	public static URL:string = "ui://hbq27te38gel16";

	public static createInstance():LTG_UI_view_notice {
		return <LTG_UI_view_notice>(fgui.UIPackage.createObject("LTCom", "view_notice"));
	}

	protected onConstruct():void {
		this.m_text_notice = <fgui.GTextField>(this.getChildAt(4));
		this.m_btn_close = <fgui.GButton>(this.getChildAt(5));
	}
}