/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_unlock_progress extends fgui.GComponent {

	public m_loader_01:fgui.GLoader;
	public m_loader_02:fgui.GLoader;
	public m_text_01:fgui.GTextField;
	public m_text_02:fgui.GTextField;

	public static URL:string = "ui://hbq27te3mwzx94";

	public static createInstance():LTG_UI_view_unlock_progress {
		return <LTG_UI_view_unlock_progress><any>(fgui.UIPackage.createObject("LTCom","view_unlock_progress"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_loader_01 = <fgui.GLoader><any>(this.getChildAt(5));
		this.m_loader_02 = <fgui.GLoader><any>(this.getChildAt(6));
		this.m_text_01 = <fgui.GTextField><any>(this.getChildAt(7));
		this.m_text_02 = <fgui.GTextField><any>(this.getChildAt(8));
	}
}