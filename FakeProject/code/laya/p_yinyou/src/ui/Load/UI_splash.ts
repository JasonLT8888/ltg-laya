/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_splash extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_progress:fgui.GProgressBar;
	public m_text_logo:fgui.GTextField;
	public m_text_progress:fgui.GTextField;
	public m_text_laya:fgui.GTextField;

	public static URL:string = "ui://n3oedpp6nihr0";

	public static createInstance():UI_splash {
		return <UI_splash><any>(fgui.UIPackage.createObject("Load","splash"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_progress = <fgui.GProgressBar><any>(this.getChildAt(1));
		this.m_text_logo = <fgui.GTextField><any>(this.getChildAt(2));
		this.m_text_progress = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_text_laya = <fgui.GTextField><any>(this.getChildAt(4));
	}
}