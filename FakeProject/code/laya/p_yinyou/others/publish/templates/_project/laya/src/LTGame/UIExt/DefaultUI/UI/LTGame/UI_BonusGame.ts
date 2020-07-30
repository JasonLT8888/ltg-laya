/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_hander_grip from "./UI_hander_grip";

export default class UI_BonusGame extends fgui.GComponent {

	public m_progress:fgui.GProgressBar;
	public m_btn_play:fgui.GButton;
	public m_tap:fgui.GImage;
	public m_timer:fgui.GTextField;
	public m_proHand:fgui.GProgressBar;
	public m_hand:UI_hander_grip;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://75kiu87knfrobm";

	public static createInstance():UI_BonusGame {
		return <UI_BonusGame><any>(fgui.UIPackage.createObject("LTGame","BonusGame"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_progress = <fgui.GProgressBar><any>(this.getChildAt(1));
		this.m_btn_play = <fgui.GButton><any>(this.getChildAt(2));
		this.m_tap = <fgui.GImage><any>(this.getChildAt(3));
		this.m_timer = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_proHand = <fgui.GProgressBar><any>(this.getChildAt(7));
		this.m_hand = <UI_hander_grip><any>(this.getChildAt(8));
		this.m_t0 = this.getTransitionAt(0);
	}
}