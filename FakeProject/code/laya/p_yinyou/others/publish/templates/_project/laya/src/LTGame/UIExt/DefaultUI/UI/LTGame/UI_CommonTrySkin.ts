/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_toggle_02 from "./UI_btn_toggle_02";

export default class UI_CommonTrySkin extends fgui.GComponent {

	public m_btn_thanks:fgui.GButton;
	public m_list_item:fgui.GList;
	public m_btn_toggle_check:UI_btn_toggle_02;
	public static URL:string = "ui://75kiu87kbg001v";

	public static createInstance():UI_CommonTrySkin {
		return <UI_CommonTrySkin>(fgui.UIPackage.createObject("LTGame", "CommonTrySkin"));
	}

	protected onConstruct():void {
		this.m_btn_thanks = <fgui.GButton>(this.getChildAt(2));
		this.m_list_item = <fgui.GList>(this.getChildAt(3));
		this.m_btn_toggle_check = <UI_btn_toggle_02>(this.getChildAt(4));
	}
}