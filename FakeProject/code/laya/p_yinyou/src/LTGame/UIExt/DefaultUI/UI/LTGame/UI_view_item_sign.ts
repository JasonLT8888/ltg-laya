/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_view_item_sign extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_text_day:fgui.GTextField;
	public m_icon_reward:fgui.GLoader;
	public m_text_reward:fgui.GTextField;
	public static URL:string = "ui://75kiu87kit2ix";

	public static createInstance():UI_view_item_sign {
		return <UI_view_item_sign>(fgui.UIPackage.createObject("LTGame", "view_item_sign"));
	}

	protected onConstruct():void {
		this.m_c1 = this.getControllerAt(0);
		this.m_text_day = <fgui.GTextField>(this.getChildAt(3));
		this.m_icon_reward = <fgui.GLoader>(this.getChildAt(4));
		this.m_text_reward = <fgui.GTextField>(this.getChildAt(5));
	}
}