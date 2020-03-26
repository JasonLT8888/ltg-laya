/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_view_item_try_skin extends fgui.GComponent {

	public m_icon:fgui.GLoader;

	public static URL:string = "ui://75kiu87kbg0022";

	public static createInstance():UI_view_item_try_skin {
		return <UI_view_item_try_skin><any>(fgui.UIPackage.createObject("LTGame","view_item_try_skin"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(1));
	}
}