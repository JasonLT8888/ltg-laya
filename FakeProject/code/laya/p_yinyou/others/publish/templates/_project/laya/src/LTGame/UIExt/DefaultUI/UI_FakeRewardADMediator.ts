import BaseUIMediator from "../FGui/BaseUIMediator";
import UI_FakeRewardVideo from "./UI/LTGame/UI_FakeRewardVideo";

export default class UI_FakeRewardADMediator extends BaseUIMediator<UI_FakeRewardVideo> {

    private static _instance: UI_FakeRewardADMediator;
    public static get instance(): UI_FakeRewardADMediator {
        if (this._instance == null) {
            this._instance = new UI_FakeRewardADMediator();
            this._instance._classDefine = UI_FakeRewardVideo;
        }
        return this._instance;
    }

    private _rewardHandle: Laya.Handler;
    private _skipHandle: Laya.Handler;
    _sortOrder = Number.MAX_SAFE_INTEGER;

    _OnShow() {
        super._OnShow();
        // your code

        this._rewardHandle = this._openParam[0];
        this._skipHandle = this._openParam[1];

        this.ui.m_btn_reward.onClick(this, this._OnClickReward);
        this.ui.m_btn_skip.onClick(this, this._OnClickSkip);
    }

    private _OnClickReward() {
        this.Hide();
        if (this._rewardHandle) {
            this._rewardHandle.run();
        }
    }

    private _OnClickSkip() {
        this.Hide();
        if (this._skipHandle) {
            this._skipHandle.run();
        }
    }

}