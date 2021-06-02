import View_OtherGames from "../DefaultUI/Cmp/View_OtherGames";
import View_HotGame from "../DefaultUI/Cmp/View_HotGame";
import { View_NativeInPage } from "../DefaultUI/Cmp/View_NativeInpage";
import { View_NativeIcon } from "../DefaultUI/Cmp/View_NativeIcon";
import View_BottomGames from "../DefaultUI/Cmp/View_BottomGames";
import View_SideGames from "../DefaultUI/Cmp/View_SideGames";
import View_EndSlideGames from "../DefaultUI/Cmp/View_EndSlideGames";
import View_WxSideGames from "../DefaultUI/Cmp/View_WxSideGames";
import View_End3X3Games from "../DefaultUI/Cmp/View_End3X3Games";

export class SelfADHelper {

    static InitSelfAD(ui: fgui.GObject) {
        let othergames = View_OtherGames.CreateView(ui['m___othergames']);
        if (othergames) {
            ui['m___othergames'] = othergames.ui;
        } else {
            ui['m___othergames'] = null;
        }

        let hotGame = View_HotGame.CreateView(ui['m___hotgame']);
        if (hotGame) {
            ui['m___hotgame'] = hotGame.ui;
        } else {
            ui['m___hotgame'] = null;
        }

        let nativeinpage = View_NativeInPage.CreateView(ui['m___nativeinpage']);
        if (nativeinpage) {
            ui['m___nativeinpage'] = nativeinpage;
        } else {
            ui['m___nativeinpage'] = null;
        }

        let nativeicon = View_NativeIcon.CreateView(ui['m___nativeicon']);
        if (nativeicon) {
            ui['m___nativeicon'] = nativeicon;
        } else {
            ui['m___nativeicon'] = null;
        }

        let bottomgames = View_BottomGames.CreateView(ui['m___bottomgames']);
        if (bottomgames) {
            ui['m___bottomgames'] = bottomgames.ui;
        } else {
            ui['m___bottomgames'] = null;
        }
        let sidegames = View_SideGames.CreateView(ui['m___sidegames']);
        if (sidegames) {
            ui['m___sidegames'] = sidegames.ui;
        } else {
            ui['m___sidegames'] = null;
        }
        let endslide = View_EndSlideGames.CreateView(ui['m___endSG']);
        if (endslide) {
            ui['m___endSG'] = endslide.ui;
        } else {
            ui['m___endSG'] = null;
        }

        let m___wxSG = View_WxSideGames.CreateView(ui['m___wxSG']);
        if (m___wxSG) {
            ui['m___wxSG'] = m___wxSG.ui;
        } else {
            ui['m___wxSG'] = null;
        }
        let end3x3 = View_End3X3Games.CreateView(ui['m___end3x3']);
        if (end3x3) {
            ui['m___end3x3'] = end3x3.ui;
        } else {
            ui['m___end3x3'] = null;
        }
    }

}