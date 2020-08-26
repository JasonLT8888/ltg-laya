/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_limit_skin extends fgui.GComponent {

	public m_loader_icon:fgui.GLoader;
	public m_loader_text:fgui.GLoader;

	public static URL:string = "ui://hbq27te38gel45";

	public static createInstance():LTG_UI_view_limit_skin {
		return <LTG_UI_view_limit_skin><any>(fgui.UIPackage.createObject("LTCom","view_limit_skin"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_loader_icon = <fgui.GLoader><any>(this.getChildAt(1));
		this.m_loader_text = <fgui.GLoader><any>(this.getChildAt(2));
	}
}