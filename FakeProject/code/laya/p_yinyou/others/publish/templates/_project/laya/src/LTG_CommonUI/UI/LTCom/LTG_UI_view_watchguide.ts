/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_view_watchguide extends fgui.GComponent {

	public m_btn_close:fgui.GButton;
	public m_loader_icon:fgui.GLoader;
	public static URL:string = "ui://hbq27te3odt06j";

	public static createInstance():LTG_UI_view_watchguide {
		return <LTG_UI_view_watchguide>(fgui.UIPackage.createObject("LTCom", "view_watchguide"));
	}

	protected onConstruct():void {
		this.m_btn_close = <fgui.GButton>(this.getChildAt(1));
		this.m_loader_icon = <fgui.GLoader>(this.getChildAt(3));
	}
}