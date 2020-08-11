/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_BonusItem extends fgui.GComponent {

	public m_ad:fgui.Controller;
	public m_isclicked:fgui.Controller;
	public m_icon:fgui.GLoader;
	public m_title:fgui.GTextField;
	public m_adicon:fgui.GImage;
	public m_lock:fgui.GImage;

	public static URL:string = "ui://xwcraheakntfee";

	public static createInstance():UI_BonusItem {
		return <UI_BonusItem><any>(fgui.UIPackage.createObject("LTUI","BonusItem"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_ad = this.getControllerAt(0);
		this.m_isclicked = this.getControllerAt(1);
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_title = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_adicon = <fgui.GImage><any>(this.getChildAt(4));
		this.m_lock = <fgui.GImage><any>(this.getChildAt(5));
	}
}