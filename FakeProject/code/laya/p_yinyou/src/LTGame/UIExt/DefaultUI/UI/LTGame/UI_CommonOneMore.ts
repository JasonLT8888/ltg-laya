/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_one_more from "./UI_view_one_more";

export default class UI_CommonOneMore extends fgui.GComponent {

	public m_view:UI_view_one_more;
	public static URL:string = "ui://75kiu87kgxi82t";

	public static createInstance():UI_CommonOneMore {
		return <UI_CommonOneMore>(fgui.UIPackage.createObject("LTGame", "CommonOneMore"));
	}

	protected onConstruct():void {
		this.m_view = <UI_view_one_more>(this.getChildAt(1));
	}
}