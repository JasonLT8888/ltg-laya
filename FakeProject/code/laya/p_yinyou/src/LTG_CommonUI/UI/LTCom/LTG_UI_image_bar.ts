/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_image_bar extends fgui.GProgressBar {

	public m_bg:fgui.GLoader;

	public static URL:string = "ui://hbq27te3fig0bl";

	public static createInstance():LTG_UI_image_bar {
		return <LTG_UI_image_bar><any>(fgui.UIPackage.createObject("LTCom","image_bar"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
	}
}