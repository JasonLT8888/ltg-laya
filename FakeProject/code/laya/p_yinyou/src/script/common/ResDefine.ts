export default class ResDefine {

    static camera_path = "main_camera";
    static light_path = "default_light";
    static floor_path = "follow_floor";
    static player_path = "player";

    static FixPath(filePath: string) {
        return "res/export/Conventional/" + filePath + ".lh";
    }

}