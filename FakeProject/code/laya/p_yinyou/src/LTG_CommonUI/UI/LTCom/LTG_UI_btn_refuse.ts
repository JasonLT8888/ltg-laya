/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_btn_refuse extends fgui.GButton {

	public m_bg:fgui.GImage;
	public static URL:string = "ui://hbq27te3n2g171";

	public static createInstance():LTG_UI_btn_refuse {
		return <LTG_UI_btn_refuse>(fgui.UIPackage.createObject("LTCom", "btn_refuse"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GImage>(this.getChildAt(0));
	}
}