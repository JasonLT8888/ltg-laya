/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_NativeIcon extends fgui.GComponent {

	public m_icon_img:fgui.GLoader;
	public m_icon_tip:fgui.GLoader;

	public static URL:string = "ui://75kiu87kh8ea5w";

	public static createInstance():UI_NativeIcon {
		return <UI_NativeIcon><any>(fgui.UIPackage.createObject("LTGame","NativeIcon"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon_img = <fgui.GLoader><any>(this.getChildAt(0));
		this.m_icon_tip = <fgui.GLoader><any>(this.getChildAt(1));
	}
}