/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_progress_roll extends fgui.GProgressBar {

	public m_bg:fgui.GImage;

	public static URL:string = "ui://xwcraheakntfjc";

	public static createInstance():UI_progress_roll {
		return <UI_progress_roll><any>(fgui.UIPackage.createObject("LTUI","progress_roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GImage><any>(this.getChildAt(0));
	}
}