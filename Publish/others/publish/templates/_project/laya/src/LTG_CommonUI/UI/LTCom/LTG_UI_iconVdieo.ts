/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_iconVdieo extends fgui.GComponent {

	public m_icon:fgui.GLoader;

	public static URL:string = "ui://hbq27te3cx1n7q";

	public static createInstance():LTG_UI_iconVdieo {
		return <LTG_UI_iconVdieo><any>(fgui.UIPackage.createObject("LTCom","iconVdieo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(1));
	}
}