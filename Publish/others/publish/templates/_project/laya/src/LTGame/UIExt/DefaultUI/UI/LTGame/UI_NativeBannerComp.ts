/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_NativeBannerComp extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_img:fgui.GLoader;
	public m_icon:fgui.GLoader;
	public m_title:fgui.GTextField;
	public m_desc:fgui.GTextField;
	public m_btn_close:fgui.GButton;

	public static URL:string = "ui://75kiu87ka24yim";

	public static createInstance():UI_NativeBannerComp {
		return <UI_NativeBannerComp><any>(fgui.UIPackage.createObject("LTGame","NativeBannerComp"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_img = <fgui.GLoader><any>(this.getChildAt(1));
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_title = <fgui.GTextField><any>(this.getChildAt(3));
		this.m_desc = <fgui.GTextField><any>(this.getChildAt(4));
		this.m_btn_close = <fgui.GButton><any>(this.getChildAt(5));
	}
}