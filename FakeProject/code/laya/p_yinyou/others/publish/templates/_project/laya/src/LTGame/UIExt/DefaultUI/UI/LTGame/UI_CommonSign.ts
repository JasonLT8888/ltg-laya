/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_common_sign from "./UI_view_common_sign";

export default class UI_CommonSign extends fgui.GComponent {

	public m_view:UI_view_common_sign;
	public static URL:string = "ui://75kiu87kit2ij";

	public static createInstance():UI_CommonSign {
		return <UI_CommonSign>(fgui.UIPackage.createObject("LTGame", "CommonSign"));
	}

	protected onConstruct():void {
		this.m_view = <UI_view_common_sign>(this.getChildAt(1));
	}
}