/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_btn_morediamond from "./LTG_UI_btn_morediamond";
import LTG_UI_image_bar from "./LTG_UI_image_bar";

export default class LTG_UI_Win extends fgui.GComponent {

	public m_state:fgui.Controller;
	public m_btn_multiget:LTG_UI_btn_morediamond;
	public m_btn_normalget:LTG_UI_btn_morediamond;
	public m_unlock_progress:LTG_UI_image_bar;
	public m___nativeinpage:fgui.GGraph;

	public static URL:string = "ui://hbq27te3fig0bi";

	public static createInstance():LTG_UI_Win {
		return <LTG_UI_Win><any>(fgui.UIPackage.createObject("LTCom","Win"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_state = this.getControllerAt(0);
		this.m_btn_multiget = <LTG_UI_btn_morediamond><any>(this.getChildAt(4));
		this.m_btn_normalget = <LTG_UI_btn_morediamond><any>(this.getChildAt(5));
		this.m_unlock_progress = <LTG_UI_image_bar><any>(this.getChildAt(6));
		this.m___nativeinpage = <fgui.GGraph><any>(this.getChildAt(7));
	}
}