/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_view_sharegames_big extends fgui.GComponent {

	public m_img_game_bg:fgui.GGraph;
	public m_list_games:fgui.GList;

	public static URL:string = "ui://75kiu87kwjpo4i";

	public static createInstance():UI_view_sharegames_big {
		return <UI_view_sharegames_big><any>(fgui.UIPackage.createObject("LTGame","view_sharegames_big"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_game_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_list_games = <fgui.GList><any>(this.getChildAt(1));
	}
}