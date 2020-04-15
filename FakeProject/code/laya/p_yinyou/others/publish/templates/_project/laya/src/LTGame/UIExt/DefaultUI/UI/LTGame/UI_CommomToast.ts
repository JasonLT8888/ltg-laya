/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_toast from "./UI_view_toast";

export default class UI_CommomToast extends fgui.GComponent {

	public m_toast:UI_view_toast;

	public static URL:string = "ui://75kiu87kovsy7";

	public static createInstance():UI_CommomToast {
		return <UI_CommomToast><any>(fgui.UIPackage.createObject("LTGame","CommomToast"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_toast = <UI_view_toast><any>(this.getChildAt(0));
	}
}