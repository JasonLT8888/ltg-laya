/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_GameIconF extends fgui.GComponent {

	public m_mask:fgui.GGraph;
	public m_icon:fgui.GLoader;
	public m_title:fgui.GTextField;

	public static URL:string = "ui://75kiu87kr3yg7g";

	public static createInstance():UI_GameIconF {
		return <UI_GameIconF><any>(fgui.UIPackage.createObject("LTGame","GameIconF"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_mask = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(1));
		this.m_title = <fgui.GTextField><any>(this.getChildAt(2));
	}
}