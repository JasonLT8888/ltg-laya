/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_AdInpage extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public m_tag:fgui.GLoader;
	public m_img:fgui.GLoader;
	public m_title:fgui.GTextField;
	public m_desc:fgui.GTextField;
	public m_tagtxt:fgui.GTextField;
	public m_sourceTxt:fgui.GTextField;

	public static URL:string = "ui://75kiu87kn22eik";

	public static createInstance():UI_AdInpage {
		return <UI_AdInpage><any>(fgui.UIPackage.createObject("LTGame","AdInpage"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(1));
		this.m_tag = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_img = <fgui.GLoader><any>(this.getChildAt(3));
		this.m_title = <fgui.GTextField><any>(this.getChildAt(4));
		this.m_desc = <fgui.GTextField><any>(this.getChildAt(5));
		this.m_tagtxt = <fgui.GTextField><any>(this.getChildAt(6));
		this.m_sourceTxt = <fgui.GTextField><any>(this.getChildAt(7));
	}
}