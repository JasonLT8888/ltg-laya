/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_watchguide extends fgui.GComponent {

	public m_btn_close:fgui.GButton;
	public m_loader_icon:fgui.GLoader;

	public static URL:string = "ui://hbq27te3odt06j";

	public static createInstance():LTG_UI_view_watchguide {
		return <LTG_UI_view_watchguide><any>(fgui.UIPackage.createObject("LTCom","view_watchguide"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(1));
		this.m_loader_icon = <fgui.GLoader><any>(this.getChildAt(3));
	}
}