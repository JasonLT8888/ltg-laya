/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_title_set extends fgui.GComponent {

	public m_title_icon:fgui.GLoader;

	public static URL:string = "ui://hbq27te38gel6";

	public static createInstance():LTG_UI_view_title_set {
		return <LTG_UI_view_title_set><any>(fgui.UIPackage.createObject("LTCom","view_title_set"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_title_icon = <fgui.GLoader><any>(this.getChildAt(1));
	}
}