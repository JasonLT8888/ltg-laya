/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_tryskin from "./LTG_UI_view_tryskin";

export default class LTG_UI_TrySkin extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_tryskin;
	public static URL:string = "ui://hbq27te3bl1a8a";

	public static createInstance():LTG_UI_TrySkin {
		return <LTG_UI_TrySkin>(fgui.UIPackage.createObject("LTCom", "TrySkin"));
	}

	protected onConstruct():void {
		this.m_img_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_tryskin>(this.getChildAt(1));
	}
}