/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_Channel extends fgui.GComponent {

	public m_state:fgui.Controller;
	public m_txt_input:fgui.GTextInput;
	public m_txt_show:fgui.GTextField;
	public m_btn_yes:fgui.GButton;
	public m_btn_close:fgui.GButton;
	public m_btn_rebind:fgui.GButton;

	public static URL:string = "ui://75kiu87kgn6shg";

	public static createInstance():UI_Channel {
		return <UI_Channel><any>(fgui.UIPackage.createObject("LTGame","Channel"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_state = this.getControllerAt(0);
		this.m_txt_input = <fgui.GTextInput><any>(this.getChildAt(2));
		this.m_txt_show = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_btn_yes = <fgui.GButton><any>(this.getChildAt(4));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(5));
		this.m_btn_rebind = <fgui.GButton><any>(this.getChildAt(6));
	}
}