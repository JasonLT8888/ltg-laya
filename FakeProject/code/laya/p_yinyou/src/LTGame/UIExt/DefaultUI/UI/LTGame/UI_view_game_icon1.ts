/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_view_game_icon1 extends fgui.GComponent {

	public m_mask:fgui.GGraph;
	public m_icon:fgui.GLoader;

	public static URL:string = "ui://75kiu87kbg001h";

	public static createInstance():UI_view_game_icon1 {
		return <UI_view_game_icon1><any>(fgui.UIPackage.createObject("LTGame","view_game_icon1"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_mask = <fgui.GGraph><any>(this.getChildAt(1));
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(2));
	}
}