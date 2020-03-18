/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_Fight extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_text_combo:fgui.GTextField;

	public static URL:string = "ui://kk7g5mmmcc4x4";

	public static createInstance():UI_Fight {
		return <UI_Fight><any>(fgui.UIPackage.createObject("Main","Fight"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_text_combo = <fgui.GTextField><any>(this.getChildAt(1));
	}
}