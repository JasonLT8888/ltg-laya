/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_info extends fgui.GComponent {

	public m_icon:fgui.GLoader;

	public static URL:string = "ui://xwcraheakntfg4";

	public static createInstance():UI_info {
		return <UI_info><any>(fgui.UIPackage.createObject("LTUI","info"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(1));
	}
}