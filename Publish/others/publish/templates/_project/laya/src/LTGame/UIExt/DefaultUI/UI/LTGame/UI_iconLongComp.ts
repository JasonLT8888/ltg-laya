/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_iconLongComp extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public m_tag:fgui.GLoader;
	public m_title:fgui.GTextField;
	public m_desc:fgui.GTextField;

	public static URL:string = "ui://75kiu87k92486x";

	public static createInstance():UI_iconLongComp {
		return <UI_iconLongComp><any>(fgui.UIPackage.createObject("LTGame","iconLongComp"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_tag = <fgui.GLoader><any>(this.getChildAt(1));
		this.m_title = <fgui.GTextField><any>(this.getChildAt(2));
		this.m_desc = <fgui.GTextField><any>(this.getChildAt(3));
	}
}