/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_mid_banner extends fgui.GComponent {

	public m_icon:fgui.GButton;

	public static URL:string = "ui://75kiu87knmlkij";

	public static createInstance():UI_mid_banner {
		return <UI_mid_banner><any>(fgui.UIPackage.createObject("LTGame","mid_banner"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GButton><any>(this.getChildAt(0));
	}
}