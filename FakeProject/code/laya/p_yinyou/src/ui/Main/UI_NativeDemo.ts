/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_NativeDemo extends fgui.GComponent {

	public m___nativeinpage:fgui.GGraph;
	public m_btn_back:fgui.GButton;

	public static URL:string = "ui://kk7g5mmmn4aun";

	public static createInstance():UI_NativeDemo {
		return <UI_NativeDemo><any>(fgui.UIPackage.createObject("Main","NativeDemo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m___nativeinpage = <fgui.GGraph><any>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(2));
	}
}