/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_screenshoot from "./LTG_UI_view_screenshoot";

export default class LTG_UI_ScreenShoot extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_screenshoot;
	public m_img_cover:fgui.GImage;
	public m_anim_cover:fgui.Transition;
	public static URL:string = "ui://hbq27te3t2mg74";

	public static createInstance():LTG_UI_ScreenShoot {
		return <LTG_UI_ScreenShoot>(fgui.UIPackage.createObject("LTCom", "ScreenShoot"));
	}

	protected onConstruct():void {
		this.m_img_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_screenshoot>(this.getChildAt(1));
		this.m_img_cover = <fgui.GImage>(this.getChildAt(2));
		this.m_anim_cover = this.getTransitionAt(0);
	}
}