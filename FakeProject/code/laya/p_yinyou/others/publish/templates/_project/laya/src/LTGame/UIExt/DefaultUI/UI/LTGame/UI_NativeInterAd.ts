/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_NativeInterAd extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_img:fgui.GLoader;
	public m_icon:fgui.GLoader;
	public m_title:fgui.GTextField;
	public m_desc:fgui.GTextField;
	public m_tag:fgui.GTextField;

	public static URL:string = "ui://75kiu87kocvx6s";

	public static createInstance():UI_NativeInterAd {
		return <UI_NativeInterAd><any>(fgui.UIPackage.createObject("LTGame","NativeInterAd"));
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
		this.m_tag = <fgui.GTextField><any>(this.getChildAt(7));
	}
}