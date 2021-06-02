/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_findgame from "./LTG_UI_view_findgame";

export default class LTG_UI_FindGame extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_findgame;

	public static URL:string = "ui://hbq27te38gel1f";

	public static createInstance():LTG_UI_FindGame {
		return <LTG_UI_FindGame><any>(fgui.UIPackage.createObject("LTCom","FindGame"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_findgame><any>(this.getChildAt(1));
	}
}