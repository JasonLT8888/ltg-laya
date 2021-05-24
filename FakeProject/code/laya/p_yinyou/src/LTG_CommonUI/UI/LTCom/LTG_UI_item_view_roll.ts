/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_item_view_roll extends fgui.GComponent {

	public m_text_name:fgui.GTextField;
	public m_loader_icon:fgui.GLoader;
	public static URL:string = "ui://hbq27te38gel40";

	public static createInstance():LTG_UI_item_view_roll {
		return <LTG_UI_item_view_roll>(fgui.UIPackage.createObject("LTCom", "item_view_roll"));
	}

	protected onConstruct():void {
		this.m_text_name = <fgui.GTextField>(this.getChildAt(0));
		this.m_loader_icon = <fgui.GLoader>(this.getChildAt(1));
	}
}