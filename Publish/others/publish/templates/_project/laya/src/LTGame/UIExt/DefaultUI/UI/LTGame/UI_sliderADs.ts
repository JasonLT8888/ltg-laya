/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_sliderADs extends fgui.GComponent {

	public m_list:fgui.GList;
	public static URL:string = "ui://75kiu87kulgb5x";

	public static createInstance():UI_sliderADs {
		return <UI_sliderADs>(fgui.UIPackage.createObject("LTGame", "sliderADs"));
	}

	protected onConstruct():void {
		this.m_list = <fgui.GList>(this.getChildAt(1));
	}
}