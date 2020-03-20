/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_view_load from "./UI_view_load";

export default class UI_CommonLoad extends fgui.GComponent {

	public m_load:UI_view_load;

	public static URL:string = "ui://75kiu87kmhasc";

	public static createInstance():UI_CommonLoad {
		return <UI_CommonLoad><any>(fgui.UIPackage.createObject("LTGame","CommonLoad"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_load = <UI_view_load><any>(this.getChildAt(1));
	}
}