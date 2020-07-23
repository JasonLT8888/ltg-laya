/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_RecordDemo extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_btn_back:fgui.GButton;
	public m_btn_start_record:fgui.GButton;
	public m_btn_stop_record:fgui.GButton;
	public m_btn_pause_record:fgui.GButton;
	public m_btn_resume_record:fgui.GButton;
	public m_btn_record_clip:fgui.GButton;
	public m_text_supportrecord:fgui.GTextField;
	public m_text_isrecording:fgui.GTextField;
	public m_text_pausestate:fgui.GTextField;
	public m_text_savepath:fgui.GTextField;
	public m_btn_share_video:fgui.GButton;
	public static URL:string = "ui://kk7g5mmmx62be";

	public static createInstance():UI_RecordDemo {
		return <UI_RecordDemo>(fgui.UIPackage.createObject("Main", "RecordDemo"));
	}

	protected onConstruct():void {
		this.m_title = <fgui.GTextField>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton>(this.getChildAt(2));
		this.m_btn_start_record = <fgui.GButton>(this.getChildAt(3));
		this.m_btn_stop_record = <fgui.GButton>(this.getChildAt(4));
		this.m_btn_pause_record = <fgui.GButton>(this.getChildAt(5));
		this.m_btn_resume_record = <fgui.GButton>(this.getChildAt(6));
		this.m_btn_record_clip = <fgui.GButton>(this.getChildAt(7));
		this.m_text_supportrecord = <fgui.GTextField>(this.getChildAt(9));
		this.m_text_isrecording = <fgui.GTextField>(this.getChildAt(10));
		this.m_text_pausestate = <fgui.GTextField>(this.getChildAt(11));
		this.m_text_savepath = <fgui.GTextField>(this.getChildAt(12));
		this.m_btn_share_video = <fgui.GButton>(this.getChildAt(13));
	}
}