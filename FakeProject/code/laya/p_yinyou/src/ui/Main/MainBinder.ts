/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_CommonUI from "./UI_CommonUI";
import UI_ADDemo from "./UI_ADDemo";
import UI_UIDemo from "./UI_UIDemo";
import UI_Main from "./UI_Main";
import UI_PerfomanceDemo from "./UI_PerfomanceDemo";
import UI_BoneAnimTest from "./UI_BoneAnimTest";
import UI_MoudleDemo from "./UI_MoudleDemo";
import UI_RecordDemo from "./UI_RecordDemo";
import UI_Others from "./UI_Others";

export default class MainBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_CommonUI.URL, UI_CommonUI);
		fgui.UIObjectFactory.setExtension(UI_ADDemo.URL, UI_ADDemo);
		fgui.UIObjectFactory.setExtension(UI_UIDemo.URL, UI_UIDemo);
		fgui.UIObjectFactory.setExtension(UI_Main.URL, UI_Main);
		fgui.UIObjectFactory.setExtension(UI_PerfomanceDemo.URL, UI_PerfomanceDemo);
		fgui.UIObjectFactory.setExtension(UI_BoneAnimTest.URL, UI_BoneAnimTest);
		fgui.UIObjectFactory.setExtension(UI_MoudleDemo.URL, UI_MoudleDemo);
		fgui.UIObjectFactory.setExtension(UI_RecordDemo.URL, UI_RecordDemo);
		fgui.UIObjectFactory.setExtension(UI_Others.URL, UI_Others);
	}
}