/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_NativeDemo extends fgui.GComponent {

	public m___nativeinpage:fgui.GGraph;
	public m_btn_back:fgui.GButton;
	public static URL:string = "ui://kk7g5mmmn4aun";

	public static createInstance():UI_NativeDemo {
		return <UI_NativeDemo>(fgui.UIPackage.createObject("Main", "NativeDemo"));
	}

	protected onConstruct():void {
		this.m___nativeinpage = <fgui.GGraph>(this.getChildAt(1));
		this.m_btn_back = <fgui.GButton>(this.getChildAt(2));
	}
}