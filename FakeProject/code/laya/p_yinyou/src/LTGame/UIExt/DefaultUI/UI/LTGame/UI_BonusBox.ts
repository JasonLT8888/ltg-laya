/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_toggle_02 from "./UI_btn_toggle_02";
import UI_btn_watch from "./UI_btn_watch";

export default class UI_BonusBox extends fgui.GComponent {

	public m_canclose:fgui.Controller;
	public m_bg:fgui.GImage;
	public m_btn_close:fgui.GButton;
	public m_tog:UI_btn_toggle_02;
	public m_boxList:fgui.GList;
	public m_keyList:fgui.GList;
	public m_btn_ad:UI_btn_watch;
	public m_txt_count:fgui.GTextField;
	public m___bottomgames:fgui.GGraph;
	public m_t1:fgui.Transition;
	public m_delay:fgui.Transition;

	public static URL:string = "ui://75kiu87kkj718g";

	public static createInstance():UI_BonusBox {
		return <UI_BonusBox><any>(fgui.UIPackage.createObject("LTGame","BonusBox"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_canclose = this.getControllerAt(0);
		this.m_bg = <fgui.GImage><any>(this.getChildAt(0));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(5));
		this.m_tog = <UI_btn_toggle_02><any>(this.getChildAt(6));
		this.m_boxList = <fgui.GList><any>(this.getChildAt(7));
		this.m_keyList = <fgui.GList><any>(this.getChildAt(8));
		this.m_btn_ad = <UI_btn_watch><any>(this.getChildAt(9));
		this.m_txt_count = <fgui.GTextField><any>(this.getChildAt(10));
		this.m___bottomgames = <fgui.GGraph><any>(this.getChildAt(11));
		this.m_t1 = this.getTransitionAt(0);
		this.m_delay = this.getTransitionAt(1);
	}
}