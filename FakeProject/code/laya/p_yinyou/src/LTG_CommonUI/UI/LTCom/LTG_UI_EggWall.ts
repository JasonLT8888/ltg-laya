/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_EggWall extends fgui.GComponent {

	public m_img_bg:fgui.GImage;
	public m_btn_back:fgui.GButton;
	public m_list_view:fgui.GList;

	public static URL:string = "ui://hbq27te38gel2c";

	public static createInstance():LTG_UI_EggWall {
		return <LTG_UI_EggWall><any>(fgui.UIPackage.createObject("LTCom","EggWall"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_img_bg = <fgui.GImage><any>(this.getChildAt(0));
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(2));
		this.m_list_view = <fgui.GList><any>(this.getChildAt(5));
	}
}