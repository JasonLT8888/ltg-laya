export default class ResDefine {

    static FixPath(filePath: string) {
        return "res/export/Conventional/" + filePath + ".lh";
    }

    static FixScene(scenePath: string) {
        return "res/export/Conventional/" + scenePath + ".ls";
    }

}