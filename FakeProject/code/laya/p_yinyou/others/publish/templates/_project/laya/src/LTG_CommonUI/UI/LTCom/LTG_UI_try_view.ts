/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_try_view extends fgui.GComponent {

	public m_progress:fgui.GTextField;

	public static URL:string = "ui://hbq27te3x4fge6";

	public static createInstance():LTG_UI_try_view {
		return <LTG_UI_try_view><any>(fgui.UIPackage.createObject("LTCom","try_view"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_progress = <fgui.GTextField><any>(this.getChildAt(1));
	}
}