/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_item_view_roll extends fgui.GComponent {

	public m_text_name:fgui.GTextField;
	public m_loader_icon:fgui.GLoader;

	public static URL:string = "ui://hbq27te38gel40";

	public static createInstance():LTG_UI_item_view_roll {
		return <LTG_UI_item_view_roll><any>(fgui.UIPackage.createObject("LTCom","item_view_roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_text_name = <fgui.GTextField><any>(this.getChildAt(0));
		this.m_loader_icon = <fgui.GLoader><any>(this.getChildAt(1));
	}
}