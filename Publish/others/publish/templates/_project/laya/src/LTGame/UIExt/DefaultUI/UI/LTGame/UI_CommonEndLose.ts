/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_CommonEndLose extends fgui.GComponent {

	public m_c1:fgui.Controller;
	public m_text_str:fgui.GTextField;
	public m_btn_no:fgui.GButton;
	public m_btn_watchad:fgui.GButton;
	public m___othergames:fgui.GGraph;
	public m___wxSG:fgui.GGraph;
	public m_anim_enter:fgui.Transition;

	public static URL:string = "ui://75kiu87krk935i";

	public static createInstance():UI_CommonEndLose {
		return <UI_CommonEndLose><any>(fgui.UIPackage.createObject("LTGame","CommonEndLose"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_c1 = this.getControllerAt(0);
		this.m_text_str = <fgui.GTextField><any>(this.getChildAt(2));
		this.m_btn_no = <fgui.GButton><any>(this.getChildAt(3));
		this.m_btn_watchad = <fgui.GButton><any>(this.getChildAt(4));
		this.m___othergames = <fgui.GGraph><any>(this.getChildAt(5));
		this.m___wxSG = <fgui.GGraph><any>(this.getChildAt(6));
		this.m_anim_enter = this.getTransitionAt(0);
	}
}