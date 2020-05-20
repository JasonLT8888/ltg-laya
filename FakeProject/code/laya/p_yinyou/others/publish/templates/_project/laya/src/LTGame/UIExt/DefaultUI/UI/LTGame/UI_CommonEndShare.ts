/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_endshare from "./UI_view_endshare";

export default class UI_CommonEndShare extends fgui.GComponent {

	public m_view:UI_view_endshare;
	public static URL:string = "ui://75kiu87kbg00z";

	public static createInstance():UI_CommonEndShare {
		return <UI_CommonEndShare>(fgui.UIPackage.createObject("LTGame", "CommonEndShare"));
	}

	protected onConstruct():void {
		this.m_view = <UI_view_endshare>(this.getChildAt(1));
	}
}