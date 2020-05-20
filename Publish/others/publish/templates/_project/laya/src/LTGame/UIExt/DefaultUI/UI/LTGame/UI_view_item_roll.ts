/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_view_item_roll extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public m_text_title:fgui.GTextField;
	public static URL:string = "ui://75kiu87kbg002q";

	public static createInstance():UI_view_item_roll {
		return <UI_view_item_roll>(fgui.UIPackage.createObject("LTGame", "view_item_roll"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(0));
		this.m_text_title = <fgui.GTextField>(this.getChildAt(1));
	}
}