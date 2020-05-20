/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_normal from "./UI_btn_normal";

export default class UI_NativeBigAd extends fgui.GComponent {

	public m_img:fgui.GLoader;
	public m_tag:fgui.GLoader;
	public m_icon:fgui.GLoader;
	public m_title:fgui.GTextField;
	public m_desc:fgui.GTextField;
	public m_btn_close:UI_btn_normal;
	public static URL:string = "ui://75kiu87kl2ax4k";

	public static createInstance():UI_NativeBigAd {
		return <UI_NativeBigAd>(fgui.UIPackage.createObject("LTGame", "NativeBigAd"));
	}

	protected onConstruct():void {
		this.m_img = <fgui.GLoader>(this.getChildAt(0));
		this.m_tag = <fgui.GLoader>(this.getChildAt(1));
		this.m_icon = <fgui.GLoader>(this.getChildAt(2));
		this.m_title = <fgui.GTextField>(this.getChildAt(3));
		this.m_desc = <fgui.GTextField>(this.getChildAt(4));
		this.m_btn_close = <UI_btn_normal>(this.getChildAt(5));
	}
}