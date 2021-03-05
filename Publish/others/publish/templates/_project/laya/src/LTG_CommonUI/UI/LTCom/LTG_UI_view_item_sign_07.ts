/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class LTG_UI_view_item_sign_07 extends fgui.GComponent {

	public m_state_get:fgui.Controller;
	public m_img_can_get:fgui.GImage;
	public m_loader_icon:fgui.GLoader;
	public m_loader_title:fgui.GLoader;
	public m_img_got:fgui.GImage;
	public static URL:string = "ui://hbq27te38gel5b";

	public static createInstance():LTG_UI_view_item_sign_07 {
		return <LTG_UI_view_item_sign_07>(fgui.UIPackage.createObject("LTCom", "view_item_sign_07"));
	}

	protected onConstruct():void {
		this.m_state_get = this.getControllerAt(0);
		this.m_img_can_get = <fgui.GImage>(this.getChildAt(2));
		this.m_loader_icon = <fgui.GLoader>(this.getChildAt(3));
		this.m_loader_title = <fgui.GLoader>(this.getChildAt(5));
		this.m_img_got = <fgui.GImage>(this.getChildAt(8));
	}
}