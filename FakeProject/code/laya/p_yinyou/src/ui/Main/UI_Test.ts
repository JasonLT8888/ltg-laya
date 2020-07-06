/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_Test extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_btn_back:fgui.GButton;

	public static URL:string = "ui://kk7g5mmmyllkl";

	public static createInstance():UI_Test {
		return <UI_Test><any>(fgui.UIPackage.createObject("Main","Test"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(1));
	}
}