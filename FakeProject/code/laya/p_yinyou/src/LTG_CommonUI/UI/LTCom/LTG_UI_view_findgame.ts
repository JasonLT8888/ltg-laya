/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_findgame extends fgui.GComponent {

	public m_loader_icon:fgui.GLoader;
	public m_btn_close:fgui.GButton;
	public m_btn_ok:fgui.GButton;

	public static URL:string = "ui://hbq27te38gel1j";

	public static createInstance():LTG_UI_view_findgame {
		return <LTG_UI_view_findgame><any>(fgui.UIPackage.createObject("LTCom","view_findgame"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_loader_icon = <fgui.GLoader><any>(this.getChildAt(4));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(5));
		this.m_btn_ok = <fgui.GButton><any>(this.getChildAt(6));
	}
}