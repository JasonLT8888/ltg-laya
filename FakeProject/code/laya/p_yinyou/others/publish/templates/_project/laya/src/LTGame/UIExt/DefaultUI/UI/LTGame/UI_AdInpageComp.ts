/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_AdInpageComp extends fgui.GComponent {

	public m_icon:fgui.GLoader;
	public m_title:fgui.GTextField;
	public m_desc:fgui.GTextField;
	public m_img:fgui.GLoader;
	public m_tag:fgui.GLoader;

	public static URL:string = "ui://75kiu87k92486w";

	public static createInstance():UI_AdInpageComp {
		return <UI_AdInpageComp><any>(fgui.UIPackage.createObject("LTGame","AdInpageComp"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(1));
		this.m_title = <fgui.GTextField><any>(this.getChildAt(2));
		this.m_desc = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_img = <fgui.GLoader><any>(this.getChildAt(4));
		this.m_tag = <fgui.GLoader><any>(this.getChildAt(5));
	}
}