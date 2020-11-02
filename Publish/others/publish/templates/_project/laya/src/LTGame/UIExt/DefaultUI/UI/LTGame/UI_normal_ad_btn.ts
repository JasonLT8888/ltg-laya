/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_normal_ad_btn extends fgui.GButton {

	public m_showAd:fgui.Controller;
	public m_bg:fgui.GLoader;
	public m_adTag:fgui.GLoader;
	public m_title_icon:fgui.GLoader;

	public static URL:string = "ui://75kiu87kvo5ih2";

	public static createInstance():UI_normal_ad_btn {
		return <UI_normal_ad_btn><any>(fgui.UIPackage.createObject("LTGame","normal_ad_btn"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_showAd = this.getControllerAt(0);
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_adTag = <fgui.GLoader><any>(this.getChildAt(1));
		this.m_title_icon = <fgui.GLoader><any>(this.getChildAt(2));
	}
}