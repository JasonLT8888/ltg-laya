/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_FakeInterstital extends fgui.GComponent {

	public m_btn_close:fgui.GButton;

	public static URL:string = "ui://75kiu87kovsyb";

	public static createInstance():UI_FakeInterstital {
		return <UI_FakeInterstital><any>(fgui.UIPackage.createObject("LTGame","FakeInterstital"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(2));
	}
}