/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_btn_normalg from "./LTG_UI_btn_normalg";

export default class LTG_UI_RankList extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_txt_rank:fgui.GTextField;
	public m_txt_nikename:fgui.GTextField;
	public m_txt_count:fgui.GTextField;
	public m_btn_close:LTG_UI_btn_normalg;
	public m_btn_pre:LTG_UI_btn_normalg;
	public m_btn_next:LTG_UI_btn_normalg;
	public m_openView:fgui.GGraph;
	public m_test_icon:fgui.GLoader;

	public static URL:string = "ui://hbq27te3e6qp8a";

	public static createInstance():LTG_UI_RankList {
		return <LTG_UI_RankList><any>(fgui.UIPackage.createObject("LTCom","RankList"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_txt_rank = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_txt_nikename = <fgui.GTextField><any>(this.getChildAt(4));
		this.m_txt_count = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_btn_close = <LTG_UI_btn_normalg><any>(this.getChildAt(6));
		this.m_btn_pre = <LTG_UI_btn_normalg><any>(this.getChildAt(7));
		this.m_btn_next = <LTG_UI_btn_normalg><any>(this.getChildAt(8));
		this.m_openView = <fgui.GGraph><any>(this.getChildAt(9));
		this.m_test_icon = <fgui.GLoader><any>(this.getChildAt(10));
	}
}