/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_UIDemo extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_btn_back:fgui.GButton;
	public m_btn_toast:fgui.GButton;
	public m_btn_load:fgui.GButton;
	public m_btn_fly_cons:fgui.GButton;
	public static URL:string = "ui://kk7g5mmmgxfzd";

	public static createInstance():UI_UIDemo {
		return <UI_UIDemo>(fgui.UIPackage.createObject("Main", "UIDemo"));
	}

	protected onConstruct():void {
		this.m_title = <fgui.GTextField>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton>(this.getChildAt(2));
		this.m_btn_toast = <fgui.GButton>(this.getChildAt(3));
		this.m_btn_load = <fgui.GButton>(this.getChildAt(4));
		this.m_btn_fly_cons = <fgui.GButton>(this.getChildAt(5));
	}
}