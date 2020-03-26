/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_CommonTrySkin extends fgui.GComponent {

	public m_btn_thanks:fgui.GButton;
	public m_list_item:fgui.GList;

	public static URL:string = "ui://75kiu87kbg001v";

	public static createInstance():UI_CommonTrySkin {
		return <UI_CommonTrySkin><any>(fgui.UIPackage.createObject("LTGame","CommonTrySkin"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_thanks = <fgui.GButton><any>(this.getChildAt(2));
		this.m_list_item = <fgui.GList><any>(this.getChildAt(3));
	}
}