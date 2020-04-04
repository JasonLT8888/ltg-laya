/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_one_more from "./UI_view_one_more";

export default class UI_CommonOneMore extends fgui.GComponent {

	public m_view:UI_view_one_more;

	public static URL:string = "ui://75kiu87kgxi82t";

	public static createInstance():UI_CommonOneMore {
		return <UI_CommonOneMore><any>(fgui.UIPackage.createObject("LTGame","CommonOneMore"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_view = <UI_view_one_more><any>(this.getChildAt(1));
	}
}