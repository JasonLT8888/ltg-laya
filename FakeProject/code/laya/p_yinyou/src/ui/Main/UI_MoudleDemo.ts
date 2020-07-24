/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_MoudleDemo extends fgui.GComponent {

	public m___othergames:fgui.GGraph;
	public m___hotgame:fgui.GGraph;
	public m___sidegames:fgui.GGraph;
	public m___endSG:fgui.GGraph;
	public m___bottomgames:fgui.GGraph;
	public m_btn_back:fgui.GButton;
	public m___wxSG:fgui.GGraph;

	public static URL:string = "ui://kk7g5mmmsgapj";

	public static createInstance():UI_MoudleDemo {
		return <UI_MoudleDemo><any>(fgui.UIPackage.createObject("Main","MoudleDemo"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m___othergames = <fgui.GGraph><any>(this.getChildAt(1));
		this.m___hotgame = <fgui.GGraph><any>(this.getChildAt(2));
		this.m___sidegames = <fgui.GGraph><any>(this.getChildAt(3));
		this.m___endSG = <fgui.GGraph><any>(this.getChildAt(4));
		this.m___bottomgames = <fgui.GGraph><any>(this.getChildAt(5));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(6));
		this.m___wxSG = <fgui.GGraph><any>(this.getChildAt(7));
	}
}