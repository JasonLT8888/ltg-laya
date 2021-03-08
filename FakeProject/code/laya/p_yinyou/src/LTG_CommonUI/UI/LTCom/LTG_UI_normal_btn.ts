/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_normal_btn extends fgui.GButton {

	public m_bg:fgui.GLoader;

	public static URL:string = "ui://hbq27te3cx1n81";

	public static createInstance():LTG_UI_normal_btn {
		return <LTG_UI_normal_btn><any>(fgui.UIPackage.createObject("LTCom","normal_btn"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
	}
}