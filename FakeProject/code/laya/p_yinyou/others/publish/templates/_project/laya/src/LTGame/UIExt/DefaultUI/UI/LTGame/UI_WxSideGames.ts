/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_WxSideGames extends fgui.GComponent {

	public m_list:fgui.GList;

	public static URL:string = "ui://75kiu87kr3yg7h";

	public static createInstance():UI_WxSideGames {
		return <UI_WxSideGames><any>(fgui.UIPackage.createObject("LTGame","WxSideGames"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_list = <fgui.GList><any>(this.getChildAt(0));
	}
}