/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_eggIcon from "./UI_eggIcon";

export default class UI_eggItem extends fgui.GComponent {

	public m_type:fgui.Controller;
	public m_icon:UI_eggIcon;
	public m_shake:fgui.Transition;

	public static URL:string = "ui://75kiu87kdywvb6";

	public static createInstance():UI_eggItem {
		return <UI_eggItem><any>(fgui.UIPackage.createObject("LTGame","eggItem"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_type = this.getControllerAt(0);
		this.m_icon = <UI_eggIcon><any>(this.getChildAt(0));
		this.m_shake = this.getTransitionAt(0);
	}
}