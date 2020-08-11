/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_rollReward extends fgui.GButton {

	public m_btn_reward:fgui.GImage;

	public static URL:string = "ui://xwcraheakntfjf";

	public static createInstance():UI_btn_rollReward {
		return <UI_btn_rollReward><any>(fgui.UIPackage.createObject("LTUI","btn_rollReward"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_reward = <fgui.GImage><any>(this.getChildAt(0));
	}
}