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
		return <UI_CommonOffline><any>(fgui.UIPackage.createObject("LTGame","CommonOffline"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GImage><any>(this.getChildAt(3));
		this.m_text_max_offline_time = <fgui.GTextField><any>(this.getChildAt(4));
		this.m_btn_nothanks = <fgui.GButton><any>(this.getChildAt(5));
		this.m_text_value = <fgui.GTextField><any>(this.getChildAt(6));
		this.m_btn_double_get = <fgui.GButton><any>(this.getChildAt(7));
		this.m_view_scale = <fgui.GComponent><any>(this.getChildAt(8));
		this.m_text_offline_time = <fgui.GTextField><any>(this.getChildAt(9));
		this.m_t0 = this.getTransitionAt(0);
	}
}