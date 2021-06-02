/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_view_item_egg extends fgui.GComponent {

	public m_state_lock:fgui.Controller;
	public m_img_selected:fgui.GImage;
	public m_text_progress:fgui.GTextField;
	public m_text_lockstr:fgui.GTextField;
	public m_loader_icon:fgui.GLoader;
	public static URL:string = "ui://hbq27te3mwzx93";

	public static createInstance():LTG_UI_view_item_egg {
		return <LTG_UI_view_item_egg>(fgui.UIPackage.createObject("LTCom", "view_item_egg"));
	}

	protected onConstruct():void {
		this.m_state_lock = this.getControllerAt(0);
		this.m_img_selected = <fgui.GImage>(this.getChildAt(1));
		this.m_text_progress = <fgui.GTextField>(this.getChildAt(4));
		this.m_text_lockstr = <fgui.GTextField>(this.getChildAt(5));
		this.m_loader_icon = <fgui.GLoader>(this.getChildAt(6));
	}
}