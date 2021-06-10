/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_btn_red_scale extends fgui.GButton {

	public m_style:fgui.Controller;
	public m_title_icon:fgui.GLoader;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://75kiu87kvo5ih5";

	public static createInstance():UI_btn_red_scale {
		return <UI_btn_red_scale>(fgui.UIPackage.createObject("LTGame", "btn_red_scale"));
	}

	protected onConstruct():void {
		this.m_style = this.getControllerAt(1);
		this.m_title_icon = <fgui.GLoader>(this.getChildAt(2));
		this.m_t0 = this.getTransitionAt(0);
	}
}