/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_view_fly_coin extends fgui.GComponent {

	public m_icon:fgui.GLoader;

	public static URL:string = "ui://75kiu87kh75rh";

	public static createInstance():UI_view_fly_coin {
		return <UI_view_fly_coin><any>(fgui.UIPackage.createObject("LTGame","view_fly_coin"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(0));
	}
}