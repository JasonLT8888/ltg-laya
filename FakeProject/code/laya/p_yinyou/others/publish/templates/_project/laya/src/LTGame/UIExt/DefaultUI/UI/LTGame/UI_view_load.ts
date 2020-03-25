/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_view_load extends fgui.GComponent {

	public m_text_load:fgui.GTextField;
	public m_rotate:fgui.Transition;

	public static URL:string = "ui://75kiu87kmhase";

	public static createInstance():UI_view_load {
		return <UI_view_load><any>(fgui.UIPackage.createObject("LTGame","view_load"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_text_load = <fgui.GTextField><any>(this.getChildAt(2));
		this.m_rotate = this.getTransitionAt(0);
	}
}