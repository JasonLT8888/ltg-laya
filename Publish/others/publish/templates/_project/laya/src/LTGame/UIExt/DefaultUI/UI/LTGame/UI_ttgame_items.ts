/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_ttgame_items extends fgui.GComponent {

	public m_dot:fgui.Controller;
	public m_icon:fgui.GButton;
	public m_name:fgui.GTextField;

	public static URL:string = "ui://75kiu87knmlkii";

	public static createInstance():UI_ttgame_items {
		return <UI_ttgame_items><any>(fgui.UIPackage.createObject("LTGame","ttgame_items"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_dot = this.getControllerAt(0);
		this.m_icon = <fgui.GButton><any>(this.getChildAt(0));
		this.m_name = <fgui.GTextField><any>(this.getChildAt(1));
	}
}