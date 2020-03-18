/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_splash extends fgui.GComponent {

	public m_bg:fgui.GLoader;
	public m_progress:fgui.GProgressBar;

	public static URL:string = "ui://n3oedpp6nihr0";

	public static createInstance():UI_splash {
		return <UI_splash><any>(fgui.UIPackage.createObject("Load","splash"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_progress = <fgui.GProgressBar><any>(this.getChildAt(1));
	}
}