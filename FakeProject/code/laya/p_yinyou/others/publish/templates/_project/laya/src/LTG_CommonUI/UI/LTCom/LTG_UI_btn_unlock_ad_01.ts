/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_btn_unlock_ad_01 extends fgui.GButton {

	public m_text_value:fgui.GTextField;
	public static URL:string = "ui://hbq27te3mwzx92";

	public static createInstance():LTG_UI_btn_unlock_ad_01 {
		return <LTG_UI_btn_unlock_ad_01>(fgui.UIPackage.createObject("LTCom", "btn_unlock_ad_01"));
	}

	protected onConstruct():void {
		this.m_text_value = <fgui.GTextField>(this.getChildAt(3));
	}
}