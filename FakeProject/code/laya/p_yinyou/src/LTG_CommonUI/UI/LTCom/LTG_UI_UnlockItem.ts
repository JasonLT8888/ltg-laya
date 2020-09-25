/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_unlock from "./LTG_UI_view_unlock";

export default class LTG_UI_UnlockItem extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_unlock;

	public static URL:string = "ui://hbq27te3n2g16s";

	public static createInstance():LTG_UI_UnlockItem {
		return <LTG_UI_UnlockItem><any>(fgui.UIPackage.createObject("LTCom","UnlockItem"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_unlock><any>(this.getChildAt(1));
	}
}