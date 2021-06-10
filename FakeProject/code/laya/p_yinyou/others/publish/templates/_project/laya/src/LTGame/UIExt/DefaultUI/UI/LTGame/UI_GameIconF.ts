/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_GameIconF extends fgui.GComponent {

	public m_mask:fgui.GGraph;
	public m_icon:fgui.GLoader;
	public m_title:fgui.GTextField;
	public static URL:string = "ui://75kiu87kr3yg7g";

	public static createInstance():UI_GameIconF {
		return <UI_GameIconF>(fgui.UIPackage.createObject("LTGame", "GameIconF"));
	}

	protected onConstruct():void {
		this.m_mask = <fgui.GGraph>(this.getChildAt(0));
		this.m_icon = <fgui.GLoader>(this.getChildAt(1));
		this.m_title = <fgui.GTextField>(this.getChildAt(2));
	}
}