/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_ADDemo from "./UI_ADDemo";
import UI_UIDemo from "./UI_UIDemo";
import UI_Main from "./UI_Main";

export default class MainBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_ADDemo.URL, UI_ADDemo);
		fgui.UIObjectFactory.setExtension(UI_UIDemo.URL, UI_UIDemo);
		fgui.UIObjectFactory.setExtension(UI_Main.URL, UI_Main);
	}
}