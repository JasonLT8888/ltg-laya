/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_btn_refuse from "./LTG_UI_btn_refuse";

export default class LTG_UI_view_shortcut extends fgui.GComponent {

	public m_btn_watch:fgui.GGraph;
	public m_icon:fgui.GLoader;
	public m_btn_follow:LTG_UI_btn_refuse;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://hbq27te3x4fgdt";

	public static createInstance():LTG_UI_view_shortcut {
		return <LTG_UI_view_shortcut><any>(fgui.UIPackage.createObject("LTCom","view_shortcut"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_watch = <fgui.GGraph><any>(this.getChildAt(1));
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_btn_follow = <LTG_UI_btn_refuse><any>(this.getChildAt(4));
		this.m_t0 = this.getTransitionAt(0);
	}
}