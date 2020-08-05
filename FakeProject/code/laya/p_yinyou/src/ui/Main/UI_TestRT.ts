/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_TestRT extends fgui.GComponent {

	public m_img_display:fgui.GGraph;
	public m_btn_back:fgui.GButton;

	public static URL:string = "ui://kk7g5mmmhlhem";

	public static createInstance():UI_TestRT {
		return <UI_TestRT><any>(fgui.UIPackage.createObject("Main","TestRT"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_display = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(1));
	}
}