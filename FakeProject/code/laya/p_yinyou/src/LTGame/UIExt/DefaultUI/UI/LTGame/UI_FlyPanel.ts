/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_FlyPanel extends fgui.GComponent {

	public m_test:fgui.GTextField;
	public static URL:string = "ui://75kiu87kh75rf";

	public static createInstance():UI_FlyPanel {
		return <UI_FlyPanel>(fgui.UIPackage.createObject("LTGame", "FlyPanel"));
	}

	protected onConstruct():void {
		this.m_test = <fgui.GTextField>(this.getChildAt(0));
	}
}