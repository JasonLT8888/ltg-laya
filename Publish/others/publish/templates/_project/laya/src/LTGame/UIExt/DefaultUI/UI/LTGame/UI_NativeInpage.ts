/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_AdInpageComp from "./UI_AdInpageComp";
import UI_btn_normal from "./UI_btn_normal";

export default class UI_NativeInPage extends fgui.GComponent {

	public m_btn_pos:fgui.Controller;
	public m_ad:UI_AdInpageComp;
	public m_btn_close:UI_btn_normal;
	public m_btn_clickad:UI_btn_normal;
	public m_btn_clickadbg:UI_btn_normal;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://75kiu87k92486v";

	public static createInstance():UI_NativeInPage {
		return <UI_NativeInPage><any>(fgui.UIPackage.createObject("LTGame","NativeInPage"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_pos = this.getControllerAt(0);
		this.m_ad = <UI_AdInpageComp><any>(this.getChildAt(0));
		this.m_btn_close = <UI_btn_normal><any>(this.getChildAt(1));
		this.m_btn_clickad = <UI_btn_normal><any>(this.getChildAt(2));
		this.m_btn_clickadbg = <UI_btn_normal><any>(this.getChildAt(3));
		this.m_t0 = this.getTransitionAt(0);
	}
}