/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_view_sharegames_big extends fgui.GComponent {

	public m_img_game_bg:fgui.GGraph;
	public m_list_games:fgui.GList;
	public static URL:string = "ui://75kiu87kwjpo4i";

	public static createInstance():UI_view_sharegames_big {
		return <UI_view_sharegames_big>(fgui.UIPackage.createObject("LTGame", "view_sharegames_big"));
	}

	protected onConstruct():void {
		this.m_img_game_bg = <fgui.GGraph>(this.getChildAt(0));
		this.m_list_games = <fgui.GList>(this.getChildAt(1));
	}
}