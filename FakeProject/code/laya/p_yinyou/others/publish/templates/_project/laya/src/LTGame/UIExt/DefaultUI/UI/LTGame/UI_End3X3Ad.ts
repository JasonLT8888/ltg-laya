/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_End3X3Ad extends fgui.GComponent {

	public m_list:fgui.GList;

	public static URL:string = "ui://75kiu87ki816ae";

	public static createInstance():UI_End3X3Ad {
		return <UI_End3X3Ad><any>(fgui.UIPackage.createObject("LTGame","End3X3Ad"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_list = <fgui.GList><any>(this.getChildAt(1));
	}
}