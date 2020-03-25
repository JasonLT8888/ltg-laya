/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_view_toast extends fgui.GComponent {

	public m_toast_str:fgui.GTextField;
	public m_show:fgui.Transition;

	public static URL:string = "ui://75kiu87kovsy8";

	public static createInstance():UI_view_toast {
		return <UI_view_toast><any>(fgui.UIPackage.createObject("LTGame","view_toast"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_toast_str = <fgui.GTextField><any>(this.getChildAt(1));
		this.m_show = this.getTransitionAt(0);
	}
}