/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_normal0 from "./UI_btn_normal0";
import UI_btn_twoIcon from "./UI_btn_twoIcon";
import UI_btn_toggle_02 from "./UI_btn_toggle_02";

export default class UI_ExSkin extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public m_btn_close:UI_btn_normal0;
	public m_btn_ad:UI_btn_twoIcon;
	public m_list_pro:fgui.GList;
	public m_tog:UI_btn_toggle_02;
	public m_anim_enter:fgui.Transition;
	public m_t1:fgui.Transition;

	public static URL:string = "ui://xwcraheakntfie";

	public static createInstance():UI_ExSkin {
		return <UI_ExSkin><any>(fgui.UIPackage.createObject("LTUI","ExSkin"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(3));
		this.m_btn_close = <UI_btn_normal0><any>(this.getChildAt(5));
		this.m_btn_ad = <UI_btn_twoIcon><any>(this.getChildAt(6));
		this.m_list_pro = <fgui.GList><any>(this.getChildAt(7));
		this.m_tog = <UI_btn_toggle_02><any>(this.getChildAt(9));
		this.m_anim_enter = this.getTransitionAt(0);
		this.m_t1 = this.getTransitionAt(1);
	}
}