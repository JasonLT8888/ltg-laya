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
        console.log("开始更新框架内容");
        this._CopyLaya(currentWorkPath);

        console.log("更新框架完成");
    }

    private _CopyUnity(currentWorkPath: string) {
        let projectName = LTUtils.GetDirName(currentWorkPath);
        let srcPath = path.join(currentWorkPath, './others/publish/templates/_project/unity');
        let targetPath = path.join(currentWorkPath, './../../unity/' + projectName + '/');

        for (let value of CommonConfig.needCopyUnity) {
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
    }

    private _CopyLaya(currentWorkPath: string) {
        let srcPath = path.join(currentWorkPath, './others/publish/templates/_project/laya');
        let targetPath = currentWorkPath;
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
    }

}

new UpdateProject();