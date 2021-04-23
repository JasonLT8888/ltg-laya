import StringEx from "../../LTGame/LTUtils/StringEx";

export default class ResDefine {

    static FixPath(filePath: string) {
        if (StringEx.IsNullOrEmpty(filePath)) {
            console.error("传入参数为空");
            return null;
        }
        return "res/export/Conventional/" + filePath + ".lh";
    }

    static FixScene(scenePath: string) {
        if (StringEx.IsNullOrEmpty(scenePath)) {
            console.error("传入参数为空");
            return null;
        }
        return "res/export/Conventional/" + scenePath + ".ls";
    }

}