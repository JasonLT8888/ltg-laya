/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

export default class UI_btnGames extends fgui.GButton {

	public m_red:fgui.GImage;
	public m_t0:fgui.Transition;
	public static URL:string = "ui://75kiu87kr1gt70";

	public static createInstance():UI_btnGames {
		return <UI_btnGames>(fgui.UIPackage.createObject("LTGame", "btnGames"));
	}

	protected onConstruct():void {
		this.m_red = <fgui.GImage>(this.getChildAt(1));
		this.m_t0 = this.getTransitionAt(0);
	}
}