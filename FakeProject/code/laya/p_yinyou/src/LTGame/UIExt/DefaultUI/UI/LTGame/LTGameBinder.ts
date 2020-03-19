/** This is an automatically generated class by FairyGUI. Please do not modify it. **/

import UI_FakeBanner_V from "./UI_FakeBanner_V";
import UI_CommomToast from "./UI_CommomToast";
import UI_view_toast from "./UI_view_toast";
import UI_FakeRewardVideo from "./UI_FakeRewardVideo";
import UI_FakeInterstital from "./UI_FakeInterstital";

export default class LTGameBinder{
	public static bindAll():void {
		fgui.UIObjectFactory.setExtension(UI_FakeBanner_V.URL, UI_FakeBanner_V);
		fgui.UIObjectFactory.setExtension(UI_CommomToast.URL, UI_CommomToast);
		fgui.UIObjectFactory.setExtension(UI_view_toast.URL, UI_view_toast);
		fgui.UIObjectFactory.setExtension(UI_FakeRewardVideo.URL, UI_FakeRewardVideo);
		fgui.UIObjectFactory.setExtension(UI_FakeInterstital.URL, UI_FakeInterstital);
	}
}