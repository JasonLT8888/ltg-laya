/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_Test extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_btn_back:fgui.GButton;
	public m_text_notice:fgui.GTextField;
	public static URL:string = "ui://kk7g5mmmyllkl";

	public static createInstance():UI_Test {
		return <UI_Test>(fgui.UIPackage.createObject("Main", "Test"));
	}

	protected onConstruct():void {
		this.m_img_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_btn_back = <fgui.GButton>(this.getChildAt(1));
		this.m_text_notice = <fgui.GTextField>(this.getChildAt(2));
	}
}