/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_NativeInterAd from "./UI_NativeInterAd";
import UI_btn_normal from "./UI_btn_normal";

export default class UI_NativeInterstitial_01 extends fgui.GComponent {

	public m_landscape:fgui.Controller;
	public m_ad:UI_NativeInterAd;
	public m_btn_close:UI_btn_normal;
	public m_t0:fgui.Transition;

	public static URL:string = "ui://75kiu87kocvx6r";

	public static createInstance():UI_NativeInterstitial_01 {
		return <UI_NativeInterstitial_01><any>(fgui.UIPackage.createObject("LTGame","NativeInterstitial_01"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_landscape = this.getControllerAt(0);
		this.m_ad = <UI_NativeInterAd><any>(this.getChildAt(1));
		this.m_btn_close = <UI_btn_normal><any>(this.getChildAt(2));
		this.m_t0 = this.getTransitionAt(0);
	}
}