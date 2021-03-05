/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_view_rewardcode extends fgui.GComponent {

	public m_btn_confirm:fgui.GButton;
	public m_btn_cancel:fgui.GButton;
	public m_text_input:fgui.GTextInput;
	public static URL:string = "ui://hbq27te38gely";

	public static createInstance():LTG_UI_view_rewardcode {
		return <LTG_UI_view_rewardcode>(fgui.UIPackage.createObject("LTCom", "view_rewardcode"));
	}

	protected onConstruct():void {
		this.m_btn_confirm = <fgui.GButton>(this.getChildAt(4));
		this.m_btn_cancel = <fgui.GButton>(this.getChildAt(5));
		this.m_text_input = <fgui.GTextInput>(this.getChildAt(7));
	}
}