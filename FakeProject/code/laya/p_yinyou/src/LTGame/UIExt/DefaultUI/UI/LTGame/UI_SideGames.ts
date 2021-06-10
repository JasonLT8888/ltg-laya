/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_side_ads1 from "./UI_side_ads1";

export default class UI_SideGames extends fgui.GComponent {

	public m_show:fgui.Controller;
	public m_ads:UI_side_ads1;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://75kiu87kii3nhl";

	public static createInstance():UI_SideGames {
		return <UI_SideGames>(fgui.UIPackage.createObject("LTGame", "SideGames"));
	}

	protected onConstruct():void {
		this.m_show = this.getControllerAt(0);
		this.m_ads = <UI_side_ads1>(this.getChildAt(1));
		this.m_t0 = this.getTransitionAt(0);
	}
}