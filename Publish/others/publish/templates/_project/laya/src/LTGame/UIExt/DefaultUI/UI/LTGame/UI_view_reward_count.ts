/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_view_reward_count extends fgui.GButton {

	public m_icon_img:fgui.GLoader;
	public m_text_count:fgui.GTextField;

	public static URL:string = "ui://75kiu87kbg001j";

	public static createInstance():UI_view_reward_count {
		return <UI_view_reward_count><any>(fgui.UIPackage.createObject("LTGame","view_reward_count"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon_img = <fgui.GLoader><any>(this.getChildAt(1));
		this.m_text_count = <fgui.GTextField><any>(this.getChildAt(2));
	}
}