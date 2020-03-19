/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_Banner_V extends fgui.GComponent {

	public m_banner:fgui.GComponent;

	public static URL:string = "ui://75kiu87kovsy4";

	public static createInstance():UI_Banner_V {
		return <UI_Banner_V><any>(fgui.UIPackage.createObject("LTGame","Banner_V"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_banner = <fgui.GComponent><any>(this.getChildAt(0));
	}
}