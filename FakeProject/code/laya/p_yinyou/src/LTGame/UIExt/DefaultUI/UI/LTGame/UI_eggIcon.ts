/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_eggIcon extends fgui.GComponent {

	public m_lockState:fgui.Controller;
	public m_selected:fgui.Controller;
	public m_icon:fgui.GLoader;

	public static URL:string = "ui://75kiu87kdywvb8";

	public static createInstance():UI_eggIcon {
		return <UI_eggIcon><any>(fgui.UIPackage.createObject("LTGame","eggIcon"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_lockState = this.getControllerAt(0);
		this.m_selected = this.getControllerAt(1);
		this.m_icon = <fgui.GLoader><any>(this.getChildAt(4));
	}
}