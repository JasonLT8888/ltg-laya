/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_toast from "./UI_view_toast";

export default class UI_CommonToast extends fgui.GComponent {

	public m_toast:UI_view_toast;
	public static URL:string = "ui://75kiu87kovsy7";

	public static createInstance():UI_CommonToast {
		return <UI_CommonToast>(fgui.UIPackage.createObject("LTGame", "CommonToast"));
	}

	protected onConstruct():void {
		this.m_toast = <UI_view_toast>(this.getChildAt(0));
	}
}