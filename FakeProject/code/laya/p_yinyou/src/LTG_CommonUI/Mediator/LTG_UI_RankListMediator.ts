import LTPlatform from "../../LTGame/Platform/LTPlatform";
import BaseUIMediator from "../../LTGame/UIExt/FGui/BaseUIMediator";
import LTUI from "../../LTGame/UIExt/LTUI";
import LTSDK from "../../SDK/LTSDK";
import LTG_UI_RankList from "../UI/LTCom/LTG_UI_RankList";
import GameData from "../../script/common/GameData";
import MathEx from "../../LTGame/LTUtils/MathEx";
import { EOpenDataMethod } from "../../LTGame/Platform/Impl/OpenDataContext";
/**
     *  排行榜默认key：maxscore
     */
export class LTG_UI_RankListMediator extends BaseUIMediator<LTG_UI_RankList> {
    private static _instance: LTG_UI_RankListMediator;
    public get ui(): LTG_UI_RankList {
        return this._ui;
    }

    public static get instance(): LTG_UI_RankListMediator {
        if (this._instance == null) {
            this._instance = new LTG_UI_RankListMediator();
            this._instance._classDefine = LTG_UI_RankList;
        }
        return this._instance;
    }
    opendataView: Laya.WXOpenDataViewer;
    sharedCanvas: any;
    private maxScore: number = 0;

    _OnShow() {
        super._OnShow();
        this.ui.m_btn_close.onClick(this, this.Hide);
        this.ui.m_btn_pre.onClick(this, this._onClickPrePage);
        this.ui.m_btn_next.onClick(this, this._onClickNextPage);
        // this.ui.m_btn_report.onClick(this, this._onClickReport);
        this.opendataView = new Laya.WXOpenDataViewer();
        this.opendataView.width = this.ui.m_openView.width;
        this.opendataView.height = this.ui.m_openView.height;
        this.opendataView.x = this.ui.m_openView.x;
        this.opendataView.y = this.ui.m_openView.y;
        this.ui.m_openView.visible = false;
        this.ui.displayObject.addChild(this.opendataView);

        let testscore = MathEx.RandomInt(1, 100);

        console.error("测试排行榜");
        this.getSelfScore();
        this.updateMaxScore(testscore);
        this.initRankList();
    }

    async  initRankList() {
        LTPlatform.instance.openDataContext.postMsg({ method: EOpenDataMethod.resize, width: Laya.stage.width, height: Laya.stage.height, rankSuffix: "次" });
        LTPlatform.instance.openDataContext.postMsg({
            method: EOpenDataMethod.getFriendRankData, userId: LTSDK.instance.uid, index: 1, pageNum: 7
        });
        LTUI.ShowLoading("加载中");
        Laya.timer.once(1500, this, () => {
            LTUI.HideLoading();
            LTPlatform.instance.openDataContext.postMsg({ method: EOpenDataMethod.showFriendRank, userId: LTSDK.instance.uid, index: 1, pageNum: 7 });
        });
    }
    _onClickPrePage() {
        LTPlatform.instance.openDataContext.postMsg({ method: EOpenDataMethod.changePage, userId: LTSDK.instance.uid, page: -1, pageNum: 7 });
    }
    _onClickNextPage() {
        LTPlatform.instance.openDataContext.postMsg({ method: EOpenDataMethod.changePage, userId: LTSDK.instance.uid, page: 1, pageNum: 7 });
    }
    getSelfScore() {
        // LTPlatform.instance.openDataContext.postMsg({
        //     method: EOpenDataMethod.getSelfScore, userId: LTSDK.instance.uid, callback: (e) => {
        //         console.log(e);
        //     }
        // });
        this.maxScore = GameData.instance.maxScore;
    }
    protected _OnHide() {
        if (this.opendataView) {
            this.opendataView.destroy();
        }
    }
    updateMaxScore(score: number) {
        if (score < this.maxScore) {
            return console.log("当前分数小于最大分数——不记录");
        } else {
            GameData.instance.maxScore = score;
            GameData.SaveToDisk();
        }
        LTPlatform.instance.openDataContext.postMsg({
            method: EOpenDataMethod.updateMaxScore,
            maxscore: score,
            maxscore2: 0,
            userId: LTSDK.instance.uid
        });
    }
}
