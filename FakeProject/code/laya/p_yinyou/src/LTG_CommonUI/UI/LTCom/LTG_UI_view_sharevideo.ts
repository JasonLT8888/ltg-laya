/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_sharevideo extends fgui.GComponent {

	public m_loader_text:fgui.GLoader;
	public m_loader_icon:fgui.GLoader;
	public m_btn_share:fgui.GButton;
	public m_btn_close:fgui.GButton;

	public static URL:string = "ui://hbq27te38gel4t";

	public static createInstance():LTG_UI_view_sharevideo {
		return <LTG_UI_view_sharevideo><any>(fgui.UIPackage.createObject("LTCom","view_sharevideo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_loader_text = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_loader_icon = <fgui.GLoader><any>(this.getChildAt(3));
		this.m_btn_share = <fgui.GButton><any>(this.getChildAt(5));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(6));
	}
}