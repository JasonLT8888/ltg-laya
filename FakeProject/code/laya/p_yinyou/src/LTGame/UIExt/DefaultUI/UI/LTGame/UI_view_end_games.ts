/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_view_end_games extends fgui.GComponent {

	public m_img_game_bg:fgui.GImage;
	public m_list_games:fgui.GList;

	public static URL:string = "ui://75kiu87kbg001k";

	public static createInstance():UI_view_end_games {
		return <UI_view_end_games><any>(fgui.UIPackage.createObject("LTGame","view_end_games"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_game_bg = <fgui.GImage><any>(this.getChildAt(1));
		this.m_list_games = <fgui.GList><any>(this.getChildAt(2));
	}
}