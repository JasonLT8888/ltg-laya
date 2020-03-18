import ModelPlayer from "../player/ModelPlayer";
import ResDefine from "../common/ResDefine";
import { LTUtils } from "../../LTGame/LTUtils/LTUtils";
import GlobalUnit from "../common/GlobalUnit";

export default class PlayerManager {

    public mainPlayer: ModelPlayer;

    public Preload(urls: string[]) {
        urls.push(ResDefine.FixPath(ResDefine.player_path));
    }

    public CreatePlayer() {
        let getPlayer = LTUtils.GetRes(ResDefine.FixPath(ResDefine.player_path));
        GlobalUnit.s3d.addChild(getPlayer);
        this.mainPlayer = new ModelPlayer(getPlayer);
    }

    public LogicUpdate(dt: number) {
        this.mainPlayer.LogicUpdate(dt);
    }

    public ClearPlayer() {
        
    }

}