/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_rank_item from "./UI_rank_item";
import UI_mid_banner from "./UI_mid_banner";

export default class UI_MiniGames extends fgui.GComponent {

	public m_btn_close:fgui.GButton;
	public m_game_hot:UI_rank_item;
	public m_game_new:UI_rank_item;
	public m_mid_banner:UI_mid_banner;
	public m_list:fgui.GList;

	public static URL:string = "ui://75kiu87knmlkie";

	public static createInstance():UI_MiniGames {
		return <UI_MiniGames><any>(fgui.UIPackage.createObject("LTGame","MiniGames"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(1));
		this.m_game_hot = <UI_rank_item><any>(this.getChildAt(2));
		this.m_game_new = <UI_rank_item><any>(this.getChildAt(3));
		this.m_mid_banner = <UI_mid_banner><any>(this.getChildAt(4));
		this.m_list = <fgui.GList><any>(this.getChildAt(6));
	}
}