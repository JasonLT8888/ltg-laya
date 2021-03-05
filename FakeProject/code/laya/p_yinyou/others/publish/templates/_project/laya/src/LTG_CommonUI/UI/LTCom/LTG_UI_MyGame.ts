/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_mygame from "./LTG_UI_view_mygame";

export default class LTG_UI_MyGame extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_mygame;
	public static URL:string = "ui://hbq27te38gel1k";

	public static createInstance():LTG_UI_MyGame {
		return <LTG_UI_MyGame>(fgui.UIPackage.createObject("LTCom", "MyGame"));
	}

	protected onConstruct():void {
		this.m_img_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_mygame>(this.getChildAt(1));
	}
}