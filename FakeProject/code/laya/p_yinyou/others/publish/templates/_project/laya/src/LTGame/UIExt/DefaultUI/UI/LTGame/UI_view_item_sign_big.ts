/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_view_item_sign_big extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_text_day:fgui.GTextField;
	public m_icon_reward:fgui.GLoader;
	public m_text_reward:fgui.GTextField;

	public static URL:string = "ui://75kiu87kq0fh56";

	public static createInstance():UI_view_item_sign_big {
		return <UI_view_item_sign_big><any>(fgui.UIPackage.createObject("LTGame","view_item_sign_big"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_c1 = this.getControllerAt(0);
		this.m_text_day = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_icon_reward = <fgui.GLoader><any>(this.getChildAt(4));
		this.m_text_reward = <fgui.GTextField><any>(this.getChildAt(5));
	}
}