/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_watchguide from "./LTG_UI_view_watchguide";

export default class LTG_UI_WatchGuide extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_watchguide;
	public static URL:string = "ui://hbq27te3odt06e";

	public static createInstance():LTG_UI_WatchGuide {
		return <LTG_UI_WatchGuide>(fgui.UIPackage.createObject("LTCom", "WatchGuide"));
	}

	protected onConstruct():void {
		this.m_img_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_watchguide>(this.getChildAt(1));
	}
}