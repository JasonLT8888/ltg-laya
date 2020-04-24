/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_side_ads extends fgui.GComponent {

	public m_list:fgui.GList;
	public m_btn_return:fgui.GButton;

	public static URL:string = "ui://75kiu87k74v84c";

	public static createInstance():UI_side_ads {
		return <UI_side_ads><any>(fgui.UIPackage.createObject("LTGame","side_ads"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_list = <fgui.GList><any>(this.getChildAt(2));
		this.m_btn_return = <fgui.GButton><any>(this.getChildAt(3));
	}
}