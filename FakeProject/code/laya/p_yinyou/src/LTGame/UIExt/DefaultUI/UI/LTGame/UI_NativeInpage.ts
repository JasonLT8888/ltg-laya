/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Native320 from "./UI_Native320";
import UI_btn_native from "./UI_btn_native";

export default class UI_NativeInpage extends fgui.GComponent {

	public m_ad:UI_Native320;
	public m_btn_pay:UI_btn_native;
	public static URL:string = "ui://75kiu87koviw62";

	public static createInstance():UI_NativeInpage {
		return <UI_NativeInpage>(fgui.UIPackage.createObject("LTGame", "NativeInpage"));
	}

	protected onConstruct():void {
		this.m_ad = <UI_Native320>(this.getChildAt(0));
		this.m_btn_pay = <UI_btn_native>(this.getChildAt(1));
	}
}