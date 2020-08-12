/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_btn_normal from "./UI_btn_normal";

export default class UI_ImageBanner extends fgui.GComponent {

	public m_bg:fgui.GGraph;
	public m_img_banner:fgui.GLoader;
	public m_img_icon:fgui.GLoader;
	public m_img_adnotice:fgui.GLoader;
	public m_btn_close:UI_btn_normal;

	public static URL:string = "ui://75kiu87kqdeh5t";

	public static createInstance():UI_ImageBanner {
		return <UI_ImageBanner><any>(fgui.UIPackage.createObject("LTGame","ImageBanner"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GGraph><any>(this.getChildAt(0));
		this.m_img_banner = <fgui.GLoader><any>(this.getChildAt(1));
		this.m_img_icon = <fgui.GLoader><any>(this.getChildAt(2));
		this.m_img_adnotice = <fgui.GLoader><any>(this.getChildAt(3));
		this.m_btn_close = <UI_btn_normal><any>(this.getChildAt(4));
	}
}