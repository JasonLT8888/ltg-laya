/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_view_item_try_skin extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public static URL:string = "ui://75kiu87kbg0022";

	public static createInstance():UI_view_item_try_skin {
		return <UI_view_item_try_skin>(fgui.UIPackage.createObject("LTGame", "view_item_try_skin"));
	}

	protected onConstruct():void {
		this.m_icon = <fgui.GLoader>(this.getChildAt(1));
	}
}