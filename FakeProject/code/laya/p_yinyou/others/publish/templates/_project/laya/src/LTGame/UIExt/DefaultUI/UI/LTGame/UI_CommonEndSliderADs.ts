/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_CommonEndSliderADs extends fgui.GComponent {

	public m_list:fgui.GList;
	public static URL:string = "ui://75kiu87kj9at6j";

	public static createInstance():UI_CommonEndSliderADs {
		return <UI_CommonEndSliderADs>(fgui.UIPackage.createObject("LTGame", "CommonEndSliderADs"));
	}

	protected onConstruct():void {
		this.m_list = <fgui.GList>(this.getChildAt(1));
	}
}