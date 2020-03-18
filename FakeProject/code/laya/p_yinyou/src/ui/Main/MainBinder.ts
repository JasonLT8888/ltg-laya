/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_Fight from "./UI_Fight";
import UI_Main from "./UI_Main";
import UI_Load from "./UI_Load";
import UI_Dead from "./UI_Dead";
import UI_Pass from "./UI_Pass";

export default class MainBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_Fight.URL, UI_Fight);
		fgui.UIObjectFactory.setExtension(UI_Main.URL, UI_Main);
		fgui.UIObjectFactory.setExtension(UI_Load.URL, UI_Load);
		fgui.UIObjectFactory.setExtension(UI_Dead.URL, UI_Dead);
		fgui.UIObjectFactory.setExtension(UI_Pass.URL, UI_Pass);
	}
}