import * as path from 'path';
import * as process from 'process';
import CommonConfig from 'Config/CommonConfig';
import { LTUtils } from 'Utils/LTUtils';
import { EFileType } from 'Config/EFileType';

/**
 * 更新项目内的框架内容
 * 详见CommonConfig.ts
 */
class UpdateProject {

    constructor() {
        // D:\Work_Projects\ltg-laya\FakeProject\code\laya\p_yinyou
        let currentWorkPath = process.cwd();
        let srcPath = path.join(currentWorkPath, './others/publish/templates/_project/laya');
        let targetPath = currentWorkPath;

        console.log("开始更新框架内容");

        for (let value of CommonConfig.needCopy) {
            let combieSrc = path.join(srcPath, value);
            let fileType = LTUtils.IsFileOrDir(combieSrc);
            if (fileType == EFileType.NotExist) {
                console.log(combieSrc, "不存在");
                continue;
            }
            let combieTarget = path.join(targetPath, value);
            if (fileType == EFileType.File) {
                LTUtils.CopyFile(combieSrc, combieTarget);
            } else {
                LTUtils.CopyDir(combieSrc, combieTarget);
            }
            console.log("拷贝", combieSrc, "完成");
        }

        console.log("更新框架完成");
    }

}

new UpdateProject();