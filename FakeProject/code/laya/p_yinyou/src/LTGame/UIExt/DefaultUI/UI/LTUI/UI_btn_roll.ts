/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_btn_roll extends fgui.GComponent {

	public m_isFree:fgui.Controller;
	public m_btn_bg:fgui.GImage;
	public m_sp_watch:fgui.GImage;
	public m_sp_title:fgui.GImage;

	public static URL:string = "ui://xwcraheakntfj5";

	public static createInstance():UI_btn_roll {
		return <UI_btn_roll><any>(fgui.UIPackage.createObject("LTUI","btn_roll"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_isFree = this.getControllerAt(0);
		this.m_btn_bg = <fgui.GImage><any>(this.getChildAt(0));
		this.m_sp_watch = <fgui.GImage><any>(this.getChildAt(1));
		this.m_sp_title = <fgui.GImage><any>(this.getChildAt(2));
	}
}