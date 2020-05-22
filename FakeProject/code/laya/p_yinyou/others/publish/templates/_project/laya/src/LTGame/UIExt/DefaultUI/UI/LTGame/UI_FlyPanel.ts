/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_FlyPanel extends fgui.GComponent {

	public m_test:fgui.GTextField;

	public static URL:string = "ui://75kiu87kh75rf";

	public static createInstance():UI_FlyPanel {
		return <UI_FlyPanel><any>(fgui.UIPackage.createObject("LTGame","FlyPanel"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_test = <fgui.GTextField><any>(this.getChildAt(0));
	}
}