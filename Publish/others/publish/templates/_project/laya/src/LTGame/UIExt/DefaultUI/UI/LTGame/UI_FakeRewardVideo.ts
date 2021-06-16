/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_FakeRewardVideo extends fgui.GComponent {

	public m_btn_reward:fgui.GButton;
	public m_btn_skip:fgui.GButton;
	public static URL:string = "ui://75kiu87kovsy9";

	public static createInstance():UI_FakeRewardVideo {
		return <UI_FakeRewardVideo>(fgui.UIPackage.createObject("LTGame", "FakeRewardVideo"));
	}

	protected onConstruct():void {
		this.m_btn_reward = <fgui.GButton>(this.getChildAt(1));
		this.m_btn_skip = <fgui.GButton>(this.getChildAt(3));
	}
}