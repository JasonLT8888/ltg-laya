/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_splash extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_progress:fgui.GProgressBar;
	public m_text_logo:fgui.GTextField;
	public m_text_progress:fgui.GTextField;
	public m_text_laya:fgui.GTextField;
	public static URL:string = "ui://n3oedpp6nihr0";

	public static createInstance():UI_splash {
		return <UI_splash>(fgui.UIPackage.createObject("Load", "splash"));
	}

	protected onConstruct():void {
		this.m_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_progress = <fgui.GProgressBar>(this.getChildAt(1));
		this.m_text_logo = <fgui.GTextField>(this.getChildAt(2));
		this.m_text_progress = <fgui.GTextField>(this.getChildAt(3));
		this.m_text_laya = <fgui.GTextField>(this.getChildAt(4));
	}
}