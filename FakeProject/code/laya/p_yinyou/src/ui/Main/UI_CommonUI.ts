/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_CommonUI extends fgui.GComponent {

	public m_title:fgui.GTextField;
	public m_btn_back:fgui.GButton;
	public m_btn_sign:fgui.GButton;
	public m_btn_endshare:fgui.GButton;
	public m_btn_endreward:fgui.GButton;
	public m_btn_offline:fgui.GButton;
	public m_btn_tryskin:fgui.GButton;

	public static URL:string = "ui://kk7g5mmmfkl1g";

	public static createInstance():UI_CommonUI {
		return <UI_CommonUI><any>(fgui.UIPackage.createObject("Main","CommonUI"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_title = <fgui.GTextField><any>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(2));
		this.m_btn_sign = <fgui.GButton><any>(this.getChildAt(3));
		this.m_btn_endshare = <fgui.GButton><any>(this.getChildAt(4));
		this.m_btn_endreward = <fgui.GButton><any>(this.getChildAt(5));
		this.m_btn_offline = <fgui.GButton><any>(this.getChildAt(6));
		this.m_btn_tryskin = <fgui.GButton><any>(this.getChildAt(7));
	}
}