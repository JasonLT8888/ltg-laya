/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Others extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_btn_back:fgui.GButton;
	public m_btn_share:fgui.GButton;
	public m_btn_othergame:fgui.GButton;
	public m_btn_const:fgui.GButton;
	public m_btn_shake_long:fgui.GButton;
	public m_btn_shake_short:fgui.GButton;
	public m_btn_jump:fgui.GButton;
	public m_btn_shake_playmusic:fgui.GButton;
	public m_btn_shake_stopmusic:fgui.GButton;
	public m_btn_shake_playshort:fgui.GButton;
	public static URL:string = "ui://kk7g5mmmx62bf";

	public static createInstance():UI_Others {
		return <UI_Others>(fgui.UIPackage.createObject("Main", "Others"));
	}

	protected onConstruct():void {
		this.m_title = <fgui.GTextField>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton>(this.getChildAt(2));
		this.m_btn_share = <fgui.GButton>(this.getChildAt(3));
		this.m_btn_othergame = <fgui.GButton>(this.getChildAt(4));
		this.m_btn_const = <fgui.GButton>(this.getChildAt(5));
		this.m_btn_shake_long = <fgui.GButton>(this.getChildAt(6));
		this.m_btn_shake_short = <fgui.GButton>(this.getChildAt(7));
		this.m_btn_jump = <fgui.GButton>(this.getChildAt(8));
		this.m_btn_shake_playmusic = <fgui.GButton>(this.getChildAt(9));
		this.m_btn_shake_stopmusic = <fgui.GButton>(this.getChildAt(10));
		this.m_btn_shake_playshort = <fgui.GButton>(this.getChildAt(11));
	}
}