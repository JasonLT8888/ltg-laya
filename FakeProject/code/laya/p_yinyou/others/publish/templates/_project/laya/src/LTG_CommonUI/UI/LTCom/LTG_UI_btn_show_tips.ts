/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_btn_show_tips extends fgui.GButton {

	public m_text_progress:fgui.GTextField;

	public static URL:string = "ui://hbq27te38gel2t";

	public static createInstance():LTG_UI_btn_show_tips {
		return <LTG_UI_btn_show_tips><any>(fgui.UIPackage.createObject("LTCom","btn_show_tips"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_text_progress = <fgui.GTextField><any>(this.getChildAt(2));
	}
}