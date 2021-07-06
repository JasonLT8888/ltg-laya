/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_screenshoot_new from "./LTG_UI_view_screenshoot_new";

export default class LTG_UI_ScreenShoot extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_screenshoot_new;
	public m_img_cover:fgui.GImage;
	public m_anim_cover:fgui.Transition;

	public static URL:string = "ui://hbq27te3t2mg74";

	public static createInstance():LTG_UI_ScreenShoot {
		return <LTG_UI_ScreenShoot><any>(fgui.UIPackage.createObject("LTCom","ScreenShoot"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_screenshoot_new><any>(this.getChildAt(1));
		this.m_img_cover = <fgui.GImage><any>(this.getChildAt(2));
		this.m_anim_cover = this.getTransitionAt(0);
	}
}