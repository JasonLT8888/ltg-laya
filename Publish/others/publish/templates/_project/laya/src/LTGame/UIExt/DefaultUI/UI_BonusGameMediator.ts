import BaseUIMediator from "../FGui/BaseUIMediator"; 
import LTUI from "../LTUI";
import UI_BonusGame from "./UI/LTUI/UI_BonusGame";



export class UI_BonusGameMediator extends BaseUIMediator<UI_BonusGame> {
    private static _instance: UI_BonusGameMediator;
    public get ui(): UI_BonusGame {
        return this._ui;
    }

    public static get instance(): UI_BonusGameMediator {
        if (this._instance == null) {
            this._instance = new UI_BonusGameMediator();
            this._instance._classDefine = UI_BonusGame;
        }
        return this._instance;
    }
    timer: number = 10000;
    playing: boolean = false;
    step: number = 10;
    minValue: number = 10;
    maxValue: number = 100;
    _OnShow() {
        super._OnShow();
        this.playing = false;
        this.ui.m_btn_play.onClick(this, this.onPlay);
        this.ui.m_proHand.value = this.minValue;
        this.ui.m_hand.y = this.ui.m_proHand.height * this.ui.m_proHand.value / 100;
        this.timer = 10000;
        this.ui.m_timer.text = '10.00';
        Laya.timer.loop(50, this, this.minusValue);
        console.log(111);
    }
    onPlay() {
        this.playing = true;
        this.addValue();
        this.ui.m_t0.play();
    }
    addValue() {
        this.ui.m_progress.value += this.step;
        if (this.ui.m_proHand.value < this.maxValue) {
            this.ui.m_proHand.value += this.step;
            this.ui.m_hand.y = this.ui.m_proHand.height * this.ui.m_proHand.value / 100;
        }
    }
    minusValue() {
        if (this.timer <= 0) {
            this.ui.m_btn_play.visible = false;
            this.ui.m_tap.visible = false;
            LTUI.Toast('时间到了哦，下次加油！');
            Laya.timer.clearAll(this);
            Laya.timer.once(1000, this, this.Hide);
            return;
        }


        if (this.playing && this.timer > 0) {
            this.timer -= 50;
            this.ui.m_timer.text = (this.timer / 1000).toFixed(2);
        }
        if (this.ui.m_progress.value > 0 && this.ui.m_progress.value < 99) {
            this.ui.m_progress.value -= 2;
            if (this.ui.m_proHand.value <= this.minValue)
                return;
            this.ui.m_proHand.value -= 2;
            this.ui.m_hand.y = this.ui.m_proHand.height * this.ui.m_proHand.value / 100;
        }
        if (this.ui.m_progress.value >= 99) {
            Laya.timer.clearAll(this);
            this.ui.m_hand.m_win.selectedIndex = 1;

            Laya.timer.loop(50, this, () => {
                this.ui.m_proHand.value -= 5;
                this.ui.m_hand.y = this.ui.m_proHand.height * this.ui.m_proHand.value / 100;
                if (this.ui.m_proHand.value <= 50) {
                    console.error('打开获得皮肤')
                    this.Hide();
                }
            });
        }

    }
    protected _OnHide() {
        Laya.timer.clearAll(this);
    }
}
