/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_FunctionTest extends fgui.GComponent {

	public m_btn_back:fgui.GButton;
	public m_list_btns:fgui.GList;
	public static URL:string = "ui://kk7g5mmmyllkk";

	public static createInstance():UI_FunctionTest {
		return <UI_FunctionTest>(fgui.UIPackage.createObject("Main", "FunctionTest"));
	}

	protected onConstruct():void {
		this.m_btn_back = <fgui.GButton>(this.getChildAt(1));
		this.m_list_btns = <fgui.GList>(this.getChildAt(2));
	}
}