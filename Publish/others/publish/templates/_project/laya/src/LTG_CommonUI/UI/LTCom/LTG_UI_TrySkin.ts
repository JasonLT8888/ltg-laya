/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_try_view from "./LTG_UI_try_view";
import LTG_UI_btn_next_2 from "./LTG_UI_btn_next_2";
import LTG_UI_btn_get from "./LTG_UI_btn_get";

export default class LTG_UI_TrySkin extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_img_display:fgui.GLoader;
	public m_view:LTG_UI_try_view;
	public m_btn_no:LTG_UI_btn_next_2;
	public m_btn_try:LTG_UI_btn_get;

	public static URL:string = "ui://hbq27te3bl1a8a";

	public static createInstance():LTG_UI_TrySkin {
		return <LTG_UI_TrySkin><any>(fgui.UIPackage.createObject("LTCom","TrySkin"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_img_display = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_view = <LTG_UI_try_view><any>(this.getChildAt(3));
		this.m_btn_no = <LTG_UI_btn_next_2><any>(this.getChildAt(4));
		this.m_btn_try = <LTG_UI_btn_get><any>(this.getChildAt(5));
	}
}