/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_addshortcut from "./LTG_UI_view_addshortcut";

export default class LTG_UI_AddShortcut extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_addshortcut;

	public static URL:string = "ui://hbq27te38gel17";

	public static createInstance():LTG_UI_AddShortcut {
		return <LTG_UI_AddShortcut><any>(fgui.UIPackage.createObject("LTCom","AddShortcut"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_addshortcut><any>(this.getChildAt(1));
	}
}