/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_ImageBanner extends fgui.GComponent {

	public m_img_banner:fgui.GLoader;
	public m_img_adnotice:fgui.GLoader;
	public m_btn_close:fgui.GButton;
	public static URL:string = "ui://75kiu87kqdeh5t";

	public static createInstance():UI_ImageBanner {
		return <UI_ImageBanner>(fgui.UIPackage.createObject("LTGame", "ImageBanner"));
	}

	protected onConstruct():void {
		this.m_img_banner = <fgui.GLoader>(this.getChildAt(0));
		this.m_img_adnotice = <fgui.GLoader>(this.getChildAt(1));
		this.m_btn_close = <fgui.GButton>(this.getChildAt(2));
	}
}