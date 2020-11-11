/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_normal from "./UI_btn_normal";

export default class UI_GameCenter extends fgui.GComponent {

	public m_topList:fgui.GList;
	public m_centerList:fgui.GList;
	public m_btn_close:UI_btn_normal;
	public m_anim_enter:fgui.Transition;

	public static URL:string = "ui://75kiu87kr3yg75";

	public static createInstance():UI_GameCenter {
		return <UI_GameCenter><any>(fgui.UIPackage.createObject("LTGame","GameCenter"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_topList = <fgui.GList><any>(this.getChildAt(5));
		this.m_centerList = <fgui.GList><any>(this.getChildAt(6));
		this.m_btn_close = <UI_btn_normal><any>(this.getChildAt(7));
		this.m_anim_enter = this.getTransitionAt(0);
	}
}