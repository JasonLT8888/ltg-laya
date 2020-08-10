/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_SignItem extends fgui.GComponent {

	public m_type:fgui.Controller;
	public m_state:fgui.Controller;
	public m_bg1:fgui.GImage;
	public m_d7:fgui.GImage;
	public m_day:fgui.GTextField;
	public m_title:fgui.GTextField;
	public m_icon:fgui.GLoader;

	public static URL:string = "ui://xwcraheakntfi3";

	public static createInstance():UI_SignItem {
		return <UI_SignItem><any>(fgui.UIPackage.createObject("LTUI","SignItem"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_type = this.getControllerAt(0);
		this.m_state = this.getControllerAt(1);
		this.m_bg1 = <fgui.GImage><any>(this.getChildAt(2));
		this.m_d7 = <fgui.GImage><any>(this.getChildAt(3));
		this.m_day = <fgui.GTextField><any>(this.getChildAt(4));
		this.m_title = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(6));
	}
}