/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_FakeBanner_V extends fgui.GComponent {

	public m_banner:fgui.GComponent;
	public static URL:string = "ui://75kiu87kovsy4";

	public static createInstance():UI_FakeBanner_V {
		return <UI_FakeBanner_V>(fgui.UIPackage.createObject("LTGame", "FakeBanner_V"));
	}

	protected onConstruct():void {
		this.m_banner = <fgui.GComponent>(this.getChildAt(0));
	}
}