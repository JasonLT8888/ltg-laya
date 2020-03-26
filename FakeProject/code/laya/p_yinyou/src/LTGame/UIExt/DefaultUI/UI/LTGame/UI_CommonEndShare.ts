/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_endshare from "./UI_view_endshare";

export default class UI_CommonEndShare extends fgui.GComponent {

	public m_view:UI_view_endshare;

	public static URL:string = "ui://75kiu87kbg00z";

	public static createInstance():UI_CommonEndShare {
		return <UI_CommonEndShare><any>(fgui.UIPackage.createObject("LTGame","CommonEndShare"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_view = <UI_view_endshare><any>(this.getChildAt(1));
	}
}