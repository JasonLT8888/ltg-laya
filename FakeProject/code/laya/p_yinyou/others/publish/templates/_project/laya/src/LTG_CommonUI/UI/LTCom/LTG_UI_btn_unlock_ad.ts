/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_btn_unlock_ad extends fgui.GButton {

	public m_text_progress:fgui.GTextField;

	public static URL:string = "ui://hbq27te3n2g170";

	public static createInstance():LTG_UI_btn_unlock_ad {
		return <LTG_UI_btn_unlock_ad><any>(fgui.UIPackage.createObject("LTCom","btn_unlock_ad"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_text_progress = <fgui.GTextField><any>(this.getChildAt(3));
	}
}