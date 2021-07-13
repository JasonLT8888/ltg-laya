/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_item_egg1 extends fgui.GComponent {

	public m_state_lock:fgui.Controller;
	public m_img_selected:fgui.Controller;
	public m_loader_icon:fgui.GLoader;
	public m_txt_name:fgui.GLoader;
	public m_btn_reward_video:fgui.GButton;
	public m_btn_get_detail:fgui.GButton;

	public static URL:string = "ui://hbq27te3x4fgd6";

	public static createInstance():LTG_UI_view_item_egg1 {
		return <LTG_UI_view_item_egg1><any>(fgui.UIPackage.createObject("LTCom","view_item_egg1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_state_lock = this.getControllerAt(0);
		this.m_img_selected = this.getControllerAt(1);
		this.m_loader_icon = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_txt_name = <fgui.GLoader><any>(this.getChildAt(3));
		this.m_btn_reward_video = <fgui.GButton><any>(this.getChildAt(5));
		this.m_btn_get_detail = <fgui.GButton><any>(this.getChildAt(6));
	}
}