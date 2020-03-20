/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_ADDemo extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_btn_back:fgui.GButton;
	public m_btn_show_banner:fgui.GButton;
	public m_btn_hide_banner:fgui.GButton;
	public m_btn_rewardvideo:fgui.GButton;
	public m_btn_intvideo:fgui.GButton;
	public m_btn_startrecord:fgui.GButton;
	public m_btn_sharevideo:fgui.GButton;

	public static URL:string = "ui://kk7g5mmmgxfzb";

	public static createInstance():UI_ADDemo {
		return <UI_ADDemo><any>(fgui.UIPackage.createObject("Main","ADDemo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_title = <fgui.GTextField><any>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(2));
		this.m_btn_show_banner = <fgui.GButton><any>(this.getChildAt(3));
		this.m_btn_hide_banner = <fgui.GButton><any>(this.getChildAt(4));
		this.m_btn_rewardvideo = <fgui.GButton><any>(this.getChildAt(5));
		this.m_btn_intvideo = <fgui.GButton><any>(this.getChildAt(6));
		this.m_btn_startrecord = <fgui.GButton><any>(this.getChildAt(7));
		this.m_btn_sharevideo = <fgui.GButton><any>(this.getChildAt(8));
	}
}