/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import LTG_UI_view_rewardcode from "./LTG_UI_view_rewardcode";

export default class LTG_UI_RewardCode extends fgui.GComponent {

	public m_img_bg:fgui.GGraph;
	public m_view:LTG_UI_view_rewardcode;

	public static URL:string = "ui://hbq27te38gelp";

	public static createInstance():LTG_UI_RewardCode {
		return <LTG_UI_RewardCode><any>(fgui.UIPackage.createObject("LTCom","RewardCode"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_view = <LTG_UI_view_rewardcode><any>(this.getChildAt(1));
	}
}