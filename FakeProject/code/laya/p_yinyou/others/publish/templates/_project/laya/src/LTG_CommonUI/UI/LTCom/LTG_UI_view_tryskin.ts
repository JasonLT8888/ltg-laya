/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_view_tryskin extends fgui.GComponent {

	public m_btn_no:fgui.GButton;
	public m_btn_try:fgui.GButton;
	public m_img_display:fgui.GGraph;
	public m_loader_title:fgui.GLoader;
	public static URL:string = "ui://hbq27te3bl1a8c";

	public static createInstance():LTG_UI_view_tryskin {
		return <LTG_UI_view_tryskin>(fgui.UIPackage.createObject("LTCom", "view_tryskin"));
	}

	protected onConstruct():void {
		this.m_btn_no = <fgui.GButton>(this.getChildAt(1));
		this.m_btn_try = <fgui.GButton>(this.getChildAt(2));
		this.m_img_display = <fgui.GGraph>(this.getChildAt(3));
		this.m_loader_title = <fgui.GLoader>(this.getChildAt(4));
	}
}