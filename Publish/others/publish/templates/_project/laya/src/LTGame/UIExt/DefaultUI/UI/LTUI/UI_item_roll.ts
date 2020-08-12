/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_item_roll extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public m_text_title:fgui.GTextField;

	public static URL:string = "ui://xwcraheakntfj0";

	public static createInstance():UI_item_roll {
		return <UI_item_roll><any>(fgui.UIPackage.createObject("LTUI","item_roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_text_title = <fgui.GTextField><any>(this.getChildAt(1));
	}
}