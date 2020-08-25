/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_item_view_eggwall extends fgui.GComponent {

	public m_btn_get_tip:fgui.GButton;
	public m_btn_show_tip:fgui.GButton;

	public static URL:string = "ui://hbq27te38gel2u";

	public static createInstance():LTG_UI_item_view_eggwall {
		return <LTG_UI_item_view_eggwall><any>(fgui.UIPackage.createObject("LTCom","item_view_eggwall"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_get_tip = <fgui.GButton><any>(this.getChildAt(3));
		this.m_btn_show_tip = <fgui.GButton><any>(this.getChildAt(5));
	}
}