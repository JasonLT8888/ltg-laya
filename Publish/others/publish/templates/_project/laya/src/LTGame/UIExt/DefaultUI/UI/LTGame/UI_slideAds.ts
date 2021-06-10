/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_slideAds extends fgui.GComponent {

	public m_list0:fgui.GList;
	public m_list1:fgui.GList;
	public m_list2:fgui.GList;
	public static URL:string = "ui://75kiu87kp2ld6n";

	public static createInstance():UI_slideAds {
		return <UI_slideAds>(fgui.UIPackage.createObject("LTGame", "slideAds"));
	}

	protected onConstruct():void {
		this.m_list0 = <fgui.GList>(this.getChildAt(0));
		this.m_list1 = <fgui.GList>(this.getChildAt(1));
		this.m_list2 = <fgui.GList>(this.getChildAt(2));
	}
}