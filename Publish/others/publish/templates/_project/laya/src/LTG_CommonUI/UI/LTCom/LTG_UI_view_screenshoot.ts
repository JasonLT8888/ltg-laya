/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_screenshoot extends fgui.GComponent {

	public m_btn_close:fgui.GButton;
	public m_btn_share:fgui.GButton;
	public m_img_display:fgui.GGraph;
	public m_view_play:fgui.GComponent;

	public static URL:string = "ui://hbq27te3t2mg75";

	public static createInstance():LTG_UI_view_screenshoot {
		return <LTG_UI_view_screenshoot><any>(fgui.UIPackage.createObject("LTCom","view_screenshoot"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(2));
		this.m_btn_share = <fgui.GButton><any>(this.getChildAt(4));
		this.m_img_display = <fgui.GGraph><any>(this.getChildAt(5));
		this.m_view_play = <fgui.GComponent><any>(this.getChildAt(6));
	}
}