/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_player extends fgui.GComponent {

	public m_sp_player_bg:fgui.GImage;
	public m_sp_zuanshi:fgui.GImage;
	public m_lbl_playerMoney:fgui.GTextField;

	public static URL:string = "ui://xwcraheakntfj9";

	public static createInstance():UI_player {
		return <UI_player><any>(fgui.UIPackage.createObject("LTUI","player"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_sp_player_bg = <fgui.GImage><any>(this.getChildAt(0));
		this.m_sp_zuanshi = <fgui.GImage><any>(this.getChildAt(1));
		this.m_lbl_playerMoney = <fgui.GTextField><any>(this.getChildAt(2));
	}
}