/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_btn_scaler_yellow extends fgui.GButton {

	public m_title_icon:fgui.GLoader;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://75kiu87kvo5igy";

	public static createInstance():UI_btn_scaler_yellow {
		return <UI_btn_scaler_yellow>(fgui.UIPackage.createObject("LTGame", "btn_scaler_yellow"));
	}

	protected onConstruct():void {
		this.m_title_icon = <fgui.GLoader>(this.getChildAt(2));
		this.m_t0 = this.getTransitionAt(0);
	}
}