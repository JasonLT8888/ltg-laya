/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_side_ads from "./UI_side_ads";

export default class UI_SideGames extends fgui.GComponent {

	public m_show:fgui.Controller;
	public m_bg:fgui.GGraph;
	public m_btn_show:fgui.GButton;
	public m_ads:UI_side_ads;

	public static URL:string = "ui://75kiu87keq3z6e";

	public static createInstance():UI_SideGames {
		return <UI_SideGames><any>(fgui.UIPackage.createObject("LTGame","SideGames"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_show = this.getControllerAt(0);
		this.m_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_btn_show = <fgui.GButton><any>(this.getChildAt(1));
		this.m_ads = <UI_side_ads><any>(this.getChildAt(3));
	}
}