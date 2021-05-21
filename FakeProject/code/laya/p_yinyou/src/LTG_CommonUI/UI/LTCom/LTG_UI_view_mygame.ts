/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_view_mygame extends fgui.GComponent {

	public m_btn_back:fgui.GButton;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://hbq27te38gel1t";

	public static createInstance():LTG_UI_view_mygame {
		return <LTG_UI_view_mygame>(fgui.UIPackage.createObject("LTCom", "view_mygame"));
	}

	protected onConstruct():void {
		this.m_btn_back = <fgui.GButton>(this.getChildAt(0));
		this.m_t0 = this.getTransitionAt(0);
	}
}