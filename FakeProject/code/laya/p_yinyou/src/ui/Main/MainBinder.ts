/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_CommonUI from "./UI_CommonUI";
import UI_ADDemo from "./UI_ADDemo";
import UI_UIDemo from "./UI_UIDemo";
import UI_TestRT from "./UI_TestRT";
import UI_Main from "./UI_Main";
import UI_PerfomanceDemo from "./UI_PerfomanceDemo";
import UI_BoneAnimTest from "./UI_BoneAnimTest";
import UI_NativeDemo from "./UI_NativeDemo";
import UI_MoudleDemo from "./UI_MoudleDemo";
import UI_CommonUI2 from "./UI_CommonUI2";
import UI_RecordDemo from "./UI_RecordDemo";
import UI_Others from "./UI_Others";
import UI_FunctionTest from "./UI_FunctionTest";
import UI_Test from "./UI_Test";

export default class MainBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_CommonUI.URL, UI_CommonUI);
		fgui.UIObjectFactory.setExtension(UI_ADDemo.URL, UI_ADDemo);
		fgui.UIObjectFactory.setExtension(UI_UIDemo.URL, UI_UIDemo);
		fgui.UIObjectFactory.setExtension(UI_TestRT.URL, UI_TestRT);
		fgui.UIObjectFactory.setExtension(UI_Main.URL, UI_Main);
		fgui.UIObjectFactory.setExtension(UI_PerfomanceDemo.URL, UI_PerfomanceDemo);
		fgui.UIObjectFactory.setExtension(UI_BoneAnimTest.URL, UI_BoneAnimTest);
		fgui.UIObjectFactory.setExtension(UI_NativeDemo.URL, UI_NativeDemo);
		fgui.UIObjectFactory.setExtension(UI_MoudleDemo.URL, UI_MoudleDemo);
		fgui.UIObjectFactory.setExtension(UI_CommonUI2.URL, UI_CommonUI2);
		fgui.UIObjectFactory.setExtension(UI_RecordDemo.URL, UI_RecordDemo);
		fgui.UIObjectFactory.setExtension(UI_Others.URL, UI_Others);
		fgui.UIObjectFactory.setExtension(UI_FunctionTest.URL, UI_FunctionTest);
		fgui.UIObjectFactory.setExtension(UI_Test.URL, UI_Test);
	}
}