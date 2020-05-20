/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CommonOffline extends fgui.GComponent {

	public m_icon:fgui.GImage;
	public m_text_max_offline_time:fgui.GTextField;
	public m_btn_nothanks:fgui.GButton;
	public m_text_value:fgui.GTextField;
	public m_btn_double_get:fgui.GButton;
	public m_view_scale:fgui.GComponent;
	public m_text_offline_time:fgui.GTextField;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://75kiu87kbg001m";

	public static createInstance():UI_CommonOffline {
		return <UI_CommonOffline>(fgui.UIPackage.createObject("LTGame", "CommonOffline"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GImage>(this.getChildAt(3));
		this.m_text_max_offline_time = <fgui.GTextField>(this.getChildAt(4));
		this.m_btn_nothanks = <fgui.GButton>(this.getChildAt(5));
		this.m_text_value = <fgui.GTextField>(this.getChildAt(6));
		this.m_btn_double_get = <fgui.GButton>(this.getChildAt(7));
		this.m_view_scale = <fgui.GComponent>(this.getChildAt(8));
		this.m_text_offline_time = <fgui.GTextField>(this.getChildAt(9));
		this.m_t0 = this.getTransitionAt(0);
	}
}