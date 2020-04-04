/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_CommonLockScreen extends fgui.GComponent {

	public m_bg:fgui.GGraph;

	public static URL:string = "ui://75kiu87ki2wq2s";

	public static createInstance():UI_CommonLockScreen {
		return <UI_CommonLockScreen><any>(fgui.UIPackage.createObject("LTGame","CommonLockScreen"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_bg = <fgui.GGraph><any>(this.getChildAt(0));
	}
}