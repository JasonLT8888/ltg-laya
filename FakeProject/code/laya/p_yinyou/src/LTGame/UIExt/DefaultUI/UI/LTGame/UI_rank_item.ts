/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_rank_item extends fgui.GComponent {

	public m_rank_bg:fgui.GLoader;
	public m_icon:fgui.GButton;
	public m_rank_title:fgui.GTextField;
	public m_name:fgui.GTextField;
	public static URL:string = "ui://75kiu87knmlkif";

	public static createInstance():UI_rank_item {
		return <UI_rank_item>(fgui.UIPackage.createObject("LTGame", "rank_item"));
	}

	protected onConstruct():void {
		this.m_rank_bg = <fgui.GLoader>(this.getChildAt(0));
		this.m_icon = <fgui.GButton>(this.getChildAt(1));
		this.m_rank_title = <fgui.GTextField>(this.getChildAt(2));
		this.m_name = <fgui.GTextField>(this.getChildAt(3));
	}
}