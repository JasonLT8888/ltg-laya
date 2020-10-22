/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_scaler_yellow from "./UI_btn_scaler_yellow";
import UI_normal_ad_btn from "./UI_normal_ad_btn";
import UI_btn_red_scale from "./UI_btn_red_scale";

export default class UI_OppoEnd extends fgui.GComponent {

	public m_state:fgui.Controller;
	public m___nativeinpage:fgui.GGraph;
	public m_btn_double:UI_btn_scaler_yellow;
	public m_btn_ad:UI_normal_ad_btn;
	public m_btn_gift:UI_btn_red_scale;
	public m_win:UI_normal_ad_btn;
	public m_btn_next:UI_btn_scaler_yellow;
	public m___endSG:fgui.GGraph;
	public m_label_getCoin:fgui.GTextField;
	public m_coin:fgui.GLoader;
	public m_btn_no:UI_normal_ad_btn;

	public static URL:string = "ui://75kiu87kvo5igx";

	public static createInstance():UI_OppoEnd {
		return <UI_OppoEnd><any>(fgui.UIPackage.createObject("LTGame","OppoEnd"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_state = this.getControllerAt(0);
		this.m___nativeinpage = <fgui.GGraph><any>(this.getChildAt(1));
		this.m_btn_double = <UI_btn_scaler_yellow><any>(this.getChildAt(2));
		this.m_btn_ad = <UI_normal_ad_btn><any>(this.getChildAt(3));
		this.m_btn_gift = <UI_btn_red_scale><any>(this.getChildAt(4));
		this.m_win = <UI_normal_ad_btn><any>(this.getChildAt(5));
		this.m_btn_next = <UI_btn_scaler_yellow><any>(this.getChildAt(6));
		this.m___endSG = <fgui.GGraph><any>(this.getChildAt(7));
		this.m_label_getCoin = <fgui.GTextField><any>(this.getChildAt(9));
		this.m_coin = <fgui.GLoader><any>(this.getChildAt(10));
		this.m_btn_no = <UI_normal_ad_btn><any>(this.getChildAt(11));
	}
}