/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_toggle_02 from "./UI_btn_toggle_02";

export default class UI_CommonTrySkin extends fgui.GComponent {

	public m_btn_thanks:fgui.GButton;
	public m_list_item:fgui.GList;
	public m_btn_toggle_check:UI_btn_toggle_02;
	public m_anim_enter:fgui.Transition;

	public static URL:string = "ui://75kiu87kbg001v";

	public static createInstance():UI_CommonTrySkin {
		return <UI_CommonTrySkin><any>(fgui.UIPackage.createObject("LTGame","CommonTrySkin"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_thanks = <fgui.GButton><any>(this.getChildAt(2));
		this.m_list_item = <fgui.GList><any>(this.getChildAt(3));
		this.m_btn_toggle_check = <UI_btn_toggle_02><any>(this.getChildAt(4));
		this.m_anim_enter = this.getTransitionAt(0);
	}
}