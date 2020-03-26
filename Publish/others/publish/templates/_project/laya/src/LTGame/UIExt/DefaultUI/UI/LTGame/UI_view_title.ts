/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_view_title extends fgui.GComponent {

	public m_icon:fgui.GLoader;

	public static URL:string = "ui://75kiu87kbg001l";

	public static createInstance():UI_view_title {
		return <UI_view_title><any>(fgui.UIPackage.createObject("LTGame","view_title"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(1));
	}
}