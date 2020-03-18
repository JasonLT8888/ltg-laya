/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_Load extends fgui.GComponent {

	public m_text_str:fgui.GTextField;

	public static URL:string = "ui://kk7g5mmmk28i5";

	public static createInstance():UI_Load {
		return <UI_Load><any>(fgui.UIPackage.createObject("Main","Load"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_text_str = <fgui.GTextField><any>(this.getChildAt(1));
	}
}