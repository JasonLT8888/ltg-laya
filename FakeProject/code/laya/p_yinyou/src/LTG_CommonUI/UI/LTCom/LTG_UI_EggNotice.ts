/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_egg_notice from "./LTG_UI_view_egg_notice";

export default class LTG_UI_EggNotice extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_egg_notice;

	public static URL:string = "ui://hbq27te38gel2w";

	public static createInstance():LTG_UI_EggNotice {
		return <LTG_UI_EggNotice><any>(fgui.UIPackage.createObject("LTCom","EggNotice"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_egg_notice><any>(this.getChildAt(1));
	}
}