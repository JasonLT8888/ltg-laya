/** This is an automatically generated class by FairyGUI. Please do not modify it. **/



export default class UI_BoneAnimTest extends fgui.GComponent {

	public m_btn_back:fgui.GButton;
	public m_text_input:fgui.GTextInput;
	public m_btn_add:fgui.GButton;
	public m_text_total:fgui.GTextField;

	public static URL:string = "ui://kk7g5mmmmzx7i";

	public static createInstance():UI_BoneAnimTest {
		return <UI_BoneAnimTest><any>(fgui.UIPackage.createObject("Main","BoneAnimTest"));
	}

	public constructor() {
		super();
	}

	protected onConstruct(): void {
		this.m_btn_back = <fgui.GButton><any>(this.getChildAt(0));
		this.m_text_input = <fgui.GTextInput><any>(this.getChildAt(1));
		this.m_btn_add = <fgui.GButton><any>(this.getChildAt(3));
		this.m_text_total = <fgui.GTextField><any>(this.getChildAt(4));
	}
}