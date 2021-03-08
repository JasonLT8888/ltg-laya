/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_top3 from "./LTG_UI_top3";
import LTG_UI_normal_btn from "./LTG_UI_normal_btn";

export default class LTG_UI_VideoList extends fgui.GComponent {

	public m_bg:fgui.GImage;
	public m_item1:LTG_UI_top3;
	public m_item2:LTG_UI_top3;
	public m_item3:LTG_UI_top3;
	public m_list:fgui.GList;
	public m_btn_back:LTG_UI_normal_btn;
	public m_btn_like:LTG_UI_normal_btn;
	public m_btn_new:LTG_UI_normal_btn;
	public m_btn_create:LTG_UI_normal_btn;

	public static URL:string = "ui://hbq27te3cx1n7i";

	public static createInstance():LTG_UI_VideoList {
		return <LTG_UI_VideoList><any>(fgui.UIPackage.createObject("LTCom","VideoList"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GImage><any>(this.getChildAt(0));
		this.m_item1 = <LTG_UI_top3><any>(this.getChildAt(5));
		this.m_item2 = <LTG_UI_top3><any>(this.getChildAt(6));
		this.m_item3 = <LTG_UI_top3><any>(this.getChildAt(7));
		this.m_list = <fgui.GList><any>(this.getChildAt(8));
		this.m_btn_back = <LTG_UI_normal_btn><any>(this.getChildAt(9));
		this.m_btn_like = <LTG_UI_normal_btn><any>(this.getChildAt(10));
		this.m_btn_new = <LTG_UI_normal_btn><any>(this.getChildAt(11));
		this.m_btn_create = <LTG_UI_normal_btn><any>(this.getChildAt(12));
	}
}