/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CommonToast extends fgui.GComponent {

	public m_list_toast:fgui.GList;
	public static URL:string = "ui://75kiu87kovsy7";

	public static createInstance():UI_CommonToast {
		return <UI_CommonToast>(fgui.UIPackage.createObject("LTGame", "CommonToast"));
	}

	protected onConstruct():void {
		this.m_list_toast = <fgui.GList>(this.getChildAt(0));
	}
}