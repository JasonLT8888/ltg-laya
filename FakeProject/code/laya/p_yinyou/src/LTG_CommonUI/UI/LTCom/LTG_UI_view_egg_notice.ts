/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_egg_notice extends fgui.GComponent {

	public m_btn_close:fgui.GButton;
	public m_btn_get_imd:fgui.GButton;
	public m_text_notice:fgui.GTextField;

	public static URL:string = "ui://hbq27te38gel34";

	public static createInstance():LTG_UI_view_egg_notice {
		return <LTG_UI_view_egg_notice><any>(fgui.UIPackage.createObject("LTCom","view_egg_notice"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(2));
		this.m_btn_get_imd = <fgui.GButton><any>(this.getChildAt(4));
		this.m_text_notice = <fgui.GTextField><any>(this.getChildAt(5));
	}
}