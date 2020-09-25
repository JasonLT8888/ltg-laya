/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class LTG_UI_view_enter_code extends fgui.GComponent {

	public m_text_code:fgui.GTextInput;
	public m_btn_duihuan:fgui.GButton;

	public static URL:string = "ui://hbq27te3n2g16q";

	public static createInstance():LTG_UI_view_enter_code {
		return <LTG_UI_view_enter_code><any>(fgui.UIPackage.createObject("LTCom","view_enter_code"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_text_code = <fgui.GTextInput><any>(this.getChildAt(2));
		this.m_btn_duihuan = <fgui.GButton><any>(this.getChildAt(3));
	}
}